/* Read-only guard for normalized candidates; does not write storage or deploy. */
const fs=require('node:fs');const image=require('../js/image-questions.js');
function validate(qs,{full=false}={}) {
 const errors=[],ids=new Set();if(!Array.isArray(qs))return ['Root must be a question array'];if(full&&qs.length!==286)errors.push('Full release must contain exactly 286 questions');
 for(const q of qs){const tag=q.id||'<missing id>';const fail=s=>errors.push(tag+': '+s);
  if(!q.id||ids.has(q.id))fail('missing/duplicate id');ids.add(q.id);
  if(q.examId!=='az305'||q.contentFormat!=='pdf_text_v1')fail('missing opt-in text schema');
  if(!q.stemEn||!q.stemZh)fail('missing bilingual stem');
  if(q.explanationEn&&!q.explanationZh)fail('English explanation is not translated');
  if(q.caseStudy&&(!q.caseStudyTextEn||!q.caseStudyTextZh))fail('case background is not bilingual');
  if(q.needs_review||q.gradingMode==='self_check'||q.answerFormat==='image_text'||image.isSelfCheck(q))fail('self-check/review mode is not accepted');
  if(!['select','yn','drag','single','multi'].includes(q.control))fail('unknown control');
  if(['select','yn','drag'].includes(q.control)){
   if(!q.boxes?.length)fail('missing answer boxes');const boxIds=new Set();
   for(const b of q.boxes||[]){if(!b.id||boxIds.has(b.id))fail('missing/duplicate box id');boxIds.add(b.id);if(!b.labelEn||!b.labelZh)fail('missing bilingual box label');const keys=b.choices?.map(c=>c.key)||[];if(keys.length<2||keys.length!==new Set(keys).size)fail('incomplete/duplicate choice pool');if(!keys.includes(b.answer))fail('answer is not in its source pool');if(!b.choices?.every(c=>c.en&&c.zh))fail('missing choice translation');if(q.control==='yn'&&keys.join('|')!=='Yes|No')fail('YN must be Yes before No');}
  } else {
   if(!q.options?.length||!q.answer?.length)fail('missing choice options/answer');if(!q.options?.every(o=>o.textEn&&o.textZh))fail('missing option translation');for(const a of q.answer||[])if(!q.options?.some(o=>o.id===a&&!o.disabled))fail('invalid/disabled answer option');
  }
  if(!q._audit?.answerOrigin||!q._audit?.answerEvidence)fail('missing source evidence');
 }
 return errors;
}
if(require.main===module){const input=process.argv[2];if(!input)throw Error('Usage: node tooling/validate-az305-interactive.cjs input.json [--full]');const qs=JSON.parse(fs.readFileSync(input,'utf8')),errors=validate(qs,{full:process.argv.includes('--full')});console.log(JSON.stringify({valid:!errors.length,count:qs.length,full:process.argv.includes('--full'),errors},null,2));if(errors.length)process.exitCode=1;}
module.exports={validate};
