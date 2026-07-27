import type { Tool } from '../types';

export const nekobox: Tool = {
  id: '32',
  slug: 'nekobox',
  name: 'NekoBox (NekoRay)',
  icon: '📦',
  shortDescription: '基于 Qt 跨平台架构的通用网络连接工具',
  fullDescription: 'NekoBox (也称 NekoRay) 是一款使用 C++ 与 Qt 开发的跨平台网络连接配置工具。其内核轻量且性能优越，支持多种主流加密代理协议的统一管理。',
  highlight: '解决多协议底层通信的高性能和低资源消耗需求。',
  whyChoose: '基于 C++ 开发，专注于核心网络性能。与基于网页技术的客户端相比，它更适合在老旧硬件或极高网络吞吐场景下长期挂机运行。',
  keywords: ['代理', '网络', 'nekobox', 'nekoray', '科学上网'],
  tags: ['免费开源', '性能强劲', '跨平台'],
  comparisonGroup: 'network-client',
  category: "网络与代理",
  audiences: ['跨境用户'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://github.com/MatsuriDayo/nekoray',
  githubOwner: 'MatsuriDayo',
  githubRepo: 'nekoray',
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
      description: '前往官方开源仓库下载最新版本。',
      url: 'https://github.com/MatsuriDayo/nekoray/releases',
      sourceTrust: 'official'
    }
  ]
};
