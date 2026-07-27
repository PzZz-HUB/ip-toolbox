import type { Tool } from '../types';

export const sharex: Tool = {
  id: '10',
  slug: 'sharex',
  name: 'ShareX',
  icon: '📸',
  shortDescription: '功能极其强大的开源截图和文件分享工具',
  fullDescription: 'ShareX 是一款适用于 Windows 的免费开源工具，不仅支持截图、录屏，还集成了取色器、图像编辑器、二维码生成以及几十种文件上传服务的自动同步。',
  highlight: '解决复杂工作流中的屏幕截图、录制以及后续自动化处理需求。',
  whyChoose: '不仅是截图工具，它支持截图后自动添加注释、上传服务器并生成链接。适合需要高频截取和分享屏幕内容、注重工作流自动化的办公人群。',
  category: '普通用户',
  audiences: ['普通电脑用户'],
  platforms: ['Windows'],
  officialUrl: 'https://getsharex.com/',
  githubOwner: 'ShareX',
  githubRepo: 'ShareX',
  license: 'GPL-3.0',
  githubStars: 38840,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [
    {
      platform: 'Windows',
      architecture: 'x64',
      packageType: 'exe',
      fileName: 'ShareX-16.1.0-setup.exe',
      downloadUrl: 'https://github.com/ShareX/ShareX/releases/download/v16.1.0/ShareX-16.1.0-setup.exe',
      sourceType: 'github_releases',
      status: 'active',
      version: 'v16.1.0',
      checkedAt: '2026-07-20'
    }
  ]
};
