/**
 * Real, unaliased Fourier-Galerkin Navier-Stokes trajectory generator.
 * uhat_k = i*a_k with real a; full positive and negative modes are retained.
 * Domain (R/2pi Z)^3, viscosity 1. This is floating point, NOT a certificate.
 */

export function modesFor(cutoff) {
  if (!Number.isInteger(cutoff) || cutoff < 1) {
    throw new Error('Fourier cutoff must be a positive integer.');
  }
  const modes = [];
  for (let x = -cutoff; x <= cutoff; x++) {
    for (let y = -cutoff; y <= cutoff; y++) {
      for (let z = -cutoff; z <= cutoff; z++) {
        const square = x*x + y*y + z*z;
        if (square > 0 && square <= cutoff*cutoff) modes.push([x,y,z]);
      }
    }
  }
  return modes;
}

function systemFor(cutoff) {
  const modes = modesFor(cutoff);
  const count = modes.length;
  const index = new Map(modes.map((k,i) => [k.join(','),i]));
  const square = modes.map(k => k[0]*k[0]+k[1]*k[1]+k[2]*k[2]);
  const negatives = modes.map(k => index.get(k.map(v => -v).join(',')));
  const pairs = [];
  // Actual integer-vector addition; no FFT, wrapping or circular convolution.
  for (let p = 0; p < count; p++) {
    for (let q = 0; q < count; q++) {
      const kp = modes[p], kq = modes[q];
      const destination = index.get([kp[0]+kq[0],kp[1]+kq[1],kp[2]+kq[2]].join(','));
      if (destination !== undefined) pairs.push([p,q,destination]);
    }
  }
  function rhs(a) {
    const result = new Float64Array(3*count);
    for (let pair = 0; pair < pairs.length; pair++) {
      const [p,q,k] = pairs[pair];
      const qmode = modes[q];
      const dot = a[3*p]*qmode[0]+a[3*p+1]*qmode[1]+a[3*p+2]*qmode[2];
      result[3*k] += dot*a[3*q];
      result[3*k+1] += dot*a[3*q+1];
      result[3*k+2] += dot*a[3*q+2];
    }
    for (let k = 0; k < count; k++) {
      const mode = modes[k];
      const dotOverSquare = (mode[0]*result[3*k]+mode[1]*result[3*k+1]
                              +mode[2]*result[3*k+2])/square[k];
      for (let j = 0; j < 3; j++) {
        result[3*k+j] -= mode[j]*dotOverSquare + square[k]*a[3*k+j];
      }
    }
    return result;
  }
  function initial(kind) {
    const a = new Float64Array(3*count);
    const components = kind === 'shear' ? [[[0,1,0],0]]
      : [[[0,0,1],0],[[1,0,0],1],[[0,1,0],2]];
    for (const [mode,j] of components) {
      a[3*index.get(mode.join(','))+j] = -0.5;
      a[3*index.get(mode.map(v=>-v).join(','))+j] = 0.5;
    }
    return a;
  }
  return {modes,count,square,negatives,pairs,rhs,initial};
}

/** sqrt(spatial mean of |u|^2), by Parseval with the stated Fourier convention. */
export function sampleNormalizedL2(a, modes) {
  if (a.length !== 3*modes.length) throw new Error('Coefficient shape mismatch.');
  let sum = 0;
  for (const value of a) sum += value*value;
  return Math.sqrt(sum);
}

function measure(a, system) {
  let A0 = 0, A1 = 0, energy = 0, dissipation = 0;
  let maxDivergence = 0, maxRealityDefect = 0, energyDerivative = 0;
  const derivative = system.rhs(a);
  for (let k = 0; k < system.count; k++) {
    const mode = system.modes[k];
    let lengthSquared = 0, divergence = 0;
    for (let j = 0; j < 3; j++) {
      const value = a[3*k+j];
      lengthSquared += value*value;
      divergence += mode[j]*value;
      maxRealityDefect = Math.max(maxRealityDefect,
        Math.abs(value+a[3*system.negatives[k]+j]));
      energyDerivative += value*derivative[3*k+j];
    }
    A0 += Math.sqrt(lengthSquared);
    A1 += Math.sqrt(system.square[k]*lengthSquared);
    energy += lengthSquared/2;
    dissipation += system.square[k]*lengthSquared;
    maxDivergence = Math.max(maxDivergence,Math.abs(divergence));
  }
  return {A0,A1,normalizedL2:Math.sqrt(2*energy),energy,
    maxDivergence,maxRealityDefect,viscousDissipation:dissipation,
    energyDerivative,energyIdentityAbsResidual:Math.abs(energyDerivative+dissipation)};
}

function offset(a, k, scale) {
  const out = new Float64Array(a.length);
  for (let i = 0; i < a.length; i++) out[i] = a[i]+scale*k[i];
  return out;
}

/**
 * Compute an actual RK4 Galerkin trajectory, suitable for running in a Worker.
 * frames[t] is a Float64Array of length 3*modes.length storing a_k.
 * Only the declared fixed experiment options are accepted by this UI engine.
 */
export function solve({cutoff=3,stepDenominator=128,T=0.25,initial='W'}={}) {
  if (![2,3].includes(cutoff)) throw new Error('Choose cutoff 2 or 3.');
  if (![64,128].includes(stepDenominator)) throw new Error('Choose 64 or 128 time divisions.');
  if (T !== 0.25) throw new Error('This experiment is scoped to T=0.25.');
  if (!['W','shear'].includes(initial)) throw new Error('Unknown initial field.');
  const system = systemFor(cutoff);
  const dt = 1/stepDenominator;
  const steps = T*stepDenominator;
  const frames = [system.initial(initial)];
  const times = [0];
  const diagnostics = [measure(frames[0],system)];
  for (let step = 0; step < steps; step++) {
    const a = frames[step];
    const k1 = system.rhs(a);
    const k2 = system.rhs(offset(a,k1,dt/2));
    const k3 = system.rhs(offset(a,k2,dt/2));
    const k4 = system.rhs(offset(a,k3,dt));
    const next = new Float64Array(a.length);
    for (let i = 0; i < a.length; i++) {
      next[i] = a[i]+dt*(k1[i]+2*k2[i]+2*k3[i]+k4[i])/6;
    }
    frames.push(next);
    times.push((step+1)*dt);
    diagnostics.push(measure(next,system));
  }
  return {status:'NUMERICAL_TRAJECTORY_NOT_CERTIFICATE',cutoff,stepDenominator,
    T,dt,initial,modes:system.modes,times,frames,diagnostics,
    orderedInteriorPairs:system.pairs.length};
}

/** Evaluate the full trigonometric polynomial at any x,y,z (radians). */
export function evaluateVelocity(a,modes,x,y,z) {
  const velocity = [0,0,0];
  for (let k = 0; k < modes.length; k++) {
    const mode = modes[k];
    const scale = -Math.sin(mode[0]*x+mode[1]*y+mode[2]*z);
    for (let j = 0; j < 3; j++) velocity[j] += scale*a[3*k+j];
  }
  return velocity;
}

/** Samples an x-y slice at fixed z. Vectors include all three components. */
export function evaluateSlice(a,modes,{z=0,resolution=16}={}) {
  const points = [];
  for (let iy = 0; iy < resolution; iy++) {
    for (let ix = 0; ix < resolution; ix++) {
      const x=2*Math.PI*ix/resolution,y=2*Math.PI*iy/resolution;
      points.push({x,y,z,velocity:evaluateVelocity(a,modes,x,y,z)});
    }
  }
  return points;
}
