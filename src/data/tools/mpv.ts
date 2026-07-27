import type { Tool } from '../types';

export const mpv: Tool = {
  id: '16',
  slug: 'mpv',
  name: 'MPV',
  icon: '🎬',
  shortDescription: '极简极速、高度可定制的开源视频播放器',
  fullDescription: 'MPV 是一款免费、开源、跨平台的纯粹媒体播放器。它没有传统的臃肿界面，依靠强大的命令行配置与极高品质的视频输出渲染而备受极客群体推崇。',
  highlight: '解决视频播放器占用系统资源过高以及画质渲染上限不足的问题。',
  whyChoose: '没有传统多余的图形界面，高度依赖键盘快捷键和配置文件。适合有一定技术基础，追求极低资源消耗或需要自定义渲染算法的进阶用户。',
  category: "极客与基建",
  audiences: ['普通电脑用户'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://mpv.io/',
  githubOwner: 'mpv-player',
  githubRepo: 'mpv',
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
      title: '官方下载页面',
      description: 'MPV 官方不直接提供编译好的安装包，请前往官网下载由社区维护的各个平台的最新编译版本。',
      url: 'https://mpv.io/installation/',
      sourceTrust: 'official'
    }
  ]
};
