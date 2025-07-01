import "../styles/sections.scss";

function Landing() {
  return (
    <section className="section landing">
      <div className="landing-content">
        <h1 className="landing-name">
            Althea Luo
        </h1>

        <hr className="landing-divider" />
        <div className="MainColorSubtext">
          <p>Understanding the mind with AI</p>
          <p className="landing-and">&amp;</p>
          <p>creating artistic worlds</p>
        </div>
      </div>
    </section>
  );
}

export default Landing;
