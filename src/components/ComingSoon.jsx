import "../styles/coming-soon.scss";
import Nav from "../components/Nav";
import BackButton from "../components/BackButton";

function ComingSoon() {
  return (
    <div className="coming-soon">
      <Nav />
      <h1>Coming Soon</h1>
      <p>This page is under construction.</p>

      <BackButton />
    </div>
  );
}

export default ComingSoon;
