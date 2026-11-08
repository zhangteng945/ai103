/**
 * progress-core.js — pure progress snapshot / merge / encode helpers (no DOM, no network).
 * Works in browsers (window.ITCERT_PROGRESS) and Node (module.exports) for tests.
 * Local-first: localStorage per-exam keys remain the source of truth; this only
 * reads/writes those same keys:
 *   itcert_practice_v1_<exam>  {answers, submitted, flags, wrongIds, clearedIds}
 *   itcert_exam_last_v1_<exam> last mock exam result
 *   itcert_exam_hist_v1_<exam> [ {t, ...exam_last} ]  (history, added by sync layer)
 *   itcert_sync_meta_v1         {deviceId, ts:{key:ms}, lastSyncAt, uid}
 * Snapshots include schema "itcert-progress" and compat 2.
 * answerRevisions records the question revision that was graded.
 * legacyIsolated keeps answers that cannot be mapped onto the current question.
 *
 * clearedIds is an explicit tombstone: those question ids were removed on purpose
 * (reset / repair). Import-merge must not union them back. Manual upload/download
 * in account-auth overwrites the whole snapshot and does not call mergeSnapshots.
 */
(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.ITCERT_PROGRESS = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";
  var VERSION = 1;
  var SCHEMA = "itcert-progress";
  var COMPAT = 2;
  var META_KEY = "itcert_sync_meta_v1";
  var HIST_MAX = 50;
  var P = "itcert_practice_v1_", L = "itcert_exam_last_v1_", H = "itcert_exam_hist_v1_";
  var LEGACY = { ai103: { p: "ai103_practice_v3", l: "ai103_exam_last_v1" } };

  function parse(s, d) { try { var v = JSON.parse(s); return v == null ? d : v; } catch (e) { return d; } }
  function isObj(o) { return o && typeof o === "object" && !Array.isArray(o); }
  function trueSet(o) { var r = {}; if (isObj(o)) Object.keys(o).forEach(function (k) { if (o[k]) r[k] = true; }); return r; }

  function readMeta(ls) {
    var m = parse(ls.getItem(META_KEY), {});
    if (!isObj(m)) m = {};
    if (!m.deviceId) m.deviceId = "d" + Math.random().toString(36).slice(2, 10);
    if (!isObj(m.ts)) m.ts = {};
    return m;
  }
  function writeMeta(ls, m) { try { ls.setItem(META_KEY, JSON.stringify(m)); } catch (e) {} }

  function examIdsIn(ls, known) {
    var ids = {};
    (known || []).concat(Object.keys(LEGACY)).forEach(function (id) { ids[id] = 1; });
    for (var i = 0; i < ls.length; i++) {
      var k = ls.key(i) || "";
      [P, L, H].forEach(function (pre) { if (k.indexOf(pre) === 0) ids[k.slice(pre.length)] = 1; });
    }
    return Object.keys(ids);
  }

  /** Build a snapshot of all exams from localStorage. */
  function snapshot(ls, knownIds) {
    var meta = readMeta(ls);
    var exams = {};
    examIdsIn(ls, knownIds).forEach(function (id) {
      var praw = ls.getItem(P + id), lraw = ls.getItem(L + id);
      if (!praw && LEGACY[id]) praw = ls.getItem(LEGACY[id].p);
      if (!lraw && LEGACY[id]) lraw = ls.getItem(LEGACY[id].l);
      var p = parse(praw, null), last = parse(lraw, null), hist = parse(ls.getItem(H + id), []);
      if (!Array.isArray(hist)) hist = [];
      if (!p && !last && !hist.length) return;
      exams[id] = {
        p: p ? { answers: isObj(p.answers) ? p.answers : {}, submitted: trueSet(p.submitted), flags: trueSet(p.flags), wrongIds: trueSet(p.wrongIds), clearedIds: trueSet(p.clearedIds), answerRevisions: isObj(p.answerRevisions) ? p.answerRevisions : {}, legacyIsolated: isObj(p.legacyIsolated) ? p.legacyIsolated : {} } : null,
        pt: meta.ts[P + id] || 0,
        last: last, lt: meta.ts[L + id] || 0,
        hist: hist,
      };
    });
    return { v: VERSION, schema: SCHEMA, compat: COMPAT, t: Date.now(), dev: meta.deviceId, exams: exams };
  }

  function histKey(h) {
    try { return JSON.stringify([h.result && h.result.correct, h.result && h.result.total, h.questionIds, h.answers]); } catch (e) { return String(h.t); }
  }
  function mergeHist(a, b) {
    var seen = {}, out = [];
    (a || []).concat(b || []).forEach(function (h) {
      if (!isObj(h)) return;
      var k = histKey(h);
      if (seen[k]) { if ((h.t || 0) < (seen[k].t || 0)) seen[k].t = h.t; return; }
      seen[k] = h; out.push(h);
    });
    out.sort(function (x, y) { return (x.t || 0) - (y.t || 0); });
    return out.slice(-HIST_MAX);
  }

  /**
   * Merge one exam's practice for backup import only (not cloud upload/download).
   * Answers: newer side wins per id. submitted/flags start as a union, then
   * tombstones and validated wrongs are applied.
   * wrongIds are NOT a blind union:
   *   - clearedIds on the newer side (unless that side touched the id again) stay cleared
   *   - when both sides have an answer, only the newer side's wrong bit is kept
   *   - a newer answer that is not marked wrong does not resurrect an older wrong
   */
  function mergePractice(a, at, b, bt) {
    if (!a) return b ? JSON.parse(JSON.stringify(b)) : null;
    if (!b) return JSON.parse(JSON.stringify(a));
    var newer = (bt || 0) > (at || 0) ? b : a, older = newer === a ? b : a;
    var out = { answers: {}, submitted: {}, flags: {}, wrongIds: {}, clearedIds: {}, answerRevisions: {}, legacyIsolated: {} };
    Object.keys(older.answers || {}).forEach(function (k) { out.answers[k] = older.answers[k]; });
    Object.keys(newer.answers || {}).forEach(function (k) { out.answers[k] = newer.answers[k]; });
    ["submitted", "flags"].forEach(function (f) {
      Object.assign(out[f], trueSet(older[f]), trueSet(newer[f]));
    });
    Object.keys(out.submitted).forEach(function (k) {
      var src = newer.submitted && newer.submitted[k] ? newer : older;
      if (src.answers && src.answers[k] !== undefined) out.answers[k] = src.answers[k];
    });

    var cleared = Object.assign({}, trueSet(older.clearedIds), trueSet(newer.clearedIds));
    function newerTouched(id) {
      if (newer.wrongIds && newer.wrongIds[id]) return true;
      if (newer.submitted && newer.submitted[id]) return true;
      if (newer.flags && newer.flags[id]) return true;
      if (newer.answers && newer.answers[id] !== undefined) return true;
      return false;
    }
    Object.keys(cleared).forEach(function (id) { if (newerTouched(id)) delete cleared[id]; });

    var ids = {};
    [older, newer].forEach(function (side) {
      Object.keys(trueSet(side.wrongIds)).forEach(function (k) { ids[k] = 1; });
      Object.keys(side.answers || {}).forEach(function (k) { ids[k] = 1; });
    });
    Object.keys(ids).forEach(function (id) {
      if (cleared[id]) return;
      var nAns = newer.answers && newer.answers[id] !== undefined;
      var oAns = older.answers && older.answers[id] !== undefined;
      var nWrong = !!(newer.wrongIds && newer.wrongIds[id]);
      var oWrong = !!(older.wrongIds && older.wrongIds[id]);
      if (nAns && oAns) {
        if (nWrong) out.wrongIds[id] = true;
        return;
      }
      if (nAns && !nWrong) return;
      if (nWrong || oWrong) out.wrongIds[id] = true;
    });

    Object.assign(out.answerRevisions, isObj(older.answerRevisions) ? older.answerRevisions : {}, isObj(newer.answerRevisions) ? newer.answerRevisions : {});
    Object.assign(out.legacyIsolated, isObj(older.legacyIsolated) ? older.legacyIsolated : {}, isObj(newer.legacyIsolated) ? newer.legacyIsolated : {});
    Object.keys(cleared).forEach(function (id) {
      delete out.answers[id];
      delete out.submitted[id];
      delete out.flags[id];
      delete out.wrongIds[id];
      delete out.answerRevisions[id];
      delete out.legacyIsolated[id];
      out.clearedIds[id] = true;
    });
    return out;
  }

  /** Replace every exam progress key with snap. Used by manual「下载进度」(cloud wins). */
  function replaceAll(ls, snap, setRaw) {
    clearAll(ls);
    if (snap && isObj(snap) && isObj(snap.exams)) apply(ls, snap, setRaw);
  }

  function mergeSnapshots(local, remote) {
    var out = { v: VERSION, schema: SCHEMA, compat: COMPAT, t: Date.now(), dev: local && local.dev, exams: {} };
    var le = (local && local.exams) || {}, re = (remote && remote.exams) || {};
    Object.keys(Object.assign({}, le, re)).forEach(function (id) {
      var a = le[id] || {}, b = re[id] || {};
      var lastPick = (b.lt || 0) > (a.lt || 0) ? b : a;
      if (!lastPick.last) lastPick = a.last ? a : b;
      out.exams[id] = {
        p: mergePractice(a.p, a.pt, b.p, b.pt),
        pt: Math.max(a.pt || 0, b.pt || 0),
        last: lastPick.last || null, lt: Math.max(a.lt || 0, b.lt || 0),
        hist: mergeHist(a.hist, b.hist),
      };
    });
    return out;
  }

  function stable(x) { return JSON.stringify(x, function (k, v) { return isObj(v) ? Object.keys(v).sort().reduce(function (o, kk) { o[kk] = v[kk]; return o; }, {}) : v; }); }
  function sameData(a, b) {
    var strip = function (s) { var o = {}; Object.keys((s && s.exams) || {}).forEach(function (id) { var e = s.exams[id]; o[id] = [e.p, e.last, (e.hist || []).length]; }); return o; };
    return stable(strip(a)) === stable(strip(b));
  }

  /** Write snapshot into localStorage (raw setItem — caller should bypass change hooks). */
  function apply(ls, snap, setRaw) {
    var set = setRaw || function (k, v) { ls.setItem(k, v); };
    var meta = readMeta(ls);
    Object.keys(snap.exams || {}).forEach(function (id) {
      var e = snap.exams[id];
      if (e.p) { set(P + id, JSON.stringify(e.p)); meta.ts[P + id] = e.pt || meta.ts[P + id] || 0; }
      if (e.last) { set(L + id, JSON.stringify(e.last)); meta.ts[L + id] = e.lt || meta.ts[L + id] || 0; }
      set(H + id, JSON.stringify(e.hist || []));
      if (LEGACY[id]) { try { ls.removeItem(LEGACY[id].p); ls.removeItem(LEGACY[id].l); } catch (x) {} }
    });
    writeMeta(ls, meta);
  }

  /** Called when app writes a key: stamp timestamp; on exam_last also append to history. */
  function noteWrite(ls, key, value, setRaw) {
    if (key.indexOf(P) !== 0 && key.indexOf(L) !== 0) return false;
    var meta = readMeta(ls), now = Date.now();
    meta.ts[key] = now;
    writeMeta(ls, meta);
    if (key.indexOf(L) === 0) {
      var id = key.slice(L.length), h = parse(ls.getItem(H + id), []);
      var item = parse(value, null);
      if (isObj(item)) {
        item.t = now;
        h = mergeHist(Array.isArray(h) ? h : [], [item]);
        (setRaw || function (k, v) { ls.setItem(k, v); })(H + id, JSON.stringify(h));
      }
    }
    return true;
  }

  function clearAll(ls) {
    var del = [];
    for (var i = 0; i < ls.length; i++) {
      var k = ls.key(i) || "";
      if (k.indexOf(P) === 0 || k.indexOf(L) === 0 || k.indexOf(H) === 0) del.push(k);
    }
    Object.keys(LEGACY).forEach(function (id) { del.push(LEGACY[id].p, LEGACY[id].l); });
    del.forEach(function (k) { try { ls.removeItem(k); } catch (e) {} });
    var m = readMeta(ls); m.ts = {}; writeMeta(ls, m);
  }

  /* ---- export / import code: "ITC1." + base64url(deflate-raw(json)) or "ITC0." + base64url(utf8 json) ---- */
  function b64urlFromBytes(u8) {
    var s = ""; for (var i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000));
    return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  function bytesFromB64url(s) {
    s = String(s).replace(/\s+/g, "").replace(/-/g, "+").replace(/_/g, "/");
    while (s.length % 4) s += "=";
    var bin = atob(s), u8 = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
    return u8;
  }
  async function pipe(u8, stream) {
    var res = new Response(new Blob([u8]).stream().pipeThrough(stream));
    return new Uint8Array(await res.arrayBuffer());
  }
  function canDeflate() { return typeof CompressionStream === "function" && typeof DecompressionStream === "function" && typeof Response === "function" && typeof Blob === "function"; }

  async function encode(snap) {
    var u8 = new TextEncoder().encode(JSON.stringify(snap));
    if (canDeflate()) {
      try { return "ITC1." + b64urlFromBytes(await pipe(u8, new CompressionStream("deflate-raw"))); } catch (e) {}
    }
    return "ITC0." + b64urlFromBytes(u8);
  }
  async function decode(code) {
    code = String(code || "").trim();
    var m = /^(ITC[01])\.([A-Za-z0-9_\-\s]+)$/.exec(code);
    if (!m) {
      if (code.charAt(0) === "{") return validate(JSON.parse(code)); // raw JSON file
      throw new Error("进度码格式不正确");
    }
    var u8 = bytesFromB64url(m[2]);
    if (m[1] === "ITC1") {
      if (!canDeflate()) throw new Error("当前浏览器不支持解压此进度码，请改用「下载文件」方式或换浏览器");
      u8 = await pipe(u8, new DecompressionStream("deflate-raw"));
    }
    return validate(JSON.parse(new TextDecoder().decode(u8)));
  }
  function validate(s) {
    if (!isObj(s) || !isObj(s.exams)) throw new Error("进度数据无效");
    if (s.schema != null && s.schema !== SCHEMA) throw new Error("进度快照不兼容");
    if (s.compat != null && Number(s.compat) > COMPAT) throw new Error("进度快照版本过新，无法覆盖导入");
    return s;
  }
  function gradingDecision(storedRevision, currentRevision) {
    if (!storedRevision || !currentRevision) return { grade: true, reason: "unversioned" };
    if (storedRevision !== currentRevision) return { grade: false, reason: "revision-differs" };
    return { grade: true, reason: "same-revision" };
  }
  function isolateRecord(bag, id, reason) {
    if (!bag.legacyIsolated || typeof bag.legacyIsolated !== "object") bag.legacyIsolated = {};
    if (!bag.legacyIsolated[id]) {
      bag.legacyIsolated[id] = {
        reason: reason || "unmapped",
        answers: bag.answers ? bag.answers[id] : undefined,
        submitted: !!(bag.submitted && bag.submitted[id]),
        wrong: !!(bag.wrongIds && bag.wrongIds[id]),
        flag: !!(bag.flags && bag.flags[id]),
        answerRevision: bag.answerRevisions ? (bag.answerRevisions[id] || null) : null,
      };
    }
    if (bag.answers) delete bag.answers[id];
    if (bag.submitted) delete bag.submitted[id];
    if (bag.wrongIds) delete bag.wrongIds[id];
    if (bag.flags) delete bag.flags[id];
    return bag.legacyIsolated[id];
  }

  return { VERSION: VERSION, SCHEMA: SCHEMA, COMPAT: COMPAT, META_KEY: META_KEY, snapshot: snapshot, mergeSnapshots: mergeSnapshots, mergePractice: mergePractice,
    gradingDecision: gradingDecision, isolateRecord: isolateRecord,
    mergeHist: mergeHist, sameData: sameData, apply: apply, noteWrite: noteWrite, clearAll: clearAll, replaceAll: replaceAll, readMeta: readMeta,
    writeMeta: writeMeta, encode: encode, decode: decode, validate: validate, keys: { P: P, L: L, H: H } };
});
