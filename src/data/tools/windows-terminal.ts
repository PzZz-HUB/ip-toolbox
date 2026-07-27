import type { Tool } from '../types';

export const windowsTerminal: Tool = {
  id: '41',
  slug: 'windows-terminal',
  name: 'Windows Terminal',
  icon: '🪟',
  shortDescription: '微软官方开源的现代化命令行终端环境',
  fullDescription: 'Windows Terminal 是一款面向 Windows 用户的新式终端应用，支持多标签页、拆分窗格、GPU 渲染文本以及丰富的定制功能。完美集成 PowerShell、CMD 和 WSL。',
  highlight: '解决 Windows 原生命令行缺少多标签页和现代化排版渲染的交互短板。',
  whyChoose: '完美融合了 PowerShell、CMD 和 WSL 终端环境。适合经常需要在字符终端下工作，对界面美观度、渲染速度和效率快捷键有高要求的 Windows 开发者。',
  keywords: ['终端', 'terminal', 'cmd', 'powershell', 'wsl'],
  tags: ['微软官方', '免费开源', '极简高效'],
  category: "远程与运维",
  audiences: ['开发者'],
  platforms: ['Windows'],
  officialUrl: 'https://github.com/microsoft/terminal',
  githubOwner: 'microsoft',
  githubRepo: 'terminal',
  license: 'MIT',
  githubStars: null,
  starsUpdatedAt: null,
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'website',
      title: 'Microsoft Store 安装 (推荐)',
      description: '通过系统自带商店安装，获取无缝自动更新体验。',
      url: 'https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701',
      sourceTrust: 'official'
    },
    {
      type: 'github_release',
      title: 'GitHub Releases 下载',
      description: '前往官方开源仓库手动下载安装包。',
      url: 'https://github.com/microsoft/terminal/releases',
      sourceTrust: 'official'
    }
  ]
};
