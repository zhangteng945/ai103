'use strict';

function makeClassList(el) {
  return {
    add: function () {
      const cur = new Set(String(el.className || '').split(/\s+/).filter(Boolean));
      for (const c of arguments) cur.add(c);
      el.className = Array.from(cur).join(' ');
    },
    remove: function () {
      const cur = new Set(String(el.className || '').split(/\s+/).filter(Boolean));
      for (const c of arguments) cur.delete(c);
      el.className = Array.from(cur).join(' ');
    },
    toggle: function (c, force) {
      const has = (' ' + el.className + ' ').includes(' ' + c + ' ');
      if (force === true || (!has && force !== false)) this.add(c);
      else this.remove(c);
    },
    contains: function (c) {
      return (' ' + el.className + ' ').includes(' ' + c + ' ');
    }
  };
}

function createEl(tag, id) {
  const attrs = Object.create(null);
  const el = {
    tagName: String(tag || 'div').toUpperCase(),
    id: id || '',
    className: '',
    hidden: false,
    textContent: '',
    innerHTML: '',
    value: '',
    checked: false,
    disabled: false,
    style: {},
    children: [],
    parentNode: null,
    onclick: null,
    getAttribute: function (name) {
      if (name === 'id') return this.id;
      if (name === 'class') return this.className;
      return attrs[name] != null ? attrs[name] : null;
    },
    setAttribute: function (name, value) {
      if (name === 'id') this.id = value;
      else if (name === 'class') this.className = value;
      else attrs[name] = String(value);
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    querySelector: function () { return null; },
    querySelectorAll: function () { return []; },
    closest: function () { return null; },
    focus: function () {},
    click: function () {},
    scrollIntoView: function () {},
    appendChild: function (child) { this.children.push(child); child.parentNode = this; return child; },
    remove: function () {}
  };
  el.classList = makeClassList(el);
  return el;
}

function collectIds(html) {
  const ids = [];
  const re = /id=["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(html))) ids.push(m[1]);
  return ids;
}

class MockDocument {
  constructor(html) {
    this._html = String(html || '');
    this._byId = Object.create(null);
    this.readyState = 'complete';
    this.body = createEl('body');
    this.documentElement = createEl('html');
    for (const id of collectIds(this._html)) {
      this._byId[id] = createEl('div', id);
    }
  }
  getElementById(id) {
    if (!id) return null;
    if (!this._byId[id]) this._byId[id] = createEl('div', id);
    return this._byId[id];
  }
  querySelector(sel) {
    const m = String(sel || '').match(/^#([A-Za-z0-9:_-]+)$/);
    if (m) return this.getElementById(m[1]);
    return null;
  }
  querySelectorAll() { return []; }
  addEventListener() {}
  createElement(tag) { return createEl(tag); }
}

function installDom(document, extra) {
  const store = Object.create(null);
  const localStorage = {
    getItem: function (k) { return Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null; },
    setItem: function (k, v) { store[k] = String(v); },
    removeItem: function (k) { delete store[k]; }
  };
  const win = {
    window: null,
    document,
    localStorage,
    navigator: {},
    fetch: async function () { throw new Error('fetch disabled in tests'); },
    ITCERT_ADMIN_NO_BOOT: true,
    __ITCERT_ACCOUNT__: {},
    __AI103_SUPABASE__: {},
    Object,
    Array,
    Number,
    String,
    Boolean,
    JSON,
    Error,
    TypeError,
    Math,
    Date,
    setTimeout,
    clearTimeout,
    parseInt,
    Number,
    encodeURIComponent,
    console
  };
  win.window = win;
  win.globalThis = win;
  if (extra) Object.assign(win, extra);
  return win;
}

module.exports = { MockDocument, installDom, createEl };
