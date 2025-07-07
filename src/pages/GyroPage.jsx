import ComingSoon from "../components/ComingSoon";
import Nav from "../components/Nav";
import ProjectIntro from "../components/ProjectIntro";

function GyroPage() {
  return (
    <>
      <Nav />
      <ProjectIntro
        image="/portfolio/img/gyro/detail1.jpg"
        title="Gyroscope"
        tools="Blender, Substance Painter, Zbrush"
      />
      {/* Gallery goes here next */}
        {/* <ComingSoon
            onBack={() => window.history.back()}
        /> */}
    </>
  );
}

export default GyroPage;
