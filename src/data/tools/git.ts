import type { Tool } from '../types';

export const git: Tool = {
  id: '27',
  slug: 'git',
  name: 'Git',
  icon: '📚',
  shortDescription: '分布式版本控制系统的行业标准',
  fullDescription: 'Git 是一款免费开源的分布式版本控制系统，旨在快速高效地处理从超小到超大的项目。它是现代软件开发与代码协作的绝对基石。',
  highlight: '解决多人协作开发时的代码版本追踪、分支管理以及历史版本回溯需求。',
  whyChoose: '现代软件工程的绝对基础设施，完全分布式且性能优异。它是你接入开源生态的必经之路，是每一位从事编程工作用户的基底技能。',
  category: "远程与运维",
  audiences: ['开发者'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://git-scm.com/',
  license: 'GPL-2.0',
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
      description: '请通过 Git 官网获取适用于您操作系统的最新安装包。',
      url: 'https://git-scm.com/downloads',
      sourceTrust: 'official'
    }
  ]
};
