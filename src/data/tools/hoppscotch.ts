import type { Tool } from '../types';

export const hoppscotch: Tool = {
  id: '44',
  slug: 'hoppscotch',
  name: 'Hoppscotch',
  icon: '👽',
  shortDescription: '轻量且极速的开源 API 开发调试工具',
  fullDescription: 'Hoppscotch 是一个开源的 API 开发生态系统。相比于日渐臃肿、强制登录的 Postman，它不仅完全开源免费，还可以直接在浏览器中秒开运行，同时也提供体验极佳的桌面端。',
  highlight: '解决 API 接口请求调试、参数构造与返回结果验证的日常接口开发工作需求。',
  whyChoose: '极度轻量的开源设计，甚至可以在浏览器中直接完成调试。适合反感传统商业工具强制注册、追求纯粹接口联调体验的前后端开发人员。',
  keywords: ['api', '接口', '调试', 'postman', 'http', 'rest'],
  tags: ['免费开源', '极速轻量', '纯粹体验'],
  category: "远程与运维",
  audiences: ['开发者'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://hoppscotch.io/',
  githubOwner: 'hoppscotch',
  githubRepo: 'hoppscotch',
  license: 'MIT',
  githubStars: null,
  starsUpdatedAt: null,
  securityNotes: '如需突破浏览器的跨域限制调试本地 API，请下载桌面端或安装其官方提供的浏览器扩展。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'website',
      title: '网页版即刻使用',
      description: '无需下载安装，直接在浏览器中打开即可进行 API 调试。',
      url: 'https://hoppscotch.io/',
      sourceTrust: 'official'
    },
    {
      type: 'github_release',
      title: '桌面版客户端下载',
      description: '前往官方开源仓库下载独立运行的桌面端程序，突破跨域限制。',
      url: 'https://github.com/hoppscotch/releases/releases',
      sourceTrust: 'official'
    }
  ]
};
