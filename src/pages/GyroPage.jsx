
import GalleryColumn from "../components/GalleryColumn";
import GalleryRow from "../components/GalleryRow";
import GalleryTextPair from "../components/GalleryTextPair";
import TextBlock from "../components/TextBlock";
import Divider from "../components/Divider";
import ProjectBasePage from "../components/ProjectBasePage";    

const gyroImages = [
    // "/img/gyro/detail1.jpg",
    
    // "/img/gyro/render15.png",
    // "/img/gyro/render13.png",
    // "/img/gyro/render14.png",
    // "/img/gyro/detail2.png",
    "/img/gyro/detail3.png",
];
function GyroPage() {

  return (
    <>
        <ProjectBasePage
            image="/img/gyro/detail1.jpg"
            title="Cukoo Orrery"
            tools="Blender, Substance Painter, Zbrush"
        >

            <GalleryTextPair video="/img/gyro/animation.mp4">
                <TextBlock label="overview" title="A captive to the infinite passage of time">
                    <p>
                        This is an original design of an intricate artifact. 
                        I connected ideas from cuckoo clocks and orreries to create something that exists in a magical 
                        antique store.
                    </p>    
                </TextBlock>

            </GalleryTextPair>
            <GalleryTextPair image="/img/gyro/ideation.png" reverse>
                <TextBlock label="my process" title="I started with a simple sketch,">
                    <p>
                        then iterated on the blockout designs in Blender, 
                        first with shapes and the overall compositions, then with colors and textures.
                    </p>    
                </TextBlock>

            </GalleryTextPair>
            <GalleryRow images={[
                { src: "/img/gyro/blockout.png", ratio: 1 },
                { src: "/img/gyro/render3.png", ratio: 1 }
            ]} />
            <GalleryColumn images={["/img/gyro/render9.png"]} />
            {/* <Divider /> */}
            {/* <GalleryColumn images={["/img/gyro/render15.png"]} /> */}
            
            <GalleryTextPair image="/img/gyro/render15.png">
                <TextBlock label="details" title="A miniature treehouse with cuckoo birds,">
                    <p>
                        
                        The middle section forms an abstract tree with trunk, branches, and leaves. 
                        The top is an orrery with a crescent moon, 
                        symbolizing the passage of time and the movement of the stars.
                    </p>    
                </TextBlock>

            </GalleryTextPair>
            <GalleryRow images={[
                { src: "/img/gyro/render13.png", ratio: 1 },
                { src: "/img/gyro/render14.png", ratio: 1 },            
                { src: "/img/gyro/detail2.png", ratio: 1 }
            ]} />
            <GalleryColumn images={gyroImages} />
        
        </ProjectBasePage>
    </>
  );
}

export default GyroPage;
