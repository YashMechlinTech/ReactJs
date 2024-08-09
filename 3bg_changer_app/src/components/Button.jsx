import React from "react";
import { useState } from "react";



const Button =({title,backcolor})=>{
    const [color,setcolor]=useState('white')
    const body=document.querySelector('body')
    body.style.backgroundColor=color
  return (
    <button className="button" style={{ backgroundColor: backcolor}} onClick={()=>setcolor(backcolor)} >
    {title}
    
    </button>
  );
}


export default Button;
