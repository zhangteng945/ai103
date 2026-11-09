import{test}from'node:test';import assert from'node:assert/strict';import fs from'node:fs';import crypto from'node:crypto';import{AZ_VERSION}from'../supabase/functions/itc-bank/media.mjs';
const root=process.env.AZ305_INTERACTIVE_ARTIFACTS||'/workspace/ai103-redo-work/interactive/release/artifacts',manifest=root+'/manifest.json';
test('新版真实发布物286题双语自动判分；无原图自评或提交前答案截图',{skip:!fs.existsSync(manifest)},()=>{
 const bank=JSON.parse(fs.readFileSync(root+`/banks/az305/${AZ_VERSION}.json`)),source=JSON.parse(fs.readFileSync('/workspace/ai103-redo-work/interactive/full-draft/bank-final.json'));
 assert.equal(bank.length,286);assert.equal(bank.filter(q=>q.gradingMode==='automatic').length,286);assert.equal(bank.filter(q=>q.gradingMode==='self_check').length,0);
 for(let i=0;i<bank.length;i++){const q=bank[i];assert.deepEqual(q.answer,source[i].answer);assert.deepEqual(q.boxes,source[i].boxes);assert.equal(q.stemEn,source[i].stemEn);assert.equal(q.stemZh,source[i].stemZh);assert(q.stemZh);assert.equal(q.contentFormat,'pdf_text_v1');assert(!q.questionImages);assert(!q.answerImages);assert(!q._audit);if(q.caseStudy){assert(q.caseStudyTextEn.length>1000);assert(q.caseStudyTextZh.length>500);}assert(!/Most\s+Voted|Correct\s+Answer\s*:/i.test(q.stem+' '+q.options.map(o=>o.text).join(' ')));}
 const m=JSON.parse(fs.readFileSync(manifest));assert.equal(m.version,AZ_VERSION);assert.equal(m.media,0);assert.equal(m.files.length,1);
 for(const item of m.files){assert.equal(item.path,`az305/${AZ_VERSION}.json`);const b=fs.readFileSync(root+'/banks/'+item.path);assert.equal(b.length,item.bytes);assert.equal(crypto.createHash('sha256').update(b).digest('hex'),item.sha256);}
});
