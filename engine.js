// Exact rational arithmetic for a finite, conditional certificate audit.
// This module does not verify the analytic enclosures or solve the PDE.
export class Q {
  constructor(n,d=1n){ n=BigInt(n); d=BigInt(d); if(d===0n)throw Error('Zero denominator'); if(d<0n){n=-n;d=-d;} let a=n<0n?-n:n,b=d; while(b){[a,b]=[b,a%b];} this.n=n/(a||1n);this.d=d/(a||1n); }
  static of(x){if(x instanceof Q)return x;const p=String(x).split('/');if(p.length>2)throw Error('Invalid fraction');return new Q(p[0],p[1]||1);}
  static decimal(x){if(!/^[+-]?\d+(\.\d{1,12})?$/.test(x))throw Error('Use a decimal number, with up to 12 decimal places.');const neg=x[0]==='-',t=x.replace(/^[+-]/,''),p=t.split('.');return new Q((neg?'-':'')+p[0]+(p[1]||''),10n**BigInt((p[1]||'').length));}
  add(y){y=Q.of(y);return new Q(this.n*y.d+y.n*this.d,this.d*y.d);}
  sub(y){y=Q.of(y);return new Q(this.n*y.d-y.n*this.d,this.d*y.d);}
  mul(y){y=Q.of(y);return new Q(this.n*y.n,this.d*y.d);}
  div(y){y=Q.of(y);return new Q(this.n*y.d,this.d*y.n);}
  abs(){return new Q(this.n<0n?-this.n:this.n,this.d);}
  cmp(y){y=Q.of(y);const v=this.n*y.d-y.n*this.d;return v<0n?-1:v>0n?1:0;}
  value(){if(!this.n)return 0;const a=(this.n<0n?-this.n:this.n).toString(),b=this.d.toString();const k=Math.min(15,a.length),l=Math.min(15,b.length);return (this.n<0n?-1:1)*Number(a.slice(0,k))/Number(b.slice(0,l))*10**(a.length-k-b.length+l);}
  toString(){return this.d===1n?String(this.n):`${this.n}/${this.d}`;}
}
export function prepare(data){return {...data,c:Q.of(data.c),V:data.V.map(Q.of),d:data.d.map(Q.of),s:data.s.map(Q.of),rho:data.rho.map(Q.of),K:data.K.map(r=>r.map(Q.of)),prefix:data.prefix.map(r=>r.map(Q.of))};}
export function audit(data,{amplitude='0.0001',waveNumber=1,halveFirstRadius=false}={}){
  if(!Number.isInteger(waveNumber)||waveNumber<1||waveNumber>64)throw Error('Wave number must be an integer from 1 to 64.');
  const a=Q.decimal(amplitude);if(a.abs().cmp('1')>0)throw Error('Amplitude must lie between -1 and 1.');
  const eps=a.abs().div(waveNumber),rho=[...data.rho];if(halveFirstRadius)rho[0]=rho[0].div(2);
  const E=[data.s.map(x=>eps.mul(x))];
  for(let m=0;m<3;m++)E.push(data.s.map((s,i)=>{
    let sum=new Q(0n);for(let j=0;j<=i;j++)sum=sum.add(data.K[i][j].mul(data.prefix[m][j].mul(2).mul(E[m][j]).add(E[m][j].mul(E[m][j]))));
    return eps.mul(s).add(data.c.mul(sum));
  }));
  const rows=data.V.map((v,i)=>{
    let sum=new Q(0n);for(let j=0;j<=i;j++)sum=sum.add(data.K[i][j].mul(data.V[j].mul(2).mul(rho[j]).add(rho[j].mul(rho[j]))));
    const lhs=data.d[i].add(eps.mul(data.s[i])).add(data.c.mul(sum));
    const inv=rho[i].sub(lhs),entry=rho[i].sub(E[3][i]);
    return {block:i+1,left:data.grid[i],right:data.grid[i+1],radius:String(rho[i]),invarianceMargin:String(inv),entryMargin:String(entry),freshE3:String(E[3][i]),entryRatio:E[3][i].div(rho[i]).value(),invariancePass:inv.cmp(0)>=0,entryPass:entry.cmp(0)>0};
  });
  const inside=eps.cmp('1/10000')<=0,invCount=rows.filter(r=>r.invariancePass).length,entryCount=rows.filter(r=>r.entryPass).length;
  const min=rows.map(r=>Q.of(r.invarianceMargin)).reduce((a,b)=>a.cmp(b)<0?a:b);
  return {schema:'nsb-lab-1',scope:'Finite invariance and third-iterate-entry arithmetic only, conditional on the archived analytic enclosures. Not a PDE solver or a full proof verifier.',sourceCommit:data.sourceCommit,input:{amplitude,waveNumber,perturbationNorm:String(eps),halveFirstRadius},insidePublishedClass:inside,invariancePassCount:invCount,entryPassCount:entryCount,allFiniteChecksPass:invCount===17&&entryCount===17,minimumInvarianceMargin:String(min),maximumEntryRatio:Math.max(...rows.map(r=>r.entryRatio)),rows};
}
