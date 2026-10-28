const messages = {
  en: {
    flowLab:'Flow lab ↗',eyebrow:'ONE FLOW · ONE ERROR CHECK · FOUR METHODS',title:'Put the formula<br>to a measured test.',intro:'Compare the paper’s explicit w₂ approximation with an optimized RK4 calculation. The heat flow w₀ and first Picard iterate w₁ provide two additional reference points. Every method uses the same full-residual error check.',research:'Research by',settingTitle:'THE SHARED TEST',settingText:'Unforced 3D Navier–Stokes · 2π-periodic torus<br>ν = 1 · 0 ≤ t ≤ 0.25 · N = 3',settingModes:'122 stored Fourier modes',settingChecker:'Same full-residual certificate',loading:'Loading the measured results…',finding:'WHAT THE EXPERIMENT FOUND',compareEyebrow:'COMPARE LIKE WITH LIKE',compareTitle:'A tighter bound is a stronger guarantee.',compareHelp:'All bounds below use the same normalized spatial L² velocity error and final time t = 0.25. They refer to saved, exact rational, piecewise-linear reference trajectories.',filterLabel:'Reference time step',allSteps:'All measured steps',chartTitle:'FINAL ERROR UPPER BOUND',linearScale:'Linear scale · shorter is tighter',chartNote:'Bar lengths use approximate decimals. Displayed bounds are rounded upward; exact fractions are in the reports.',methodsTitle:'WHAT IS BEING COMPARED?',w0Description:'Heat flow; nonlinear term omitted.',w1Description:'First heat-seeded Picard iterate.',w2Description:'The explicit approximation from the paper.',rk4Description:'Computes the retained modes during time integration; the certificate still checks the full PDE residual.',tableCaption:'Measured approximation and certificate costs',methodColumn:'Method',stepColumn:'Time step',boundColumn:'Error bound',generationColumn:'Generate · ms',setupColumn:'Setup · ms',certificateColumn:'Certify · ms',inspectColumn:'Inspect',tableNote:'Timings are medians for these measured runs. Generation, setup and certification are separate operations; their medians are not an end-to-end runtime.',selectedEyebrow:'OPEN A MEASURED CASE',boundMeaning:'Normalized spatial L² velocity error bound at t = 0.25. This is an upper limit, not the measured actual error.',exactFraction:'Exact final certificate value',timingRange:'Each card shows the median, with the measured minimum–maximum range. Runtime varies with hardware and execution conditions.',readReport:'Read this certificate ↗',downloadReport:'Exact JSON report ↓',targetEyebrow:'TRY AN ERROR REQUIREMENT',targetTitle:'Which measured cases meet your bound?',targetHelp:'Choose a target for the certificate’s upper bound. This checks the finite set of measured cases, across every tested time step.',targetLabel:'Required upper bound',targetLimit:'Membership is checked using exact rational values. This is not an adaptive solver, a search for the globally best method, or a guarantee that an untested case will meet the target.',scopeEyebrow:'WHAT THE RESULT MEANS',scopeTitle:'Useful evidence, with a precise scope.',scopeStatic:'The comparison certifies rational linear reconstructions of the saved samples. It does not directly certify each formula’s continuous exponential path. The paper’s global X-norm convergence theorem is a separate claim.',advantageLimit:'A useful result on this test does not by itself establish novelty, an industrial advantage, or a general Navier–Stokes regularity result.',timingEyebrow:'READ THE COSTS CORRECTLY',timingTitle:'Three costs, recorded separately.',timingStatic:'Sampling an explicit formula and advancing an ODE solver are different operations. Setup and certificate generation can dominate a small benchmark. The download records the individual runs so the comparison can be inspected.',downloadEyebrow:'REPRODUCE THE COMPARISON',downloadTitle:'Inspect the code, inputs and exact reports.',downloadText:'The package contains the measured cases and the instructions needed to repeat the experiment.',downloadKit:'Download comparison kit ↓',readMethod:'Method, assumptions & interpretation ↗',downloadData:'Measured results as JSON ↓',backToSolver:'Explore the calculated flow ↗',ai:'Developed with AI assistance. Exact arithmetic checks and numerical experiments have a stated mathematical scope; independent review remains welcome.',inspect:'Inspect',selected:'Selected',generation:'Generate',setup:'Setup',certificate:'Certify',notRecorded:'Not recorded',matches:(n,total)=>`${n} of ${total} measured cases meet this target.`,none:'None of the measured cases meets this certificate target. This does not imply that their actual numerical errors exceed it.',unavailable:'The measured results could not be loaded. Reload this page or download the comparison kit.',missingConclusion:'See the measured cases and the interpretation in the method note.'
  },
  mr: {
    flowLab:'प्रवाहाचा प्रयोग ↗',eyebrow:'एकच प्रवाह · एकच त्रुटी-तपासणी · चार पद्धती',title:'सूत्राचा उपयोग<br>आकड्यांत तपासा.',intro:'पेपरमधील स्पष्ट w₂ सूत्राची सुधारित RK4 गणनेशी तुलना करा. उष्णता-प्रवाह w₀ आणि पहिली Picard पुनरावृत्ती w₁ हे आणखी दोन संदर्भ आहेत. सर्व पद्धतींसाठी पूर्ण residualची एकच त्रुटी-तपासणी आहे.',research:'संशोधन',settingTitle:'सर्वांसाठी समान चाचणी',settingText:'बाह्य बल नसलेला 3D Navier–Stokes प्रवाह · 2π-periodic क्षेत्र<br>ν = 1 · 0 ≤ t ≤ 0.25 · N = 3',settingModes:'साठवलेले 122 Fourier modes',settingChecker:'पूर्ण residualची समान तपासणी',loading:'मोजलेले निकाल उघडत आहेत…',finding:'या प्रयोगातून काय दिसले?',compareEyebrow:'समान निकषांवर तुलना',compareTitle:'कमी वरची मर्यादा म्हणजे अधिक घट्ट हमी.',compareHelp:'खालील सर्व मर्यादा एकाच normalized spatial L² वेग-त्रुटीसाठी आणि t = 0.25 या वेळेसाठी आहेत. त्या साठवलेल्या अचूक rational, तुकड्यांत रेषीय संदर्भ प्रवाहांना लागू होतात.',filterLabel:'संदर्भ गणनेतील वेळेची पायरी',allSteps:'सर्व मोजलेल्या पायऱ्या',chartTitle:'अंतिम त्रुटीची वरची मर्यादा',linearScale:'रेषीय मापन · छोटा पट्टा म्हणजे घट्ट मर्यादा',chartNote:'पट्ट्यांची लांबी अंदाजे दशांश वापरते. दाखवलेल्या मर्यादा वरच्या दिशेने गोल केल्या आहेत; अहवालात अचूक अपूर्णांक आहेत.',methodsTitle:'कोणत्या पद्धतींची तुलना?',w0Description:'उष्णता-प्रवाह; nonlinear पद वगळलेले.',w1Description:'उष्णता-प्रवाहापासून पहिली Picard पुनरावृत्ती.',w2Description:'पेपरमधील स्पष्ट approximation.',rk4Description:'वेळेनुसार गणनेत फक्त ठेवलेल्या modesचे काम करते; प्रमाणपत्रात मात्र पूर्ण PDE residual तपासला जातो.',tableCaption:'उत्तर आणि प्रमाणपत्र तयार करण्यासाठी मोजलेला वेळ',methodColumn:'पद्धत',stepColumn:'वेळेची पायरी',boundColumn:'त्रुटीमर्यादा',generationColumn:'उत्तर · ms',setupColumn:'पूर्वतयारी · ms',certificateColumn:'प्रमाणपत्र · ms',inspectColumn:'पाहा',tableNote:'हे मोजलेल्या धावांमधील मध्यक वेळ आहेत. उत्तर, पूर्वतयारी आणि प्रमाणपत्र हे वेगळे टप्पे आहेत; त्यांच्या मध्यकांची बेरीज म्हणजे सुरुवातीपासून शेवटपर्यंतचा मोजलेला वेळ नव्हे.',selectedEyebrow:'एका गणनेचा तपशील',boundMeaning:'t = 0.25 वेळी normalized spatial L² वेग-त्रुटीची वरची मर्यादा. ही कमाल मर्यादा आहे; प्रत्यक्ष त्रुटीचे मोजमाप नाही.',exactFraction:'प्रमाणपत्रातील अचूक अंतिम अपूर्णांक',timingRange:'प्रत्येक चौकटीत मध्यक आणि मोजलेला किमान–कमाल वेळ आहे. संगणक आणि गणना चालवण्याच्या परिस्थितीनुसार वेळ बदलतो.',readReport:'हे प्रमाणपत्र वाचा ↗',downloadReport:'अचूक JSON अहवाल ↓',targetEyebrow:'एक त्रुटीमर्यादा निवडा',targetTitle:'कोणत्या गणना तुमची अट पूर्ण करतात?',targetHelp:'प्रमाणपत्राच्या वरच्या मर्यादेसाठी लक्ष्य निवडा. तपासणी सर्व मोजलेल्या वेळेच्या पायऱ्यांमधील उपलब्ध गणनांपुरती आहे.',targetLabel:'अपेक्षित वरची मर्यादा',targetLimit:'निवड अचूक rational अपूर्णांकांची तुलना करून होते. हा adaptive solver किंवा सर्व शक्य पद्धतींतील सर्वोत्तम पद्धतीचा शोध नाही. न तपासलेल्या गणनेसाठी हमी मिळत नाही.',scopeEyebrow:'निकालाचा अर्थ',scopeTitle:'ठरावीक व्याप्तीतील तपासता येणारा पुरावा.',scopeStatic:'ही तुलना साठवलेल्या नमुन्यांच्या rational रेषीय पुनर्रचनेला प्रमाणित करते. प्रत्येक सूत्राच्या संपूर्ण exponential प्रवाहाला ती थेट प्रमाणित करत नाही. पेपरमधील सर्व काळासाठीचा X-norm convergence दावा वेगळा आहे.',advantageLimit:'या चाचणीतील उपयोगी निकालामुळेच नवीन शोध, औद्योगिक फायदा किंवा सर्वसाधारण Navier–Stokes regularity सिद्ध होत नाही.',timingEyebrow:'गणनेचा खर्च समजून घ्या',timingTitle:'तीन वेगळे टप्पे, वेगळे वेळ.',timingStatic:'स्पष्ट सूत्रातून नमुने काढणे आणि ODE solverने पुढची पायरी मोजणे या वेगळ्या क्रिया आहेत. लहान प्रयोगात पूर्वतयारी आणि प्रमाणपत्राचा वेळ मोठा ठरू शकतो. डाउनलोडमध्ये प्रत्येक धावेची नोंद आहे.',downloadEyebrow:'तुलना स्वतः पुन्हा करा',downloadTitle:'Code, inputs आणि अचूक अहवाल पाहा.',downloadText:'पॅकेजमध्ये मोजलेल्या गणना आणि प्रयोग पुन्हा करण्यासाठी सूचना आहेत.',downloadKit:'तुलनेचे संपूर्ण पॅकेज डाउनलोड ↓',readMethod:'पद्धत, गृहीतके आणि अर्थ ↗',downloadData:'मोजलेले निकाल JSON स्वरूपात ↓',backToSolver:'मोजलेला प्रवाह पाहा ↗',ai:'AIच्या साहाय्याने विकसित. अचूक अंकगणिताच्या तपासण्या आणि numerical प्रयोगांना स्पष्ट गणिती व्याप्ती आहे; स्वतंत्र परीक्षणाचे स्वागत आहे.',inspect:'पाहा',selected:'निवडलेले',generation:'उत्तर',setup:'पूर्वतयारी',certificate:'प्रमाणपत्र',notRecorded:'नोंद नाही',matches:(n,total)=>`मोजलेल्या ${total} पैकी ${n} गणना ही अट पूर्ण करतात.`,none:'मोजलेल्या कोणत्याही गणनेचे प्रमाणपत्र हे लक्ष्य पूर्ण करत नाही. याचा अर्थ त्यांची प्रत्यक्ष numerical त्रुटी लक्ष्यापेक्षा जास्त आहे, असा होत नाही.',unavailable:'मोजलेले निकाल उघडता आले नाहीत. पान पुन्हा उघडा किंवा तुलनेचे पॅकेज डाउनलोड करा.',missingConclusion:'मोजलेल्या गणना आणि पद्धतीच्या नोंदीतील अर्थ पाहा.'
  }
};

Object.assign(messages.en,{optimizedRk4:'Optimized RK4',originalRk4:'Original RK4',historyTitle:'HOW THE COMPARISON CHANGED',historyDownload:'Download the original comparison archive ↓'});
Object.assign(messages.mr,{optimizedRk4:'सुधारित RK4',originalRk4:'मूळ RK4',historyTitle:'तुलनेत काय बदलले?',historyDownload:'मूळ तुलनेचे संग्रहित पॅकेज डाउनलोड ↓'});

let lang = 'en';
Object.assign(messages.en,{equalEyebrow:'A COMMON ERROR REQUIREMENT',equalTitle:'Compare the cost of meeting the same target.',equalTableCaption:'Directly measured full runtime at a common bound target',endToEndColumn:'Full run · ms',rangeColumn:'Min–max · ms',equalStatic:'These full runtimes were measured directly. They are not sums of the separate medians below. Only the selected cases are compared here.'});
Object.assign(messages.mr,{equalEyebrow:'एकच त्रुटीमर्यादा पूर्ण करण्याची अट',equalTitle:'समान लक्ष्य गाठण्यासाठी लागणारा वेळ पाहा.',equalTableCaption:'समान त्रुटीमर्यादेसाठी सुरुवातीपासून शेवटपर्यंत प्रत्यक्ष मोजलेला वेळ',endToEndColumn:'पूर्ण गणना · ms',rangeColumn:'किमान–कमाल · ms',equalStatic:'हे पूर्ण वेळ थेट मोजले आहेत. ते खालील वेगवेगळ्या मध्यकांच्या बेरजा नाहीत. येथे केवळ निवडलेल्या गणनांची तुलना आहे.'});
try { lang = localStorage.getItem('nsb-language') === 'mr' ? 'mr' : 'en'; } catch {}
let data = null;
let selectedId = 'w2_dt128';
const $ = id => document.getElementById(id);
const labels = { w0:'w₀', w1:'w₁', w2:'w₂', rk4:'RK4' };
const order = { w0:0, w1:1, w2:2, rk4:3 };
const t = key => messages[lang][key] ?? messages.en[key] ?? key;
const localized = value => typeof value === 'string' ? value : value?.[lang] ?? value?.en ?? '';
const formatMs = seconds => {
  if (!Number.isFinite(seconds)) return '—';
  const ms = seconds * 1000;
  if (ms === 0) return '0';
  if (ms < .001) return ms.toExponential(2);
  return new Intl.NumberFormat('en-US', {maximumFractionDigits:ms < 1 ? 3 : ms < 100 ? 2 : 1}).format(ms);
};
const methodName = c => c.method === 'rk4' ? localized(data?.rk4Label) || t('optimizedRk4') : c.method === 'rk4_original' ? t('originalRk4') : labels[c.method] ?? c.label ?? c.method;
const fraction = text => {
  if (typeof text !== 'string' || !/^\d+\/[1-9]\d*$/.test(text)) throw new Error('Invalid nonnegative fraction');
  const [n,d] = text.split('/').map(BigInt); return {n,d};
};
const leqFraction = (a,b) => { const x=fraction(a), y=fraction(b); return x.n*y.d <= y.n*x.d; };
function el(tag, className, text) { const n=document.createElement(tag); if(className) n.className=className; if(text!==undefined)n.textContent=text; return n; }
function validateData(input) {
  if (!input || !Array.isArray(input.cases) || !input.cases.length) throw new Error('No measured cases');
  const ids = new Set();
  for (const c of input.cases) {
    if (!c.id || ids.has(c.id) || !(c.method in labels) || ![64,128,256].includes(c.stepDenominator)) throw new Error('Invalid case identity');
    ids.add(c.id);
    if (!Number.isFinite(c.finalBound) || c.finalBound < 0 || typeof c.finalBoundOutward !== 'string' || !c.finalBoundOutward.trim()) throw new Error('Missing measured bound');
    fraction(c.finalBoundFraction);
    for (const part of ['generation','setup','certificate']) {
      if (c[part] && (!Number.isFinite(c[part].medianSeconds) || c[part].medianSeconds < 0)) throw new Error('Invalid timing');
    }
  }
}
function setLanguage() {
  document.documentElement.lang=lang;
  for (const n of document.querySelectorAll('[data-i]')) {
    const value=t(n.dataset.i); if(typeof value==='string') n.innerHTML=value;
  }
  $('language').textContent=lang==='en'?'मराठी':'English';
  $('language').lang=lang==='en'?'mr':'en';
  if(data) render();
}
function sortedCases(cases) { return [...cases].sort((a,b)=>a.stepDenominator-b.stepDenominator || order[a.method]-order[b.method]); }
function visibleCases() { const filter=$('stepFilter').value; return sortedCases(data.cases.filter(c=>filter==='all'||c.stepDenominator===Number(filter))); }
function selectCase(id, keepFilter=false) {
  const c=data.cases.find(c=>c.id===id); if(!c)return;
  selectedId=id;
  if(!keepFilter && $('stepFilter').value!=='all') $('stepFilter').value=String(c.stepDenominator);
  render();
}
function renderChart(cases) {
  const host=$('boundBars'); host.replaceChildren();
  const max=Math.max(...cases.map(c=>c.finalBound),Number.MIN_VALUE);
  for (const c of cases) {
    const button=el('button','bound-bar'+(c.id===selectedId?' selected':'')); button.type='button'; button.setAttribute('role','listitem'); button.setAttribute('aria-pressed',String(c.id===selectedId));
    const name=el('span','bar-name',methodName(c)); if($('stepFilter').value==='all')name.append(el('small','',`Δt = 1/${c.stepDenominator}`));
    const track=el('span','bar-track'); const fill=el('span',`bar-fill ${c.method}`); fill.style.width=`${100*c.finalBound/max}%`; track.append(fill); track.setAttribute('aria-hidden','true');
    button.append(name,track,el('span','bar-value',`≤ ${c.finalBoundOutward}`));
    button.setAttribute('aria-label',`${methodName(c)}, Δt 1/${c.stepDenominator}, ≤ ${c.finalBoundOutward}`);
    button.addEventListener('click',()=>selectCase(c.id,true)); host.append(button);
  }
}
function renderTable(cases) {
  const host=$('caseRows'); host.replaceChildren();
  for (const c of cases) {
    const tr=el('tr',c.id===selectedId?'selected-row':'');
    const name=el('td'); const badge=el('span','method-cell'); badge.append(el('span',`method-dot ${c.method}`),el('span','',methodName(c))); name.append(badge); tr.append(name,el('td','',`1/${c.stepDenominator}`),el('td','bound-cell',`≤ ${c.finalBoundOutward}`));
    for(const key of ['generation','setup','certificate']) tr.append(el('td','',formatMs(c[key]?.medianSeconds)));
    const td=el('td'); const b=el('button','table-button',c.id===selectedId?t('selected'):t('inspect')); b.type='button'; b.setAttribute('aria-pressed',String(c.id===selectedId));b.setAttribute('aria-label',`${t('inspect')} ${methodName(c)}, Δt 1/${c.stepDenominator}`); b.addEventListener('click',()=>selectCase(c.id,true)); td.append(b);tr.append(td);host.append(tr);
  }
}
function renderSelected() {
  const c=data.cases.find(c=>c.id===selectedId) ?? data.cases[0]; selectedId=c.id;
  $('selectedTitle').textContent=methodName(c); $('selectedStep').textContent=`Δt = 1/${c.stepDenominator}`;
  $('selectedBound').textContent=c.finalBoundOutward; $('exactBound').textContent=c.finalBoundFraction;
  const host=$('selectedTimings');host.replaceChildren();
  for(const key of ['generation','setup','certificate']) {
    const card=el('div','timing-card');const measure=c[key]; const value=el('strong','',formatMs(measure?.medianSeconds));value.append(el('small','',' ms'));
    card.append(el('span','',t(key)),value,el('small','',measure?`${formatMs(measure.minSeconds)}–${formatMs(measure.maxSeconds)} ms`:t('notRecorded')));host.append(card);
  }
  for(const [id,url] of [['caseReport',c.reportUrl],['rawReport',c.rawReportUrl]]){const link=$(id);link.hidden=!url;if(url)link.href=url;}
}
function renderTarget() {
  const matches=sortedCases(data.cases.filter(c=>leqFraction(c.finalBoundFraction,$('targetBound').value)));
  $('targetSummary').textContent=t('matches')(matches.length,data.cases.length);
  const host=$('targetCases');host.replaceChildren();
  if(!matches.length){host.append(el('p','empty-target',t('none')));return;}
  for(const c of matches){const button=el('button','target-case'+(c.id===selectedId?' selected':''),`${methodName(c)} · Δt = 1/${c.stepDenominator}`);button.type='button';button.append(el('span','',`≤ ${c.finalBoundOutward}`));button.setAttribute('aria-pressed',String(c.id===selectedId));button.addEventListener('click',()=>selectCase(c.id));host.append(button);}
}
function renderEqualTarget() {
  const comparison=data.equalTarget;
  $('equalTarget').hidden=!comparison?.cases?.length;
  if(!comparison?.cases?.length)return;
  $('equalTargetBadge').textContent=`≤ ${comparison.target}`;
  $('equalSelection').textContent=localized(comparison.selection);
  $('equalMeasurement').textContent=localized(comparison.measurement);
  $('equalScope').textContent=localized(comparison.scope);
  const host=$('equalRows');host.replaceChildren();
  for(const c of comparison.cases){
    const row=el('tr'); const name=el('td'); const badge=el('span','method-cell');badge.append(el('span',`method-dot ${c.method}`),el('span','',methodName(c)));name.append(badge);
    const timing=c.endToEnd;
    row.append(name,el('td','',`1/${c.stepDenominator}`),el('td','bound-cell',`≤ ${c.finalBoundOutward}`),el('td','',formatMs(timing?.medianSeconds)),el('td','',`${formatMs(timing?.minSeconds)}–${formatMs(timing?.maxSeconds)}`));host.append(row);
  }
}
function renderHistory() {
  const history=data.history;
  $('history').hidden=!history;
  if(!history)return;
  $('historyText').textContent=localized(history);
  $('historyDownload').hidden=!history.url;
  if(history.url)$('historyDownload').href=history.url;
}
function render() {
  $('conclusionText').textContent=localized(data.conclusion)||t('missingConclusion');
  $('rk4KeyLabel').textContent=methodName({method:'rk4'});
  renderHistory();
  $('scopeText').textContent=localized(data.scope);
  $('timingText').textContent=localized(data.timingNote);
  const cases=visibleCases();
  if(!cases.some(c=>c.id===selectedId)&&cases.length)selectedId=(cases.find(c=>c.method==='w2')??cases[0]).id;
  renderChart(cases);renderEqualTarget();renderTable(cases);renderSelected();renderTarget();
}
$('language').addEventListener('click',()=>{lang=lang==='en'?'mr':'en';try{localStorage.setItem('nsb-language',lang);}catch{}setLanguage();});
$('stepFilter').addEventListener('change',()=>{if(data)render();});
$('targetBound').addEventListener('change',()=>{if(data)renderTarget();});
setLanguage();
try {
  const response=await fetch('comparison-data.json',{cache:'no-cache'});
  if(!response.ok)throw new Error(`HTTP ${response.status}`);
  const input=await response.json();validateData(input);data=input;
  $('loadStatus').hidden=true;$('results').hidden=false;render();
} catch(error) {
  $('loadStatus').classList.add('error');$('loadStatus').textContent=t('unavailable');$('loadStatus').removeAttribute('data-i');
  const link=el('a','',' '+t('downloadKit'));link.href='comparison-kit.zip';$('loadStatus').append(link);
  console.error('Comparison results unavailable:',error);
}
