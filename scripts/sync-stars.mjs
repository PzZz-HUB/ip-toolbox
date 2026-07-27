import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TOOLS_DIR = path.join(__dirname, '../src/data/tools');

async function syncStars() {
  console.log('Starting V3 GitHub Stars sync...');
  const files = fs.readdirSync(TOOLS_DIR).filter(f => f.endsWith('.ts') && f !== 'index.ts');
  const now = new Date().toISOString().split('T')[0];
  let updatedCount = 0;

  for (const file of files) {
    const filePath = path.join(TOOLS_DIR, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    const ownerMatch = content.match(/githubOwner:\s*'([^']+)'/);
    const repoMatch = content.match(/githubRepo:\s*'([^']+)'/);

    if (ownerMatch && repoMatch) {
      const owner = ownerMatch[1];
      const repo = repoMatch[1];
      
      console.log(`Fetching stars for ${owner}/${repo} (${file})...`);
      try {
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
          headers: {
            'User-Agent': 'IP-Toolbox-Sync-Script',
            ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {})
          }
        });

        if (res.ok) {
          const data = await res.json();
          const stars = data.stargazers_count;
          console.log(` -> ${stars} stars found.`);

          content = content.replace(/githubStars:\s*[^,]+,/, `githubStars: ${stars},`);
          content = content.replace(/starsUpdatedAt:\s*[^,]+,/, `starsUpdatedAt: '${now}',`);

          fs.writeFileSync(filePath, content, 'utf-8');
          updatedCount++;
        } else {
          console.log(` -> Failed to fetch (${res.status} ${res.statusText}).`);
        }
      } catch (err) {
        console.log(` -> Error fetching ${owner}/${repo}: ${err.message}.`);
      }
      
      // 节流处理，防止频繁调用触发 GitHub 限制
      await new Promise(r => setTimeout(r, 600));
    }
  }

  console.log(`GitHub Stars sync completed. Updated ${updatedCount} tools.`);
}

syncStars();
