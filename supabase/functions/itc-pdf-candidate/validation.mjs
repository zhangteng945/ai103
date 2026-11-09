export const BUCKET='pdf-candidates';
export function allowedAdmin(user) {return !!user && user.app_metadata?.role==='admin';}
export function prefix(user,id) {
 if(!/^[0-9a-f-]{36}$/i.test(user)||!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id||''))throw Error('候选标识无效');
 return `${user}/${id}/`;
}
export function imageBytes(data) {
 if(typeof data!=='string'||data.length>2900000||!/^data:image\/jpeg;base64,[A-Za-z0-9+/]+=*$/.test(data))throw Error('仅支持小于2兆字节的JPEG原图');
 const bin=atob(data.slice(data.indexOf(',')+1));
 if(bin.length>2*1024*1024||bin.charCodeAt(0)!==255||bin.charCodeAt(1)!==216||bin.charCodeAt(2)!==255)throw Error('原图格式或大小无效');
 return Uint8Array.from(bin,c=>c.charCodeAt(0));
}
export function validateCandidate(c,root) {
 if(!c||c.schema!=='itcert-pdf-candidate-v1'||c.status!=='candidate'||typeof c.name!=='string'||!c.name.trim()||c.name.length>80)throw Error('候选格式无效');
 if(!Array.isArray(c.questions)||!c.questions.length||c.questions.length>2000)throw Error('题数无效');
 if(JSON.stringify(c).length>2800000)throw Error('候选文字过大，请拆分');
 const ids=new Set();let images=0;
 for(const q of c.questions){
  if(typeof q.id!=='string'||q.id.length>100||ids.has(q.id)||typeof q.stem!=='string'||q.stem.length>60000||typeof q.answerText!=='string'||q.answerText.length>60000)throw Error('题目格式或标识无效');
  ids.add(q.id);
  if(!['single','multi','image','hotspot','drag'].includes(q.type)||!Array.isArray(q.options)||q.options.length>30||!Array.isArray(q.answer)||q.answer.length>30)throw Error('题型或选项无效');
  for(const a of [...(q.images||[]),...(q.answerEvidence||[])]){
   if(typeof a.path!=='string'||!a.path.startsWith(root+'assets/')||!/^assets\/[0-9a-f-]{36}\.jpg$/.test(a.path.slice(root.length))||a.data)throw Error('原图路径无效');
   images++;
  }
 }
 if(images>4000)throw Error('原图数量超过限制');
 return c;
}
