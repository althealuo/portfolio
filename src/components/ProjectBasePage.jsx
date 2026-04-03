// src/components/ProjectBasePage.jsx
import { useEffect } from "react";
import Nav from "./Nav";
import ProjectIntro from "./ProjectIntro";
import BackButton from "./BackButton";
import Footer from "../sections/Footer";
import Divider from "./Divider";

function ProjectBasePage({ title, image, tools, cinematic=true, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <Nav />
        <ProjectIntro image={image} title={title} tools={tools} cinematic={cinematic} />
        {children}
        <BackButton />
        <Divider />
        <Footer />
    </>
  );
}

export default ProjectBasePage;
