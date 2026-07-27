import { useParams, Link } from 'react-router';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { tools } from '../data/tools';
import { ToolIcon } from '../components/ToolIcon';

export function ToolDetail() {
  const { slug } = useParams();
  const tool = tools.find(t => t.slug === slug);
  const [mdContent, setMdContent] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    
    // Dynamically import the raw markdown file
    import(`../content/tools/${slug}.md?raw`)
      .then((module) => {
        setMdContent(module.default);
      })
      .catch(() => {
        // Silently fail if no markdown exists for this tool
        setMdContent(null);
      });
  }, [slug]);

  if (!tool) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <title>页面不存在 - IP Toolbox</title>
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem 2rem' }}>
          <h1 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-main)' }}>未找到该工具</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            该工具可能已下架、链接有误，或尚未收录。
          </p>
          <Link to="/" className="btn btn-primary">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  const formatStars = (stars: number | null | undefined) => {
    if (stars === null || stars === undefined) return '暂无';
    if (stars >= 1000) return (stars / 1000).toFixed(1) + 'k';
    return stars.toString();
  };

  const getPlatformIcon = (platform: string) => {
    if (platform === 'Windows') return '🪟';
    if (platform === 'macOS') return '🍎';
    if (platform === 'Linux') return '🐧';
    return '📦';
  };

  const formatArchitecture = (arch: string | undefined, platform: string) => {
    if (!arch) return '';
    if (arch === 'arm64' && platform === 'macOS') return 'Apple Silicon / ARM64';
    if (arch === 'x64' && platform === 'macOS') return 'Intel x64';
    if (arch === 'universal') return 'Universal';
    return arch.toUpperCase();
  };

  return (
    <div className="container" style={{ maxWidth: '800px', paddingBottom: '4rem' }}>
      <title>{tool.name} - IP Toolbox</title>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center' }}>
          &larr; 返回列表
        </Link>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
        <ToolIcon iconData={tool.icon} />
        <h1 style={{ fontSize: '2.25rem', color: 'var(--text-main)', margin: 0, fontWeight: 700 }}>{tool.name}</h1>
      </div>

      <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontWeight: 500 }}>
        {tool.shortDescription}
      </p>
      
      <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
        {tool.fullDescription}
      </p>

      {tool.whyChoose && (
        <div style={{ 
          marginBottom: '2rem', 
          padding: '1.25rem', 
          backgroundColor: 'var(--bg-alt)', 
          borderLeft: '4px solid var(--border)', 
          borderRadius: '0 var(--radius-md) var(--radius-md) 0'
        }}>
          <h3 style={{ fontSize: '1.05rem', margin: '0 0 0.5rem 0', color: 'var(--text-main)' }}>推荐理由</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            {tool.whyChoose}
          </p>
        </div>
      )}

      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', padding: '1.5rem', backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', minWidth: '80px' }}>适合人群</span>
          {tool.audiences.map(a => (
            <span key={a} className="tag" style={{ margin: 0 }}>{a}</span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', minWidth: '80px' }}>开源指标</span>
          <span className="tag" style={{ margin: 0 }}>GitHub ★ {formatStars(tool.githubStars)}</span>
          <span className="tag" style={{ margin: 0 }}>协议: {tool.license}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', minWidth: '80px' }}>支持平台</span>
          {tool.platforms.map(p => (
            <span key={p} className="tag" style={{ margin: 0 }}>{p}</span>
          ))}
        </div>

      </div>

      {mdContent && (
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>深度评测与解析</h2>
          <div className="markdown-body" style={{ padding: '2rem', backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {mdContent}
            </ReactMarkdown>
          </div>
        </div>
      )}

      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>获取方式</h2>
      <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', padding: '0.75rem 1rem', borderLeft: '3px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        所有安装包资源均直接引用自 <strong>官方发布渠道</strong>。内容核验日期：{tool.verifiedAt}。
      </div>

      {tool.releases.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {tool.releases.map((release, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.25rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--card-bg)' }}>
              <div>
                <div style={{ fontWeight: 500, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                  {getPlatformIcon(release.platform)} {release.platform} 
                  {release.architecture ? ` - ${formatArchitecture(release.architecture, release.platform)}` : ''}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
                  格式: {release.packageType.toUpperCase()} | 版本: {release.version}
                </div>
              </div>
              <a 
                href={release.downloadUrl}
                className="btn btn-outline"
                style={{ fontSize: '0.9rem', padding: '0.4rem 0.8rem' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                官方下载
              </a>
            </div>
          ))}
        </div>
      )}

      {tool.installMethods && tool.installMethods.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>其他安装方式</h3>
          {tool.installMethods.map((method, idx) => (
            <div key={idx} style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--card-bg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '1.05rem' }}>{method.title}</span>
                {method.sourceTrust === 'official' && <span className="tag" style={{ margin: 0, padding: '0.15rem 0.4rem', fontSize: '0.75rem' }}>官方</span>}
                {method.sourceTrust === 'community' && <span className="tag" style={{ margin: 0, padding: '0.15rem 0.4rem', fontSize: '0.75rem', backgroundColor: '#f3f4f6' }}>社区</span>}
              </div>
              
              {method.description && (
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  {method.description}
                  {method.type === 'docker' && <span style={{ marginLeft: '0.5rem', color: '#854d0e', backgroundColor: '#fef08a', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.8rem' }}>适合已安装 Docker 的用户</span>}
                </p>
              )}

              {method.command && (
                <div style={{ backgroundColor: '#f1f5f9', padding: '0.75rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#334155', overflowX: 'auto', whiteSpace: 'pre-wrap' }}>
                  {Array.isArray(method.command) ? method.command.join('\n') : method.command}
                </div>
              )}

              {method.url && (
                <div style={{ marginTop: '1rem' }}>
                  <a href={method.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '0.3rem 0.6rem' }}>
                    访问链接 ↗
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {tool.securityNotes && (
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>安全说明</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, padding: '1rem', backgroundColor: '#fffbeb', border: '1px solid #fef08a', borderRadius: 'var(--radius-md)' }}>
            {tool.securityNotes}
          </p>
        </div>
      )}

      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', gap: '1rem' }}>
        {tool.officialUrl && (
          <a href={tool.officialUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'underline' }}>
            访问官方网站 ↗
          </a>
        )}
        {tool.githubOwner && tool.githubRepo && (
          <a href={`https://github.com/${tool.githubOwner}/${tool.githubRepo}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'underline' }}>
            GitHub 仓库 ↗
          </a>
        )}
      </div>

    </div>
  );
}
