import type { Tool } from '../types';

export const sevenZip: Tool = {
  id: '4',
  slug: '7zip',
  name: '7-Zip',
  icon: '🗜️',
  shortDescription: '开源免费的压缩与解压缩软件',
  fullDescription: '7-Zip 是一款开源的压缩软件，提供了极高的压缩比，使用 LZMA 和 LZMA2 压缩算法，支持 7z、XZ、BZIP2、GZIP、TAR、ZIP 和 WIM 等多种格式。',
  highlight: '解决日常文件中各类压缩格式的打包与无损解压需求。',
  whyChoose: '界面虽然老旧，但完全没有弹窗广告，且提供行业标准级别的压缩率。适合追求软件纯粹功能、不需要花哨界面的传统电脑用户。',
  keywords: ['解压', '压缩', 'rar', 'zip', '7z'],
  tags: ['免费无广', '高压缩比', '装机必备'],
  category: "极客与基建",
  audiences: ['普通电脑用户'],
  platforms: ['Windows'],
  officialUrl: 'https://www.7-zip.org/',
  githubOwner: 'ip7z',
  githubRepo: '7zip',
  license: 'GNU LGPL',
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
      fileName: '7z2602-x64.exe',
      downloadUrl: 'https://github.com/ip7z/7zip/releases/download/26.02/7z2602-x64.exe',
      sourceType: 'github_releases',
      status: 'active',
      version: '26.02',
      checkedAt: '2026-07-20'
    },
    {
      platform: 'Windows',
      architecture: 'x86',
      packageType: 'exe',
      fileName: '7z2602.exe',
      downloadUrl: 'https://github.com/ip7z/7zip/releases/download/26.02/7z2602.exe',
      sourceType: 'github_releases',
      status: 'active',
      version: '26.02',
      checkedAt: '2026-07-20'
    },
    {
      platform: 'Windows',
      architecture: 'arm64',
      packageType: 'exe',
      fileName: '7z2602-arm64.exe',
      downloadUrl: 'https://github.com/ip7z/7zip/releases/download/26.02/7z2602-arm64.exe',
      sourceType: 'github_releases',
      status: 'active',
      version: '26.02',
      checkedAt: '2026-07-20'
    }
  ]
};
