import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Timeline = () => {
  const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

  useGSAP(() => {
    timeline.to(".rectangle", {
      x: 250,
      rotate: 360,
      ease: "bounce.in",
      border: 100,
      duration: 2,
    });

    timeline.to(".rectangle", {
      y: 250,
      rotate: 360,
      ease: "bounce.in",
      border: 100,
      duration: 2,
      scale: 2,
    });
  }, []);

  const handlePausePlay = () => {
    if (timeline.paused()) {
      timeline.play();
    } else {
      timeline.pause();
    }
  };

  return (
    <>
      <div className="rectangle"></div>
      <button
        onClick={() => {
          handlePausePlay();
        }}
      >
        pause/play Animation
      </button>
    </>
  );
};

export default Timeline;
