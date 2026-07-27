import type { Tool } from '../types';

export const krita: Tool = {
  id: '21',
  slug: 'krita',
  name: 'Krita',
  icon: '🎨',
  shortDescription: '专为画师设计的免费开源数字绘画软件',
  fullDescription: 'Krita 是一款专业的免费和开源绘画程序。它由画师为画师设计，旨在提供人人都能负担得起的艺术创作工具。支持概念艺术、插画、漫画和动画制作。',
  highlight: '解决数字绘画、概念艺术创作以及手绘插画的高精度笔刷表现需求。',
  whyChoose: '专为数字绘画优化，提供大量贴近真实质感的笔刷库，支持压感绘图板防抖。适合从事二次元插画、漫画创作、分镜设计的数字原画师。',
  category: "内容与创作",
  audiences: ['内容创作者'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://krita.org/',
  githubOwner: 'KDE',
  githubRepo: 'krita',
  license: 'GPL-3.0',
  githubStars: 10106,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'website',
      title: '官方免费下载',
      description: '请通过官网直接获取免费安装包。也可在 Steam / Epic 商店以付费支持的形式购买自动更新版。',
      url: 'https://krita.org/zh/download-zh/',
      sourceTrust: 'official'
    }
  ]
};
