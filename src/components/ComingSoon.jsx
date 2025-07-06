function ComingSoon({ projectName, onBack }) {
  return (
    <div className="coming-soon">
      <h1>{projectName} — Coming Soon</h1>
      <p>This page is under construction.</p>
      <button onClick={onBack} className="MainColorHighlight">← Back to Portfolio</button>
    </div>
  );
}

export default ComingSoon;
