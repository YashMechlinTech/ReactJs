import "./App.css";
import Button from "./components/Button";

function App() {
  
  return (
    <div className="button-holder"  >
      <Button title="orange" backcolor="orange"/>
      <Button title="red" backcolor='red'/>
      <Button title="purple" backcolor="purple" />
      <Button title="green" backcolor="green" />
      <Button title="blue" backcolor="blue" />
    </div>
  );
}

export default App;
