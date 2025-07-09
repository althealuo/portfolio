import ProjectBasePage from "../components/ProjectBasePage";
import GalleryColumn from "../components/GalleryColumn";
import GalleryTextPair from "../components/GalleryTextPair";
import TextBlock from "../components/TextBlock";
import GalleryRow from "../components/GalleryRow";

function TavernPage() {
  return (
    <ProjectBasePage
      image="/portfolio/img/tavern_assets/main.png"
      title="VR Tavern Assets"
      tools="Blender, Substance Painter, Substance Designer, ZBrush"
    >
        <GalleryTextPair image="/portfolio/img/tavern_assets/main-wireframe.png">
            <TextBlock label="overview" title="An optimized low-poly scene for VR,">
                <p>
                This project captures the charm of medieval interiors, made for in real-time 
                development in UE5. 
                <br />
                It was a collaborated project with a professional 3D artist.
                </p>
            </TextBlock>
        </GalleryTextPair>

        <GalleryRow images={[
            { src: "/portfolio/img/tavern_assets/food.png", ratio: 1 },
            { src: "/portfolio/img/tavern_assets/food-wireframe.png", ratio: 1 }
        ]} />

        <GalleryTextPair image="/portfolio/img/tavern_assets/scene.png" reverse>
            <TextBlock label="concept blockout" title="A medieval tavern in the black forest,">
                <p>
                it's a gathering hub for adventurers, surrounded by dense woods and filled with
                the warm glow of a crackling fire.
                </p>
            </TextBlock>
        </GalleryTextPair>

        <GalleryTextPair image="/portfolio/img/tavern_assets/chair.png">
            <TextBlock label="realism fantasy" title="The study of wood">
                <p>
                    Each furniture was modeled in blender, then sculpted in ZBrush for details 
                    using trim dynamics. The wood textures were created in Substance Designer,
                    with layered color variation and normal details added in Painter.
                </p>
            </TextBlock>
        </GalleryTextPair>
        
        <GalleryColumn images={[
            "/portfolio/img/tavern_assets/bench.png",
            "/portfolio/img/tavern_assets/tables.png",
        ]} />              
        <GalleryRow images={[
            { src: "/portfolio/img/tavern_assets/shelf1.png", ratio: 2.5 },
            { src: "/portfolio/img/tavern_assets/shelf2.png", ratio: 1 },
        ]} />

        <GalleryTextPair image="/portfolio/img/tavern_assets/bunny.png">
            <TextBlock label="selected works" title="Hand painted utensils">
                <p>
                    The normal details are sculpted with the high-poly mesh in Zbrush, then baked onto the low-poly mesh.
                    The textures are hand-painted in Substance Painter, adding a unique touch to each piece.
                </p>
            </TextBlock>
        </GalleryTextPair>

        <GalleryRow images={[
            { src: "/portfolio/img/tavern_assets/pot.PNG", ratio: 1 },
            { src: "/portfolio/img/tavern_assets/ClayBottle.PNG", ratio: 0.5 },
            { src: "/portfolio/img/tavern_assets/ClayFatJugBottle.PNG", ratio: 1.2 },
            { src: "/portfolio/img/tavern_assets/Skillet.PNG", ratio: 1.5 },
        ]} />
        <GalleryRow images={[
            { src: "/portfolio/img/tavern_assets/teacupA.PNG", ratio: 1 },
            { src: "/portfolio/img/tavern_assets/Saucer.PNG", ratio: 1 },
            { src: "/portfolio/img/tavern_assets/teacupB_blue.PNG", ratio: 1 },
            { src: "/portfolio/img/tavern_assets/teacupB.PNG", ratio: 1 },
            { src: "/portfolio/img/tavern_assets/Saucer_blue.PNG", ratio: 1 },
        ]} />
        {/* <GalleryRow images={[
            { src: "/portfolio/img/tavern_assets/Jug.PNG", ratio: 1 },
            { src: "/portfolio/img/tavern_assets/ClayBottle.PNG", ratio: 0.5 },
            { src: "/portfolio/img/tavern_assets/ClayVase.PNG", ratio: 1 },
        ]} /> */}
        <GalleryRow images={[
            { src: "/portfolio/img/tavern_assets/bowl1.PNG", ratio: 1.5 },
            { src: "/portfolio/img/tavern_assets/Cauldron.PNG", ratio: 1.5 },
            { src: "/portfolio/img/tavern_assets/JugFat2.PNG", ratio: 1 },
            { src: "/portfolio/img/tavern_assets/Jug.PNG", ratio: 1 },
            { src: "/portfolio/img/tavern_assets/ClayVase.PNG", ratio: 1 },
        ]} />

    </ProjectBasePage>
  );
}

export default TavernPage;
