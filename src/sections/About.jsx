import "../styles/about.scss";

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src="/img/portrait.jpg" alt="Althea Portrait" className="portrait-img" />
          <p className="portrait-caption MainColorSubtext">My Portrait by Yuke</p>
        </div>
        <div className="about-text">
          <p className="intro MainColorText"><span className="highlight">hi,</span></p>
            <p className="description MainColorText">
                Broadly, I'm interested in using AI to understand the mind and to create artistic works.
            </p>
            <br />
            <p className="description MainColorText">
                My current thoughts are on
            </p>
            <ul className="description MainColorText">
                <li>Modeling decision-making processes using ML approaches</li>
                <li>Creating adaptive immersive VR worlds based on human data</li>
            </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
