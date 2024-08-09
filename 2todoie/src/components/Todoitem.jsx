import React from "react";
const TodoItem = (props) => {
  return (
    <li className="Items">
      {props.completed ? <></> : <input type="checkbox" className="checkbox" />}
      {/* above method is called conditional rendering */}
      <p className="todo-text">{props.item}</p>
      <p>...</p>
    </li>
  );
};

export default TodoItem;
