import{test}from'node:test';import assert from'node:assert/strict';import fs from'node:fs';import crypto from'node:crypto';
const root='/workspace/ai103-pdf-upload-demo/release/artifacts',manifest=root+'/manifest.json';
test('真实发布物286题保留PDF答案；选择题只显示独立展图，不显示含投票答案原截图',{skip:!fs.existsSync(manifest)},()=>{
 const bank=JSON.parse(fs.readFileSync(root+'/banks/az305/202611092210.json')),source=JSON.parse(fs.readFileSync('/workspace/ai103-redo-work/az305-full-candidate.json'));
 assert.equal(bank.length,286);assert.equal(bank.filter(q=>q.gradingMode==='options').length,183);assert.equal(bank.filter(q=>q.gradingMode==='self_check').length,103);
 for(let i=0;i<bank.length;i++){const q=bank[i];assert.deepEqual(q.answer,source[i].answer);assert.equal(q.answerText,source[i].answerText);if(q.gradingMode==='options'){assert(q.originalQuestionImages.length);for(const a of q.questionImages)assert(/-exhibit-\d+\.png$/.test(a.file));assert(!/Most\s+Voted|Correct\s+Answer\s*:/i.test(q.stem+' '+q.options.map(o=>o.text).join(' ')));}}
 const m=JSON.parse(fs.readFileSync(manifest));assert.equal(new Set(m.files.map(f=>f.path)).size,m.files.length);
 for(const item of m.files){assert(item.path.startsWith('az305/202611092210'));const b=fs.readFileSync(root+'/banks/'+item.path);assert.equal(b.length,item.bytes);assert.equal(crypto.createHash('sha256').update(b).digest('hex'),item.sha256);}
});
