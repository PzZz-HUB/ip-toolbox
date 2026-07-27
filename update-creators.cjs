const fs = require('fs');
const path = require('path');
const toolsDir = path.join(__dirname, 'src', 'data', 'tools');
const creators = ['obs-studio', 'davinci-resolve', 'blender', 'kdenlive', 'gimp', 'krita', 'inkscape', 'audacity'];

for (const slug of creators) {
  const file = path.join(toolsDir, `${slug}.ts`);
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/category: "AI 生产力"/g, 'category: "内容与创作"');
    fs.writeFileSync(file, content);
    console.log(`Updated ${slug} to 内容与创作`);
  }
}
