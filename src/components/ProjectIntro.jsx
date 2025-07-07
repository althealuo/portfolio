// src/components/ProjectIntro.jsx
import "../styles/project-page.scss";


function ProjectIntro({ image, title }) {
  return (
    <div className="project-intro centered-layout">
        
      <p className="intro-title">
        {title}
      </p>
      <div className="intro-image-wrapper">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

export default ProjectIntro;