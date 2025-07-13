
import GalleryColumn from "../components/GalleryColumn";
import GalleryRow from "../components/GalleryRow";
import GalleryTextPair from "../components/GalleryTextPair";
import TextBlock from "../components/TextBlock";
import ProjectBasePage from "../components/ProjectBasePage";
function TablePage() {
    

  const images = [
    // "/img/table/detail1.png",
    "/img/table/table-render1.png",
    "/img/table/book2.png",
    // "/img/table/table-render2.png",
    "/img/table/axe.png",
    "/img/table/axe_detail.png",
    "/img/table/keys.png"
  ];

  return (
    <>
        <ProjectBasePage
            image="/img/table/main.png"
            title="Witch's Table"
            tools="Blender, Substance Painter, Zbrush"
        >
            <GalleryTextPair image="/img/table/detail1.png">
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
