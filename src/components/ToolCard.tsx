import { Link } from 'react-router';
import type { Tool } from '../data/types';
import { ToolIcon } from './ToolIcon';

export function ToolCard({ tool }: { tool: Tool }) {
  const formatStars = (stars: number | null | undefined) => {
    if (stars === null || stars === undefined) return '暂无';
    if (stars >= 1000) return (stars / 1000).toFixed(1) + 'k';
    return stars.toString();
  };

  const visibleAudiences = tool.audiences.slice(0, 2);
  const hiddenCount = tool.audiences.length - 2;

  return (
    <div className="card">
      <div className="card-header">
        <ToolIcon iconData={tool.icon} />
        <div className="card-title">{tool.name}</div>
      </div>
      <p className="card-desc">
        {tool.shortDescription}
      </p>

      <div className="card-highlight" style={{ visibility: tool.highlight ? 'visible' : 'hidden' }}>
        {tool.highlight ? `💡 ${tool.highlight.length > 35 ? tool.highlight.substring(0, 35) + '...' : tool.highlight}` : ''}
      </div>

      
      <div className="card-audience">
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginRight: '0.25rem' }}>适合:</span>
        {visibleAudiences.map(a => <span key={a} className="tag">{a}</span>)}
        {hiddenCount > 0 && <span className="tag">+{hiddenCount}</span>}
      </div>

      <div className="card-platform">
        {tool.platforms.map(p => <span key={p} className="tag" style={{ background: 'transparent' }}>{p}</span>)}
        {tool.githubStars != null && (
          <span className="tag" style={{ marginLeft: 'auto', background: 'transparent' }}>
            GitHub ★ {formatStars(tool.githubStars)}
          </span>
        )}
      </div>
      
      <Link to={`/${tool.slug}`} className="btn btn-outline" style={{ display: 'block', width: '100%', marginTop: 'auto' }}>
        查看详情
      </Link>
    </div>
  );
}
