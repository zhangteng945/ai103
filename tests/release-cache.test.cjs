const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
test('缓存升级只清理本站练习旧缓存，不碰进度或其它应用缓存',async()=>{
 const handlers={},deleted=[];let pending,claimed=false;const current=fs.readFileSync('sw.js','utf8').match(/const CACHE = ["']([^"']+)["']/)[1];
 const scope={URL, caches:{keys:async()=>['itcert-cache-old',current,'other-cache'],delete:async k=>deleted.push(k)},self:{location:{origin:'https://local.test'},addEventListener:(k,v)=>handlers[k]=v,clients:{claim:async()=>claimed=true}}};
 vm.runInNewContext(fs.readFileSync('sw.js','utf8'),scope);handlers.activate({waitUntil:p=>pending=p});await pending;
 assert.deepEqual(deleted,['itcert-cache-old']);assert(claimed);
 for(const path of ['/functions/v1/itc-bank','/storage/v1/object/sign/banks/test','/auth/v1/user','/rest/v1/progress']){let intercepted=false;handlers.fetch({request:{url:'https://local.test'+path,method:'GET'},respondWith:()=>intercepted=true});assert(!intercepted);}
});
test('新版 SW 会 skipWaiting 并直连拉取 sw.js，更新后首次导航走网络',async()=>{
 const handlers={};let skipped=false,claimed=false,pending;
 const current=fs.readFileSync('sw.js','utf8').match(/const CACHE = ["']([^"']+)["']/)[1];
 const fetched=[];
 const cacheStore={};
 const scope={
  URL,
  fetch:async(req)=>{fetched.push(typeof req==='string'?req:(req&&req.url)||String(req));return {ok:true,clone(){return this;},url:typeof req==='string'?req:req.url};},
  caches:{
   keys:async()=>['itcert-cache-202611112115',current],
   delete:async()=>{},
   match:async()=>undefined,
   open:async(name)=>{
    if(!cacheStore[name]) cacheStore[name]={_items:{},put(req,res){this._items[String(req&&req.url||req)]=res;},match:async()=>undefined,keys:async()=>[]};
    return cacheStore[name];
   }
  },
  self:{location:{origin:'https://local.test'},addEventListener:(k,v)=>handlers[k]=v,clients:{claim:async()=>claimed=true},skipWaiting:()=>{skipped=true;}}
 };
 vm.runInNewContext(fs.readFileSync('sw.js','utf8'),scope);
 handlers.install();
 assert.equal(skipped,true);
 handlers.activate({waitUntil:p=>pending=p});await pending;
 assert.equal(claimed,true);
 let swResp;
 handlers.fetch({request:{url:'https://local.test/sw.js',method:'GET'},respondWith:p=>{swResp=p;}});
 const swOut=await swResp;
 assert.ok(fetched.some(u=>String(u).endsWith('/sw.js')),'sw.js must be fetched from the network');
 assert.equal(swOut&&swOut.ok,true);
 fetched.length=0;
 let navResp;
 handlers.fetch({request:{url:'https://local.test/',method:'GET',mode:'navigate'},respondWith:p=>{navResp=p;}});
 const navOut=await navResp;
 assert.ok(fetched.some(u=>u==='https://local.test/'||(u&&u.url==='https://local.test/')),'first navigation after cache upgrade must hit the network');
 assert.equal(navOut&&navOut.ok,true);
});
