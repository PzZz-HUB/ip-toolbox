const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, 'src', 'data', 'tools');
const files = fs.readdirSync(toolsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

const mapping = {
  'clash-verge-rev': '网络与代理',
  'v2rayn': '网络与代理',
  'nekobox': '网络与代理',
  'hiddify': '网络与代理',
  'wireshark': '网络与代理',
  
  'bitwarden': '环境与安全',
  'keepassxc': '环境与安全',

  'chatbox': 'AI 生产力',
  'ollama': 'AI 生产力',
  'open-webui': 'AI 生产力',
  'lm-studio': 'AI 生产力',
  'jan': 'AI 生产力',
  'anythingllm': 'AI 生产力',
  'comfyui': 'AI 生产力',
  'fooocus': 'AI 生产力',
  'obs-studio': 'AI 生产力',
  'davinci-resolve': 'AI 生产力',
  'blender': 'AI 生产力',
  'kdenlive': 'AI 生产力',
  'gimp': 'AI 生产力',
  'krita': 'AI 生产力',
  'inkscape': 'AI 生产力',
  'audacity': 'AI 生产力',
  'pot': 'AI 生产力',

  'rustdesk': '远程与运维',
  'git': '远程与运维',
  'docker': '远程与运维',
  'vscode': '远程与运维',
  'hoppscotch': '远程与运维',
  'dbeaver': '远程与运维',
  'windows-terminal': '远程与运维',

  'powertoys': '极客与基建',
  'everything': '极客与基建',
  'rufus': '极客与基建',
  'sharex': '极客与基建',
  '7zip': '极客与基建',
  'nanazip': '极客与基建',
  'losslesscut': '极客与基建',
  'crystaldiskinfo': '极客与基建',
  'hwinfo': '极客与基建',
  'vlc': '极客与基建',
  'mpv': '极客与基建',
  'handbrake': '极客与基建',
  'localsend': '极客与基建'
};

for (const file of files) {
  const filePath = path.join(toolsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const slug = file.replace('.ts', '');
  const category = mapping[slug];
  
  if (!category) {
    console.error('No category found for', slug);
    continue;
  }
  
  if (content.includes('audiences: [')) {
    content = content.replace('audiences: [', `category: "${category}",\n  audiences: [`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${slug} with category ${category}`);
  } else {
    console.error('Could not find audiences: [ in', slug);
  }
}
