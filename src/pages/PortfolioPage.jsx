// src/pages/PortfolioPage.jsx
import SideNav from "../components/SideNav";
import Landing from "../sections/Landing";
import Featured from "../sections/Featured";
import Projects from "../sections/Projects";
import MLProjects from "../sections/MLProjects";
import Divider from "../components/Divider";

import Nav from "../components/Nav";
import Footer from "../sections/Footer";

function PortfolioPage() {
  return (
    <>
        <Nav />
        <SideNav />
        <Landing />
        <Featured />
        <Divider />

        <MLProjects />
        <Divider />
        
        <Projects />
        <Divider />

        <Footer />
    </>
  );
}

export default PortfolioPage;
