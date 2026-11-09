import {mkdir,copyFile,readdir,cp} from 'node:fs/promises';
const target='js/vendor/pdf-import'; await mkdir(target,{recursive:true});
for(const name of ['pdf.mjs','pdf.worker.mjs']) await copyFile('node_modules/pdfjs-dist/build/'+name,target+'/'+name);
await copyFile('node_modules/pdfjs-dist/LICENSE',target+'/LICENSE-pdfjs');
await mkdir(target+'/ocr',{recursive:true});
for(const name of ['tesseract.min.js','worker.min.js']) await copyFile('node_modules/tesseract.js/dist/'+name,target+'/ocr/'+name);
await copyFile('node_modules/tesseract.js/LICENSE.md',target+'/ocr/LICENSE-tesseract');
for(const name of await readdir('node_modules/tesseract.js-core')) if (/\.wasm(?:\.js)?$/.test(name)) await copyFile('node_modules/tesseract.js-core/'+name,target+'/ocr/'+name);
await mkdir(target+'/ocr/lang',{recursive:true});
for(const lang of ['eng','chi_sim']) {
 const r=await fetch('https://raw.githubusercontent.com/tesseract-ocr/tessdata_fast/4.1.0/'+lang+'.traineddata');
 if(!r.ok)throw Error('语言文件下载失败 '+r.status);
 const {writeFile}=await import('node:fs/promises'); await writeFile(target+'/ocr/lang/'+lang+'.traineddata',Buffer.from(await r.arrayBuffer()));
}

for(const dir of ['wasm','standard_fonts','cmaps']) await cp('node_modules/pdfjs-dist/'+dir,target+'/'+dir,{recursive:true});
await copyFile('node_modules/pdfjs-dist/build/pdf.renderer.mjs',target+'/pdf.renderer.mjs');
await copyFile('node_modules/tesseract.js-core/LICENSE',target+'/ocr/LICENSE-core');

const license=await fetch('https://raw.githubusercontent.com/tesseract-ocr/tessdata_fast/4.1.0/LICENSE');
if(!license.ok)throw Error('模型许可文件下载失败');
const {writeFile}=await import('node:fs/promises');await writeFile(target+'/ocr/lang/LICENSE',await license.text());
