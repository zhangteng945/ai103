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
