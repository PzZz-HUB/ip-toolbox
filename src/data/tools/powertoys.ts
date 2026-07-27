import type { Tool } from '../types';

export const powertoys: Tool = {
  id: '5',
  slug: 'powertoys',
  name: 'PowerToys',
  icon: '🛠️',
  shortDescription: '微软官方出品的 Windows 系统增强工具集',
  fullDescription: '详细评测与深度解析请见下方专栏。',
  highlight: '解决 Windows 原生系统在窗口管理、文件预览等细节功能上的缺失。',
  category: "极客与基建",
  audiences: ['普通电脑用户'],
  platforms: ['Windows'],
  officialUrl: 'https://learn.microsoft.com/windows/powertoys/',
  githubOwner: 'microsoft',
  githubRepo: 'PowerToys',
  license: 'MIT',
  githubStars: 136804,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [
    {
      platform: 'Windows',
      architecture: 'x64',
      packageType: 'exe',
      fileName: 'PowerToysSetup-0.100.2-x64.exe',
      downloadUrl: 'https://github.com/microsoft/PowerToys/releases/download/v0.100.2/PowerToysSetup-0.100.2-x64.exe',
      sourceType: 'github_releases',
      status: 'active',
      version: 'v0.100.2',
      checkedAt: '2026-07-20'
    },
    {
      platform: 'Windows',
      architecture: 'arm64',
      packageType: 'exe',
      fileName: 'PowerToysSetup-0.100.2-arm64.exe',
      downloadUrl: 'https://github.com/microsoft/PowerToys/releases/download/v0.100.2/PowerToysSetup-0.100.2-arm64.exe',
      sourceType: 'github_releases',
      status: 'active',
      version: 'v0.100.2',
      checkedAt: '2026-07-20'
    }
  ]
};
