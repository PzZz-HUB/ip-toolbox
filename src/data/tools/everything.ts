import type { Tool } from '../types';

export const everything: Tool = {
  id: '14',
  slug: 'everything',
  name: 'Everything',
  icon: '🔍',
  shortDescription: 'Windows 下极速的本地文件搜索工具',
  fullDescription: 'Everything 是由 voidtools 开发的 Windows 本地文件搜索引擎。它通过直接读取 NTFS 的 USN 日志，能够瞬间在百万级别的文件库中找到你想要的内容。',
  highlight: '解决 Windows 系统原生搜索文件速度极其缓慢的痛点问题。',
  whyChoose: '能够瞬间建立本地磁盘索引并支持复杂的正则表达式过滤。适合硬盘中存放海量文件，经常需要凭部分关键字快速定位具体文档的用户。',
  category: "极客与基建",
  audiences: ['普通电脑用户'],
  platforms: ['Windows'],
  officialUrl: 'https://www.voidtools.com/',
  license: 'Freeware',
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
      fileName: 'Everything-1.4.1.1024.x64-Setup.exe',
      downloadUrl: 'https://www.voidtools.com/Everything-1.4.1.1024.x64-Setup.exe',
      sourceType: 'official_site',
      status: 'active',
      version: '1.4.1.1024',
      checkedAt: '2026-07-20'
    }
  ]
};
