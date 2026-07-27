import { useState, useMemo } from 'react';
import { tools } from '../data/tools';
import { ToolCard } from '../components/ToolCard';
import { TrustNotice } from '../components/TrustNotice';
import type { Category } from '../data/types';

const CATEGORIES = [
  { label: '全部', value: '全部' },
  { label: '🌐 网络与代理', value: '网络与代理' },
  { label: '🛡️ 环境与安全', value: '环境与安全' },
  { label: '🤖 AI 生产力', value: 'AI 生产力' },
  { label: '🎬 内容与创作', value: '内容与创作' },
  { label: '💻 远程与运维', value: '远程与运维' },
  { label: '🛠️ 极客与基建', value: '极客与基建' },
  { label: '🧑‍💻 普通用户', value: '普通用户' }
] as const;

export function Home() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<'全部' | Category>('全部');

  const displayTools = useMemo(() => {
    return tools.filter(t => {
      const matchSearch = !search || 
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
        t.fullDescription.toLowerCase().includes(search.toLowerCase()) ||
        t.audiences.some(a => a.toLowerCase().includes(search.toLowerCase())) ||
        (t.keywords && t.keywords.some(k => k.toLowerCase().includes(search.toLowerCase()))) ||
        (t.tags && t.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase())));
      
      const matchCategory = activeCategory === '全部' || t.category === activeCategory;
      
      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="container">
      <section className="hero" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>出海与极客的开源兵器库</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
          100% 甄选 GitHub 高星开源项目。拒绝二次打包、告别后门测漏，为您配置极致纯净的网络与 AI 环境。
        </p>
        <div style={{ fontSize: '0.95rem', color: 'var(--text-subtle)', marginBottom: '2.5rem' }}>
          已收录 {tools.length} 个工具 &middot; 覆盖 Windows / macOS / Linux
        </div>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <input 
            type="text" 
            placeholder="搜索工具名称、用途和适合人群..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '1rem 1.5rem', 
              fontSize: '1.1rem', 
              borderRadius: 'var(--radius-lg)', 
              border: '2px solid var(--border)',
              outline: 'none'
            }}
          />
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--text-muted)' }}>你想解决什么问题？</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value as '全部' | Category)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border)',
                background: cat.value === activeCategory ? 'var(--primary)' : 'var(--card-bg)',
                color: cat.value === activeCategory ? 'white' : 'var(--text)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem' }}>全部工具</h2>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            共 {displayTools.length} 个工具
          </span>
        </div>
        
        {displayTools.length > 0 ? (
          <div className="grid">
            {displayTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border)' }}>
            <p style={{ color: 'var(--text-muted)' }}>暂未找到符合条件的工具，请调整关键词或适合人群。</p>
          </div>
        )}
      </section>

      <TrustNotice />
    </div>
  );
}
