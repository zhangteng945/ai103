import fs from'node:fs/promises';import crypto from'node:crypto';
if(process.env.TENG_RELEASE_APPROVED!=='YES')throw Error('尚未取得本次部署批准');
const root=process.argv[2],ledger=process.argv[3],url='https://paswovhtsoljydywdmvb.supabase.co';
const key=process.env.SUPABASE_SERVICE_ROLE_KEY;if(!key)throw Error('缺少已授权的Storage服务凭据，不读取或抓取其它凭据');
const manifest=JSON.parse(await fs.readFile(root+'/manifest.json','utf8'));
if(manifest.exam!=='az305'||manifest.version!=='202611092210'||!Array.isArray(manifest.files))throw Error('发布物清单版本无效');
for(const item of manifest.files){
 if(item.bucket!=='banks'||!/^az305\/202611092210(?:\.json|\/media\/[a-zA-Z0-9._-]+\.png)$/.test(item.path))throw Error('拒绝上传到旧题库路径');
 const bytes=await fs.readFile(root+'/banks/'+item.path);if(bytes.length!==item.bytes)throw Error('发布物长度校验失败');if(crypto.createHash('sha256').update(bytes).digest('hex')!==item.sha256)throw Error('发布物哈希校验失败');
 const r=await fetch(url+'/storage/v1/object/banks/'+item.path,{method:'POST',headers:{apikey:key,Authorization:'Bearer '+key,'Content-Type':item.path.endsWith('.png')?'image/png':'application/json','x-upsert':'false'},body:bytes,signal:AbortSignal.timeout(30000)});
 if(!r.ok)throw Error('私有对象上传失败 HTTP '+r.status+'；停止，不覆盖、不重试');
 await fs.appendFile(ledger,JSON.stringify({bucket:'banks',path:item.path,sha256:item.sha256})+'\n');
}
