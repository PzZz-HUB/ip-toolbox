# IP Toolbox 工具收录规范

IP Toolbox 致力于成为一个可信赖、极简的软件官方下载导航站。为了保证工具生态的质量和安全，所有被收录的工具必须严格遵守以下规范。

## 一、 收录基本原则

一个工具加入 IP Toolbox，必须且仅必须满足以下条件：
1. **有官方来源**
2. **有明确项目主页**
3. **下载地址可验证**（必须是官方服务器直链或 GitHub Releases）
4. **不收录破解软件**
5. **不收录修改版软件**
6. 优先收录开源项目 / 官方免费工具 / 稳定商业软件
7. **商业软件必须有官方下载安装入口**（不支持仅限受邀测试或无公开下载试用的软件）

**绝对禁止**：
- ❌ 破解软件 / 激活工具
- ❌ 绿色版 / 修改版 / 去广告版
- ❌ 第三方论坛或网盘重新打包的文件
- ❌ 捆绑流氓软件的安装包

## 二、 录入字段填写指南

新增工具请复制并参考 `src/data/tool-template.ts`。

### 1. 基础信息
- `slug`: 全小写，单词间用连字符分割，例如 `obs-studio`。
- `icon`: 请选用最能代表该软件功能的单个 Unicode Emoji，如 `🎥` 或 `🚀`。
- `shortDescription`: 严格限制在 20 个字以内的一句话总结。
- `fullDescription`: 简明扼要，说明核心特色。拒绝营销废话。

### 2. 用户场景模型 (`audiences`)
请精准赋予该工具目标受众。受众必须是系统预设的联合类型（不可随意创造）：
- `"跨境用户"`：如环境代理、多开指纹浏览器。
- `"内容创作者"`：如视频剪辑、直播推流、图像设计。
- `"普通电脑用户"`：如主流播放器、解压软件、办公辅助。
- `"AI 用户"`：如本地大模型运行器、UI 客户端。
- `"开发者"`：如代码编辑器、终端、Git 工具、API 调试。

### 3. 开源信息与安全
- **开源工具**：必须填写 `githubOwner` 和 `githubRepo`，并填入相应的 `license`。
- **商业工具**：无需填写 GitHub 信息，`license` 可填写 `Commercial` 或 `Freeware`。
- **星标拉取**：`githubStars` 和 `starsUpdatedAt` 在手动录入时一律填 `null`，系统将通过 GitHub API 自动抓取填充。
- **安全提示**：请保留统一的 `securityNotes` 话术，不得擅自要求用户关闭系统安全防御。

### 4. 平台下载源 (`releases`)
- `packageType` 必须准确填写，如 `exe`, `dmg`, `AppImage`, `zip` 等。
- `downloadUrl` 必须是直链，点击即可触发下载，不得指向含有二次跳转或广告的网页。
- `architecture` 仅限底层真实架构（`x64`, `x86`, `arm64`, `universal`, `unknown`），绝不能混淆填写商业营销词汇（如 Apple Silicon 请填写 `arm64`）。

## 三、 V3 首批重点收录候选清单
> 下列名单仅为候选清单。实际执行录入前，需经过人工评估其合规性并提取对应版本数据。

**跨境用户 (Cross-border)**
- AdsPower
- BitBrowser
- Clash Verge Rev
- DeepL
- LocalSend

**内容创作者 (Creators)**
- OBS Studio
- HandBrake
- DaVinci Resolve
- Audacity
- Blender

**普通电脑用户 (General Users)**
- 7-Zip
- Everything
- VLC Media Player
- Firefox
- PowerToys

**AI 用户 (AI Users)**
- Ollama
- LM Studio
- AnythingLLM
- Open WebUI
- ComfyUI

**开发者 (Developers)**
- VS Code
- Git
- Docker Desktop
- Windows Terminal
- Postman
