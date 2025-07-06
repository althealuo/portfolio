// src/App.jsx
import { Routes, Route } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ComingSoon from "./components/ComingSoon";
import GyroPage from "./pages/GyroPage"; // if not ready, use ComingSoon for now
import "./styles/main.scss";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/gyro" element={<GyroPage />} />
      <Route
        path="/coming-soon"
        element={
          <ComingSoon
            projectName="This Project"
            onBack={() => window.history.back()}
          />
        }
      />
    </Routes>
  );
}

export default App;
