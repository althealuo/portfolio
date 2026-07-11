import GalleryTextPair from "../components/GalleryTextPair";
import TextBlock from "../components/TextBlock";
import ProjectBasePage from "../components/ProjectBasePage";

function PraxisPage() {
  return (
    <>
      <ProjectBasePage
        image="/img/praxis/Hero-clean.png"
        title="Praxis XR"
        // cinematic={true}
        tools={
          <a
            href="https://www.praxis-xr.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            praxis-xr.com
          </a>
        }
      >
        <GalleryTextPair image="/img/praxis/drill3.png">
          <TextBlock label="Overview" title="KIA factory simulation">
            used for assembling training in VR. 
            <br /><br />
            <p>As the 3D artist, my services included:</p>
            <ul>
              <li>Textured 14 models including the KIA car compartments, the assembly line and the factory environment probes</li>
              <li>Optimized mesh poly counts by 50-80%</li>
            </ul>
            <br />
            <p>Due to NDA, I can't share the results here. </p>
          </TextBlock>
        </GalleryTextPair>
      </ProjectBasePage>
    </>
  );
}

export default PraxisPage;
