// src/components/SideNav.jsx
import "../styles/sidenav.scss";
function SideNav() {
  return (
    <nav className="side-nav">
      <ul>
        <li><a href="#top"><span>&uarr;</span></a></li>
        <li><a href="#featured">featured</a></li>
        <li><a href="#mind">mind</a></li>
        <li><a href="#arts">arts</a></li>
      </ul>
    </nav>
  );
}

export default SideNav;
