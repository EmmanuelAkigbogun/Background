import React from "react";
import ReactDOM from "react-dom/client";
import "./variables.css";
import InteractiveBackground from "./components/InteractiveBackground";
import ThemeToggle from "./components/ThemeToggle";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div className="body">
      <InteractiveBackground
        defaultFrequency={8}
        defaultParticles={150}
        planetCount={2}
        ringedPlanetCount={8}
      />
    </div>
    <ThemeToggle />
  </>,
);
