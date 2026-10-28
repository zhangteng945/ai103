# AI-103 账号与进度上云 — 实施清单（Phase 1）

> 状态：**Phase 1.1 真登录已接线**（项目 `paswovhtsoljydywdmvb`；本地 `js/supabase-config.js` + CDN）。进度上云仍待 Phase 1.2。  
> 无密钥 / standalone 仍纯本地可用。默认发布仍为 GitHub Pages，且**须 Teng 明确 OK 后才发布**。当前阶段勿 publish。  
> 详细产品路线见 Canvas「刷题系统长期可维护路线」。

---

## 1. 目标栈

| 层 | 选型 | 说明 |
|----|------|------|
| 认证 | **Supabase Auth（邮箱 + 密码）** | Teng 偏好；管理员邀请/创建学员账号 |
| 进度库 | **Supabase Postgres** | 存练习标记、错题、上次考试摘要等 |
| 前端 | 现有静态站（`index.html` + `app.js`） | 继续可托管在 **GitHub Pages**；通过 **Supabase JS Client** 调 Auth/DB |
| 题库 | 仍为静态 `questions.js` | **不对公网开放写题**；题库不进学员可写表 |

公开配置仅：`SUPABASE_URL` + **anon key**（可进前端）。**service_role key 永不进仓库 / 永不进前端**。

---

## 2. 角色

| 角色 | 谁 | 能力 |
|------|-----|------|
| **admin（Teng）** | 在 Supabase Dashboard / SQL 创建用户，或用 Invite | 创建/重置学员账号；日后可加 `profiles.role = 'admin'` |
| **student** | 用邮箱+密码登录本站 | 练习 / 模考；读写**自己的**进度；不可改题库 |

Phase 1 **不做**学员自助公开注册上线（可先关 Sign-ups，仅由管理员创建用户）。骨架里可留「注册」UI，默认指向「请联系管理员开通」。

---

## 3. 前端保持静态可托管

- 无 Node 服务端；GitHub Pages 只托管静态文件。
- 浏览器加载 `@supabase/supabase-js`（CDN）+ 本仓库 `js/supabase-client.js`。
- 配置来源（二选一，**勿提交真密钥**）：
  1. `js/supabase-config.js`（由 `supabase-config.example.js` 复制，已在 `.gitignore` 建议忽略）
  2. 或构建时注入；本阶段用 example 文件即可
- 文档化环境变量名：见根目录 [`.env.example`](../.env.example)（静态站实际读的是 `window.__AI103_SUPABASE__`）。

---

## 4. 环境与密钥（Teng 必做）

### 4.1 创建项目

1. 打开 [https://supabase.com](https://supabase.com) → New project  
2. 记下 **Project URL**、**anon public** key（Settings → API）  
3. **不要**把 `service_role` 写进任何前端文件或 git commit  

### 4.2 本地 / 站点配置

```bash
cp js/supabase-config.example.js js/supabase-config.js
# 编辑填入 url + anonKey
```

`.env.example` 对应关系：

| 变量 | 用途 |
|------|------|
| `SUPABASE_URL` | → `window.__AI103_SUPABASE__.url` |
| `SUPABASE_ANON_KEY` | → `window.__AI103_SUPABASE__.anonKey` |

### 4.3 Auth 设置建议

- Authentication → Providers → **Email** 开启  
- 建议先关闭「允许公开注册」，仅 Dashboard / Invite / SQL 建号  
- Confirm email：开发期可关；生产建议开  

---

## 5. 数据模型（建议）

### 5.1 `profiles`（可选，与 `auth.users` 1:1）

```sql
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  display_name text,
  role text not null default 'student' check (role in ('student', 'admin')),
  created_at timestamptz default now()
);
```

### 5.2 `user_progress`（对齐现有 localStorage）

对应键：`ai103_practice_v3`

```sql
create table public.user_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  exam_id text not null default 'AI-103',
  answers jsonb not null default '{}'::jsonb,
  submitted jsonb not null default '{}'::jsonb,
  flags jsonb not null default '{}'::jsonb,      -- 标记题 id -> true
  wrong_ids jsonb not null default '{}'::jsonb,  -- 错题 id -> true
  updated_at timestamptz default now()
);
```

### 5.3 `user_exam_last`（对齐 `ai103_exam_last_v1`）

```sql
create table public.user_exam_last (
  user_id uuid primary key references auth.users(id) on delete cascade,
  exam_id text not null default 'AI-103',
  payload jsonb not null,  -- 与现 saveExamLast 结构一致
  updated_at timestamptz default now()
);
```

> Phase 1 也可合并为一张 `user_progress` 加 `exam_last jsonb` 列；上表便于以后多考试。

---

## 6. 安全：RLS（必须）

原则：

- 学员 **只能** `select/insert/update` **自己的**进度行（`auth.uid() = user_id`）  
- **禁止** anon/authenticated 对题库类表的写（本期题库仍静态，根本不建可写 questions 表）  
- admin 报表可后续用 service_role 仅在受控脚本，或 `role = admin` 策略  

示例：

```sql
alter table public.user_progress enable row level security;

create policy "progress_select_own"
  on public.user_progress for select
  using (auth.uid() = user_id);

create policy "progress_upsert_own"
  on public.user_progress for insert
  with check (auth.uid() = user_id);

create policy "progress_update_own"
  on public.user_progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- user_exam_last 同理
```

`profiles`：用户可读自己；`role` 列仅 admin / trigger 可改（防学员自称 admin）。

---

## 7. 从 localStorage 迁移

现有键：

| Key | 内容 |
|-----|------|
| `ai103_practice_v3` | `{ answers, submitted, flags, wrongIds }` |
| `ai103_exam_last_v1` | `{ result, questionIds, answers, flags }` |

迁移策略（登录成功后一次）：

1. 若云端无行、本地有数据 → **上传**本地为初始云端进度  
2. 若云端有、本地有 → 提示用户「保留云端 / 用本地覆盖 / 合并 flags∪wrongIds」（Phase 1.5）  
3. 登录态下：`saveProgress` / `saveExamLast` 写 localStorage **并** debounce 写 Supabase  
4. 未登录 / 无密钥：行为与今天完全一致（仅 localStorage）  

骨架阶段：**只预留** `AI103Auth.migrateLocalToCloudIfNeeded()` 空实现，不自动改数据。

---

## 8. 管理员如何建账号


### 创建第一个学员账号（操作摘要）

1. 打开 [Supabase Dashboard](https://supabase.com/dashboard) → 选中本项目  
2. 左侧 **Authentication** → **Users** → **Add user**  
3. 选择 **Create new user**，填写 **Email** + **Password**  
4. 勾选 **Auto Confirm User**（开发期免邮箱验证）→ Create  
5. 把邮箱与临时密码私下发给学员；学员在站点顶栏登录面板输入后点「登录」  
6. 站点「注册/开通」按钮**不会**公开建号（仅提示联系管理员）

### 方式 A — Dashboard（推荐）

1. Authentication → Users → **Add user** → 填邮箱+临时密码  
2. 勾选 Auto Confirm（开发）或发邀请邮件  
3. 把邮箱/临时密码私下发给学员，要求首次登录后改密  

### 方式 B — SQL（需 service_role / Dashboard SQL，慎用）

使用 Dashboard「SQL」+ Auth Admin API 比裸插 `auth.users` 更安全；推荐 Dashboard UI。若用 Invite：

Authentication → Users → Invite user  

### 方式 C — 站点内「仅 admin」创建（Phase 2）

登录且 `profiles.role = 'admin'` 时调用 Edge Function（持 service_role）创建用户。Phase 1 **不做**。

---

## 9. 代码骨架（已存在）

| 路径 | 作用 |
|------|------|
| `js/supabase-config.example.js` | 配置模板；复制为 `supabase-config.js` 后填密钥 |
| `js/supabase-client.js` | 真客户端：有配置则 `signInWithPassword` / `signOut` / 会话恢复；无配置 **no-op** |
| `index.html` | 登录/注册/退出面板 + supabase-js CDN；`authUi: true` 或 `?auth=1` 显示面板 |
| `.env.example` | 文档化变量名 |
| `docs/auth-plan.md` | 本清单 |

**进度未接线**：`app.js` 的 `saveProgress` / `loadProgress` 仍仅 localStorage（Phase 1.2）。Auth 已可用。

---

## 10. 分阶段任务（勾选）

### Phase 0 — 文档与骨架（本阶段）

- [x] 中文实施清单 `docs/auth-plan.md`
- [x] `.env.example` + `js/supabase-config.example.js`
- [x] `js/supabase-client.js` no-op stub
- [x] `index.html` 登录面板 hooks（feature flag）
- [x] 无密钥时离线 / 现有练习逻辑不变
- [x] Teng 创建 Supabase 项目并填入 `js/supabase-config.js`（**不提交 git**）

### Phase 1.1 — 真登录

- [x] 引入 supabase-js CDN；配置 URL + anon key
- [x] Email+password `signIn` / `signOut`；关公开注册或改为「申请开通」
- [x] 会话恢复（`onAuthStateChange`）；顶栏显示当前邮箱
- [ ] Auth 邮件模板中文化（可选）

### Phase 1.2 — 进度表 + RLS

- [ ] 建 `profiles` / `user_progress` / `user_exam_last`（或合并表）
- [ ] 启用 RLS 策略并手工用两个测试账号验证隔离
- [ ] `loadProgress` / `saveProgress` / `saveExamLast` 双写（local + cloud）
- [ ] 登录后 localStorage → 云端迁移提示

### Phase 1.3 — 管理与发布

- [ ] 文档化「Dashboard 建号」给 Teng；建 1–2 个试学员
- [ ] 确认 GitHub Pages 可访问 Supabase（CORS 默认 OK）
- [ ] Teng **明确 OK** 后再 bump 并发布 GitHub Pages（默认不发 Netlify）
- [ ] 回归：无配置文件时站点仍可完整离线刷题

### 以后（不做进 Phase 1）

- [ ] admin 站内建号 / 用量报表  
- [ ] 多考试 `exam_id` 切换  
- [ ] PDF 导入流水线与账号解耦并行  

---

## 11. Teng 下一步

1. **Authentication → Users → Add user** 建第一个试账号（邮箱+密码，Auto Confirm）  
2. 本地打开 `index.html`（或本地静态服务），在顶栏登录面板验证登录 / 刷新后会话仍在 / 退出  
3. 确认 Authentication → Providers → Email 开启，且公开 Sign-ups 关闭  
4. 就绪后进入 Phase 1.2（进度表 + RLS）；**仍不自动 publish**  

---

## 12. 验收标准（Phase 1 完成时）

- 无 `supabase-config.js` / 空密钥：打开站点与今天行为一致，可完整练习与模考  
- 有密钥且登录：进度跨浏览器可见；RLS 下用户 A 读不到用户 B  
- 题库文件仍只读静态托管；anon key 无法写 questions  
- 发布仅在 Teng OK 后走 GitHub Pages  
