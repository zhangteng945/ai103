import {chromium}from'playwright';import fs from'node:fs/promises';
const out='/workspace/ai103-pdf-upload-demo';
const browser=await chromium.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox']});
const context=await browser.newContext({viewport:{width:1440,height:1050},acceptDownloads:true});const page=await context.newPage();
const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',msg=>{if(msg.type()==='error')console.log('CONSOLE',msg.text());});
// No real accounts and absolutely no production writes: all requests outside localhost are intercepted.
await context.addInitScript(()=>localStorage.setItem('itcert_account_session_v1',JSON.stringify({access:'LOCAL-TEST-NOT-A-TOKEN',user:{}})));
const calls=[];
await context.route('**/*',async route=>{
 const u=new URL(route.request().url());if(u.hostname==='127.0.0.1')return route.continue();
 calls.push({url:u.href,method:route.request().method()});
 if(u.pathname==='/auth/v1/user')return route.fulfill({json:{id:'123e4567-e89b-42d3-a456-426614174000',app_metadata:{role:'admin'},email:'local-demo'}});
 if(u.pathname==='/functions/v1/itc-admin')return route.fulfill({json:{users:[]}});
 return route.fulfill({status:404,json:{error:'本地测试无此路由'}});
});
try{
 await page.goto('http://127.0.0.1:8766/admin.html');await page.locator('[data-tab="pdf"]').click();
 await page.screenshot({path:out+'/01-upload.png',fullPage:true});
 // Import engine directly to export full diagnostic result; same engine as the real file-picker UI.
 const scanned='/home/box/Downloads/AZ-305_with_discussion中文版本（免费赠送).pdf';
 await page.locator('#pdf-file').setInputFiles(scanned);await page.locator('#pdf-to').fill('3');await page.locator('#pdf-language').selectOption('eng+chi_sim');
 await page.locator('#pdf-start').click();
 await page.waitForFunction(()=>!document.getElementById('pdf-start').disabled,{},{timeout:600000});
 console.log('SCANNED',await page.locator('#pdf-status').innerText());
 await page.screenshot({path:out+'/05-scanned-preview.png',fullPage:true});
 if(await page.locator('#pdf-export').isEnabled()) {const [d]=await Promise.all([page.waitForEvent('download'),page.locator('#pdf-export').click()]);await d.saveAs(out+'/scanned-candidate.json');}
 await fs.writeFile(out+'/browser-log.json',JSON.stringify({errors,calls},null,2));
}finally{await browser.close();}
