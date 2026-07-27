import type { Tool } from '../types';

export const pot: Tool = {
  id: '33',
  slug: 'pot',
  name: 'Pot',
  icon: '🍲',
  shortDescription: '纯粹而强大的跨平台划词翻译软件',
  fullDescription: 'Pot 是一款跨平台的划词翻译工具，支持接入多种翻译 API 以及 OCR 文字识别引擎，让你在查阅外文资料和屏幕生肉信息时获得沉浸式体验。',
  highlight: '解决查阅外文资料和生肉软件时的跨软件划词翻译问题。',
  whyChoose: '支持多接口接入和 OCR 识别。相比于依赖单一厂商的翻译软件，它能让你自由选择翻译引擎，保障隐私的同时提高阅读效率。',
  keywords: ['翻译', '划词', '英语', '查词', 'ocr', 'pot'],
  tags: ['免费开源', '极速翻译', '支持 OCR'],
  category: "AI 生产力",
  audiences: ['跨境用户'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://pot-app.com/',
  githubOwner: 'pot-app',
  githubRepo: 'pot-desktop',
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
      description: '前往官方网站下载适用于你的操作系统的最新安装包。',
      url: 'https://pot-app.com/download.html',
      sourceTrust: 'official'
    }
  ]
};
