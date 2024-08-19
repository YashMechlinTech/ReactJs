import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "./components/Timeline.jsx";
import Stager from "./components/Stager.jsx";
import ScrollTrig from "./components/ScrollTrigger.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/gsapstager" element={<Stager />} />
        <Route path="/gsapScrollTrigger" element={<ScrollTrig/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
