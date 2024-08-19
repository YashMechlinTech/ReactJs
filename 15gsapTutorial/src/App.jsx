import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  useGSAP(() => {
    gsap.to("#viteLogo", {
      x: -50,
      repeat: -1,
      yoyo: true,
      duration: 5,
      ease: "elastic",
      rotate: 360,
    });

    gsap.to("#reactLogo", {
      repeat: -1,
      // yoyo:true,
      rotation: 360,
      ease: "linear",
      duration: 8,
    });

    gsap.fromTo(
      ".rectangle",
      {
        x: 0,
        rotate: 0,
        border: 0,
      },
      {
        x: 250,
        repeat: -1,
        borderRadius: 100,
        duration: 4,
        color: "white",
        yoyo: true,
        rotate: 360,
      }
    );
  }, []);

  return (
    <>
      <div>
        <ul style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/timeline">Timeline</Link>
          <Link to="/gsapstager">GSAPstager</Link>
          <Link to="/gsapScrollTrigger">GsapScrollTrigger</Link>
        </ul>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img id="viteLogo" src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            id="reactLogo"
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="rectangle"></div>
    </>
  );
}

export default App;
