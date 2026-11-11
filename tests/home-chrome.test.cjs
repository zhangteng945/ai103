const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");

test("首页去掉语言切换，刷题页保留；退出入口仍在首页", () => {
  assert.match(html, /<body class="view-home">/);
  assert.match(html, /class="lang-toggle"/);
  assert.match(html, /data-lang="zh"/);
  assert.match(html, /data-lang="en"/);
  assert.match(html, /data-lang="both"/);
  assert.match(html, /id="btn-auth-logout"/);
  assert.match(css, /body\.view-home \.lang-toggle/);
  assert.match(css, /body\.view-auth \.lang-toggle/);
  assert.match(css, /body\.auth-ok #btn-acct-toggle/);
  assert.match(app, /function setBodyView\(name\)/);
  assert.match(app, /setBodyView\(name\)/);
  assert.match(app, /setBodyView\("auth"\)/);
  assert.match(app, /if \(name !== "home"\) document\.body\.classList\.remove\("acct-open"\)/);
});

test("语言偏好仍读写 ai103-lang，默认逻辑未改", () => {
  assert.match(app, /const LANG_KEY = "ai103-lang"/);
  const loadStart = app.indexOf("function loadLang()");
  const loadEnd = app.indexOf("\n  }", loadStart);
  const loadBody = app.slice(loadStart, loadEnd + 4);
  assert.match(loadBody, /localStorage\.getItem\(LANG_KEY\)/);
  assert.match(loadBody, /return "both"/);
  const saveStart = app.indexOf("function saveLang(v)");
  const saveEnd = app.indexOf("\n  }", saveStart);
  const saveBody = app.slice(saveStart, saveEnd + 4);
  assert.match(saveBody, /localStorage\.setItem\(LANG_KEY, v\)/);
});

test("setBodyView 只在首页显示账号，离开首页关闭账号面板", () => {
  const start = app.indexOf("function setBodyView(name) {");
  assert.notEqual(start, -1);
  const end = app.indexOf("\n  }", start);
  const body = app.slice(start, end + 4);
  const classes = new Set(["view-home"]);
  const ctx = {
    BODY_VIEW_MODES: ["home", "practice", "examConfig", "exam", "result", "auth"],
    document: {
      body: {
        classList: {
          toggle(name, on) {
            if (on) classes.add(name);
            else classes.delete(name);
          },
          remove(name) {
            classes.delete(name);
          },
        },
      },
    },
  };
  vm.createContext(ctx);
  vm.runInContext(body, ctx);
  ctx.setBodyView("practice");
  assert.deepEqual(
    [...classes].sort(),
    ["view-practice"]
  );
  classes.add("acct-open");
  ctx.setBodyView("home");
  assert.ok(classes.has("view-home"));
  assert.ok(classes.has("acct-open"));
  assert.ok(!classes.has("view-practice"));
  ctx.setBodyView("exam");
  assert.ok(!classes.has("acct-open"));
  assert.ok(classes.has("view-exam"));
  assert.ok(!classes.has("view-home"));
});

test("登录后账号内容直接铺在首页卡片，刷题页不显示", () => {
  const authIdx = html.indexOf('id="auth-panel"');
  const topbarStart = html.indexOf('<header class="topbar">');
  const topbarEnd = html.indexOf("</header>");
  const homeIdx = html.indexOf('id="view-home"');
  assert.notEqual(authIdx, -1);
  assert.ok(authIdx > topbarEnd, "auth-panel should be outside the topbar");
  assert.ok(authIdx < homeIdx, "auth-panel should sit above the exam list");
  assert.match(html, /id="btn-auth-logout"/);
  assert.match(html, /id="auth-status"/);
  assert.match(css, /body\.auth-ok\.view-home #auth-panel/);
  assert.match(css, /body\.auth-ok:not\(\.view-home\) #auth-panel/);
  const auth = fs.readFileSync(path.join(root, "js/account-auth.js"), "utf8");
  assert.match(auth, /if \(tg\) tg\.classList\.add\("hidden"\)/);
  assert.doesNotMatch(auth, /tg\.textContent = "账号"/);
  assert.doesNotMatch(auth, /body\.auth-ok #auth-panel\{display:none!important\}/);
  assert.match(auth, /id='btn-sync-upload'/);
  assert.match(auth, /id='btn-sync-download'/);
});

const auth = fs.readFileSync(path.join(root, "js/account-auth.js"), "utf8");

test("首页账号卡片按钮单行排列，管理后台与进度按钮同一行", () => {
  const start = css.indexOf("body.auth-ok.view-home .sync-ctl {");
  assert.notEqual(start, -1);
  const end = css.indexOf("}", start);
  const body = css.slice(start, end + 1);
  assert.match(body, /flex-wrap:\s*nowrap/);
  assert.doesNotMatch(body, /flex-wrap:\s*wrap/);
  assert.match(css, /body\.auth-ok\.view-home #btn-auth-logout/);
  assert.match(auth, /placeAdminBtn/);
  assert.match(auth, /ctl\.insertBefore\(btn, lo\)/);
  assert.doesNotMatch(auth, /adminBtn\.style\.marginTop = "\.35rem"/);
});

test("首页去掉说明文案，页脚只保留星火署名", () => {
  assert.match(html, /<h2>题库概览<\/h2>/);
  assert.match(html, /id="exam-switcher"/);
  assert.doesNotMatch(html, /id="home-intro"/);
  assert.doesNotMatch(html, /exam-bank-hint/);
  assert.doesNotMatch(html, /id="home-stats"/);
  assert.match(html, /id="home-analysis"/);
  assert.equal((html.match(/题源来自你提供的 PDF/g) || []).length, 0);
  assert.doesNotMatch(html, /按领域筛选 · 即时反馈与解析/);
  assert.doesNotMatch(html, /限时抽题 · 结束计分/);
  assert.doesNotMatch(html, /及格线参考/);
  assert.doesNotMatch(html, /class="kbd-hint"/);
  assert.match(html, /id="exam-nav-legend"/);
  assert.match(html, /id="exam-config-rules"/);
  assert.doesNotMatch(html, /真实考试结构：48 道普通题/);
  assert.doesNotMatch(html, /进度按题库隔离保存在本机/);
  assert.match(html, /<span class="foot-author">星火<\/span>/);
  assert.doesNotMatch(html, /foot-text/);
  assert.doesNotMatch(app, /intro\.textContent = pack\.homeIntro/);
  assert.doesNotMatch(app, /setTxt\("\.app-foot \.foot-text"/);
  assert.match(app, /setTxt\("\.app-foot \.foot-author", "星火"\)/);
  assert.match(auth, /setSync\(""\)/);
});

test("首页成绩分析含模考图和分领域，并恢复目标日期搜索收藏", () => {
  const start = app.indexOf("function renderHomeExtras()");
  assert.notEqual(start, -1);
  const end = app.indexOf("function promptSearch()", start);
  const body = app.slice(start, end);
  assert.match(body, /成绩分析/);
  assert.match(body, /分领域正确率/);
  assert.match(body, /scoreChart/);
  assert.match(body, /暂无成绩数据/);
  assert.match(body, /今日目标/);
  assert.match(body, /考试日期/);
  assert.match(body, /data-hx="search"/);
  assert.match(body, /data-hx="favs"/);
  assert.match(body, /data-hx="goal"/);
  assert.match(css, /\.home-analysis\s*\{/);
  assert.match(css, /\.home-plan\s*\{/);
});

test("模拟考试旁显示题量时长满分及格，设置页为短规则，导航有已答未答标记图例", () => {
  assert.match(app, /function examMetaLine\(/);
  assert.match(app, /满分 1000 · 及格/);
  assert.match(app, /exam-meta-line/);
  assert.match(app, /function examRulesLines\(/);
  assert.match(app, /交卷后才显示答案/);
  assert.match(app, /离开考试将放弃本场进度/);
  assert.match(app, /fillExamConfigRules/);
  assert.match(html, /id="exam-config-rules"/);
  assert.match(html, /data-leg="answered"/);
  assert.match(html, /data-leg="unanswered"/);
  assert.match(html, /data-leg="flagged"/);
  assert.doesNotMatch(html, /class="kbd-hint"/);
  assert.equal((html.match(/题源来自你提供的 PDF/g) || []).length, 0);
});

test("账号卡片按钮下方有一行同步提示，且不换行", () => {
  assert.match(auth, /class='home-sync-hint muted'>进度不会自动同步，换设备请手动上传\/下载。/);
  const start = css.indexOf("body.auth-ok.view-home .home-sync-hint {");
  assert.notEqual(start, -1);
  const body = css.slice(start, css.indexOf("}", start) + 1);
  assert.match(body, /white-space:\s*nowrap/);
  assert.match(body, /font-size:\s*0\.72rem/);
});
