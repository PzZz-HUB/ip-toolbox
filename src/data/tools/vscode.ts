import type { Tool } from '../types';

export const vscode: Tool = {
  id: '9',
  slug: 'vscode',
  name: 'VS Code',
  icon: '💻',
  shortDescription: '微软开源的现代跨平台代码编辑器',
  fullDescription: 'Visual Studio Code 是一款轻量级但功能极度强大的源代码编辑器，拥有庞大的扩展生态和内置的 Git 及调试功能。',
  highlight: '解决在单一工具内完成多语言代码编写、调试、终端执行及版本管理的难题。',
  whyChoose: '拥有海量的扩展市场，能够从轻量文本编辑器无缝扩展为全栈开发环境。适合从前端页面到数据科学，几乎覆盖所有语言栈的现代软件开发从业者。',
  category: "远程与运维",
  audiences: ['开发者'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://code.visualstudio.com/',
  githubOwner: 'microsoft',
  githubRepo: 'vscode',
  license: 'MIT',
  githubStars: null,
  starsUpdatedAt: null,
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [
    {
      platform: 'Windows',
      architecture: 'x64',
      packageType: 'exe',
      fileName: 'VSCodeUserSetup-x64.exe',
      downloadUrl: 'https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user',
      sourceType: 'official_site',
      status: 'active',
      version: 'latest',
      checkedAt: '2026-07-20'
    },
    {
      platform: 'macOS',
      architecture: 'universal',
      packageType: 'zip',
      fileName: 'VSCode-darwin-universal.zip',
      downloadUrl: 'https://code.visualstudio.com/sha/download?build=stable&os=darwin-universal',
      sourceType: 'official_site',
      status: 'active',
      version: 'latest',
      checkedAt: '2026-07-20'
    }
  ]
};
