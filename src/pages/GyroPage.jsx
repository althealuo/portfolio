import Nav from "../components/Nav";
import ProjectIntro from "../components/ProjectIntro";
import GalleryColumn from "../components/GalleryColumn";
import GalleryRow from "../components/GalleryRow";
import GalleryTextPair from "../components/GalleryTextPair";
import TextBlock from "../components/TextBlock";
import Divider from "../components/Divider";
import { useEffect } from "react";


const gyroImages = [
    // "/portfolio/img/gyro/detail1.jpg",
    
    // "/portfolio/img/gyro/render15.png",
    // "/portfolio/img/gyro/render13.png",
    // "/portfolio/img/gyro/render14.png",
    // "/portfolio/img/gyro/detail2.png",
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
            <TextBlock label="overview" title="A captive to the infinite passage of time">
                <p>
                    This is an original design of an intricate artifact. 
                    I connected ideas from cuckoo clocks and orreries to create something that exists in a magical 
                    antique store.
                </p>    
            </TextBlock>

        </GalleryTextPair>
        <GalleryTextPair image="/portfolio/img/gyro/ideation.png" reverse>
            <TextBlock label="my process" title="I started with a simple sketch,">
                <p>
                    then iterated on the blockout designs in Blender, 
                    first with shapes and the overall compositions, then with colors and textures.
                </p>    
            </TextBlock>

        </GalleryTextPair>
        <GalleryRow images={[
            { src: "/portfolio/img/gyro/blockout.png", ratio: 1 },
            { src: "/portfolio/img/gyro/render3.png", ratio: 1 }
        ]} />
        <GalleryColumn images={["/portfolio/img/gyro/render9.png"]} />
        {/* <Divider /> */}
        {/* <GalleryColumn images={["/portfolio/img/gyro/render15.png"]} /> */}
        
        <GalleryTextPair image="/portfolio/img/gyro/render15.png">
            <TextBlock label="details" title="A miniature treehouse with cuckoo birds,">
                <p>
                     
                    The middle section forms an abstract tree with trunk, branches, and leaves. 
                    The top is an orrery with a crescent moon, 
                    symbolizing the passage of time and the movement of the stars.
                </p>    
            </TextBlock>

        </GalleryTextPair>
        <GalleryRow images={[
            { src: "/portfolio/img/gyro/render13.png", ratio: 1 },
            { src: "/portfolio/img/gyro/render14.png", ratio: 1 },            
            { src: "/portfolio/img/gyro/detail2.png", ratio: 1 }
        ]} />
        <GalleryColumn images={gyroImages} />
    </>
  );
}

export default GyroPage;
