import type { Tool } from '../types';

export const rufus: Tool = {
  id: '39',
  slug: 'rufus',
  name: 'Rufus',
  icon: '💾',
  shortDescription: '绝对纯净小巧的 USB 启动盘制作工具',
  fullDescription: 'Rufus 能够极其快速地格式化并创建可引导的 USB 闪存盘。它是安装纯净版系统（Windows 或 Linux）的必备神器，拒绝任何流氓 PE 和恶意捆绑。',
  highlight: '解决将操作系统镜像写入 U 盘并制作安全可靠的系统启动盘问题。',
  whyChoose: '代码开源且不捆绑恶意软件。相比于市面上繁杂的商业 PE 工具，它只做将镜像写入 U 盘这一件事，确保你安装出的系统干净无后门。',
  keywords: ['u盘', '启动盘', '系统盘', 'pe', '装机', '重装系统'],
  tags: ['免费开源', '极速纯净', '单文件便携'],
  category: "极客与基建",
  audiences: ['普通电脑用户'],
  platforms: ['Windows'],
  officialUrl: 'https://rufus.ie/',
  githubOwner: 'pbatard',
  githubRepo: 'rufus',
  license: 'GPL-3.0',
  githubStars: null,
  starsUpdatedAt: null,
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'github_release',
      title: 'GitHub Releases',
      description: '前往官方开源仓库下载最新版本的便携版 (.exe) 即可直接运行。',
      url: 'https://github.com/pbatard/rufus/releases',
      sourceTrust: 'official'
    },
    {
      type: 'website',
      title: '官方网站下载',
      description: '在官网也可以直接下载便携版。',
      url: 'https://rufus.ie/zh/',
      sourceTrust: 'official'
    }
  ]
};
