import {chromium}from'playwright';import fs from'node:fs/promises';
const browser=await chromium.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox']});
const report=[];
try{for(const mode of ['404-fallback','401-no-fallback','student-blocked','network-fallback']){
 const context=await browser.newContext();const page=await context.newPage();
 await context.addInitScript(()=>localStorage.setItem('itcert_account_session_v1',JSON.stringify({access:'LOCAL-TEST',user:{}})));
 let pdfCalls=[];
 await context.route('**/*',async route=>{
 const u=new URL(route.request().url());if(u.hostname==='127.0.0.1')return route.continue();
 if(u.pathname==='/auth/v1/user')return route.fulfill({json:{id:'local',app_metadata:{role:mode==='student-blocked'?'student':'admin'}}});
 if(u.pathname==='/functions/v1/itc-admin')return route.fulfill({json:{users:[]}});
 if(u.pathname==='/functions/v1/itc-pdf-candidate'){
  pdfCalls.push(u.href);
  if(!u.hostname.endsWith('.supabase.co')){
   if(mode==='network-fallback')return route.abort('failed');
   return route.fulfill({status:mode==='401-no-fallback'?401:404,json:{error:'LOCAL TEST'}});
  }
  return route.fulfill({json:{id:'local-candidate'}});
 }
 return route.fulfill({status:404,body:''});
 });
 await page.goto('http://127.0.0.1:8766/admin.html');
 if(mode==='student-blocked'){
  await page.waitForFunction(()=>document.getElementById('gate-text').textContent==='当前账号不是管理员');
  report.push({mode,writeApiExposed:await page.evaluate(()=>!!window.ITCertPdfAdmin),calls:pdfCalls});
 }else{
  await page.waitForFunction(()=>!!window.ITCertPdfAdmin);
  const response=await page.evaluate(async()=>{try{return await window.ITCertPdfAdmin.call('begin',{});}catch(e){return {error:e.message,status:e.status};}});
  report.push({mode,response,calls:pdfCalls});
 }
 await context.close();
}
await fs.writeFile('/workspace/ai103-pdf-upload-demo/routing-tests.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
}finally{await browser.close();}
