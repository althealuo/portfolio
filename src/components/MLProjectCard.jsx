import { Link } from "react-router-dom";
import "../styles/sections.scss";

function MLProjectCard({ title, subtitle, link = "/coming-soon" }) {
  return (
    <Link to={link} className="ml-card">
        <h3 className="title">{title}</h3>
        <p className="tools">{subtitle}</p>
    </Link>
  );
}

export default MLProjectCard;
