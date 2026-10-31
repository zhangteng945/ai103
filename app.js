/* IT认证练习 — multi-exam practice app (AI-103 / DOP-C02) — Teng */
(function () {
  "use strict";

  const LANG_KEY = "ai103-lang"; // site-wide language preference (legacy key kept)
  const SHOWANS_KEY = "ai103-showans"; // site-wide show-answer preference
  let PASS_SCORE = 700;
  let SCORE_MIN = 0;
  const IMAGE_ONLY_NOTE = "本题选项为 PDF 截图，暂无文字，请对照原题";

  /* Active bank — reassigned when switching exams (shadows any global QUESTIONS). */
  let QUESTIONS = [];
  let DOMAIN_ORDER = ["plan", "genai", "vision", "text", "extract"];
  let DOMAIN_WEIGHTS = { plan: 0.275, genai: 0.325, vision: 0.125, text: 0.125, extract: 0.125 };
  let currentExamId = "ai103";

  function examApi() {
    return (typeof window !== "undefined" && window.ITCERT_EXAMS) || null;
  }
  function currentExam() {
    const api = examApi();
    return api ? api.get(currentExamId) : null;
  }
  function storagePracticeKey() {
    const api = examApi();
    return api ? api.practiceKey(currentExamId) : "itcert_practice_v1_" + currentExamId;
  }
  function storageExamLastKey() {
    const api = examApi();
    return api ? api.examLastKey(currentExamId) : "itcert_exam_last_v1_" + currentExamId;
  }
  function storageQOrderKey() {
    const api = examApi();
    return api ? api.qOrderKey(currentExamId) : "itcert_qorder_v1_" + currentExamId;
  }
  /** Resolve practice raw JSON: namespaced key, else AI-103 legacy once. */
  function readPracticeRaw() {
    try {
      let raw = localStorage.getItem(storagePracticeKey());
      if (raw) return { raw: raw, fromLegacy: false };
      const exam = currentExam();
      if (exam && exam.id === "ai103" && exam.legacyPracticeKey) {
        raw = localStorage.getItem(exam.legacyPracticeKey);
        if (raw) return { raw: raw, fromLegacy: true };
      }
    } catch (e) {}
    return { raw: null, fromLegacy: false };
  }
  function readExamLastRaw() {
    try {
      let raw = localStorage.getItem(storageExamLastKey());
      if (raw) return raw;
      const exam = currentExam();
      if (exam && exam.id === "ai103" && exam.legacyExamLastKey) {
        return localStorage.getItem(exam.legacyExamLastKey);
      }
    } catch (e) {}
    return null;
  }
  function readQOrderRaw() {
    try {
      let raw = localStorage.getItem(storageQOrderKey());
      if (raw) return raw;
      const exam = currentExam();
      if (exam && exam.id === "ai103" && exam.legacyQOrderKey) {
        return localStorage.getItem(exam.legacyQOrderKey);
      }
    } catch (e) {}
    return null;
  }
  function applyExamConfig(exam) {
    if (!exam) return;
    currentExamId = exam.id;
    PASS_SCORE = exam.passScore || 700;
    SCORE_MIN = exam.scoreMin || 0;
    DOMAIN_ORDER = (exam.domainOrder && exam.domainOrder.length) ? exam.domainOrder.slice() : [];
    DOMAIN_WEIGHTS = Object.assign({}, exam.domainWeights || {});
    const qs = typeof exam.getQuestions === "function" ? exam.getQuestions() : [];
    QUESTIONS = Array.isArray(qs) ? qs.slice() : [];
  }
  function clearSessionProgressState() {
    state.practiceFilter = "all";
    state.practiceList = [];
    state.practiceIndex = 0;
    state.practiceAnswers = {};
    state.practiceSubmitted = {};
    state.practiceFlags = {};
    state.wrongIds = {};
    state.practiceReveal = {};
    state.boxChoiceOrder = {};
    state.practiceOrder = {};
    if (state.examTimerId) {
      clearInterval(state.examTimerId);
      state.examTimerId = null;
    }
    state.examQuestions = [];
    state.examIndex = 0;
    state.examAnswers = {};
    state.examFlags = {};
    state.examSecondsLeft = 0;
    state.examSubmitted = false;
    state.examResult = null;
    state.revealed = false;
  }
  function switchExam(examId, opts) {
    const api = examApi();
    if (!api) return false;
    const exam = api.get(examId);
    if (!exam || (exam.id === currentExamId && QUESTIONS.length)) {
      if (exam && exam.id === currentExamId) {
        // still refresh UI
        if (!opts || !opts.silent) {
          rebuildExamConfigControls();
          rebuildPracticeFilter();
          rebuildHomeStats();
          applyChrome();
          updateExamSwitcherUI();
        }
        return true;
      }
      return false;
    }
    if (api.saveExamId) api.saveExamId(exam.id);
    applyExamConfig(exam);
    clearSessionProgressState();
    state.practiceOrder = loadOrderMap();
    loadProgress();
    // Do not auto-load last exam into live state on switch; peek only via home button
    rebuildExamConfigControls();
    rebuildPracticeFilter();
    rebuildHomeStats();
    applyChrome();
    updateExamSwitcherUI();
    if (!opts || !opts.skipHome) renderHome();
    return true;
  }

  /* Lang: zh | en | both — default 对照 */
  const I18N = {
    zh: {
      brandTitle: "IT认证练习",
      brandSub: "多题库练习 · 可切换中/英/对照",
      homeTitle: "题库概览",
      homeIntro: "题源来自你提供的 PDF；已人工/对照文档核对答案，更正处有标记。覆盖官方 skills measured（参考 2026-04 大纲）。非官方真题，仅供备考练习。",
      statAll: "全部题目",
      statPlan: "规划管理",
      statGenai: "生成式/智能体",
      statVision: "计算机视觉",
      statText: "文本分析",
      statExtract: "信息提取",
      btnPractice: "全题库练习",
      btnPracticeDesc: "按领域筛选 · 即时反馈与解析 · 进度本地保存",
      btnExam: "模拟考试",
      btnExamDesc: "限时抽题 · 结束计分（700/1000 及格）· 错题回顾",
      btnFlagged: "标记复习",
      btnFlaggedDesc: (n) => (n ? ("已标记 " + n + " 题 · 点击开始复习") : "暂无标记题目"),
      btnWrong: "错题回顾",
      btnWrongDesc: (n) => (n ? ("错题 " + n + " 题 · 点击开始复习") : "暂无错题"),
      btnLastExam: "上次考试成绩",
      btnLastExamDesc: (score, n) => ("得分 " + score + " · 错题 " + n + " · 点击查看"),
      homeNote: "及格线参考 Microsoft 认证常见换算：约 700 / 1000。若某题答案相对 PDF 有更正，练习反馈中会显示「答案已更正」说明。快捷键：数字键 1–6 选题，Enter 提交/下一题。",
      filter: "筛选",
      filterAll: "全部",
      filterFlagged: "已标记",
      filterWrong: "错题",
      domain: {
        plan: "规划和管理 Azure AI 解决方案",
        genai: "实现生成式 AI 与智能体解决方案",
        vision: "实现计算机视觉解决方案",
        text: "实现文本分析解决方案",
        extract: "实现信息提取解决方案",
      },
      backHome: "← 首页",
      resetProgress: "重置进度",
      prev: "上一题",
      next: "下一题",
      skip: "跳过",
      flag: "标记复习",
      unflag: "取消标记",
      submit: "提交",
      submitted: "已提交",
      showAnswer: "显示答案",
      hideAnswer: "隐藏答案",
      alwaysShow: "始终显示答案（背题模式）",
      revealedTitle: "👁 已显示正确答案（未计分，不计入已答）",
      shuffle: "乱序",
      unshuffle: "恢复顺序",
      shuffleTitle: "随机打乱当前题目顺序（尊重当前筛选）",
      unshuffleTitle: "恢复 PDF 原始题目顺序",
      shuffledTag: " · 乱序",
      progressPractice: (a, t, i) => "已答 " + a + " / " + t + "（当前第 " + i + " 题）",
      jumpPre: "跳到第",
      jumpSuf: "题",
      jumpGo: "跳转",
      jumpPick: "选择题号",
      jumpOpt: (n) => "第 " + n + " 题",
      jumpInvalid: (max) => "请输入 1–" + max + " 之间的题号（如 15 或 q015）",
      jumpSwitched: (n) => "第 " + n + " 题不在当前筛选中，已切换到「全部」",
      jumpShuffled: (n, pos) => "已跳到第 " + n + " 题（乱序中第 " + pos + " 个）",
      noQuestions: "当前筛选下没有题目。",
      typeHotspot: "热点配置",
      typeYn: "是/否",
      typeDrag: "拖放排序",
      typeMulti: "多选题",
      typeSingle: "单选题",
      typeCase: "案例",
      flagged: "已标记",
      caseSummary: "案例背景（Case Study）",
      pickBoxes: "请在答案区域为每个框选择选项",
      pickYn: "请为每条陈述选择 是 或 否",
      pickDrag: "按顺序点击选项填入步骤；再点步骤可清除",
      pickMulti: "请选择所有正确答案",
      answerArea: "答案区域",
      dragPool: "可选项（点击填入下一步）",
      dragSlots: "步骤 / 目标",
      emptySlot: "（空）· 点击上方选项填入",
      clearSlot: "清除",
      undoLast: "撤销上一步",
      pleaseSelect: "请选择…",
      ynYes: "是",
      ynNo: "否",
      correct: "✓ 回答正确",
      wrong: "✗ 回答错误",
      correctShort: "✓ 正确",
      wrongShort: "✗ 错误",
      correctAnswer: "正确答案：",
      answerFixed: "答案已更正：",
      pdfAnswer: "（PDF 原答案：",
      note: "备注：",
      refs: "官方文档：",
      unanswered: "（未选）",
      notAnswered: "未作答",
      examConfigTitle: "模拟考试设置",
      examConfigIntro: "真实考试结构（选 58 题时）：第 1 部分 48 道常规题 → 第 2 部分 3 道多判断 → 第 3 部分 7 道案例研究（案例/问题分页签）。结束一个部分后不能返回；可标记复习，交卷前有检查屏幕；考试中不显示对错。及格 700/1000，官方时长 120 分钟。",
      examCount: "题目数量",
      examMinutes: "考试时长（分钟）",
      examCount30: "30 题",
      examCount50: "50 题",
      examCount58: "58 题（默认，真实考试）",
      examCount60: "60 题",
      back: "← 返回",
      startExam: "开始考试",
      leaveExam: "← 离开",
      examNavHint: "题目导航（点击跳转；底边高亮 = 已标记）",
      flagShort: "标记",
      unflagShort: "取消标记",
      handIn: "检查 / 交卷",
      viewScore: "查看成绩",
      progressExam: (a, t, i) => "已答 " + a + " / " + t + " · 第 " + i + " 题",
      resultTitle: "考试成绩",
      domainScores: "领域得分",
      reviewQs: "逐题回顾",
      retry: "再考一次",
      wrongTitle: "错题与解析",
      allCorrect: "全部答对，太棒了！",
      yourAnswer: "你的答案：",
      scoreSub: (c, t, pct, pass, auto) =>
        "正确 " + c + " / " + t + "（" + pct + "%）· 及格线 " + PASS_SCORE + " / 1000（标准分 " + SCORE_MIN + "–1000）· " +
        (pass ? "及格" : "未及格") + (auto ? " · 时间到自动交卷" : ""),
      confirmReset: "确定重置当前筛选范围内的练习进度（作答与标记）？",
      confirmLeave: "离开将放弃本场模拟考试（进度不保存）。确定？",
      confirmHandInUnanswered: (n) => "还有 " + n + " 题未作答，确定交卷？",
      confirmHandIn: "确定交卷并查看成绩？",
      kbdPractice: "选择 · Enter 提交 / 下一题",
      kbdExam: "选择 · Enter 下一题",
      foot: "IT认证练习 · 本地运行 · 进度按题库隔离保存在 localStorage",
    },
    en: {
      brandTitle: "IT Cert Practice",
      brandSub: "Multi-exam practice · ZH / EN / both",
      homeTitle: "Question bank",
      homeIntro: "Sourced from your PDF; answers checked against docs. Covers official skills measured (ref. 2026-04 outline). Unofficial practice only.",
      statAll: "All",
      statPlan: "Plan & manage",
      statGenai: "GenAI / agents",
      statVision: "Computer vision",
      statText: "Text analysis",
      statExtract: "Info extraction",
      btnPractice: "Practice all",
      btnPracticeDesc: "Filter by domain · instant feedback · local progress",
      btnExam: "Mock exam",
      btnExamDesc: "Timed sample · score out of 1000 (pass 700) · review misses",
      btnFlagged: "Flagged review",
      btnFlaggedDesc: (n) => (n ? (n + " flagged · tap to review") : "No flagged questions"),
      btnWrong: "Miss review",
      btnWrongDesc: (n) => (n ? (n + " misses · tap to review") : "No misses yet"),
      btnLastExam: "Last exam score",
      btnLastExamDesc: (score, n) => ("Score " + score + " · " + n + " misses · view"),
      homeNote: "Pass bar ≈ 700 / 1000 (common Microsoft scale). Corrected answers show a note after submit. Keys: 1–6 select, Enter submit/next.",
      filter: "Filter",
      filterAll: "All",
      filterFlagged: "Flagged",
      filterWrong: "Misses",
      domain: {
        plan: "Plan and manage an Azure AI solution",
        genai: "Implement generative AI and agentic solutions",
        vision: "Implement computer vision solutions",
        text: "Implement text analysis solutions",
        extract: "Implement information extraction solutions",
      },
      backHome: "← Home",
      resetProgress: "Reset progress",
      prev: "Previous",
      next: "Next",
      skip: "Skip",
      flag: "Flag",
      unflag: "Unflag",
      submit: "Submit",
      submitted: "Submitted",
      showAnswer: "Show answer",
      hideAnswer: "Hide answer",
      alwaysShow: "Always show answers (study mode)",
      revealedTitle: "👁 Answer shown (not scored, not counted as done)",
      shuffle: "Shuffle",
      unshuffle: "Original order",
      shuffleTitle: "Randomize question order (current filter)",
      unshuffleTitle: "Restore original PDF question order",
      shuffledTag: " · shuffled",
      progressPractice: (a, t, i) => "Done " + a + " / " + t + " (Q " + i + ")",
      jumpPre: "Go to question",
      jumpSuf: "",
      jumpGo: "Go",
      jumpPick: "Pick question",
      jumpOpt: (n) => "Q" + n,
      jumpInvalid: (max) => "Enter a question number from 1 to " + max + " (e.g. 15 or q015)",
      jumpSwitched: (n) => "Q" + n + " is not in the current filter — switched to All",
      jumpShuffled: (n, pos) => "Jumped to Q" + n + " (position " + pos + " in shuffled order)",
      noQuestions: "No questions in this filter.",
      typeHotspot: "Hotspot config",
      typeYn: "Yes/No",
      typeDrag: "Drag / order",
      typeMulti: "Multi-select",
      typeSingle: "Single choice",
      typeCase: "Case",
      flagged: "Flagged",
      caseSummary: "Case study background",
      pickBoxes: "Select an option for each box in the answer area",
      pickYn: "For each statement, choose Yes or No",
      pickDrag: "Tap choices in order to fill steps; tap a step to clear",
      pickMulti: "Select all that apply",
      answerArea: "Answer area",
      dragPool: "Choices (tap to fill next step)",
      dragSlots: "Steps / targets",
      emptySlot: "(empty) · tap a choice above",
      clearSlot: "Clear",
      undoLast: "Undo last",
      pleaseSelect: "Select…",
      ynYes: "Yes",
      ynNo: "No",
      correct: "✓ Correct",
      wrong: "✗ Incorrect",
      correctShort: "✓ Correct",
      wrongShort: "✗ Incorrect",
      correctAnswer: "Correct answer: ",
      answerFixed: "Answer corrected: ",
      pdfAnswer: "(PDF answer: ",
      note: "Note: ",
      refs: "Docs: ",
      unanswered: "(none)",
      notAnswered: "No answer",
      examConfigTitle: "Mock exam setup",
      examConfigIntro: "Real exam structure (58 Q): Section 1 · 48 questions → Section 2 · 3 multi-judgment → Section 3 · 7-question case study (Case/Question tabs). You can't return to a section after ending it; mark for review; review screen before you finish; no feedback until the end. Pass 700/1000, official time 120 min.",
      examCount: "Question count",
      examMinutes: "Duration (minutes)",
      examCount30: "30 questions",
      examCount50: "50 questions",
      examCount58: "58 questions (default, real exam)",
      examCount60: "60 questions",
      back: "← Back",
      startExam: "Start exam",
      leaveExam: "← Leave",
      examNavHint: "Navigator (click to jump; bottom highlight = flagged)",
      flagShort: "Flag",
      unflagShort: "Unflag",
      handIn: "Review / Submit",
      viewScore: "View score",
      progressExam: (a, t, i) => "Done " + a + " / " + t + " · Q " + i,
      resultTitle: "Exam results",
      domainScores: "By domain",
      reviewQs: "Review questions",
      retry: "Try again",
      wrongTitle: "Misses & explanations",
      allCorrect: "All correct — well done!",
      yourAnswer: "Your answer: ",
      scoreSub: (c, t, pct, pass, auto) =>
        "Correct " + c + " / " + t + " (" + pct + "%) · Pass " + PASS_SCORE + " / 1000 (scaled " + SCORE_MIN + "–1000) · " +
        (pass ? "PASS" : "FAIL") + (auto ? " · Auto-submitted (time up)" : ""),
      confirmReset: "Reset practice progress for the current filter (answers & flags)?",
      confirmLeave: "Leave and discard this mock exam (not saved)?",
      confirmHandInUnanswered: (n) => n + " unanswered — submit anyway?",
      confirmHandIn: "Submit and view score?",
      kbdPractice: "select · Enter submit / next",
      kbdExam: "select · Enter next",
      foot: "IT Cert Practice · local · progress isolated per exam in localStorage",
    },
  };
  // 对照 uses ZH chrome (friendliest) but dual stems/options
  function t() {
    return state.lang === "en" ? I18N.en : I18N.zh;
  }
  function loadLang() {
    try {
      const v = localStorage.getItem(LANG_KEY);
      if (v === "zh" || v === "en" || v === "both") return v;
    } catch (e) {}
    return "both";
  }
  function saveLang(v) {
    try {
      localStorage.setItem(LANG_KEY, v);
    } catch (e) {}
  }
  function loadShowAll() {
    try {
      return localStorage.getItem(SHOWANS_KEY) === "1";
    } catch (e) {}
    return false;
  }
  function saveShowAll(v) {
    try {
      localStorage.setItem(SHOWANS_KEY, v ? "1" : "0");
    } catch (e) {}
  }
  function loadOrderMap() {
    try {
      const raw = readQOrderRaw();
      const m = JSON.parse(raw || "{}");
      if (m && typeof m === "object") return m;
    } catch (e) {}
    return {};
  }
  function saveOrderMap(m) {
    try {
      localStorage.setItem(storageQOrderKey(), JSON.stringify(m));
      // one-time migrate away from legacy key for ai103
      const exam = currentExam();
      if (exam && exam.id === "ai103" && exam.legacyQOrderKey) {
        try { localStorage.removeItem(exam.legacyQOrderKey); } catch (e2) {}
      }
    } catch (e) {}
  }
  /* true while rendering a practice question whose answer is revealed (not submitted) */
  let revealOnly = false;
  function okMark(ansTxt) {
    return revealOnly ? "✓ " + escapeHtml(caLabel()) + escapeHtml(inl(ansTxt)) : "✓";
  }
  /** one-line form of a possibly two-line (对照) text: "中文 / English" */
  function inl(s) {
    return String(s == null ? "" : s).replace(/\s*\n\s*/g, " / ");
  }
  function caLabel() {
    return state.lang === "both" ? "正确答案 / Correct answer：" : t().correctAnswer;
  }
  function yaLabel() {
    return state.lang === "both" ? "你的答案 / Your answer：" : t().yourAnswer;
  }
  /** UI string; in 对照 mode joins 中文 / English (skips duplicates/empties) */
  function bi(key) {
    const args = Array.prototype.slice.call(arguments, 1);
    const val = (pack) => {
      const v = pack[key];
      return typeof v === "function" ? v.apply(null, args) : v;
    };
    if (state.lang !== "both") return val(t());
    const z = val(I18N.zh);
    const e = val(I18N.en);
    if (!e || z === e) return z;
    if (!z) return e;
    return z + " / " + e;
  }
  function optLine(q, oid) {
    const opt = (q.options || []).find((o) => o.id === oid);
    return opt ? oid + ". " + inl(optionText(opt)) : oid;
  }
  // Safety net for imported text: trim trailing spaces, drop whitespace-only
  // lines, keep at most one blank line (= one paragraph gap).
  function tidyText(s) {
    if (typeof s !== "string" || s.indexOf("\n") < 0) return s;
    return s
      .replace(/\r\n?/g, "\n")
      .replace(/[ \t\u3000]+\n/g, "\n")
      .replace(/\n[ \t\u3000]+(?=\n)/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .replace(/^\n+|\s+$/g, "");
  }
  function pickText(zh, en) {
    const z = tidyText(zh || en || "");
    const e = tidyText(en || zh || "");
    if (state.lang === "zh") return z || e;
    if (state.lang === "en") return e || z;
    if (z && e && z !== e) return z + "\n" + e;
    return z || e;
  }
  function stemOf(q) {
    return pickText(q.stemZh || q.stem, q.stemEn);
  }
  function caseStudyTextOf(q) {
    if (!q) return "";
    const zh = tidyText(q.caseStudyTextZh || q.caseStudyText || "");
    const en = tidyText(q.caseStudyTextEn || "");
    if (state.lang === "zh") return zh || en;
    if (state.lang === "en") return en || zh;
    // both: ZH then EN stacked
    if (zh && en && zh !== en) return zh + "\n\n—\n\n" + en;
    return zh || en;
  }
  function optionText(opt) {
    if (!opt) return "";
    if (opt.imageOnly) return IMAGE_ONLY_NOTE;
    const zh = opt.textZh || opt.text || "";
    const en = opt.textEn || opt.text || "";
    if (!String(zh).trim() && !String(en).trim()) return IMAGE_ONLY_NOTE;
    return pickText(zh, en);
  }
  function boxLabel(b) {
    return pickText(b.labelZh || b.label, b.labelEn || b.label);
  }
  function choiceText(c) {
    if (typeof c === "string") return c;
    return pickText(c.zh || c.en || c.key, c.en || c.zh || c.key);
  }
  function choiceKey(c) {
    if (typeof c === "string") return c;
    return c.key;
  }
  function domainLabelOf(q) {
    const pack = t();
    return pack.domain[q.domain] || (state.lang === "en" ? q.domainLabelEn || q.domainLabel : q.domainLabelZh || q.domainLabel);
  }

  function pdfRefOf(q) {
    if (!q) return "";
    if (state.lang === "en") return q.pdfRefEn || q.pdfRef || "";
    if (state.lang === "zh") return q.pdfRef || q.pdfRefEn || "";
    // both: Chinese primary; English goes in title via pdfRefTitle
    return q.pdfRef || q.pdfRefEn || "";
  }
  function pdfRefTitle(q) {
    if (!q) return "";
    if (state.lang === "both") return q.pdfRefEn || "";
    if (state.lang === "zh" && q.pdfRefEn && q.pdfRefEn !== q.pdfRef) return q.pdfRefEn;
    if (state.lang === "en" && q.pdfRef && q.pdfRef !== q.pdfRefEn) return q.pdfRef;
    return "";
  }
  function pdfRefBadgeHtml(q) {
    const ref = pdfRefOf(q);
    if (!ref) return "";
    const title = pdfRefTitle(q);
    const page = q.pdfPage ? (state.lang === "en" ? " · p." + q.pdfPage : " · 第" + q.pdfPage + "页") : "";
    return (
      '<span class="badge pdf-ref"' +
      (title ? ' title="' + escapeHtml(title) + '"' : "") +
      ">" +
      escapeHtml(ref + page) +
      "</span>"
    );
  }

  function explanationOf(q) {
    if (state.lang === "en") return tidyText(q.explanationEn || q.explanation || "");
    if (state.lang === "zh") return tidyText(q.explanationZh || q.explanation || "");
    const zh = tidyText(q.explanationZh || q.explanation || "");
    const en = tidyText(q.explanationEn || "");
    if (zh && en && zh !== en) return zh + "\n\n—\n\n" + en;
    return zh || en;
  }

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  const views = {
    home: $("#view-home"),
    practice: $("#view-practice"),
    examConfig: $("#view-exam-config"),
    exam: $("#view-exam"),
    result: $("#view-result"),
  };

  let state = {
    mode: "home",
    lang: loadLang(),
    practiceFilter: "all",
    practiceList: [],
    practiceIndex: 0,
    practiceAnswers: {}, // id -> selected ids[] OR box map {boxId: value}
    practiceSubmitted: {}, // id -> true
    practiceFlags: {},
    wrongIds: {}, // id -> true (persisted wrong-answer bank for 错题回顾)
    examQuestions: [],
    examIndex: 0,
    examAnswers: {},
    examFlags: {},
    examSecondsLeft: 0,
    examTimerId: null,
    examSubmitted: false,
    examResult: null,
    revealed: false, // after submit show feedback in exam review
    boxChoiceOrder: {}, // qid -> { boxId: [shuffled choices] }
    practiceReveal: {}, // qid -> true (answer shown via button; session only, not scored)
    practiceShowAll: loadShowAll(), // 背题模式
    practiceOrder: loadOrderMap(), // filter -> [qid...] when shuffled
  };

  function authAllowsApp() {
    const A = typeof window !== "undefined" ? window.AI103Auth : null;
    if (!A || !A.enabled) return true; // offline / no keys → open access
    if (typeof A.isLoggedIn === "function") return !!A.isLoggedIn();
    const st = A.getState ? A.getState() : null;
    return !!(st && st.user && st.user.email);
  }

  function hideAllAppViews() {
    Object.keys(views).forEach((k) => {
      if (views[k]) views[k].classList.add("hidden");
    });
    state.mode = "auth";
  }

  function showView(name) {
    if (!authAllowsApp()) {
      hideAllAppViews();
      return;
    }
    Object.keys(views).forEach((k) => {
      views[k].classList.toggle("hidden", k !== name);
    });
    state.mode = name;
  }

  function onAuthGateChange() {
    if (!authAllowsApp()) {
      if (state.examTimerId) {
        clearInterval(state.examTimerId);
        state.examTimerId = null;
      }
      hideAllAppViews();
      return;
    }
    // Only auto-open home when leaving the login gate (not on token refresh mid-practice)
    if (state.mode === "auth" || !state.mode) {
      renderHome();
    }
  }

  function byDomain(domain) {
    return QUESTIONS.filter((q) => q.domain === domain);
  }

  function domainCounts() {
    const c = {};
    DOMAIN_ORDER.forEach((d) => (c[d] = 0));
    QUESTIONS.forEach((q) => {
      c[q.domain] = (c[q.domain] || 0) + 1;
    });
    return c;
  }

  function loadProgress() {
    try {
      const got = readPracticeRaw();
      const raw = got.raw;
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data.answers) state.practiceAnswers = data.answers;
      if (data.submitted) state.practiceSubmitted = data.submitted;
      if (data.flags) {
        const cleaned = {};
        Object.keys(data.flags).forEach((id) => {
          if (data.flags[id]) cleaned[id] = true;
        });
        state.practiceFlags = cleaned;
      }
      if (data.wrongIds) {
        const cleaned = {};
        Object.keys(data.wrongIds).forEach((id) => {
          if (data.wrongIds[id]) cleaned[id] = true;
        });
        state.wrongIds = cleaned;
      }
      sanitizeProgress();
      if (!data.wrongIds) {
        let derived = false;
        QUESTIONS.forEach((q) => {
          if (state.practiceSubmitted[q.id] && !isCorrect(q, state.practiceAnswers[q.id])) {
            state.wrongIds[q.id] = true;
            derived = true;
          }
        });
        if (derived) saveProgress();
      }
    } catch (e) {
      /* ignore */
    }
  }

  /** Drop saved answers that no longer fit the current bank (e.g. saved by an older version),
   *  so a question is never shown pre-marked wrong with values the user can't see. */
  function sanitizeProgress() {
    const byId = {};
    QUESTIONS.forEach((q) => (byId[q.id] = q));
    let changed = false;
    Object.keys(state.practiceAnswers).forEach((id) => {
      const q = byId[id];
      const a = state.practiceAnswers[id];
      let ok = !!q;
      if (ok && isBoxQ(q)) {
        ok = !!a && typeof a === "object" && !Array.isArray(a) &&
          q.boxes.every((b) => {
            const v = a[b.id];
            return !v || (b.choices || []).some((c) => choiceKey(c) === v);
          });
      } else if (ok) {
        const ids = (q.options || []).map((o) => o.id);
        ok = Array.isArray(a) && a.every((x) => ids.indexOf(x) >= 0);
      }
      if (!ok) {
        delete state.practiceAnswers[id];
        delete state.practiceSubmitted[id];
        delete state.wrongIds[id];
        changed = true;
      }
    });
    Object.keys(state.practiceSubmitted).forEach((id) => {
      const q = byId[id];
      if (!q || !allBoxesSelected(q, state.practiceAnswers[id])) {
        delete state.practiceSubmitted[id];
        changed = true;
      }
    });
    Object.keys(state.practiceFlags).forEach((id) => {
      if (!byId[id] || !state.practiceFlags[id]) {
        delete state.practiceFlags[id];
        changed = true;
      }
    });
    Object.keys(state.wrongIds).forEach((id) => {
      if (!byId[id] || !state.wrongIds[id]) {
        delete state.wrongIds[id];
        changed = true;
      }
    });
    if (changed) saveProgress();
  }

  function saveProgress() {
    try {
      const flags = {};
      Object.keys(state.practiceFlags).forEach((id) => {
        if (state.practiceFlags[id]) flags[id] = true;
      });
      const wrongIds = {};
      Object.keys(state.wrongIds).forEach((id) => {
        if (state.wrongIds[id]) wrongIds[id] = true;
      });
      const payload = JSON.stringify({
        answers: state.practiceAnswers,
        submitted: state.practiceSubmitted,
        flags: flags,
        wrongIds: wrongIds,
      });
      localStorage.setItem(storagePracticeKey(), payload);
      // Migrate: once written to namespaced key, drop legacy ai103 key to avoid split brain
      const exam = currentExam();
      if (exam && exam.id === "ai103" && exam.legacyPracticeKey) {
        try { localStorage.removeItem(exam.legacyPracticeKey); } catch (e2) {}
      }
    } catch (e) {
      /* ignore */
    }
  }

  function flaggedCount() {
    return Object.keys(state.practiceFlags).filter((id) => state.practiceFlags[id]).length;
  }

  function wrongCount() {
    return Object.keys(state.wrongIds).filter((id) => state.wrongIds[id]).length;
  }

  // ===== Study extras (per-exam localStorage: itcert_extras_v1_<examId>) =====
  let EX = null, EX_ID = null;
  function extrasKey() { return "itcert_extras_v1_" + currentExamId; }
  function ex() {
    if (EX && EX_ID === currentExamId) return EX;
    EX_ID = currentExamId;
    try { EX = JSON.parse(localStorage.getItem(extrasKey()) || "{}") || {}; } catch (e) { EX = {}; }
    ["ws", "notes", "favs", "days", "reports", "seen"].forEach((k) => { if (!EX[k] || typeof EX[k] !== "object") EX[k] = {}; });
    if (!Array.isArray(EX.scores)) EX.scores = [];
    if (!(EX.goal > 0)) EX.goal = 30;
    return EX;
  }
  function saveEx() { try { localStorage.setItem(extrasKey(), JSON.stringify(ex())); } catch (e) {} }
  function L(zh, en) { return state.lang === "en" ? en : state.lang === "both" ? zh + " / " + en : zh; }
  function dayStr(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function todayCount() { return ex().days[dayStr(new Date())] || 0; }
  function streakDays() {
    const e = ex(); let n = 0; const d = new Date();
    if (!(e.days[dayStr(d)] > 0)) d.setDate(d.getDate() - 1);
    while (e.days[dayStr(d)] > 0) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function avg7() { const e = ex(); let s = 0; const d = new Date(); for (let i = 0; i < 7; i++) { s += e.days[dayStr(d)] || 0; d.setDate(d.getDate() - 1); } return s / 7; }
  const DD_IDS = ["dd1", "dd2", "dd3", "dd4", "dd5", "dd6"];
  const DD_ZH = ["SDLC 自动化", "配置管理与 IaC", "弹性云解决方案", "监控与日志", "事件与事故响应", "安全与合规"];
  const DD_EN = ["SDLC Automation", "Config Mgmt & IaC", "Resilient Cloud Solutions", "Monitoring & Logging", "Incident & Event Response", "Security & Compliance"];
  const DD_RULES = [
    /CodePipeline|CodeBuild|CodeDeploy|CodeCommit|CodeArtifact|CodeGuru|pipeline|blue\/green|canary|CI\/CD|unit test|integration test|buildspec|appspec|Elastic Beanstalk|ECR|deploy/gi,
    /CloudFormation|StackSets?|\bCDK\b|Systems Manager|State Manager|OpsWorks|Image Builder|\bAMIs?\b|Service Catalog|Organizations|Control Tower|Terraform|template|Parameter Store|Patch Manager|AppConfig|Proton/gi,
    /Auto Scaling|Multi-AZ|failover|disaster recovery|\bRTO\b|\bRPO\b|Route 53|global table|global database|AWS Backup|highly? availab|load balancer|cross-Region|resilien|fault[- ]toleran|read replica/gi,
    /CloudWatch|metrics?\b|dashboard|X-Ray|Logs Insights|OpenSearch|Kinesis|log group|logging|\blogs?\b|Athena|QuickSight|trace/gi,
    /EventBridge|\bSNS\b|incident|remediat|AWS Health|Incident Manager|troubleshoot|runbook|alarms?\b|notif|Step Functions/gi,
    /\bIAM\b|\bKMS\b|Secrets Manager|GuardDuty|Security Hub|AWS Config|\bSCPs?\b|Inspector|Macie|encrypt|complian|\bWAF\b|permission|least privilege|CloudTrail|vulnerab|Access Analyzer|credential/gi,
  ];
  const ddCache = {};
  function ddOf(q) {
    if (ddCache[q.id]) return ddCache[q.id];
    const stem = String(q.stemEn || q.stem || "");
    const opts = (q.options || []).map((o) => o.text || o.textEn || "").join(" ");
    let best = 0, bs = -1;
    DD_RULES.forEach((re, i) => {
      const s = (stem.match(re) || []).length * 2 + (opts.match(re) || []).length;
      if (s > bs) { bs = s; best = i; }
    });
    return (ddCache[q.id] = DD_IDS[best]);
  }
  function usesDD() { const exm = currentExam(); return !(exm && exm.statMode === "domains" && DOMAIN_ORDER.length); }
  function domList() {
    if (!usesDD()) {
      const exm = currentExam(); const zh = exm.domainLabelsZh || t().domain || {}; const en = exm.domainLabelsEn || {};
      return DOMAIN_ORDER.map((d) => ({ id: d, label: L(zh[d] || d, en[d] || zh[d] || d) }));
    }
    return DD_IDS.map((d, i) => ({ id: d, label: L(DD_ZH[i] + "（估）", DD_EN[i] + " (est.)") }));
  }
  function domOf(q) { return usesDD() ? ddOf(q) : q.domain; }
  function domStats() {
    return domList().map((d) => {
      let total = 0, done = 0, ok = 0;
      QUESTIONS.forEach((q) => {
        if (domOf(q) !== d.id) return;
        total++;
        if (state.practiceSubmitted[q.id]) { done++; if (isCorrect(q, state.practiceAnswers[q.id])) ok++; }
      });
      return { id: d.id, label: d.label, total, done, ok };
    });
  }
  function coverage() {
    const e = ex(); let seen = 0, done = 0, ok = 0;
    QUESTIONS.forEach((q) => {
      if (e.seen[q.id] || state.practiceSubmitted[q.id]) seen++;
      if (state.practiceSubmitted[q.id]) { done++; if (isCorrect(q, state.practiceAnswers[q.id])) ok++; }
    });
    return { seen, total: QUESTIONS.length, acc: done ? Math.round((ok / done) * 100) : null };
  }
  function searchMatch(q, kw) {
    const s = [q.stem, q.stemEn, q.stemZh, q.pdfQuestionNum, q.id].concat((q.options || []).map((o) => [o.text, o.textEn, o.textZh].join(" "))).join(" ").toLowerCase();
    return kw.toLowerCase().split(/\s+/).filter(Boolean).every((w) => s.indexOf(w) >= 0);
  }
  // Report-issue sink: local now; replace body with a fetch() to a server later.
  function reportSink(rec) { const e = ex(); e.reports[rec.qid] = rec; saveEx(); }
  function copyText(txt) {
    try { if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(txt); return true; } } catch (e) {}
    try { const ta = document.createElement("textarea"); ta.value = txt; ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); const r = document.execCommand("copy"); ta.remove(); return r; } catch (e) { return false; }
  }
  function reportText(recs) {
    return recs.map((r) => "【题库报错】" + r.exam + " 第" + r.num + "题 (" + r.qid + ")：" + r.msg + " [" + r.ts + "]").join("\n");
  }
  function reportIssue(q) {
    const msg = prompt(L("请描述问题（题干/选项/答案/翻译）：", "Describe the issue (stem/options/answer/translation):"));
    if (!msg) return;
    const rec = { qid: q.id, exam: currentExamId, num: q.pdfQuestionNum || q.id, msg: msg.slice(0, 500), ts: dayStr(new Date()) + " " + new Date().toTimeString().slice(0, 5) };
    reportSink(rec);
    const txt = reportText([rec]);
    alert((copyText(txt) ? L("已保存并复制，请发给 FXS-张腾：\n\n", "Saved & copied. Please send to FXS-张腾:\n\n") : L("已保存，请复制以下内容发给 FXS-张腾：\n\n", "Saved. Copy this and send to FXS-张腾:\n\n")) + txt);
  }
  function renderQExtras(q) {
    let box = $("#q-extras");
    const body = $("#practice-body");
    if (!body) return;
    if (!box) { box = document.createElement("div"); box.id = "q-extras"; box.className = "q-extras"; body.insertAdjacentElement("afterend", box); }
    if (!q) { box.innerHTML = ""; return; }
    const e = ex(); const fav = !!e.favs[q.id];
    let hint = "";
    if (state.wrongIds[q.id]) hint = '<span class="wb-hint">' + escapeHtml(L("错题本：再连续答对 " + (2 - (e.ws[q.id] || 0)) + " 次移出", "Wrong book: " + (2 - (e.ws[q.id] || 0)) + " more correct in a row to clear")) + "</span>";
    box.innerHTML =
      '<div class="qx-row"><button type="button" class="btn btn-sm' + (fav ? " active" : "") + '" data-qx="fav">' + (fav ? "★ " : "☆ ") + escapeHtml(L("收藏", "Favourite")) + "</button>" +
      (state.practiceSubmitted[q.id] ? '<button type="button" class="btn btn-sm" data-qx="retry">↺ ' + escapeHtml(L("重做", "Retry")) + "</button>" : "") +
      '<button type="button" class="btn btn-sm" data-qx="report">⚑ ' + escapeHtml(L("报错", "Report")) + (e.reports[q.id] ? " ✓" : "") + "</button>" + hint + "</div>" +
      '<details class="qx-note"' + (e.notes[q.id] ? " open" : "") + "><summary>📝 " + escapeHtml(L("我的笔记", "My notes")) + (e.notes[q.id] ? " •" : "") + '</summary><textarea id="qx-note-text" rows="3" placeholder="' + escapeHtml(L("仅保存在本机", "Saved on this device only")) + '">' + escapeHtml(e.notes[q.id] || "") + "</textarea></details>";
    box.onclick = (ev) => {
      const b = ev.target.closest("[data-qx]"); if (!b) return;
      const k = b.getAttribute("data-qx");
      if (k === "fav") { if (e.favs[q.id]) delete e.favs[q.id]; else e.favs[q.id] = 1; saveEx(); renderQExtras(q); }
      else if (k === "retry") { delete state.practiceAnswers[q.id]; delete state.practiceSubmitted[q.id]; saveProgress(); renderPractice(); }
      else if (k === "report") { reportIssue(q); renderQExtras(q); }
    };
    const ta = $("#qx-note-text");
    if (ta) ta.addEventListener("input", () => { const v = ta.value.trim(); if (v) e.notes[q.id] = ta.value.slice(0, 2000); else delete e.notes[q.id]; saveEx(); });
  }
  function recordMockScore(r) {
    const e = ex();
    e.scores.push({ ts: dayStr(new Date()), s: r.score1000, c: r.correct, n: r.total });
    if (e.scores.length > 50) e.scores = e.scores.slice(-50);
    saveEx();
  }
  function scoreChart() {
    const sc = ex().scores.slice(-12);
    if (!sc.length) return '<p class="muted small">' + escapeHtml(L("暂无模考记录", "No mock exams yet")) + "</p>";
    const W = 300, H = 110, lo = SCORE_MIN, hi = 1000;
    const y = (v) => H - 10 - ((Math.min(hi, Math.max(lo, v)) - lo) / (hi - lo || 1)) * (H - 20);
    const x = (i) => sc.length === 1 ? W / 2 : 15 + (i * (W - 30)) / (sc.length - 1);
    const pts = sc.map((s, i) => x(i).toFixed(1) + "," + y(s.s).toFixed(1)).join(" ");
    let svg = '<svg class="score-chart" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="mock scores">';
    svg += '<line x1="0" x2="' + W + '" y1="' + y(PASS_SCORE) + '" y2="' + y(PASS_SCORE) + '" class="pass-line"/><text x="2" y="' + (y(PASS_SCORE) - 3) + '" class="pass-txt">' + PASS_SCORE + "</text>";
    svg += '<polyline points="' + pts + '" class="score-line"/>';
    sc.forEach((s, i) => { svg += '<circle cx="' + x(i) + '" cy="' + y(s.s) + '" r="3.5" class="' + (s.s >= PASS_SCORE ? "pt-pass" : "pt-fail") + '"><title>' + s.ts + " " + s.s + "</title></circle>"; });
    return svg + "</svg>";
  }
  function renderHomeExtras() {
    let box = $("#home-extras");
    if (!box) { const st = $("#home-stats"); if (!st) return; box = document.createElement("div"); box.id = "home-extras"; box.className = "home-extras"; st.insertAdjacentElement("afterend", box); }
    const e = ex(); const tc = todayCount(); const cov = coverage();
    let h = '<div class="hx-card"><div class="hx-row"><b>' + escapeHtml(L("今日目标", "Today")) + "</b> " + tc + "/" + e.goal +
      ' <button type="button" class="btn btn-sm" data-hx="goal">' + escapeHtml(L("改目标", "Set goal")) + "</button>" +
      ' <span class="hx-streak">🔥 ' + escapeHtml(L("连续 " + streakDays() + " 天", streakDays() + "-day streak")) + "</span></div>" +
      '<span class="prog-bar"><i style="width:' + Math.min(100, Math.round((tc / e.goal) * 100)) + '%"></i></span>';
    h += '<div class="hx-row"><label>' + escapeHtml(L("考试日期", "Exam date")) + ' <input type="date" id="hx-date" value="' + escapeHtml(e.examDate || "") + '"></label>';
    const remainQ = Math.max(0, cov.total - cov.seen); const a7 = avg7();
    if (e.examDate) {
      const t0 = new Date(); t0.setHours(0, 0, 0, 0);
      const days = Math.round((new Date(e.examDate + "T00:00:00") - t0) / 86400000);
      if (days >= 0) {
        const need = days > 0 ? Math.ceil(remainQ / days) : remainQ;
        const ok = remainQ === 0 || a7 >= need;
        h += ' <span>' + escapeHtml(days === 0 ? L("今天考试，加油！", "Exam is today, good luck!") : L("剩 " + days + " 天", days + " days left")) + "</span></div>";
        h += '<div class="hx-row small">' + escapeHtml(L("需每天 " + need + " 题 · 近7天均 " + a7.toFixed(1) + " 题", "Need " + need + "/day · 7-day avg " + a7.toFixed(1))) +
          ' <span class="hx-badge ' + (ok ? "ok" : "behind") + '">' + escapeHtml(ok ? L("进度达标", "On track") : L("进度落后", "Behind")) + "</span></div>";
      } else h += ' <span class="muted">' + escapeHtml(L("考试日期已过", "Exam date passed")) + "</span></div>";
    } else h += "</div>";
    h += '<div class="hx-row small">' + escapeHtml(L("覆盖 " + cov.seen + "/" + cov.total + (cov.acc != null ? " · 正确率 " + cov.acc + "%" : ""), "Covered " + cov.seen + "/" + cov.total + (cov.acc != null ? " · accuracy " + cov.acc + "%" : ""))) + "</div>";
    const last = e.scores.slice(-3).map((s) => s.s);
    h += '<div class="hx-row small">' + escapeHtml(L("最近模考", "Recent mocks")) + "：" + (last.length ? last.map((s) => '<span class="' + (s >= PASS_SCORE ? "ok" : "bad") + '">' + s + "</span>").join(" · ") : "—") + " " + escapeHtml(L("（及格 " + PASS_SCORE + "）", "(pass " + PASS_SCORE + ")")) + "</div>";
    h += scoreChart() + "</div>";
    h += '<div class="hx-card"><b>' + escapeHtml(L("分领域正确率（点击练习）", "Accuracy by domain (tap to practise)")) + '</b><div class="dom-table">';
    domStats().forEach((d) => {
      const acc = d.done ? Math.round((d.ok / d.done) * 100) : null;
      h += '<button type="button" class="dom-row" data-hx="dom" data-d="' + d.id + '"><span class="dl">' + escapeHtml(d.label) + '</span><span class="dn">' + d.done + "/" + d.total + '</span><span class="da ' + (acc == null ? "" : acc >= 75 ? "ok" : "bad") + '">' + (acc == null ? "—" : acc + "%") + "</span></button>";
    });
    h += "</div></div>";
    const nf = Object.keys(e.favs).filter((id) => QUESTIONS.some((q) => q.id === id)).length;
    const nr = Object.keys(e.reports).length;
    h += '<div class="hx-card hx-row"><button type="button" class="btn btn-sm" data-hx="favs"' + (nf ? "" : " disabled") + ">★ " + escapeHtml(L("收藏 ", "Favourites ")) + nf + "</button>" +
      '<button type="button" class="btn btn-sm" data-hx="search">🔍 ' + escapeHtml(L("搜索题目", "Search")) + "</button>" +
      (nr ? '<button type="button" class="btn btn-sm" data-hx="reports">⚑ ' + escapeHtml(L("复制报错 ", "Copy reports ")) + nr + "</button>" : "") + "</div>";
    box.innerHTML = h;
    box.onclick = (ev) => {
      const b = ev.target.closest("[data-hx]"); if (!b) return;
      const k = b.getAttribute("data-hx");
      if (k === "goal") { const v = parseInt(prompt(L("每日目标题数", "Daily goal (questions)"), String(e.goal)), 10); if (v > 0 && v < 1000) { e.goal = v; saveEx(); renderHomeExtras(); } }
      else if (k === "dom") startPractice(b.getAttribute("data-d"));
      else if (k === "favs") startPractice("favs");
      else if (k === "search") promptSearch();
      else if (k === "reports") { const txt = reportText(Object.values(e.reports)); alert((copyText(txt) ? L("已复制：\n\n", "Copied:\n\n") : "") + txt); }
    };
    const di = $("#hx-date");
    if (di) di.addEventListener("change", () => { if (di.value) e.examDate = di.value; else delete e.examDate; saveEx(); renderHomeExtras(); });
  }
  function promptSearch() {
    const kw = prompt(L("输入关键词（空格分隔，或题号）", "Keywords (space separated, or question no.)"), state.searchQ || "");
    if (kw == null) return;
    state.searchQ = kw.trim();
    if (!state.searchQ) return;
    const n = QUESTIONS.filter((q) => searchMatch(q, state.searchQ)).length;
    if (!n) { alert(L("没有匹配的题目", "No matching questions")); return; }
    rebuildPracticeFilter();
    startPractice("search");
  }

  // Post-submit option states: ok-sel / bad-sel / missed / dim (or ans when only revealed)
  function optGrade(q, opt, isSel, graded) {
    const isAns = (q.answer || []).indexOf(opt.id) >= 0;
    const tg = (c, zh, en) => '<span class="otag ' + c + '">' + escapeHtml(L(zh, en)) + "</span>";
    if (!graded) return isAns ? { cls: " correct st-ans", tag: tg("t-ok", "✓ 正确答案", "✓ Answer") } : { cls: " st-dim", tag: "" };
    if (isAns && isSel) return { cls: " correct st-ok", tag: tg("t-ok", "✓ 你的选择", "✓ Your pick") };
    if (isSel) return { cls: " wrong st-bad", tag: tg("t-bad", "✗ 你的选择", "✗ Your pick") };
    if (isAns) return { cls: " st-miss", tag: tg("t-miss", "漏选", "Missed") };
    return { cls: " st-dim", tag: "" };
  }
  function answerSummary(q, sel, graded) {
    const a = (q.answer || []).join(" ");
    const y = (sel || []).slice().sort().join(" ") || "—";
    const ok = graded && isCorrect(q, sel);
    return '<p role="status" class="ans-summary' + (graded ? (ok ? " ok" : " bad") : "") + '">' + escapeHtml(L("正确答案", "Answer") + (state.lang === "en" ? ": " : "：")) + "<b>" + escapeHtml(a) + "</b>" +
      (graded ? " ｜ " + escapeHtml(L("你的选择", "Your pick") + (state.lang === "en" ? ": " : "：")) + "<b>" + escapeHtml(y) + "</b> " + (ok ? "✓" : "✗") : "") + "</p>";
  }
  function questionsByFilter(filter) {
    if (filter === "favs") return QUESTIONS.filter((q) => !!ex().favs[q.id]);
    if (filter === "search") return state.searchQ ? QUESTIONS.filter((q) => searchMatch(q, state.searchQ)) : [];
    if (/^dd\d$/.test(filter || "")) return QUESTIONS.filter((q) => ddOf(q) === filter);
    if (filter === "flagged") {
      return QUESTIONS.filter((q) => !!state.practiceFlags[q.id]);
    }
    if (filter === "wrong") {
      const ws = ex().ws;
      return QUESTIONS.filter((q) => !!state.wrongIds[q.id]).sort((a, b) => (ws[a.id] || 0) - (ws[b.id] || 0));
    }
    if (filter === "unanswered") {
      return QUESTIONS.filter((q) => !state.practiceSubmitted[q.id]);
    }
    if (filter === "all" || !filter) return QUESTIONS.slice();
    return byDomain(filter);
  }

  function saveExamLast() {
    try {
      if (!state.examResult) return;
      const r = state.examResult;
      localStorage.setItem(
        storageExamLastKey(),
        JSON.stringify({
          result: {
            correct: r.correct,
            total: r.total,
            pct: r.pct,
            score1000: r.score1000,
            pass: r.pass,
            byDom: r.byDom,
            wrongIds: (r.wrongList || []).map((q) => q.id),
            auto: !!r.auto,
          },
          questionIds: state.examQuestions.map((q) => q.id),
          answers: state.examAnswers,
          flags: state.examFlags,
        })
      );
      const exam = currentExam();
      if (exam && exam.id === "ai103" && exam.legacyExamLastKey) {
        try { localStorage.removeItem(exam.legacyExamLastKey); } catch (e2) {}
      }
    } catch (e) {
      /* ignore */
    }
  }

  function loadExamLast() {
    try {
      const raw = readExamLastRaw();
      if (!raw) return false;
      const data = JSON.parse(raw);
      const byId = {};
      QUESTIONS.forEach((q) => (byId[q.id] = q));
      const qs = (data.questionIds || []).map((id) => byId[id]).filter(Boolean);
      if (!qs.length || !data.result) return false;
      state.examQuestions = qs;
      state.examAnswers = data.answers || {};
      state.examFlags = data.flags || {};
      state.examSubmitted = true;
      state.revealed = true;
      state.examTimerId = null;
      state.examSecondsLeft = 0;
      state.examResult = {
        correct: data.result.correct,
        total: data.result.total,
        pct: data.result.pct,
        score1000: data.result.score1000,
        pass: data.result.pass,
        byDom: data.result.byDom || {},
        wrongList: (data.result.wrongIds || []).map((id) => byId[id]).filter(Boolean),
        auto: !!data.result.auto,
      };
      return true;
    } catch (e) {
      return false;
    }
  }

  function hasExamLast() {
    try {
      return !!readExamLastRaw();
    } catch (e) {
      return false;
    }
  }

  /** Read last exam summary without mutating in-progress exam state. */
  function peekExamLast() {
    try {
      const raw = readExamLastRaw();
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (!data || !data.result) return null;
      return {
        score1000: data.result.score1000,
        wrongCount: (data.result.wrongIds || []).length,
      };
    } catch (e) {
      return null;
    }
  }

  function openLastExamResult() {
    // Always reload from storage so we don't clobber with a partial in-memory state
    if (!loadExamLast()) return;
    showView("result");
    renderResult();
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function shuffleOptions(q) {
    if (q && (q.type === "hotspot" || q.type === "drag") && q.boxes && q.boxes.length) return q;
    const opts = shuffle(q.options || []);
    return Object.assign({}, q, { options: opts });
  }


  function isBoxQ(q) {
    return q && Array.isArray(q.boxes) && q.boxes.length > 0 && (q.type === "hotspot" || q.type === "drag" || q.control === "yn" || q.control === "select" || q.control === "drag");
  }
  /** Back-compat alias */
  function isDropdownQ(q) {
    return isBoxQ(q);
  }

  function isYNChoice(c) {
    const yn = { yes: 1, no: 1, "是": 1, "否": 1, y: 1, n: 1 };
    if (typeof c === "string") return !!yn[c.toLowerCase()] || !!yn[c];
    const en = String(c.en || c.key || "").toLowerCase().trim();
    const zh = String(c.zh || "").trim();
    const k = String(c.key || "").toLowerCase().trim();
    return !!(yn[en] || yn[zh] || yn[k]);
  }

  function isYNBox(b) {
    const ch = b.choices || [];
    return ch.length > 0 && ch.every(isYNChoice);
  }

  /** PDF-faithful control: yn | select | drag | single | multi */
  function getControl(q) {
    if (!q) return "single";
    if (q.control === "yn" || q.control === "select" || q.control === "drag") return q.control;
    if (q.type === "drag") return "drag";
    if (q.type === "hotspot" && isBoxQ(q)) {
      if (q.boxes.every(isYNBox)) return "yn";
      return "select";
    }
    // AI-103 uses type=multi; DOP-C02 uses type=multi for multi-letter answers
    if (q.type === "multi") return "multi";
    // DOP-C02 type=choice → single-select (same as AI-103 type=single)
    return "single";
  }

  function typeBadgeLabel(q, pack) {
    const c = getControl(q);
    if (c === "yn") return pack.typeYn;
    if (c === "select") return pack.typeHotspot;
    if (c === "drag") return pack.typeDrag;
    if (c === "multi") return pack.typeMulti;
    return pack.typeSingle;
  }

  function pickHintFor(q, pack) {
    const c = getControl(q);
    if (c === "yn") return pack.pickYn;
    if (c === "drag") return pack.pickDrag;
    if (c === "select") return pack.pickBoxes;
    if (c === "multi") return pack.pickMulti;
    return "";
  }

  function dragPoolChoices(q) {
    const byKey = {};
    const order = [];
    (q.boxes || []).forEach((b) => {
      (b.choices || []).forEach((c) => {
        const k = choiceKey(c);
        if (!byKey[k]) {
          byKey[k] = c;
          order.push(k);
        }
      });
    });
    // stable shuffle via persisted order
    if (!state.boxChoiceOrder[q.id]) state.boxChoiceOrder[q.id] = {};
    if (!state.boxChoiceOrder[q.id].__pool) {
      state.boxChoiceOrder[q.id].__pool = shuffle(order);
    }
    const keys = state.boxChoiceOrder[q.id].__pool.filter((k) => byKey[k]);
    // append any new keys not in saved order
    order.forEach((k) => {
      if (keys.indexOf(k) < 0) keys.push(k);
    });
    return keys.map((k) => byKey[k]);
  }

  function getBoxOrder(q) {
    // Persist shuffled KEY order so language switch does not reshuffle
    if (!state.boxChoiceOrder[q.id]) {
      const map = {};
      (q.boxes || []).forEach((b) => {
        const keys = (b.choices || []).map(choiceKey);
        map[b.id] = isYNBox(b) ? keys : shuffle(keys);
      });
      state.boxChoiceOrder[q.id] = map;
    }
    return state.boxChoiceOrder[q.id];
  }
  function orderedChoices(b, orderKeys) {
    const byKey = {};
    (b.choices || []).forEach((c) => {
      byKey[choiceKey(c)] = c;
    });
    const keys = orderKeys || (b.choices || []).map(choiceKey);
    return keys.map((k) => byKey[k]).filter(Boolean);
  }

  function emptyBoxAnswers(q) {
    const o = {};
    (q.boxes || []).forEach((b) => {
      o[b.id] = "";
    });
    return o;
  }

  function normalizeSelection(q, selected) {
    if (isDropdownQ(q)) {
      if (!selected || Array.isArray(selected)) return emptyBoxAnswers(q);
      return selected;
    }
    return selected || [];
  }

  function allBoxesSelected(q, selected) {
    if (!isDropdownQ(q)) return (selected || []).length > 0;
    const sel = normalizeSelection(q, selected);
    return q.boxes.every((b) => sel[b.id] && String(sel[b.id]).trim() !== "");
  }

  function formatCorrectAnswer(q) {
    const sep = "\n";
    if (isDropdownQ(q)) {
      return q.boxes
        .map((b) => {
          const ch = (b.choices || []).find((c) => choiceKey(c) === b.answer);
          const ansTxt = ch ? choiceText(ch) : b.answer;
          return "• " + inl(boxLabel(b)) + " → " + inl(ansTxt);
        })
        .join(sep);
    }
    return (q.answer || []).map((id) => optLine(q, id)).join(sep);
  }

  function formatUserAnswer(q, selected) {
    const sep = "\n";
    const pack = Object.assign({}, t());
    if (state.lang === "both") {
      pack.unanswered = "（未选 / none）";
      pack.notAnswered = "未作答 / No answer";
    }
    if (isDropdownQ(q)) {
      const sel = normalizeSelection(q, selected);
      return q.boxes
        .map((b) => {
          const key = sel[b.id];
          if (!key) return "• " + inl(boxLabel(b)) + " → " + pack.unanswered;
          const ch = (b.choices || []).find((c) => choiceKey(c) === key);
          return "• " + inl(boxLabel(b)) + " → " + inl(ch ? choiceText(ch) : key);
        })
        .join(sep);
    }
    const sel = selected || [];
    return sel.length ? sel.map((id) => optLine(q, id)).join(sep) : pack.notAnswered;
  }


  function weightedSample(n) {
    if (!DOMAIN_ORDER.length) {
      return shuffle(QUESTIONS.slice())
        .slice(0, Math.min(n, QUESTIONS.length))
        .map(shuffleOptions);
    }
    const pools = {};
    DOMAIN_ORDER.forEach((d) => {
      pools[d] = shuffle(byDomain(d));
    });
    const targets = {};
    let assigned = 0;
    DOMAIN_ORDER.forEach((d, i) => {
      if (i === DOMAIN_ORDER.length - 1) {
        targets[d] = Math.max(0, n - assigned);
      } else {
        targets[d] = Math.round(n * DOMAIN_WEIGHTS[d]);
        assigned += targets[d];
      }
    });
    // Fix overshoot
    let total = DOMAIN_ORDER.reduce((s, d) => s + targets[d], 0);
    while (total > n) {
      const d = DOMAIN_ORDER.find((x) => targets[x] > 0);
      if (!d) break;
      targets[d]--;
      total--;
    }
    while (total < n) {
      const d = DOMAIN_ORDER.find((x) => pools[x].length > targets[x]) || DOMAIN_ORDER[0];
      targets[d]++;
      total++;
    }

    let picked = [];
    DOMAIN_ORDER.forEach((d) => {
      const take = Math.min(targets[d], pools[d].length);
      picked = picked.concat(pools[d].slice(0, take));
    });
    // Fill if short
    if (picked.length < n) {
      const have = new Set(picked.map((q) => q.id));
      const rest = shuffle(QUESTIONS.filter((q) => !have.has(q.id)));
      picked = picked.concat(rest.slice(0, n - picked.length));
    }
    return shuffle(picked).map(shuffleOptions);
  }

  /** Multi-judgment (多判断题): non-case hotspot/yn with 2+ Yes/No statement boxes. */
  function isMultiJudgment(q) {
    if (!q || q.caseStudy) return false;
    if (!(Array.isArray(q.boxes) && q.boxes.length >= 2)) return false;
    if (q.control === "yn") return true;
    return getControl(q) === "yn";
  }

  /** Pick one caseStudyId block targeting 7 sub-questions (prefer exact 7). */
  function pickCaseBlock(targetCount) {
    const want = targetCount == null ? 7 : targetCount;
    const groups = {};
    QUESTIONS.forEach((q) => {
      if (!q.caseStudy) return;
      const id = q.caseStudyId || "_none";
      if (!groups[id]) groups[id] = [];
      groups[id].push(q);
    });
    const ids = shuffle(Object.keys(groups));
    ids.sort((a, b) => {
      const da = Math.abs(groups[a].length - want);
      const db = Math.abs(groups[b].length - want);
      if (da !== db) return da - db;
      // Prefer exact match, then prefer >= want over shortfall
      const ae = groups[a].length === want ? 0 : 1;
      const be = groups[b].length === want ? 0 : 1;
      if (ae !== be) return ae - be;
      const ag = groups[a].length >= want ? 0 : 1;
      const bg = groups[b].length >= want ? 0 : 1;
      if (ag !== bg) return ag - bg;
      return 0;
    });
    if (!ids.length) return [];
    let qs = groups[ids[0]].slice();
    // Keep PDF / bank order within the case, then trim if longer than want
    if (qs.length > want) qs = qs.slice(0, want);
    return qs;
  }

  /**
   * Real-exam (58): 48 ordinary → 3 multi-judgment → 7 from one case block.
   * Ordinary = non-case, non-multi-judgment (single/multi/hotspot-select/drag).
   * Segments are internally shuffled; overall order is fixed 48+3+7.
   */
  function sampleRealExam58() {
    const caseQs = pickCaseBlock(7);
    const used = new Set(caseQs.map((q) => q.id));

    const mjPool = shuffle(QUESTIONS.filter((q) => isMultiJudgment(q) && !used.has(q.id)));
    const mj = mjPool.slice(0, 3);
    mj.forEach((q) => used.add(q.id));

    const ordinaryAll = QUESTIONS.filter(
      (q) => !q.caseStudy && !isMultiJudgment(q) && !used.has(q.id)
    );
    // Domain-weight among ordinary only, then shuffle that segment
    let ordinary = weightedSampleFromPool(ordinaryAll, 48);
    ordinary.forEach((q) => used.add(q.id));

    // Fill shortfalls from remaining bank (prefer same category)
    function fill(need, preferFn) {
      if (need <= 0) return [];
      const rest = shuffle(QUESTIONS.filter((q) => !used.has(q.id) && preferFn(q)));
      const take = rest.slice(0, need);
      take.forEach((q) => used.add(q.id));
      if (take.length < need) {
        const more = shuffle(QUESTIONS.filter((q) => !used.has(q.id))).slice(0, need - take.length);
        more.forEach((q) => used.add(q.id));
        return take.concat(more);
      }
      return take;
    }
    if (ordinary.length < 48) {
      ordinary = ordinary.concat(
        fill(48 - ordinary.length, (q) => !q.caseStudy && !isMultiJudgment(q))
      );
    }
    let mjFinal = mj;
    if (mjFinal.length < 3) {
      mjFinal = mjFinal.concat(
        fill(3 - mjFinal.length, (q) => isMultiJudgment(q) || (getControl(q) === "yn" && !q.caseStudy))
      );
    }
    let caseFinal = caseQs;
    if (caseFinal.length < 7) {
      caseFinal = caseFinal.concat(
        fill(7 - caseFinal.length, (q) => !!q.caseStudy)
      );
    }

    ordinary = shuffle(ordinary);
    mjFinal = shuffle(mjFinal);
    // Case: keep bank order (already trimmed); do not reshuffle across cases
    return ordinary
      .concat(mjFinal)
      .concat(caseFinal)
      .map(shuffleOptions);
  }

  /** Domain-weighted sample drawn only from a given pool (may return fewer than n). */
  function weightedSampleFromPool(pool, n) {
    if (!pool.length || n <= 0) return [];
    const byDom = {};
    DOMAIN_ORDER.forEach((d) => {
      byDom[d] = [];
    });
    const other = [];
    pool.forEach((q) => {
      if (byDom[q.domain]) byDom[q.domain].push(q);
      else other.push(q);
    });
    DOMAIN_ORDER.forEach((d) => {
      byDom[d] = shuffle(byDom[d]);
    });
    const targets = {};
    let assigned = 0;
    DOMAIN_ORDER.forEach((d, i) => {
      if (i === DOMAIN_ORDER.length - 1) {
        targets[d] = Math.max(0, n - assigned);
      } else {
        targets[d] = Math.round(n * DOMAIN_WEIGHTS[d]);
        assigned += targets[d];
      }
    });
    let total = DOMAIN_ORDER.reduce((s, d) => s + targets[d], 0);
    while (total > n) {
      const d = DOMAIN_ORDER.find((x) => targets[x] > 0);
      if (!d) break;
      targets[d]--;
      total--;
    }
    while (total < n) {
      const d =
        DOMAIN_ORDER.find((x) => byDom[x].length > targets[x]) || DOMAIN_ORDER[0];
      targets[d]++;
      total++;
    }
    let picked = [];
    DOMAIN_ORDER.forEach((d) => {
      const take = Math.min(targets[d], byDom[d].length);
      picked = picked.concat(byDom[d].slice(0, take));
    });
    if (picked.length < n) {
      const have = new Set(picked.map((q) => q.id));
      const rest = shuffle(pool.filter((q) => !have.has(q.id)));
      picked = picked.concat(rest.slice(0, n - picked.length));
    }
    return picked.slice(0, n);
  }

  function sampleExamQuestions(n) {
    const exam = currentExam();
    if (exam && exam.specialExam58 && n === 58) return sampleRealExam58();
    if (exam && exam.statMode === "domains" && DOMAIN_ORDER.length) {
      return weightedSample(n);
    }
    // DOP-C02 and other banks: simple random sample (no AI-103 case/58 structure)
    return shuffle(QUESTIONS.slice())
      .slice(0, Math.min(n, QUESTIONS.length))
      .map(shuffleOptions);
  }

  /** Tolerant key compare: trims, collapses whitespace/NBSP, unifies smart quotes */
  function normKey(v) {
    return String(v == null ? "" : v)
      .replace(/[\u00a0\u2000-\u200b\u3000]/g, " ")
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201c\u201d]/g, '"')
      .replace(/\s+/g, " ")
      .trim();
  }
  function sameKey(a, b) {
    const x = normKey(a);
    return x !== "" && x === normKey(b);
  }

  function arraysEqualAsSet(a, b) {
    if (!a || !b || a.length !== b.length) return false;
    const sa = a.slice().sort().join(",");
    const sb = b.slice().sort().join(",");
    return sa === sb;
  }

  function isCorrect(q, selected) {
    if (isDropdownQ(q)) {
      const sel = normalizeSelection(q, selected);
      return q.boxes.every((b) => sameKey(sel[b.id], b.answer));
    }
    return arraysEqualAsSet(selected || [], q.answer);
  }

  /* ---- Home ---- */
  function renderHome() {
    rebuildHomeStats();
    applyChrome();
    updateHomeReviewButtons();
    updateExamSwitcherUI();
    showView("home");
  }

  function rebuildHomeStats() {
    const wrap = $("#home-stats");
    if (!wrap) return;
    const exam = currentExam();
    const pack = t();
    const parts = [];
    parts.push(
      '<div class="stat"><div class="n" id="stat-total">' +
        QUESTIONS.length +
        '</div><div class="l">' +
        escapeHtml(pack.statAll) +
        "</div></div>"
    );
    if (exam && exam.statMode === "domains" && DOMAIN_ORDER.length) {
      const counts = domainCounts();
      const labels = state.lang === "en" ? (exam.domainLabelsEn || {}) : (exam.domainLabelsZh || pack.domain || {});
      // pack.domain for zh chrome; for both use zh labels
      const zhLabels = (exam.domainLabelsZh || pack.domain || {});
      const enLabels = (exam.domainLabelsEn || {});
      DOMAIN_ORDER.forEach((d) => {
        let lab = zhLabels[d] || d;
        if (state.lang === "en") lab = enLabels[d] || lab;
        else if (state.lang === "both" && enLabels[d] && enLabels[d] !== lab) lab = lab; // keep zh short on cards
        // Prefer short I18N labels when available
        if (pack.statPlan && d === "plan") lab = pack.statPlan;
        if (pack.statGenai && d === "genai") lab = pack.statGenai;
        if (pack.statVision && d === "vision") lab = pack.statVision;
        if (pack.statText && d === "text") lab = pack.statText;
        if (pack.statExtract && d === "extract") lab = pack.statExtract;
        parts.push(
          '<div class="stat"><div class="n" id="stat-' +
            d +
            '">' +
            (counts[d] || 0) +
            '</div><div class="l">' +
            escapeHtml(lab) +
            "</div></div>"
        );
      });
    } else {
      let choice = 0, multi = 0;
      QUESTIONS.forEach((q) => {
        if (getControl(q) === "multi") multi++;
        else choice++;
      });
      parts.push(
        '<div class="stat"><div class="n">' +
          choice +
          '</div><div class="l">' +
          escapeHtml(state.lang === "en" ? "Single / choice" : "单选") +
          "</div></div>"
      );
      parts.push(
        '<div class="stat"><div class="n">' +
          multi +
          '</div><div class="l">' +
          escapeHtml(state.lang === "en" ? "Multi-select" : "多选") +
          "</div></div>"
      );
    }
    wrap.innerHTML = parts.join("");
  }

  function unansLabel() {
    return state.lang === "en" ? "Unanswered" : state.lang === "both" ? "未作答 / Unanswered" : "未作答";
  }
  /* Per-exam practice progress line for the home card */
  function practiceStatsLine() {
    const total = QUESTIONS.length;
    let done = 0, wrong = 0;
    QUESTIONS.forEach((q) => {
      if (state.practiceSubmitted[q.id]) {
        done++;
        if (!isCorrect(q, state.practiceAnswers[q.id])) wrong++;
      }
    });
    const pct = total ? Math.round((done / total) * 100) : 0;
    const acc = done ? Math.round(((done - wrong) / done) * 100) : 0;
    if (state.lang === "en") return "Progress " + done + "/" + total + " (" + pct + "%)" + (done ? " · accuracy " + acc + "%" : "");
    return "进度 " + done + "/" + total + "（" + pct + "%）" + (done ? " · 正确率 " + acc + "%" : "");
  }

  function rebuildPracticeFilter() {
    const sel = $("#practice-filter");
    if (!sel) return;
    const pack = t();
    const exam = currentExam();
    const cur = sel.value;
    let html = "";
    html += '<option value="all">' + escapeHtml(pack.filterAll) + "</option>";
    html += '<option value="flagged">' + escapeHtml(pack.filterFlagged) + "</option>";
    html += '<option value="wrong">' + escapeHtml(pack.filterWrong) + "</option>";
    html += '<option value="unanswered">' + escapeHtml(unansLabel()) + "</option>";
    html += '<option value="favs">' + escapeHtml(L("★ 收藏", "★ Favourites")) + "</option>";
    if (state.searchQ) html += '<option value="search">' + escapeHtml(L("🔍 搜索：", "🔍 Search: ") + state.searchQ) + "</option>";
    void exam;
    domList().forEach((d) => {
      html += '<option value="' + d.id + '">' + escapeHtml(d.label) + "</option>";
    });
    sel.innerHTML = html;
    const ok = Array.from(sel.options).some((o) => o.value === cur);
    sel.value = ok ? cur : "all";
  }

  function rebuildExamConfigControls() {
    const exam = currentExam();
    const pack = t();
    const countSel = $("#exam-count");
    const minSel = $("#exam-minutes");
    if (countSel && exam) {
      const counts = exam.mockCounts || [30, 50, 75];
      const def = exam.mockDefaultCount || counts[0];
      countSel.innerHTML = counts
        .map((n) => {
          let label = n + (state.lang === "en" ? " questions" : " 题");
          if (exam.specialExam58 && n === 58) {
            label = state.lang === "en" ? "58 questions (default, real exam)" : "58 题（默认，真实考试）";
          } else if (n === def) {
            label += state.lang === "en" ? " (default)" : "（默认）";
          }
          return (
            '<option value="' +
            n +
            '"' +
            (n === def ? " selected" : "") +
            ">" +
            escapeHtml(label) +
            "</option>"
          );
        })
        .join("");
    }
    if (minSel && exam) {
      const mins = exam.mockMinutes || [60, 90, 120];
      const defM = exam.mockDefaultMinutes || mins[0];
      minSel.innerHTML = mins
        .map((m) => {
          let label = String(m);
          if (m === defM) label += state.lang === "en" ? " (default)" : "（默认）";
          return (
            '<option value="' +
            m +
            '"' +
            (m === defM ? " selected" : "") +
            ">" +
            escapeHtml(label) +
            "</option>"
          );
        })
        .join("");
    }
    const intro = $("#view-exam-config > p.muted");
    if (intro && exam) {
      intro.textContent = examIntroText(exam, pack);
    }
  }
  function examIntroText(exam, pack) {
      if (!exam || exam.specialExam58) return pack.examConfigIntro;
      {
        return (
          state.lang === "en"
            ? "Random sample from the current bank (default " +
              (exam.mockDefaultCount || 75) +
              " Q / " +
              (exam.mockDefaultMinutes || 180) +
              " min), like the real exam: flag for review, review page before submitting, scaled score " + (exam.scoreMin || 100) + "–1000, pass " + (exam.passScore || 750) + ". No feedback until you finish."
            : "从当前题库随机抽题（默认 " +
              (exam.mockDefaultCount || 75) +
              " 题 / " +
              (exam.mockDefaultMinutes || 180) +
              " 分钟），与真实考试一致：可标记复习，交卷前有检查页，标准分 " + (exam.scoreMin || 100) + "–1000，" + (exam.passScore || 750) + " 分及格。考试过程中不显示对错。");
      }
  }

  function updateExamSwitcherUI() {
    const wrap = $("#exam-switcher");
    if (!wrap) return;
    const api = examApi();
    if (!api) return;
    $$("#exam-switcher [data-exam-id]").forEach((btn) => {
      const id = btn.getAttribute("data-exam-id");
      btn.classList.toggle("active", id === currentExamId);
      btn.setAttribute("aria-pressed", id === currentExamId ? "true" : "false");
    });
    const icon = $(".brand-icon");
    if (icon) {
      const exam = currentExam();
      icon.textContent = exam ? (exam.shortLabel || "IT").replace(/-C02$/, "").slice(0, 6) : "IT";
    }
  }

  function updateHomeReviewButtons() {
    const pack = t();
    const nFlag = flaggedCount();
    const nWrong = wrongCount();
    const bf = $("#btn-go-flagged");
    if (bf) {
      bf.disabled = nFlag === 0;
      bf.classList.toggle("is-disabled", nFlag === 0);
      bf.innerHTML =
        pack.btnFlagged + '<span class="desc">' + pack.btnFlaggedDesc(nFlag) + "</span>";
    }
    const bw = $("#btn-go-wrong");
    if (bw) {
      bw.disabled = nWrong === 0;
      bw.classList.toggle("is-disabled", nWrong === 0);
      bw.innerHTML =
        pack.btnWrong + '<span class="desc">' + pack.btnWrongDesc(nWrong) + "</span>";
    }
    const bl = $("#btn-go-last-exam");
    if (bl) {
      // Prefer live submitted result when viewing home after an exam; else peek storage
      // (never loadExamLast here — that would clobber an in-progress exam).
      let score = null;
      let nMiss = 0;
      let has = false;
      if (state.examSubmitted && state.examResult && state.examResult.total) {
        has = true;
        score = state.examResult.score1000;
        nMiss = (state.examResult.wrongList || []).length;
      } else {
        const peek = peekExamLast();
        if (peek) {
          has = true;
          score = peek.score1000;
          nMiss = peek.wrongCount;
        }
      }
      bl.classList.toggle("hidden", !has);
      bl.disabled = !has;
      if (has) {
        bl.innerHTML =
          pack.btnLastExam +
          '<span class="desc">' +
          pack.btnLastExamDesc(score, nMiss) +
          "</span>";
      }
    }
  }

  function applyChrome() {
    const pack = t();
    const setTxt = (sel, val) => {
      const el = $(sel);
      if (el) el.textContent = val;
    };
    const setHtml = (sel, val) => {
      const el = $(sel);
      if (el) el.innerHTML = val;
    };
    const exam = currentExam();
    const examTitle = exam ? exam.title : "";
    const subCore =
      exam && state.lang === "en"
        ? exam.subtitleEn || exam.subtitleZh || ""
        : exam
          ? exam.subtitleZh || exam.subtitleEn || ""
          : pack.brandSub;
    const h1 =
      pack.brandTitle + (examTitle ? " · " + examTitle : "");
    setTxt(".brand h1", h1);
    setTxt(
      ".brand .sub",
      subCore +
        (QUESTIONS.length
          ? (state.lang === "en" ? " · " : " · ") + QUESTIONS.length + (state.lang === "en" ? " Q" : " 题")
          : "")
    );
    document.title = h1;
    setTxt("#view-home h2", pack.homeTitle);
    const intro = $("#view-home > p.muted");
    if (intro) {
      if (exam && exam.id === "dop-c02") {
        intro.textContent =
          state.lang === "en"
            ? "Bank from your DOP-C02 PDF; answers taken strictly from PDF Correct Answer. Unofficial practice only."
            : "题源来自你提供的 DOP-C02 PDF；答案严格取自 PDF Correct Answer。非官方真题，仅供备考练习。";
      } else {
        intro.textContent = pack.homeIntro;
      }
    }
    rebuildHomeStats();
    const bp = $("#btn-go-practice");
    if (bp) {
      bp.innerHTML = pack.btnPractice + '<span class="desc">' + pack.btnPracticeDesc + "</span>" +
        '<span class="desc prog-line">' + escapeHtml(practiceStatsLine()) + '</span><span class="prog-bar"><i style="width:' +
        (QUESTIONS.length ? Math.round((Object.keys(state.practiceSubmitted).filter((k) => state.practiceSubmitted[k]).length / QUESTIONS.length) * 100) : 0) + '%"></i></span>';
    }
    try { renderHomeExtras(); } catch (err) { console.error(err); }
    const be = $("#btn-go-exam");
    if (be) {
      be.innerHTML = pack.btnExam + '<span class="desc">' + pack.btnExamDesc.replace(/700/g, String(PASS_SCORE)) + "</span>";
    }
    const note = $("#view-home .note");
    if (note) note.textContent = PASS_SCORE === 700 ? pack.homeNote : pack.homeNote.replace(/约 700 \/ 1000|≈ 700 \/ 1000/, (state.lang === "en" ? "" : "") + PASS_SCORE + " / 1000 (" + SCORE_MIN + "–1000)").replace(/Microsoft/g, "AWS");
    setTxt("#btn-practice-back", pack.backHome);
    setTxt("#btn-practice-reset", pack.resetProgress);
    setTxt("#btn-practice-prev", pack.prev);
    setTxt("#btn-practice-next", pack.next);
    setTxt("#btn-practice-skip", pack.skip);
    setTxt("#btn-practice-submit", pack.submit);
    setTxt("#lbl-practice-showall span", pack.alwaysShow);
    setTxt("#practice-jump-pre", state.lang === "both" ? "跳到第 / Go to Q" : pack.jumpPre);
    setTxt("#practice-jump-suf", state.lang === "en" ? "" : I18N.zh.jumpSuf);
    setTxt("#btn-practice-jump", bi("jumpGo"));
    const jsel = $("#practice-jump-select");
    if (jsel) jsel.setAttribute("aria-label", bi("jumpPick"));
    const jin = $("#practice-jump-input");
    if (jin) jin.setAttribute("aria-label", bi("jumpPre"));
    const filtLab = $("#view-practice .toolbar label.muted");
    if (filtLab) {
      const sel = filtLab.querySelector("select");
      filtLab.childNodes[0].textContent = pack.filter + " ";
      if (sel) {
        Array.from(sel.options).forEach((opt) => {
          if (opt.value === "all") opt.textContent = pack.filterAll;
          else if (opt.value === "flagged") opt.textContent = pack.filterFlagged;
          else if (opt.value === "wrong") opt.textContent = pack.filterWrong;
          else if (opt.value === "unanswered") opt.textContent = unansLabel();
          else if (pack.domain[opt.value]) opt.textContent = pack.domain[opt.value];
        });
      }
    }
    updateHomeReviewButtons();
    const kbdP = $("#view-practice .kbd-hint");
    if (kbdP) kbdP.innerHTML = "<kbd>A</kbd>–<kbd>F</kbd> " + pack.kbdPractice + " · <kbd>←</kbd><kbd>→</kbd> " + escapeHtml(L("切题", "prev/next")) + " · <kbd>?</kbd> " + escapeHtml(L("帮助", "help"));
    setTxt("#view-exam-config h2", pack.examConfigTitle);
    const exIntro = $("#view-exam-config > p.muted");
    if (exIntro) exIntro.textContent = examIntroText(currentExam(), pack);
    const exLabs = $$("#view-exam-config .exam-config label > span");
    if (exLabs[0]) exLabs[0].textContent = pack.examCount;
    if (exLabs[1]) exLabs[1].textContent = pack.examMinutes;
    rebuildExamConfigControls();
    setTxt("#btn-exam-config-back", pack.back);
    setTxt("#btn-exam-start", pack.startExam);
    setTxt("#btn-exam-back", pack.leaveExam);
    setTxt("#btn-exam-prev", pack.prev);
    setTxt("#btn-exam-next", pack.next);
    setTxt("#btn-exam-submit", pack.handIn);
    setTxt("#btn-exam-to-result", pack.viewScore);
    const navHint = $("#view-exam .card .muted");
    if (navHint) navHint.textContent = pack.examNavHint;
    const kbdE = $("#view-exam .kbd-hint");
    if (kbdE) kbdE.innerHTML = "<kbd>1</kbd>–<kbd>6</kbd> " + pack.kbdExam;
    setTxt("#view-result h2", pack.resultTitle);
    const domH = $("#view-result h3");
    if (domH) domH.textContent = pack.domainScores;
    setTxt("#btn-result-review", pack.reviewQs);
    setTxt("#btn-result-retry", pack.retry);
    setTxt("#btn-result-home", state.lang === "en" ? "Home" : "回首页");
    const wrongH = $$("#view-result h2");
    if (wrongH[1]) wrongH[1].textContent = pack.wrongTitle;
    setTxt(".app-foot .foot-text", pack.foot);
    const authorTxt =
      state.lang === "en" ? "Author: FXS-张腾" : state.lang === "both" ? "作者 / Author：FXS-张腾" : "作者：FXS-张腾";
    setTxt(".brand .author", authorTxt);
    setTxt(".app-foot .foot-author", authorTxt);

    // lang toggle active state
    $$(".lang-toggle button").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === state.lang);
    });
  }

  function setLang(lang) {
    if (lang !== "zh" && lang !== "en" && lang !== "both") return;
    state.lang = lang;
    saveLang(lang);
    setJumpHint("");
    rebuildPracticeFilter();
    rebuildExamConfigControls();
    applyChrome();
    if (state.mode === "home") renderHome();
    else if (state.mode === "practice") renderPractice();
    else if (state.mode === "examConfig") applyChrome();
    else if (state.mode === "exam") renderExam();
    else if (state.mode === "result") renderResult();
  }



  function templateOf(q) {
    const zh = q.templateZh || q.template || "";
    const en = q.templateEn || q.template || "";
    if (state.lang === "zh") return zh || en;
    if (state.lang === "en") return en || zh;
    // both: one interactive template (prefer zh when they differ)
    if (zh && en && zh !== en) return zh;
    return zh || en;
  }

  function hasInlineTemplate(q) {
    return !!(q && (q.template || q.templateEn || q.templateZh));
  }

  function positionNoteOf(b) {
    return pickText(b.positionNoteZh || b.positionNote, b.positionNoteEn || b.positionNote);
  }

  function renderOneSelectHtml(q, b, selectedVal, submittedOrReview, selectIdPrefix, inline) {
    const order = getBoxOrder(q);
    const pack = t();
    const val = selectedVal || "";
    let cls = inline ? "box-select inline-select" : "box-select";
    if (submittedOrReview) {
      if (sameKey(val, b.answer)) cls += " is-correct";
      else cls += " is-wrong";
    }
    let html =
      '<select class="' +
      cls +
      '" id="' +
      selectIdPrefix +
      "-box-" +
      b.id +
      '" data-boxid="' +
      escapeHtml(b.id) +
      '"' +
      (submittedOrReview ? " disabled" : "") +
      ">";
    html += '<option value="">' + escapeHtml(pack.pleaseSelect) + "</option>";
    orderedChoices(b, order[b.id]).forEach((c) => {
      const key = choiceKey(c);
      const selectedAttr = val === key ? " selected" : "";
      html +=
        '<option value="' +
        escapeHtml(key) +
        '"' +
        selectedAttr +
        ">" +
        escapeHtml(choiceText(c)).replace(/\n/g, " / ") +
        "</option>";
    });
    html += "</select>";
    if (submittedOrReview) {
      const chAns = (b.choices || []).find((c) => choiceKey(c) === b.answer);
      const ansTxt = chAns ? choiceText(chAns) : b.answer;
      const ok = sameKey(val, b.answer);
      html +=
        '<span class="box-mark' +
        (inline ? " inline-mark" : "") +
        '">' +
        (ok ? okMark(ansTxt) : "✗ " + escapeHtml(caLabel()) + escapeHtml(inl(ansTxt))) +
        "</span>";
    }
    return html;
  }

  function renderInlineTemplateHtml(q, selected, submittedOrReview, selectIdPrefix) {
    const sel = normalizeSelection(q, selected);
    const pack = t();
    const tmpl = templateOf(q);
    const kind = q.templateKind || "code";
    const boxMap = {};
    (q.boxes || []).forEach((b) => {
      boxMap[b.id] = b;
    });
    // Split on {{id}} placeholders
    const parts = String(tmpl).split(/(\{\{[^{}]+\}\})/);
    let inner = "";
    parts.forEach((part) => {
      const m = part.match(/^\{\{([^{}]+)\}\}$/);
      if (m && boxMap[m[1]]) {
        const b = boxMap[m[1]];
        inner +=
          '<span class="inline-blank" data-boxid="' +
          escapeHtml(b.id) +
          '">' +
          renderOneSelectHtml(q, b, sel[b.id], submittedOrReview, selectIdPrefix, true) +
          "</span>";
      } else {
        inner += escapeHtml(part);
      }
    });
    let html = '<div class="answer-area inline-answer-area" id="' + selectIdPrefix + '-boxes">';
    html += '<div class="answer-area-title">' + escapeHtml(pack.answerArea) + "</div>";
    html +=
      '<div class="inline-template ' +
      (kind === "code" ? "is-code" : "is-prose") +
      '">' +
      inner +
      "</div>";
    // compact legend with position notes
    html += '<div class="blank-legend">';
    q.boxes.forEach((b, idx) => {
      const note = positionNoteOf(b);
      const tag =
        state.lang === "en"
          ? "[Box " + String(b.id).replace(/^box/i, "") + "]"
          : "【框" + String(b.id).replace(/^box/i, "") + "】";
      html +=
        '<div class="blank-legend-item"><span class="blank-tag">' +
        escapeHtml(tag) +
        "</span> " +
        escapeHtml(note || boxLabel(b) || "Box " + (idx + 1)) +
        "</div>";
    });
    html += "</div>";
    html += "</div>";
    return html;
  }

  function renderSelectBoxesHtml(q, selected, submittedOrReview, selectIdPrefix) {
    if (hasInlineTemplate(q)) {
      return renderInlineTemplateHtml(q, selected, submittedOrReview, selectIdPrefix);
    }
    const order = getBoxOrder(q);
    const sel = normalizeSelection(q, selected);
    const pack = t();
    let html = '<div class="answer-area" id="' + selectIdPrefix + '-boxes">';
    html += '<div class="answer-area-title">' + escapeHtml(pack.answerArea) + "</div>";
    q.boxes.forEach((b, idx) => {
      const val = sel[b.id] || "";
      let rowCls = "box-row";
      if (submittedOrReview) {
        if (sameKey(val, b.answer)) rowCls += " correct";
        else rowCls += " wrong";
      }
      html += '<div class="' + rowCls + '">';
      html += '<label class="box-label" for="' + selectIdPrefix + "-box-" + b.id + '">' + escapeHtml(boxLabel(b)).replace(/\n/g, "<br>") + "</label>";
      const note = positionNoteOf(b);
      if (note) {
        html +=
          '<div class="position-note">' +
          escapeHtml(state.lang === "en" ? "Blank at: " : "空位在：") +
          escapeHtml(note) +
          "</div>";
      } else {
        html +=
          '<div class="position-note">' +
          escapeHtml(state.lang === "en" ? "Blank " + (idx + 1) : "空位 " + (idx + 1)) +
          " · 【框" +
          escapeHtml(String(b.id)) +
          "】</div>";
      }
      html += renderOneSelectHtml(q, b, val, submittedOrReview, selectIdPrefix, false);
      html += "</div>";
    });
    html += "</div>";
    return html;
  }

  function renderYnBoxesHtml(q, selected, submittedOrReview, selectIdPrefix) {
    const sel = normalizeSelection(q, selected);
    const pack = t();
    let html = '<div class="answer-area yn-area" id="' + selectIdPrefix + '-boxes">';
    html += '<div class="answer-area-title">' + escapeHtml(pack.answerArea) + "</div>";
    q.boxes.forEach((b) => {
      const val = sel[b.id] || "";
      let rowCls = "box-row yn-row";
      if (submittedOrReview) {
        if (sameKey(val, b.answer)) rowCls += " correct";
        else rowCls += " wrong";
      }
      html += '<div class="' + rowCls + '">';
      html += '<div class="box-label">' + escapeHtml(boxLabel(b)).replace(/\n/g, "<br>") + "</div>";
      html += '<div class="yn-pair" role="group" aria-label="' + escapeHtml(boxLabel(b)) + '">';
      // Yes/No keeps the PDF column order (Yes, then No) — never shuffled
      orderedChoices(b, null).forEach((c) => {
        const key = choiceKey(c);
        let cls = "yn-btn";
        if (val === key) cls += " selected";
        if (submittedOrReview) {
          if (sameKey(key, b.answer)) cls += " is-answer";
          if (val === key && !sameKey(key, b.answer)) cls += " is-wrong";
        }
        html +=
          '<button type="button" class="' +
          cls +
          '" data-boxid="' +
          escapeHtml(b.id) +
          '" data-key="' +
          escapeHtml(key) +
          '"' +
          (submittedOrReview ? " disabled" : "") +
          ">" +
          escapeHtml(choiceText(c)).replace(/\n/g, " / ") +
          "</button>";
      });
      html += "</div>";
      if (submittedOrReview) {
        const chAns = (b.choices || []).find((c) => choiceKey(c) === b.answer);
        const ansTxt = chAns ? choiceText(chAns) : b.answer;
        html +=
          '<div class="box-mark">' +
          (sameKey(val, b.answer)
            ? okMark(ansTxt)
            : "✗ " + escapeHtml(caLabel()) + escapeHtml(inl(ansTxt))) +
          "</div>";
      }
      html += "</div>";
    });
    html += "</div>";
    return html;
  }

  function renderDragBoxesHtml(q, selected, submittedOrReview, selectIdPrefix) {
    const sel = normalizeSelection(q, selected);
    const pack = t();
    const pool = dragPoolChoices(q);
    let html = '<div class="answer-area drag-area" id="' + selectIdPrefix + '-boxes">';
    html += '<div class="answer-area-title">' + escapeHtml(pack.answerArea) + "</div>";
    html += '<div class="drag-section-label">' + escapeHtml(pack.dragPool) + "</div>";
    html += '<div class="drag-pool">';
    pool.forEach((c) => {
      const key = choiceKey(c);
      const used = q.boxes.some((b) => sel[b.id] === key);
      let cls = "drag-chip";
      if (used) cls += " used";
      html +=
        '<button type="button" class="' +
        cls +
        '" data-key="' +
        escapeHtml(key) +
        '"' +
        (submittedOrReview ? " disabled" : "") +
        ">" +
        escapeHtml(choiceText(c)).replace(/\n/g, " / ") +
        "</button>";
    });
    html += "</div>";
    html += '<div class="drag-section-label">' + escapeHtml(pack.dragSlots) + "</div>";
    html += '<div class="drag-slots">';
    q.boxes.forEach((b, idx) => {
      const val = sel[b.id] || "";
      let rowCls = "drag-slot box-row";
      if (submittedOrReview) {
        if (sameKey(val, b.answer)) rowCls += " correct";
        else rowCls += " wrong";
      }
      if (val) rowCls += " filled";
      html += '<div class="' + rowCls + '" data-boxid="' + escapeHtml(b.id) + '">';
      html += '<div class="slot-head"><span class="slot-index">' + (idx + 1) + "</span>";
      html += '<span class="box-label">' + escapeHtml(boxLabel(b)).replace(/\n/g, "<br>") + "</span></div>";
      if (val) {
        const ch = pool.find((c) => choiceKey(c) === val) || (b.choices || []).find((c) => choiceKey(c) === val);
        const txt = ch ? choiceText(ch) : val;
        html +=
          '<button type="button" class="slot-value filled" data-boxid="' +
          escapeHtml(b.id) +
          '" data-action="clear"' +
          (submittedOrReview ? " disabled" : "") +
          ' title="' +
          escapeHtml(pack.clearSlot) +
          '">' +
          escapeHtml(txt).replace(/\n/g, " / ") +
          ' <span class="slot-clear">×</span></button>';
      } else {
        html += '<div class="slot-value empty">' + escapeHtml(pack.emptySlot) + "</div>";
      }
      if (submittedOrReview) {
        const chAns = (b.choices || []).find((c) => choiceKey(c) === b.answer);
        const ansTxt = chAns ? choiceText(chAns) : b.answer;
        html +=
          '<div class="box-mark">' +
          (sameKey(val, b.answer)
            ? okMark(ansTxt)
            : "✗ " + escapeHtml(caLabel()) + escapeHtml(inl(ansTxt))) +
          "</div>";
      }
      html += "</div>";
    });
    html += "</div>";
    if (!submittedOrReview) {
      html +=
        '<button type="button" class="btn btn-sm btn-ghost drag-undo" data-action="undo">' +
        escapeHtml(pack.undoLast) +
        "</button>";
    }
    html += "</div>";
    return html;
  }

  function renderBoxesHtml(q, selected, submittedOrReview, selectIdPrefix) {
    const c = getControl(q);
    if (c === "yn") return renderYnBoxesHtml(q, selected, submittedOrReview, selectIdPrefix);
    if (c === "drag") return renderDragBoxesHtml(q, selected, submittedOrReview, selectIdPrefix);
    return renderSelectBoxesHtml(q, selected, submittedOrReview, selectIdPrefix);
  }

  /* ---- Practice ---- */
  function startPractice(filter) {
    state.practiceFilter = filter || "all";
    if (state.practiceFilter === "wrong") {
      // spaced review: wrong questions resurface fresh each time the wrong book is opened
      Object.keys(state.wrongIds).forEach((id) => { delete state.practiceAnswers[id]; delete state.practiceSubmitted[id]; });
      saveProgress();
    }
    rebuildPracticeFilter();
    state.practiceList = questionsByFilter(state.practiceFilter);
    applyPracticeOrder();
    // restore index to first unanswered if possible
    let idx = state.practiceList.findIndex((q) => !state.practiceSubmitted[q.id]);
    if (idx < 0) idx = 0;
    state.practiceIndex = idx;
    $("#practice-filter").value = state.practiceFilter;
    setJumpHint("");
    showView("practice");
    renderPractice();
  }

  function applyPracticeOrder() {
    const ids = state.practiceOrder[state.practiceFilter];
    if (!Array.isArray(ids) || !ids.length) return;
    const byId = {};
    state.practiceList.forEach((q) => (byId[q.id] = q));
    const out = [];
    const seen = {};
    ids.forEach((id) => {
      if (byId[id] && !seen[id]) {
        out.push(byId[id]);
        seen[id] = 1;
      }
    });
    state.practiceList.forEach((q) => {
      if (!seen[q.id]) out.push(q);
    });
    state.practiceList = out;
  }

  function isPracticeShuffled() {
    const ids = state.practiceOrder[state.practiceFilter];
    return Array.isArray(ids) && ids.length > 0;
  }

  function togglePracticeShuffle() {
    const cur = currentPracticeQ();
    const filter = state.practiceFilter;
    const base = questionsByFilter(filter);
    if (isPracticeShuffled()) {
      delete state.practiceOrder[filter];
      state.practiceList = base;
      const i = cur ? state.practiceList.findIndex((q) => q.id === cur.id) : 0;
      state.practiceIndex = i >= 0 ? i : 0;
    } else {
      state.practiceList = shuffle(base);
      state.practiceOrder[filter] = state.practiceList.map((q) => q.id);
      let i = state.practiceList.findIndex((q) => !state.practiceSubmitted[q.id]);
      state.practiceIndex = i >= 0 ? i : 0;
    }
    saveOrderMap(state.practiceOrder);
    renderPractice();
  }

  function isPracticeRevealed(q) {
    if (!q || state.practiceSubmitted[q.id]) return false;
    return !!(state.practiceShowAll || state.practiceReveal[q.id]);
  }

  function correctSelection(q) {
    if (isBoxQ(q)) {
      const o = {};
      q.boxes.forEach((b) => (o[b.id] = b.answer));
      return o;
    }
    return (q.answer || []).slice();
  }

  function currentPracticeQ() {
    return state.practiceList[state.practiceIndex];
  }

  /* ---- Jump to question number (选题号) ---- */
  /** original question number from id ("q015" -> 15) */
  function qNumOf(q) {
    const m = /(\d+)$/.exec(String(q && q.id));
    return m ? parseInt(m[1], 10) : 0;
  }
  function maxQNum() {
    return QUESTIONS.reduce((mx, q) => Math.max(mx, qNumOf(q)), 0);
  }
  /** accepts "15", "015", "q15", "Q015", "#15", "第15题", full-width digits; returns number or NaN */
  function parseJumpInput(raw) {
    const s = String(raw == null ? "" : raw)
      .replace(/[\uff10-\uff19]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
      .replace(/[\uff51\uff31]/g, "q")
      .replace(/[\uff03]/g, "#")
      .trim();
    const m = /^(?:#|q|no\.?|第)?\s*(\d{1,4})\s*(?:题)?$/i.exec(s);
    return m ? parseInt(m[1], 10) : NaN;
  }
  let jumpHintKey = "";
  function setJumpHint(msg, kind) {
    const el = $("#practice-jump-hint");
    if (!el) return;
    el.textContent = msg || "";
    jumpHintKey = msg ? state.practiceFilter + ":" + state.practiceIndex : "";
    el.className = "jump-hint" + (msg && kind ? " " + kind : "");
    const inp = $("#practice-jump-input");
    if (inp) {
      inp.classList.toggle("is-invalid", kind === "warn");
      if (kind === "warn") inp.setAttribute("aria-invalid", "true");
      else inp.removeAttribute("aria-invalid");
    }
  }
  /** Jump to an original question number; respects filter + shuffle order. Returns true on success. */
  function jumpToQuestionNumber(n) {
    const target = QUESTIONS.find((q) => qNumOf(q) === n);
    if (!Number.isFinite(n) || !target) {
      setJumpHint(bi("jumpInvalid", maxQNum()), "warn");
      return false;
    }
    let switched = false;
    let pos = state.practiceList.findIndex((q) => q.id === target.id);
    if (pos < 0) {
      // not in current domain filter -> switch to 全部 (keeps saved shuffle order for "all")
      state.practiceFilter = "all";
      state.practiceList = QUESTIONS.slice();
      applyPracticeOrder();
      const f = $("#practice-filter");
      if (f) f.value = "all";
      pos = state.practiceList.findIndex((q) => q.id === target.id);
      switched = true;
    }
    if (pos < 0) {
      setJumpHint(bi("jumpInvalid", maxQNum()), "warn");
      return false;
    }
    state.practiceIndex = pos;
    renderPractice();
    if (switched) setJumpHint(bi("jumpSwitched", n), "ok");
    else if (isPracticeShuffled()) setJumpHint(bi("jumpShuffled", n, pos + 1), "ok");
    else setJumpHint("");
    const inp = $("#practice-jump-input");
    if (inp) inp.value = "";
    const body = $("#practice-body");
    if (body && body.scrollIntoView) {
      try {
        body.scrollIntoView({ block: "start", behavior: "smooth" });
      } catch (e) {
        body.scrollIntoView();
      }
    }
    return true;
  }
  function renderJumpSelect() {
    // drop a stale success hint once the user navigates elsewhere (prev/next/shuffle…)
    const hintEl = $("#practice-jump-hint");
    if (hintEl && jumpHintKey && !hintEl.classList.contains("warn") &&
        jumpHintKey !== state.practiceFilter + ":" + state.practiceIndex) setJumpHint("");
    const sel = $("#practice-jump-select");
    if (!sel) return;
    const cur = currentPracticeQ();
    const items = state.practiceList.slice().sort((a, b) => qNumOf(a) - qNumOf(b));
    let html = '<option value="" disabled>' + escapeHtml(bi("jumpPick")) + "…</option>";
    items.forEach((q) => {
      const n = qNumOf(q);
      let mark = "";
      if (state.practiceSubmitted[q.id]) mark += " ✓";
      if (state.practiceFlags[q.id]) mark += " ⚑";
      html +=
        '<option value="' + n + '"' + (cur && cur.id === q.id ? " selected" : "") + ">" +
        escapeHtml(bi("jumpOpt", n) + mark) + "</option>";
    });
    sel.innerHTML = html;
    if (!cur) sel.value = "";
  }

  function renderPractice() {
    applyChrome();
    const q = currentPracticeQ();
    const pack = t();
    if (!q) {
      $("#practice-body").innerHTML = "<p class='muted'>" + pack.noQuestions + "</p>";
      renderJumpSelect();
      return;
    }
    const answeredCount = state.practiceList.filter((x) => state.practiceSubmitted[x.id]).length;
    const pct = state.practiceList.length
      ? Math.round((answeredCount / state.practiceList.length) * 100)
      : 0;
    $("#practice-progress-bar").style.width = pct + "%";
    $("#practice-progress-label").textContent = pack.progressPractice(
      answeredCount,
      state.practiceList.length,
      state.practiceIndex + 1
    ) + (isPracticeShuffled() ? pack.shuffledTag : "");

    const submitted = !!state.practiceSubmitted[q.id];
    const revealed = isPracticeRevealed(q);
    const showing = submitted || revealed;
    const flagged = !!state.practiceFlags[q.id];

    let html = "";
    const selected = normalizeSelection(q, state.practiceAnswers[q.id]);
    // When revealed (not submitted): display the correct answer without touching stored answers
    const shownSel = revealed ? correctSelection(q) : selected;
    html += '<div class="q-meta">';
    html += '<span class="badge">#' + q.id + "</span>";
    html += pdfRefBadgeHtml(q);
    html += '<span class="badge domain">' + escapeHtml(domainLabelOf(q)) + "</span>";
    const ctrl = getControl(q);
    if (ctrl === "multi") html += '<span class="badge type-multi">' + escapeHtml(typeBadgeLabel(q, pack)) + "</span>";
    else html += '<span class="badge">' + escapeHtml(typeBadgeLabel(q, pack)) + "</span>";
    if (q.caseStudy) html += '<span class="badge">' + pack.typeCase + "</span>";
    if (flagged) html += '<span class="badge flagged">' + pack.flagged + "</span>";
    html += "</div>";
    if (q.caseStudy && q.caseStudyText) {
      html += '<details class="case-box"><summary>' + escapeHtml(pack.caseSummary) + '</summary><div class="case-body">' +
        formatMultiline(caseStudyTextOf(q)) + "</div></details>";
    }
    html += '<div class="stem">' + formatStem(stemOf(q)) + "</div>";
    if (isBoxQ(q)) {
      html += '<p class="muted" style="margin-bottom:0.75rem">' + escapeHtml(pickHintFor(q, pack)) + "</p>";
      revealOnly = revealed;
      try {
        html += renderBoxesHtml(q, shownSel, showing, "practice");
      } finally {
        revealOnly = false;
      }
    } else {
      if (getControl(q) === "multi") {
        html += '<p class="muted" style="margin-bottom:0.75rem">' + escapeHtml(pack.pickMulti) + "</p>";
      }
      if (showing) html += answerSummary(q, shownSel, !!state.practiceSubmitted[q.id]);
      html += '<div class="options" id="practice-options">';
      (q.options || []).forEach((opt) => {
        const isSel = (shownSel || []).indexOf(opt.id) >= 0;
        let cls = "option";
        let gtag = "";
        if (showing) { const g = optGrade(q, opt, isSel, !!state.practiceSubmitted[q.id]); cls += g.cls; gtag = g.tag; }
        else if (isSel) cls += " selected";
        html +=
          '<button type="button" class="' +
          cls +
          '" data-oid="' +
          opt.id +
          '"' +
          (showing ? " disabled" : "") +
          ">" +
          '<span class="oid">' +
          opt.id +
          "</span>" +
          '<span class="otext">' +
          formatMultiline(optionText(opt)) +
          gtag + "</span></button>";
      });
      html += "</div>";
    }

    if (showing) {
      const ok = isCorrect(q, selected);
      html +=
        '<div class="feedback ' +
        (revealed ? "reveal" : ok ? "ok" : "bad") +
        '"><div class="title">' +
        (revealed ? pack.revealedTitle : ok ? pack.correct : pack.wrong) +
        "</div><div class='expl'><strong>" +
        escapeHtml(caLabel()) +
        "</strong><br>" +
        formatMultiline(formatCorrectAnswer(q)) +
        "<br>" +
        formatExplanation(explanationOf(q)) +
        "</div>";
      if (q.answerFixed && q.fixNote) {
        html += '<div class="fix-note"><strong>' + pack.answerFixed + "</strong>" + escapeHtml(q.fixNote) +
          pack.pdfAnswer + escapeHtml((q.pdfAnswer || []).join(", ")) + "）</div>";
      } else if (q.fixNote && q.answerConfidence === "low") {
        html += '<div class="fix-note muted"><strong>' + pack.note + "</strong>" + escapeHtml(q.fixNote) + "</div>";
      }
      if (q.refs && q.refs.length) {
        html += '<div class="refs"><strong>' + pack.refs + "</strong><ul>" +
          q.refs.map(function (u) {
            return '<li><a href="' + escapeHtml(u) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(u) + "</a></li>";
          }).join("") +
          "</ul></div>";
      }
      html += "</div>";
    }

    $("#practice-body").innerHTML = html;
    renderJumpSelect();

    $("#btn-practice-submit").disabled = submitted || revealed || !allBoxesSelected(q, selected);
    const rb = $("#btn-practice-reveal");
    if (rb) {
      rb.textContent = revealed ? pack.hideAnswer : pack.showAnswer;
      rb.disabled = submitted || state.practiceShowAll;
      rb.classList.toggle("active", revealed);
    }
    const sb = $("#btn-practice-shuffle");
    if (sb) {
      const sh = isPracticeShuffled();
      sb.textContent = sh ? pack.unshuffle : pack.shuffle;
      sb.title = sh ? pack.unshuffleTitle : pack.shuffleTitle;
      sb.classList.toggle("active", sh);
    }
    const chk = $("#chk-practice-showall");
    if (chk) chk.checked = !!state.practiceShowAll;
    $("#btn-practice-submit").textContent = submitted ? pack.submitted : pack.submit;
    $("#btn-practice-flag").textContent = flagged ? pack.unflag : pack.flag;
    $("#btn-practice-prev").disabled = state.practiceIndex <= 0;
    $("#btn-practice-next").disabled = state.practiceIndex >= state.practiceList.length - 1;

    bindBoxControls(q, "practice", showing);
    try { renderQExtras(q); } catch (err) { console.error(err); }
    if (!isBoxQ(q)) {
      $$("#practice-options .option").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (state.practiceSubmitted[q.id] || isPracticeRevealed(q)) return;
          toggleSelect(q, btn.getAttribute("data-oid"), "practice");
        });
      });
    }
  }

  function assignDragNext(q, key, mode) {
    const ansKey = mode === "practice" ? "practiceAnswers" : "examAnswers";
    const sel = Object.assign({}, normalizeSelection(q, state[ansKey][q.id]));
    const empty = q.boxes.find((b) => !sel[b.id] || String(sel[b.id]).trim() === "");
    if (!empty) return;
    sel[empty.id] = key;
    state[ansKey][q.id] = sel;
    if (mode === "practice") {
      saveProgress();
      renderPractice();
    } else {
      renderExam();
    }
  }

  function clearDragSlot(q, boxId, mode) {
    setBoxAnswer(q, boxId, "", mode);
  }

  function undoDragLast(q, mode) {
    const ansKey = mode === "practice" ? "practiceAnswers" : "examAnswers";
    const sel = Object.assign({}, normalizeSelection(q, state[ansKey][q.id]));
    for (let i = q.boxes.length - 1; i >= 0; i--) {
      const b = q.boxes[i];
      if (sel[b.id] && String(sel[b.id]).trim() !== "") {
        sel[b.id] = "";
        state[ansKey][q.id] = sel;
        if (mode === "practice") {
          saveProgress();
          renderPractice();
        } else {
          renderExam();
        }
        return;
      }
    }
  }

  function bindBoxControls(q, mode, locked) {
    if (!isBoxQ(q) || locked) return;
    const prefix = mode === "practice" ? "#practice-boxes" : "#exam-boxes";
    const ctrl = getControl(q);
    if (ctrl === "select") {
      $$(prefix + " .box-select").forEach((sel) => {
        sel.addEventListener("change", () => {
          setBoxAnswer(q, sel.getAttribute("data-boxid"), sel.value, mode);
        });
      });
      return;
    }
    if (ctrl === "yn") {
      $$(prefix + " .yn-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          setBoxAnswer(q, btn.getAttribute("data-boxid"), btn.getAttribute("data-key"), mode);
        });
      });
      return;
    }
    if (ctrl === "drag") {
      $$(prefix + " .drag-chip").forEach((btn) => {
        btn.addEventListener("click", () => {
          assignDragNext(q, btn.getAttribute("data-key"), mode);
        });
      });
      $$(prefix + ' .slot-value.filled').forEach((btn) => {
        btn.addEventListener("click", () => {
          clearDragSlot(q, btn.getAttribute("data-boxid"), mode);
        });
      });
      const undo = $(prefix + " .drag-undo");
      if (undo) {
        undo.addEventListener("click", () => undoDragLast(q, mode));
      }
    }
  }

  function toggleSelect(q, oid, mode) {
    const key = mode === "practice" ? "practiceAnswers" : "examAnswers";
    let sel = (state[key][q.id] || []).slice();
    if (getControl(q) === "single") {
      sel = [oid];
    } else {
      const i = sel.indexOf(oid);
      if (i >= 0) sel.splice(i, 1);
      else sel.push(oid);
    }
    state[key][q.id] = sel;
    if (mode === "practice") {
      saveProgress();
      renderPractice();
    } else {
      renderExam();
    }
  }

  function setBoxAnswer(q, boxId, value, mode) {
    const key = mode === "practice" ? "practiceAnswers" : "examAnswers";
    const sel = Object.assign({}, normalizeSelection(q, state[key][q.id]));
    sel[boxId] = value;
    state[key][q.id] = sel;
    if (mode === "practice") {
      saveProgress();
      renderPractice();
    } else {
      renderExam();
    }
  }

  function submitPractice() {
    const q = currentPracticeQ();
    if (!q) return;
    const sel = state.practiceAnswers[q.id];
    if (state.practiceSubmitted[q.id]) return; // no double-submit
    if (isPracticeRevealed(q)) return; // revealed answers are never scored
    if (!allBoxesSelected(q, sel)) return;
    state.practiceSubmitted[q.id] = true;
    const e = ex();
    if (isCorrect(q, sel)) {
      if (state.wrongIds[q.id]) {
        e.ws[q.id] = (e.ws[q.id] || 0) + 1;
        if (e.ws[q.id] >= 2) { delete state.wrongIds[q.id]; delete e.ws[q.id]; }
      }
    } else { state.wrongIds[q.id] = true; e.ws[q.id] = 0; }
    e.seen[q.id] = 1;
    const dk = dayStr(new Date()); e.days[dk] = (e.days[dk] || 0) + 1;
    saveEx();
    saveProgress();
    renderPractice();
  }

  function resetPracticeFilter() {
    if (!confirm(t().confirmReset)) return;
    state.practiceList.forEach((q) => {
      delete state.practiceAnswers[q.id];
      delete state.practiceSubmitted[q.id];
      delete state.practiceFlags[q.id];
      delete state.wrongIds[q.id];
    });
    saveProgress();
    state.practiceList = questionsByFilter(state.practiceFilter);
    applyPracticeOrder();
    state.practiceIndex = 0;
    renderPractice();
  }

  /* ---- Exam ---- */
  /* ---- Unfinished mock exam persisted across reload (separate per-exam key) ---- */
  function examProgKey() { return "itcert_exam_inprogress_v1_" + currentExamId; }
  function saveExamProgress() {
    try {
      if (state.examSubmitted || !state.examQuestions || !state.examQuestions.length) return;
      localStorage.setItem(examProgKey(), JSON.stringify({
        ids: state.examQuestions.map((q) => q.id),
        optOrder: state.examQuestions.map((q) => (q.options || []).map((o) => o.id)),
        answers: state.examAnswers, flags: state.examFlags, index: state.examIndex,
        sec: state.examSec, secCur: state.examSecCur || 0,
        secondsLeft: state.examSecondsLeft, savedAt: Date.now(),
      }));
    } catch (e) { /* ignore */ }
  }
  function clearExamProgress() { try { localStorage.removeItem(examProgKey()); } catch (e) { /* ignore */ } }
  function tryResumeExam() {
    let d = null;
    try { d = JSON.parse(localStorage.getItem(examProgKey()) || "null"); } catch (e) { d = null; }
    if (!d || !Array.isArray(d.ids) || !d.ids.length) return false;
    const byId = {};
    QUESTIONS.forEach((q) => (byId[q.id] = q));
    const qs = d.ids.map((id, i) => {
      const q = byId[id];
      if (!q) return null;
      const ord = (d.optOrder || [])[i];
      if (!ord || !q.options || ord.length !== q.options.length) return q;
      const m = {};
      q.options.forEach((o) => (m[o.id] = o));
      const opts = ord.map((k) => m[k]).filter(Boolean);
      return opts.length === q.options.length ? Object.assign({}, q, { options: opts }) : q;
    });
    if (qs.some((q) => !q) || !(d.secondsLeft > 0)) { clearExamProgress(); return false; }
    const answered = qs.filter((q) => allBoxesSelected(q, (d.answers || {})[q.id])).length;
    const mm = Math.floor(d.secondsLeft / 60);
    const msg = state.lang === "en"
      ? "You have an unfinished mock exam (" + answered + "/" + qs.length + " answered, " + mm + " min left). Resume it?\n(Cancel = discard it)"
      : "有一场未完成的模拟考试（已答 " + answered + "/" + qs.length + "，剩余 " + mm + " 分钟）。是否继续？\n（取消 = 放弃该场考试）";
    if (!confirm(msg)) { clearExamProgress(); return false; }
    state.examQuestions = qs;
    state.examAnswers = d.answers || {};
    state.examFlags = d.flags || {};
    state.examIndex = Math.min(d.index || 0, qs.length - 1);
    state.examSubmitted = false;
    state.examResult = null;
    state.revealed = false;
    state.examSec = Array.isArray(d.sec) && d.sec.length === qs.length ? d.sec : qs.map(() => 0);
    state.examSecCur = d.secCur || 0;
    state.examReviewOpen = false;
    state.caseTab = "q";
    state.examSecondsLeft = d.secondsLeft;
    if (state.examTimerId) clearInterval(state.examTimerId);
    state.examDeadline = Date.now() + state.examSecondsLeft * 1000;
    state.examTimerId = setInterval(tickExam, 1000);
    showView("exam");
    renderExam();
    updateTimerDisplay();
    return true;
  }

  function openExamConfig() {
    if (tryResumeExam()) return;
    applyChrome();
    showView("examConfig");
  }

  /* ---- Real-exam fidelity: sections, review screen, case-study tabs ---- */
  function setupExamSections() {
    const qs = state.examQuestions;
    const sec = qs.map(() => 0);
    const exam = currentExam();
    if (exam && exam.specialExam58 && qs.length === 58) {
      // AI-103: 48 ordinary | 3 multi-judgment | 7-question case study — each its own section
      qs.forEach((q, i) => { sec[i] = q.caseStudy ? 2 : (i >= 48 ? 1 : 0); });
    }
    state.examSec = sec;
    state.examSecCur = 0;
    state.examReviewOpen = false;
    state.caseTab = "q";
  }
  function examSecOf(i) { return (state.examSec && state.examSec[i]) || 0; }
  function examSecCount() { return state.examSec && state.examSec.length ? Math.max.apply(null, state.examSec) + 1 : 1; }
  function examLocked(i) { return !state.examSubmitted && examSecOf(i) !== (state.examSecCur || 0); }
  function secIdx(s) { const o = []; state.examQuestions.forEach((q, i) => { if (examSecOf(i) === s) o.push(i); }); return o; }
  function secName(s) {
    const zh = state.lang !== "en";
    if (examSecCount() === 1) return zh ? "全部题目" : "All questions";
    const names = zh ? ["第 1 部分 · 常规题", "第 2 部分 · 多判断题", "第 3 部分 · 案例研究"] : ["Section 1 · Questions", "Section 2 · Multi-judgment", "Section 3 · Case study"];
    return names[s] || ("Section " + (s + 1));
  }
  function openExamReview() { state.examReviewOpen = true; renderExam(); window.scrollTo(0, 0); }
  function renderExamReviewHtml() {
    const zh = state.lang !== "en";
    const s = state.examSecCur || 0;
    const idx = secIdx(s);
    const last = s >= examSecCount() - 1;
    const isDone = (i) => allBoxesSelected(state.examQuestions[i], state.examAnswers[state.examQuestions[i].id]);
    const nUn = idx.filter((i) => !isDone(i)).length;
    const nFl = idx.filter((i) => state.examFlags[state.examQuestions[i].id]).length;
    let h = '<div class="exam-review"><h2 class="er-title">' + (zh ? "检查屏幕" : "Review screen") + "</h2>";
    h += '<p class="muted">' + escapeHtml(secName(s)) + " · " + (zh ? ("未完成 " + nUn + " · 已标记 " + nFl) : (nUn + " incomplete · " + nFl + " marked for review")) + "</p>";
    if (!last) h += '<p class="er-warn">' + (zh ? "结束本部分后将无法返回本部分的题目。" : "After you end this section, you will NOT be able to return to it.") + "</p>";
    h += '<div class="er-list">';
    idx.forEach((i) => {
      const q = state.examQuestions[i];
      const done = isDone(i);
      const fl = !!state.examFlags[q.id];
      h += '<button type="button" class="er-row' + (done ? "" : " incomplete") + (fl ? " flagged" : "") + '" data-i="' + i + '"><span class="er-n">' + (zh ? "第 " + (i + 1) + " 题" : "Question " + (i + 1)) + '</span><span class="er-st">' + (done ? (zh ? "已作答" : "Answered") : (zh ? "未完成" : "Incomplete")) + "</span>" + (fl ? '<span class="er-fl">⚑ ' + (zh ? "已标记" : "Marked") + "</span>" : "") + "</button>";
    });
    h += '</div><div class="nav-row er-actions">';
    h += '<button type="button" class="btn" data-er="all">' + (zh ? "检查全部" : "Review all") + "</button>";
    h += '<button type="button" class="btn" data-er="flag"' + (nFl ? "" : " disabled") + ">" + (zh ? "检查已标记" : "Review marked") + "</button>";
    h += '<button type="button" class="btn" data-er="inc"' + (nUn ? "" : " disabled") + ">" + (zh ? "检查未完成" : "Review incomplete") + "</button>";
    h += '<span class="spacer"></span><button type="button" class="btn btn-primary" data-er="end">' + (last ? (zh ? "结束考试并交卷" : "End exam") : (zh ? "结束本部分" : "End section")) + "</button></div></div>";
    return h;
  }
  function bindExamReview() {
    $$("#exam-body .er-row").forEach((b) => b.addEventListener("click", () => { state.examReviewOpen = false; state.examIndex = parseInt(b.getAttribute("data-i"), 10); renderExam(); }));
    $$("#exam-body [data-er]").forEach((b) => b.addEventListener("click", () => {
      const k = b.getAttribute("data-er");
      const idx = secIdx(state.examSecCur || 0);
      const pick = (fn) => { const i = idx.find(fn); if (i != null) { state.examReviewOpen = false; state.examIndex = i; renderExam(); } };
      if (k === "all") pick(() => true);
      else if (k === "flag") pick((i) => state.examFlags[state.examQuestions[i].id]);
      else if (k === "inc") pick((i) => !allBoxesSelected(state.examQuestions[i], state.examAnswers[state.examQuestions[i].id]));
      else if (k === "end") {
        const last = (state.examSecCur || 0) >= examSecCount() - 1;
        if (last) { finishExam(false); return; }
        const zh = state.lang !== "en";
        if (!confirm(zh ? "确定结束本部分？结束后无法返回。" : "End this section? You won't be able to return.")) return;
        state.examSecCur++;
        state.examReviewOpen = false;
        state.caseTab = "q";
        state.examIndex = secIdx(state.examSecCur)[0] || 0;
        renderExam();
        window.scrollTo(0, 0);
      }
    }));
  }

  function startExam() {
    const exam = currentExam();
    const count =
      parseInt($("#exam-count").value, 10) ||
      (exam && exam.mockDefaultCount) ||
      58;
    const minutes =
      parseInt($("#exam-minutes").value, 10) ||
      (exam && exam.mockDefaultMinutes) ||
      90;
    const n = Math.min(count, QUESTIONS.length);
    state.examQuestions = sampleExamQuestions(n);
    setupExamSections();
    state.examIndex = 0;
    state.examAnswers = {};
    state.examFlags = {};
    state.examSubmitted = false;
    state.examResult = null;
    state.revealed = false;
    state.examSecondsLeft = minutes * 60;
    if (state.examTimerId) clearInterval(state.examTimerId);
    state.examDeadline = Date.now() + state.examSecondsLeft * 1000;
    state.examTimerId = setInterval(tickExam, 1000);
    showView("exam");
    renderExam();
    updateTimerDisplay();
  }

  function tickExam() {
    // wall-clock based so background-tab throttling / sleep cannot stretch the exam
    if (!state.examDeadline) state.examDeadline = Date.now() + state.examSecondsLeft * 1000;
    const prev = state.examSecondsLeft;
    state.examSecondsLeft = Math.max(0, Math.ceil((state.examDeadline - Date.now()) / 1000));
    if (Math.floor(prev / 10) !== Math.floor(state.examSecondsLeft / 10)) saveExamProgress();
    updateTimerDisplay();
    if (state.examSecondsLeft <= 0) {
      clearInterval(state.examTimerId);
      state.examTimerId = null;
      finishExam(true);
    }
  }

  function updateTimerDisplay() {
    const el = $("#exam-timer");
    if (!el) return;
    const s = Math.max(0, state.examSecondsLeft);
    const m = Math.floor(s / 60);
    const r = s % 60;
    el.textContent =
      String(m).padStart(2, "0") + ":" + String(r).padStart(2, "0");
    el.classList.remove("warn", "danger");
    if (s <= 300 && s > 60) el.classList.add("warn");
    if (s <= 60) el.classList.add("danger");
  }

  function currentExamQ() {
    return state.examQuestions[state.examIndex];
  }

  function renderExam() {
    applyChrome();
    const q = currentExamQ();
    if (!q) return;
    const pack = t();
    const answered = state.examQuestions.filter((eq) =>
      allBoxesSelected(eq, state.examAnswers[eq.id])
    ).length;
    const pct = Math.round((answered / state.examQuestions.length) * 100);
    $("#exam-progress-bar").style.width = pct + "%";
    $("#exam-progress-label").textContent = pack.progressExam(
      answered,
      state.examQuestions.length,
      state.examIndex + 1
    );

    const selected = normalizeSelection(q, state.examAnswers[q.id]);
    const flagged = !!state.examFlags[q.id];
    const reviewMode = state.examSubmitted && state.revealed;

    saveExamProgress();
    if (state.examReviewOpen && !state.examSubmitted) {
      $("#exam-body").innerHTML = renderExamReviewHtml();
      bindExamReview();
      renderExamGrid(false);
      $("#btn-exam-prev").disabled = true;
      $("#btn-exam-next").disabled = true;
      $("#btn-exam-flag").disabled = true;
      return;
    }
    $("#btn-exam-flag").disabled = false;
    let html = "";
    if (!state.examSubmitted && examSecCount() > 1) html += '<div class="exam-sec-label">' + escapeHtml(secName(state.examSecCur || 0)) + "</div>";
    html += '<div class="q-meta">';
    html += '<span class="badge">#' + q.id + "</span>";
    html += pdfRefBadgeHtml(q);
    html += '<span class="badge domain">' + escapeHtml(domainLabelOf(q)) + "</span>";
    {
      const ctrl = getControl(q);
      if (ctrl === "multi") html += '<span class="badge type-multi">' + escapeHtml(typeBadgeLabel(q, pack)) + "</span>";
      else if (ctrl !== "single") html += '<span class="badge">' + escapeHtml(typeBadgeLabel(q, pack)) + "</span>";
      else html += '<span class="badge">' + escapeHtml(pack.typeSingle) + "</span>";
    }
    if (flagged) html += '<span class="badge flagged">' + pack.flagged + "</span>";
    html += "</div>";
    const caseTabs = !!(q.caseStudy && q.caseStudyText);
    const showCase = caseTabs && state.caseTab === "case";
    if (caseTabs) {
      const zh = state.lang !== "en";
      html += '<div class="case-tabs" role="tablist"><button type="button" role="tab" class="case-tab' + (showCase ? " active" : "") + '" data-tab="case">' + (zh ? "案例研究" : "Case study") + '</button><button type="button" role="tab" class="case-tab' + (showCase ? "" : " active") + '" data-tab="q">' + (zh ? "问题" : "Question") + "</button></div>";
    }
    if (showCase) html += '<div class="case-body case-tabpanel">' + formatMultiline(caseStudyTextOf(q)) + "</div>";
    html += '<div class="exam-qpanel' + (showCase ? " hidden" : "") + '">';
    html += '<div class="stem">' + formatStem(stemOf(q)) + "</div>";
    if (isBoxQ(q)) {
      html += '<p class="muted" style="margin-bottom:0.75rem">' + escapeHtml(pickHintFor(q, pack)) + "</p>";
      html += renderBoxesHtml(q, selected, reviewMode, "exam");
    } else {
      if (getControl(q) === "multi") {
        html += '<p class="muted" style="margin-bottom:0.75rem">' + escapeHtml(pack.pickMulti) + "</p>";
      }
      if (reviewMode) html += answerSummary(q, selected, true);
      html += '<div class="options" id="exam-options">';
      (q.options || []).forEach((opt) => {
        const isSel = (selected || []).indexOf(opt.id) >= 0;
        let cls = "option";
        let gtag = "";
        if (reviewMode) { const g = optGrade(q, opt, isSel, true); cls += g.cls; gtag = g.tag; }
        else if (isSel) cls += " selected";
        html +=
          '<button type="button" class="' +
          cls +
          '" data-oid="' +
          opt.id +
          '"' +
          (state.examSubmitted ? " disabled" : "") +
          ">" +
          '<span class="oid">' +
          opt.id +
          "</span>" +
          '<span class="otext">' +
          formatMultiline(optionText(opt)) +
          gtag + "</span></button>";
      });
      html += "</div>";
    }

    if (reviewMode) {
      const ok = isCorrect(q, selected);
      html +=
        '<div class="feedback ' +
        (ok ? "ok" : "bad") +
        '"><div class="title">' +
        (ok ? pack.correctShort : pack.wrongShort) +
        "</div><div class='expl'><strong>" +
        escapeHtml(caLabel()) +
        "</strong><br>" +
        formatMultiline(formatCorrectAnswer(q)) +
        "<br>" +
        formatExplanation(explanationOf(q)) +
        "</div></div>";
    }

    html += "</div>";
    $("#exam-body").innerHTML = html;
    $$("#exam-body .case-tab").forEach((b) => b.addEventListener("click", () => { state.caseTab = b.getAttribute("data-tab"); renderExam(); }));
    renderExamGrid(reviewMode);

    $("#btn-exam-flag").textContent = flagged ? pack.unflagShort : pack.flagShort;
    const pi = state.examIndex - 1, ni = state.examIndex + 1;
    $("#btn-exam-prev").disabled = pi < 0 || examLocked(pi);
    $("#btn-exam-next").disabled = state.examSubmitted ? ni >= state.examQuestions.length : false;
    $("#btn-exam-submit").classList.toggle("hidden", state.examSubmitted);
    $("#btn-exam-to-result").classList.toggle("hidden", !state.examSubmitted);

    if (!state.examSubmitted) {
      bindBoxControls(q, "exam", false);
      if (!isBoxQ(q)) {
        $$("#exam-options .option").forEach((btn) => {
          btn.addEventListener("click", () => {
            toggleSelect(q, btn.getAttribute("data-oid"), "exam");
          });
        });
      }
    }
  }

  function renderExamGrid(reviewMode) {
    let grid = "";
    state.examQuestions.forEach((eq, i) => {
      let cls = "";
      if (i === state.examIndex) cls += " current";
      if (allBoxesSelected(eq, state.examAnswers[eq.id])) cls += " answered";
      if (state.examFlags[eq.id]) cls += " flagged";
      const locked = examLocked(i);
      if (locked) cls += " locked";
      if (reviewMode) {
        const ok = isCorrect(eq, state.examAnswers[eq.id]);
        cls += ok ? " right-mark" : " wrong-mark";
      }
      grid +=
        '<button type="button" class="' +
        cls.trim() +
        '" data-i="' +
        i +
        '"' + (locked ? " disabled" : "") + ">" +
        (i + 1) +
        "</button>";
    });
    $("#exam-grid").innerHTML = grid;
    $$("#exam-grid button").forEach((b) => {
      b.addEventListener("click", () => {
        state.examReviewOpen = false;
        state.examIndex = parseInt(b.getAttribute("data-i"), 10);
        renderExam();
      });
    });
  }

  function finishExam(auto) {
    if (state.examSubmitted) {
      showView("result");
      renderResult();
      return;
    }
    if (!auto) {
      const unanswered = state.examQuestions.filter(
        (q) => !allBoxesSelected(q, state.examAnswers[q.id])
      ).length;
      const pack = t();
      const msg =
        unanswered > 0
          ? pack.confirmHandInUnanswered(unanswered)
          : pack.confirmHandIn;
      if (!confirm(msg)) return;
    }
    if (state.examTimerId) {
      clearInterval(state.examTimerId);
      state.examTimerId = null;
    }
    state.examSubmitted = true;
    state.revealed = true;
    clearExamProgress();

    let correct = 0;
    const byDom = {};
    DOMAIN_ORDER.forEach((d) => {
      byDom[d] = { total: 0, correct: 0, label: "" };
    });
    const wrongList = [];
    state.examQuestions.forEach((q) => {
      if (!byDom[q.domain]) byDom[q.domain] = { total: 0, correct: 0, label: "" };
      byDom[q.domain].total++;
      byDom[q.domain].label = q.domainLabel;
      const ok = isCorrect(q, state.examAnswers[q.id]);
      if (ok) {
        correct++;
        byDom[q.domain].correct++;
      } else {
        wrongList.push(q);
      }
    });
    const pct = state.examQuestions.length
      ? correct / state.examQuestions.length
      : 0;
    const score1000 = Math.round(SCORE_MIN + pct * (1000 - SCORE_MIN));
    state.examResult = {
      correct,
      total: state.examQuestions.length,
      pct,
      score1000,
      pass: score1000 >= PASS_SCORE,
      byDom,
      wrongList,
      auto: !!auto,
    };
    try { recordMockScore(state.examResult); } catch (err) { console.error("score", err); }
    // Merge exam misses into persistent wrong bank (survives 回首页)
    wrongList.forEach((q) => {
      state.wrongIds[q.id] = true;
      try { ex().ws[q.id] = 0; } catch (err) {}
    });
    try { saveEx(); } catch (err) {}
    saveProgress();
    saveExamLast();
    showView("result");
    renderResult();
  }

  function renderResult() {
    applyChrome();
    const r = state.examResult;
    if (!r) return;
    const pack = t();
    const hero = $("#result-hero");
    hero.innerHTML =
      '<div class="score-num ' +
      (r.pass ? "pass" : "fail") +
      '">' +
      r.score1000 +
      '</div><div class="score-sub">' +
      pack.scoreSub(r.correct, r.total, Math.round(r.pct * 100), r.pass, r.auto) +
      "</div>";

    let bd = "";
    (DOMAIN_ORDER.length ? DOMAIN_ORDER : Object.keys(r.byDom || {})).forEach((d) => {
      const x = r.byDom[d];
      if (!x || !x.total) return;
      const p = Math.round((x.correct / x.total) * 100);
      const label = pack.domain[d] || x.label;
      bd +=
        '<div class="domain-row"><span>' +
        escapeHtml(label) +
        "</span><span>" +
        x.correct +
        "/" +
        x.total +
        "（" +
        p +
        '%）</span><div class="bar"><i style="width:' +
        p +
        '%"></i></div></div>';
    });
    $("#result-domains").innerHTML = bd;

    let wrongHtml = "";
    if (!r.wrongList.length) {
      wrongHtml = "<p class='muted'>" + pack.allCorrect + "</p>";
    } else {
      r.wrongList.forEach((q) => {
        const sel = state.examAnswers[q.id] || [];
        wrongHtml += '<div class="review-item">';
        wrongHtml +=
          "<span class='badge'>#" +
          q.id +
          "</span> " +
          pdfRefBadgeHtml(q) +
          '<span class="badge domain">' +
          escapeHtml(domainLabelOf(q)) +
          "</span>";
        wrongHtml += '<div class="r-stem">' + formatStem(stemOf(q)) + "</div>";
        wrongHtml +=
          '<div class="r-ans">' +
          "<strong>" + escapeHtml(yaLabel()) + "</strong><br>" +
          formatMultiline(formatUserAnswer(q, sel)) +
          "<br><strong>" +
          escapeHtml(caLabel()) +
          "</strong><br>" +
          formatMultiline(formatCorrectAnswer(q)) +
          "</div>";
        wrongHtml +=
          '<div class="r-expl">' + formatExplanation(explanationOf(q)) + "</div>";
        if (q.answerFixed && q.fixNote) {
          wrongHtml += '<div class="fix-note"><strong>' + pack.answerFixed + "</strong>" + escapeHtml(q.fixNote) + "</div>";
        }
        wrongHtml += "</div>";
      });
    }
    $("#result-wrong").innerHTML = wrongHtml;
  }

  /** stem text with ``` fenced code blocks rendered as monospace <pre> */
  function formatStem(s) {
    const parts = String(s == null ? "" : s).split(/^```[ \t]*$/m);
    return parts
      .map((p, i) => {
        const body = p.replace(/^\n/, "").replace(/\n$/, "");
        if (i % 2 === 1) return '<pre class="stem-code">' + escapeHtml(body) + "</pre>";
        return body.trim() ? formatMultiline(body) : "";
      })
      .join("");
  }

  function formatExplanation(s) {
    const linkify = (h) => h.replace(/https?:\/\/[^\s<>"'）)\]，。]+/g, (u) => {
      const m = u.match(/[.,;:!?]+$/); const tail = m ? m[0] : ""; const url = tail ? u.slice(0, -tail.length) : u;
      return '<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + url + "</a>" + tail;
    });
    const paras = String(s || "").replace(/\r/g, "").split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
    if (paras.length <= 1) return linkify(formatMultiline(s));
    return paras.map((p) => "<p>" + linkify(escapeHtml(p).replace(/\n/g, "<br>")) + "</p>").join("");
  }
  function formatMultiline(s) {
    return escapeHtml(s).replace(/\n/g, "<br>");
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* Keyboard */
  function onKey(e) {
    if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "SELECT" || e.target.tagName === "TEXTAREA")) {
      return;
    }
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === "?") {
      e.preventDefault();
      alert(L("键盘快捷键\n\nA–F 或 1–6：选择选项\nEnter：提交 / 下一题\n← / →：上一题 / 下一题\n?：显示本帮助", "Keyboard shortcuts\n\nA–F or 1–6: choose option\nEnter: submit / next\n← / →: previous / next\n?: this help"));
      return;
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      const pre = state.mode === "practice" ? "#btn-practice-" : state.mode === "exam" ? "#btn-exam-" : "";
      const b = pre && $(pre + (e.key === "ArrowLeft" ? "prev" : "next"));
      if (b && !b.disabled && b.offsetParent) { e.preventDefault(); b.click(); }
      return;
    }
    const map = { KeyA: "A", KeyB: "B", KeyC: "C", KeyD: "D", KeyE: "E", KeyF: "F", Digit1: "A", Digit2: "B", Digit3: "C", Digit4: "D", Digit5: "E", Digit6: "F",
      Numpad1: "A", Numpad2: "B", Numpad3: "C", Numpad4: "D", Numpad5: "E", Numpad6: "F" };

    if (state.mode === "practice") {
      const q = currentPracticeQ();
      if (!q) return;
      if (map[e.code] && !state.practiceSubmitted[q.id] && !isPracticeRevealed(q) && !isDropdownQ(q)) {
        const oid = map[e.code];
        if ((q.options || []).some((o) => o.id === oid)) {
          e.preventDefault();
          toggleSelect(q, oid, "practice");
        }
      }
      if (e.key === "Enter") {
        e.preventDefault();
        if (!state.practiceSubmitted[q.id] && !isPracticeRevealed(q)) submitPractice();
        else if (state.practiceIndex < state.practiceList.length - 1) {
          state.practiceIndex++;
          renderPractice();
        }
      }
    } else if (state.mode === "exam" && !state.examSubmitted) {
      const q = currentExamQ();
      if (!q) return;
      if (map[e.code] && !isDropdownQ(q)) {
        const oid = map[e.code];
        if ((q.options || []).some((o) => o.id === oid)) {
          e.preventDefault();
          toggleSelect(q, oid, "exam");
        }
      }
      if (e.key === "Enter") {
        e.preventDefault();
        if (state.examReviewOpen) return;
        $("#btn-exam-next").click();
      }
    }
  }

  function ensureBank(id, cb) {
    if (id !== "dop-c02" || typeof window.QUESTIONS_DOP_C02 !== "undefined") { cb(); return; }
    let bl = document.getElementById("boot-loader");
    if (!bl) { bl = document.createElement("div"); bl.id = "boot-loader"; bl.className = "boot-block"; bl.setAttribute("role", "status"); bl.innerHTML = '<span class="spin"></span>' + escapeHtml(L("DOP-C02 题库加载中…", "Loading DOP-C02 bank…")); document.body.appendChild(bl); }
    const ov = document.createElement("div"); ov.className = "bank-block"; document.body.appendChild(ov);
    const me = document.querySelector('script[src*="app.js"]');
    const sc = document.createElement("script");
    sc.src = me ? me.src.replace(/app\.js/, "banks/questions-dop-c02.js") : "banks/questions-dop-c02.js";
    sc.onload = () => { bl.remove(); ov.remove(); cb(); };
    sc.onerror = () => { bl.remove(); ov.remove(); sc.remove(); alert(L("题库加载失败，请检查网络后重试", "Failed to load the question bank. Check your connection and retry.")); };
    document.head.appendChild(sc);
  }

  /* Wire UI */
  function init() {
    const api = examApi();
    if (!api) {
      document.body.innerHTML =
        "<p style='padding:2rem;color:#fff'>题库加载失败：未找到考试注册表 ITCERT_EXAMS。</p>";
      return;
    }
    const startId = api.loadSavedExamId ? api.loadSavedExamId() : api.defaultId;
    applyExamConfig(api.get(startId));
    if (!QUESTIONS.length) {
      document.body.innerHTML =
        "<p style='padding:2rem;color:#fff'>题库加载失败：当前考试无题目（" +
        currentExamId +
        "）。</p>";
      return;
    }
    state.practiceOrder = loadOrderMap();
    loadProgress();
    // Last exam is opened on demand from home — do not clobber via loadExamLast at boot
    applyChrome();
    rebuildExamConfigControls();
    rebuildPracticeFilter();
    rebuildHomeStats();
    updateExamSwitcherUI();
    document.addEventListener("ai103-auth-change", onAuthGateChange);
    if (authAllowsApp()) {
      renderHome();
    } else {
      hideAllAppViews();
    }

    $$(".lang-toggle button").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
    });

    const switcher = $("#exam-switcher");
    if (switcher) {
      switcher.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-exam-id]");
        if (!btn) return;
        const id = btn.getAttribute("data-exam-id");
        if (!id || id === currentExamId) return;
        if (state.mode === "exam" && !state.examSubmitted) {
          if (!confirm(t().confirmLeave)) return;
        }
        ensureBank(id, () => switchExam(id));
      });
    }

    $("#btn-go-practice").addEventListener("click", () => startPractice("all"));
    $("#btn-go-exam").addEventListener("click", openExamConfig);
    const btnFlagged = $("#btn-go-flagged");
    if (btnFlagged) {
      btnFlagged.addEventListener("click", () => {
        if (!flaggedCount()) return;
        startPractice("flagged");
      });
    }
    const btnWrong = $("#btn-go-wrong");
    if (btnWrong) {
      btnWrong.addEventListener("click", () => {
        if (!wrongCount()) return;
        startPractice("wrong");
      });
    }
    const btnLastExam = $("#btn-go-last-exam");
    if (btnLastExam) {
      btnLastExam.addEventListener("click", () => openLastExamResult());
    }

    $("#practice-filter").addEventListener("change", (e) => {
      startPractice(e.target.value);
    });
    $("#btn-practice-back").addEventListener("click", () => {
      // Do NOT clear flags / wrongIds — only explicit「重置进度」clears
      renderHome();
    });
    $("#btn-practice-submit").addEventListener("click", submitPractice);
    $("#btn-practice-reveal").addEventListener("click", () => {
      const q = currentPracticeQ();
      if (!q || state.practiceSubmitted[q.id] || state.practiceShowAll) return;
      if (state.practiceReveal[q.id]) delete state.practiceReveal[q.id];
      else state.practiceReveal[q.id] = true;
      renderPractice();
    });
    $("#chk-practice-showall").addEventListener("change", (e) => {
      state.practiceShowAll = !!e.target.checked;
      saveShowAll(state.practiceShowAll);
      if (state.mode === "practice") renderPractice();
    });
    $("#btn-practice-shuffle").addEventListener("click", togglePracticeShuffle);
    $("#btn-practice-next").addEventListener("click", () => {
      if (state.practiceIndex < state.practiceList.length - 1) {
        state.practiceIndex++;
        renderPractice();
      }
    });
    $("#btn-practice-prev").addEventListener("click", () => {
      if (state.practiceIndex > 0) {
        state.practiceIndex--;
        renderPractice();
      }
    });
    $("#btn-practice-skip").addEventListener("click", () => {
      if (state.practiceIndex < state.practiceList.length - 1) {
        state.practiceIndex++;
        renderPractice();
      }
    });
    $("#btn-practice-flag").addEventListener("click", () => {
      const q = currentPracticeQ();
      if (!q) return;
      if (state.practiceFlags[q.id]) delete state.practiceFlags[q.id];
      else state.practiceFlags[q.id] = true;
      saveProgress();
      if (state.practiceFilter === "flagged") {
        const curId = q.id;
        state.practiceList = questionsByFilter("flagged");
        applyPracticeOrder();
        let i = state.practiceList.findIndex((x) => x.id === curId);
        if (i < 0) i = Math.min(state.practiceIndex, Math.max(0, state.practiceList.length - 1));
        state.practiceIndex = state.practiceList.length ? i : 0;
      }
      renderPractice();
    });
    $("#btn-practice-reset").addEventListener("click", resetPracticeFilter);
    $("#practice-jump").addEventListener("submit", (e) => {
      e.preventDefault();
      const inp = $("#practice-jump-input");
      if (jumpToQuestionNumber(parseJumpInput(inp ? inp.value : "")) && inp) inp.blur();
    });
    $("#practice-jump-input").addEventListener("input", () => {
      const h = $("#practice-jump-hint");
      if (h && h.classList.contains("warn")) setJumpHint("");
    });
    $("#practice-jump-select").addEventListener("change", (e) => {
      const n = parseInt(e.target.value, 10);
      if (n) jumpToQuestionNumber(n);
    });

    $("#btn-exam-config-back").addEventListener("click", () => showView("home"));
    $("#btn-exam-start").addEventListener("click", startExam);
    $("#btn-exam-back").addEventListener("click", () => {
      if (!state.examSubmitted) {
        if (!confirm(t().confirmLeave)) return;
        clearExamProgress();
        if (state.examTimerId) clearInterval(state.examTimerId);
        state.examTimerId = null;
        // Unfinished exam discarded; previous saved last-exam result kept
        state.examQuestions = [];
        state.examAnswers = {};
        state.examFlags = {};
        state.examResult = null;
        loadExamLast();
      } else {
        saveExamLast();
      }
      renderHome();
    });
    $("#btn-exam-prev").addEventListener("click", () => {
      if (state.examIndex > 0 && !examLocked(state.examIndex - 1)) {
        state.examIndex--;
        renderExam();
      }
    });
    $("#btn-exam-next").addEventListener("click", () => {
      if (!state.examSubmitted && (state.examIndex >= state.examQuestions.length - 1 || examLocked(state.examIndex + 1))) {
        openExamReview();
        return;
      }
      if (state.examIndex < state.examQuestions.length - 1) {
        state.examIndex++;
        renderExam();
      }
    });
    $("#btn-exam-flag").addEventListener("click", () => {
      const q = currentExamQ();
      if (!q) return;
      state.examFlags[q.id] = !state.examFlags[q.id];
      renderExam();
    });
    $("#btn-exam-submit").addEventListener("click", () => openExamReview());
    $("#btn-exam-to-result").addEventListener("click", () => {
      showView("result");
      renderResult();
    });
    $("#btn-result-review").addEventListener("click", () => {
      state.revealed = true;
      state.examIndex = 0;
      showView("exam");
      renderExam();
    });
    $("#btn-result-home").addEventListener("click", () => {
      // Keep exam result + wrong bank; only explicit reset / new exam clears last score UI
      saveExamLast();
      renderHome();
    });
    $("#btn-result-retry").addEventListener("click", openExamConfig);

    document.addEventListener("keydown", onKey);
    const examLive = () => state.mode === "exam" && !state.examSubmitted && state.examTimerId;
    document.addEventListener("visibilitychange", () => { if (!examLive()) return; if (document.hidden) saveExamProgress(); else tickExam(); });
    window.addEventListener("pagehide", () => { if (examLive()) saveExamProgress(); });
    try { if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => {}); } catch (err) {}
    const bl = document.getElementById("boot-loader");
    if (bl) bl.remove();
    document.body.classList.toggle("touch", "ontouchstart" in window || navigator.maxTouchPoints > 0);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
