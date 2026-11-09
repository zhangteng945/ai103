/** 星火 · 独立候选保存入口；没有发布、更新旧库、覆盖版本的能力。 */
import {createClient} from 'npm:@supabase/supabase-js@2';
import {allowedAdmin,prefix,imageBytes,validateCandidate,BUCKET} from './validation.mjs';
const ORIGINS=(Deno.env.get('PDF_ALLOWED_ORIGINS')||'https://zhangteng945.github.io').split(',');
Deno.serve(async(req:Request)=>{
 const origin=req.headers.get('origin')||'';
 const cors={'Access-Control-Allow-Origin':ORIGINS.includes(origin)?origin:ORIGINS[0],
  'Access-Control-Allow-Headers':'authorization,apikey,content-type','Access-Control-Allow-Methods':'POST,OPTIONS','Vary':'Origin','Cache-Control':'no-store'};
 const reply=(data:unknown,status=200)=>new Response(JSON.stringify(data),{status,headers:{...cors,'Content-Type':'application/json'}});
 if(origin&&!ORIGINS.includes(origin))return reply({error:'来源不允许'},403);
 if(req.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
 if(req.method!=='POST')return reply({error:'方法不允许'},405);
 const token=(req.headers.get('authorization')||'').replace(/^Bearer\s+/i,'');
 if(!token)return reply({error:'请先登录'},401);
 const url=Deno.env.get('SUPABASE_URL')||'',key=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')||'';
 if(!url||!key)return reply({error:'服务未配置'},503);
 const client=createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});
 const {data:auth,error:authError}=await client.auth.getUser(token);
 if(authError||!auth.user)return reply({error:'登录已过期'},401);
 if(!allowedAdmin(auth.user))return reply({error:'仅管理员可以保存候选'},403);
 // Count streamed bytes, not just Content-Length (which may be absent or forged).
 if(Number(req.headers.get('content-length')||0)>3000000)return reply({error:'请求过大，请拆分'},413);
 let size=0;const parts:Uint8Array[]=[];
 try{
  if(!req.body)throw Error('缺少请求内容');
  const reader=req.body.getReader();
  while(true){const {value,done}=await reader.read();if(done)break;size+=value.length;
   if(size>3000000){await reader.cancel();return reply({error:'请求过大，请拆分'},413);}parts.push(value);}
  const bytes=new Uint8Array(size);let offset=0;for(const p of parts){bytes.set(p,offset);offset+=p.length;}
  const body=JSON.parse(new TextDecoder().decode(bytes));
  if(body.action==='begin')return reply({id:crypto.randomUUID()});
  const root=prefix(auth.user.id,body.id);
  if(body.action==='asset'){
   const image=imageBytes(body.data);const path=root+'assets/'+crypto.randomUUID()+'.jpg';
   const {error}=await client.storage.from(BUCKET).upload(path,image,{contentType:'image/jpeg',upsert:false});
   if(error)return reply({error:'原图保存失败，请确认候选存储已配置'},503);
   return reply({path});
  }
  if(body.action==='finalize'){
   const candidate=validateCandidate(body.candidate,root);
   // Only server-owned provenance/identity; no active field is accepted or used.
   const stored={...candidate,status:'candidate',createdBy:auth.user.id,savedAt:new Date().toISOString()};
   const path=root+'candidate.json';
   const {error}=await client.storage.from(BUCKET).upload(path,JSON.stringify(stored),{contentType:'application/json',upsert:false});
   if(error)return reply({error:'候选保存失败（可能已存在）；旧题库未改变'},409);
   return reply({path,status:'candidate',published:false});
  }
  return reply({error:'操作不支持'},400);
 }catch(e){return reply({error:e instanceof Error?e.message:'请求无效'},400);}
});
