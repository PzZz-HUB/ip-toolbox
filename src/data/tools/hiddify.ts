import type { Tool } from '../types';

export const hiddify: Tool = {
  id: '30',
  slug: 'hiddify',
  name: 'Hiddify',
  icon: '🛡️',
  shortDescription: '支持全平台的全协议网络配置客户端',
  fullDescription: 'Hiddify 是一款支持多种现代网络协议的跨平台客户端。它极大简化了网络路由规则的配置过程，让新手也能在几秒钟内完成连接设置。',
  highlight: '解决复杂网络协议下多平台客户端配置繁琐的问题。',
  whyChoose: '支持目前绝大多数的新型通信协议。如果你的订阅环境较为复杂，或者需要无缝切换多种协议，它的全能性可以大幅降低配置门槛。',
  keywords: ['代理', '网络', '梯子', '科学上网', 'hiddify'],
  tags: ['免费开源', '多协议', '极易上手'],
  comparisonGroup: 'network-client',
  category: "网络与代理",
  audiences: ['跨境用户'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://github.com/hiddify/hiddify-next',
  githubOwner: 'hiddify',
  githubRepo: 'hiddify-next',
  license: 'CC-BY-NC-SA-4.0',
  githubStars: 31714,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'github_release',
      title: 'GitHub Releases',
      description: '前往官方开源仓库下载对应平台的最新安装包。',
      url: 'https://github.com/hiddify/hiddify-next/releases',
      sourceTrust: 'official'
    }
  ]
};
