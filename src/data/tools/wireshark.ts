import type { Tool } from '../types';

export const wireshark: Tool = {
  id: '43',
  slug: 'wireshark',
  name: 'Wireshark',
  icon: '🦈',
  shortDescription: '业界标准的开源网络协议抓包分析工具',
  fullDescription: 'Wireshark 是世界上最流行、最前沿的网络协议分析软件。无论是进行深度的网络故障排查、软件通信分析还是安全开发，它都是不可或缺的底层显微镜。',
  highlight: '解决软件系统与网络通信中，底层数据包无法透明观测与精准排障的问题。',
  whyChoose: '行业公认的标准网络协议分析器，能捕获网卡的所有流量。适合需要排查网络延迟、验证通信协议加密、分析后端接口异常流量的硬核工程师。',
  keywords: ['抓包', '网络', '协议', 'tcp', 'http', '分析'],
  tags: ['免费开源', '行业标准', '底层硬核'],
  category: "网络与代理",
  audiences: ['开发者'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://www.wireshark.org/',
  githubOwner: 'wireshark',
  githubRepo: 'wireshark',
  license: 'GPL-2.0',
  githubStars: 9655,
  starsUpdatedAt: '2026-07-27',
  securityNotes: 'Wireshark 可能需要特殊的系统权限（如网卡混杂模式）来抓取底层包，请务必从官方途径下载以确保安全。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'website',
      title: '官方网站下载',
      description: '前往官网获取最新稳定版本的安装程序。',
      url: 'https://www.wireshark.org/#download',
      sourceTrust: 'official'
    }
  ]
};
