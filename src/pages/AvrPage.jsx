
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
            title="Affect Driven Adaptive VR"
            tools="Unity, Blender, Substance Painter, Zbrush"
        >

            {/* <GalleryColumn images={["/img/avr/core-process.png"]} /> */}
            <GalleryTextPair video="/img/avr/flocking.mp4">
                <TextBlock label="Overview" title="Can we visualize our emotions and experience them in VR?">
                    <p>
                        And can this experience empower users' emotional well-being?
                        This project used physiological data to understand users' affective states and painted them
                        in an underwater fantasy virtual world.
                    </p>    
                    <br/>
                    <p>
                        I developed and worked on this project in the &nbsp;
                            <a
                                href="http://sonify.psych.gatech.edu/"
                            >
                                Sonification Lab
                            </a>.
                    </p>
                    <p>
                        It is still a work in progress, stay tuned!
                    </p>
                    <br/>
                    <p>
                        The video was recorded in quest 3, if it isn't playing, view it <a href="https://youtube.com/shorts/GqHVuR1Z6OA">here</a>
                    </p>
                </TextBlock>

            </GalleryTextPair>
            <Divider />

            <div className="text-block-grid">
                <TextBlock label="What to visualize?" title="0.1 - Physiological Data" />
                <p>What is emotion? I started with the discrete definition of basic emotions, and I used deep learning and EEG to
                    classify it, see <a
                        href="/img/ML/Emotion%20classification%20using%20EEG%20DL.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >this project</a>. However, later I learned that in practical applications,
                    continuous definition of affect is often more reliable.
                    
                    I also learned that real-time EEG data collection was challenging in itself.
                    Research-grade EEG can give high-quality data, but it's hard to stack a VR headset on
                    top of a 64-channel EEG cap. Consumer-grade devices with 5-12 channels are more portable, but gives
                    limited insights on complex matters like affect. We could abstract arousal from it, but so does a 
                    heart rate monitor like the Polar H10. 
                    <br/><br/>
                    So I decided to start simple with ECG data. 
                </p>
            </div>

            <div className="text-block-grid">
                <TextBlock label="How to visualize?" title="0.2 - Design System" />
                <p>Why VR and what's so special about it? Immersion is an obvious reason, but I particularly like it
                    for its ability to go beyond reality. For me it's a perfect medium for artistic creation. This project
                    isn't just a reason to create, but also an opportunity to make my creation meaningful. 
                    <br/><br/>
                    I started with a prototype of procedural flocks, and mapped their movement to the ECG data (higher arousal = faster movement).
                    However, there's a potential problem where users become more anxious when things move faster. 
                    But mapping the opposite direction (high arousal = slower movement) might be more confusing for users to interpret
                    their own affective state. The design challenge was how to do both at the same time: 1. help staying calm 
                    and 2. help improving emotional awareness.
                    <br/><br/>
                    
                    So I went back to the meanings of emotions. Telling someone to calm down only does the opposite effect. 
                    And so what even if someone is anxious? The best way to deal with negative emotions isn't 
                    suppression but acceptance. Perhaps our relationship with emotions should be to let them happen.
                    This realization led me to using the metaphor of time as the design guideline. 
                    <br/><br/>

                    The core idea is no matter what users are experiencing, there's always something pretty to look at to help them
                    focus on the present. I mapped arousal to the time of the day through brightness, and valence to the season
                    of the year through temperature. 
                    
                </p>
            </div>
            <GalleryColumn images={["/img/avr/design system.png"]} />


            <div className="text-block-grid">
                <TextBlock label="Research Implications" title="0.3 - Mitigation and Entrainment" />
                <p>As I developed the project, I started to collaborate more with different teams in the lab and 
                    explored potential new directions. 
                    For example, integrating breathing and haptic feedback for entrainment, adding LLM agent and using voice to measure valence
                    , or adding in adaptive music.
                    Based on our shared understanding and goals, we summarized the multimodal interaction system below. 
                    This could serve as a playground to study broader questions in human-AI collaboration. 
                </p>
            </div>
            <GalleryColumn images={["/img/avr/AVR system.png"]} />


            <Divider />
            {/* <ModelViewer modelPath="/img/avr/fish_model11_blue.glb" rotation={[0, -Math.PI / 2, 0]} /> */}
            <GalleryTextPair image="/img/avr/fish-model.png" reverse>
                <TextBlock label="the fish" title="1.1 - Blender Modeling">
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
                <TextBlock label="animation" title="2 - Procedural Flocking">
                    <p>
                        I re-used my project from the class Procedural Content Generation as the base of the animation. 
                        Each fish, or boid has four forces - cohesion, separation, alignment and avoidance. 
                    </p>
                    <br/>
                    <p>
                        This was coded in C# in Unity.
                    </p>
                    <br/>
                    <p className="sub-text">
                        Reference: <br/>
                        <a href="https://dl.acm.org/doi/10.1145/37402.37406"  
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sub-text">
                            Craig W. Reynolds (1987). “Flocks, Herds, and Schools: A Distributed Behavioral Model.”
                        </a>
                    </p>
                </TextBlock>
            </GalleryTextPair>
            <GalleryColumn images={["/img/avr/flock2.PNG", "/img/avr/flock1.PNG"]} />
            <Divider/>

            <GalleryTextPair image="/img/avr/moodbroad.png" reverse={true}>
                <TextBlock label="Fantasy Environment Building" title="3.1 - Moodbroad">
                    <p>
                        I set the theme to be an underwater fantasy scene, with overgrown post-apocalyptic ruins.
                    </p>
                </TextBlock>
            </GalleryTextPair>


            <div className="text-block-grid">
                <TextBlock label="Cave Iterations" title="3.2 - Blockout" />
                <p> For simplicity, I started with an enclosed space, like a cave. 
                    The blockout described a general layout of the space. 
                </p>
            </div>
            <GalleryColumn images={["/img/avr/cave iterations.png"]} />


            <div className="text-block-grid">
                <TextBlock label="" title="3.3 - The Problem of Scale and LOD" />
                <p> To optimize poly-count for real-time VR performance, I made the 
                    first version of the cave as a plane with holes.
                    Although it looked fine on a flat screen, the texture was extremely stretched and pixelated in VR 
                    after I scaled it up to an appropriate size.
                    
                
                <br/><br/>
                
                    Another problem was it doesn't allow for LOD (level of detail) optimization. 
                    For example, the foreground should contain the most textural details while the background can 
                    be less detailed. 
                </p>
            </div>
            <GalleryColumn images={["/img/avr/cave model.png"]} />


            <div className="text-block-grid">
                <TextBlock label="" title="3.4 - Modular Design" />
                <p> So I made 2 planes with 2k polys, sculpted details in Zbrush, 
                    baked and textured in Substance Painter. I also added emission later to visualize breathing.
                </p>
            </div>
            <GalleryRow images={[
                { src: "/img/avr/cave texture 1.png", alt: "Cave texture study 1" },
                { src: "/img/avr/cave texture 2.png", alt: "Cave texture study 2" },
            ]} />
            <GalleryColumn images={["/img/avr/cave setup.png"]} />

            <GalleryTextPair image="/img/avr/stone.png" reverse>
                <TextBlock label="Probes" title="3.5 - Stone">
                    <p>
                        I made it. It's mossy
                    </p>
                </TextBlock>
            </GalleryTextPair>

            <Divider />
            <div className="text-block-grid">
                <TextBlock label="Lighting" title="4 - Lighting" />
                <p> More to come..
                </p>
            </div>

        </ProjectBasePage>



    </>
  );
}

export default AvrPage;
