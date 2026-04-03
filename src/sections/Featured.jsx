import ProjectCard from "../components/ProjectCard";
// import "../styles/sections.scss";

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

    // {
    //   title: "Affect Driven Adaptive VR",
    //   tools: "Unity, Blender, Substance Painter, ZBrush",
    //   image: "/img/avr/avr-cover.PNG",
    //   // hoverVideo: "/img/avr/avr-video.mp4",
    //   hoverImage: "/img/avr/avr-cover.PNG",
    //   link: "/avr",
    // },

    
    {
      title: "Deconstruct - Chaos - Reemerge",
      tools: "Original Artwork Presenting at Art Crawl Exhibition April 2026",
      image: "/img/art_misc/chaos.png",
      // hoverVideo: "/img/avr/avr-video.mp4",
      hoverImage: "/img/art_misc/chaos.png",
      link: "/chaos",
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
