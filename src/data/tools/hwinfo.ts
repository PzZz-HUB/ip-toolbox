import type { Tool } from '../types';

export const hwinfo: Tool = {
  id: '18',
  slug: 'hwinfo',
  name: 'HWiNFO',
  icon: '📊',
  shortDescription: '极致详尽的电脑硬件信息与系统监控工具',
  fullDescription: 'HWiNFO 是全面的硬件分析、监控与报告工具。它可以深入识别几乎所有的硬件规格，并实时监控电压、温度、风扇转速等数百项传感器数据。',
  highlight: '解决识别复杂电脑硬件配置以及实时监控各项传感器温度电压的问题。',
  whyChoose: '能提供比系统任务管理器丰富数倍的硬件参数细节。适合需要对电脑进行硬件维护、排查系统异常重启和蓝屏原因的电脑技术人员。',
  category: "极客与基建",
  audiences: ['普通电脑用户'],
  platforms: ['Windows'],
  officialUrl: 'https://www.hwinfo.com/',
  license: 'Freeware',
  githubStars: null,
  starsUpdatedAt: null,
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  verifiedAt: '2026-07-20',
  status: 'active',
  releases: [],
  installMethods: [
    {
      type: 'website',
      title: '官方版下载',
      description: '免费版可供个人使用，请前往官网下载免安装便携版或安装版。',
      url: 'https://www.hwinfo.com/download/',
      sourceTrust: 'official'
    }
  ]
};
