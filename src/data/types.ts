export type Platform =
  | 'Windows'
  | 'macOS'
  | 'Linux'
  | 'Browser'
  | 'Android'
  | 'iOS';

export type Architecture =
  | 'x64'
  | 'x86'
  | 'arm64'
  | 'universal'
  | 'unknown';

export interface ReleaseAsset {
  platform: Platform;
  architecture?: Architecture;
  packageType: 'exe' | 'msi' | 'zip' | 'dmg' | 'pkg' | 'deb' | 'rpm' | 'AppImage' | 'flatpak' | 'extension' | 'tar.gz' | '7z' | 'other';
  fileName: string;
  downloadUrl: string;
  sourceType: 'github_releases' | 'official_site' | 'app_store' | 'extension_store';
  status: 'active' | 'deprecated' | 'needs_review';
  version: string;
  sizeBytes?: number;
  sha256?: string;
  checkedAt: string;
}

export type Category = 
  | "网络与代理"
  | "环境与安全"
  | "AI 生产力"
  | "内容与创作"
  | "远程与运维"
  | "极客与基建";

export type Audience =
  | "跨境用户"
  | "内容创作者"
  | "普通电脑用户"
  | "AI 用户"
  | "开发者";

export type InstallMethodType = 
  | 'installer' 
  | 'github_release' 
  | 'docker' 
  | 'package_manager' 
  | 'extension' 
  | 'website';

export type SourceTrust = 'official' | 'community' | 'third_party';

export interface InstallMethod {
  type: InstallMethodType;
  title: string;
  description?: string;
  command?: string | string[]; 
  sourceTrust?: SourceTrust; 
  url?: string;
}

export interface Tool {
  id: string;
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  highlight?: string;
  whyChoose?: string;
  keywords?: string[];
  tags?: string[];
  comparisonGroup?: string;
  category: Category;
  audiences: Audience[];
  platforms: Platform[];
  license: string;
  officialUrl?: string;
  githubOwner?: string;
  githubRepo?: string;
  githubStars?: number | null;
  starsUpdatedAt?: string | null;
  releases: ReleaseAsset[];
  installMethods?: InstallMethod[];
  securityNotes: string;
  verifiedAt: string;
  status: 'active' | 'deprecated' | 'archived';
}
