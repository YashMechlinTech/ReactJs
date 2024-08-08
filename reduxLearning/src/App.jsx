
import "./App.css";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, multiply } from "./redux/counter/counter";
function App() {
  const count = useSelector((state) => state.counter.value); //bring the counter from the redux store
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        currently count is {count}
        <button onClick={()=>{dispatch(decrement())}}>-</button>

        <button onClick={()=>{dispatch(multiply())}}>X</button>
      </div>
    </>
  );
}

export default App;
