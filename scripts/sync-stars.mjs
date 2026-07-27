import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TOOLS_FILE = path.join(__dirname, '../src/data/tools.ts');

async function syncStars() {
  console.log('Starting GitHub Stars sync...');
  let content = fs.readFileSync(TOOLS_FILE, 'utf-8');
  
  // Extract all githubOwner and githubRepo pairs using regex
  const regex = /githubOwner:\s*'([^']+)',\s*githubRepo:\s*'([^']+)'/g;
  let match;
  const updates = [];

  while ((match = regex.exec(content)) !== null) {
    updates.push({
      owner: match[1],
      repo: match[2],
      index: match.index
    });
  }

  const now = new Date().toISOString().split('T')[0];

  for (const { owner, repo } of updates) {
    console.log(`Fetching stars for ${owner}/${repo}...`);
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

        // Create a specific regex to replace stars for this repo block
        const blockRegex = new RegExp(`(githubOwner:\\s*'${owner}',\\s*githubRepo:\\s*'${repo}',\\s*githubStars:\\s*)[^,]+(,\\s*starsUpdatedAt:\\s*)[^,]+(,)`, 'g');
        content = content.replace(blockRegex, `$1${stars}$2'${now}'$3`);
      } else {
        console.log(` -> Failed to fetch (${res.status} ${res.statusText}). Skipping.`);
      }
    } catch (err) {
      console.log(` -> Error fetching ${owner}/${repo}: ${err.message}. Skipping.`);
    }
  }

  fs.writeFileSync(TOOLS_FILE, content, 'utf-8');
  console.log('GitHub Stars sync completed.');
}

syncStars();
