import type { Tool } from '../types';

export const chatbox: Tool = {
  id: '37',
  slug: 'chatbox',
  name: 'Chatbox',
  icon: '💬',
  shortDescription: '极简好看的桌面大模型 AI 客户端',
  fullDescription: '详细评测与深度解析请见下方专栏。',
  highlight: '解决将多个大模型 API 聚合到一个前端进行统一交互管理的对话需求。',
  keywords: ['ai', '对话', 'chatgpt', '大模型', '前端', 'api'],
  tags: ['免费开源', '极简界面', '聚合客户端'],
  category: "AI 生产力",
  audiences: ['AI 用户'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://chatboxai.app/',
  githubOwner: 'Bin-Huang',
  githubRepo: 'chatbox',
  license: 'GPL-3.0',
  githubStars: null,
  starsUpdatedAt: null,
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'github_release',
      title: 'GitHub Releases',
      description: '前往官方开源仓库下载对应平台的最新安装包。',
      url: 'https://github.com/Bin-Huang/chatbox/releases',
      sourceTrust: 'official'
    },
    {
      type: 'website',
      title: '官方网站下载',
      description: '通过官网高速源获取客户端。',
      url: 'https://chatboxai.app/zh',
      sourceTrust: 'official'
    }
  ]
};
