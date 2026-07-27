import type { ToolContent } from '../../data/types';

export const localsend: ToolContent = {
  slug: 'localsend',
  contentCheckedAt: '2026-07-17',
  contentStatus: 'needs_review',
  sources: [
    { label: 'LocalSend 官方网站', url: 'https://localsend.org/', sourceType: 'official_site', checkedAt: '2026-07-17' },
    { label: 'GitHub 仓库 (localsend/localsend)', url: 'https://github.com/localsend/localsend', sourceType: 'github', checkedAt: '2026-07-17' }
  ],
  intro: {
    problemSolved: '在局域网内安全、高速地跨设备传输文件与文本，无需连入外网。',
    detailed: [
      'LocalSend 是一款完全开源的局域网文件与剪贴板传输工具。它通过本地网络实现设备间点对点通信，数据无需经过外部服务器，所有传输通过 HTTPS 加密，且无需注册账号。',
      '它支持设备自动发现，交互界面极其直观，发送端和接收端只需确认设备名称即可建立连接。'
    ],
    targetUsers: [
      '需要频繁在电脑与手机（特别是跨平台如 Windows/macOS/iOS/Android）之间互传文件的办公人群。',
      '重视隐私，不希望文件经过云端中转（如微信文件助手、网盘）的用户。',
      '在无互联网连接的局域网环境中需要传输大文件的用户。'
    ],
    notSuitableFor: [
      '异地远程传输（不同网络之间无法自动发现和直连）。',
      '需要长久存储或云端备份文件的场景。'
    ]
  },
  platformGuides: [
    {
      platform: 'Windows',
      summary: '优先通过官网列出的官方渠道下载，并根据 Releases 页面实际提供的安装文件选择。',
      officialChannels: [
        { name: '官网下载页', url: 'https://localsend.org/#/download' },
        { name: 'GitHub Releases', url: 'https://github.com/localsend/localsend/releases' }
      ],
      architectureNotes: [
        '当前官方版本主要提供 x86-64 架构的安装包 (EXE) 和便携版 (ZIP)。请以当前官方发布页面实际提供的文件和平台说明为准。',
        '官网同时也列出了 Winget、Scoop、Chocolatey 等包管理器安装渠道，适合开发者使用。'
      ],
      steps: [
        '访问 GitHub Releases 或官网，下载对应的 .exe 安装程序或 .zip 便携压缩包。',
        '若使用便携版（ZIP），解压至您指定的目录并运行其中的 LocalSend.exe 即可。',
        '若使用安装版，双击运行安装程序，按照指引完成安装即可。'
      ],
      warnings: [
        'Windows Defender 或 SmartScreen 可能会对未知的可执行文件弹出安全拦截。请先停止安装，核对下载链接确实为官方 GitHub 或官网。确认无误后，您可以在弹窗中点击“更多信息”，再选择“仍要运行”。如果无法确认来源，请不要继续运行。'
      ]
    },
    {
      platform: 'macOS',
      summary: '优先通过 Mac App Store、Homebrew 或官网当前列出的官方安装渠道获取。',
      officialChannels: [
        { name: 'Mac App Store', url: 'https://apps.apple.com/us/app/localsend/id1661733229' },
        { name: 'GitHub Releases (DMG)', url: 'https://github.com/localsend/localsend/releases' }
      ],
      architectureNotes: [
        '当前官方页面未明确标示 macOS 芯片架构区别。请以当前官方发布页面实际提供的文件和平台说明为准。'
      ],
      steps: [
        '普通用户推荐直接前往 Mac App Store 搜索 LocalSend 并安装，这是最安全且支持自动更新的方式。',
        '如果您倾向于手动安装，可在 GitHub Releases 下载 .dmg 文件。双击挂载后，将 LocalSend 拖拽至“应用程序 (Applications)”文件夹。'
      ],
      warnings: [
        '对于手动下载的 DMG，首次打开时系统可能会提示“无法验证开发者”或“来历不明”。请核对文件来自官方后，前往“系统偏好设置 -> 隐私与安全性”，在底部找到被拦截的应用并点击“仍然打开”；或者右键点击应用图标选择“打开”。',
        '绝不建议为了安装软件而通过终端全局关闭 Gatekeeper 安全检查。'
      ]
    },
    {
      platform: 'Linux',
      summary: '支持 AppImage、DEB 等主流包格式及 Flatpak。',
      officialChannels: [
        { name: 'Flathub', url: 'https://flathub.org/apps/org.localsend.localsend_app' },
        { name: 'GitHub Releases', url: 'https://github.com/localsend/localsend/releases' }
      ],
      steps: [
        '访问官网查阅支持的 Linux 分发渠道。',
        '您可以通过下载 AppImage 赋予执行权限后直接运行，或下载 DEB 包进行本地安装。',
        '支持 Flatpak 的系统可以直接从 Flathub 获取安装。'
      ]
    },
    {
      platform: 'Android',
      summary: '通过受信任的应用商店或 GitHub 获取 APK。',
      officialChannels: [
        { name: 'Google Play', url: 'https://play.google.com/store/apps/details?id=org.localsend.localsend_app' },
        { name: 'F-Droid', url: 'https://f-droid.org/packages/org.localsend.localsend_app' },
        { name: 'GitHub Releases (APK)', url: 'https://github.com/localsend/localsend/releases' }
      ],
      steps: [
        '首选在 Google Play 商店中搜索 LocalSend 进行安装。',
        '如果是从 GitHub 下载 APK 文件，需要允许设备“安装未知来源的应用”。'
      ]
    },
    {
      platform: 'iOS',
      summary: '直接通过 Apple App Store 安装。',
      officialChannels: [
        { name: 'App Store', url: 'https://apps.apple.com/us/app/localsend/id1661733229' }
      ],
      steps: [
        '打开 iPhone 或 iPad 上的 App Store，搜索“LocalSend”并下载。'
      ]
    }
  ],
  usageGuide: {
    title: '基础使用流程',
    steps: [
      '确保发送设备与接收设备连接到同一个 Wi-Fi 或处于同一个局域网中。',
      '在两台设备上分别打开 LocalSend 应用。',
      '在发送端设备上，点击底部的“发送 (Send)”标签卡，选择要发送的文件或文本。',
      '在目标设备列表中找到接收设备的名称（通常是由应用自动生成的水果、植物等随机代号，如 "Nice Apple"）并点击。',
      '接收端设备会弹出传输请求，点击“接收 (Accept)”即可开始传输。'
    ],
    notes: [
      '默认情况下，接收的文件会保存在系统默认的“下载 (Downloads)”文件夹中，您可以在应用设置内更改默认保存目录。',
      '如果想要免去每次确认的步骤，可以在设置中开启“快速保存 (Quick Save)”模式，但为了安全起见，请仅在信任的网络环境中使用此功能。'
    ]
  },
  faqs: [
    {
      question: '为什么设备互相搜索不到？',
      answer: [
        '最常见的情况：两台设备是否在同一局域网内？比如一台连接了 Wi-Fi，另一台使用了移动数据，此时是无法连接的。',
        '是否连接了商场、咖啡厅的“访客 Wi-Fi”？许多公共网络和企业路由器开启了“AP 隔离 (AP Isolation)”，阻止连接同一个 Wi-Fi 的设备互相通信。',
        '对于 Windows 用户：在初次安装运行时，系统防火墙可能弹出了网络通信授权请求。如果没有允许，或者允许的网络类型（专用网络/公用网络）与当前网络环境不匹配，会导致 LocalSend 无法通信。请前往防火墙设置中放行 LocalSend。',
        '是否使用了 VPN、网络代理或网络加速器工具？这些软件可能会修改系统路由，使本地网络发现失效。'
      ]
    },
    {
      question: '为什么传输速度很慢？',
      answer: [
        'LocalSend 依赖局域网传输，速度上限受限于您的 Wi-Fi 路由器性能（如 2.4Ghz 或 5Ghz 频段）以及设备的网卡速率。',
        '如果您在两台设备之间使用了电脑热点连接，速度可能不如千兆路由器快。'
      ]
    },
    {
      question: '手机锁屏后传输中断了怎么办？',
      answer: [
        'iOS 和部分定制版 Android 系统会对后台应用的资源进行严格限制。在传输大量文件时，请保持应用处于前台运行且屏幕常亮，避免被系统误杀。'
      ]
    }
  ],
  securityNotes: [
    '下载链接只指向项目官网、GitHub Releases 或官方应用商店，本站绝不提供任何第三方托管包、修改版或破解版。',
    '即使在局域网内传输，也不代表可以完全忽略设备和网络安全。官方说明传输过程使用 HTTPS 加密（官网描述为端到端加密），但请务必确认连接对象的设备名称是否准确。',
    '安装前请核对发布者、文件名和版本来源，无法确认安全来源时请停止运行。'
  ]
};
