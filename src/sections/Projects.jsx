// src/sections/Projects.jsx
import ProjectCard from "../components/ProjectCard";
import "../styles/sections.scss";

function Projects() {
  const projectList = [
    {
      title: "Gyroscope",
      tools: "Blender, Substance Painter, ZBrush",
      image: "/img/gyro/main.png",
      hoverVideo: "/img/gyro/animation.mp4",
      hoverImage: null,
      link: "gyro.html",
    },
    {
      title: "Wizard’s Table",
      tools: "Blender, Substance Painter, ZBrush",
      image: "/img/table/main.png",
      hoverImage: null,
      hoverVideo: null,
      link: "table.html",
    },
    {
      title: "VR Tavern Assets",
      tools: "Blender, Substance Painter, Substance Designer, ZBrush",
      image: "/img/tavern_assets/main.png",
      hoverImage: "/img/tavern_assets/main-wireframe.png",
      hoverVideo: null,
      link: "tavern.html",
    },
  ];

  return (
    <section className="section content-section">
      {projectList.map((proj) => (
        <ProjectCard key={proj.title} {...proj} />
      ))}
    </section>
  );
}

export default Projects;
