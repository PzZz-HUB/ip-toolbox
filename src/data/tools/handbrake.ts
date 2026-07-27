import type { Tool } from '../types';

export const handbrake: Tool = {
  id: '3',
  slug: 'handbrake',
  name: 'HandBrake',
  icon: '🍍',
  shortDescription: '跨平台开源视频压缩转码',
  fullDescription: 'HandBrake 是免费的视频转码器，支持几乎所有常见的视频格式压缩、格式转换和体积精简。',
  highlight: '解决视频体积过大、格式不兼容以及在不同设备间的硬转码问题。',
  whyChoose: '内置针对各种设备优化的转码预设参数，并支持批量处理。适合需要将原片压缩体积、调整分辨率以适应网页上传或移动设备播放的创作者。',
  category: "极客与基建",
  audiences: ['内容创作者', '普通电脑用户'],
  platforms: ['Windows', 'macOS', 'Linux'],
  license: 'GPL-2.0',
  officialUrl: 'https://handbrake.fr/',
  githubOwner: 'HandBrake',
  githubRepo: 'HandBrake',
  githubStars: 23861,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-17',
  status: 'active',
  releases: [
    {
      platform: 'Windows',
      architecture: 'x64',
      packageType: 'exe',
      fileName: 'HandBrake-1.11.2-x86_64-Win_GUI.exe',
      downloadUrl: 'https://github.com/HandBrake/HandBrake/releases/download/1.11.2/HandBrake-1.11.2-x86_64-Win_GUI.exe',
      sourceType: 'github_releases',
      status: 'active',
      version: '1.11.2',
      checkedAt: '2026-07-17'
    },
    {
      platform: 'macOS',
      architecture: 'universal',
      packageType: 'dmg',
      fileName: 'HandBrake-1.11.2.dmg',
      downloadUrl: 'https://github.com/HandBrake/HandBrake/releases/download/1.11.2/HandBrake-1.11.2.dmg',
      sourceType: 'github_releases',
      status: 'active',
      version: '1.11.2',
      checkedAt: '2026-07-17'
    }
  ]
};
