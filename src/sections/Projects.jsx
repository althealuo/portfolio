import ProjectCard from "../components/ProjectCard";
import "../styles/sections.scss";

function Projects() {
  const projectList = [
    {
      title: "Gyroscope",
      tools: "Blender, Substance Painter, ZBrush",
      image: "img/gyro/main.png",
      hoverImage: null, // you'll swap to video later
      link: "gyro.html",
    },
    {
      title: "Wizard’s Table",
      tools: "Blender, Substance Painter, ZBrush",
      image: "img/table/main.png",
      hoverImage: null,
      link: "table.html",
    },
    {
      title: "VR Tavern Assets",
      tools: "Blender, Substance Painter, Substance Designer, ZBrush",
      image: "img/tavern_assets/main.png",
      hoverImage: "img/tavern_assets/main-wireframe.png",
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
