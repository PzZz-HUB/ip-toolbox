import type { Tool } from '../types';

export const v2rayn: Tool = {
  id: '31',
  slug: 'v2rayn',
  name: 'v2rayN',
  icon: '⚡',
  shortDescription: 'Windows 上最经典老牌的网络配置客户端',
  fullDescription: 'v2rayN 是一个基于 Windows 的老牌网络配置图形客户端。它拥有极高的生态兼容性，能够承载极其复杂的底层网络规则调度。',
  highlight: '提供 Windows 平台上稳定且高兼容性的代理协议管理。',
  whyChoose: '专注于 Windows 平台，界面传统但功能极其稳定。如果你有手动配置内核、精细管理本地路由策略的需求，它提供了更细致的控制力。',
  keywords: ['代理', '网络', 'v2ray', '科学上网', '翻墙'],
  tags: ['免费开源', '老牌稳定', '生态完善'],
  comparisonGroup: 'network-client',
  category: "网络与代理",
  audiences: ['跨境用户'],
  platforms: ['Windows'],
  officialUrl: 'https://github.com/2dust/v2rayN',
  githubOwner: '2dust',
  githubRepo: 'v2rayN',
  license: 'GPL-3.0',
  githubStars: 112330,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '运行可能需要系统中已安装 .NET Framework 等依赖，详情请见官方说明。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'github_release',
      title: 'GitHub Releases',
      description: '前往官方开源仓库下载最新版本的 ZIP 压缩包（内带 Core 版本最佳）。',
      url: 'https://github.com/2dust/v2rayN/releases',
      sourceTrust: 'official'
    }
  ]
};
