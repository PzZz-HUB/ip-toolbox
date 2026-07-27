import type { Tool } from '../types';

export const keepassxc: Tool = {
  id: '13',
  slug: 'keepassxc',
  name: 'KeePassXC',
  icon: '🔐',
  shortDescription: '跨平台的本地密码管理器',
  fullDescription: 'KeePassXC 是 KeePass 密码安全保险箱的社区分发版，具有高度的跨平台兼容性，所有密码均离线加密保存在本地，彻底掌控你的数据隐私。',
  highlight: '解决用户多账号密码的本地加密生成、存储与安全管理问题。',
  whyChoose: '数据库完全存储在本地，不依赖云端服务器。适合对数据隐私要求极高，不愿意将密码库托管给任何第三方商业公司的安全敏感型用户。',
  category: '普通用户',
  audiences: ['普通电脑用户'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://keepassxc.org/',
  githubOwner: 'keepassxreboot',
  githubRepo: 'keepassxc',
  license: 'GPL-2.0',
  githubStars: 28166,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [
    {
      platform: 'Windows',
      architecture: 'x64',
      packageType: 'msi',
      fileName: 'KeePassXC-2.7.12-Win64.msi',
      downloadUrl: 'https://github.com/keepassxreboot/keepassxc/releases/download/2.7.12/KeePassXC-2.7.12-Win64.msi',
      sourceType: 'github_releases',
      status: 'active',
      version: '2.7.12',
      checkedAt: '2026-07-20'
    },
    {
      platform: 'macOS',
      architecture: 'x64',
      packageType: 'dmg',
      fileName: 'KeePassXC-2.7.12-x86_64.dmg',
      downloadUrl: 'https://github.com/keepassxreboot/keepassxc/releases/download/2.7.12/KeePassXC-2.7.12-x86_64.dmg',
      sourceType: 'github_releases',
      status: 'active',
      version: '2.7.12',
      checkedAt: '2026-07-20'
    },
    {
      platform: 'Linux',
      architecture: 'x64',
      packageType: 'AppImage',
      fileName: 'KeePassXC-2.7.12-x86_64.AppImage',
      downloadUrl: 'https://github.com/keepassxreboot/keepassxc/releases/download/2.7.12/KeePassXC-2.7.12-x86_64.AppImage',
      sourceType: 'github_releases',
      status: 'active',
      version: '2.7.12',
      checkedAt: '2026-07-20'
    }
  ],
  installMethods: [
    {
      type: 'package_manager',
      title: 'Homebrew (macOS)',
      description: 'Mac 用户可以通过 Homebrew Cask 一键安装',
      command: 'brew install --cask keepassxc',
      sourceTrust: 'official'
    }
  ]
};
