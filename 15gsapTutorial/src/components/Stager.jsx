import React from "react";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const Stager = () => {

useGSAP(()=>{
    gsap.to('.rectangle',{
        y:250,
        rotation:360,
        borderRadius:50,
        repeat:-1,
        yoyo:true,
        // stagger:1.5,
        stagger:{
            amount:1.5,  //for time in seconds
            grid:[1,2],
            // axis:'x',
            ease:'elastic',
            from:'center'
           
        }
    })
})


  return (
    <div
      className="all-boxes"
      style={{
        display: "flex",
        gap: "1rem",
      }}
    >
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>

    </div>
  );
};

export default Stager;
