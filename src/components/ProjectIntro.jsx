// src/components/ProjectIntro.jsx
import "../styles/project-page.scss";


function ProjectIntro({ image, title, tools }) {
  return (
    <div className="project-intro centered-layout">
        
      <div className="intro-image-wrapper">
        <img src={image} alt={title} />
      </div>
      <p className="intro-title">
        {title}
      </p>
      <p className="tools">
        {tools}
      </p>
    </div>
  );
}

export default ProjectIntro;