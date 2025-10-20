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
          {/* <br/> */}
          <p>In my free hours, I mostly zoom out, sometimes play the piano, paint and take photos.</p>
          <br/>
          
          <label>trajectory</label>
            <div className="exp-list">
              <h3>MSCS (AI)</h3>
              <p className="sub-text">Georgia Institute of Technology - Atlanta</p>
            </div>
            <p>
              graduating in May 2026 
            </p>
            <p>
              I'm advised by &nbsp;
              <a
                href="https://scholar.google.com/citations?user=4LxikSIAAAAJ&hl=en"
              >
                Dr. Wilson 
              </a>
               &nbsp;on human decision-making research using neural networks in the NRD (Neuroscience for Reinforcement learning and Decision-making) lab.
            </p>
            <p>
              I'm also working on Adaptive VR system based on biosignals under the &nbsp;
              <a
                href="http://sonify.psych.gatech.edu/"
              >
                Sonification Lab
              </a>&nbsp;, directed by Dr. Walker.
            </p>
            <br/>


            <div className="exp-list">
              <h3>Software Engineer</h3>
              <p className="sub-text">BeyondEdge Networks - Dallas</p>
            </div>
            <p>
              OOP, data vis, system design, etc
            </p>
            <br/>
            {/* <p>Worked on large-scale data for network automation and management for 2 years. My primary contributions were </p>
            <ul>
              <li>Dynamic real-time data visualization & LLM guided user experience design</li>
              <li>Data structure design and implementation & OOP system architecture development</li>
            </ul>
            <p>I enjoyed working with my team and learned a lot. At a technical level, I learned how to operate projects
              with large-scale systems. At a personal level, I learned how to communicate and collaborate effectively.</p>
            <br/> */}
            <div className="exp-list">
              <h3>BSCS (HCI & CG), Minor in Psychology</h3>
              <p className="sub-text">Georgia Institute of Technology - Atlanta</p>
            </div>
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
