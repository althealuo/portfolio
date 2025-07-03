import "../styles/about.scss";

import Divider from "../components/Divider";

function About() {

  const story = `I’ve always liked psychology and art, and wanted to explore them through tech. 
I started with HCI and worked as a software engineer. On the side, I learned VR and enjoyed the possibility of immersive expression.
Now I'm back in school, researching in CogAI and NeuroAI.
`;
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src="/img/portrait.jpg" alt="Althea Portrait" className="portrait-img" />
          <p className="portrait-caption MainColorSubtext">My Portrait by Yuke</p>
        </div>

        <div className="about-text MainColorText">

          <p className="title">
            my story
          </p>
          {story.split("\n").map((line, i) => (
            <p key={i}>
              {line}
            </p>
          ))}
          <Divider />
          
          <p className="title">
            my current thoughts are on
          </p>
          <ul>
            <li>Modeling decision-making processes using ML approaches</li>
            <li>Creating adaptive immersive VR worlds based on human data</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
