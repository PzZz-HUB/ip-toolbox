import type { Tool } from '../types';

export const lmStudio: Tool = {
  id: '36',
  slug: 'lm-studio',
  name: 'LM Studio',
  icon: '🧠',
  shortDescription: '零配置在本地运行各种开源大语言模型',
  fullDescription: 'LM Studio 是一个完全离线的桌面应用程序，能让你在电脑上用极其优雅直观的界面去发现、下载和运行数以千计的开源大语言模型（如 Llama, Qwen）。',
  highlight: '解决在本地环境中通过图形化界面浏览、下载和对话大语言模型的问题。',
  whyChoose: '将模型库与聊天界面融为一体，开箱即用。适合没有任何编程基础，不愿折腾终端命令行，只想立刻体验开源模型的纯粹对话用户。',
  keywords: ['ai', '大模型', '本地部署', 'chatgpt', 'llm', 'llama'],
  tags: ['官方免费', '极其易用', '开箱即用'],
  category: "AI 生产力",
  audiences: ['AI 用户'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://lmstudio.ai/',
  license: 'Proprietary',
  githubStars: null,
  starsUpdatedAt: null,
  securityNotes: '该工具供个人离线免费使用，模型运行完全处于本地，充分保障您的聊天数据隐私。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'website',
      title: '官方下载页面',
      description: '前往官网下载适配你操作系统（及芯片架构）的最新版本。',
      url: 'https://lmstudio.ai/',
      sourceTrust: 'official'
    }
  ]
};
