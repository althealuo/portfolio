import "../styles/sections.scss";

function MLProjectCard({ title, subtitle }) {
  return (
    <div className="ml-card">
      <h3 className="ml-title">{title}</h3>
      <p className="ml-subtitle">{subtitle}</p>
    </div>
  );
}

export default MLProjectCard;
