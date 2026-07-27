import { NavLink } from 'react-router';

export function Navbar() {


  return (
    <header>
      <div className="container header-nav">
        <NavLink to="/" end className="brand" aria-label="IP Toolbox 首页">
          IP Toolbox
        </NavLink>

      </div>
    </header>
  );
}
