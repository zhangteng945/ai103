/**
 * Multi-exam registry for IT认证练习.
 * Banks: AI-103 (questions.js → QUESTIONS_AI103), DOP-C02 (banks/questions-dop-c02.js).
 */
(function (global) {
  "use strict";

  var EXAM_ID_KEY = "itcert_exam_id_v1";

  var EXAMS = [
    {
      id: "ai103",
      title: "AI-103",
      shortLabel: "AI-103",
      subtitleZh: "Developing AI Apps and Agents on Azure",
      subtitleEn: "Developing AI Apps and Agents on Azure",
      mockDefaultCount: 58,
      mockCounts: [30, 50, 58, 60],
      mockDefaultMinutes: 120,
      mockMinutes: [60, 90, 120],
      passScore: 700,
      scoreMin: 0,
      specialExam58: true,
      domainOrder: ["plan", "genai", "vision", "text", "extract"],
      domainWeights: {
        plan: 0.275,
        genai: 0.325,
        vision: 0.125,
        text: 0.125,
        extract: 0.125,
      },
      domainLabelsZh: {
        plan: "规划和管理 Azure AI 解决方案",
        genai: "实现生成式 AI 与智能体解决方案",
        vision: "实现计算机视觉解决方案",
        text: "实现文本分析解决方案",
        extract: "实现信息提取解决方案",
      },
      domainLabelsEn: {
        plan: "Plan & manage Azure AI solutions",
        genai: "Generative AI & agents",
        vision: "Computer vision",
        text: "Text analysis",
        extract: "Information extraction",
      },
      statMode: "domains",
      legacyPracticeKey: "ai103_practice_v3",
      legacyExamLastKey: "ai103_exam_last_v1",
      legacyQOrderKey: "ai103-qorder",
      getQuestions: function () {
        return global.QUESTIONS_AI103 || global.QUESTIONS || [];
      },
    },
    {
      id: "dop-c02",
      title: "DOP-C02",
      shortLabel: "DOP-C02",
      subtitleZh: "AWS Certified DevOps Engineer – Professional",
      subtitleEn: "AWS Certified DevOps Engineer – Professional",
      mockDefaultCount: 75,
      mockCounts: [30, 50, 75, 100],
      mockDefaultMinutes: 180,
      mockMinutes: [90, 180, 210],
      passScore: 750,
      scoreMin: 100,
      specialExam58: false,
      domainOrder: [],
      domainWeights: {},
      domainLabelsZh: {},
      domainLabelsEn: {},
      statMode: "types",
      legacyPracticeKey: null,
      legacyExamLastKey: null,
      legacyQOrderKey: null,
      getQuestions: function () {
        return global.QUESTIONS_DOP_C02 || [];
      },
    },
  ];

  function list() {
    return EXAMS.slice();
  }

  function get(id) {
    for (var i = 0; i < EXAMS.length; i++) {
      if (EXAMS[i].id === id) return EXAMS[i];
    }
    return EXAMS[0];
  }

  function loadSavedExamId() {
    try {
      var v = global.localStorage && localStorage.getItem(EXAM_ID_KEY);
      if (v && get(v) && get(v).id === v) return v;
    } catch (e) {}
    return "ai103";
  }

  function saveExamId(id) {
    try {
      if (global.localStorage) localStorage.setItem(EXAM_ID_KEY, id);
    } catch (e) {}
  }

  function practiceKey(examId) {
    return "itcert_practice_v1_" + examId;
  }

  function examLastKey(examId) {
    return "itcert_exam_last_v1_" + examId;
  }

  function qOrderKey(examId) {
    return "itcert_qorder_v1_" + examId;
  }

  global.ITCERT_EXAMS = {
    EXAM_ID_KEY: EXAM_ID_KEY,
    list: list,
    get: get,
    loadSavedExamId: loadSavedExamId,
    saveExamId: saveExamId,
    practiceKey: practiceKey,
    examLastKey: examLastKey,
    qOrderKey: qOrderKey,
    defaultId: "ai103",
  };
})(typeof window !== "undefined" ? window : globalThis);
