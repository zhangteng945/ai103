const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const repo = path.resolve('.');
const html = fs.readFileSync(path.join(repo, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(repo, 'styles.css'), 'utf8');
const app = fs.readFileSync(path.join(repo, 'app.js'), 'utf8');

test('首页去掉语言切换，刷题页保留语言切换和紧凑背题文案', () => {
  assert.match(html, /class="lang-toggle"/);
  assert.match(css, /body\.view-home \.lang-toggle/);
  assert.match(html, /class="showans-full"/);
  assert.match(html, /class="showans-short"/);
  assert.match(app, /#lbl-practice-showall \.showans-full/);
});

test('前台顶栏单行不换行，标题省略，副标题和作者不占顶栏', () => {
  const section = css.slice(css.indexOf('Frontend top chrome compact'));
  assert.match(section, /body\.auth-ok \.topbar {[\s\S]*?flex-wrap:\s*nowrap/);
  assert.match(section, /body\.auth-ok \.topbar \.brand h1 {[\s\S]*?text-overflow:\s*ellipsis/);
  assert.match(section, /body\.auth-ok \.topbar \.brand \.sub,[\s\S]*?display:\s*none/);
  assert.match(section, /\.practice-toolbar \.toolbar-row,[\s\S]*?flex-wrap:\s*nowrap/);
  assert.match(section, /\.exam-toolbar {[\s\S]*?flex-wrap:\s*nowrap/);
  assert.match(section, /\.showans-short \{ display: none/);
});

test('返回首页改为顶栏图标按钮，后台返回和刷新风格统一', () => {
  assert.match(html, /class="topbar-nav"/);
  assert.match(html, /id="btn-practice-back"[^>]*aria-label="返回首页"/);
  assert.match(html, /id="btn-exam-config-back"[^>]*aria-label="返回首页"/);
  assert.match(html, /id="btn-exam-back"[^>]*aria-label="离开考试"/);
  assert.doesNotMatch(html, /← 首页|← 返回|← 离开|← Home/);
  const practice = html.slice(html.indexOf('id="view-practice"'), html.indexOf('id="view-exam-config"'));
  assert.doesNotMatch(practice, /id="btn-practice-back"/);
  const exam = html.slice(html.indexOf('id="view-exam"'), html.indexOf('id="view-result"'));
  assert.doesNotMatch(exam, /id="btn-exam-back"/);
  const admin = fs.readFileSync(path.join(repo, 'admin.html'), 'utf8');
  assert.match(admin, /class="icon-btn"[^>]*href="index.html"[^>]*aria-label="返回首页"/);
  assert.match(admin, /id="btn-refresh"[^>]*aria-label="刷新列表"/);
  assert.doesNotMatch(admin, /← 返回练习站|act-short">返回</);
  assert.match(css, /\.icon-btn\s*\{/);
  assert.match(css, /body\.view-practice \.topbar-nav #btn-practice-back/);
  assert.match(css, /body\.view-practice \.topbar \.brand-icon/);
  assert.match(app, /setIconLabel\("#btn-practice-back"/);
  assert.doesNotMatch(app, /setTxt\("#btn-practice-back"/);
});
