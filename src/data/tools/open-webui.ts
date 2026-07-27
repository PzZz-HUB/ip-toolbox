import type { Tool } from '../types';

export const openWebUI: Tool = {
  id: '8',
  slug: 'open-webui',
  name: 'Open WebUI',
  icon: '🌐',
  shortDescription: '适配本地大语言模型的可扩展 Web 交互界面',
  fullDescription: 'Open WebUI 是一个功能强大且易用的 AI 交互界面，完美适配 Ollama 和 OpenAI API，支持文档库 RAG、语音交互和角色定制。',
  highlight: '解决为本地大语言模型提供类似企业级团队私有知识库界面的部署需求。',
  whyChoose: '提供基于角色的访问控制和文档向量化支持。适合不仅要个人对话，更需要将本地模型分享给小型团队，并搭建基础私有知识库的进阶场景。',
  category: "AI 生产力",
  audiences: ['AI 用户'],
  platforms: ['Browser', 'Linux', 'Windows', 'macOS'],
  officialUrl: 'https://openwebui.com/',
  githubOwner: 'open-webui',
  githubRepo: 'open-webui',
  license: 'MIT',
  githubStars: 146895,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [], // 不通过传统安装包发行，主要通过 Docker 或 pip 安装
  installMethods: [
    {
      type: 'docker',
      title: 'Docker 本地部署',
      description: '使用 Docker 一键拉取镜像并运行',
      command: [
        'docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway \\',
        '  -v open-webui:/app/backend/data \\',
        '  --name open-webui --restart always \\',
        '  ghcr.io/open-webui/open-webui:main'
      ],
      sourceTrust: 'official'
    }
  ]
};
