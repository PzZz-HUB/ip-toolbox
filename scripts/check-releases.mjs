import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TOOLS_FILE = path.join(__dirname, '../src/data/tools.ts');

async function checkReleases() {
  console.log('Starting GitHub Releases check...');
  const content = fs.readFileSync(TOOLS_FILE, 'utf-8');
  
  // Very simplistic parsing to find tool configs for this demo script
  // In a real env, parsing TS with a compiler API is better, or moving to JSON.
  const regex = /name:\s*'([^']+)',[\s\S]*?githubOwner:\s*'([^']+)',\s*githubRepo:\s*'([^']+)'[\s\S]*?version:\s*'([^']+)'/g;
  
  let match;
  const tools = [];

  while ((match = regex.exec(content)) !== null) {
    // avoid duplicates if multiple releases have same version string
    if (!tools.find(t => t.name === match[1])) {
      tools.push({
        name: match[1],
        owner: match[2],
        repo: match[3],
        currentVersion: match[4]
      });
    }
  }

  for (const { name, owner, repo, currentVersion } of tools) {
    console.log(`Checking ${name} (${owner}/${repo})...`);
    try {
      const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`, {
        headers: {
          'User-Agent': 'IP-Toolbox-Sync-Script',
          ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {})
        }
      });
      
      if (res.ok) {
        const data = await res.json();
        const latestVersion = data.tag_name;
        
        if (latestVersion !== currentVersion) {
          console.log(`\n⚠️ [${name}] 发现新版本！`);
          console.log(` -> 当前录入版本: ${currentVersion}`);
          console.log(` -> 线上最新版本: ${latestVersion}`);
          console.log(` -> 发布页: ${data.html_url}`);
          console.log(`请开发者人工核查包名与架构后，手动更新 src/data/tools.ts。\n`);
        } else {
          console.log(` -> 已是最新版 (${currentVersion})`);
        }
      } else {
        console.log(` -> API Failed (${res.status} ${res.statusText})`);
      }
    } catch (err) {
      console.log(` -> Error fetching ${name}: ${err.message}`);
    }
  }
}

checkReleases();
