export const AZ_VERSION='202611092331';
export function hasAzAccess(am){return am?.role==='admin'||(Array.isArray(am?.exams)&&am.exams.includes('az305'));}
export function mediaPath(path,version){return typeof path==='string' && path.startsWith(`az305/${version}/media/`) && /^az305\/[A-Za-z0-9._-]{1,64}\/media\/[a-zA-Z0-9._-]+\.png$/.test(path) ? path : null;}
export async function signMedia(client,questions,version){
 const paths=new Set();for(const q of questions)for(const field of ['questionImages','answerImages','caseStudyImages'])for(const a of q[field]||[]){const path=mediaPath(a.file,version);if(!path)throw Error('媒体路径无效');paths.add(path);}
 const map=new Map();const list=[...paths];
 for(let i=0;i<list.length;i+=100){const {data,error}=await client.storage.from('banks').createSignedUrls(list.slice(i,i+100),900);if(error)throw Error('媒体签名失败');for(const item of data||[]){if(item.error||!item.signedUrl)throw Error('媒体对象不存在或签名失败');map.set(item.path,item.signedUrl);}}
 return questions.map(q=>{const copy={...q,mediaExpiresAt:Date.now()+900000};for(const field of ['questionImages','answerImages','caseStudyImages'])copy[field]=(q[field]||[]).map(a=>({...a,storagePath:a.file,url:map.get(a.file)}));return copy;});
}
