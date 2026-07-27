import type { Tool } from '../types';

export const vlc: Tool = {
  id: '11',
  slug: 'vlc',
  name: 'VLC',
  icon: '🎬',
  shortDescription: '万能的跨平台多媒体播放器',
  fullDescription: 'VLC 媒体播放器是一个自由开源的跨平台多媒体播放器和框架，可播放大多数多媒体文件，以及 DVD、音频 CD、VCD 和各类流媒体协议。',
  highlight: '解决电脑本地各类冷门、老旧视频格式无法被原生播放器解码的问题。',
  whyChoose: '自带几乎所有已知的音视频解码器，无需额外安装解码包。适合需要经常处理各种来源复杂、格式非标准的多媒体文件的用户。',
  category: "极客与基建",
  audiences: ['普通电脑用户'],
  platforms: ['Windows', 'macOS', 'Linux', 'Android', 'iOS'],
  officialUrl: 'https://www.videolan.org/vlc/',
  githubOwner: 'videolan',
  githubRepo: 'vlc',
  license: 'GPL-2.0',
  githubStars: 19130,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [
    {
      platform: 'Windows',
      architecture: 'x64',
      packageType: 'exe',
      fileName: 'vlc-3.0.21-win64.exe',
      downloadUrl: 'https://get.videolan.org/vlc/3.0.21/win64/vlc-3.0.21-win64.exe',
      sourceType: 'official_site',
      status: 'active',
      version: '3.0.21',
      checkedAt: '2026-07-20'
    },
    {
      platform: 'macOS',
      architecture: 'universal',
      packageType: 'dmg',
      fileName: 'vlc-3.0.21-universal.dmg',
      downloadUrl: 'https://get.videolan.org/vlc/3.0.21/macosx/vlc-3.0.21-universal.dmg',
      sourceType: 'official_site',
      status: 'active',
      version: '3.0.21',
      checkedAt: '2026-07-20'
    }
  ]
};
