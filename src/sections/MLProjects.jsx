import MLProjectCard from "../components/MLProjectCard";
import "../styles/sections.scss";

function MLProjects() {
  const mlProjects = [
    {
      title: "Personality and Language Models",
      subtitle: "Measure Big Five Inventory Convergence with Word Embedding Models and Generative AI",
    },
    {
      title: "Emotion Classification with Deep Learning",
      subtitle: "Using Brain-inspired Machine Intelligence for emotion recognition",
    },
  ];

  return (
    <section className="ml-section">
      {mlProjects.map((proj) => (
        <MLProjectCard key={proj.title} {...proj} />
      ))}
    </section>
  );
}

export default MLProjects;
