/* Pure Node source-function contract checks, NOT a browser test or screenshot. */
const fs=require('node:fs');const path=require('node:path');const vm=require('node:vm');const assert=require('node:assert/strict');
const repo=path.resolve(__dirname,'..');const input=process.argv[2];if(!input)throw Error('Usage: node tooling/test-az305-interactive.cjs /absolute/path/to/candidate.json');
const englishOnly=process.argv.includes('--english-only');const translationGaps=[];
const qs=JSON.parse(fs.readFileSync(input,'utf8'));const source=fs.readFileSync(path.join(repo,'app.js'),'utf8');
const c={window:{ITCERT_IMAGE:require('../js/image-questions.js'),ITCERT_PDF_TEXT:require('../js/pdf-text.js')},state:{lang:'both',boxChoiceOrder:{}},UI_LANG:'both',revealOnly:false,console,
 shuffle:a=>a.slice(),t:()=>new Proxy({},{get:(_,k)=>String(k)}),};vm.createContext(c);
const names=['tidyText','pickText','choiceText','choiceKey','boxLabel','normKey','sameKey','isBoxQ','isDropdownQ','isYNChoice','isYNBox','getControl','dragPoolChoices','getBoxOrder','orderedChoices','emptyBoxAnswers','isSelfCheck','normalizeSelection','allBoxesSelected','arraysEqualAsSet','isCorrect','correctSelection','hasInlineTemplate','templateOf','positionNoteOf','boxFeedbackText','renderOneSelectHtml','renderSelectBoxesHtml','renderYnBoxesHtml','renderDragBoxesHtml','renderBoxesHtml','escapeHtml','formatMultiline','formatStem','isPdfTextQuestion','formatQuestionStem','formatQuestionCase','isDisabledOption','submitPractice','calculateExamResult'];
for(const name of names){const start=source.indexOf('  function '+name+'(');assert(start>=0,'missing actual app function '+name);const end=source.indexOf('\n  }',start);assert(end>=0);vm.runInContext(source.slice(start,end+4),c,{filename:'actual-app-function-'+name});}
let checks=0;for(const q of qs){
 assert(!c.isSelfCheck(q),q.id+' must not use self-evaluation');assert(q.stemEn,q.id+' English stem');if(!q.stemZh)translationGaps.push(q.id);if(!englishOnly)assert(q.stemZh,q.id+' Chinese stem');assert(!q.needs_review);assert.equal(c.getControl(q),q.control);checks+=4;
 const answer=c.correctSelection(q);assert(c.isCorrect(q,answer),q.id+' correct');assert(!c.isCorrect(q,c.isBoxQ(q)?{}:[]),q.id+' empty is wrong');checks+=2;
 if(c.isBoxQ(q)){
  for(const b of q.boxes){assert(b.labelEn);if(!englishOnly)assert(b.labelZh);assert(b.choices.length>=2);assert(b.choices.every(ch=>ch.en));if(!englishOnly)assert(b.choices.every(ch=>ch.zh));assert(b.choices.some(ch=>ch.key===b.answer));const wrong={...answer,[b.id]:b.choices.find(ch=>ch.key!==b.answer).key};assert(!c.isCorrect(q,wrong),q.id+' one wrong box must fail');checks+=5;
   if(q.control==='yn'){assert.deepEqual(b.choices.map(ch=>ch.key),['Yes','No']);checks++;}}
  const html=c.renderBoxesHtml(q,{},false,'local');assert.doesNotMatch(html,/self-response|data-self-rate|answer-evidence|is-answer/);assert(html.includes(q.control==='select'?'<select':q.control==='yn'?'yn-pair':'drag-pool'));checks+=2;
  for(const b of q.boxes)for(const ch of b.choices){assert(html.includes(c.escapeHtml(ch.key)),q.id+' pool missing '+ch.key);checks++;}
 } else {
  assert(q.options.every(o=>o.textEn));if(!englishOnly)assert(q.options.every(o=>o.textZh));assert(q.answer.every(a=>q.options.some(o=>o.id===a)));const wrong=[q.options.find(o=>!q.answer.includes(o.id)&&!o.disabled).id];assert(!c.isCorrect(q,wrong));checks+=3;
 }
}
const order=qs.find(q=>q.id==='az305-pdf-t1-q12');assert(!c.isCorrect(order,{'1':order.boxes[1].answer,'2':order.boxes[0].answer,'3':order.boxes[2].answer}));checks++;
const checkbox=qs.find(q=>q.id==='az305-pdf-t3-q25');assert(c.isDisabledOption(checkbox,checkbox.options[7]));assert(!c.isCorrect(checkbox,['A','E','H']));assert(!c.isDisabledOption({...checkbox,examId:'dp-420'},checkbox.options[7]));checks+=3;
// Prove legacy rendering is unchanged, even for literal markdown-looking strings.
c.stemOf=q=>q.stemEn;c.caseStudyTextOf=q=>q.caseStudyTextEn||'';const text='A < B\n| X | Y |\n| --- | --- |\n| 1 | 2 |';for(const examId of ['ai103','dp-700','dp-420','dop-c02']){const q={examId,stemEn:text};assert.equal(c.formatQuestionStem(q),c.formatStem(text));assert(!c.isPdfTextQuestion(q));checks+=2;}
// Actual local legacy published JS banks: verify all entries still grade through unchanged app code.
const oldFiles=[['ai103','questions.js','QUESTIONS_AI103'],['dp-700','banks/questions-dp-700.js','QUESTIONS_DP_700'],['dp-420','banks/questions-dp-420.js','QUESTIONS_DP_420'],['dop-c02','banks/questions-dop-c02.js','QUESTIONS_DOP_C02']];const legacy=[];
for(const [id,file,key] of oldFiles){const p=path.join('/workspace/ai103',file);if(!fs.existsSync(p))continue;const data={window:{},console};vm.createContext(data);vm.runInContext(fs.readFileSync(p,'utf8'),data,{filename:p});const bank=data.window[key]||data[key]||data.QUESTIONS||data.window.QUESTIONS;assert(Array.isArray(bank)&&bank.length>0,'old bank '+id);let n=0;for(const q of bank){if(c.isSelfCheck(q))continue;const correct=c.correctSelection(q);assert(c.isCorrect(q,correct),'legacy correct '+id+'/'+q.id);n++;}legacy.push({id,total:bank.length,gradingChecked:n});checks+=n;}
// Integration of the actual scoring/wrong-question/statistics functions, without browser or production I/O.
let progressSaves=0,extraSaves=0;const extra={ws:{},seen:{},days:{}};
c.ex=()=>extra;c.untombstone=()=>{};c.saveEx=()=>extraSaves++;c.saveProgress=()=>progressSaves++;c.renderPractice=()=>{};c.isPracticeRevealed=()=>false;c.dayStr=()=>"local-test-day";
for(const q of qs){
 c.currentPracticeQ=()=>q;c.state.practiceAnswers={};c.state.practiceSubmitted={};c.state.wrongIds={};c.state.clearedIds={};
 const good=c.correctSelection(q);let bad;if(c.isBoxQ(q)){const b=q.boxes[0];bad={...good,[b.id]:b.choices.find(ch=>ch.key!==b.answer).key};}else bad=[q.options.find(o=>!q.answer.includes(o.id)&&!o.disabled).id];
 c.state.practiceAnswers[q.id]=bad;c.submitPractice();assert(c.state.practiceSubmitted[q.id]);assert(c.state.wrongIds[q.id]);assert.equal(extra.ws[q.id],0);assert.equal(extra.seen[q.id],1);
 const day=extra.days["local-test-day"];c.submitPractice();assert.equal(extra.days["local-test-day"],day);
 c.state.practiceAnswers[q.id]=good;c.state.practiceSubmitted[q.id]=false;c.submitPractice();assert(c.state.wrongIds[q.id]);assert.equal(extra.ws[q.id],1);
 c.state.practiceSubmitted[q.id]=false;c.submitPractice();assert(!c.state.wrongIds[q.id]);assert(c.state.clearedIds[q.id]);assert.equal(extra.days["local-test-day"],day+2);checks+=10;
}
c.DOMAIN_ORDER=[];c.SCORE_MIN=0;c.PASS_SCORE=700;c.state.examQuestions=qs;c.state.examAnswers=Object.fromEntries(qs.map(q=>[q.id,c.correctSelection(q)]));c.state.wrongIds={};
const failedTypes=[];for(const ctrl of ['select','yn','drag','single','multi']){const q=qs.find(q=>q.control===ctrl),good=c.correctSelection(q);if(c.isBoxQ(q)){const b=q.boxes[0];c.state.examAnswers[q.id]={...good,[b.id]:b.choices.find(ch=>ch.key!==b.answer).key};}else c.state.examAnswers[q.id]=[q.options.find(o=>!q.answer.includes(o.id)&&!o.disabled).id];failedTypes.push(q.id);}
c.calculateExamResult(false);assert.equal(c.state.examResult.total,286);assert.equal(c.state.examResult.correct,281);assert.equal(c.state.examResult.pending,0);assert.equal(c.state.examResult.wrongList.length,5);assert(failedTypes.every(id=>c.state.wrongIds[id]));checks+=5;
for(const q of qs.filter(q=>q.caseStudy)){assert(q.caseStudyTextEn.length>1000,q.id+' complete original case');assert(q.caseStudyTextZh.length>500,q.id+' complete Chinese case');checks+=2;}
console.log(JSON.stringify({passed:true,englishOnly,translationComplete:translationGaps.length===0,translationGaps,pureNodeOnly:true,browserE2E:false,actualScoringIntegration:{practiceQuestions:qs.length,wrongAfterIncorrect:true,clearedAfterTwoCorrect:true,doubleSubmitIgnored:true,seenAndDailyStats:true,examWrongEachControl:true,examPendingSelfChecks:0,progressSaves,extraSaves},candidateCount:qs.length,checks,legacy},null,2));
