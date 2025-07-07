import "../styles/coming-soon.scss";
import Nav from "../components/Nav";

function ComingSoon({ projectName, onBack }) {
  return (
    <div className="coming-soon">
      <Nav />
      <h1>Coming Soon</h1>
      <p>This page is under construction.</p>
      <button onClick={onBack} className="MainColorHighlight"> Back</button>
    </div>
  );
}

export default ComingSoon;
