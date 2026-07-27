import type { Tool } from '../types';

export const gimp: Tool = {
  id: '20',
  slug: 'gimp',
  name: 'GIMP',
  icon: '🦊',
  shortDescription: 'GNU 图像处理程序，开源界的 Photoshop',
  fullDescription: 'GIMP 是一款跨平台的图像编辑器。无论你是图形设计师、摄影师、插画师还是科学家，GIMP 都能为你提供完善的工具来完成你的工作。',
  highlight: '解决多图层照片修饰、复杂图像合成以及位图绘制的免费设计需求。',
  whyChoose: '具备丰富的滤镜库和修图工具。适合无法承担商业软件高额授权费用，但同样需要处理复杂图层、蒙版和色彩校正的平面设计师或摄影师。',
  category: "内容与创作",
  audiences: ['内容创作者'],
  platforms: ['Windows', 'macOS', 'Linux'],
  officialUrl: 'https://www.gimp.org/',
  githubOwner: 'GNOME',
  githubRepo: 'gimp',
  license: 'GPL-3.0',
  githubStars: 6309,
  starsUpdatedAt: '2026-07-27',
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'website',
      title: '官方镜像下载',
      description: '请通过 GIMP 官网获取原生安装包。',
      url: 'https://www.gimp.org/downloads/',
      sourceTrust: 'official'
    }
  ]
};
