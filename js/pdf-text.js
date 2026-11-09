/* Opt-in PDF text formatting. No raw HTML, links, images or executable markup. */
(function (g) {
  'use strict';
  function escape(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
  function cells(line) { return line.trim().replace(/^\|/,'').replace(/\|$/,'').split('|').map(s=>s.trim()); }
  function divider(line) { return /^\s*\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line); }
  function format(text) {
    const lines=String(text==null?'':text).replace(/\r/g,'').split('\n');const out=[];
    for(let i=0;i<lines.length;i++) {
      if(/^\s*```[\w-]*\s*$/.test(lines[i])) {
        const block=[];while(++i<lines.length&&!/^\s*```\s*$/.test(lines[i]))block.push(lines[i]);
        out.push('<pre class="stem-code"><code>'+escape(block.join('\n'))+'</code></pre>');continue;
      }
      if(i+1<lines.length&&lines[i].trim().startsWith('|')&&divider(lines[i+1])) {
        const head=cells(lines[i]),rows=[];i+=2;
        while(i<lines.length&&lines[i].trim().startsWith('|')) {rows.push(cells(lines[i]));i++;}i--;
        out.push('<div class="pdf-text-table-wrap"><table class="pdf-text-table"><thead><tr>'+head.map(c=>'<th scope="col">'+escape(c)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(row=>'<tr>'+head.map((_,j)=>'<td>'+escape(row[j]||'')+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>');continue;
      }
      out.push(escape(lines[i])+(i<lines.length-1?'<br>':''));
    }
    return out.join('');
  }
  const api={format};g.ITCERT_PDF_TEXT=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);
