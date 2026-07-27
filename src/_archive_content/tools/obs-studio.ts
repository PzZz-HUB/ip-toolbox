import type { ToolContent } from '../../data/types';

export const obsStudio: ToolContent = {
  slug: 'obs-studio',
  contentCheckedAt: '2026-07-17',
  contentStatus: 'needs_review',
  sources: [
    { label: 'OBS Studio 官方网站', url: 'https://obsproject.com/', sourceType: 'official_site', checkedAt: '2026-07-17' },
    { label: 'GitHub 仓库 (obsproject/obs-studio)', url: 'https://github.com/obsproject/obs-studio', sourceType: 'github', checkedAt: '2026-07-17' },
    { label: 'OBS Studio 官方下载页', url: 'https://obsproject.com/download', sourceType: 'official_site', checkedAt: '2026-07-17' },
    { label: 'OBS Studio 官方 Linux 安装文档', url: 'https://obsproject.com/wiki/install-instructions#linux', sourceType: 'official_docs', checkedAt: '2026-07-17' }
  ],
  intro: {
    problemSolved: '免费开源的高性能视频录制与直播推流利器，实现多源音视频采集和场景切换。',
    detailed: [
      'OBS Studio 是一款完全免费、开源且跨平台的视频录制和直播推流软件。它支持无限制的场景与来源组合，可以同时采集屏幕、指定窗口、网络摄像头、麦克风和系统音频。',
      '请注意：OBS Studio 专注于实时音视频采集、混流和输出，它不等于视频剪辑软件。如果您只想要录制后进行切片或加特效，通常需要在录制完成后使用其他非线性剪辑软件进行后期处理。'
    ],
    targetUsers: [
      '进行屏幕录制和教程录制的讲师与内容创作者。',
      '进行游戏录制和游戏直播推流的玩家。',
      '需要进行多画面内容制作（如画中画、多机位切换）的用户。',
      '需要自定义音视频来源及高级配置（码率、编码器）的专业人士。'
    ],
    notSuitableFor: [
      '需要对已有视频进行复杂视频剪辑（裁剪、拼接、转场特效）的后期场景。',
      '需要自动字幕制作或一键式短视频生成的快速轻量化需求。',
      '完全不需要配置、追求极简“一键录屏”的新手用户。'
    ]
  },
  platformGuides: [
    {
      platform: 'Windows',
      summary: '优先从 OBS 官方 Download 页面进入，并根据官方页面当前提供的安装方式选择对应的安装程序。',
      officialChannels: [
        { name: 'OBS 官网 Windows 下载', url: 'https://obsproject.com/download' },
        { name: 'GitHub Releases', url: 'https://github.com/obsproject/obs-studio/releases' }
      ],
      architectureNotes: [
        '当前官方主要提供 x64 和 arm64 架构的安装包与便携版，具体的安装包格式、架构分类以及最低系统要求（如 Windows 版本）请以官方下载页当前说明为准。'
      ],
      steps: [
        '访问 OBS 官方下载页，核对域名 obsproject.com，选择 Windows 平台并下载安装程序。',
        '安装时请核对项目名称、域名、发布者和版本。绝对不建议从第三方软件下载站获取所谓的修改版或重打包版本。',
        '运行安装程序完成安装。安装后首次启动 OBS Studio 时，系统会弹出“自动配置向导 (Auto-Configuration Wizard)”，它能自动测试并设置最适合您硬件的参数。'
      ],
      warnings: [
        '如果遇到系统安全软件拦截，请确认下载来源为官方且网址正确，切勿随意允许来源不明程序的执行权限。'
      ]
    },
    {
      platform: 'macOS',
      summary: '优先通过 OBS 官网当前提供的官方渠道下载，并根据您的 Mac 芯片选择对应安装包。',
      officialChannels: [
        { name: 'OBS 官网 macOS 下载', url: 'https://obsproject.com/download' }
      ],
      architectureNotes: [
        '官方目前针对 macOS 同时提供了 Apple Silicon (arm64) 与 Intel (x86_64) 的区分版本。请以当前官方下载页的说明为准选择对应的 DMG 文件。'
      ],
      steps: [
        '在官方下载页下载适用于您芯片的 .dmg 文件，双击打开后将 OBS 图标拖入“应用程序”文件夹。',
        '首次启动时，OBS 需要采集您的屏幕和音频，涉及屏幕录制、麦克风、摄像头等权限。',
        '上述权限应通过 macOS 系统设置（隐私与安全性）正常授权。'
      ],
      warnings: [
        '安全提示：强烈建议按标准流程在系统设置中授权。不建议关闭 Gatekeeper 或使用终端绕过系统安全机制。'
      ]
    },
    {
      platform: 'Linux',
      summary: '不同 Linux 发行版安装渠道可能不同，请优先遵循 OBS 官方 Linux 安装文档。',
      officialChannels: [
        { name: 'Flathub (Flatpak)', url: 'https://flathub.org/apps/com.obsproject.Studio' },
        { name: '官方 Linux 安装文档', url: 'https://obsproject.com/wiki/install-instructions#linux' }
      ],
      steps: [
        '访问 OBS 官方 Linux 安装文档。由于不同发行版差异，官方并未给所有发行版提供统一安装命令。',
        '官方推荐使用 Flatpak 从 Flathub 安装以获得最佳兼容性；Ubuntu 等部分系统也有对应的 PPA 源。',
        '软件源、Flatpak 或其他编译安装方式必须以官方当前文档为准，请在终端执行官方提供的命令。'
      ],
      warnings: [
        '为了系统稳定和安全，请勿复制执行未经核验的第三方博客或论坛提供的第三方安装命令。'
      ]
    }
  ],
  usageGuide: {
    title: '基础使用流程',
    steps: [
      '首次启动时，建议完成“自动配置向导”，让软件根据您的主要用途（录制优先或直播优先）自动设置基础分辨率、帧率和编码器。',
      '在界面左下角的“场景 (Scenes)”面板中，点击“+”新建一个场景并命名。',
      '在旁边的“来源 (Sources)”面板中，点击“+”，选择“显示器采集 (Display Capture)”或“窗口采集 (Window Capture)”，添加到当前场景。',
      '继续在“来源”中添加“音频输入采集 (麦克风)”和“音频输出采集 (系统音频)”。',
      '在“混音器 (Audio Mixer)”面板中对着麦克风发声或播放系统音乐，检查音频电平条是否正常跳动。',
      '点击右下角的“设置 (Settings)”，进入“输出 (Output)”选项卡，设置并确认您的“录像路径 (Recording Path)”。',
      '准备就绪后，点击右下角的“开始录制 (Start Recording)”。完成后点击“停止录制”，即可在刚设置的路径中找到视频文件。'
    ],
    notes: [
      '如果在添加显示器采集后预览区仍然是黑屏，特别是在拥有双显卡的 Windows 笔记本上，通常需要到 Windows 图形设置中将 OBS Studio 分配为使用核显或独显。'
    ]
  },
  faqs: [
    {
      question: '录制与直播有什么区别？',
      answer: [
        '录制 (Recording)：是将采集到的音视频画面编码后，直接保存到您本地电脑的硬盘文件中（如 MKV 或 MP4）。',
        '直播 (Streaming)：是将画面实时向第三方网络平台（如 Twitch, YouTube, Bilibili）进行推流。推流通常需要平台提供的服务器地址、账号授权或推流密钥。',
        '请注意：本页面不提供任何特定平台的账号、密钥或绕过平台规则的方法，请参考您目标直播平台的官方推流教程。'
      ]
    },
    {
      question: '黑屏或窗口采集不到画面怎么办？',
      answer: [
        'Windows 用户：如果是双显卡笔记本，图形模式或显卡选择会影响采集。请在 Windows 图形设置中将 OBS 设定为对应的显卡（录制桌面通常用核显，录制游戏通常用独显，或直接使用“游戏采集”模式）。',
        'macOS 用户：极可能是没有在“系统设置 -> 隐私与安全性 -> 屏幕录制”中给予 OBS 权限，请前往授权。',
        'Linux 用户：若使用 Wayland，传统的 X11 采集方式会黑屏，请查阅官方 Wiki 了解 PipeWire 采集方案。'
      ]
    },
    {
      question: '没有系统声音或麦克风没有声音怎么办？',
      answer: [
        '请首先在“混音器”面板检查对应设备是否被静音，并且电平条在发声时有绿色跳动。',
        '如果麦克风无声，请检查系统隐私设置中是否允许 OBS 访问麦克风。如果系统声音无声（特别是部分旧版 macOS 系统），可能需要借助专用的虚拟音频驱动或升级到支持原生音频采集的新版系统。'
      ]
    },
    {
      question: '录制文件过大、画面卡顿或掉帧怎么办？',
      answer: [
        '录制文件过大：请在“设置 -> 输出 -> 录像”中检查码率（比特率）是否设置过高。您可以将“录像质量”调整为“高质量，中等文件大小”以平衡画质和体积。',
        '卡顿或掉帧：通常是因为硬件编码性能不足。请尝试降低“设置 -> 视频”中的“输出分辨率”或“常用 FPS 值”。如果显卡支持，请优先在编码器中选择硬件编码器（如 NVENC、AMF、Apple VT）以减轻 CPU 负担。'
      ]
    },
    {
      question: '录制文件无法播放怎么办？',
      answer: [
        'OBS 官方强烈建议录制格式选择 .mkv 而不是 .mp4。如果选择 .mp4，一旦在录制过程中发生崩溃或断电，整个文件将损坏且无法播放。而 .mkv 文件在异常中断时仍可保留已录制的部分。您可以在录制完成后使用 OBS 菜单中的“文件 -> 重新封装录像 (Remux Recordings)”将 mkv 转换为 mp4。'
      ]
    },
    {
      question: '直播推流不稳定怎么办？',
      answer: [
        '推流不稳定、丢帧通常由网络上行带宽不足或波动引起。建议使用有线网络连接代替 Wi-Fi。请在“设置 -> 输出”中适当降低视频比特率。排查建议只能使用通用、合规和安全的方式，切勿使用来源不明的所谓“网络加速插件”。'
      ]
    }
  ],
  securityNotes: [
    '安装来源：只允许从 obsproject.com、官方 GitHub 或官方文档获取软件本体，不使用第三方修改版。',
    '插件安全：插件属于第三方扩展，安装前请仔细核对来源、版本兼容性和维护状态。本站不提供破解插件、收费插件盗版或来源不明的整合包。',
    '隐私保护：您的场景集合、浏览器源 URL 和推流密钥可能包含敏感信息。在论坛或社群分享配置文件或日志前，应仔细检查是否包含账号、地址和密钥，绝不向他人展示推流密钥。'
  ]
};
