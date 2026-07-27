import type { Tool } from '../types';

export const dbeaver: Tool = {
  id: '42',
  slug: 'dbeaver',
  name: 'DBeaver',
  icon: '🦫',
  shortDescription: '支持所有主流数据库的通用开源客户端',
  fullDescription: 'DBeaver 社区版是一款适用于开发人员、SQL 程序员、数据库管理员和分析师的免费跨平台数据库工具。它支持任何具有 JDBC/ODBC 驱动程序的数据库。',
  highlight: '解决缺乏跨平台且支持市面上绝大多数数据库类型的统一可视化查询工具问题。',
  whyChoose: '基于 Java 架构，生态兼容极高。相比安装多个厂家特定的客户端，它让你用一个工具就能高效连接并操作各类主流的关系型与非关系型数据库。',
  keywords: ['数据库', 'mysql', 'sql', 'postgresql', 'sqlite', 'redis', 'db'],
  tags: ['免费开源', '跨平台', '全数据库支持'],
  category: "远程与运维",
  audiences: ['开发者'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://dbeaver.io/',
  githubOwner: 'dbeaver',
  githubRepo: 'dbeaver',
  license: 'Apache-2.0',
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
      description: '前往官网下载适用于操作系统的 Community Edition (社区免费版) 安装包。',
      url: 'https://dbeaver.io/download/',
      sourceTrust: 'official'
    },
    {
      type: 'github_release',
      title: 'GitHub Releases 下载',
      description: '也可前往官方开源仓库手动下载安装包。',
      url: 'https://github.com/dbeaver/dbeaver/releases',
      sourceTrust: 'official'
    }
  ]
};
