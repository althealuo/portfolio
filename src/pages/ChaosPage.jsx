
import GalleryColumn from "../components/GalleryColumn";
import GalleryRow from "../components/GalleryRow";
import GalleryTextPair from "../components/GalleryTextPair";
import TextBlock from "../components/TextBlock";
import Divider from "../components/Divider";
import ProjectBasePage from "../components/ProjectBasePage";    
import ModelViewer from '../components/ModelViewer'

function ChaosPage() {

  return (
    <>
        <ProjectBasePage
            image="/img/art_misc/chaos.png"
            title="Chaos"
            cinematic={false}
            tools="Original Artwork Presenting at Art Crawl Exhibition April 2026"
        >


            <GalleryTextPair image="/img/art_misc/chaos_3.png">
                <TextBlock label="idea" title="Deconstruct - Chaos - Reemerge">
                    The iterations of growth
                </TextBlock>

            </GalleryTextPair>


            <GalleryTextPair image="/img/art_misc/chaos_detail2.png" reverse>
                <TextBlock label="" title="">
                    
                </TextBlock>

            </GalleryTextPair>

            {/* <Divider /> */}
        </ProjectBasePage>



    </>
  );
}

export default ChaosPage;