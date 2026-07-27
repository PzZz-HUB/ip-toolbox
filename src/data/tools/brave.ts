import type { Tool } from '../types';

export const braveTool: Tool = {
  id: 'brave-browser',
  slug: 'brave',
  name: 'Brave Browser',
  icon: '🦁',
  shortDescription: '自带强力去广告和防追踪功能的开源隐私浏览器。',
  fullDescription: 'Brave 是一款基于 Chromium 构建的极速浏览器。它在底层默认拦截所有跟踪器和侵入式广告，不仅提升了网页加载速度，更在物理级别阻断了跨站指纹追踪，是跨境出海用户保护数字身份的绝佳首选。',
  highlight: '开箱即用的底层防指纹追踪，告别烦人的网页广告',
  keywords: ['浏览器', '隐私', '去广告', '指纹', '防追踪', '跨境', 'browser'],
  tags: ['极致隐私', 'Chromium内核', '自带去广告'],
  
  category: '环境与安全',
  audiences: ['跨境用户', '普通电脑用户', '开发者'],
  
  platforms: ['Windows', 'macOS', 'Linux', 'Android', 'iOS'],
  
  officialUrl: 'https://brave.com/',
  
  githubOwner: 'brave',
  githubRepo: 'brave-browser',
  
  license: 'MPL 2.0 (核心全开源)',
  githubStars: 23190, // 按需渲染测试：虽然有 Github 仓库，但在官方主要分发，测试置空
  starsUpdatedAt: '2026-07-27',
  
  securityNotes: 'Brave 是一款高度信赖的开源浏览器。请务必从官方网站下载，切勿使用第三方修改版或绿化版，以防底层隐私保护机制被恶意篡改或注入后门。',
  
  verifiedAt: '2026-07-27',
  status: 'active',
  
  releases: [
    {
      platform: 'Windows',
      architecture: 'universal',
      packageType: 'exe',
      fileName: 'BraveBrowserSetup.exe',
      downloadUrl: 'https://brave.com/download/',
      sourceType: 'official_site',
      status: 'active',
      version: 'Latest',
      checkedAt: '2026-07-27'
    },
    {
      platform: 'macOS',
      architecture: 'universal',
      packageType: 'dmg',
      fileName: 'Brave-Browser.dmg',
      downloadUrl: 'https://brave.com/download/',
      sourceType: 'official_site',
      status: 'active',
      version: 'Latest',
      checkedAt: '2026-07-27'
    }
  ],
  
  installMethods: [
    {
      type: 'website',
      title: '官网直接下载',
      description: '前往官网，将自动识别您的系统并提供最新版安装包',
      url: 'https://brave.com/download/',
      sourceTrust: 'official'
    }
  ]
};
