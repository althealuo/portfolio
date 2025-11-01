import TextBlock from "../components/TextBlock";
import ContentSwitcher from "../components/ContentSwitcher";

function About() {
  const myStory = (
    <TextBlock label="my story" title="I enjoy thinking and creating,">
      <p>
        or the philosophy of mind and art to be concrete. But philosophy is a big word that
        brings in too much assumptions. I personally just enjoy observing, reflecting and
        abstracting ideas from human behaviors and relate it to how the mind works.
      </p>
      <br />
      <p>
        I did CS all the way, sprinkled with some art and psychology. I think it will enable me
        to do the things I want to do better than only doing the things themselves. It has been
        a weird journey, but now I'm researching Cognitive AI and making VR art. So it's working out.
      </p>
      <br />
      <p>In my free hours, I mostly zoom out, sometimes play the piano, paint and take photos.</p>
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
        <p>worked for 2 years doing OOP, data vis, system design, UX, rapid prototyping, etc</p>
        <p>side detail, I learned VR after work</p>
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

        <ContentSwitcher items={[myStory, trajectory]} />
      </div>
    </section>
  );
}

export default About;
