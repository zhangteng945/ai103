const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const http = require('http');
const path = require('path');

const repo = path.resolve(__dirname, '..');

function canLaunchChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser'
  ].filter(Boolean);
  return candidates.find((p) => fs.existsSync(p)) || null;
}

function resolvePlaywright() {
  const paths = [
    path.join(repo, 'node_modules/playwright'),
    path.join(repo, 'node_modules/playwright-core'),
    '/tmp/opt-fix/node_modules/playwright-core'
  ];
  for (const p of paths) {
    try { return require(p); } catch (e) { /* try next */ }
  }
  return null;
}

test('桌面宽度下案例题选项不能跑到卡片左边外面', async (t) => {
  const chrome = canLaunchChrome();
  const pw = resolvePlaywright();
  if (!chrome || !pw || !pw.chromium) {
    t.skip('需要本机 Chrome 和 playwright-core 才能量布局');
    return;
  }

  const fixture = path.join(repo, 'tooling/option-offset-q002-fixture.html');
  assert.ok(fs.existsSync(fixture), 'missing q002 fixture');

  const mime = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8'
  };
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
    const file = urlPath === '/' ? fixture : path.join(repo, urlPath.replace(/^\//, ''));
    const rel = path.relative(repo, file);
    if (rel.startsWith('..') || path.isAbsolute(rel) && !rel.startsWith(repo)) {
      res.writeHead(403); res.end(); return;
    }
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404); res.end('no'); return; }
      res.writeHead(200, { 'content-type': mime[path.extname(file)] || 'text/html; charset=utf-8' });
      res.end(data);
    });
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();
  const browser = await pw.chromium.launch({
    executablePath: chrome,
    headless: true,
    args: ['--disable-gpu', '--no-sandbox']
  });

  const viewports = [
    { width: 1024, height: 768 },
    { width: 1280, height: 800 },
    { width: 1440, height: 900 },
    { width: 1920, height: 1080 }
  ];
  try {
    for (const vp of viewports) {
      const page = await browser.newPage({ viewport: vp });
      await page.goto('http://127.0.0.1:' + port + '/tooling/option-offset-q002-fixture.html', { waitUntil: 'networkidle' });
      const m = await page.evaluate(() => {
        const card = document.querySelector('#practice-body');
        const stem = document.querySelector('.stem');
        const opts = document.querySelector('#practice-options');
        const extras = document.querySelector('#q-extras');
        const pane = document.querySelector('#practice-scroll');
        const c = card.getBoundingClientRect();
        const s = stem.getBoundingClientRect();
        const o = opts.getBoundingClientRect();
        const e = extras.getBoundingClientRect();
        return {
          cardL: c.left, cardR: c.right, cardW: c.width,
          stemL: s.left, optsL: o.left, optsR: o.right, optsW: o.width, optsT: o.top, stemB: s.bottom,
          extrasT: e.top, optsB: o.bottom,
          paneOverflowX: pane.scrollWidth - pane.clientWidth,
          pos: getComputedStyle(opts).position,
          widthPct: o.width / c.width
        };
      });
      assert.equal(m.pos, 'relative', vp.width + ': options position');
      assert.ok(m.optsL >= m.cardL - 1, vp.width + ': options left of card ' + m.optsL + ' < ' + m.cardL);
      assert.ok(m.optsR <= m.cardR + 1, vp.width + ': options right of card');
      assert.ok(Math.abs(m.optsL - m.stemL) <= 2, vp.width + ': options/stem left delta ' + (m.optsL - m.stemL));
      assert.ok(m.optsW >= m.cardW * 0.7, vp.width + ': options too narrow ' + m.optsW + ' / card ' + m.cardW);
      assert.ok(m.optsT >= m.stemB - 2, vp.width + ': options should be below stem');
      assert.ok(m.extrasT >= m.optsB - 2, vp.width + ': extras should be below options');
      assert.ok(m.paneOverflowX <= 2, vp.width + ': pane overflow-x ' + m.paneOverflowX);
      await page.close();
    }

    // 390 short phone: last option can scroll above the in-flow dock
    const page = await browser.newPage({ viewport: { width: 390, height: 667 } });
    await page.goto('http://127.0.0.1:' + port + '/tooling/option-offset-q002-fixture.html', { waitUntil: 'networkidle' });
    const mobile = await page.evaluate(async () => {
      const pane = document.querySelector('#practice-scroll');
      const dock = document.querySelector('#practice-dock');
      const last = document.querySelector('#practice-options .option:last-child');
      pane.scrollTop = pane.scrollHeight;
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      const o = last.getBoundingClientRect();
      const d = dock.getBoundingClientRect();
      const c = document.querySelector('#practice-body').getBoundingClientRect();
      const opts = document.querySelector('#practice-options').getBoundingClientRect();
      return {
        covered: o.bottom > d.top + 2,
        optsL: opts.left, cardL: c.left, optsW: opts.width, cardW: c.width
      };
    });
    assert.ok(mobile.optsL >= mobile.cardL - 1, '390: options left of card');
    assert.ok(mobile.optsW >= mobile.cardW * 0.7, '390: options too narrow');
    assert.equal(mobile.covered, false, '390: last option still under dock after scrolling');
    await page.close();
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
});
