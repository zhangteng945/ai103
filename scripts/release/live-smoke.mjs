/* 星火 · 发布后真实只读验收。凭据只从已授权环境读取，不写日志/文件；不改账号/进度/设备。 */
import fs from'node:fs/promises';import vm from'node:vm';import assert from'node:assert/strict';import{chromium}from'playwright';
const out=process.argv[2];if(!out)throw Error('缺少验收报告目录');
const admin=process.env.ADMIN_ACCESS_TOKEN,student=process.env.STUDENT_ACCESS_TOKEN;
if(!admin||!student)throw Error('缺少真实管理员/普通学员访问令牌，停止，不猜测、不获取其它登录凭据');
const scope={window:{}};vm.runInNewContext(await fs.readFile('js/supabase-config.js','utf8'),scope);const key=scope.window.__AI103_SUPABASE__.anonKey;
const direct='https://paswovhtsoljydywdmvb.supabase.co',proxy='https://1521755270-k0eh7082k7.ap-hongkong.tencentscf.com',site='https://zhangteng945.github.io/ai103/';const results=[];
async function request(base,path,token,method='GET',body){const r=await fetch(base+path,{method,headers:{apikey:key,Origin:'https://zhangteng945.github.io',...(token?{Authorization:'Bearer '+token}:{}),...(body?{'Content-Type':'application/json'}:{})},body:body?JSON.stringify(body):undefined,signal:AbortSignal.timeout(30000)});return{status:r.status,cors:r.headers.get('access-control-allow-origin'),data:await r.json().catch(()=>null)};}
const none=await request(direct,'/functions/v1/itc-bank?exam=az305');assert.equal(none.status,401);results.push({test:'未登录题库401',status:none.status});
const au=await request(direct,'/auth/v1/user',admin),su=await request(direct,'/auth/v1/user',student);assert.equal(au.data?.app_metadata?.role,'admin');assert.notEqual(su.data?.app_metadata?.role,'admin');assert(!su.data?.app_metadata?.exams?.includes('az305'),'必须提供尚未分配AZ305的普通账号');
for(const exam of ['ai103','dop-c02','dp-700','dp-420']){const r=await request(direct,'/functions/v1/itc-bank?exam='+exam+'&meta=1',admin);assert.equal(r.status,200);assert(r.data.total>0);results.push({test:'旧库'+exam,total:r.data.total,version:r.data.version});}
const pin=await request(direct,'/functions/v1/itc-bank?exam=ai103&version=202611011900&meta=1',admin);assert.equal(pin.status,200);assert.equal(pin.data.version,'202611011900');results.push({test:'AI103旧pin202611011900',status:pin.status});
const deny=await request(direct,'/functions/v1/itc-bank?exam=az305&meta=1',student);assert.equal(deny.status,403);results.push({test:'普通学员AZ305拒绝',status:deny.status});
const meta=await request(direct,'/functions/v1/itc-bank?exam=az305&meta=1',admin);assert.equal(meta.status,200);assert.equal(meta.data.total,286);assert(meta.cors==='*'||meta.cors==='https://zhangteng945.github.io');
const preflight=await request(direct,'/functions/v1/itc-bank',admin,'OPTIONS');assert.equal(preflight.status,200);results.push({test:'直连CORS预检',status:preflight.status});
let scf;try{scf=await request(proxy,'/functions/v1/itc-bank?exam=az305&meta=1',admin);}catch{scf={status:'网络失败'};}
assert(scf.status===200||scf.status===404||scf.status===502||scf.status===503||scf.status==='网络失败');results.push({test:'香港代理入口',status:scf.status,fallback:scf.status!==200});
for(const token of [null,student,admin]){const r=await request(direct,'/functions/v1/itc-pdf-candidate',token,'POST',{action:'begin'});assert.equal(r.status,token===admin?200:token===student?403:401);results.push({test:'候选入口角色检查',role:token===admin?'管理员':token===student?'普通学员':'未登录',status:r.status});}
const packaged=JSON.parse(await fs.readFile('/workspace/ai103-pdf-upload-demo/release/artifacts/banks/az305/202611092210.json','utf8'));
for(const number of [1,3,5,10,12,15,59]){
 const q=packaged[number-1];const r=await request(direct,'/functions/v1/itc-bank?exam=az305&ids='+encodeURIComponent(q.id),admin);assert.equal(r.status,200);assert.equal(r.data.questions[0].id,q.id);
 const image=r.data.questions[0].questionImages[0];if(!image){assert.equal(q.gradingMode,'options');results.push({test:'文字选择题无含答案原截图',number});continue;}const ir=await fetch(image.url);assert.equal(ir.status,200);
 const denied=await request(direct,'/storage/v1/object/authenticated/banks/'+image.storagePath,student);assert(denied.status!==200);results.push({test:'题型与私有媒体',number,type:q.type,imageStatus:ir.status,directStudentStorageStatus:denied.status});
}
const html=await(await fetch(site,{cache:'no-store'})).text();assert(html.includes('202611092210'));const sw=await(await fetch(site+'sw.js',{cache:'no-store'})).text();assert(sw.includes('202611092210'));
const browser=await chromium.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox']});
try{const context=await browser.newContext({viewport:{width:390,height:844}});const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await context.addInitScript(({token,user})=>{localStorage.setItem('itcert_account_session_v1',JSON.stringify({access:token,exp:Date.now()+600000,user:{id:user.id,email:user.email,role:user.app_metadata.role,exams:user.app_metadata.exams}}));localStorage.setItem('itcert_exam_id_v1','az305');}, {token:admin,user:au.data});
 await context.route('**/rest/v1/**',route=>route.fulfill({status:200,json:{ok:true}})); // 禁止验收改动设备/进度；仅这些写入被替换。
 await page.goto(site);await page.locator('#btn-go-practice').click();await page.waitForSelector('#practice-options .option');assert.equal(await page.locator('.answer-evidence').count(),0);await page.screenshot({path:out+'/live-az305-mobile.png',fullPage:true});
 for(const n of [5,10,12,15,59]){await page.locator('#practice-jump-input').fill(String(n));await page.locator('#practice-jump').evaluate(f=>f.requestSubmit());await page.waitForFunction(id=>document.querySelector('#practice-body .q-meta')?.textContent.includes(id),packaged[n-1].id);await page.waitForSelector('.self-response');await page.locator('#btn-practice-submit').click();await page.waitForSelector('.self-answer');await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:out+`/live-${n}-mobile.png`,fullPage:true});await page.locator('[data-self-rate="1"]').click();}
 assert.equal(errors.length,0);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2));
 await context.route(proxy+'/**',route=>route.fulfill({status:404,json:{error:'只读验收强制代理回退'}}));
 await page.reload();await page.locator('#btn-go-practice').click();await page.locator('#practice-jump-input').fill('1');await page.locator('#practice-jump').evaluate(f=>f.requestSubmit());await page.waitForFunction(id=>document.querySelector('#practice-body .q-meta')?.textContent.includes(id),packaged[0].id);await page.waitForSelector('#practice-options .option');
 results.push({test:'真实页面强制代理404后直连回退',passed:true});await context.close();
}finally{await browser.close();}
await fs.writeFile(out+'/live-results.json',JSON.stringify({passed:true,version:'202611092210',results,noAuthProgressDeviceChanges:true},null,2));console.log('真实入口只读验收通过；报告已保存，未改账号、进度或设备。');
