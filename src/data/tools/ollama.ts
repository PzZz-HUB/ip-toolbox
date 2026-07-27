import type { Tool } from '../types';

export const ollama: Tool = {
  id: '7',
  slug: 'ollama',
  name: 'Ollama',
  icon: '🦙',
  shortDescription: '本地一键运行大语言模型的轻量化框架',
  fullDescription: '详细评测与深度解析请见下方专栏。',
  highlight: '解决在本地无门槛部署大语言模型，并提供标准 API 接口的问题。',
  category: "AI 生产力",
  audiences: ['AI 用户'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://ollama.com/',
  githubOwner: 'ollama',
  githubRepo: 'ollama',
  license: 'MIT',
  githubStars: null,
  starsUpdatedAt: null,
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [
    {
      platform: 'Windows',
      architecture: 'x64',
      packageType: 'exe',
      fileName: 'OllamaSetup.exe',
      downloadUrl: 'https://github.com/ollama/ollama/releases/download/v0.32.1/OllamaSetup.exe',
      sourceType: 'github_releases',
      status: 'active',
      version: 'v0.32.1',
      checkedAt: '2026-07-20'
    },
    {
      platform: 'macOS',
      architecture: 'universal',
      packageType: 'dmg',
      fileName: 'Ollama.dmg',
      downloadUrl: 'https://github.com/ollama/ollama/releases/download/v0.32.1/Ollama.dmg',
      sourceType: 'github_releases',
      status: 'active',
      version: 'v0.32.1',
      checkedAt: '2026-07-20'
    },
    {
      platform: 'Linux',
      architecture: 'x64',
      packageType: 'tar.gz',
      fileName: 'ollama-linux-amd64.tar.zst',
      downloadUrl: 'https://github.com/ollama/ollama/releases/download/v0.32.1/ollama-linux-amd64.tar.zst',
      sourceType: 'github_releases',
      status: 'active',
      version: 'v0.32.1',
      checkedAt: '2026-07-20'
    }
  ]
};
