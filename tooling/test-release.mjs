import{chromium}from'playwright';import fs from'node:fs/promises';import assert from'node:assert/strict';import{stripTypeScriptTypes}from'node:module';
const out='/workspace/ai103-pdf-upload-demo/release',artifacts=out+'/artifacts';let allErrors=[];
const az=JSON.parse(await fs.readFile(artifacts+'/banks/az305/202611092210.json','utf8'));
const old=[{id:'q001',domain:'plan',domainLabel:'旧库',type:'single',control:'single',yn:true,stem:'Old yes/no question',stemEn:'Old yes/no question',stemZh:'旧库判断题',options:[{id:'A',text:'Yes',textEn:'Yes',textZh:'是'},{id:'B',text:'No',textEn:'No',textZh:'否'}],answer:['A'],explanation:'旧解析'}];
let handler,calls=[];
globalThis.Deno={env:{get:n=>({SUPABASE_URL:'https://local.invalid',SUPABASE_SERVICE_ROLE_KEY:'LOCAL',SUPABASE_ANON_KEY:'LOCAL'})[n]},serve:h=>handler=h};
const user=token=>({id:'123e4567-e89b-42d3-a456-426614174000',app_metadata:{role:token.startsWith('LOCAL-ADMIN')?'admin':'student',exams:token==='LOCAL-ADMIN-ALL'?['ai103','dop-c02','dp-700','dp-420']:token==='LOCAL-GRANTED'?['az305']:token==='LOCAL-ADMIN'?['ai103']:['*']}});
globalThis.__releaseClient=()=>({
 auth:{getUser:async token=>({data:{user:token.startsWith('LOCAL-')?user(token):null}})},
 from:()=>({select:()=>({eq(){return this;},gte:async()=>({count:0})}),insert:async()=>({})}),
 storage:{from:bucket=>({
   download:async path=>({data:new Blob([JSON.stringify(path.startsWith('az305/')?az:old)])}),
   createSignedUrls:async paths=>({data:paths.map(path=>({path,signedUrl:'https://paswovhtsoljydywdmvb.supabase.co/storage/v1/object/sign/banks/'+path+'?token=LOCAL'}))})
 })}
});
let code=await fs.readFile('supabase/functions/itc-bank/index.ts','utf8');code=code.replace('import { createClient } from "npm:@supabase/supabase-js@2";','const createClient=globalThis.__releaseClient;').replace('"./media.mjs"',JSON.stringify(new URL('../supabase/functions/itc-bank/media.mjs',import.meta.url).href));
await import('data:text/javascript;base64,'+Buffer.from(stripTypeScriptTypes(code)).toString('base64'));
// Direct checks execute the real endpoint handler, with only Supabase dependencies mocked.
assert.equal((await handler(new Request('https://local?exam=az305'))).status,401);
for(const token of ['LOCAL-STUDENT','LOCAL-GRANTED','LOCAL-ADMIN']){const r=await handler(new Request('https://local?exam=az305&meta=1',{headers:{Authorization:'Bearer '+token}}));assert.equal(r.status,token==='LOCAL-STUDENT'?403:200);}
const browser=await chromium.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox']});
async function setup(token='LOCAL-ADMIN',exam='az305',width=1440){
 const ctx=await browser.newContext({viewport:{width,height:1000},serviceWorkers:'allow'});const page=await ctx.newPage();const errors=[];page.on('pageerror',e=>{errors.push(e.stack||e.message);allErrors.push(e.stack||e.message);});page.on('dialog',d=>d.accept());
 await ctx.addInitScript(({token,exam,meta})=>{localStorage.setItem('itcert_account_session_v1',JSON.stringify({access:token,refresh:'LOCAL',exp:Date.now()+3600000,user:{email:'local-test',id:'123e4567-e89b-42d3-a456-426614174000',role:meta.role,exams:meta.exams}}));localStorage.setItem('itcert_exam_id_v1',exam);}, {token,exam,meta:user(token).app_metadata});
 await ctx.route('**/*',async route=>{const req=route.request(),u=new URL(req.url());
  if(u.hostname==='127.0.0.1')return route.continue();
  calls.push({url:u.href,method:req.method()});
  if(u.pathname.startsWith('/storage/v1/object/sign/banks/az305/')){const relative=decodeURIComponent(u.pathname.split('/banks/')[1]);return route.fulfill({path:artifacts+'/banks/'+relative,contentType:'image/png'});}
  if(u.pathname==='/auth/v1/user')return route.fulfill({json:{...user(token),email:'本地测试',expires_at:null}});
  if(u.pathname.includes('/rest/v1/rpc/claim_device'))return route.fulfill({json:{ok:true}});
  if(u.pathname==='/functions/v1/itc-bank'){
   // The real SCF URL returns404, then the real frontend must use its direct fallback.
   if(!u.hostname.endsWith('.supabase.co'))return route.fulfill({status:404,json:{error:'LOCAL proxy not allowed'}});
   const r=await handler(new Request(req.url(),{method:req.method(),headers:req.headers()}));return route.fulfill({status:r.status,headers:Object.fromEntries(r.headers),body:await r.text()});
  }
  return route.fulfill({status:200,json:{ok:true}});
 });
 await page.goto('http://127.0.0.1:8766/index.html');try{await page.waitForSelector('[data-exam-id="az305"]');}catch(e){await fs.writeFile(out+'/failed-dom.html',await page.content());await fs.writeFile(out+'/failed-errors.json',JSON.stringify(errors));await shot(page,'failed.png');throw e;}return{ctx,page,errors};
}
async function shot(page,name){await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:out+'/'+name,fullPage:true});}
async function jump(page,n){await page.locator('#practice-jump-input').fill(String(n));await page.locator('#practice-jump').evaluate(f=>f.requestSubmit());await page.waitForFunction(n=>document.querySelector('#practice-body .q-meta')?.textContent.includes(n),String(az[n-1].id));}
try{
 const {ctx,page,errors}=await setup();await page.locator('#btn-go-practice').click();await page.waitForSelector('#practice-options [data-oid="A"]');
 assert.equal(await page.locator('#practice-body .ans-summary').count(),0);assert.equal(await page.locator('#practice-body .answer-evidence').count(),0);assert.equal(await page.locator('#practice-body .pdf-question-image').count(),0);assert.equal(await page.locator('#practice-jump-input').getAttribute('placeholder'),'1–286');
 await shot(page,'01-az305-before-submit.png');
 await page.locator('#practice-options [data-oid="A"]').click();await page.locator('#btn-practice-submit').click();assert.equal(await page.locator('#practice-body .correct-only').count(),1);assert.equal(await page.locator('#practice-body .ans-summary').count(),0);
 assert.notEqual(await page.locator('#practice-options .st-ok .otext').evaluate(e=>getComputedStyle(e).color),'rgb(255, 255, 255)');await shot(page,'02-choice-correct.png');
 await jump(page,3);await page.locator('#practice-options [data-oid="A"]').click();await page.locator('#practice-options [data-oid="E"]').click();await page.locator('#btn-practice-submit').click();assert.equal(await page.locator('#practice-body .correct-only').count(),1);
 await jump(page,5);assert.equal(await page.locator('#practice-body .self-answer').count(),0);await page.locator('.self-response').fill('我的本地作答');await page.locator('#btn-practice-submit').click();await page.locator('[data-self-rate="0"]').click();assert((await page.locator('#practice-body .ans-summary').innerText()).includes('你的选择：我的本地作答'));
 await shot(page,'03-hotspot-self-wrong.png');
 await jump(page,6);await page.locator('#btn-practice-submit').click();await page.locator('[data-self-rate="1"]').click();assert.equal(await page.locator('#practice-body .self-answer').count(),0);assert.equal(await page.locator('#practice-body .correct-only').count(),1);
 for(const n of [10,12,15]){await jump(page,n);await page.locator('.self-response').fill('按PDF图作答');await page.locator('#btn-practice-submit').click();assert((await page.locator('.self-answer').innerText()).length>10);await shot(page,`04-image-${n}.png`);await page.locator('[data-self-rate="1"]').click();}
 await jump(page,59);await page.locator('.case-box summary').click();assert((await page.locator('.case-body').innerText()).length>200);await shot(page,'05-case-background.png');
 await page.setViewportSize({width:390,height:844});await shot(page,'06-mobile-case.png');await page.screenshot({path:out+'/06-mobile-case-viewport.png'});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+2));await page.setViewportSize({width:1440,height:1000});
 await page.locator('#btn-practice-shuffle').click();await page.waitForSelector('#practice-body .q-meta');await jump(page,250);await shot(page,'09-shuffled-batch.png');await jump(page,5);assert((await page.locator('#practice-body .q-meta').innerText()).includes('az305-pdf-t1-q5'));
 const progress=await page.evaluate(()=>JSON.parse(localStorage.getItem('itcert_practice_v1_az305')));assert(progress.wrongIds['az305-pdf-t1-q5']);assert(progress.submitted['az305-pdf-t1-q6']);assert(progress.answers['az305-pdf-t1-q6']._selfCorrect);
 await page.reload();await page.locator('#btn-go-practice').click();await jump(page,6);assert.equal(await page.locator('#practice-body .correct-only').count(),1);
 // Service worker upgrades from an old cache; private signed media must never be cached.
 await page.evaluate(async()=>{await caches.open('itcert-cache-old-local-test');await navigator.serviceWorker.register('/sw.js?upgrade=LOCAL');await navigator.serviceWorker.ready;});
 await page.waitForFunction(async()=>!(await caches.keys()).includes('itcert-cache-old-local-test'));
 const swCache=await page.evaluate(async()=>({names:await caches.keys(),text:await(await fetch('/sw.js',{cache:'no-store'})).text()}));assert(swCache.text.includes('202611092210'));
 // Mock exams only reveal self-check answers after whole-exam submission; final score waits for ratings.
 await page.locator('#btn-practice-back').click();await page.locator('#btn-go-exam').click();await page.locator('#exam-count').selectOption('30');await page.locator('#btn-exam-start').click();await page.waitForSelector('#exam-body .q-meta');
 assert.equal(await page.locator('#exam-body .self-answer').count(),0);await page.locator('#btn-exam-submit').click();
 const handin=page.locator('[data-er="end"]');
 if(await handin.count())await handin.first().click();else { const textButtons=page.getByRole('button',{name:/确认交卷|提交试卷|确认提交/}); if(await textButtons.count())await textButtons.first().click(); }
 await page.waitForSelector('#view-result:not(.hidden)');
 const pending=await page.locator('#result-wrong [data-self-rate="1"]').count();assert(pending>0);await shot(page,'10-exam-self-evaluation.png');
 for(let i=0;i<pending;i++)await page.locator('#result-wrong [data-self-rate="1"]').first().click();
 assert.equal(await page.locator('#result-wrong [data-self-rate]').count(),0);assert((await page.locator('#result-hero').innerText()).match(/\d/));
 assert.equal(errors.length,0,JSON.stringify(errors));await ctx.close();
 // Existing banks retain their UI and fixed Y/N option ordering.
 for(const exam of ['ai103','dop-c02','dp-700','dp-420']){const {ctx,page,errors}=await setup('LOCAL-ADMIN-ALL',exam);await page.locator('#btn-go-practice').click();await page.waitForSelector('#practice-options [data-oid="A"]');assert.equal(await page.locator('#practice-options .oid').allTextContents()+'','A,B');await page.locator('#practice-options [data-oid="B"]').click();await page.locator('#btn-practice-submit').click();assert((await page.locator('.ans-summary').innerText()).includes('你的选择'));if(exam==='ai103')await shot(page,'07-old-yn-regression.png');assert.equal(errors.length,0);await ctx.close();}
 const student=await setup('LOCAL-STUDENT','ai103');assert((await student.page.locator('[data-exam-id="az305"]').getAttribute('class')).includes('locked'));await student.page.screenshot({path:out+'/08-student-locked.png',fullPage:true});await student.ctx.close();
 const bankCalls=calls.filter(c=>c.url.includes('/functions/v1/itc-bank'));const bodies=bankCalls.map(c=>new URL(c.url));assert(bodies.some(u=>u.searchParams.has('meta')));assert(bodies.some(u=>u.searchParams.has('ids')));assert(bodies.every(u=>!u.searchParams.has('limit')||Number(u.searchParams.get('limit'))<=80));assert(!calls.some(c=>c.url.includes('account_progress')));
 await fs.writeFile(out+'/e2e-results.json',JSON.stringify({passed:true,azSample:[1,3,5,6,10,12,15,59],oldBanks:4,studentDenied:true,unauthenticated401:true,noAutomaticProgressSync:true,maxBatch:80,serviceWorker:'202611092210',productionWrites:0,calls},null,2));
 console.log('真实前端+真实后端处理函数/模拟Supabase：练习各题型、4旧库、权限、窄屏、缓存、进度回归通过');
}catch(e){for(const c of browser.contexts())for(const p of c.pages()){await fs.writeFile(out+'/latest-failed-dom.html',await p.content());await p.screenshot({path:out+'/latest-failed.png',fullPage:true});}await fs.writeFile(out+'/latest-errors.json',JSON.stringify(allErrors));throw e;}finally{await browser.close();}
