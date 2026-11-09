const {test}=require('node:test');const assert=require('node:assert/strict');const core=require('../js/pdf-import-core.js');
const page=(number,text,mode='text')=>({number,height:842,mode,confidence:mode==='text'?99:70,lines:text.split('\n').map((text,i)=>({text,y:30+i*20}))});
test('只取PDF答案，不取讨论；跨页、重复题号不冲突',()=>{
 const q=core.parse([page(1,'Question #1 Topic 1\nTest\nA. One\nB. Two\nCorrect Answer: B\nComments\nCorrect Answer: A'),page(2,'Question #1 Topic 2\nOther question\nA. a\nB. b'),page(3,'Correct Answer: A\nComments')],'a.pdf');
 assert.equal(q.length,2);assert.deepEqual(q[0].answer,['B']);assert.deepEqual(q[1].answer,['A']);assert.notEqual(q[0].id,q[1].id);assert.equal(q[1].source.answerPage,3);
});
test('中文OCR题号与答案',()=>{const q=core.parse([page(1,'第 12 题\n请选择\nA、甲\nB、乙\n正确答案：B','ocr')],'a.pdf');assert.equal(q[0].number,12);assert.deepEqual(q[0].answer,['B']);});
test('图片答案不从社区猜测，不设置待核对标志',()=>{const [q]=core.parse([page(1,'Question #5 Topic 1\nHOTSPOT\nChoose\nCorrect Answer:\nComments\nB. community guess')],'a.pdf');assert.equal(q.type,'hotspot');assert.equal(q.answerText,'');assert.deepEqual(q.answer,[]);assert.equal(q.needs_review,undefined);});
test('假PDF与超大文件在解析前拒绝',()=>{
 assert.throws(()=>core.validateFile({name:'a.pdf',size:10},new TextEncoder().encode('<html')));
 assert.throws(()=>core.validateFile({name:'a.pdf',size:257*1024*1024},new TextEncoder().encode('%PDF-')));
 assert.throws(()=>core.validateFile({name:'a.exe',size:12},new TextEncoder().encode('%PDF-')));
});
test('候选保留中文署名、独立状态、图片题文字答案',()=>{
 const c=core.candidate('AZ-305',[{id:'x',stem:'<script>alert(1)</script>',type:'hotspot',options:[],images:[],answerEvidence:[],answer:[],answerText:'Box1: X'}],{});assert.equal(c.status,'candidate');assert.equal(c.author,'星火');assert.equal(c.questions[0].control,'image');
});

test('中文扫描件结构标记隔离评论，兼容OCR竖线噪声与中文题号',()=>{const [q]=core.parse([page(1,'问题#1 主题1\n题干\n| AInAzure first\nB. second\n正确答案：A |\n评 论\n所选答案：B')],'scan.pdf');assert.equal(q.number,1);assert.equal(q.options.length,2);assert.deepEqual(q.answer,['A']);assert.equal(q.answerText,'A');});
