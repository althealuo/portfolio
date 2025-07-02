import { useState } from "react";
import Nav from "./components/Nav";
import SideNav from "./components/SideNav";
import Divider from "./components/Divider";
import Landing from "./sections/Landing";
import Featured from "./sections/Featured";
import Projects from "./sections/Projects";
import About from "./sections/About";
import MLProjects from "./sections/MLProjects";
import Footer from "./sections/Footer";


import "./styles/main.scss";

function App() {
  const [section, setSection] = useState("portfolio");

  return (
    <>
      <Nav active={section} onNavigate={setSection} />

      {section === "portfolio" && (
        <div id="portfolio">
          <Landing />
          <SideNav /> 
          <Featured /> 
          <Divider />

          <MLProjects />
          <Divider />

          <Projects />
          <Divider />
        </div>
      )}
      {section === "about" && <About />}
      <Footer />
    </>
  );
}

export default App;

