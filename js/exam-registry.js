/**
 * Multi-exam registry for IT认证练习.
 * Banks: AI-103, DOP-C02, DP-700, DP-420, AZ-305, DVA-C02.
 * Mock settings aligned to official exam pages/guides; sources and query date 2026-11-10 are in per-exam comments.
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
      // 官方查询日期 2026-11-10。
      // 题量：官方未公布。Microsoft 说明大多数认证考试通常为 40–60 题，数量会随更新变化。
      //   来源：https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience
      // 时长：官方认证页写明 120 分钟完成本次评估（可能含交互/实验组件）。
      //   来源：https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-and-agents-developer-associate/
      // 分数范围：1–1000；及格线：700。
      //   来源：https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports
      // 保留既有 specialExam58 与默认 58 题结构（48 普通 + 3 判断组 + 7 案例），不因官方未公布题量而改动该特殊逻辑。
      mockDefaultCount: 58,
      mockCounts: [30, 40, 50, 58, 60],
      mockDefaultMinutes: 120,
      mockMinutes: [60, 90, 120],
      passScore: 700,
      scoreMin: 1,
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
      // 官方查询日期 2026-11-10。
      // 题量：75 题（65 计分 + 10 不计分）；时长：180 分钟；分数范围：100–1000；及格线：750。
      // 来源：https://aws.amazon.com/certification/certified-devops-engineer-professional/
      //       https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html
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
    {
      id: "dp-700",
      title: "DP-700",
      shortLabel: "DP-700",
      subtitleZh: "Implementing Data Engineering Solutions Using Microsoft Fabric",
      subtitleEn: "Implementing Data Engineering Solutions Using Microsoft Fabric",
      // 官方查询日期 2026-11-10。
      // 题量：官方未公布。Microsoft 说明大多数认证考试通常为 40–60 题；本站默认 50，选项含 40/50/60。
      // 时长：官方认证页写明 100 分钟完成本次评估（可能含交互组件）。
      // 分数范围：1–1000；及格线：700。
      // 来源：https://learn.microsoft.com/en-us/credentials/certifications/fabric-data-engineer-associate/
      //       https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-700
      //       https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience
      //       https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports
      mockDefaultCount: 50,
      mockCounts: [30, 40, 50, 60],
      mockDefaultMinutes: 100,
      mockMinutes: [60, 100, 120],
      passScore: 700,
      scoreMin: 1,
      specialExam58: false,
      domainOrder: ["implement", "ingest", "monitor"],
      domainWeights: {"implement": 0.325, "ingest": 0.325, "monitor": 0.325},
      domainLabelsZh: {"implement": "实施和管理分析解决方案 (估)", "ingest": "引入和转换数据 (估)", "monitor": "监视和优化分析解决方案 (估)"},
      domainLabelsEn: {"implement": "Implement & manage an analytics solution (est.)", "ingest": "Ingest & transform data (est.)", "monitor": "Monitor & optimize an analytics solution (est.)"},
      statMode: "domains",
      legacyPracticeKey: null,
      legacyExamLastKey: null,
      legacyQOrderKey: null,
      getQuestions: function () {
        return global.QUESTIONS_DP_700 || [];
      },
    },
    {
      id: "dp-420",
      title: "DP-420",
      shortLabel: "DP-420",
      subtitleZh: "Designing and Implementing Cloud-Native Applications Using Microsoft Azure Cosmos DB",
      subtitleEn: "Designing and Implementing Cloud-Native Applications Using Microsoft Azure Cosmos DB",
      // 官方查询日期 2026-11-10。
      // 题量：官方未公布。Microsoft 说明大多数认证考试通常为 40–60 题；本站默认 50，选项含 40/50/60。
      // 时长：官方认证页写明 100 分钟完成本次评估（可能含交互组件）。
      // 分数范围：1–1000；及格线：700。
      // 来源：https://learn.microsoft.com/en-us/credentials/certifications/azure-cosmos-db-developer-specialty/
      //       https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-420
      //       https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience
      //       https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports
      mockDefaultCount: 50,
      mockCounts: [30, 40, 50, 60],
      mockDefaultMinutes: 100,
      mockMinutes: [60, 100, 120],
      passScore: 700,
      scoreMin: 1,
      specialExam58: false,
      domainOrder: ["design", "secure", "ai"],
      domainWeights: {"design": 0.425, "secure": 0.325, "ai": 0.225},
      domainLabelsZh: {"design": "设计和开发数据库解决方案 (估)", "secure": "保护、优化和部署数据库解决方案 (估)", "ai": "实现 AI 和分析功能 (估)"},
      domainLabelsEn: {"design": "Design & develop database solutions (est.)", "secure": "Secure, optimize & deploy database solutions (est.)", "ai": "Implement AI & analytics capabilities (est.)"},
      statMode: "domains",
      legacyPracticeKey: null,
      legacyExamLastKey: null,
      legacyQOrderKey: null,
      getQuestions: function () {
        return global.QUESTIONS_DP_420 || [];
      },
    },
    {
      id: "az305",
      title: "AZ-305",
      shortLabel: "AZ-305",
      subtitleZh: "设计 Microsoft Azure 基础结构解决方案",
      subtitleEn: "Designing Microsoft Azure Infrastructure Solutions",
      // 官方查询日期 2026-11-10。
      // 题量：官方未公布。Microsoft 说明大多数认证考试通常为 40–60 题；本站默认 50，选项含 40/50/60。
      // 时长：考试页未单独列出分钟数。按官方「无实验的角色类 Associate/Expert 考试」考试时长 100 分钟（座位时长 120 分钟）。
      //   AZ-305 为架构设计类考试，按无实验类别处理。模考默认改为 100 分钟（此前 120 为座位时长）。
      // 分数范围：1–1000；及格线：700（考试页写明 Passing score: 700）。
      // 来源：https://learn.microsoft.com/en-us/credentials/certifications/exams/az-305/
      //       https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-305
      //       https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience
      //       https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports
      mockDefaultCount: 50,
      mockCounts: [30, 40, 50, 60],
      mockDefaultMinutes: 100,
      mockMinutes: [60, 100, 120],
      passScore: 700,
      scoreMin: 1,
      specialExam58: false,
      domainOrder: [],
      domainWeights: {},
      domainLabelsZh: {"Topic 1":"主题1","Topic 2":"主题2","Topic 3":"主题3","Topic 4":"主题4","Topic 5":"主题5","Topic 6":"主题6","Topic 7":"主题7","Topic 8":"主题8","Topic 9":"主题9","Topic 10":"主题10","Topic 11":"主题11","Topic 12":"主题12","Topic 13":"主题13","Topic 14":"主题14","Topic 15":"主题15","Topic 16":"主题16"},
      domainLabelsEn: {},
      statMode: "types",
      getQuestions: function () {
        return global.QUESTIONS_AZ305 || [];
      },
    },
    {
      id: "dva-c02",
      title: "DVA-C02",
      shortLabel: "DVA-C02",
      subtitleZh: "AWS Certified Developer – Associate",
      subtitleEn: "AWS Certified Developer – Associate",
      // 官方查询日期 2026-11-10。
      // 题量：65 题（50 计分 + 15 不计分）；时长：130 分钟；分数范围：100–1000；及格线：720。
      // 来源：https://aws.amazon.com/certification/certified-developer-associate/
      //       https://docs.aws.amazon.com/pdfs/aws-certification/latest/developer-associate-02/developer-associate-02.pdf
      mockDefaultCount: 65,
      mockCounts: [30, 50, 65],
      mockDefaultMinutes: 130,
      mockMinutes: [60, 130],
      passScore: 720,
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
        return global.QUESTIONS_DVA_C02 || [];
      },
    },
  ];

  function list() {
    return EXAMS.slice();
  }

  function listAll() {
    return EXAMS.slice();
  }

  function canAccess(/* id */) {
    return true;
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
    listAll: listAll,
    canAccess: canAccess,
    get: get,
    loadSavedExamId: loadSavedExamId,
    saveExamId: saveExamId,
    practiceKey: practiceKey,
    examLastKey: examLastKey,
    qOrderKey: qOrderKey,
    defaultId: "ai103",
  };
})(typeof window !== "undefined" ? window : globalThis);
