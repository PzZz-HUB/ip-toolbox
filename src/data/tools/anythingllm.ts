import type { Tool } from '../types';

export const anythingllm: Tool = {
  id: '26',
  slug: 'anythingllm',
  name: 'AnythingLLM',
  icon: '🧠',
  shortDescription: '全功能、本地可用的 AI 知识库与 RAG 解决方案',
  fullDescription: 'AnythingLLM 是一款全堆栈的 AI 应用程序，它能够将任何文档、资源或内容转化为任何语言模型在聊天中可用的私有知识库。',
  highlight: '解决将企业文档或个人资料转换为可检索对话的本地知识库管理问题。',
  whyChoose: '内置了完整的嵌入模型和向量数据库管理功能。适合手头有大量 PDF 或私有文档，希望将其变成能够回答专业领域问题智能助手的知识密集型群体。',
  category: "AI 生产力",
  audiences: ['AI 用户'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://anythingllm.com/',
  githubOwner: 'Mintplex-Labs',
  githubRepo: 'anything-llm',
  license: 'MIT',
  githubStars: 63944,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'website',
      title: '桌面版客户端下载',
      description: '提供了一键式安装的 Desktop 版本，无需复杂的 Docker 或终端操作。',
      url: 'https://anythingllm.com/desktop',
      sourceTrust: 'official'
    },
    {
      type: 'docker',
      title: 'Docker 服务端部署',
      description: '适合企业级或多用户使用的独立服务端部署方案。',
      command: 'docker pull mintplexlabs/anythingllm',
      sourceTrust: 'official'
    }
  ]
};
