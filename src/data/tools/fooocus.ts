import type { Tool } from '../types';

export const fooocus: Tool = {
  id: '38',
  slug: 'fooocus',
  name: 'Fooocus',
  icon: '🖼️',
  shortDescription: '极大简化操作门槛的 Stable Diffusion 生成器',
  fullDescription: 'Fooocus 重新构想了开源 AI 绘画的交互。它抛弃了繁琐的配置参数，将大量高端微调技术全部封装进底层逻辑中，让用户可以纯粹通过提示词生成惊艳的图像。',
  highlight: '解决 SD 生图参数配置繁琐，新手难以快速获得高质量图像的创作障碍。',
  whyChoose: '隐藏了底层的复杂设置，用户只需输入自然语言提示词即可获得高质量成图。适合不愿花时间研究采样算法，只想快速实现脑内构想的非技术群体。',
  keywords: ['ai', '画图', '生图', 'sd', 'stable diffusion', 'midjourney'],
  tags: ['免费开源', '极简防坑', '极致出图'],
  category: "AI 生产力",
  audiences: ['AI 用户'],
  platforms: ['Windows', 'Linux'],
  officialUrl: 'https://github.com/lllyasviel/Fooocus',
  githubOwner: 'lllyasviel',
  githubRepo: 'Fooocus',
  license: 'GPL-3.0',
  githubStars: null,
  starsUpdatedAt: null,
  securityNotes: '软件体积大，需要下载数 GB 的模型文件。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'github_release',
      title: 'GitHub Releases 一键整合包',
      description: '在开源仓库 README 中，Windows 用户可以直接下载解压即用的便携整合包。',
      url: 'https://github.com/lllyasviel/Fooocus',
      sourceTrust: 'official'
    }
  ]
};
