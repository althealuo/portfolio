import Nav from "../components/Nav";
import ProjectIntro from "../components/ProjectIntro";
import GalleryColumn from "../components/GalleryColumn";
import GalleryRow from "../components/GalleryRow";
import GalleryTextPair from "../components/GalleryTextPair";
import TextBlock from "../components/TextBlock";
import { useEffect } from "react";

function TablePage() {
    
    // scroll to top on page load
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

  const images = [
    // "/portfolio/img/table/detail1.png",
    "/portfolio/img/table/table-render1.png",
    "/portfolio/img/table/book2.png",
    "/portfolio/img/table/table-render2.png",
    "/portfolio/img/table/axe.png",
    "/portfolio/img/table/axe_detail.png",
    "/portfolio/img/table/keys.png"
  ];

  return (
    <>
        <Nav />
        <ProjectIntro
        image="/portfolio/img/table/main.png"
        title="Wizard’s Table"
        tools="Blender, Substance Painter, Zbrush"
        />
        <GalleryTextPair image="/portfolio/img/table/detail1.png">
            <TextBlock label="overview" title="A learning project">
                <p>
                    I made this entire scene from scratch, which includes modeling, sculpting, texturing, 
                    shading and rendering. It consists of more than 20 unique objects with texture variations. 
                    I painted most of the textures myself using substance painter and procedural textures. 
                </p>    
            </TextBlock>

        </GalleryTextPair>

        <GalleryColumn images={images} />
    </>
  );
}

export default TablePage;
