import type { Tool } from '../types';

export const docker: Tool = {
  id: '28',
  slug: 'docker',
  name: 'Docker Desktop',
  icon: '🐳',
  shortDescription: '最简单好用的容器化开发与运行环境',
  fullDescription: 'Docker Desktop 是一款在 Windows 和 macOS 上一键式安装的应用程序，它为你打包了完整的 Docker 引擎、CLI 客户端和图形管理界面，是微服务与 AI 部署的利器。',
  highlight: '解决应用程序在不同操作系统间环境依赖不一致以及部署配置复杂的难题。',
  whyChoose: '将 Linux 容器内核与可视化面板打包成桌面应用。适合需要快速拉取环境、隔离微服务、确保本地开发与线上部署一致的软件工程师。',
  category: "远程与运维",
  audiences: ['开发者', 'AI 用户'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://www.docker.com/products/docker-desktop/',
  license: 'Proprietary', // Docker Engine 是开源的，Desktop 有专门的协议
  githubStars: null,
  starsUpdatedAt: null,
  securityNotes: 'Docker Desktop 对小型企业和个人是免费的，大型企业用户需遵循其官方协议许可。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'website',
      title: 'Docker 官网下载',
      description: '前往 Docker 官方网站下载适用于您操作系统的 Desktop 安装程序。',
      url: 'https://www.docker.com/products/docker-desktop/',
      sourceTrust: 'official'
    }
  ]
};
