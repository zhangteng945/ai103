import{chromium}from'playwright';import fs from'node:fs/promises';import assert from'node:assert/strict';import{validateCandidate}from'../supabase/functions/itc-pdf-candidate/validation.mjs';
const out='/workspace/ai103-pdf-upload-demo',uid='123e4567-e89b-42d3-a456-426614174000',id='123e4567-e89b-42d3-a456-426614174001';
const browser=await chromium.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox']});
const context=await browser.newContext({viewport:{width:1440,height:1100},acceptDownloads:true});const page=await context.newPage();let uploads=[],manifest;
await context.addInitScript(()=>localStorage.setItem('itcert_account_session_v1',JSON.stringify({access:'LOCAL-TEST',user:{}})));
await context.route('**/*',async route=>{const url=new URL(route.request().url());if(url.hostname==='127.0.0.1')return route.continue();
 if(url.pathname==='/auth/v1/user')return route.fulfill({json:{id:uid,app_metadata:{role:'admin'}}});
 if(url.pathname==='/functions/v1/itc-admin')return route.fulfill({json:{users:[]}});
 if(url.pathname.endsWith('itc-pdf-candidate')){
  if(!url.hostname.endsWith('.supabase.co'))return route.fulfill({status:404,json:{error:'旧香港代理尚未开放新路由'}});
  const body=route.request().postDataJSON();uploads.push({action:body.action});
  if(body.action==='begin')return route.fulfill({json:{id}});
  if(body.action==='asset')return route.fulfill({json:{path:uid+'/'+id+'/assets/'+crypto.randomUUID()+'.jpg'}});
  if(body.action==='finalize'){manifest=body.candidate;validateCandidate(manifest,uid+'/'+id+'/');return route.fulfill({json:{path:uid+'/'+id+'/candidate.json'}});}
 }
 return route.fulfill({status:404,body:''});
});
try{
 await page.goto('http://127.0.0.1:8766/admin.html');await page.locator('[data-tab="pdf"]').click();
 await page.locator('#pdf-file').setInputFiles('/home/box/Downloads/AZ-305_with_discussion.pdf');await page.locator('#pdf-to').fill('4');await page.locator('#pdf-start').click();
 await page.waitForFunction(()=>!document.getElementById('pdf-start').disabled,{},{timeout:60000});
 assert(await page.locator('#pdf-save').isEnabled());const injected='<img src=x onerror="window.unsafe=1"> 本地校对';
 await page.locator('#pdf-stem').fill(injected);await page.locator('#pdf-answer').fill('B');
 page.on('dialog',dialog=>dialog.accept());await page.locator('#pdf-save').click();
 await page.waitForFunction(()=>document.getElementById('pdf-status').textContent.startsWith('候选已保存'),{},{timeout:30000});
 assert.equal(manifest.questions[0].stem,injected);assert.deepEqual(manifest.questions[0].answer,['B']);assert.equal(await page.evaluate(()=>window.unsafe),undefined);
 await page.screenshot({path:out+'/06-candidate-saved-local-mock.png',fullPage:true});
 // Saving must not mutate local image data; user can still export a self-contained candidate after save.
 const [d]=await Promise.all([page.waitForEvent('download'),page.locator('#pdf-export').click()]);await d.saveAs(out+'/edited-candidate.json');
 const exported=JSON.parse(await fs.readFile(out+'/edited-candidate.json','utf8'));assert(exported.questions[0].images[0].data.startsWith('data:image/jpeg;'));
 for(const [name,buffer]of [['fake.pdf',Buffer.from('<script>evil</script>')],['damaged.pdf',Buffer.from('%PDF-this is broken')]]){
  await page.locator('#pdf-file').setInputFiles({name,mimeType:'application/pdf',buffer});await page.locator('#pdf-start').click();
  await page.waitForFunction(()=>!document.getElementById('pdf-start').disabled,{},{timeout:30000});assert((await page.locator('#pdf-status').innerText()).startsWith('识别停止'));
 }
 await fs.writeFile(out+'/save-tests.json',JSON.stringify({uploads,questionCount:manifest.questions.length,editedAnswer:manifest.questions[0].answer,xssExecuted:false,maliciousFilesRejected:2,productionWrites:0},null,2));
 console.log('本地保存候选、编辑、原图副本、恶意文件与XSS测试通过；生产写入0');
}finally{await browser.close();}
