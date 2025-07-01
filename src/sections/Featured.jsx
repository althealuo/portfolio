import ProjectCard from "../components/ProjectCard";
import "../styles/sections.scss";

function Featured() {
  const projectList = [
    {
      title: "Gyroscope",
      tools: "Blender, Substance Painter, ZBrush",
      image: "/img/gyro/main.png",
      hoverVideo: "/img/gyro/animation.mp4",
      hoverImage: null,
      link: "gyro.html",
    },
  ];

  return (
    <section className="section content-section"  id="featured">
      {projectList.map((proj) => (
        <ProjectCard key={proj.title} {...proj} />
      ))}
    </section>
  );
}

export default Featured;
