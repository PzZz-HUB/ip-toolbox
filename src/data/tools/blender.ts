import type { Tool } from '../types';

export const blender: Tool = {
  id: '19',
  slug: 'blender',
  name: 'Blender',
  icon: '🧊',
  shortDescription: '全能的开源 3D 创作套件',
  fullDescription: 'Blender 是一款免费的开源 3D 创作套件，支持整个 3D 管线，包括建模、绑定、动画、模拟、渲染、合成与运动跟踪，甚至视频编辑和游戏制作。',
  highlight: '解决从多边形建模、材质渲染到动画制作的完整 3D 内容生产需求。',
  whyChoose: '开源界功能最全面的 3D 套件，免去了高昂的商业软件订阅费用。适合独立动画制作人、游戏资产建模师，以及预算有限但需要工业级渲染的团队。',
  category: "内容与创作",
  audiences: ['内容创作者'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://www.blender.org/',
  githubOwner: 'blender',
  githubRepo: 'blender',
  license: 'GPL-2.0',
  githubStars: 19385,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'website',
      title: '官方网站下载',
      description: '前往 Blender 官方下载页面，选择适配你电脑系统的最新稳定版。',
      url: 'https://www.blender.org/download/',
      sourceTrust: 'official'
    }
  ]
};
