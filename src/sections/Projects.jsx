// src/sections/Projects.jsx
import ProjectCard from "../components/ProjectCard";
import "../styles/sections.scss";

function Projects() {
  const projectList = [
    // {
    //   title: "Gyroscope",
    //   tools: "Blender, Substance Painter, ZBrush",
    //   image: "/img/gyro/main.png",
    //   hoverVideo: "/img/gyro/animation.mp4",
    //   hoverImage: null,
    //   link: "gyro.html",
    // },
    {
      title: "Witch's Table",
      tools: "Blender, Substance Painter, ZBrush",
      image: "/portfolio/img/table/main.png",
      hoverImage: "/portfolio/img/table/main.png",
      hoverVideo: null,
      link: "/table",
    },
    {
      title: "VR Tavern Assets",
      tools: "Blender, Substance Painter, Substance Designer, ZBrush",
      image: "/portfolio/img/tavern_assets/main.png",
      hoverImage: "/portfolio/img/tavern_assets/main-wireframe.png",
      hoverVideo: null,
      link: "/coming-soon",
    },
    {
      title: "Photography",
      tools: "",
      image: "/portfolio/img/photo_paintings/nyc.jpg",
      hoverImage: "/portfolio/img/photo_paintings/nyc.jpg",
      hoverVideo: null,
      link: "/coming-soon",
    },
  ];

  return (
    <section className="section content-section"  id="arts">
      {projectList.map((proj) => (
        <ProjectCard key={proj.title} {...proj} />
      ))}
    </section>
  );
}

export default Projects;
