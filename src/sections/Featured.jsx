import ProjectCard from "../components/ProjectCard";
import "../styles/sections.scss";

function Featured() {
  const projectList = [
    {
      title: "Cukoo Orrery",
      tools: "Blender, Substance Painter, ZBrush",
      image: "/img/gyro/main.png",
      hoverVideo: "/img/gyro/animation.mp4",
      hoverImage: null,
      link: "/gyro",
    },
  ];

  return (
    <section className="section content-section fade-slide-up"  id="featured">
      {projectList.map((proj) => (
        <ProjectCard key={proj.title} {...proj} />
      ))}
    </section>
  );
}

export default Featured;
