/* 星火 · PDF 候选题库解析；答案只截取 PDF 答案区，不使用讨论。 */
(function(root) {
  'use strict';
  const HEADER = /^(?:(?:Question|问题|問題)\s*[#＃]?\s*(\d+)\s*(?:(?:Topic|主题|主題)\s*(\d+))?|(?:第\s*)?(\d+)\s*[题題、．.])(?:\s|$)/i;
  const ANSWER = /(?:Correct\s*Answer|正确答案|正確答案|参考答案|答案)\s*[:：]/i;
  const COMMENTS = /^(?:(?:Comments?|Community vote distribution|Selected Answer|Chosen Answer)\b|评论|評論|讨论|討論|所选答案|所選答案|选定答案|選定答案)/i;
  function clean(s) { return String(s || '').replace(/\u0000/g,'').trim(); }
  function bestAnswerText(raw) {
    const boxes=String(raw||'').split('\n').map(s=>s.trim()).filter(s=>/^Box\s*\d+\s*:/i.test(s));
    const seen=new Set();const first=boxes.filter(s=>{const key=s.match(/^Box\s*(\d+)/i)[1];if(seen.has(key))return false;seen.add(key);return true;});
    return first.length?first.map(s=>s.replace(/\s*-\s*$/,'')).join('\n'):clean(raw);
  }
  function parse(pages, filename) {
    const questions = []; let q = null, stage = 'skip', topic = '1';
    for (const page of pages) {
      for (const line of page.lines) {
        const text = clean(line.text); if (!text) continue;
        const h = text.match(HEADER);
        if (h) {
          if (h[2]) topic = h[2];
          q = { id: 'pdf-t'+topic+'-q'+(h[1] || h[3])+'-'+questions.length,
            number: Number(h[1] || h[3]), topic, stem:'', options:[], answer:[], answerText:'',
            type:'single', confidence: page.mode === 'ocr' ? page.confidence : 99,
            source: {file:filename, pageStart:page.number, pageEnd:page.number, answerOrigin:'PDF答案标注'},
            regions:[], notes:[], _body:[], _answer:[] };
          questions.push(q); stage='body';
          q.regions.push({page:page.number, top:Math.max(0,line.y-20), bottom:page.height, role:'question'});
          const rest = text.slice(h[0].length).trim(); if (rest) q._body.push(rest);
          continue;
        }
        if (!q || stage==='skip') continue;
        q.source.pageEnd=page.number;
        let region = q.regions[q.regions.length-1];
        if (!region || region.page!==page.number) {
          region = {page:page.number, top:0, bottom:page.height, role:stage==='answer'?'answer':'question'};
          q.regions.push(region);
        }
        if ((COMMENTS.test(text)||COMMENTS.test(text.replace(/\s+/g,'')))) { region.bottom=Math.min(region.bottom,Math.max(region.top,line.y-18)); stage='skip'; continue; }
        const a=text.match(ANSWER);
        if (a && stage==='body') {
          region.bottom=Math.max(region.top,line.y-18);
          q.regions.push({page:page.number,top:Math.max(0,line.y-18),bottom:page.height,role:'answer'});
          q.source.answerPage=page.number; stage='answer';
          q._answer.push(text.slice(a.index+a[0].length)); continue;
        }
        if (/Exam AZ-305 All Actual Questions|淘宝|shop\d+|添加微信/i.test(text)) continue;
        (stage==='body'? q._body:q._answer).push(text);
        if (page.mode==='ocr') q.confidence=Math.min(q.confidence,page.confidence);
      }
    }
    for (const item of questions) {
      const body=item._body.join('\n').replace(/^[|丨]\s*(A)(?=InAzure)/gm,'$1. ');
      const opts=[...body.matchAll(/^\s*([A-H])[.．、)）]\s*(.+)$/gm)];
      item.stem=clean(opts.length ? body.slice(0,opts[0].index):body);
      item.options=opts.map((o,i)=>({id:o[1],text:clean(body.slice(o.index+o[0].indexOf(o[2]),i+1<opts.length?opts[i+1].index:body.length))}));
      const answer=clean(item._answer.join('\n'));
      // Only an immediate A-H answer token can become grading keys. Explanations are not keys.
      const keys=answer.match(/^([A-H](?:[\s,，、;；]*[A-H])*)\s*(?:[|｜]\s*)?(?:$|\n|Explanation\s*:)/);
      item.answer=keys ? [...new Set(keys[1].match(/[A-H]/g))] : [];
      item.source.answerTextRaw=answer;
      item.answerText=item.answer.length?item.answer.join('、'):bestAnswerText(answer.split(/Explanation\s*:|解释[:：]|解析[:：]/i)[0]);
      if (/DRAG\s*DROP|拖[拽放]|Select and Place/i.test(body)) item.type='drag';
      else if (/HOTSPOT|Hot Area|热区|熱點|answer area/i.test(body)) item.type='hotspot';
      else if (item.answer.length>1) item.type='multi';
      if (!item.source.answerPage) { item.confidence=Math.min(item.confidence,15); item.notes.push('未识别到PDF答案标注；未采用讨论内容'); }
      if (!item.answer.length) item.confidence=Math.min(item.confidence,65);
      item.regions=item.regions.filter(r=>r.bottom-r.top>8);
      delete item._body; delete item._answer;
    }
    return questions;
  }
  function validateFile(file, head) {
    if (!file || !/\.pdf$/i.test(file.name)) throw new Error('请选择 PDF 文件');
    if (!file.size || file.size>256*1024*1024) throw new Error('文件须为 1 字节至 256 兆字节；大文件请先拆分');
    if (!new TextDecoder().decode(head).startsWith('%PDF-')) throw new Error('文件内容不是有效 PDF');
  }
  function candidate(name, questions, source) {
    if (!name.trim() || name.length>80) throw new Error('请输入不超过80字的题库名称');
    if (!questions.length || questions.length>2000) throw new Error('题数须为1至2000');
    return {schema:'itcert-pdf-candidate-v1',status:'candidate',name:name.trim(),author:'星火',
      createdAt:new Date().toISOString(),source,questions:questions.map(q=>({...q,stemEn:/[\u3400-\u9fff]{2}/.test(q.stem)?'':q.stem,stemZh:/[\u3400-\u9fff]{2}/.test(q.stem)?q.stem:'',
      options:q.options.map(o=>({...o,textEn:/[\u3400-\u9fff]{2}/.test(o.text)?'':o.text,textZh:/[\u3400-\u9fff]{2}/.test(o.text)?o.text:''})),control:q.type==='multi'?'multi':q.type==='single'?'single':'image',
      images:(q.images||[]).map(a=>({...a})),answerEvidence:(q.answerEvidence||[]).map(a=>({...a}))}))};
  }
  const api={parse,validateFile,candidate,bestAnswerText};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  root.PdfImportCore=api;
})(typeof window!=='undefined'?window:globalThis);
