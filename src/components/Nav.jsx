// src/components/Navbar.jsx
import "../styles/navbar.scss";

function Nav({ active, onNavigate }) {
  const navItems = ["Portfolio", "About"];
  // const navItems = ["Portfolio", "About", "Contact"];

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {navItems.map((label) => {
          const key = label.toLowerCase();
          const isActive = active === key;

          return (
            <li
              key={key}
              className={`nav-item ${isActive ? "MainColorHighlight" : ""}`}
              onClick={() => onNavigate(key)}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
