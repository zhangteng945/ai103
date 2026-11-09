/* 星火 · 图片题自评使用原进度answers容器，不增加云端自动同步。 */
(function(g){'use strict';
 const api={
  isSelfCheck(q){return !!q && !(q.boxes&&q.boxes.length) && !(q.options&&q.options.length&&q.answer&&q.answer.length) && (q.gradingMode==='self_check'||q.answerFormat==='image_text'||['image','hotspot','drag','ordering','order'].includes(q.type));},
  selection(s){return s&&typeof s==='object'&&!Array.isArray(s)?s:{_response:''};},
  isRated(s){return !!s&&typeof s._selfCorrect==='boolean';},
  isCorrect(s){return !!s&&s._selfCorrect===true;},
  safeImage(url){try{const u=new URL(url,g.location?g.location.href:'https://example.invalid');return (u.protocol==='https:'&&u.hostname==='paswovhtsoljydywdmvb.supabase.co'&&u.pathname.startsWith('/storage/v1/object/sign/banks/az305/'))||((u.hostname==='127.0.0.1'||u.hostname==='localhost')&&u.protocol==='http:')?u.href:'';}catch{return '';}},
 };
 g.ITCERT_IMAGE=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);
