import { useState } from "react";
import Nav from "./components/Nav";
import "./styles/main.scss";

function App() {
  const [section, setSection] = useState("portfolio");

  return (
    <>
      <Nav active={section} onNavigate={setSection} />
      <h1>{section}</h1>
    </>
  );
}

export default App;

