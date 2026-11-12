import { Link } from "react-router-dom";
// import "../styles/sections.scss";

function MLProjectCard({ title, subtitle, image, imageAlt, status, link }) {
  const CardLink = link ? "a" : Link;
  const linkProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : { to: "/coming-soon" };

  return (
    <CardLink {...linkProps} className="ml-card">
      <div className="ml-img">
        <img src={image} alt={imageAlt} loading="lazy" />
      </div>
      <div className="ml-card-content">
        <h3 className="title">{title}</h3>
        <p className="tools">{subtitle}</p>
        <div className="ml-card-status">{status}</div>
      </div>
    </CardLink>
  );
}

export default MLProjectCard;
