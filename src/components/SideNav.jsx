// src/components/SideNav.jsx
import "../styles/sidenav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function SideNav() {
  return (
    <nav className="side-nav">
      <ul>
        <li className="arrow-icon">
          <a href="#top">
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </li>
        <li><a href="#featured">featured</a></li>
        <li><a href="#mind">mind</a></li>
        <li><a href="#arts">arts</a></li>
      </ul>
    </nav>
  );
}

export default SideNav;
