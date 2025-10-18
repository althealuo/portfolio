import ProjectCard from "../components/ProjectCard";
import "../styles/sections.scss";

function Featured() {
  const projectList = [
    // {
    //   title: "Cukoo Orrery",
    //   tools: "Blender, Substance Painter, ZBrush",
    //   image: "/img/gyro/main.png",
    //   hoverVideo: "/img/gyro/animation.mp4",
    //   hoverImage: null,
    //   link: "/gyro",
    // },

    {
      title: "Adaptive VR based on Biosignals",
      tools: "Unity, Blender, Substance Painter, ZBrush",
      image: "/img/avr/avr-cover.PNG",
      // hoverVideo: "/img/avr/avr-video.mp4",
      hoverImage: "/img/avr/avr-cover.PNG",
      link: "/avr",
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
