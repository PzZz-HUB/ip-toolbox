import { NavLink } from 'react-router';

export function Navbar() {


  return (
    <header>
      <div className="container header-nav">
        <NavLink to="/" end className="brand" aria-label="IP Toolbox 首页">
          IP Toolbox
        </NavLink>

        <nav id="main-nav" className="nav-links" aria-label="主导航">
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
