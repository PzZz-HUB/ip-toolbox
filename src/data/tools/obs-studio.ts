import type { Tool } from '../types';

export const obsStudio: Tool = {
  id: '2',
  slug: 'obs-studio',
  name: 'OBS Studio',
  icon: '🎥',
  shortDescription: '免费且开源的视频录制与直播软件',
  fullDescription: 'OBS Studio 是一款被全球数百万创作者广泛使用的开源软件，支持高性能的实时视频/音频捕捉、场景合成及多平台推流。',
  highlight: '解决多画面源采集、本地视频录制以及向平台实时推流的需求。',
  whyChoose: '行业标准的开源推流软件，拥有庞大的插件生态系统以实现滤镜、字幕等功能。适合所有需要进行游戏直播、教程录屏和在线会议的用户。',
  keywords: ['录屏', '直播', '推流', '屏幕录制', '串流'],
  tags: ['免费开源', '多轨录制', '硬件加速'],
  category: "内容与创作",
  audiences: ['内容创作者'],
  platforms: ['Windows', 'macOS', 'Linux'],
  license: 'GPL-2.0',
  officialUrl: 'https://obsproject.com/',
  githubOwner: 'obsproject',
  githubRepo: 'obs-studio',
  githubStars: 74181,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-17',
  status: 'active',
  releases: [
    {
      platform: 'Windows',
      architecture: 'x64',
      packageType: 'exe',
      fileName: 'OBS-Studio-32.1.2-Windows-x64-Installer.exe',
      downloadUrl: 'https://github.com/obsproject/obs-studio/releases/download/32.1.2/OBS-Studio-32.1.2-Windows-x64-Installer.exe',
      sourceType: 'github_releases',
      status: 'active',
      version: '32.1.2',
      checkedAt: '2026-07-17'
    },
    {
      platform: 'macOS',
      architecture: 'arm64',
      packageType: 'dmg',
      fileName: 'OBS-Studio-32.1.2-macOS-Apple.dmg',
      downloadUrl: 'https://github.com/obsproject/obs-studio/releases/download/32.1.2/OBS-Studio-32.1.2-macOS-Apple.dmg',
      sourceType: 'github_releases',
      status: 'active',
      version: '32.1.2',
      checkedAt: '2026-07-17'
    },
    {
      platform: 'macOS',
      architecture: 'x64',
      packageType: 'dmg',
      fileName: 'OBS-Studio-32.1.2-macOS-Intel.dmg',
      downloadUrl: 'https://github.com/obsproject/obs-studio/releases/download/32.1.2/OBS-Studio-32.1.2-macOS-Intel.dmg',
      sourceType: 'github_releases',
      status: 'active',
      version: '32.1.2',
      checkedAt: '2026-07-17'
    }
  ]
};
