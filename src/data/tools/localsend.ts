import type { Tool } from '../types';

export const localsend: Tool = {
  id: '1',
  slug: 'localsend',
  name: 'LocalSend',
  icon: '🚀',
  shortDescription: '跨平台局域网文件互传',
  fullDescription: 'LocalSend 是一个免费、开源的跨平台应用，支持在无外网环境下通过局域网安全互传文件和文本。',
  highlight: '解决跨不同操作系统、不同品牌设备间的局域网文件互传问题。',
  whyChoose: '无需连接互联网即可完成端到端加密传输。相比云盘中转或通讯软件传文件，它没有大小限制，速度仅受限于你的路由器内网带宽。',
  category: "极客与基建",
  audiences: ['普通电脑用户'],
  platforms: ['Windows', 'macOS', 'Linux'],
  license: 'MIT',
  officialUrl: 'https://localsend.org/',
  githubOwner: 'localsend',
  githubRepo: 'localsend',
  githubStars: 86135,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-17',
  status: 'active',
  releases: [
    {
      platform: 'Windows',
      architecture: 'x64',
      packageType: 'exe',
      fileName: 'LocalSend-1.17.0-windows-x86-64.exe',
      downloadUrl: 'https://github.com/localsend/localsend/releases/download/v1.17.0/LocalSend-1.17.0-windows-x86-64.exe',
      sourceType: 'github_releases',
      status: 'active',
      version: 'v1.17.0',
      checkedAt: '2026-07-17'
    },
    {
      platform: 'macOS',
      packageType: 'dmg',
      fileName: 'LocalSend-1.17.0-macos.dmg',
      downloadUrl: 'https://github.com/localsend/localsend/releases/download/v1.17.0/LocalSend-1.17.0-macos.dmg',
      sourceType: 'github_releases',
      status: 'active',
      version: 'v1.17.0',
      checkedAt: '2026-07-17'
    },
    {
      platform: 'Linux',
      architecture: 'x64',
      packageType: 'AppImage',
      fileName: 'LocalSend-1.17.0-linux-x86-64.AppImage',
      downloadUrl: 'https://github.com/localsend/localsend/releases/download/v1.17.0/LocalSend-1.17.0-linux-x86-64.AppImage',
      sourceType: 'github_releases',
      status: 'active',
      version: 'v1.17.0',
      checkedAt: '2026-07-17'
    }
  ]
};
