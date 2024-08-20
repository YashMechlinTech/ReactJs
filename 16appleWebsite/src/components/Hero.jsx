import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideosrc] = useState(window.innerWidth<760?smallHeroVideo:heroVideo);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });
    gsap.to('#cta',{
        y:-50,
        opacity:1,
        delay:2,
    })
  }, []);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideosrc(smallHeroVideo);
    } else {
      setVideosrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  });

  return (
    <section className="w-full bg-black nav-height relative">
      <div className="w-full h-5/6 flex-center flex-col "><br /><br />
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-5/12 h-full">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            src={videoSrc}
         
          ></video>
        </div>
      </div>

      <div id="cta" 
      className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From ₹129800.00*</p>

      </div>
    </section>
  );
};

export default Hero;
