import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '6rem 1rem' }}>
      <title>页面不存在 - IP Toolbox</title>
      <div style={{ color: 'var(--primary)', fontSize: '4rem', fontWeight: 700, lineHeight: 1 }}>404</div>
      <h1 style={{ fontSize: '2rem', margin: '1rem 0', color: 'var(--text-main)' }}>页面不存在</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
        你访问的页面可能已移动、删除，或地址输入有误。
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" className="btn btn-primary">
          返回首页
        </Link>
        <Link to="/tools" className="btn btn-outline">
          查看全部工具
        </Link>
      </div>
    </div>
  );
}
