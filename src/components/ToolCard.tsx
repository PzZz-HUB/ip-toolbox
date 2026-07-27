import { Link } from 'react-router';
import type { Tool } from '../data/types';
import { ToolIcon } from './ToolIcon';

export function ToolCard({ tool }: { tool: Tool }) {
  const formatStars = (stars: number | null | undefined) => {
    if (stars === null || stars === undefined) return '暂无';
    if (stars >= 1000) return (stars / 1000).toFixed(1) + 'k';
    return stars.toString();
  };


  return (
    <div className="card">
      <div className="card-header">
        <ToolIcon iconData={tool.icon} />
        <div className="card-title">{tool.name}</div>
        {tool.githubStars != null && (
          <div className="tag" style={{ marginLeft: 'auto', background: 'var(--bg-secondary)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)', fontSize: '0.75rem', padding: '0.15rem 0.4rem', fontWeight: 600 }}>
            <span style={{ color: '#e3b341', marginRight: '0.2rem' }}>★</span>{formatStars(tool.githubStars)}
          </div>
        )}
      </div>
      <p className="card-desc">
        {tool.shortDescription}
      </p>

      <div className="card-highlight" style={{ visibility: tool.highlight ? 'visible' : 'hidden' }}>
        {tool.highlight ? `💡 ${tool.highlight}` : ''}
      </div>

      <div className="card-platform">
        {tool.platforms.map(p => <span key={p} className="tag" style={{ background: 'transparent' }}>{p}</span>)}
      </div>
      
      <Link to={`/${tool.slug}`} className="btn btn-outline" style={{ display: 'block', width: '100%', marginTop: 'auto' }}>
        查看详情
      </Link>
    </div>
  );
}
