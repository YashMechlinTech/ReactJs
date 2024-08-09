import { useState } from "react";
import "./App.css";
import { useContext } from "react";
import Counter from "./components/counter";
import { CounterContext } from "./context/Counter";

function App() {
const counterstate=useContext(CounterContext)

  return (
    <>
      <h1>count is {counterstate.count} and the name is {counterstate.name} </h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
