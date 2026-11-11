import {test}from'node:test';import assert from'node:assert/strict';import fs from'node:fs/promises';import {stripTypeScriptTypes}from'node:module';
let handler,downloads=[];
globalThis.Deno={env:{get:n=>({SUPABASE_URL:'https://local.invalid',SUPABASE_ANON_KEY:'local-anon',SUPABASE_SERVICE_ROLE_KEY:'local-service'})[n]},serve:h=>handler=h};
const bank=[{id:'old-1',stem:'旧库测试题',type:'single',options:[{id:'A',text:'旧选项'}],answer:['A']}];
globalThis.__bankTestClient=()=>({auth:{getUser:async()=>({data:{user:{id:'local',app_metadata:{exams:['*']}}}})},from:()=>({select:()=>({eq(){return this;},gte:async()=>({count:0})}),insert:async()=>({})}),storage:{from:bucket=>({download:async path=>{downloads.push({bucket,path});return {data:new Blob([JSON.stringify(bank)]),error:null};}})}});
let source=await fs.readFile(new URL('../supabase/functions/itc-bank/index.ts',import.meta.url),'utf8');source=source.replace('import { createClient } from "npm:@supabase/supabase-js@2";','const createClient=globalThis.__bankTestClient;');
source=source.replace('"./media.mjs"',JSON.stringify(new URL('../supabase/functions/itc-bank/media.mjs',import.meta.url).href));
await import('data:text/javascript;base64,'+Buffer.from(stripTypeScriptTypes(source)).toString('base64'));
test('四个旧题库默认版本和显式旧版本pin读取均不受PDF候选影响（存储隔离模拟）',async()=>{
 const defaults={ai103:'202611011910','dop-c02':'202611011900','dp-700':'202611112115','dp-420':'202611011900'};
 for(const [exam,version]of Object.entries(defaults))for(const pin of [null,'old-pin-202610','202611011900']){
 const response=await handler(new Request('https://local.invalid?exam='+exam+(pin?'&version='+pin:''),{headers:{authorization:'Bearer LOCAL'}}));
 assert.equal(response.status,200);const data=await response.json();assert.equal(data.version,pin||version);assert.equal(data.questions[0].id,'old-1');assert.deepEqual(downloads.at(-1),{bucket:'banks',path:exam+'/'+(pin||version)+'.json'});
 }
});
