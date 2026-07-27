import type { Tool } from '../types';

export const comfyui: Tool = {
  id: '24',
  slug: 'comfyui',
  name: 'ComfyUI',
  icon: '🎛️',
  shortDescription: '基于节点式工作流的强大 AI 图像生成工具',
  fullDescription: 'ComfyUI 是一套基于节点的图形化用户界面，专为 Stable Diffusion 和其他 AI 图像/视频生成模型设计。它允许用户构建极致复杂的高级生成管线。',
  highlight: '解决 AI 图像生成中工作流不透明、步骤无法灵活定制与重复复用的问题。',
  whyChoose: '采用基于节点的连线交互界面，允许精准控制生成过程的每一个环节。适合需要高度定制图像管线、引入复杂生成控制网的进阶图像创作者。',
  category: "AI 生产力",
  audiences: ['AI 用户'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://github.com/comfyanonymous/ComfyUI',
  githubOwner: 'comfyanonymous',
  githubRepo: 'ComfyUI',
  license: 'GPL-3.0',
  githubStars: 122459,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'github_release',
      title: 'GitHub Release 下载',
      description: 'Windows 用户可以直接在 GitHub Releases 下载打包好环境的便携版 (Standalone) 压缩包。',
      url: 'https://github.com/comfyanonymous/ComfyUI/releases',
      sourceTrust: 'official'
    }
  ]
};
