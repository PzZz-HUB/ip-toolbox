import type { Tool } from '../types';

export const tailscaleTool: Tool = {
  id: 'tailscale-mesh',
  slug: 'tailscale',
  name: 'Tailscale',
  icon: '🖧',
  shortDescription: '极简且极其强大的零配置异地组网工具（基于 WireGuard）。',
  fullDescription: 'Tailscale 可以让你在几分钟内将散落在全球各地的设备（电脑、手机、VPS）连入同一个安全的私有局域网。基于强大的 WireGuard 协议构建，能够极其丝滑地穿透 NAT 和防火墙，是跨境开发者和运维人员管理海外节点的“无脑”选择。',
  highlight: '三分钟完成全球设备异地组网，零配置穿透内网',
  keywords: ['内网穿透', '异地组网', 'vpn', 'wireguard', 'vps', '远程', 'mesh'],
  tags: ['混合开源', '基于 WireGuard', '零配置穿透'],
  
  category: '网络与代理',
  audiences: ['开发者', '跨境用户'],
  
  platforms: ['Windows', 'macOS', 'Linux', 'Android', 'iOS'],
  
  officialUrl: 'https://tailscale.com/',
  
  githubOwner: 'tailscale',
  githubRepo: 'tailscale',
  
  license: '混合开源 (客户端开源 / 服务端闭源)',
  githubStars: 15300, 
  starsUpdatedAt: '2026-07-27T00:00:00Z',
  
  // 详细安全警告已剥离至 src/content/tools/tailscale.md
  securityNotes: '请务必通过官方渠道或认证的包管理器安装。如需了解混合开源相关的中心化节点控制风险，请参阅下方深度解析。',
  
  verifiedAt: '2026-07-27',
  status: 'active',
  
  releases: [
    {
      platform: 'Windows',
      architecture: 'x64',
      packageType: 'exe',
      fileName: 'tailscale-setup-latest.exe',
      downloadUrl: 'https://tailscale.com/download/windows',
      sourceType: 'official_site',
      status: 'active',
      version: 'Latest',
      checkedAt: '2026-07-27'
    },
    {
      platform: 'Linux',
      architecture: 'universal',
      packageType: 'other',
      fileName: 'install.sh',
      downloadUrl: 'https://tailscale.com/download/linux',
      sourceType: 'official_site',
      status: 'active',
      version: 'Latest',
      checkedAt: '2026-07-27'
    }
  ],
  
  installMethods: [
    {
      type: 'package_manager',
      title: 'Linux 一键安装',
      description: '使用官方提供的自动化安装脚本在 VPS 上快速部署',
      command: 'curl -fsSL https://tailscale.com/install.sh | sh',
      sourceTrust: 'official'
    }
  ]
};
