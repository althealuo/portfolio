// src/components/ProjectBasePage.jsx
import { useEffect } from "react";
import Nav from "./Nav";
import ProjectIntro from "./ProjectIntro";
import BackButton from "./BackButton";
import Footer from "../sections/Footer";

function ProjectBasePage({ title, image, tools, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <Nav />
        <ProjectIntro image={image} title={title} tools={tools} />
        {children}
        <BackButton />
        <Footer />
    </>
  );
}

export default ProjectBasePage;
