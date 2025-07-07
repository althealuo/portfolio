import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  BrowserRouter,
  HashRouter,
} from "react-router-dom";

const isProd = import.meta.env.PROD;
const Router = isProd ? HashRouter : BrowserRouter;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename="/portfolio">
      <App />
    </Router>
  </React.StrictMode>
);
