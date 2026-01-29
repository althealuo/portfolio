import TextBlock from "../components/TextBlock";
import ContentSwitcher from "../components/ContentSwitcher";

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
        I did CS all the way, topped off with graphics and psychology. I thought it would enable me
        to do the things I want to do better than only doing the things themselves. It has been
        a weird journey, but now I'm researching Cognitive AI and making VR art. So it's working out.
      </p>
      <br />
      <p>In my free hours, I like going on a long walk and zoom out, or play the piano, paint and take photos.</p>
    </TextBlock>
  );

  const trajectory = (
    <TextBlock label="trajectory" title="">
      <div className="exp-list">
        <h3>MSCS (AI)</h3>
        <p className="sub-text">Georgia Institute of Technology - Atlanta</p>
      </div>
      <div className="exp-content">

        <p>graduating in May 2026</p>
        <p>
          I'm advised by&nbsp;
          <a
            href="https://scholar.google.com/citations?user=4LxikSIAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dr. Robert Wilson
          </a>
          &nbsp;on human decision-making research using AI.
        </p>
        <p>
          I'm also working on an Adaptive VR system under the&nbsp;
          <a
            href="http://sonify.psych.gatech.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sonification Lab
          </a>
          , directed by Dr. Bruce Walker.
        </p>
      
      </div>
      <br />
      <div className="exp-list">
        <h3>Software Engineer</h3>
        <p className="sub-text">BeyondEdge Networks - Dallas</p>
      </div>

      <div className="exp-content">
        <p>worked for 2 years doing OOP & System Design, Data Vis, UX, etc</p>
        <p>After work, I taught myself VR using Blender, Substance Suites and Zbrush</p>
      </div>
      <br />
      <div className="exp-list">
        <h3>BSCS (HCI & CG), Minor in Psychology</h3>
        <p className="sub-text">Georgia Institute of Technology - Atlanta</p>
      </div>
    </TextBlock>
  );

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="/img/my-pic-1.png" alt="Althea Portrait" className="portrait-img" />
        </div>

        <div className="about-content">

          <ContentSwitcher items={[myStory, trajectory]} />
        </div>
      </div>
    </section>
  );
}

export default About;
