
import GalleryColumn from "../components/GalleryColumn";
import GalleryRow from "../components/GalleryRow";
import GalleryTextPair from "../components/GalleryTextPair";
import TextBlock from "../components/TextBlock";
import Divider from "../components/Divider";
import ProjectBasePage from "../components/ProjectBasePage";    
import ModelViewer from '../components/ModelViewer'

const gyroImages = [
    // "/img/gyro/detail1.jpg",
    
    // "/img/gyro/render15.png",
    // "/img/gyro/render13.png",
    // "/img/gyro/render14.png",
    // "/img/gyro/detail2.png",
    "/img/gyro/detail3.png",
];
function AvrPage() {

  return (
    <>
        <ProjectBasePage
            image="/img/avr/avr-cover.PNG"
            title="Adaptive VR based on Biosignals"
            tools="Unity, Blender, Substance Painter, Zbrush"
        >

            {/* <GalleryColumn images={["/img/avr/core-process.png"]} /> */}
            <GalleryTextPair video="/img/avr/flocking.mp4">
                <TextBlock label="Overview" title="Your emotions change the world">
                    <p>
                        The core idea of the project explores how to understand the users' state of emotions through physiological data.
                        And based on this understanding, making a world that mitigates emotions or connects people.
                    </p>    
                    <br/>
                    <p>
                        I started with emotion classifications based on EEG, but later realized its limitations and 
                        shifted focus on using heart rate data and breathing data. 
                    </p>
                    <p>
                        This is build for meta quest 3 using Unity, and the graphic is still a work in progress, stay tuned!
                    </p>
                    <br/>
                    <p>
                        If the animation isn't playing, view it <a href="https://youtube.com/shorts/GqHVuR1Z6OA">here</a>
                    </p>
                </TextBlock>

            </GalleryTextPair>

            <GalleryTextPair image="/img/avr/core-process.png" reverse>
                <TextBlock label="Research Goal" title="1 - Anxiety & Stress Mitigation">
                    <h2>2 - Empathic Entrainment</h2>
                </TextBlock>

                <TextBlock label="Artistic Goal" title="Explore Artistic Potentials in VR">

                </TextBlock>
            </GalleryTextPair>

            <Divider />

            {/* <ModelViewer modelPath="/img/avr/fish_model11_blue.glb" rotation={[0, -Math.PI / 2, 0]} /> */}
            <GalleryTextPair image="/img/avr/fish-model.png" reverse>
                <TextBlock label="Artistic Exploration" title="1.1 - Blender Modeling">
                    <p>
                        I first looked up fish references and modeled it in Blender as my base model. 
                        And I want to capture the shape using the minimum amount of polyons for optimized performance in VR, and obsviously it looks very coarse.
                    </p>
                    <br/>
                    <p>
                        To create an illusion of smoothness, I applied shape smooth in Blender, and created a high-poly version using subdivision surfaces. Then I baked the low-poly base model with the high-poly version in Substance Painter.
                    </p>
                </TextBlock>

            </GalleryTextPair>
            <GalleryTextPair image="/img/avr/sp-texture.png" reverse>
                <TextBlock label="" title="1.2 - Model Texturing">
                    <p>
                        I want to aim for a style that blends between realism and fantasy, and the key lays in capturing the essence of the look while tuning down the right amount of details.
                    </p>
                    <br/>
                    <p>
                        In this case, I added normals from a procedural scale texture and hand-painted color variations. To make the colors pop, 
                        I also added emission channel for extra details, which can be broken down into 3 parts - base color glow, light curvature tint and highlighted spots. 
                    </p>
                </TextBlock>
            </GalleryTextPair>
            <GalleryTextPair image="/img/avr/fish-animation.png" reverse>
                <TextBlock label="" title="1.3 - Swimming Animation">
                    <p>
                        To animate the fish, I applied damped track constraint on the bone rigs.
                        And I used a sine wave plus noise function on the head bone to loop the animation organically.  
                    </p>
                    <p>
                        The animation was then baked for Unity import.
                    </p>
                </TextBlock>
            </GalleryTextPair>
            <div className="gallery-row">
                <TextBlock label="" title="1.4 - Final Results">
                    <p>
                        Below are the final models with textures and animations applied. 
                    </p>
                    <p>
                        You can rotate and zoom to see how the details interact with light.
                    </p>
                </TextBlock>
            </div>
            
            <GalleryRow images={[
                { src: "/img/avr/fish_model11_blue.glb", ratio: 1, rotation: [0, -Math.PI / 2, 0] },
                { src: "/img/avr/fish_model11_red.glb", ratio: 1, rotation: [0, -Math.PI / 2, 0], lightness: 0.01 }
            ]} />
            <Divider />

            <GalleryTextPair image="/img/avr/avr-cover.PNG">
                <TextBlock label="" title="2 - Flocking Animation">
                    <p>
                        more to come...
                    </p>
                </TextBlock>
            </GalleryTextPair>

            <GalleryTextPair image="/img/avr/avr-cover.PNG">
                <TextBlock label="" title="3 - Scene Setup">
                    <p>
                        more to come...
                    </p>
                </TextBlock>
            </GalleryTextPair>
        </ProjectBasePage>



    </>
  );
}

export default AvrPage;