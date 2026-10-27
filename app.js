/* AI-103 Practice App — Teng */
(function () {
  "use strict";

  const STORAGE_KEY = "ai103_practice_v3";
  const EXAM_STORAGE_KEY = "ai103_exam_last_v1";
  const LANG_KEY = "ai103-lang";
  const SHOWANS_KEY = "ai103-showans";
  const QORDER_KEY = "ai103-qorder";
  const DOMAIN_ORDER = ["plan", "genai", "vision", "text", "extract"];
  const DOMAIN_WEIGHTS = { plan: 0.275, genai: 0.325, vision: 0.125, text: 0.125, extract: 0.125 };
  const PASS_SCORE = 700;

  /* Lang: zh | en | both — default 对照 */
  const I18N = {
    zh: {
      brandTitle: "AI-103 练习助手 · 187题中英对照",
      brandSub: "Developing AI Apps and Agents on Azure · 可切换中/英/对照",
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
      examConfigIntro: "按官方领域权重近似抽题，题目与选项顺序随机打乱。考试过程中不显示对错。",
      examCount: "题目数量",
      examMinutes: "考试时长（分钟）",
      examCount30: "30 题",
      examCount50: "50 题（默认）",
      examCount60: "60 题",
      back: "← 返回",
      startExam: "开始考试",
      leaveExam: "← 离开",
      examNavHint: "题目导航（点击跳转；底边高亮 = 已标记）",
      flagShort: "标记",
      unflagShort: "取消标记",
      handIn: "交卷",
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
        "正确 " + c + " / " + t + "（" + pct + "%）· 及格线 " + PASS_SCORE + " / 1000 · " +
        (pass ? "及格" : "未及格") + (auto ? " · 时间到自动交卷" : ""),
      confirmReset: "确定重置当前筛选范围内的练习进度（作答与标记）？",
      confirmLeave: "离开将放弃本场模拟考试（进度不保存）。确定？",
      confirmHandInUnanswered: (n) => "还有 " + n + " 题未作答，确定交卷？",
      confirmHandIn: "确定交卷并查看成绩？",
      kbdPractice: "选择 · Enter 提交 / 下一题",
      kbdExam: "选择 · Enter 下一题",
      foot: "AI-103 练习助手 · 187 题（PDF 题源）· 本地运行 · 进度保存在浏览器 localStorage",
    },
    en: {
      brandTitle: "AI-103 Practice · 187 bilingual questions",
      brandSub: "Developing AI Apps and Agents on Azure · CN / EN / Both",
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
      examConfigIntro: "Sampled by domain weights; order shuffled. No feedback until you finish.",
      examCount: "Question count",
      examMinutes: "Duration (minutes)",
      examCount30: "30 questions",
      examCount50: "50 questions (default)",
      examCount60: "60 questions",
      back: "← Back",
      startExam: "Start exam",
      leaveExam: "← Leave",
      examNavHint: "Navigator (click to jump; bottom highlight = flagged)",
      flagShort: "Flag",
      unflagShort: "Unflag",
      handIn: "Submit exam",
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
        "Correct " + c + " / " + t + " (" + pct + "%) · Pass " + PASS_SCORE + " / 1000 · " +
        (pass ? "PASS" : "FAIL") + (auto ? " · Auto-submitted (time up)" : ""),
      confirmReset: "Reset practice progress for the current filter (answers & flags)?",
      confirmLeave: "Leave and discard this mock exam (not saved)?",
      confirmHandInUnanswered: (n) => n + " unanswered — submit anyway?",
      confirmHandIn: "Submit and view score?",
      kbdPractice: "select · Enter submit / next",
      kbdExam: "select · Enter next",
      foot: "AI-103 Practice · 187 questions (PDF) · local · progress in localStorage",
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
      const m = JSON.parse(localStorage.getItem(QORDER_KEY) || "{}");
      if (m && typeof m === "object") return m;
    } catch (e) {}
    return {};
  }
  function saveOrderMap(m) {
    try {
      localStorage.setItem(QORDER_KEY, JSON.stringify(m));
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
  function pickText(zh, en) {
    const z = zh || en || "";
    const e = en || zh || "";
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
    const zh = q.caseStudyTextZh || q.caseStudyText || "";
    const en = q.caseStudyTextEn || "";
    if (state.lang === "zh") return zh || en;
    if (state.lang === "en") return en || zh;
    // both: ZH then EN stacked
    if (zh && en && zh !== en) return zh + "\n\n—\n\n" + en;
    return zh || en;
  }
  function optionText(opt) {
    return pickText(opt.textZh || opt.text, opt.textEn || opt.text);
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
    if (state.lang === "en") return q.explanationEn || q.explanation || "";
    if (state.lang === "zh") return q.explanationZh || q.explanation || "";
    const zh = q.explanationZh || q.explanation || "";
    const en = q.explanationEn || "";
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

  function showView(name) {
    Object.keys(views).forEach((k) => {
      views[k].classList.toggle("hidden", k !== name);
    });
    state.mode = name;
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
      const raw = localStorage.getItem(STORAGE_KEY);
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
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          answers: state.practiceAnswers,
          submitted: state.practiceSubmitted,
          flags: flags,
          wrongIds: wrongIds,
        })
      );
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

  function questionsByFilter(filter) {
    if (filter === "flagged") {
      return QUESTIONS.filter((q) => !!state.practiceFlags[q.id]);
    }
    if (filter === "wrong") {
      return QUESTIONS.filter((q) => !!state.wrongIds[q.id]);
    }
    if (filter === "all" || !filter) return QUESTIONS.slice();
    return byDomain(filter);
  }

  function saveExamLast() {
    try {
      if (!state.examResult) return;
      const r = state.examResult;
      localStorage.setItem(
        EXAM_STORAGE_KEY,
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
    } catch (e) {
      /* ignore */
    }
  }

  function loadExamLast() {
    try {
      const raw = localStorage.getItem(EXAM_STORAGE_KEY);
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
      return !!localStorage.getItem(EXAM_STORAGE_KEY);
    } catch (e) {
      return false;
    }
  }

  /** Read last exam summary without mutating in-progress exam state. */
  function peekExamLast() {
    try {
      const raw = localStorage.getItem(EXAM_STORAGE_KEY);
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
    if (q.type === "multi") return "multi";
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
    const counts = domainCounts();
    $("#stat-total").textContent = QUESTIONS.length;
    DOMAIN_ORDER.forEach((d) => {
      const el = $("#stat-" + d);
      if (el) el.textContent = counts[d];
    });
    applyChrome();
    updateHomeReviewButtons();
    showView("home");
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
    setTxt(".brand h1", pack.brandTitle);
    setTxt(".brand .sub", pack.brandSub);
    document.title = pack.brandTitle;
    setTxt("#view-home h2", pack.homeTitle);
    const intro = $("#view-home > p.muted");
    if (intro) intro.textContent = pack.homeIntro;
    const stats = $$("#view-home .stat .l");
    const statLabels = [pack.statAll, pack.statPlan, pack.statGenai, pack.statVision, pack.statText, pack.statExtract];
    stats.forEach((el, i) => {
      if (statLabels[i]) el.textContent = statLabels[i];
    });
    const bp = $("#btn-go-practice");
    if (bp) {
      bp.innerHTML = pack.btnPractice + '<span class="desc">' + pack.btnPracticeDesc + "</span>";
    }
    const be = $("#btn-go-exam");
    if (be) {
      be.innerHTML = pack.btnExam + '<span class="desc">' + pack.btnExamDesc + "</span>";
    }
    const note = $("#view-home .note");
    if (note) note.textContent = pack.homeNote;
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
          else if (pack.domain[opt.value]) opt.textContent = pack.domain[opt.value];
        });
      }
    }
    updateHomeReviewButtons();
    const kbdP = $("#view-practice .kbd-hint");
    if (kbdP) kbdP.innerHTML = "<kbd>1</kbd>–<kbd>6</kbd> " + pack.kbdPractice;
    setTxt("#view-exam-config h2", pack.examConfigTitle);
    const exIntro = $("#view-exam-config > p.muted");
    if (exIntro) exIntro.textContent = pack.examConfigIntro;
    const exLabs = $$("#view-exam-config .exam-config label > span");
    if (exLabs[0]) exLabs[0].textContent = pack.examCount;
    if (exLabs[1]) exLabs[1].textContent = pack.examMinutes;
    const countSel = $("#exam-count");
    if (countSel) {
      const o = countSel.options;
      if (o[0]) o[0].textContent = pack.examCount30;
      if (o[1]) o[1].textContent = pack.examCount50;
      if (o[2]) o[2].textContent = pack.examCount60;
    }
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
    applyChrome();
    if (state.mode === "home") renderHome();
    else if (state.mode === "practice") renderPractice();
    else if (state.mode === "examConfig") {
      applyChrome();
      showView("examConfig");
    } else if (state.mode === "exam") renderExam();
    else if (state.mode === "result") {
      applyChrome();
      renderResult();
    }
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
      if (q.type === "multi") {
        html += '<p class="muted" style="margin-bottom:0.75rem">' + escapeHtml(pack.pickMulti) + "</p>";
      }
      html += '<div class="options" id="practice-options">';
      (q.options || []).forEach((opt) => {
        const isSel = (shownSel || []).indexOf(opt.id) >= 0;
        let cls = "option";
        if (isSel) cls += " selected";
        if (showing) {
          if ((q.answer || []).indexOf(opt.id) >= 0) cls += " correct";
          else if (isSel) cls += " wrong";
        }
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
          "</span></button>";
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
        formatMultiline(explanationOf(q)) +
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
    if (q.type === "single") {
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
    if (isPracticeRevealed(q)) return; // revealed answers are never scored
    if (!allBoxesSelected(q, sel)) return;
    state.practiceSubmitted[q.id] = true;
    if (isCorrect(q, sel)) delete state.wrongIds[q.id];
    else state.wrongIds[q.id] = true;
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
  function openExamConfig() {
    applyChrome();
    showView("examConfig");
  }

  function startExam() {
    const count = parseInt($("#exam-count").value, 10) || 50;
    const minutes = parseInt($("#exam-minutes").value, 10) || 90;
    const n = Math.min(count, QUESTIONS.length);
    state.examQuestions = weightedSample(n);
    state.examIndex = 0;
    state.examAnswers = {};
    state.examFlags = {};
    state.examSubmitted = false;
    state.examResult = null;
    state.revealed = false;
    state.examSecondsLeft = minutes * 60;
    if (state.examTimerId) clearInterval(state.examTimerId);
    state.examTimerId = setInterval(tickExam, 1000);
    showView("exam");
    renderExam();
    updateTimerDisplay();
  }

  function tickExam() {
    state.examSecondsLeft--;
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

    let html = "";
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
    if (q.caseStudy && q.caseStudyText) {
      html += '<details class="case-box"><summary>' + escapeHtml(pack.caseSummary) + '</summary><div class="case-body">' +
        formatMultiline(caseStudyTextOf(q)) + "</div></details>";
    }
    html += '<div class="stem">' + formatStem(stemOf(q)) + "</div>";
    if (isBoxQ(q)) {
      html += '<p class="muted" style="margin-bottom:0.75rem">' + escapeHtml(pickHintFor(q, pack)) + "</p>";
      html += renderBoxesHtml(q, selected, reviewMode, "exam");
    } else {
      if (q.type === "multi") {
        html += '<p class="muted" style="margin-bottom:0.75rem">' + escapeHtml(pack.pickMulti) + "</p>";
      }
      html += '<div class="options" id="exam-options">';
      (q.options || []).forEach((opt) => {
        const isSel = (selected || []).indexOf(opt.id) >= 0;
        let cls = "option";
        if (isSel) cls += " selected";
        if (reviewMode) {
          if ((q.answer || []).indexOf(opt.id) >= 0) cls += " correct";
          else if (isSel) cls += " wrong";
        }
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
          "</span></button>";
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
        formatMultiline(explanationOf(q)) +
        "</div></div>";
    }

    $("#exam-body").innerHTML = html;

    let grid = "";
    state.examQuestions.forEach((eq, i) => {
      let cls = "";
      if (i === state.examIndex) cls += " current";
      if (allBoxesSelected(eq, state.examAnswers[eq.id])) cls += " answered";
      if (state.examFlags[eq.id]) cls += " flagged";
      if (reviewMode) {
        const ok = isCorrect(eq, state.examAnswers[eq.id]);
        cls += ok ? " right-mark" : " wrong-mark";
      }
      grid +=
        '<button type="button" class="' +
        cls.trim() +
        '" data-i="' +
        i +
        '">' +
        (i + 1) +
        "</button>";
    });
    $("#exam-grid").innerHTML = grid;
    $$("#exam-grid button").forEach((b) => {
      b.addEventListener("click", () => {
        state.examIndex = parseInt(b.getAttribute("data-i"), 10);
        renderExam();
      });
    });

    $("#btn-exam-flag").textContent = flagged ? pack.unflagShort : pack.flagShort;
    $("#btn-exam-prev").disabled = state.examIndex <= 0;
    $("#btn-exam-next").disabled = state.examIndex >= state.examQuestions.length - 1;
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

    let correct = 0;
    const byDom = {};
    DOMAIN_ORDER.forEach((d) => {
      byDom[d] = { total: 0, correct: 0, label: "" };
    });
    const wrongList = [];
    state.examQuestions.forEach((q) => {
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
    const score1000 = Math.round(pct * 1000);
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
    // Merge exam misses into persistent wrong bank (survives 回首页)
    wrongList.forEach((q) => {
      state.wrongIds[q.id] = true;
    });
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
    DOMAIN_ORDER.forEach((d) => {
      const x = r.byDom[d];
      if (!x.total) return;
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
          '<div class="r-expl">' + formatMultiline(explanationOf(q)) + "</div>";
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
    const map = { Digit1: "A", Digit2: "B", Digit3: "C", Digit4: "D", Digit5: "E", Digit6: "F",
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
        if (state.examIndex < state.examQuestions.length - 1) {
          state.examIndex++;
          renderExam();
        }
      }
    }
  }

  /* Wire UI */
  function init() {
    if (typeof QUESTIONS === "undefined" || !QUESTIONS.length) {
      document.body.innerHTML =
        "<p style='padding:2rem;color:#fff'>题库加载失败：未找到 QUESTIONS。</p>";
      return;
    }
    loadProgress();
    loadExamLast();
    applyChrome();
    renderHome();

    $$(".lang-toggle button").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
    });

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
      if (state.examIndex > 0) {
        state.examIndex--;
        renderExam();
      }
    });
    $("#btn-exam-next").addEventListener("click", () => {
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
    $("#btn-exam-submit").addEventListener("click", () => finishExam(false));
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
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
