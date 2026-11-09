import fs from'node:fs/promises';import path from'node:path';import crypto from'node:crypto';
const source='/workspace/ai103-redo-work',target=process.argv[2]||'/workspace/ai103-pdf-upload-demo/release/artifacts',version='202611092210';
const questions=JSON.parse(await fs.readFile(source+'/az305-full-candidate.json','utf8'));if(questions.length!==286)throw Error('题数必须为286');
const files=new Map();
await fs.mkdir(target,{recursive:true});
const {execFileSync}=await import('node:child_process');execFileSync('python3',['tooling/package-question-exhibits.py',target],{stdio:'inherit'});
const exhibits=JSON.parse(await fs.readFile(target+'/question-exhibits.json','utf8'));
function walk(value){
 if(typeof value==='string'&&value.startsWith('full-bank/media/')){const name=path.basename(value);if(!/^[a-zA-Z0-9._-]+\.png$/.test(name))throw Error('非法媒体文件名');const dest=`az305/${version}/media/${name}`;files.set(dest,source+'/'+value);return dest;}
 if(Array.isArray(value))return value.map(walk);if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,walk(v)]));return value;
}
const bank=questions.map((q,i)=>({...walk(q),bankSequence:i+1,type:q.type==='drag'&&/in which order|in the correct order|correct sequence/i.test(q.stem)?'ordering':q.type,domainLabel:q.domain,answerTextEn:q.answerText,answerTextZh:'',caseStudyTextEn:q.caseStudyText||'',pdfRef:'PDF原题 '+q.pdfQuestionNum,pdfPage:q.source.pageStart}));
for(const q of bank){
 if(q.gradingMode==='options'){
  q.originalQuestionImages=q.questionImages;q.questionImages=exhibits[q.id]||[];
  for(const a of q.questionImages)files.set(a.file,target+'/banks/'+a.file);
 }
}
await fs.mkdir(target+'/banks/az305',{recursive:true});const rows=[];
const bankPath=`az305/${version}.json`;await fs.writeFile(target+'/banks/'+bankPath,JSON.stringify(bank));
for(const [dest,src]of files){await fs.mkdir(path.dirname(target+'/banks/'+dest),{recursive:true});if(src!==target+'/banks/'+dest)await fs.copyFile(src,target+'/banks/'+dest);}
for(const relative of [bankPath,...files.keys()]){const bytes=await fs.readFile(target+'/banks/'+relative);rows.push({bucket:'banks',path:relative,bytes:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex')});}
await fs.writeFile(target+'/manifest.json',JSON.stringify({exam:'az305',version,total:286,files:rows},null,2));
console.log(JSON.stringify({version,questions:bank.length,media:files.size,bytes:rows.reduce((s,f)=>s+f.bytes,0),target}));
