
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
            <GalleryTextPair image="/img/avr/avr-cover.PNG">
                <TextBlock label="Overview" title="Your emotions change the world">
                    <p>
                        The core idea of the project explores how to understand the users' state of emotions through physiological data.
                        And based on this understanding, making a world that guides through stress and anxiety.
                    </p>    
                    <br/>
                    <div>
                        <img src="/img/avr/core-process.png" alt="core process" className="width-large"/>
                    </div>
                    <br/>
                    
                    <label>Goal 1: Mental Health Mitigation</label>
                    <p>

                    </p>
                    <br/>
                    <label>Goal 2: Explore Artistic Potential in VR</label>
                    <p>

                    </p>
                </TextBlock>

            </GalleryTextPair>

            <Divider />

            {/* <ModelViewer modelPath="/img/avr/fish_model11_blue.glb" rotation={[0, -Math.PI / 2, 0]} /> */}
            <GalleryTextPair image="/img/gyro/ideation.png" reverse>
                <TextBlock label="Artistic Exploration" title="Blender Modeling">
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
            <GalleryRow images={[
                { src: "/img/avr/fish_model11_blue.glb", ratio: 1, rotation: [0, -Math.PI / 2, 0] },
                { src: "/img/avr/fish_model11_red.glb", ratio: 1, rotation: [0, -Math.PI / 2, 0] }
            ]} />


        </ProjectBasePage>
    </>
  );
}

export default AvrPage;