const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
test('缓存升级只清理本站练习旧缓存，不碰进度或其它应用缓存',async()=>{
 const handlers={},deleted=[];let pending,claimed=false;const current=fs.readFileSync('sw.js','utf8').match(/const CACHE = ["']([^"']+)["']/)[1];
 const scope={URL, caches:{keys:async()=>['itcert-cache-old',current,'other-cache'],delete:async k=>deleted.push(k)},self:{location:{origin:'https://local.test'},addEventListener:(k,v)=>handlers[k]=v,clients:{claim:async()=>claimed=true}}};
 vm.runInNewContext(fs.readFileSync('sw.js','utf8'),scope);handlers.activate({waitUntil:p=>pending=p});await pending;
 assert.deepEqual(deleted,['itcert-cache-old']);assert(claimed);
 for(const path of ['/functions/v1/itc-bank','/storage/v1/object/sign/banks/test','/auth/v1/user','/rest/v1/progress']){let intercepted=false;handlers.fetch({request:{url:'https://local.test'+path,method:'GET'},respondWith:()=>intercepted=true});assert(!intercepted);}
});
