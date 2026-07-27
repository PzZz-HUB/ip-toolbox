import type { Tool } from '../types';

export const inkscape: Tool = {
  id: '35',
  slug: 'inkscape',
  name: 'Inkscape',
  icon: '🖋️',
  shortDescription: '免费开源的专业矢量图形编辑器',
  fullDescription: 'Inkscape 是一款自由及开源的矢量图形编辑软件。不管是插画、图标、Logo、网页设计还是排版，它都能够完美胜任，被公认为 Adobe Illustrator 的最佳开源替代品。',
  highlight: '解决不受分辨率影响的矢量图形、图标、Logo 以及海报排版设计问题。',
  whyChoose: '原生使用标准的 SVG 格式，节点编辑工具成熟。适合需要输出网页图标、印刷级插图、工业图纸，且需要图形无限放大的视觉设计师。',
  keywords: ['矢量', '设计', '画图', '图标', '插画', 'ai平替'],
  tags: ['免费开源', 'SVG 标准', '排版设计'],
  category: "内容与创作",
  audiences: ['内容创作者'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://inkscape.org/',
  githubOwner: 'inkscape',
  githubRepo: 'inkscape',
  license: 'GPL-3.0',
  githubStars: null,
  starsUpdatedAt: null,
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'website',
      title: '官方网站下载',
      description: '请通过 Inkscape 官网获取原生安装包或绿色版。',
      url: 'https://inkscape.org/release/',
      sourceTrust: 'official'
    }
  ]
};
