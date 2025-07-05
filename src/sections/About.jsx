import "../styles/about.scss";

import Divider from "../components/Divider";

function About() {

  const story = `and wanted to explore them through tech. I started with HCI and worked as a software engineer. On the side, I learned VR and enjoyed the possibility of immersive expression. Now I'm back in school, researching in CogAI and NeuroAI.


In my free hours, I mostly zoom out, sometimes play the piano, paint and take photos. 
`;
  return (
    <section className="about-section">
  <div className="about-container">
    <div className="about-image">
      <img src="/img/portrait-1.png" alt="Althea Portrait" className="portrait-img" />
      <p className="portrait-caption MainColorSubtext">My Portrait by Yuke</p>
      <p className="portrait-caption MainColorSubtext">Oil on Canvas</p>
    </div>

    <div className="about-text">
      <div className="section-block story-block">
        <p className="section-label">my story</p>
        <h2>I’ve always liked psychology and art,</h2>
          {story.split("\n").map((line, i) => (
            <p key={i}>
              {line}
            </p>
          ))}
      </div>


      <div className="section-block thoughts-block">
        <p className="section-label">research</p>
        <h2>My current thoughts are on</h2>
        <ul>
          <li>Modeling decision-making processes using ML approaches</li>
          <li>Creating adaptive immersive VR worlds based on human data</li>
        </ul>
      </div>
    </div>
  </div>
</section>

  );
}

export default About;
