import ProjectCard from "../components/ProjectCard";
import "../styles/sections.scss";

function Featured() {
  const projectList = [
    {
      title: "Gyroscope",
      tools: "Blender, Substance Painter, ZBrush",
      image: "/portfolio/img/gyro/main.png",
      hoverVideo: "/portfolio/img/gyro/animation.mp4",
      hoverImage: null,
      link: "/portfolio/gyro",
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
