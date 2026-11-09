import {test}from'node:test';import assert from'node:assert/strict';import fs from'node:fs/promises';
let handler,uploads=[],role='admin',valid=true,fail=false;
globalThis.Deno={env:{get:n=>({SUPABASE_URL:'https://local.invalid',SUPABASE_SERVICE_ROLE_KEY:'LOCAL-TEST-ONLY'})[n]},serve:h=>handler=h};
globalThis.__testClientFactory=()=>({auth:{getUser:async()=>({data:{user:valid?{id:'123e4567-e89b-42d3-a456-426614174000',app_metadata:{role}}:null},error:valid?null:{}})},storage:{from:bucket=>({upload:async(path,data,options)=>{uploads.push({bucket,path,options});return {error:fail?{}:null};}})}});
let code=await fs.readFile(new URL('../supabase/functions/itc-pdf-candidate/index.ts',import.meta.url),'utf8');
code=code.replace("import {createClient} from 'npm:@supabase/supabase-js@2';","const createClient=globalThis.__testClientFactory;")
 .replace("'./validation.mjs'",JSON.stringify(new URL('../supabase/functions/itc-pdf-candidate/validation.mjs',import.meta.url).href));
// Node 24 removes TS syntax but imports remain intact; no Deno installation/network required.
const {stripTypeScriptTypes}=await import('node:module');code=stripTypeScriptTypes(code);
await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
const post=(body,headers={})=>handler(new Request('https://local.invalid',{method:'POST',headers:{authorization:'Bearer LOCAL-TEST','origin':'https://zhangteng945.github.io',...headers},body:JSON.stringify(body)}));
test('真实处理函数：无令牌401、普通账号403、恶意来源403，均无写入',async()=>{
 uploads=[];assert.equal((await post({action:'begin'},{authorization:''})).status,401);
 role='student';assert.equal((await post({action:'begin'})).status,403);role='admin';
 assert.equal((await post({action:'begin'},{origin:'https://evil.invalid'})).status,403);assert.equal(uploads.length,0);
});
test('真实处理函数：大请求413、非法图片400、非法动作400',async()=>{
 assert.equal((await post({x:'x'.repeat(3000001)})).status,413);
 const id='123e4567-e89b-42d3-a456-426614174001';assert.equal((await post({action:'asset',id,data:'evil'})).status,400);
 assert.equal((await post({action:'publish',id})).status,400);
});
test('真实处理函数：候选只写隔离桶，upsert=false，没有发布能力',async()=>{
 uploads=[];const id=(await (await post({action:'begin'})).json()).id;
 const candidate={schema:'itcert-pdf-candidate-v1',status:'candidate',name:'样本',questions:[{id:'1',type:'image',stem:'题',options:[],answer:[],answerText:'PDF转写'}]};
 assert.equal((await post({action:'finalize',id,candidate})).status,200);
 assert.equal(uploads[0].bucket,'pdf-candidates');assert.equal(uploads[0].options.upsert,false);assert.equal(uploads[0].path.endsWith('/candidate.json'),true);
 fail=true;assert.equal((await post({action:'finalize',id,candidate})).status,409);fail=false;
});
