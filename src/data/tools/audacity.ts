import type { Tool } from '../types';

export const audacity: Tool = {
  id: '23',
  slug: 'audacity',
  name: 'Audacity',
  icon: '🎧',
  shortDescription: '老牌且经典的开源音频录制与编辑软件',
  fullDescription: 'Audacity 是一款易于使用的多轨音频编辑器和录音机，常用于录制现场音频、将磁带和录音转录为数字录音或 CD、编辑各种音频文件，以及调整音频速度和音高。',
  highlight: '解决音频录制、剪辑、多轨混音以及基础降噪等后期音频处理需求。',
  whyChoose: '极其成熟的跨平台音频项目，支持海量第三方效果插件。适合有播客录制、人声去噪、简单混音需求，且不需要动用重量级商业编曲软件的个人创作者。',
  category: "内容与创作",
  audiences: ['内容创作者'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://www.audacityteam.org/',
  githubOwner: 'audacity',
  githubRepo: 'audacity',
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
      title: '官网下载页面',
      description: '可以从其官方提供的高速 CDN 下载最新稳定版。',
      url: 'https://www.audacityteam.org/download/',
      sourceTrust: 'official'
    }
  ]
};
