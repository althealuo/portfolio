// src/sections/Projects.jsx
import ProjectCard from "../components/ProjectCard";
// import "../styles/sections.scss";

function Projects() {
  const projectList = [
    
  {
    title: "Affect Driven Adaptive VR",
    tools: "Unity, Blender, Substance Painter, ZBrush, Quest 3",
    image: "/img/avr/avr-cover.PNG",
    // hoverVideo: "/img/avr/avr-video.mp4",
    hoverImage: "/img/avr/avr-cover.PNG",
    link: "/avr",
  },

  {
    title: "Praxis XR",
    tools: "KIA Factory Simulation for Assembling Training | Unity, Blender, Substance Painter, Quest 3",
    image: "/img/praxis/Hero-overlay.png",
    // hoverVideo: "/img/avr/avr-video.mp4",
    hoverImage: "/img/praxis/Hero-overlay.png",
    link: "/praxis",
  },

  
  {
      title: "Cukoo Orrery",
      tools: "Original Design of a Mechanical Orrery | Blender, Substance Painter, ZBrush",
      image: "/img/gyro/main.png",
      hoverVideo: "/img/gyro/animation.mp4",
      hoverImage: null,
      link: "/gyro",
    },
    {
      title: "VR Tavern Assets",
      tools: "Optimized Low-Poly 3D Models for Real-Time VR | Blender, Substance Painter, Substance Designer",
      image: "/img/tavern_assets/main.png",
      hoverImage: "/img/tavern_assets/main-wireframe.png",
      hoverVideo: null,
      link: "/tavern",
    },
    {
      title: "Witch's Table",
      tools: "Learning Project to Create a Fantasy 3D Environment | Blender, Substance Painter, ZBrush",
      image: "/img/table/main.png",
      hoverImage: "/img/table/main.png",
      hoverVideo: null,
      link: "/table",
    },
    {
      title: "Art Misc",
      tools: "",
      image: "/img/art_misc/cover-1.png",
      hoverImage: "/img/art_misc/cover-1.png",
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
