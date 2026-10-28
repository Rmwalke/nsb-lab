import { solve } from './solver-engine.js';
self.onmessage = async event => {
 if (event.data?.type !== 'solve') return;
 try {
  const options = event.data.options;
  if (![2,3].includes(options?.cutoff) || ![64,128].includes(options?.stepDenominator) || options.T !== 0.25) throw new Error('Unsupported benchmark settings.');
  const result = await solve({cutoff:options.cutoff,stepDenominator:options.stepDenominator,T:0.25});
  self.postMessage({type:'result',result});
 } catch (error) {
  self.postMessage({type:'error',message:error?.message || String(error)});
 }
};
