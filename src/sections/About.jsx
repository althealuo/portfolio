import "../styles/sections.scss";

function About() {
  return (
    <section className="section about-section">
      <div className="about-content">
        <div className="about-image">
          <img src="/img/portrait.jpg" alt="Althea Portrait" className="portrait-img" />
          <p className="portrait-caption MainColorSubtext">My Portrait by Yuke</p>
        </div>
        <div className="about-text">
          <p className="intro MainColorText"><span className="highlight">hi,</span></p>
          <p className="description MainColorText">
            I'm broadly interested in using AI to understand the mind and creating artistic works.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
