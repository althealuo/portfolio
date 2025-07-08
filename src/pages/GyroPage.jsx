import Nav from "../components/Nav";
import ProjectIntro from "../components/ProjectIntro";
import GalleryColumn from "../components/GalleryColumn";
import GalleryRow from "../components/GalleryRow";
import GalleryTextPair from "../components/GalleryTextPair";
import { useEffect } from "react";


const gyroImages = [
    // "/portfolio/img/gyro/detail1.jpg",
    "/portfolio/img/gyro/render9.png",
    "/portfolio/img/gyro/render15.png",
    "/portfolio/img/gyro/render13.png",
    "/portfolio/img/gyro/render14.png",
    "/portfolio/img/gyro/detail2.png",
    "/portfolio/img/gyro/detail3.png",
];
function GyroPage() {

  // scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <Nav />
        <ProjectIntro
        image="/portfolio/img/gyro/detail1.jpg"
        title="Cukoo Orrery"
        tools="Blender, Substance Painter, Zbrush"
        />
        <GalleryTextPair video="/portfolio/img/gyro/animation.mp4">
            <p>
                This is an original design of an intricate artifact. 
                I connected multiple design elements to create something that exists in a magical 
                antique store.
            </p>
            <br />
            <p>
                It captures the infinite passage of time, with a cukoo bird trapped in it.
            </p>
        </GalleryTextPair>
        {/* Gallery goes here next */}
        <GalleryRow images={[
            { src: "/portfolio/img/gyro/ideation.png", ratio: 1 },
            { src: "/portfolio/img/gyro/blockout.png", ratio: 1 }
        ]} />
        <GalleryColumn images={gyroImages} />
    </>
  );
}

export default GyroPage;
