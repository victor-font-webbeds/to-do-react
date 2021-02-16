import React, { useState } from "react";
import "./ToDoHeader.scss";

const ToDoHeader = ({ totalTasks, doneTasks, onEnter }) => {
  const [input, setInput] = useState("");

  const handleAddElement = (e) => {
    e.preventDefault();

    onEnter(input);
    setInput("");
  };

  const handleOnEnter = (e) => {
    if (e.key === "Enter") {
      handleAddElement(e);
    }
  };

  return (
    <div className="toDoHeader">
      <div className="toDoHeader__info">
        <h3>Total tasks {totalTasks}</h3>
        <h3>Done Tasks {doneTasks}</h3>
      </div>
      <div className="toDoHeader__add">
        <input
          onKeyDown={handleOnEnter}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new ToDo Element"
          type="text"
        ></input>
        <button onClick={handleAddElement}>Add Element</button>
      </div>
    </div>
  );
};

export default ToDoHeader;
