import type { Tool } from '../types';

export const losslesscut: Tool = {
  id: '6',
  slug: 'losslesscut',
  name: 'LosslessCut',
  icon: '✂️',
  shortDescription: '跨平台无损视频剪辑与拼接工具',
  fullDescription: 'LosslessCut 是一款开源的音视频无损剪辑工具。它直接对数据流进行切割与拼接，无需重新编码，速度极快且不损失画质。',
  highlight: '解决在不重新编码视频的情况下，快速剪切或拼接视频片段的需求。',
  whyChoose: '处理过程不涉及重新渲染，能够瞬间完成切片并保留原始画质。适合仅需去掉视频多余部分、截取片段，且反感漫长导出等待的用户。',
  category: "极客与基建",
  audiences: ['内容创作者'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://mifi.no/losslesscut/',
  githubOwner: 'mifi',
  githubRepo: 'lossless-cut',
  license: 'GPL-2.0',
  githubStars: 42410,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [
    {
      platform: 'Windows',
      architecture: 'x64',
      packageType: '7z',
      fileName: 'LosslessCut-win-x64.7z',
      downloadUrl: 'https://github.com/mifi/lossless-cut/releases/download/v3.69.0/LosslessCut-win-x64.7z',
      sourceType: 'github_releases',
      status: 'active',
      version: 'v3.69.0',
      checkedAt: '2026-07-20'
    },
    {
      platform: 'Windows',
      architecture: 'arm64',
      packageType: '7z',
      fileName: 'LosslessCut-win-arm64.7z',
      downloadUrl: 'https://github.com/mifi/lossless-cut/releases/download/v3.69.0/LosslessCut-win-arm64.7z',
      sourceType: 'github_releases',
      status: 'active',
      version: 'v3.69.0',
      checkedAt: '2026-07-20'
    },
    {
      platform: 'macOS',
      architecture: 'x64',
      packageType: 'dmg',
      fileName: 'LosslessCut-mac-x64.dmg',
      downloadUrl: 'https://github.com/mifi/lossless-cut/releases/download/v3.69.0/LosslessCut-mac-x64.dmg',
      sourceType: 'github_releases',
      status: 'active',
      version: 'v3.69.0',
      checkedAt: '2026-07-20'
    },
    {
      platform: 'macOS',
      architecture: 'arm64',
      packageType: 'dmg',
      fileName: 'LosslessCut-mac-arm64.dmg',
      downloadUrl: 'https://github.com/mifi/lossless-cut/releases/download/v3.69.0/LosslessCut-mac-arm64.dmg',
      sourceType: 'github_releases',
      status: 'active',
      version: 'v3.69.0',
      checkedAt: '2026-07-20'
    },
    {
      platform: 'Linux',
      architecture: 'x64',
      packageType: 'AppImage',
      fileName: 'LosslessCut-linux-x86_64.AppImage',
      downloadUrl: 'https://github.com/mifi/lossless-cut/releases/download/v3.69.0/LosslessCut-linux-x86_64.AppImage',
      sourceType: 'github_releases',
      status: 'active',
      version: 'v3.69.0',
      checkedAt: '2026-07-20'
    }
  ]
};
