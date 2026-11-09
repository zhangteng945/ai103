# PDF候选题库导入（星火）

> 本页记录首阶段PDF导入实现/实测；当前完整发布状态见 [AZ-305上线清单](az305-release-plan.md)。

## 首阶段交付边界

- 本地开发分支 `feature/pdf-upload`，首阶段本地提交be13a8a；Git身份按GitHub公开账号/noreply设置于本仓库，无全局配置修改。无推送、无PR、无Pages发布、无Supabase生产修改。
- 管理后台新增「导入PDF题库」：选择PDF → 按页文字层/OCR分流 → 题目/答案原图并排预览 → 编辑 → 导出JSON或保存独立私有候选。
- 只保存候选，不把新题库挂到练习站，不提供正式发布按钮。旧4库、原版本pin、账号、进度与itc-bank源码不变。

## 实现

- PDF.js **6.5.438**；Tesseract.js **7.0.0**。worker、WASM、字体、字符映射、eng/chi_sim模型全部在 `js/vendor/pdf-import/` 同源自托管（约57MB），不使用CDN，不调用外部OCR，不需要API钥匙。
- 模型源：tesseract-ocr/tessdata_fast **4.1.0**，许可与库许可一并保留。`npm ci --ignore-scripts && npm run prepare:pdf-vendor` 可重建；重建时下载公开模型，运行识别时不下载站外资源。
- 每页先读取文字层；忽略店铺水印，并检查评论区之前的有效文字。正文缺失的混合扫描页也走OCR，避免「评论有文字、题干是图片」被误判为纯文字页。
- 保留文字层的评论分界，OCR只处理正文/答案标注内区域；不会采用评论区的答案。跨页题目、答案原图分段保留。
- A-H直接答案解析为键；Box 1/2等文字答案提炼为文字。热区/拖拽/图片题保存题目原图、答案证据图、最佳文字转写、来源页、源文件SHA-256和置信提示。置信度不代表真实准确率；没有「待核对」状态。
- `PdfEngine.ocrProvider` 是预留适配点：未来可以注入 `recognize(canvas,{language}) → {text,confidence,lines:[{text,x,y,height}]}`。本次未接入PaddleOCR/云OCR。
- 敏感写入通过独立 `itc-pdf-candidate` 函数，先getUser核验最新app_metadata.role，再接收请求体。另建私有 `pdf-candidates` 桶，UUID独立路径、upsert:false；不写原 `banks` 桶或任何active/version字段。
- 浏览器只拿已有公开anon配置和用户令牌；service_role只引用服务端环境变量。

## 文件

- `admin.html`、`js/admin.js`：管理入口、编辑预览、身份核验、SCF→直连回退。
- `js/pdf-import-core.js`、`js/pdf-import-engine.mjs`、`js/pdf-import-ui.mjs`：解析、浏览器OCR、候选保存。
- `supabase/functions/itc-pdf-candidate/{index.ts,validation.mjs}`：只保存候选的独立后端。
- `docs/pdf-upload-setup.sql`：待批准的私有桶与限制性隔离策略安装脚本（尚未执行，不是已应用迁移）。
- `sw.js`：发布缓存号202611092210；管理页和识别依赖网络直取，避免管理页断网错误回退为练习首页。清理旧版本静态缓存，不触碰本机进度。
- `package*.json`、`tooling/`、`tests/`、`js/vendor/pdf-import/`：固定依赖、重建脚本、本地浏览器测试和自托管运行资源。

## 本地复现

```sh
npm ci --ignore-scripts
npm test
python3 -m http.server 8766 --bind 127.0.0.1
# 另一个终端执行；默认Chrome路径/usr/bin/google-chrome
npm run test:pdf:browser
npm run test:pdf:routing
npm run test:pdf:save
```

浏览器测试使用真实 `admin.html`、真实文件选择、真实PDF.js/Tesseract；管理员会话、认证响应、候选存储使用明确的本地假数据。拦截所有非localhost请求，**没有向生产端发送认证/写入请求**。后端测试直接运行真实处理函数源码，仅mock认证/存储依赖。

## 样本结果（不是全量识别成绩）

输出目录：`/workspace/ai103-pdf-upload-demo/`。

1. 英文PDF：加载完整24MB、967页文件；本次选第1–20页，识别6题（原题号1–6），文字页20页，图片页0页；另对题内原图/答案图OCR。
   - 1:A；2:A；3:A/E；4:C：与源PDF直接答案4/4一致。
   - 5：Premium / Credential passthrough；6：An Azure AD app registration / A conditional access policy。已对照PDF跨页绿色选中答案图，2/2一致。
   - 本次6题答案抽查6/6；不外推到286题，不代表所有题干/表格逐字无误。
   - `english-candidate.json`，截图 `02-english-preview.png`、`03-english-next.png`、`04-mobile.png`。热区原图证据 `q5-answer-*.jpg`、`q6-answer-*.jpg`。
2. 中文PDF：加载完整228MB、1135页文件；本次选第1–3页，识别1题（原题号1），正文图片页1页、后续评论文字页2页。正确答案A，与PDF1/1一致；4个选项分出，正文OCR存在空格、Application1/I等误字，不能声称题干准确率100%。
   - 特别修复了「正文图片+评论文字」混合页的分流与评论隔离。
   - `scanned-candidate.json`，截图 `05-scanned-preview.png`。
3. 本地模拟保存：`06-candidate-saved-local-mock.png`、`edited-candidate.json`、`save-tests.json`。校对答案可改为B，原图副本不因保存被删除，候选保存不执行HTML。

截图另有 `01-upload.png`、`07-hotspot-preview.png`、`08-hotspot-crosspage.png`。所有截图是本机演示，不是生产验收截图。

## 已完成的本地验证

- 17项单元/处理函数/回归测试通过：题号、跨页、中文OCR边界、讨论排除、候选不可覆盖、非管理员/伪造user_metadata拒绝、无令牌401、普通账号403、恶意来源403、超大请求413、非法图片/非法动作400。
- 四旧库默认版本+显式旧pin共8条读取路径通过（真实旧itc-bank处理函数+mock存储），相关源码与基线完全相同。生产真实旧对象未读取、未改动。
- 真实管理入口的代理404/网络故障→Supabase直连，401不绕过、不重试；非管理员页面未暴露写API。详见 `routing-tests.json`。
- 真实UI文件校验拒绝伪PDF、损坏PDF；256MB输入上限、1500页上限、单页800万像素上限、文字量/原图量/请求体上限在代码中实现；228MB样本文件已实际加载成功。
- XSS输入在textarea里显示，未执行；PDF不执行JavaScript/XFA、不跟随文件内网址。
- SW缓存兼容单测通过；桌面Chrome与390像素窄屏截图完成。

## 批准上线之后必须完成（当前未做）

1. 审阅本地差异，获得明确上线批准后再提交远端/部署；不能把本地演示当线上交付。
2. 通过受控部署流程执行 `docs/pdf-upload-setup.sql`（只建隔离私有桶与限制策略），核对已存在桶是否仍为private。部署新函数 `itc-pdf-candidate`，保留默认JWT校验，并设置 `PDF_ALLOWED_ORIGINS=https://zhangteng945.github.io`。无外部OCR密钥。
3. SCF香港代理若继续使用，放行新函数路径及OPTIONS/请求体限制；未放行时前端遇404或网络错误会回退直连。真实CORS、JWT网关、代理体积限制要线上验证。
4. 发布静态资源与57MB同源识别依赖，核对所有worker/WASM/模型的HTTP状态和MIME；刷新SW版本202611092210。
5. 用真正管理员与普通账号验收：浏览器识别、分片原图保存、候选对象可在私有存储看到、重复finalize拒绝、普通账号直接Storage读写都被隔离策略拒绝。检查服务端角色撤销后立即拒绝。
6. 一次复验四个真实旧库与现有真实pin可读、原学习进度不变、SCF与直连两条路、生产SW升级、桌面与实际手机/iOS兼容；这些未用模拟结果冒充完成。

## 已知限制/风险

- 纯Tesseract是文字OCR，不理解所有圈选、颜色、连线和空间匹配。遇到没有文字Box说明的热区/拖拽可能只得到答案区域的全部文字，不能保证选中项语义完整；原图始终保存，管理员可修改。无识别文字则保留空答案与低置信说明，不编造字母答案。全量286题和扫描件1135页未在本次浏览器测试跑完。
- 基于题号/答案标记的通用启发式解析，不保证所有出版社模板、多栏、案例共享上下文都自动还原。纯扫描页若讨论分界也被OCR误读，仍存在正文/讨论分区不完整风险；本次混合扫描样本已用原文字层分界修复并验证。需要无标记PDF支持时应另加模板/适配器。
- 大文件在浏览器内存中加载；虽228MB文件已实际打开，移动端仍可能内存不足，建议桌面按页分批。当前无断点续识别，离开页面前要导出。
- 保存中断时，隔离桶可能留下未引用原图，正式上线后应定期人工审计/清理；本次不自动删除任何东西。候选保留是私有对象，不是正式题库索引；本页尚无云端候选重新打开/正式发布工作流。
- 首阶段练习站未扩展AZ-305注册/图片题判分；后续适配现已完成（见上线清单）。首阶段新候选不会自动进入练习。正式发布与图片题交互/判分需单独明确批准及适配，不能把候选JSON直接覆盖原4库。
