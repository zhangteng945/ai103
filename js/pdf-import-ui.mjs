/* 星火 · 管理员手动导入；不会切换任何正式题库或版本。 */
import {PdfEngine} from './pdf-import-engine.mjs';
const $=id=>document.getElementById(id);
let result=null,engine=null,selected=0,busy=false;
function status(text){$('pdf-status').textContent=text;}
function errorText(e){return /[\u3400-\u9fff]/.test(e.message||'')?e.message:'无法读取此文件或识别引擎不可用；请检查文件是否损坏、加密或浏览器是否支持';}
function buttons(){ $('pdf-start').disabled=busy; $('pdf-stop').disabled=!busy; for(const id of ['pdf-export','pdf-save'])$(id).disabled=busy||!result; }
function saveEdits(){
 if(!result)return; const q=result.questions[selected];q.stem=$('pdf-stem').value;q.answerText=$('pdf-answer').value;
 q.answer=/^[A-H](?:[\s,，、;；]*[A-H])*$/.test(q.answerText.trim())?[...new Set(q.answerText.match(/[A-H]/g))]:[];
 q.options=[];for(const s of $('pdf-options').value.split('\n').filter(s=>s.trim())){
   const m=s.match(/^([A-H])[.．、:]\s*(.*)$/);
   if(m)q.options.push({id:m[1],text:m[2]});
   else if(q.options.length)q.options[q.options.length-1].text+='\n'+s;
 }
 q.type=$('pdf-type').value;q.imageText=$('pdf-image-text').value;
}
function render(){
 const q=result.questions[selected];$('pdf-editor').hidden=false;
 $('pdf-index').textContent=`第 ${selected+1} / ${result.questions.length} 题 · 原题号 ${q.number} · 第 ${q.source.pageStart} 页 · 置信提示 ${q.confidence}%（非准确率）`;
 $('pdf-stem').value=q.stem;$('pdf-image-text').value=q.imageText||'';$('pdf-options').value=q.options.map(o=>o.id+'. '+o.text).join('\n');$('pdf-answer').value=q.answerText;$('pdf-type').value=q.type;
 $('pdf-notes').textContent=q.notes.join('；');
 for(const [id,images]of[['pdf-question-images',q.images],['pdf-answer-images',q.answerEvidence]]){
  $(id).replaceChildren();for(const a of images||[]){const im=document.createElement('img');im.src=a.data;im.alt='PDF第'+a.page+'页原图';im.loading='lazy';$(id).append(im);}
 }
 $('pdf-prev').disabled=selected===0;$('pdf-next').disabled=selected+1===result.questions.length;
}
function getCandidate(){saveEdits();return PdfImportCore.candidate($('pdf-bank-name').value,result.questions,result.source);}
function download(data,name){const u=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);}
$('pdf-start').onclick=async()=>{
 if(busy)return;busy=true;result=null;$('pdf-editor').hidden=true;buttons();engine=new PdfEngine(status);
 try{
  const file=$('pdf-file').files[0];if(!file)throw Error('请先选择 PDF');
  result=await engine.run(file,{start:Number($('pdf-from').value||1),end:Number($('pdf-to').value||0),language:$('pdf-language').value});
  selected=0;render();status(`已识别 ${result.questions.length} 题；文字页 ${result.source.modes.text}、图片页 ${result.source.modes.ocr}。尚未上传或发布；图片答案为最佳OCR转写，不保证圈选语义完整。`);
 }catch(e){status('识别停止：'+errorText(e));}finally{busy=false;engine=null;buttons();}
};
$('pdf-stop').onclick=()=>{if(engine){engine.cancel();status('正在停止；未上传任何内容');}};
$('pdf-prev').onclick=()=>{saveEdits();selected--;render();};$('pdf-next').onclick=()=>{saveEdits();selected++;render();};
$('pdf-export').onclick=()=>{try{download(getCandidate(),'PDF候选题库.json');}catch(e){status(e.message);}};
$('pdf-save').onclick=async()=>{
 if(!window.ITCertPdfAdmin){status('请先登录管理员');return;}
 let candidate;try{candidate=getCandidate();}catch(e){status(e.message);return;}
 const ok=window.ITCertAdminUI&&window.ITCertAdminUI.confirm?await window.ITCertAdminUI.confirm('仅保存为新的私有候选题库，不发布、不替换现有题库。确认上传？','保存候选题库','确认上传'):confirm('仅保存为新的私有候选题库，不发布、不替换现有题库。确认上传？');if(!ok)return;
 busy=true;buttons();
 try{
  const api=window.ITCertPdfAdmin;const {id}=await api.call('begin',{});
  for(const q of candidate.questions){for(const field of ['images','answerEvidence'])for(const asset of q[field]||[]){
    status('正在上传候选原图：原题号 '+q.number);const saved=await api.call('asset',{id,data:asset.data});delete asset.data;asset.path=saved.path;
  }delete q.regions;}
  const saved=await api.call('finalize',{id,candidate});status('候选已保存：'+saved.path+'；未发布，现有题库及版本不变。');
 }catch(e){status('候选未完成保存：'+e.message+'；已传原图仅留在隔离候选目录，不影响正式库。');}finally{busy=false;buttons();}
};
buttons();
