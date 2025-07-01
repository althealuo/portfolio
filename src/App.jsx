import { useState } from "react";
import Nav from "./components/Nav";
import Landing from "./sections/Landing";
import Projects from "./sections/Projects";
import About from "./sections/About";
import MLProjects from "./sections/MLProjects";


import "./styles/main.scss";

function App() {
  const [section, setSection] = useState("portfolio");

  return (
    <>
      <Nav active={section} onNavigate={setSection} />

      {section === "portfolio" && (
        <div id="portfolio">
          <Landing />
          <Projects />
          <MLProjects />
        </div>
      )}
      {section === "about" && <About />}
    </>
  );
}

export default App;

