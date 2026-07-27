import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header>
      <div className="container header-nav">
        <NavLink to="/" end className="brand" aria-label="IP Toolbox 首页">
          IP Toolbox
        </NavLink>
        
        <button 
          className="mobile-menu-btn" 
          aria-expanded={isOpen} 
          aria-controls="main-nav"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '关闭' : '菜单'}
        </button>

        <nav 
          id="main-nav" 
          className={`nav-links ${isOpen ? 'is-open' : ''}`} 
          aria-label="主导航"
        >
          <a 
            href="https://ip666666.com/" 
            className="external-link"
            aria-label="返回 IP 检测网站"
          >
            返回 IP 检测 ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
