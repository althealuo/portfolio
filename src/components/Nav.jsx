import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Toggle background color when scrolled
      setScrolled(currentScrollY > 20);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "PORTFOLIO", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
      <ul className="nav-links">
        {navItems.map(({ label, path }) => {
          const isActive = location.pathname === path;
          return (
            <li key={path} className="nav-item">
              <Link
                to={path}
                className={isActive ? "MainColorHighlight" : ""}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
