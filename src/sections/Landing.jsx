import "../styles/landing.scss";

function Landing() {
  return (
    <section className="section landing">
      <div className="landing-container">
        <div className="landing-left">
          <p className="landing-title">
            Althea
          </p>
          <div className="title-underline" />
        </div>
        <div className="landing-right">
          <div className="landing-divider" />
          <p className="landing-subtext">Understanding the mind with AI</p>
          <p className="landing-subtext highlight">&</p>
          <p className="landing-subtext">creating artistic worlds</p>
        </div>
      </div>
    </section>
  );
}

export default Landing;

