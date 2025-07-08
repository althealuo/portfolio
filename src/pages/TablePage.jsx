
import GalleryColumn from "../components/GalleryColumn";
import GalleryRow from "../components/GalleryRow";
import GalleryTextPair from "../components/GalleryTextPair";
import TextBlock from "../components/TextBlock";
import ProjectBasePage from "../components/ProjectBasePage";
function TablePage() {
    

  const images = [
    // "/portfolio/img/table/detail1.png",
    "/portfolio/img/table/table-render1.png",
    "/portfolio/img/table/book2.png",
    // "/portfolio/img/table/table-render2.png",
    "/portfolio/img/table/axe.png",
    "/portfolio/img/table/axe_detail.png",
    "/portfolio/img/table/keys.png"
  ];

  return (
    <>
        <ProjectBasePage
            image="/portfolio/img/table/main.png"
            title="Witch's Table"
            tools="Blender, Substance Painter, Zbrush"
        >
            <GalleryTextPair image="/portfolio/img/table/detail1.png">
                <TextBlock label="overview" title="It was a learning project,">
                    <p>
                        I used blender and substance painter to create what I imagined a witch's table would look like.
                        And I used Zbrush to add sculpting details on the table and the axe.
                    </p>    
                </TextBlock>

            </GalleryTextPair>

            <GalleryColumn images={images} />
        
        </ProjectBasePage>
    </>
  );
}

export default TablePage;
