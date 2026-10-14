import TextBlock from "../components/TextBlock";
import Divider from "../components/Divider";
import TrajectorySection from "../components/TrajectorySection";

const education = [
  {
    title: "M.S. in Computer Science (AI)",
    institute: "Georgia Institute of Technology - Atlanta",
    content: [
      <>
        Advised by{" "}
        <a
          href="https://scholar.google.com/citations?user=4LxikSIAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Robert Wilson
        </a>{" "}
        on interpretable neural networks for decision-making.
      </>,
      <>
        Worked under{" "}
        <a
          href="https://scholar.google.com/citations?user=xY3zIEAAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bruce Walker
        </a>{" "}
        on Adaptive VR and affective computing.
      </>,
    ],
  },
  {
    title: "B.S. in Computer Science (HCI & CG), Minor in Psychology",
    institute: "Georgia Institute of Technology - Atlanta",
    content: [
      <>
        Worked with{" "}
        <a
          href="https://scholar.google.com/citations?user=TaR3dq4AAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rosa Arriaga
        </a>{" "}
        on HCI research for PTSD patients care.
      </>,
      <>
        Worked with{" "}
        <a
          href="https://scholar.google.com/citations?user=ATIriQwAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jay Bolter
        </a>{" "}
        on web-based VR Gallery.
      </>,
    ],
  },
];

const experience = [
  {
    title: "Research Assistant",
    institute: "Neuroscience of Reinforcement learning and Decision making Lab - Georgia Tech - Atlanta",
    time: "Fulltime: 2026 - 2027",
    content: [
      "Interpreting individual differences in human cognitive behaviors using neural networks",
    ],
  },
  {
    title: "VR Artist",
    institute: "KIA & GT - Atlanta",
    time: "Part-time: 2026",
    content: [
      "Created and textured realistic 3D models for KIA factory simulation on assembling training",
      "Optimized mesh poly counts by 50-80%",
    ],
  },
  {
    title: "Software Engineer",
    institute: "BeyondEdge Networks - Dallas",
    time: "Fulltime: 2022 - 2024",
    content: [
      "Network management and automation for large enterprise and datacenter networks",
      "OOP System Design, Data Visualization, UX",
    ],
  },
];

function About() {
  const myStory = (
    <TextBlock label="my story" title="I enjoy thinking and creating,">
      <p>
        or philosophy of the mind and art. In my most natural state, I observe, reflect and
        abstract ideas from human behaviors and relate it to how the mind works. Often, I find expressions
        to be hard, yet art makes it easier. 
      </p>
      <br />
      <p>
        I did CS all the way, focused on graphics and psychology. I thought it would enable me
        to do the things I want to do better than only doing the things themselves. It has been
        a weird journey, but now I'm researching Cognitive AI and making VR art. So it's working out.
      </p>
      <br />
      <p>In my free hours, I like going on a long walk and zoom out, or play the piano, paint and take photos.</p>
    </TextBlock>
  );

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="my-story">
          <div className="about-image">
            <img src="/img/my-pic-1.png" alt="Althea Portrait" className="portrait-img" />
          </div>

          <div className="about-content">
            {myStory}
          </div>
        </div>

        <Divider />

        <div className="trajectory">
          <TrajectorySection label="Education" entries={education} />
          <TrajectorySection label="Work Experience" entries={experience} />
        </div>
      </div>
    </section>
  );
}

export default About;
