import MLProjectCard from "../components/MLProjectCard";
// import "../styles/sections.scss";

function MLProjects() {
  const mlProjects = [
    {
      title: "Is Random Exploration Random?",
      image: "/img/ML/horizon_individual.png",
      imageAlt: "Model accuracy across Horizon Task conditions",
      status: "In Submission",
      link: "https://arxiv.org/abs/2611.17011",
      subtitle: `A new semester starts, do you want to take all major-related courses, or explore something new?
      When exploring, is it a deliberate move to reduce uncertainty,
      or a choice by chance? And is this "by chance" exploration truly random?  
      This paper investigated this question using neural networks to approximate the predictability ceiling 
      in a large-scale dataset (n=1,392) of the Horizon Task.`,
    },
    // {
    //   title: "How do Primates and Children Adaptively Make Decisions?",
    //   image: "",
    //   imageAlt: "",
    //   status: "Manuscript in Preparation",
    //   link: "",
    //   subtitle: ``,
    // },
    {
      title: "Does the Big Five Personality Traits Converge with Language Models?",
      image: "/img/ML/glove_heatmap.png",
      imageAlt: "Heatmap comparing Big Five personality items",
      status: "Project",
      link: "/img/ML/Personality%20and%20language%20models.pdf",
      subtitle: `The Big Five Inventory is the dominating theory in personality psychology.
                It was derived from the lexical hypothesis and had been validated across cultures.
                 Can we observe the same emergence in language models? If so, can we use LLMs as an approach to generate psychometric questionnaire items?`,
    },
    {
      title: "Can We Classify Affective States using EEG with Deep Learning?",
      image: "/img/ML/snn_accuracy.png",
      imageAlt: "Training and validation accuracy curves for emotion classification",
      status: "Project",
      link: "/img/ML/Emotion%20classification%20using%20EEG%20DL.pdf",
      subtitle: `We used various DL architectures (LSTM, CNNs, SNNs) to predict discrete emotions using EEG data from SEED.
                We were able to achieve a reasonable accuracy.
                However, looking back now, the key to this question was never about accuracies, but how do we define emotions.
                My current opinion leans towards continuous affective states (arousal, valence, dominance), but even that remains problematic. `,
    },
  ];

  return (
    <section className="ml-section" id="mind">
      {mlProjects.map((proj) => (
        <MLProjectCard key={proj.title} {...proj} />
      ))}
    </section>
  );
}

export default MLProjects;
