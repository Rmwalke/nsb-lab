const $ = id => document.getElementById(id);
const english = Object.fromEntries([...document.querySelectorAll('[data-i]')].map(el => [el.dataset.i, el.innerHTML]));
const marathi = {
 oldLab:'Picard तपासणी ↗',eyebrow:'संगणकावर चालणारा द्रवप्रवाहाचा प्रयोग',title:'प्रवाह पाहा.<br>गणनेची त्रुटी मोजा.',intro:'Navier–Stokesची प्रत्यक्ष numerical गणना चालवून पाहा. गणनेची सूक्ष्मता बदला, बदलणारा प्रवाह पाहा आणि साठवलेल्या चार संदर्भ गणनांच्या त्रुटीवरील सीमा तुलना करा.',research:'संशोधन:',oneCase:'एक ठरावीक चाचणी',caseText:'2π-आवर्ती क्षेत्रातील बाह्य बल नसलेला 3D प्रवाह.<br>Viscosity ν = 1 · वेळ 0 ≤ t ≤ 0.25.',casePill:'तोच सुरुवातीचा प्रवाह · चार प्रकारच्या गणना',choose:'गणनेची सूक्ष्मता निवडा',chooseHelp:'Nनुसार |k| ≤ N असलेले Fourier modes घेतले जातात. वेळेचे पाऊल लहान केल्यास गणनेचे टप्पे वाढतात.',loading:'संदर्भ गणना उघडत आहे…',retainedModes:'गणनेत घेतलेले wave modes',timeSteps:'वेळेचे टप्पे',run:'ही गणना चालवा →',cancel:'गणना थांबवा',runHelp:'Floating-point solver तुमच्या browserमध्ये चालतो. खाते आवश्यक नाही.',viewLabel:'स्क्रीनवर दिसणारी गणना',reference:'साठवलेला संदर्भ',live:'Browserमधील गणना',caseReport:'या गणनेचे प्रमाणपत्र वाचा ↗',rawReport:'अचूक अहवाल डाउनलोड ↓',observe:'गणनेतील प्रवाह पाहा',sliceTitle:'3D प्रवाहातील एक छेद',sliceCaption:'बाण x–y दिशेचा वेग दाखवतात. रंग छेदातून जाणारा वेग u_z दाखवतो. गणनेत वेगाचे तिन्ही घटक आहेत.',colourNote:'रंगांची निश्चित मापनपट्टी',time:'वेळ',timeHelp:'चित्र गणनेच्या साठवलेल्या टप्प्यांवर पुढे जाते. हे संख्यात्मक दृश्य आहे; स्वतः गणिती पुरावा नाही.',liveDifferenceLabel:'या वेळी: browserची गणना − साठवलेला संदर्भ',liveDifferenceHelp:'Normalized spatial L² मधील प्रायोगिक फरक. ही दोन अंदाजांची तुलना आहे; browserच्या गणनेच्या त्रुटीची कठोर गणिती सीमा नाही.',boundHeading:'त्रुटीची सीमा तपासा',boundLabel:'फक्त साठवलेल्या अचूक-भिन्न संदर्भासाठी',boundSubtitle:'Normalized spatial L² वेग-त्रुटी<br>(सदिश वेगाच्या त्रुटीचे root-mean-square)',boundExplanation:'प्रमाणपत्रातील अटी व reconstructionनुसार, ही सीमा साठवलेल्या rational संदर्भाची या प्रारंभिक-मूल्य प्रश्नाच्या कोणत्याही Leray–Hopf energy solutionशी तुलना करते.',liveBoundNotice:'आता नवीन browser गणना दिसत आहे. वरील सीमा साठवलेल्या संदर्भालाच लागू आहे; ती या floating-point गणनेला आपोआप लागू होत नाही.',boundDetails:'या सीमेत काय धरले आहे?',included:'साठवलेल्या reconstructionचा पूर्ण residual अचूक अपूर्णांकांनी मोजला आहे. Solver cutoffबाहेरील modesही धरले आहेत. त्यावर प्रचलित energy-stability estimate वापरला आहे.',excluded:'ही मर्यादित कालावधीतील spatial L² सीमा आहे. ती प्रत्येक बिंदूवरील त्रुटी, टक्केवारीतील त्रुटी किंवा सर्वसाधारण global-regularityचा निकाल नाही. पेपरमधील X-normचा दावा वेगळा आहे.',method:'गणिती पद्धत वाचा ↗',chartHeading:'वेळेनुसार त्रुटीची सीमा',chartHelp:'प्रत्येक पायरी त्या कालावधीच्या शेवटची सीमा पूर्ण कालावधीसाठी वापरते. साठवलेली वेळ निवडल्यावर त्या टप्प्याच्या शेवटची सीमा पाहता येते.',chartKey:'साठवलेल्या rational संदर्भाच्या त्रुटीची वरची सीमा',rounding:'प्रदर्शनातील सीमा वरच्या दिशेने गोल केल्या आहेत. आलेख व गुणोत्तरे अंदाजित दशांश वापरतात; अचूक मूल्ये डाउनलोड अहवालात आहेत.',compareEyebrow:'गणना सूक्ष्म केल्याचा परिणाम',compareTitle:'चार गणना. एकच चाचणी.',compareHelp:'t = 0.25 येथील अंतिम सीमा तुलना करा. कमी सीमा म्हणजे त्या साठवलेल्या गणनेच्या त्रुटीवर अधिक घट्ट हमी.',resolution:'सूक्ष्मता',stepSize:'वेळेचे पाऊल',modes:'Modes',finalBound:'अंतिम त्रुटीची सीमा',inspect:'पाहा',empiricalTitle:'अतिरिक्त संख्यात्मक convergence चाचण्या',empiricalHelp:'दोन numerical गणनांच्या अंतिम उत्तरांतील floating-point A₀ फरक येथे दिले आहेत. गणना बदलल्याचा परिणाम दिसतो; या कठोर गणिती त्रुटी-सीमा नाहीत.',compareLimit:'ही तुलना या चार संदर्भ गणनांपुरती आहे. इतर CFD softwareपेक्षा फायदा किंवा नवीन औद्योगिक उपयोग यातून सिद्ध होत नाही.',purposeEyebrow:'ठोस तांत्रिक दिशेतील पाऊल',purposeTitle:'प्रवाहाची गणना आणि तपासता येणारी त्रुटीची सीमा.',purposeText:'Numerical अंदाज व गणिती हमी यांच्यातील फरक समजण्यासाठी हा benchmark वापरता येतो. Solver, residual गणना व अहवाल स्वतः तपासण्यासाठी आणि पुन्हा चालवण्यासाठी उपलब्ध आहेत.',scopeText:'येथील प्रमाणपत्र प्रचलित energy-stability तर्कावर आधारित आहे. पेपरच्या नवीन theoremमुळे वेग किंवा अचूकता वाढते हे अजून दाखवलेले नाही. औद्योगिक पडताळणी व स्वतंत्र परीक्षण बाकी आहे.',reproduceEyebrow:'गणना स्वतः तपासा',reproduceTitle:'गणना आणि अहवाल सोबत घ्या.',downloadKit:'Solver व प्रमाणपत्र संच डाउनलोड ↓',readMethod:'पद्धत, गृहीतके व मर्यादा ↗',downloadData:'संदर्भ प्रवाह व त्रुटीच्या सीमा ↓',visitPicard:'मूळ Picard तपासणी उघडा ↗',researchFiles:'GitHubवरील संशोधन फाइल्स ↗',ai:'AIच्या मदतीने तयार केले आहे. संख्यात्मक दृश्य व प्रमाणपत्र यांच्या भूमिका वेगळ्या आहेत; स्वतंत्र परीक्षणाचे स्वागत आहे.'
};
let language = 'en';
try { if (localStorage.getItem('nsb-language') === 'mr') language = 'mr'; } catch {}
const say = (en, mr) => language === 'mr' ? mr : en;
const state = { data:null, scenario:null, source:'reference', index:0, live:new Map(), worker:null, playing:false, lastTick:0, animation:0, started:0, lastRunSeconds:null };
const num = x => typeof x === 'number' ? x : Number(x);
function fmt(value, digits=5) { const x=num(value); if(!Number.isFinite(x)) return '—'; if(x===0) return '0'; return Math.abs(x)<0.001 || Math.abs(x)>=1000 ? x.toExponential(digits-1) : x.toPrecision(digits); }
function upperBound(value,digits=5){const x=num(value);if(!Number.isFinite(x)||x<0)return '—';if(x===0)return '0';const scale=10**(digits-1-Math.floor(Math.log10(x)));const raised=Math.ceil(x*scale+1e-9)/scale;return Math.abs(raised)<0.001||Math.abs(raised)>=1000?raised.toExponential(digits-1):raised.toPrecision(digits);}
function short(value) { const x=num(value); if(x===0)return '0'; return Math.abs(x)<0.01 ? x.toExponential(1) : Number(x.toPrecision(3)).toString(); }
function applyLanguage(){
 document.documentElement.lang=language;
 $('language').textContent=language==='mr'?'English':'मराठी';
 $('language').lang=language==='mr'?'en':'mr';
 for(const el of document.querySelectorAll('[data-i]'))el.innerHTML=(language==='mr'?marathi:english)[el.dataset.i]||english[el.dataset.i];
 $('flowCanvas').setAttribute('aria-label',say('XY velocity arrows on a periodic three-dimensional flow slice at z equals pi over four','z = π/4 येथील 3D आवर्ती प्रवाहाच्या छेदावरील x–y वेगाचे बाण'));
 if(state.data){renderScenarioButtons();renderComparison();renderCurrent();}
 updateRunStatus();
}
$('language').addEventListener('click',()=>{language=language==='en'?'mr':'en';try{localStorage.setItem('nsb-language',language);}catch{}applyLanguage();});
function renderScenarioButtons(){
 const grid=$('scenarioGrid');grid.replaceChildren();
 for(const s of state.data.scenarios){const button=document.createElement('button');button.type='button';button.className='scenario'+(s.id===state.scenario?.id?' active':'');button.setAttribute('aria-pressed',String(s.id===state.scenario?.id));button.title=say('Select ','निवडा ')+`N = ${s.cutoff}, Δt = 1/${s.stepDenominator}`;const strong=document.createElement('strong');strong.textContent='N = '+s.cutoff;const sub=document.createElement('span');sub.textContent='Δt = 1/'+s.stepDenominator;button.append(strong,sub);button.addEventListener('click',()=>selectScenario(s.id));grid.append(button);}
}
function referenceAt(s,index){return s.referenceFrames[index];}
function liveAt(s,index){const run=state.live.get(s.id);if(!run)return null;const t=num(s.times[index]);let closest=-1,diff=Infinity;run.times.forEach((v,i)=>{const d=Math.abs(num(v)-t);if(d<diff){diff=d;closest=i;}});return diff<1e-9?run.frames[closest]:null;}
function modeKey(m){return Array.isArray(m)?m.slice(0,3).join(','):[m.kx,m.ky,m.kz].join(',');}
function modeTriple(m){return Array.isArray(m)?m:[m.kx,m.ky,m.kz];}
function currentFrame(){const s=state.scenario;if(!s)return null;if(state.source==='live'){const run=state.live.get(s.id);return {frame:liveAt(s,state.index),modes:run?.modes};}return {frame:referenceAt(s,state.index),modes:s.modes};}
function empiricalDifference(){const s=state.scenario,run=state.live.get(s.id),live=liveAt(s,state.index),ref=referenceAt(s,state.index);if(!run||!live||!ref)return null;const positions=new Map(run.modes.map((m,i)=>[modeKey(m),i]));let sum=0;for(let i=0;i<s.modes.length;i++){const j=positions.get(modeKey(s.modes[i]));for(let c=0;c<3;c++){const d=num(ref[3*i+c])-(j===undefined?0:num(live[3*j+c]));sum+=d*d;}}const refKeys=new Set(s.modes.map(modeKey));for(let j=0;j<run.modes.length;j++)if(!refKeys.has(modeKey(run.modes[j])))for(let c=0;c<3;c++)sum+=num(live[3*j+c])**2;return Math.sqrt(sum);}
function selectScenario(id){
 if(!state.data)return;const next=state.data.scenarios.find(s=>s.id===id);if(!next)return;
 stopPlayback();cancelRun(false);state.scenario=next;state.source='reference';state.index=0;state.lastRunSeconds=null;
 $('timeSlider').max=next.times.length-1;$('timeSlider').value=0;$('timeSlider').disabled=false;$('play').disabled=false;$('runSolver').disabled=false;$('runError').hidden=true;$('canvasLoading').hidden=true;
 renderScenarioButtons();renderComparison();renderCurrent();updateRunStatus();
}
function safeReportURL(value,fallback){try{const url=new URL(value||fallback,location.href);if(url.origin===location.origin && /^https?:$/.test(url.protocol))return url.href;}catch{}return fallback;}
function renderCurrent(){
 const s=state.scenario;if(!s)return;
 const t=num(s.times[state.index]),isLive=state.source==='live';
 $('modeCount').textContent=s.modeCount??s.modes.length;$('timeSteps').textContent=s.times.length-1;
 $('useReference').classList.toggle('selected',!isLive);$('useReference').setAttribute('aria-pressed',String(!isLive));$('useLive').classList.toggle('selected',isLive);$('useLive').setAttribute('aria-pressed',String(isLive));$('useLive').disabled=!state.live.has(s.id);
 $('sourceBadge').className='source-badge'+(isLive?' live':'');$('sourceBadge').textContent=isLive?say('BROWSER RUN · FLOATING POINT','BROWSER गणना · FLOATING POINT'):say('SAVED REFERENCE','साठवलेला संदर्भ');
 $('sourceExplanation').textContent=isLive?say('A fresh floating-point RK4 calculation. Compare it with the saved reference below.','नव्याने केलेली floating-point RK4 गणना. तिचा साठवलेल्या संदर्भाशी फरक खाली पाहा.'):say('Saved endpoints of the rational reconstruction used in the certificate. Arrows use rounded values for display.','प्रमाणपत्रासाठी वापरलेल्या rational reconstructionचे साठवलेले टप्पे. बाण दाखवण्यासाठी गोल केलेली मूल्ये वापरली आहेत.');
 $('caseReport').href=safeReportURL(s.reportUrl,'math-note.html');$('rawReport').href=safeReportURL(s.rawReportUrl,'solver-data.json');
 $('canvasTime').textContent='t = '+t.toFixed(5);$('timeReadout').textContent=t.toFixed(5)+' / 0.25';$('timeSlider').value=state.index;
 $('selectedBound').textContent=upperBound(s.endpointBounds[state.index]);$('boundTime').textContent=`t = ${t.toFixed(5)} · N = ${s.cutoff} · Δt = 1/${s.stepDenominator}`;
 $('chartCase').textContent=`N = ${s.cutoff} · Δt = 1/${s.stepDenominator}`;
 $('liveComparison').hidden=!isLive;$('liveBoundNotice').hidden=!isLive;
 if(isLive)$('liveDifference').textContent=fmt(empiricalDifference(),6);
 $('play').textContent=state.playing?'Ⅱ':'▶';$('play').setAttribute('aria-label',state.playing?say('Pause playback','चित्र थांबवा'):say('Play saved time samples','वेळेचे टप्पे चालवा'));
 drawField();drawChart();
}
function renderComparison(){
 const empirical=Array.isArray(state.data.empiricalComparisons)?state.data.empiricalComparisons:[];$('empiricalPanel').hidden=!empirical.length;$('empiricalRows').replaceChildren();for(const item of empirical){const row=document.createElement('div'),label=document.createElement('span'),value=document.createElement('strong');label.textContent=item.label;value.textContent='≈ '+fmt(item.value,6);row.append(label,value);$('empiricalRows').append(row);}
 const rows=$('comparisonRows');rows.replaceChildren();
 for(const s of state.data.scenarios){const row=document.createElement('tr');if(s.id===state.scenario?.id)row.className='selected-row';const values=['N = '+s.cutoff,'1 / '+s.stepDenominator,String(s.modeCount??s.modes.length),'≤ '+upperBound(s.finalBound)];for(const value of values){const td=document.createElement('td');td.textContent=value;row.append(td);}const action=document.createElement('td'),button=document.createElement('button');button.className='table-button';button.textContent=s.id===state.scenario?.id?say('Selected','निवडले'):say('View →','पाहा →');button.addEventListener('click',()=>{selectScenario(s.id);document.querySelector('.workspace').scrollIntoView({behavior:'smooth',block:'start'});});action.append(button);row.append(action);rows.append(row);}
 const sorted=[...state.data.scenarios].sort((a,b)=>(a.cutoff-b.cutoff)||(a.stepDenominator-b.stepDenominator));const first=sorted[0],last=sorted.at(-1),ratio=num(first.finalBound)/num(last.finalBound);const callout=$('refinementCallout');callout.hidden=!(ratio>1&&Number.isFinite(ratio));if(!callout.hidden){callout.replaceChildren();const strong=document.createElement('strong');strong.textContent=ratio.toFixed(2)+'×';const span=document.createElement('span');span.textContent=say(`smaller final bound: N=${last.cutoff}, Δt=1/${last.stepDenominator} vs N=${first.cutoff}, Δt=1/${first.stepDenominator}.`,`कमी अंतिम सीमा: N=${last.cutoff}, Δt=1/${last.stepDenominator} विरुद्ध N=${first.cutoff}, Δt=1/${first.stepDenominator}.`);callout.append(strong,span);}
}
function drawField(){
 const canvas=$('flowCanvas'),container=canvas.parentElement,rect=container.getBoundingClientRect(),w=Math.max(100,rect.width),h=Math.max(100,rect.height),dpr=Math.min(devicePixelRatio||1,2);
 if(canvas.width!==Math.round(w*dpr)||canvas.height!==Math.round(h*dpr)){canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);}
 const ctx=canvas.getContext('2d');if(!ctx)return;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);ctx.fillStyle='#142f39';ctx.fillRect(0,0,w,h);
 const margin={left:28,right:17,top:35,bottom:25},cw=w-margin.left-margin.right,ch=h-margin.top-margin.bottom;
 ctx.strokeStyle='#2a454d';ctx.lineWidth=.6;for(let i=0;i<=4;i++){const x=margin.left+cw*i/4,y=margin.top+ch*i/4;ctx.beginPath();ctx.moveTo(x,margin.top);ctx.lineTo(x,margin.top+ch);ctx.stroke();ctx.beginPath();ctx.moveTo(margin.left,y);ctx.lineTo(margin.left+cw,y);ctx.stroke();}
 ctx.fillStyle='#8ba9aa';ctx.font='9px system-ui';ctx.textAlign='left';ctx.fillText('0',margin.left-4,margin.top+ch+15);ctx.textAlign='right';ctx.fillText('2π',margin.left+cw+1,margin.top+ch+15);ctx.textAlign='right';ctx.fillText('2π',margin.left-7,margin.top+4);
 const current=currentFrame();if(!current?.frame||!current.modes)return;
 const nx=w<450?13:18,ny=h<330?10:14,z=Math.PI/4,cell=Math.min(cw/nx,ch/ny),gain=cell*.36;
 for(let iy=0;iy<ny;iy++)for(let ix=0;ix<nx;ix++){
  const x=(ix+.5)/nx*Math.PI*2,y=(iy+.5)/ny*Math.PI*2;let ux=0,uy=0,uz=0;
  for(let j=0;j<current.modes.length;j++){const [kx,ky,kz]=modeTriple(current.modes[j]),sn=Math.sin(kx*x+ky*y+kz*z);ux-=num(current.frame[3*j])*sn;uy-=num(current.frame[3*j+1])*sn;uz-=num(current.frame[3*j+2])*sn;}
  const px=margin.left+(ix+.5)*cw/nx,py=margin.top+ch-(iy+.5)*ch/ny,dx=ux*gain,dy=-uy*gain,length=Math.hypot(dx,dy),colour=velocityColour(uz);
  ctx.strokeStyle=colour;ctx.fillStyle=colour;ctx.lineWidth=w<450?1.2:1.4;
  if(length<.8){ctx.beginPath();ctx.arc(px,py,1.1,0,Math.PI*2);ctx.fill();continue;}
  const x0=px-dx/2,y0=py-dy/2,x1=px+dx/2,y1=py+dy/2,angle=Math.atan2(dy,dx),head=Math.min(4.5,length*.38+1);
  ctx.beginPath();ctx.moveTo(x0,y0);ctx.lineTo(x1,y1);ctx.moveTo(x1-head*Math.cos(angle-.55),y1-head*Math.sin(angle-.55));ctx.lineTo(x1,y1);ctx.lineTo(x1-head*Math.cos(angle+.55),y1-head*Math.sin(angle+.55));ctx.stroke();
 }
}
function velocityColour(uz){const neutral=[147,190,182],end=uz>=0?[86,212,179]:[227,161,132],q=Math.min(Math.abs(uz)/1.25,1);return 'rgb('+neutral.map((v,i)=>Math.round(v+(end[i]-v)*q)).join(',')+')';}
function svgNode(tag,attrs={},content){const node=document.createElementNS('http://www.w3.org/2000/svg',tag);for(const [key,val]of Object.entries(attrs))node.setAttribute(key,String(val));if(content!==undefined)node.textContent=content;return node;}
function drawChart(){
 const s=state.scenario;if(!s)return;const svg=$('boundChart');svg.replaceChildren();const L=64,R=20,T=15,B=39,W=640,H=270,cw=W-L-R,ch=H-T-B;const values=s.endpointBounds.map(num);const max=Math.max(...values.filter(Number.isFinite),1e-15)*1.08;const x=t=>L+num(t)/.25*cw,y=b=>T+ch-num(b)/max*ch;
 for(let i=0;i<=4;i++){const val=max*i/4,yy=y(val);svg.append(svgNode('line',{x1:L,x2:W-R,y1:yy,y2:yy,stroke:'#dce7df','stroke-width':1}),svgNode('text',{x:L-10,y:yy+4,'text-anchor':'end',fill:'#58707a','font-size':10},short(val)));}
 for(const t of [0,.05,.1,.15,.2,.25])svg.append(svgNode('text',{x:x(t),y:H-16,'text-anchor':'middle',fill:'#58707a','font-size':10},t===0?'0':t.toFixed(2)));
 svg.append(svgNode('text',{x:W-R,y:H-1,'text-anchor':'end',fill:'#58707a','font-size':10},say('time t','वेळ t')));
 let path=`M ${x(s.times[0])} ${y(values[0])}`;for(let i=1;i<s.times.length;i++)path+=` L ${x(s.times[i-1])} ${y(values[i])} L ${x(s.times[i])} ${y(values[i])}`;svg.append(svgNode('path',{d:path+` L ${x(s.times.at(-1))} ${y(0)} L ${x(s.times[0])} ${y(0)} Z`,fill:'#d7eee2',opacity:.65}));svg.append(svgNode('path',{d:path,fill:'none',stroke:'#087f77','stroke-width':2.5,'stroke-linejoin':'round'}));
 const xx=x(s.times[state.index]),yy=y(values[state.index]);svg.append(svgNode('line',{x1:xx,x2:xx,y1:T,y2:T+ch,stroke:'#547d70','stroke-width':1,'stroke-dasharray':'4 4'}),svgNode('circle',{cx:xx,cy:yy,r:4.5,fill:'#087f77',stroke:'#fff','stroke-width':2}));
 svg.setAttribute('aria-label',say('Upper bound on the normalized spatial L2 velocity error for the archived reference, from t=0 to t=0.25. Selected value ','साठवलेल्या संदर्भाची normalized spatial L² वेग-त्रुटीची वरची सीमा, t=0 ते t=0.25. निवडलेले मूल्य ')+fmt(values[state.index]));
}
function stopPlayback(){state.playing=false;cancelAnimationFrame(state.animation);state.animation=0;$('play').textContent='▶';}
function tick(timestamp){if(!state.playing)return;if(!state.lastTick)state.lastTick=timestamp;if(timestamp-state.lastTick>=260){state.index=(state.index+1)%state.scenario.times.length;state.lastTick=timestamp;renderCurrent();}state.animation=requestAnimationFrame(tick);}
$('play').addEventListener('click',()=>{if(!state.scenario)return;if(state.playing){stopPlayback();renderCurrent();}else{state.playing=true;state.lastTick=0;renderCurrent();state.animation=requestAnimationFrame(tick);}});
$('timeSlider').addEventListener('input',()=>{stopPlayback();state.index=Number($('timeSlider').value);renderCurrent();});
$('useReference').addEventListener('click',()=>{state.source='reference';renderCurrent();});
$('useLive').addEventListener('click',()=>{if(state.live.has(state.scenario?.id)){state.source='live';renderCurrent();}});
function updateRunStatus(message){
 if(message){$('computeStatus').textContent=message;return;}
 if(state.worker){$('computeStatus').textContent=say('Calculating the Fourier modes in a background worker…','पार्श्वभूमीत Fourier modesची गणना चालू आहे…');$('runSolver').textContent=say('Calculating…','गणना सुरू…');return;}
 $('runSolver').innerHTML=(language==='mr'?marathi:english).run;
 $('computeStatus').textContent=state.lastRunSeconds!==null?say(`Calculation completed in ${state.lastRunSeconds.toFixed(2)} s. You can switch between both trajectories.`,`${state.lastRunSeconds.toFixed(2)} सेकंदांत गणना पूर्ण. दोन्ही गणना निवडून तुलना करता येते.`):say('The floating-point solver runs in your browser. No account needed.','Floating-point solver तुमच्या browserमध्ये चालतो. खाते आवश्यक नाही.');
}
function cancelRun(announce=true){if(state.worker){state.worker.terminate();state.worker=null;$('runSolver').disabled=!state.scenario;$('cancelSolver').hidden=true;updateRunStatus(announce?say('Calculation cancelled. The saved reference is still available.','गणना थांबवली. साठवलेला संदर्भ उपलब्ध आहे.'):undefined);}}
$('cancelSolver').addEventListener('click',()=>cancelRun(true));
$('runSolver').addEventListener('click',()=>{
 const s=state.scenario;if(!s||state.worker)return;stopPlayback();$('runError').hidden=true;state.started=performance.now();state.lastRunSeconds=null;
 let worker;try{worker=new Worker(new URL('./solver-worker.js',import.meta.url),{type:'module'});}catch(error){showError(error);return;}
 state.worker=worker;$('runSolver').disabled=true;$('cancelSolver').hidden=false;updateRunStatus();
 const finish=()=>{worker.terminate();if(state.worker===worker)state.worker=null;$('runSolver').disabled=false;$('cancelSolver').hidden=true;};
 worker.onmessage=event=>{if(state.worker!==worker)return;const msg=event.data;if(msg.type==='result'){
  const result=msg.result;
  if(!result||!Array.isArray(result.modes)||!Array.isArray(result.frames)||!Array.isArray(result.times)||!result.frames.length){finish();showError(new Error('Solver returned an unsupported result.'));return;}
  finish();state.live.set(s.id,result);state.lastRunSeconds=(performance.now()-state.started)/1000;state.source='live';state.index=s.times.length-1;renderCurrent();updateRunStatus();
 }else if(msg.type==='error'){finish();showError(new Error(msg.message));}else if(msg.type==='progress'&&Number.isFinite(msg.fraction))updateRunStatus(say('Calculating… ','गणना सुरू… ')+Math.round(msg.fraction*100)+'%');};
 worker.onerror=event=>{finish();showError(new Error(event.message||'The browser calculation could not run.'));};
 worker.postMessage({type:'solve',options:{cutoff:s.cutoff,stepDenominator:s.stepDenominator,T:.25}});
});
function showError(error){$('runError').hidden=false;$('runError').textContent=say('The browser calculation could not finish. The saved reference remains available. Details: ','Browser गणना पूर्ण झाली नाही. साठवलेला संदर्भ उपलब्ध आहे. तपशील: ')+(error.message||String(error));updateRunStatus();}
function validate(data){if(!Array.isArray(data.scenarios)||!data.scenarios.length)throw new Error('Reference scenarios are missing.');for(const s of data.scenarios){if(!s.id||!Array.isArray(s.modes)||!Array.isArray(s.times)||!Array.isArray(s.referenceFrames)||!Array.isArray(s.endpointBounds)||s.times.length!==s.referenceFrames.length||s.times.length!==s.endpointBounds.length)throw new Error('A reference scenario is incomplete.');if(s.times.length<2||s.times.some(t=>!Number.isFinite(num(t)))||s.endpointBounds.some(b=>!Number.isFinite(num(b))||num(b)<0)||s.referenceFrames.some(frame=>frame.length!==s.modes.length*3||frame.some(v=>!Number.isFinite(num(v)))))throw new Error('Reference data have invalid dimensions or values.');}return data;}
applyLanguage();
if(typeof ResizeObserver!=='undefined')new ResizeObserver(()=>drawField()).observe($('flowCanvas').parentElement);else window.addEventListener('resize',drawField);
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopPlayback();});
try{const response=await fetch('./solver-data.json');if(!response.ok)throw new Error('Reference data unavailable ('+response.status+').');state.data=validate(await response.json());selectScenario(state.data.scenarios.find(s=>s.cutoff===2&&s.stepDenominator===64)?.id||state.data.scenarios[0].id);}catch(error){$('canvasLoading').textContent=say('Reference data could not be loaded. Please reload this page.','संदर्भ माहिती उघडली नाही. पान पुन्हा उघडा.');$('computeStatus').textContent=error.message;$('scenarioGrid').textContent=say('Data unavailable','माहिती उपलब्ध नाही');}
