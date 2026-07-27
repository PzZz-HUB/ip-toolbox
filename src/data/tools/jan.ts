import type { Tool } from '../types';

export const jan: Tool = {
  id: '25',
  slug: 'jan',
  name: 'Jan',
  icon: '💬',
  shortDescription: '在桌面离线运行大模型的 ChatGPT 开源替代品',
  fullDescription: 'Jan 是一个跨平台的桌面应用程序，可以让你在本地毫无门槛地运行和聊天各种开源大语言模型，并完全保证数据的本地私密性。',
  highlight: '解决在个人电脑离线环境中运行私有化 AI 助手并保留对话隐私的痛点。',
  whyChoose: '提供高度类似原生商业聊天工具的交互逻辑。适合注重个人隐私数据不出本地，同时希望使用体验足够现代化和友好的桌面软件受众。',
  category: "AI 生产力",
  audiences: ['AI 用户'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://jan.ai/',
  githubOwner: 'janhq',
  githubRepo: 'jan',
  license: 'AGPL-3.0',
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
      description: '可以前往官网获取最新的全平台客户端安装包。',
      url: 'https://jan.ai/download/',
      sourceTrust: 'official'
    }
  ]
};
