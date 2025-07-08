import { Link } from "react-router-dom";
import FadeWrapper from "./FadeWrapper";
import "../styles/sections.scss";

function ProjectCard({ title, tools, image, hoverImage, hoverVideo, link ="/coming-soon" }) {
  return (
    <div className="artwork">
      <Link to={link} className="project-link">
        <FadeWrapper
          defaultSrc={image}
          hoverImage={hoverImage}
          hoverVideo={hoverVideo}
          alt={title}
        />
        <div className="caption">
          <span className="title MainColorText">{title}</span>
          <span className="tools MainColorSubtext">{tools}</span>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
