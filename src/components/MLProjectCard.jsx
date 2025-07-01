import "../styles/sections.scss";

function MLProjectCard({ title, subtitle }) {
  return (
    <div className="ml-card">
      <h3 className="title">{title}</h3>
      <p className="tools">{subtitle}</p>
    </div>
  );
}

export default MLProjectCard;
