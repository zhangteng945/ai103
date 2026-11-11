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
