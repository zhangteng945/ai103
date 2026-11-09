/* 星火 · 全部识别留在浏览器；只在显式保存时上传候选。 */
import * as pdfjs from './vendor/pdf-import/pdf.mjs';
pdfjs.GlobalWorkerOptions.workerSrc = new URL('./vendor/pdf-import/pdf.worker.mjs',import.meta.url).href;
const vendor = new URL('./vendor/pdf-import/',import.meta.url).href;
const LIMIT = 120*1024*1024;
export class PdfEngine {
  constructor(onProgress=()=>{}) { this.progress=onProgress; this.cancelled=false; this.worker=null; this.doc=null; this.bytes=0; this.ocrProvider=null; }
  cancel() { this.cancelled=true; if(this.worker) this.worker.terminate().catch(()=>{}); if(this.task)this.task.destroy().catch(()=>{}); }
  check() { if(this.cancelled) throw Error('已停止识别；未保存任何内容'); }
  async ocr(canvas, language) {
    this.check();
    if(this.ocrProvider) return this.ocrProvider.recognize(canvas,{language});
    if(!this.worker) {
      this.worker=await Tesseract.createWorker(language,1,{workerPath:vendor+'ocr/worker.min.js',corePath:vendor+'ocr/',langPath:vendor+'ocr/lang',gzip:false,workerBlobURL:false});
    }
    // 预留适配点：将来可注入 PaddleOCR/云OCR提供者；本次只使用同源本机Tesseract。
    const result=await this.worker.recognize(canvas,{}, {text:true,blocks:true}); this.check();
    const lines=[];
    for(const b of result.data.blocks||[]) for(const p of b.paragraphs||[]) for(const l of p.lines||[]) lines.push({text:l.text,y:l.bbox.y0,height:l.bbox.y1-l.bbox.y0,x:l.bbox.x0});
    return {text:result.data.text,confidence:Math.round(result.data.confidence),lines};
  }
  async render(number,scale=2) {
    this.check(); const page=await this.doc.getPage(number);
    const base=page.getViewport({scale:1}); scale=Math.min(scale,Math.sqrt(8000000/(base.width*base.height)));
    if(!Number.isFinite(scale) || scale<0.1)throw Error('页面尺寸异常，已停止');
    const viewport=page.getViewport({scale});
    const canvas=document.createElement('canvas'); canvas.width=Math.ceil(viewport.width); canvas.height=Math.ceil(viewport.height);
    await page.render({canvasContext:canvas.getContext('2d'),viewport}).promise; return {canvas,scale};
  }
  async run(file,{start=1,end=0,language='eng'}={}) {
    let task;
    try {
      PdfImportCore.validateFile(file,new Uint8Array(await file.slice(0,5).arrayBuffer()));
      const sourceBytes=await file.arrayBuffer();
      const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',sourceBytes)),b=>b.toString(16).padStart(2,'0')).join('');
      task=pdfjs.getDocument({data:new Uint8Array(sourceBytes),isEvalSupported:false,enableXfa:false,
        wasmUrl:vendor+'wasm/',standardFontDataUrl:vendor+'standard_fonts/',cMapUrl:vendor+'cmaps/',cMapPacked:true,stopAtErrors:true});
      this.task=task; task.onPassword=()=>{task.destroy();};
      this.doc=await task.promise;
      if(this.doc.numPages>1500)throw Error('超过1500页，请拆分后识别');
      end=end||this.doc.numPages;
      if(!Number.isInteger(start)||!Number.isInteger(end)||start<1||end<start||end>this.doc.numPages)throw Error('页码范围无效');
      const pages=[]; const modes={text:0,ocr:0}; let textCount=0;
      for(let n=start;n<=end;n++) {
        this.check(); this.progress(`提取第 ${n} / ${end} 页文字`);
        const page=await this.doc.getPage(n); const vp=page.getViewport({scale:1}); const content=await page.getTextContent();
        const rows=[];
        for(const item of content.items) {
          if(!('str' in item)||!item.str.trim())continue;
          const [x,y]=vp.convertToViewportPoint(item.transform[4],item.transform[5]);
          let row=rows.find(r=>Math.abs(r.y-y)<3);
          if(!row){row={y,x,text:'',items:[]};rows.push(row);}
          row.items.push({x,text:item.str});
        }
        rows.sort((a,b)=>a.y-b.y); for(const r of rows)r.text=r.items.sort((a,b)=>a.x-b.x).map(i=>i.text).join(' ');
        let record={number:n,width:vp.width,height:vp.height,mode:'text',confidence:99,lines:rows.map(({text,y,x})=>({text,y,x}))};
        const commentAt=rows.findIndex(r=>/^(?:Comments?\b|评论|評論|讨论|討論)/i.test(r.text.trim()));
        const contentRows=commentAt>=0?rows.slice(0,commentAt):rows;
        const meaningful=contentRows.map(r=>r.text).filter(t=>!/Exam AZ-305 All Actual Questions|淘宝|shop\d+|添加微信/i.test(t)).join('').replace(/\s/g,'');
        if(meaningful.length<60) {
          this.progress(`第 ${n} 页为图片页，正在识别文字`); const {canvas,scale}=await this.render(n);
          const o=await this.ocr(canvas,language);
          // 保留原文字层的结构性分界。OCR可能把“评论”识别成乱码，不能因此把讨论混入答案。
          const structural=record.lines.filter(l=>/^(?:Comments?\b|评论|評論|讨论|討論)/i.test(l.text.trim()));
          const ocrLines=o.lines.map(l=>({...l,y:l.y/scale,x:l.x/scale}));
          record={...record,mode:'ocr',confidence:o.confidence,lines:[...ocrLines,...structural.map(l=>({...l,y:l.y-10}))].sort((a,b)=>a.y-b.y)};
          canvas.width=canvas.height=0;
        }
        modes[record.mode]++; pages.push(record); page.cleanup();
        textCount+=record.lines.reduce((sum,line)=>sum+line.text.length,0);
        if(textCount>12000000)throw Error('文字量超过安全上限，请拆分');
      }
      const questions=PdfImportCore.parse(pages,file.name);
      if(!questions.length)throw Error('所选页面未识别到题号；请扩大页码范围或使用完整题号的PDF');
      // One render per needed page; crop exactly before Comments and keep question/answer evidence separate.
      const pageJobs=new Map();
      for(const q of questions)for(const r of q.regions){if(!pageJobs.has(r.page))pageJobs.set(r.page,[]);pageJobs.get(r.page).push({q,r});}
      for(const [pn,jobs] of pageJobs) {
        this.check(); this.progress(`提取第 ${pn} 页原图与图片答案（共 ${questions.length} 题）`);
        const {canvas,scale}=await this.render(pn);
        for(const {q,r} of jobs) {
          const top=Math.max(0,Math.floor(r.top*scale)),bottom=Math.min(canvas.height,Math.ceil(r.bottom*scale));
          if(bottom-top<8)continue;
          const crop=document.createElement('canvas');crop.width=canvas.width;crop.height=bottom-top;
          crop.getContext('2d').drawImage(canvas,0,top,canvas.width,bottom-top,0,0,crop.width,crop.height);
          const data=crop.toDataURL('image/jpeg',0.82);this.bytes+=data.length;
          if(this.bytes>LIMIT)throw Error('原图超过120兆字节，请缩小页码范围分批导入');
          const field=r.role==='answer'?'answerEvidence':'images';(q[field]||=[]).push({page:pn,data});
          if(r.role==='answer'&&!q.answer.length) {
            // Restrict OCR to PDF's answer region, never to comments or community votes.
            const o=await this.ocr(crop,language);
            const answerOCR=o.text.split(/Comments|Community vote distribution|Selected Answer|评论|讨论|所选答案|选定答案/i)[0]
              .replace(/Correct\s*Answer\s*[:：]?|(?:正确|参考)?答案\s*[:：]?/gi,'').trim();
            if(answerOCR) {
              q.source.answerOcrRaw=[q.source.answerOcrRaw,answerOCR].filter(Boolean).join('\n');
              q.answerText=PdfImportCore.bestAnswerText([q.answerText,answerOCR].filter(Boolean).join('\n'));
            }
            q.confidence=Math.min(q.confidence,o.confidence,60);
            if(!q.notes.includes('答案图按原图文字转写；圈选、颜色及表格关系可能识别不完整'))q.notes.push('答案图按原图文字转写；圈选、颜色及表格关系可能识别不完整');
          }
          if(r.role==='question' && q.options.length<2 && ['image','hotspot','drag'].includes(q.type)) {
            const o=await this.ocr(crop,language);
            q.imageText=[q.imageText,o.text.trim()].filter(Boolean).join('\n');
          }
          crop.width=crop.height=0;
        }
        canvas.width=canvas.height=0;
      }
      for(const q of questions) {
        if(!q.answerText)q.notes.push('答案文字未识别成功，保留原图供修改；没有编造答案');
        if(q.type==='single'&&!q.options.length)q.type='image';
      }
      return {questions,pages,source:{file:file.name,sha256:hash,totalPages:this.doc.numPages,pageStart:start,pageEnd:end,modes},imageBytes:this.bytes};
    } finally {
      if(this.worker){await this.worker.terminate().catch(()=>{});this.worker=null;}
      if(task)await task.destroy().catch(()=>{});
      this.doc=null;this.task=null;
    }
  }
}
