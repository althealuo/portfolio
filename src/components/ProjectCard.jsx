import "../styles/sections.scss";

function ProjectCard({ title, tools, image, hoverImage, link }) {
  return (
    <div className="artwork">
      <a href={link} className="project-link">
        <div className="image-fade-wrapper">
          <img src={image} alt={title} className="project-image default-img" />
          {hoverImage && (
            <img src={hoverImage} alt={`${title} (alt)`} className="project-image hover-img" />
          )}
        </div>
        <div className="caption">
          <span className="title MainColorText">{title}</span>
          <span className="tools MainColorSubtext">{tools}</span>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
