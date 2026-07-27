import type { Tool } from '../types';

export const rustdesk: Tool = {
  id: '12',
  slug: 'rustdesk',
  name: 'RustDesk',
  icon: '🖥️',
  shortDescription: '开源且安全的虚拟桌面及远程控制软件',
  fullDescription: '详细评测与深度解析请见下方专栏。',
  highlight: '解决跨地域设备的远程桌面控制与文件管理需求。',
  category: "远程与运维",
  audiences: ['普通电脑用户'],
  platforms: ['Windows', 'macOS', 'Linux', 'Android', 'iOS'],
  officialUrl: 'https://rustdesk.com/',
  githubOwner: 'rustdesk',
  githubRepo: 'rustdesk',
  license: 'AGPL-3.0',
  githubStars: null,
  starsUpdatedAt: null,
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [
    {
      platform: 'Windows',
      architecture: 'x64',
      packageType: 'exe',
      fileName: 'rustdesk-1.3.1-x86_64.exe',
      downloadUrl: 'https://github.com/rustdesk/rustdesk/releases/download/1.3.1/rustdesk-1.3.1-x86_64.exe',
      sourceType: 'github_releases',
      status: 'active',
      version: '1.3.1',
      checkedAt: '2026-07-20'
    },
    {
      platform: 'macOS',
      architecture: 'universal',
      packageType: 'dmg',
      fileName: 'rustdesk-1.3.1-universal.dmg',
      downloadUrl: 'https://github.com/rustdesk/rustdesk/releases/download/1.3.1/rustdesk-1.3.1-universal.dmg',
      sourceType: 'github_releases',
      status: 'active',
      version: '1.3.1',
      checkedAt: '2026-07-20'
    }
  ],
  installMethods: [
    {
      type: 'docker',
      title: '自建中继服务器 (Docker)',
      description: '使用 Docker 快速部署属于你自己的 RustDesk 中继服务器 (hbbr/hbbs)，获得最佳的安全性与连接速度。',
      command: [
        'docker run --name hbbs -p 21115:21115 -p 21116:21116 -p 21116:21116/udp -p 21118:21118 -v `pwd`:/root -it --net=host --rm rustdesk/rustdesk-server hbbs',
        'docker run --name hbbr -p 21117:21117 -p 21119:21119 -v `pwd`:/root -it --net=host --rm rustdesk/rustdesk-server hbbr'
      ],
      sourceTrust: 'official'
    }
  ]
};
