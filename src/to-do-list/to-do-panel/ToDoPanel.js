import React, { useState } from "react";
import { ToDoElement } from "../to-do-element";
import { ToDoHeader } from "../to-do-header";
import "./ToDoPanel.scss";

const ToDoPanel = () => {
  const [toDoList, setToDoList] = useState([
    { title: "Use Redus", isDone: true },
    { title: "Use Typescript", isDone: false },
    { title: "Use Reducer", isDone: true },
  ]);

  const handleAddToDoElement = (e) => {
    setToDoList([...toDoList, { title: e, isDone: false }]);
  };

  const handleDelete = (i) => {
    var toDoListCopy = [...toDoList];
    toDoListCopy.splice(i, 1);
    setToDoList(toDoListCopy);
  };

  const changeStatus = (i) => {
    const toDoListCopy = [...toDoList];
    let toDoElement = toDoListCopy[i];
    toDoElement.isDone = !toDoElement.isDone;
    toDoListCopy[i] = toDoElement;
    setToDoList(toDoListCopy);
  };

  return (
    <div className="toDoPanel">
      <ToDoHeader
        totalTasks={toDoList.length}
        doneTasks={toDoList.filter((x) => x.isDone == true).length}
        onEnter={handleAddToDoElement}
      ></ToDoHeader>
      {toDoList.map((e, i) => (
        <ToDoElement
          key={i}
          status={e.isDone}
          title={e.title}
          onClick={() => handleDelete(i)}
          changeStatus={() => changeStatus(i)}
        ></ToDoElement>
      ))}
    </div>
  );
};

export default ToDoPanel;
