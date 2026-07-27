import type { Tool } from '../types';

export const clashVergeRev: Tool = {
  id: '29',
  slug: 'clash-verge-rev',
  name: 'Clash Verge Rev',
  icon: '🌐',
  shortDescription: '跨平台、高颜值的网络连接管理工具',
  fullDescription: '基于 Tauri 框架打造的现代网络配置客户端，提供原生的系统集成体验。支持丰富的规则配置与订阅管理，是网络管理的绝佳选择。',
  highlight: '解决现代操作系统的复杂网络环境路由与代理调度问题。',
  whyChoose: '采用现代框架构建，内存占用低且界面易懂。相比老一代客户端，它的订阅解析功能对新手更友好，适合日常跨平台办公使用。',
  keywords: ['代理', '网络', '翻墙', '科学上网', 'clash'],
  tags: ['免费开源', '极简界面', '跨平台'],
  comparisonGroup: 'network-client',
  category: "网络与代理",
  audiences: ['跨境用户'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://github.com/clash-verge-rev/clash-verge-rev',
  githubOwner: 'clash-verge-rev',
  githubRepo: 'clash-verge-rev',
  license: 'GPL-3.0',
  githubStars: null,
  starsUpdatedAt: null,
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'github_release',
      title: 'GitHub Releases',
      description: '前往官方开源仓库下载对应平台的最新安装包。',
      url: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
      sourceTrust: 'official'
    }
  ]
};
