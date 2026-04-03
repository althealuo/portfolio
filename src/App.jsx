// src/App.jsx
import { Routes, Route } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ComingSoon from "./components/ComingSoon";
import GyroPage from "./pages/GyroPage"; // if not ready, use ComingSoon for now
import TablePage from "./pages/TablePage";
import ContactPage from "./pages/ContactPage";
import TavernPage from "./pages/TavernPage";
import AvrPage from "./pages/AvrPage";
import ChaosPage from "./pages/ChaosPage";
// Importing styles
import "./styles/main.scss";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      
      <Route path="/avr" element={<AvrPage />} />
      <Route path="/gyro" element={<GyroPage />} />
      <Route path="/table" element={<TablePage />} />
      <Route path="/tavern" element={<TavernPage />} />

      <Route path="/chaos" element={<ChaosPage />} />

    </Routes>
  );
}

export default App;
