import TextBlock from "../components/TextBlock";
import Divider from "../components/Divider";

function About() {
  const myStory = (
    <TextBlock label="my story" title="I enjoy thinking and creating,">
      <p>
        or philosophy of the mind and art. In my most natural state, I observe, reflect and
        abstract ideas from human behaviors and relate it to how the mind works. Often, I find expressions
        to be hard, yet art makes it easier. 
      </p>
      <br />
      <p>
        I did CS all the way, focused on graphics and psychology. I thought it would enable me
        to do the things I want to do better than only doing the things themselves. It has been
        a weird journey, but now I'm researching Cognitive AI and making VR art. So it's working out.
      </p>
      <br />
      <p>In my free hours, I like going on a long walk and zoom out, or play the piano, paint and take photos.</p>
    </TextBlock>
  );

  const education = (
    <TextBlock label="Education" title="">
      <div className="exp-list">
        <h3>M.S. in Computer Science (AI)</h3>
        <p className="sub-text">Georgia Institute of Technology - Atlanta</p>
      </div>
      <div className="exp-content">

        {/* <p>graduating in May 2026</p> */}
        <p>
          Advised by &nbsp;
          <a
            href="https://scholar.google.com/citations?user=4LxikSIAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Robert Wilson
          </a>
          &nbsp;on interpretable neural networks for decision-making.
        </p>
        <p>
          Worked under&nbsp;
          <a
            href="https://scholar.google.com/citations?user=xY3zIEAAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bruce Walker
          </a>
          &nbsp;on Adaptive VR and affective computing. 
        </p>
      
      </div>
      <br />
      <div className="exp-list">
        <h3>B.S. in Computer Science (HCI & CG), Minor in Psychology</h3>
        <p className="sub-text">Georgia Institute of Technology - Atlanta</p>
        
      </div>
      
      <div className="exp-content"> 
        <p>
          Worked with &nbsp;
          <a
            href="https://scholar.google.com/citations?user=TaR3dq4AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rosa Arriaga
          </a>
          &nbsp;on HCI research for PTSD patients care. 
        </p>
        <p>
          Worked with &nbsp;
          <a
            href="https://scholar.google.com/citations?user=ATIriQwAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jay Bolter
          </a>
          &nbsp;on web-based VR Gallery.  
        </p>

      </div>

    </TextBlock>
  );

  const experience = (
    <TextBlock label="Work Experience" title="">

      <br />
      <div className="exp-list">
        <h3>Research Assistant</h3>
        <p className="sub-text">Neuroscience of Reinforcement learning and Decision making Lab - Georgia Tech - Atlanta</p>
      </div>

      <div className="exp-content">
        
        <p className="sub-text">Fulltime: 2026 - 2027</p>
        <p>Interpreting individual differences in human cognitive behaviors using neural networks</p>
        {/* <p>Optimized mesh poly counts by 50-80%</p> */}
        {/* <p>After work, I taught myself VR using Blender, Substance Suites and Zbrush</p> */}
      </div>

      
      <br />
      <div className="exp-list">
        <h3>VR Artist</h3>
        <p className="sub-text">KIA & GT - Atlanta</p>
      </div>

      <div className="exp-content">
        
        <p className="sub-text">Part-time: 2026</p>
        <p>Created and textured realistic 3D models for KIA factory simulation on assembling training </p>
        <p>Optimized mesh poly counts by 50-80%</p>
        {/* <p>After work, I taught myself VR using Blender, Substance Suites and Zbrush</p> */}
      </div>

      
      <br />

      <div className="exp-list">
        <h3>Software Engineer</h3>
        <p className="sub-text">BeyondEdge Networks - Dallas</p>
      </div>
      <div className="exp-content">
        
        <p className="sub-text">Fulltime: 2022 - 2024</p>
        <p>Network management and automation for large enterprise and datacenter networks</p>
        <p>OOP System Design, Data Visualization, UX</p>
        {/* <p>After work, I taught myself VR using Blender, Substance Suites and Zbrush</p> */}
      </div>
      <br />
    </TextBlock>
  );

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="my-story">
          <div className="about-image">
            <img src="/img/my-pic-1.png" alt="Althea Portrait" className="portrait-img" />
          </div>

          <div className="about-content">
            {myStory}
          </div>
        </div>

        <Divider />

        <div className="trajectory">
          {education}
          {experience}
        </div>
      </div>
    </section>
  );
}

export default About;
