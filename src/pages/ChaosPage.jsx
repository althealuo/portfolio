
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
            title="Deconstruct - Chaos - Reemerge"
            cinematic={false}
            tools="Original Artwork Presenting at Art Crawl Exhibition April 2026"
        >


            <GalleryTextPair image="/img/art_misc/chaos_3.png">
                <TextBlock label="idea" title="The iterations of growth">
                    I think it's a process that breaks one's self-identity into pieces. For a while, everything floats around in the midair
                     like chaos. But eventually, it will clear up.
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