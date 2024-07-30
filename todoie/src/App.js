import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import TodoItem from "./components/Todoitem";
import Button from "./components/Button";
import "./style.css";
import CounterComponent from "./components/CounterComponent";
const App = () => {
  return (
    <div className="todo-container">
      <Header title="Todoie!" />
      <TodoItem item="Eat" />
      <TodoItem item="Code" />
      {/* //the eat could be changed into another text using the props */}
      <TodoItem item="sleep" />
      <TodoItem
        // completed="true"
        item="Repeat"
      />
      <Button />

      {/* now the checkbox will be missing if completed = true since conditional rendering was applied   */}

      <CounterComponent />
    </div>
  );
};
export default App;
