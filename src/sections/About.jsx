// import "../styles/about.scss";

import Divider from "../components/Divider";
import TextBlock from "../components/TextBlock";

function About() {

  const story = `and wanted to explore them through tech. 
  
  I started with a focus in HCI and worked as a software engineer. On the side, I learned VR and enjoyed the possibility of immersive expression. Now I'm back in school, researching in CogAI.


In my free hours, I mostly zoom out, sometimes play the piano, paint and take photos. 
`;
  return (
    <section className="about-section">
  <div className="about-container">
    <div className="about-image">
      <img src="/img/my-pic-1.png" alt="Althea Portrait" className="portrait-img" />
    </div>


    <div className="about-text">

        <TextBlock label="my story" title="I’ve always liked psychology and art,">
          <p>and wanted to explore them through tech. I started with a focus in HCI and worked as a software engineer. On the side, I learned VR and enjoyed the possibility of immersive expression. 
            </p>
          <p>Now I'm back in school, researching in Cognitive AI and creative expressions in VR.</p>
          <br/>
          <p>In my free hours, I mostly zoom out, sometimes play the piano, paint and take photos.</p>
          <br/>
          <label>education & experience</label>

            <p>MS in Computer Science (AI) - Georgia Institute of Technology</p>
            <p>Software Engineer - BeyondEdge Networks</p>
            <p>BS in Computer Science (HCI & CG), Minor in Psychology - Georgia Institute of Technology</p>
        </TextBlock>

        {/* <TextBlock label="research" title="My current thoughts are on" delay={0.6}>
          <ul>
            <li>Modeling decision-making processes using ML approaches</li>
            <li>Creating adaptive immersive VR worlds based on human data</li>
          </ul>
        </TextBlock> */}
    </div>
  </div>
</section>

  );
}

export default About;
