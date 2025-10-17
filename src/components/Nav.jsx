// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.scss";

function Nav() {
  const location = useLocation();
  const navItems = [
    { label: "PORTFOLIO", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "CONTACT", path: "/contact" },
  ];
  
  return (
    <nav className="navbar">
      <ul className="nav-links">
        {navItems.map(({ label, path }) => {
          const isActive = location.pathname === path;
          return (
            <li key={path} className={`nav-item`}>
              <Link to={path} className={isActive ? "MainColorHighlight" : ""}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
