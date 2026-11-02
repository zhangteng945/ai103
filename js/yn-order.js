/**
 * Yes/No option order. Two-option 是/否 / True/False single-choice questions
 * keep PDF order. Box-level Y/N is handled separately in app.js (isYNBox).
 */
(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.ITCERT_YN = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";
  var TOKENS = { yes: 1, no: 1, y: 1, n: 1, true: 1, false: 1, "是": 1, "否": 1 };

  function isYNToken(v) {
    if (v == null) return false;
    var s = String(v).replace(/[\u00a0\u3000]/g, " ").trim().toLowerCase();
    return !!TOKENS[s];
  }

  function optionIsYN(opt) {
    if (opt == null) return false;
    if (typeof opt === "string") return isYNToken(opt);
    var bits = [opt.text, opt.textZh, opt.textEn, opt.zh, opt.en, opt.key];
    for (var i = 0; i < bits.length; i++) if (isYNToken(bits[i])) return true;
    return false;
  }

  /** Exactly two options, both Yes/No (or True/False), and not multi-select. */
  function isBinaryYNQuestion(q) {
    if (!q || q.type === "multi") return false;
    var opts = q.options || [];
    if (opts.length !== 2) return false;
    return optionIsYN(opts[0]) && optionIsYN(opts[1]);
  }

  function keepOptionOrder(q) {
    if (!q) return false;
    if ((q.type === "hotspot" || q.type === "drag") && q.boxes && q.boxes.length) return true;
    return isBinaryYNQuestion(q);
  }

  return {
    isYNToken: isYNToken,
    optionIsYN: optionIsYN,
    isBinaryYNQuestion: isBinaryYNQuestion,
    keepOptionOrder: keepOptionOrder,
  };
});
