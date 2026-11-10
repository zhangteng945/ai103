const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { MockDocument, installDom } = require('./admin-dom-stub.cjs');

const repo = path.resolve('.');
const adminHtml = fs.readFileSync(path.join(repo, 'admin.html'), 'utf8');
const adminJs = fs.readFileSync(path.join(repo, 'js/admin.js'), 'utf8');
const css = fs.readFileSync(path.join(repo, 'styles.css'), 'utf8');
const pdfUi = fs.readFileSync(path.join(repo, 'js/pdf-import-ui.mjs'), 'utf8');

function plain(v) { return JSON.parse(JSON.stringify(v)); }

function loadAdmin() {
  const document = new MockDocument(adminHtml);
  const win = installDom(document, { ITCERT_ADMIN_NO_BOOT: true });
  vm.runInNewContext(adminJs, win);
  return { win, document, ui: win.ITCertAdminUI };
}

test('管理页保留原有入口，并增加手机卡片与操作面板', () => {
  for (const id of [
    'admin-who', 'admin-msg', 'admin-gate', 'admin-app', 'btn-refresh',
    'users-table', 'users-body', 'users-cards', 'create-form', 'c-user',
    'c-days', 'c-max', 'c-exams', 'c-all', 'reports-body', 'reports-cards',
    'tab-pdf', 'pdf-start', 'pdf-save', 'pdf-export', 'pdf-stop',
    'admin-overlay', 'admin-sheet', 'admin-sheet-title', 'admin-sheet-body',
    'admin-sheet-ok', 'admin-sheet-cancel'
  ]) {
    assert.ok(adminHtml.includes('id="' + id + '"'), id);
  }
  assert.match(adminHtml, /data-tab="users"/);
  assert.match(adminHtml, /data-tab="create"/);
  assert.match(adminHtml, /data-tab="reports"/);
  assert.match(adminHtml, /data-tab="pdf"/);
  assert.match(adminHtml, /tab-short">学员</);
  assert.match(adminHtml, /tab-short">开号</);
  assert.match(adminHtml, /tab-short">报错</);
  assert.match(adminHtml, /tab-short">导入</);
  assert.match(adminHtml, /作者：星火/);
  assert.match(adminHtml, /class="admin-page"/);
  assert.doesNotMatch(adminHtml, /<style>/);
});

test('学员与报错在窄屏用卡片，桌面保留表格', () => {
  assert.match(css, /\.admin-page \.admin-user-cards/);
  assert.match(css, /\.admin-user-card/);
  assert.match(css, /\.admin-report-card/);
  const section = css.slice(css.indexOf('Admin mobile operations'));
  assert.ok(section.length > 100, 'missing admin mobile CSS section');
  assert.match(section, /@media \(max-width: 760px\) \{[\s\S]*\.admin-users-table[\s\S]*display:\s*none/);
  assert.match(section, /@media \(max-width: 760px\) \{[\s\S]*\.admin-reports-table[^{]*\{[^}]*display:\s*none/);
  assert.match(section, /\.admin-user-cards/);
  assert.match(section, /min-height:\s*44px/);
});

test('操作面板替换 prompt/confirm，API 载荷形状保持不变', () => {
  assert.doesNotMatch(adminJs, /\bprompt\s*\(/);
  assert.doesNotMatch(adminJs, /\bconfirm\s*\(/);
  assert.match(adminJs, /openSheet/);
  assert.match(adminJs, /confirmSheet/);
  assert.match(adminJs, /data-act='more'/);
  assert.match(adminJs, /type='number' id='sheet-days'/);
  assert.match(adminJs, /type='date' id='sheet-until'/);
  assert.match(adminJs, /type='number' id='sheet-maxd'/);
  assert.match(adminJs, /sheet-exams/);
  assert.match(pdfUi, /ITCertAdminUI\.confirm/);

  const { ui } = loadAdmin();
  assert.ok(ui && ui.payload);
  assert.deepEqual(plain(ui.EXAM_OPTS), ['ai103', 'dop-c02', 'dp-700', 'dp-420', 'az305', '*']);
  assert.equal(ui.DEFAULT_DAYS, 30);
  assert.equal(ui.DEFAULT_MAX_DEVICES, 2);

  assert.deepEqual(plain(ui.payload.list()), { action: 'list', payload: {} });
  assert.deepEqual(plain(ui.payload.reports()), { action: 'reports', payload: { limit: 100 } });
  assert.deepEqual(plain(ui.payload.create('zhangsan', 30, 2, ['ai103'])), {
    action: 'create',
    payload: { username: 'zhangsan', days: 30, max_devices: 2, exams: ['ai103'] }
  });
  assert.deepEqual(plain(ui.payload.create('', '', '', ['*'])), {
    action: 'create',
    payload: { username: '', days: 30, max_devices: 2, exams: ['*'] }
  });
  assert.deepEqual(plain(ui.payload.renewDays('a@ai103.local', '30')), {
    action: 'renew', payload: { email: 'a@ai103.local', days: 30 }
  });
  assert.deepEqual(plain(ui.payload.renewUntil('a@ai103.local', '2026-12-31')), {
    action: 'renew', payload: { email: 'a@ai103.local', until: '2026-12-31' }
  });
  assert.deepEqual(plain(ui.payload.exams('a@ai103.local', ['ai103', 'az305'])), {
    action: 'exams', payload: { email: 'a@ai103.local', exams: ['ai103', 'az305'] }
  });
  assert.deepEqual(plain(ui.payload.enable('a@ai103.local')), {
    action: 'enable', payload: { email: 'a@ai103.local' }
  });
  assert.deepEqual(plain(ui.payload.disable('a@ai103.local')), {
    action: 'disable', payload: { email: 'a@ai103.local' }
  });
  assert.deepEqual(plain(ui.payload.resetPassword('a@ai103.local')), {
    action: 'reset-password', payload: { email: 'a@ai103.local' }
  });
  assert.deepEqual(plain(ui.payload.resetDevices('a@ai103.local')), {
    action: 'reset-devices', payload: { email: 'a@ai103.local' }
  });
  assert.deepEqual(plain(ui.payload.maxDevices('a@ai103.local', '0')), {
    action: 'max-devices', payload: { email: 'a@ai103.local', max_devices: 0 }
  });
});

test('学员列表同时输出桌面表格与手机卡片，操作仅主按钮+更多', () => {
  const { ui, document } = loadAdmin();
  ui.renderUsers([
    {
      email: 'demo.user@ai103.local',
      role: 'student',
      status: '有效',
      expires_at_zh: '2026-12-31 23:59',
      exams: ['ai103', 'az305'],
      max_devices: 2,
      last_sign_in_zh: '2026-11-09 18:01',
      created_at_zh: '2026-10-01 09:00'
    },
    {
      email: 'paused@ai103.local',
      role: 'student',
      status: '停用',
      expires_at_zh: '2026-08-01 23:59',
      exams: ['*'],
      max_devices: 0,
      last_sign_in_zh: '-',
      created_at_zh: '2026-07-01 09:00'
    }
  ]);
  const table = document.getElementById('users-body').innerHTML;
  const cards = document.getElementById('users-cards').innerHTML;
  assert.match(table, /data-email='demo.user@ai103.local'/);
  assert.match(table, /data-act='renew'/);
  assert.match(table, /data-act='exams'/);
  assert.match(table, /data-act='more'/);
  assert.doesNotMatch(table, /data-act='rpw'/);
  assert.doesNotMatch(table, /data-act='rdev'/);
  assert.doesNotMatch(table, /data-act='maxd'/);
  assert.match(cards, /admin-user-card/);
  assert.match(cards, /到期/);
  assert.match(cards, /题库/);
  assert.match(cards, /设备上限/);
  assert.match(cards, /最近登录/);
  assert.match(cards, /data-act='more'/);
  assert.match(cards, /data-status='停用'/);

  const html = ui.examChecksHtml(['ai103'], 's-');
  for (const id of ['ai103', 'dop-c02', 'dp-700', 'dp-420', 'az305', '*']) {
    assert.match(html, new RegExp("value='" + id.replace('*', '\\*') + "'"));
  }
});

test('题库勾选与开号默认值一致：全部为星号，空选回退 ai103', () => {
  const { ui } = loadAdmin();
  const all = { type: 'checkbox', value: '*', checked: true, id: 'c-all' };
  const a = { type: 'checkbox', value: 'ai103', checked: false };
  const z = { type: 'checkbox', value: 'az305', checked: true };
  const root = {
    querySelector(sel) {
      if (sel === '#c-all' || sel === '#s-all') return all;
      if (sel === 'input[value="*"]') return all;
      return null;
    },
    querySelectorAll() { return [a, z, all]; }
  };
  assert.deepEqual(plain(ui.collectExamValues(root, 'c-all')), ['*']);
  all.checked = false;
  z.checked = true;
  a.checked = true;
  assert.deepEqual(plain(ui.collectExamValues(root, 'c-all')), ['ai103', 'az305']);
  a.checked = false;
  z.checked = false;
  assert.deepEqual(plain(ui.collectExamValues(root, 'c-all')), ['ai103']);
});

test('顶栏与标签在窄屏共用一块吸顶区域，互不重叠', () => {
  const chromeAt = adminHtml.indexOf('class="admin-chrome"');
  const headerAt = adminHtml.indexOf('class="admin-topbar"');
  const tabsAt = adminHtml.indexOf('class="admin-tabs"');
  const msgAt = adminHtml.indexOf('id="admin-msg"');
  const appAt = adminHtml.indexOf('id="admin-app"');
  assert.ok(chromeAt > 0 && chromeAt < headerAt && headerAt < tabsAt && tabsAt < msgAt && msgAt < appAt);
  assert.match(adminHtml, /class="admin-chrome"/);
  assert.doesNotMatch(css, /top:\s*calc\(3\.55rem/);
  const section = css.slice(css.indexOf('Admin mobile operations'));
  const chromeRule = section.slice(section.indexOf('.admin-page .admin-chrome {'), section.indexOf('.admin-page .admin-topbar {'));
  assert.match(chromeRule, /position:\s*sticky/);
  assert.match(chromeRule, /top:\s*0/);
  const topbarRule = section.slice(section.indexOf('.admin-page .admin-topbar {'), section.indexOf('.admin-page .admin-tabs {'));
  assert.match(topbarRule, /position:\s*static/);
  const tabsRule = section.slice(section.indexOf('.admin-page .admin-tabs {'), section.indexOf('@media (max-width: 760px)'));
  assert.doesNotMatch(tabsRule, /position:\s*sticky/);
  assert.match(css, /\.admin-page:has\(#admin-app\.hidden\) \.admin-tabs/);
});

