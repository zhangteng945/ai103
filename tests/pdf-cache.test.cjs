const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
test('管理员及识别依赖不命中旧缓存；POST从不进入SW缓存；普通练习资源仍缓存',async()=>{
 const handlers={},fetched=[],cached=[];const ctx={URL,Promise,self:{location:{origin:'https://example.test'},addEventListener:(n,h)=>handlers[n]=h},fetch:async req=>{fetched.push(req.url);return {ok:true,clone(){return this;}}},caches:{open:async()=>({match:async()=>undefined,put:async req=>cached.push(req.url),keys:async()=>[]})}};
 vm.runInNewContext(fs.readFileSync('sw.js','utf8'),ctx);
 for(const path of ['/admin.html','/js/pdf-import-engine.mjs','/js/vendor/pdf-import/ocr/lang/eng.traineddata','/js/admin.js?v=202611092145']){
 let response;handlers.fetch({request:{method:'GET',url:'https://example.test'+path,mode:'cors'},respondWith:p=>response=p});await response;
 }
 assert.equal(fetched.length,4);assert.deepEqual(cached,['https://example.test/js/admin.js?v=202611092145']);
 let handled=false;handlers.fetch({request:{method:'POST',url:'https://example.test/upload'},respondWith:()=>handled=true});assert.equal(handled,false);
});
