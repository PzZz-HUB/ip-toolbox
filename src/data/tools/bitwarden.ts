import type { Tool } from '../types';

export const bitwarden: Tool = {
  id: '40',
  slug: 'bitwarden',
  name: 'Bitwarden',
  icon: '🛡️',
  shortDescription: '跨平台且值得信赖的开源密码管理器',
  fullDescription: 'Bitwarden 是一款全平台密码管理解决方案。在密码泄漏事件频发的今天，使用开源透明且端到端加密的管理器，是保护数字资产安全的唯一正确做法。',
  highlight: '解决跨多设备、多浏览器环境下的密码自动生成与同步填充需求。',
  whyChoose: '采用端到端加密的云同步机制，官方基础服务免费。适合需要在手机、电脑和不同浏览器间频繁切换，注重便利性与云端安全平衡的用户。',
  keywords: ['密码', '安全', '1password', '管理', '加密'],
  tags: ['免费开源', '多端同步', '端到端加密'],
  category: '普通用户',
  audiences: ['普通电脑用户', '开发者'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://bitwarden.com/',
  githubOwner: 'bitwarden',
  githubRepo: 'clients',
  license: 'GPL-3.0',
  githubStars: 13420,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '涉及个人核心资产，请务必仅从官方网站或官方应用商店获取扩展与客户端。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'website',
      title: '官方下载页面',
      description: '请通过官方下载中心获取浏览器扩展、桌面客户端与移动端。',
      url: 'https://bitwarden.com/download/',
      sourceTrust: 'official'
    }
  ]
};
