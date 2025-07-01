// src/components/ProjectCard.jsx
import FadeWrapper from "./FadeWrapper";
import "../styles/sections.scss";

function ProjectCard({ title, tools, image, hoverImage, hoverVideo, link }) {
  return (
    <div className="artwork">
      <a href={link} className="project-link">
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
      </a>
    </div>
  );
}

export default ProjectCard;
