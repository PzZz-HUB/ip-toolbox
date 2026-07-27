import type { Tool } from '../types';

export const crystaldiskinfo: Tool = {
  id: '17',
  slug: 'crystaldiskinfo',
  name: 'CrystalDiskInfo',
  icon: '💽',
  shortDescription: '硬盘健康状态检测与温度监控神器',
  fullDescription: 'CrystalDiskInfo 是一款强大的电脑硬盘检测工具，能够读取 S.M.A.R.T. 接口数据，清晰展示硬盘健康度、温度、通电时间等硬核指标。',
  highlight: '解决电脑硬盘健康状态监控以及寿命预警的日常硬件维护需求。',
  whyChoose: '直接读取硬盘底层的 S.M.A.R.T. 数据。适合购买二手电脑、长期挂机下载，或者需要定期评估重要数据存储介质健康状态的用户。',
  category: "极客与基建",
  audiences: ['普通电脑用户'],
  platforms: ['Windows'],
  officialUrl: 'https://crystalmark.info/en/software/crystaldiskinfo/',
  license: 'MIT',
  githubStars: null,
  starsUpdatedAt: null,
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'website',
      title: '官方网站下载',
      description: '请前往 CrystalMark 官网下载标准版（Standard Edition）。',
      url: 'https://crystalmark.info/en/download/#CrystalDiskInfo',
      sourceTrust: 'official'
    }
  ]
};
