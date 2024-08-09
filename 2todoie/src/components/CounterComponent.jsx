import React, { useState } from "react";

function CounterComponent() {
  const [count, setCount] = useState(0);
  const [check, setvalue] = useState("undefined");
  return (
    <div>
      Count Component: {count}
      <br />
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <h2>value is {count % 2 === 0 ? "even" : "odd"}</h2>
    </div>
  );
}

export default CounterComponent;

// const [count,setCount]=useState(3434) first argument is variable and other is the function used to set the value of the variable
