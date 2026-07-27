import type { Tool } from './types';

/**
 * IP Toolbox 软件录入标准模板
 * 请复制此文件内容并根据软件信息进行修改。
 * 文件名应与 slug 保持一致（如: example-tool.ts）。
 */
export const templateTool: Tool = {
  // ================= 基础信息 =================
  id: '唯一数字或UUID', // 保证全局唯一
  slug: 'example-tool', // 必须全小写，用连字符分割，对应访问 URL，如: /tools/example-tool
  name: '软件官方名称',
  icon: '🚀', // 使用贴合软件功能的单个 Emoji
  shortDescription: '工具的短描述，显示在卡片上（最多一两句话）',
  fullDescription: '工具的完整描述，可以包含多行，详细介绍它的核心功能和优缺点。',
  highlight: '一句话说明用户为什么值得用这个工具（例如：解决 7-Zip 右键不原生的痛点）',
  keywords: ['搜索词1', '搜索词2'], // 仅用于优化搜索匹配
  tags: ['免费无广', '超轻量'], // 显示在卡片上的特点标签，建议2-4个

  // ================= 用户定位 =================
  // 必须是以下分类之一：'网络与代理' | '环境与安全' | 'AI 生产力' | '远程与运维' | '极客与基建'
  category: '极客与基建',
  // 必须是以下受众之一或组合：'跨境用户' | '内容创作者' | '普通电脑用户' | 'AI 用户' | '开发者'
  audiences: ['普通电脑用户'], 

  // ================= 支持平台 =================
  // 必须是以下平台之一或组合：'Windows' | 'macOS' | 'Linux' | 'Browser' | 'Android' | 'iOS'
  platforms: ['Windows', 'macOS'],

  // ================= 来源信息 =================
  officialUrl: 'https://example.com/',
  
  // 如果是开源或托管于 GitHub 的项目，请填写以下信息。闭源商业软件可省略。
  githubOwner: 'exampleOwner', 
  githubRepo: 'exampleRepo',

  // ================= 开源信息 =================
  license: 'MIT', // 开源协议，如 MIT, GPL-3.0, Apache-2.0。若是商业软件请填 'Commercial' 或 'Freeware'
  githubStars: null, // 请填 null，系统会通过自动脚本定期抓取
  starsUpdatedAt: null, // 请填 null，脚本抓取时会自动写入当前时间

  // ================= 安全说明 =================
  // 统一的安全提示规范，请勿随意修改标准话术
  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',
  
  verifiedAt: 'YYYY-MM-DD', // 必填：录入或最后一次核验下载链接的准确日期
  status: 'active', // 保持为 active

  // ================= 平台下载资源 =================
  releases: [
    {
      platform: 'Windows',
      architecture: 'x64', // 'x64' | 'x86' | 'arm64' | 'universal' | 'unknown'
      packageType: 'exe', // 'exe' | 'msi' | 'dmg' | 'pkg' | 'AppImage' | 'deb' | 'rpm' | 'zip' | 'tar.gz' | '7z' | 'apk' | 'other'
      fileName: 'example-installer-x64.exe', // 安装包的官方原始文件名
      downloadUrl: 'https://github.com/example/releases/download/v1.0.0/example.exe', // 必须是官方直接下载链接，绝不可用第三方网盘
      sourceType: 'github_releases', // 'github_releases' 或 'official_site'
      status: 'active',
      version: 'v1.0.0', // 录入时的软件版本号
      checkedAt: 'YYYY-MM-DD' // 该链接被验证有效的日期
    }
    // 可在此处继续追加 macOS, Linux 等其他平台的 release 对象
  ],
  
  // ================= 其他获取方式 (可选) =================
  // 支持 docker, package_manager, website 等补充性安装方式
  installMethods: [
    {
      type: 'docker',
      title: 'Docker 本地部署',
      description: '使用 Docker 一键拉取镜像并运行（需提前安装 Docker）',
      command: 'docker run -d -p 8080:80 example/image:latest',
      sourceTrust: 'official'
    }
  ]
};
