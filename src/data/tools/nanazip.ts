import type { Tool } from '../types';

export const nanazip: Tool = {
  id: '15',
  slug: 'nanazip',
  name: 'NanaZip',
  icon: '🗜️',
  shortDescription: '适配 Windows 11 现代右键菜单的极速解压软件',
  fullDescription: 'NanaZip 是基于知名开源软件 7-Zip 源代码衍生的一款现代化分支版本。它完美融合了 Windows 11 的全新右键菜单体验，并加入了众多面向现代系统的性能优化。',
  highlight: '解决 Windows 11 下第三方解压软件无法融入原生右键菜单的问题。',
  whyChoose: '沿用 7-Zip 的成熟压缩内核，但针对现代 Windows 系统做了深度整合。如果你反感在右键菜单里多点一次“显示更多选项”，这是首选。',
  category: "极客与基建",
  audiences: ['普通电脑用户'],
  platforms: ['Windows'],
  officialUrl: 'https://github.com/M2Team/NanaZip',
  githubOwner: 'M2Team',
  githubRepo: 'NanaZip',
  license: 'MIT',
  githubStars: 14921,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'website',
      title: 'Microsoft Store 官方获取',
      description: '推荐直接通过微软商店安装，可获得自动更新与沙盒级安全保证。',
      url: 'https://apps.microsoft.com/store/detail/nanazip/9N8G7TSCL181',
      sourceTrust: 'official'
    }
  ]
};
