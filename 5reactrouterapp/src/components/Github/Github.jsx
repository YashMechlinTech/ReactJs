import React, { useEffect, useState } from "react";
import {useLoaderData } from "react-router-dom";
export default function Github() {
//   const [data, setdata] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/yashyc7")
//       .then((response) => response.json())
//       .then((data) => (console.log(data), setdata(data)));
//   }, []);

//following method is the method 2  for fetching data in advance in react using loader 
const data= useLoaderData()

  return (
    <div
      style={{
        backgroundColor: "grey",
      }}
      className="text-center "
    >
      <h1 className="p-4 font-bold ">Github followers : {data.followers}</h1>
      <img
        style={{
          borderRadius: 50,
          width: 300,
          justifyContent: "center",
          padding:12,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        src={data.avatar_url}
        alt="getting picture"
      />{" "}
    </div>
  );
}



export const githubInfoLoader=async()=>{
    const response = await fetch('https://api.github.com/users/yashyc7')
  if(!response.ok)
  {
    throw new Error("Network response was not ok . ")
  }
    return response.json()
}