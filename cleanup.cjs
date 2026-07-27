const fs = require('fs');
const path = require('path');

const files = ['ollama', 'chatbox', 'rustdesk', 'powertoys'];

for (const slug of files) {
  const p = path.join(__dirname, 'src', 'data', 'tools', `${slug}.ts`);
  let code = fs.readFileSync(p, 'utf8');
  
  code = code.replace(/  whyChoose: '.*?',\n/, '');
  code = code.replace(/  fullDescription: '.*?',\n/, `  fullDescription: '详细评测与深度解析请见下方专栏。',\n`);
  code = code.replace(/  securityNotes: '.*?',\n/, `  securityNotes: '如系统出现安全提示，请先核对下载来源、项目发布者、文件名和数字签名；无法确认来源时不要继续运行。',\n`);

  fs.writeFileSync(p, code);
  console.log(`Cleaned up ${slug}.ts`);
}
