# 星火 · PDF导入与AZ-305上线清单

## 当前状态与发布基线

- 本地分支 `feature/pdf-upload`；PDF导入首阶段提交 `be13a8a`。发布代码与所有本地验收已完成，**尚未push、建PR、合并、发布Pages或修改Supabase生产**。
- 生产基线实际只读检查：当前静态版本`202611090722`，直连未登录401、OPTIONS200/CORS=*；香港SCF该路径当前404（CORS允许站点），不是新版本故障。结果在`release/baseline/public-checks.json`。
- 新前端/SW/AZ-305版本统一为 `202611092210`，不是当前线上版本。
- 线上只读基线：main `37233bae544444c03fc4ace4d5818416cd5b666b`；`itc-bank` ACTIVE v8、verify_jwt=true；`banks`私有、无大小/MIME专属限制；现有`bank read by entitlement`策略保留。
- 已将当前itc-bank源码/函数状态、main提交、存储桶/策略只读结果备份到 `/workspace/ai103-pdf-upload-demo/release/baseline/`。真正执行上线时还会重新备份，避免使用过期快照。
- 停在凭据门禁：尚无真实管理员/普通学员验收会话（ADMIN_ACCESS_TOKEN、STUDENT_ACCESS_TOKEN）；CLI脚本另需已授权DATABASE_URL与Supabase CLI登录/令牌。已有MCP只读权限不等于已拿到用户会话，不用service_role伪造会话、不改账号获得令牌。**不进行无法完成验收/回滚保障的半套发布**。

## 实现与本地验收

- 免费浏览器PDF.js+Tesseract，worker/WASM/eng/chi_sim均站内自托管；按页文字层/OCR分流、预览编辑、私有候选保存，不自动发布；预留ocrProvider适配口。
- AZ-305 286题：183选项判分、103图片文字答案自评；原题型171单选、12多选、87热区、16拖拽（其中3道按题干显示为排序），26道案例可展开。仅显示题目/独立展图；选择题含Most Voted原截图私有归档但不显示/签名，避免提交前泄题。
- 答对仅绿框；答错显示正确答案与本人选择；自评后计统计/错题。中文界面、署名星火；英文题在中文模式回退英文。原手动上传/下载进度协议未改，自评对象在原answers容器中无损编码。
- `npm test`：27项全部通过，含真实286题发布物全量哈希/原答案保真、12条旧库/显式pin读取路径（包含ai103/202611011900）、权限、恶意/大文件、缓存升级和手动进度往返。
- `npm run test:release`：真实前端+真实itc-bank处理函数，仅mock认证/存储；抽测1/3/5/6/10/12/15/59题、选项与图片/拖拽/排序/案例、30题模拟考自评、4旧库与YN固定顺序、全部+乱序跨批跳题250→5、390px窄屏、学生拒绝、401、旧SW缓存清理通过。所有外部请求拦截，生产写入0。
- 双PDF真实浏览器识别：英文完整24MB/967页文件中取1–20页，6题，答案抽查6/6；中文完整228MB/1135页文件中取1–3页，1题，答案A抽查1/1，正文有OCR误字。不是全量PDF或全部286题的自动识别准确率。
- 验收文件：`release/unit-tests.log`、`release/e2e-results.json`、`release/e2e.log`；`REPORT.md`为首阶段存档。
- 关键截图（均在 `/workspace/ai103-pdf-upload-demo/`）：`02-english-preview.png`、`05-scanned-preview.png`；`release/01-az305-before-submit.png`、`02-choice-correct.png`、`03-hotspot-self-wrong.png`、`04-image-10.png`、`04-image-15.png`、`05-case-background.png`、`06-mobile-case.png`、`06-mobile-case-viewport.png`、`07-old-yn-regression.png`、`08-student-locked.png`、`09-shuffled-batch.png`、`10-exam-self-evaluation.png`。

## 将变更的线上对象（仅限以下）

1. GitHub Pages：本地feature经PR正常merge至main，发布中文版管理入口、练习图片题、统一版本号及自托管OCR资源；不force push。
2. Edge Functions：更新`itc-bank`（添加az305白名单/默认版本、明确AZ权限、批量签名媒体/续签）；新增`itc-pdf-candidate`（仅管理员私有候选写入）。默认JWT校验不关闭。`itc-admin`现有接口接受任意题库ID，无须修改/部署；`itc-ingest`不动。
3. 私有Storage banks：只新增`az305/202611092210.json`及`az305/202611092210/media/*.png`。共753个对象（1份JSON+752幅媒体，包括22幅独立展图），43,361,559字节；清单/长度/SHA-256在`release/artifacts/manifest.json`。只POST、x-upsert=false，已存在则立即停止，不覆盖任何旧对象。
4. 单一迁移`supabase/migrations/20261109221000_pdf_candidates_az305.sql`：确认banks仍私有；新增AZ路径限制性隔离策略；新建私有pdf-candidates桶及限制性策略。事务内只重建本次命名策略以支持安全重跑，不更改原4库策略或任何auth/学习/设备表。SQL通过psql明确执行，不运行会夹带历史变更的db push；迁移文件与备份构成审计记录。
5. AZ默认仅app_metadata.role=admin可用；普通学员必须显式拥有az305，历史`*`不自动授予。此次**不分配学员权限，不改任何账号/进度/设备绑定**。

## 执行前与一键入口

- 准备已获授权且短期有效、已有旧4库权限的管理员及尚无AZ权限的普通学员访问令牌；通过安全会话/环境注入，不在聊天、日志或脚本写明，不自行签发令牌。CLI登录/数据库连接由授权人配置。
- Node>=24，Python3、PyMuPDF（仅重打包需要）、Chrome、psql/pg_dump、gh、Supabase CLI3.1.0；`npm ci --ignore-scripts`。
- 如需重新打包：`npm run package:az305`。输入只读`/workspace/ai103-redo-work/az305-full-candidate.json`与其full-bank/media、英文PDF；输出永不放入公开Git仓库。
- 预演（不联网写入）：`bash scripts/release/deploy.sh`。
- 具备本次发布授权和完整凭据后：`TENG_RELEASE_APPROVED=YES bash scripts/release/deploy.sh --execute`。本地静态服务不存在时脚本自动启动，验收后自动停止自己启动的服务。
- 脚本在任何写入之前检查凭据、干净工作区、本地测试通过和main是否出现未合入变更；然后重新备份main SHA、当前HTML/SW、函数源码/列表、Storage schema/桶/策略，确认新版本路径没有对象。备份路径记录在`release/last-backup.txt`。

## 执行顺序

1. 只读备份完成且可恢复；确认当前函数源与本地预期没有未审阅漂移。
2. 事务执行唯一迁移；banks必须保持private。
3. 校验清单并以不可覆盖方式上传新JSON/媒体，逐项记上传账本，单次失败即停止。
4. 仅部署itc-bank和itc-pdf-candidate，保留verify_jwt；候选CORS默认允许https://zhangteng945.github.io，无新OCR服务/密钥。
5. push feature/pdf-upload→新PR→正常merge main，保存merge SHA；等待该SHA对应Pages构建成功（最多约5分钟）。禁止强推。
6. 执行`live-smoke.mjs`只读真实验收。任何失败触发受控回滚；修复不能快速且安全完成则不继续上线，不重复碰运气。

## 发布后立即实测（线上必验，不能用本地mock冒充）

- [ ] 未登录itc-bank/候选接口401；真正管理员可读AZ/候选begin，普通学员AZ/候选403；未分配学员不能绕过直读Storage。候选begin只返回UUID，不写对象。
- [ ] SCF香港代理真实入口、OPTIONS/CORS；若代理不支持新函数或故障，真实页面404/网络失败→直连Supabase回退；401不绕过。候选新路由如需代理放行必须另核对SCF配置，本次不改SCF。
- [ ] 真实旧4库当前默认版本、ai103/202611011900及现有其他固定pin可读；账号权限/学习进度/设备绑定不变。
- [ ] AZ元数据286题、各题型原图可读、单选/多选正常判分，热区/拖拽/排序提交后才揭示PDF文字答案，自评计错题；案例背景可展开。
- [ ] banks与pdf-candidates仍私有；普通用户直接对象URL读写均拒绝；签名只限当前版本/media/PNG、过期续签有效。
- [ ] Pages版本202611092210、所有js/CSS/worker/WASM/语言包200和正确MIME；旧SW缓存升级且私有API/签名媒体不入缓存；390px无溢出、真实手机/iOS人工点验。
- [ ] 管理端上传两份PDF、校对编辑、保存候选及重复finalize拒绝；这是经管理员确认的新增候选写入验收，不能为测角色去改账号。自动live-smoke只测begin不创建候选，完整保存由Teng从页面检查或再指定临时验收候选。
- 自动脚本对/rest/v1/**拦截以防验收改设备/进度，auth/题库/媒体是真实请求；真实手动同步与真实设备绑定行为不改动、不自动操作，需本人页面确认。

## 一键回滚

`TENG_RELEASE_APPROVED=YES bash scripts/release/rollback.sh --execute <last-backup.txt中的目录>`

1. 校验备份完整，恢复发布前itc-bank源码（重新部署会形成新函数版本，行为回到备份而非要求版本号仍8）。若候选函数原来存在则恢复原源，否则仅在本次新增函数实际存在时删除它；不动itc-admin/itc-ingest。
2. 若已合并，基于最新main创建正常revert分支/PR并merge，不强推、不硬重置；等待回滚Pages构建成功。未合并的本次PR关闭，不删除远端分支。
3. 新私有AZ对象/候选桶及限制性策略**安全保留**，避免删除数据或恢复宽泛策略造成新库泄露。旧对象从未覆盖，不需要恢复旧4库数据；部分上传中断也不删除残留，换新版本再发前审阅。
4. 核对旧前端版本、旧4库/pin/401/CORS，保存回滚merge SHA与构建结果；如回滚本身失败立即停下人工处理，不修改账号/进度/设备。

## 三项风险

1. 缺少真实管理员/学员验收会话与完整CLI/DB授权，当前无法完成安全发布闭环；生产保持原状。
2. 通用OCR与图片转录并非语义保证：扫描正文有误字，原PDF #52答案右侧截断；不猜答案，保留原图让管理员修改；#59采用已确认1、2。
3. 57MB首次OCR资源和228MB大文件对手机内存/网络较重；桌面按页识别。线上SCF/CORS/签名过期与真实iOS仍须实测。
