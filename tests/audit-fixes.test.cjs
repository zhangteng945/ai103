const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const repo=path.resolve(__dirname,'..');
const source=fs.readFileSync(path.join(repo,'app.js'),'utf8');
function app(){
 const c={window:{ITCERT_IMAGE:require('../js/image-questions.js')},state:{lang:'zh',boxChoiceOrder:{}},UI_LANG:'zh',revealOnly:false,
  shuffle:a=>a.slice().reverse(),t:()=>({answerArea:'答题区域',pleaseSelect:'请选择',dragPool:'备选项',dragSlots:'答题框',clearSlot:'清空',emptySlot:'未选择',undoLast:'撤销',correctAnswer:'正确答案：'})};
 vm.createContext(c);
 const names=['tidyText','pickText','choiceText','choiceKey','boxLabel','normKey','sameKey','isBoxQ','isDropdownQ','isYNChoice','isYNBox','getControl','dragPoolChoices','getBoxOrder','orderedChoices','emptyBoxAnswers','isSelfCheck','normalizeSelection','allBoxesSelected','arraysEqualAsSet','isCorrect','correctSelection','hasInlineTemplate','templateOf','positionNoteOf','renderOneSelectHtml','renderInlineTemplateHtml','renderSelectBoxesHtml','renderYnBoxesHtml','renderDragBoxesHtml','renderBoxesHtml','escapeHtml','boxFeedbackText','caLabel','inl','shuffleOptions','isBinaryYNQuestion','dispSlots','dispLetter'];
 for(const name of names){const start=source.indexOf('  function '+name+'('),end=source.indexOf('\n  }',start);assert(start>=0,name);vm.runInContext(source.slice(start,end+4),c);}
 return c;
}
const fixture={id:'letter-group',type:'multi',preserveOptionOrder:true,options:[{id:'A'},{id:'B'},{id:'H',disabled:true}]};
test('PDF固定字母分组不参与选项乱序；普通题继续乱序',()=>{
 const c=app();assert.equal(c.shuffleOptions(fixture),fixture);assert.equal(c.dispLetter(c.shuffleOptions(fixture),'H'),'H');
 const ordinary={...fixture,preserveOptionOrder:false};assert.deepEqual(c.shuffleOptions(ordinary).options.map(o=>o.id),['H','B','A']);
});
test('全部控件/语言：错误显示正确答案与所选，答对无答案行，提交前中性',()=>{
 const c=app();for(const ctrl of ['select','yn','drag'])for(const lang of ['zh','en','both']){
  c.state.lang=lang;c.state.boxChoiceOrder={};
  const b={id:'1',label:'陈述',labelZh:'陈述',labelEn:'Statement',answer:'Yes',choices:[{key:'Yes',zh:'是',en:'Yes'},{key:'No',zh:'否',en:'No'}]};
  const q={id:ctrl,type:ctrl==='drag'?'drag':'hotspot',control:ctrl,boxes:[b]};
  const before=c.renderBoxesHtml(q,{},false,'test');assert(!/is-answer|is-wrong|box-mark|正确答案|你的选择/.test(before));
  const right=c.renderBoxesHtml(q,{'1':'Yes'},true,'test');assert(!/box-mark|正确答案|你的选择|✗/.test(right));
  const wrong=c.renderBoxesHtml(q,{'1':'No'},true,'test');assert(wrong.includes('正确答案：'));assert(wrong.includes(' ｜ 你的选择：'));assert(!wrong.includes('✗'));
  assert.equal(c.boxFeedbackText(b,'No'),'正确答案：'+(lang==='zh'?'是':lang==='en'?'Yes':'是 / Yes')+' ｜ 你的选择：'+(lang==='zh'?'否':lang==='en'?'No':'否 / No'));
  assert(c.boxFeedbackText(b,'').endsWith('你的选择：未选择'));
 }
});
const candidate='/workspace/ai103-redo-work/interactive/audit-fix-202611100825/artifacts/banks/az305/202611100825.json';
test('本次真实286题：答案未改变、分组固定、译文/乱码清理且交互反馈一致',{skip:!fs.existsSync(candidate)},()=>{
 const bank=JSON.parse(fs.readFileSync(candidate)),previous=JSON.parse(fs.readFileSync('/workspace/ai103-redo-work/interactive/release/artifacts/banks/az305/202611092331.json'));const c=app();
 assert.equal(bank.length,286);let count=0;
 for(let i=0;i<bank.length;i++){
  const q=bank[i],old=previous[i];assert.equal(q.id,old.id);assert.deepEqual(q.answer,old.answer);assert.deepEqual(q.pdfAnswer,old.pdfAnswer);
  for(const f of ['stemEn','stemZh','explanationEn','explanationZh','caseStudyTextEn','caseStudyTextZh'])assert(!/[\u0590-\u08ff\u202a-\u202e\ufffd]|Ã.|â€.|ï¿½/.test(q[f]||''),q.id+'/'+f);
  if(/(?<![A-Za-z])[A-H][–—-][A-H](?![A-Za-z])/.test(q.stemEn+' '+q.stemZh))assert.equal(q.preserveOptionOrder,true,q.id);
  const good=c.correctSelection(q);assert(c.isCorrect(q,good));
  if(c.isBoxQ(q)){
   const b=q.boxes[0],bad={...good,[b.id]:b.choices.find(x=>x.key!==b.answer).key};
   assert(!c.isCorrect(q,bad));assert(!c.renderBoxesHtml(q,good,true,'test').includes('box-mark'));
   assert(c.renderBoxesHtml(q,bad,true,'test').includes(' ｜ 你的选择：'));count++;
  }
 }
 assert.equal(count,102);const q25=bank.find(q=>q.id==='az305-pdf-t3-q25');assert.equal(c.shuffleOptions(q25),q25);
 const q22=bank.find(q=>q.id==='az305-pdf-t4-q22');assert(q22.boxes[0].choices.every(ch=>/[\u4e00-\u9fff]/.test(ch.zh)));
});
test('旧四库所有框题沿用相同答错摘要/答对仅绿色规则',{skip:!fs.existsSync('/workspace/ai103/questions.js')},()=>{
 const c=app();let questions=0,boxes=0;
 for(const [file,key] of [['questions.js','QUESTIONS_AI103'],['banks/questions-dp-700.js','QUESTIONS_DP_700'],['banks/questions-dp-420.js','QUESTIONS_DP_420'],['banks/questions-dop-c02.js','QUESTIONS_DOP_C02']]){
  const x={window:{}};vm.createContext(x);vm.runInContext(fs.readFileSync('/workspace/ai103/'+file,'utf8'),x);const bank=x.window[key]||x[key]||x.QUESTIONS||x.window.QUESTIONS;
  for(const q of bank){questions++;if(!c.isBoxQ(q)||c.isSelfCheck(q))continue;const good=c.correctSelection(q);assert(c.isCorrect(q,good));
   assert(!c.renderBoxesHtml(q,good,true,'old').includes('box-mark'),q.id);for(const b of q.boxes){const bad=b.choices.find(ch=>!c.sameKey(c.choiceKey(ch),b.answer));if(!bad)continue;assert(c.boxFeedbackText(b,c.choiceKey(bad)).includes(' ｜ 你的选择：'));boxes++;}
  }
 }
 assert.equal(questions,972);assert(boxes>0);
});
test('前台缓存版本升级，题库指针仍指向202611100825',()=>{
 const front='202611111943', bank='202611100825', dva='202611102145';
 for(const f of ['index.html','admin.html','sw.js']){
  const text=fs.readFileSync(path.join(repo,f),'utf8');assert(text.includes(front),f);
  assert(!/202611100825|202611092331|202611092210/.test(text),f);
 }
 const cfg=fs.readFileSync(path.join(repo,'js/account-config.js'),'utf8');
 assert(cfg.includes('az305/'+bank+'.json'));
 assert(!cfg.includes('az305/'+front+'.json'));
 assert(cfg.includes('dva-c02/'+dva+'.json'));
 const media=fs.readFileSync(path.join(repo,'supabase/functions/itc-bank/media.mjs'),'utf8');
 assert(media.includes("AZ_VERSION='"+bank+"'"));
 assert(media.includes("DVA_VERSION='"+dva+"'"));
});
test('练习模式显示答案：仅自评题隐藏，AZ-305交互题可显示/始终显示',()=>{
 assert(!/currentExamId === "az305" \|\| isSelfCheck/.test(source));
 assert(!/const noReveal = currentExamId === "az305" \|\| self/.test(source));
 const start=source.indexOf('  function isPracticeRevealed(q) {');
 const end=source.indexOf('\n  }',start);
 const body=source.slice(start,end+4);
 assert(body.includes('if (isSelfCheck(q)) return false;'));
 assert(!body.includes('az305'));
 const nr=source.indexOf('const noReveal = self;');
 assert(nr>0);
 // evaluate isPracticeRevealed against interactive vs self-check
 const c={window:{ITCERT_IMAGE:require('../js/image-questions.js')},state:{practiceSubmitted:{},practiceShowAll:false,practiceReveal:{}},currentExamId:'az305',isSelfCheck:null};
 c.isSelfCheck=(q)=>c.window.ITCERT_IMAGE.isSelfCheck(q);
 vm.createContext(c);
 vm.runInContext(body,c);
 const box={id:'az305-pdf-t1-q1',type:'hotspot',control:'select',boxes:[{id:'1',answer:'A',choices:[{key:'A'},{key:'B'}]}],answer:['A']};
 const selfQ={id:'img1',type:'drag',options:[],answer:[]};
 assert(c.window.ITCERT_IMAGE.isSelfCheck(selfQ));
 assert(!c.window.ITCERT_IMAGE.isSelfCheck(box));
 c.state.practiceReveal[box.id]=true;
 assert.equal(c.isPracticeRevealed(box),true);
 assert.equal(c.isPracticeRevealed(selfQ),false);
 c.state.practiceReveal={};c.state.practiceShowAll=true;
 assert.equal(c.isPracticeRevealed(box),true);
 assert.equal(c.isPracticeRevealed(selfQ),false);
 c.state.practiceShowAll=false;c.state.practiceSubmitted[box.id]=true;c.state.practiceReveal[box.id]=true;
 assert.equal(c.isPracticeRevealed(box),false);
});
