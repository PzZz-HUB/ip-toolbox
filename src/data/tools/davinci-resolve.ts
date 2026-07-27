import type { Tool } from '../types';

export const davinciResolve: Tool = {
  id: '34',
  slug: 'davinci-resolve',
  name: 'DaVinci Resolve',
  icon: '🎞️',
  shortDescription: '好莱坞级别的色彩校正与非线性剪辑工具',
  fullDescription: '达芬奇 (DaVinci Resolve) 是唯一一款将剪辑、调色、视觉特效、动态图形和音频后期制作融于一身的解决方案。其提供的高达 95% 功能的完全免费版，是性价比最高的专业影视工具。',
  highlight: '解决专业级别的高精度色彩校正、视觉特效合成以及多轨剪辑问题。',
  whyChoose: '将后期流程整合于一身，基础免费版提供了足以应对影视制作的完整工具链。适合追求高级调色和复杂项目管理，且设备性能充裕的专业剪辑师。',
  keywords: ['剪辑', '视频', '调色', '达芬奇', '后期', 'pr平替'],
  tags: ['官方免费', '专业影视级', '功能极其强大'],
  category: "内容与创作",
  audiences: ['内容创作者'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://www.blackmagicdesign.com/products/davinciresolve',
  license: 'Proprietary',
  githubStars: null,
  starsUpdatedAt: null,
  securityNotes: '免费版不带有任何水印和时间限制。安装包体量较大，请确保电脑存储空间充足。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'website',
      title: '官方网站下载',
      description: '前往 Blackmagic Design 官方网站，下载“DaVinci Resolve”版本（带 Studio 后缀的为付费版，无需下载）。',
      url: 'https://www.blackmagicdesign.com/products/davinciresolve',
      sourceTrust: 'official'
    }
  ]
};
