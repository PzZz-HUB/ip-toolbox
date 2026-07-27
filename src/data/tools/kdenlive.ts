import type { Tool } from '../types';

export const kdenlive: Tool = {
  id: '22',
  slug: 'kdenlive',
  name: 'Kdenlive',
  icon: '🎞️',
  shortDescription: '跨平台的免费开源非线性视频编辑器',
  fullDescription: 'Kdenlive 是基于 KDE 和 MLT 框架的开源视频剪辑软件，支持双轨/多轨剪辑，提供了强大的特效与转场，是目前 Linux 和跨平台开源环境下的顶级剪辑工具之一。',
  highlight: '解决多轨视频非线性剪辑、添加基础转场与特效的日常创作需求。',
  whyChoose: '开源且跨平台，不需要注册账号即可直接使用。适合对系统资源要求不高、处理日常自媒体视频的创作者，是初中级剪辑的务实之选。',
  category: "内容与创作",
  audiences: ['内容创作者'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://kdenlive.org/',
  githubOwner: 'KDE',
  githubRepo: 'kdenlive',
  license: 'GPL-3.0',
  githubStars: 5363,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'website',
      title: '官方版本下载',
      description: '前往官方下载安装包或绿色免安装版本。',
      url: 'https://kdenlive.org/download/',
      sourceTrust: 'official'
    }
  ]
};
