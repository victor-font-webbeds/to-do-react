import React, { useState, useEffect } from "react";
import { ToDoElement } from "../to-do-element";
import { ToDoHeader } from "../to-do-header";
import "./ToDoPanel.scss";
import server from "axios";

const ToDoPanel = () => {
  const [toDoList, setToDoList] = useState([]);
  useEffect(() => {
    server
      .get(`https://todo-api-zeta.vercel.app/`)
      .then((res) => {
        setToDoList(res.data);
        console.log(toDoList);
      })
      .catch((e) => {
        console.log("What an error `" + e + "`");
      });
  }, []);

  const handleAddToDoElement = (e) => {
    setToDoList([...toDoList, { name: e, complete: false }]);
  };

  const handleDelete = (i) => {
    setToDoList(toDoList.filter((x) => x.id !== i));
  };

  const changeStatus = (i) => {
    const toDoListCopy = [...toDoList];
    let toDoElement = toDoListCopy[toDoListCopy.findIndex((x) => x.id === i)];
    toDoElement.complete = !toDoElement.complete;
    toDoListCopy[i] = toDoElement;
    setToDoList(toDoListCopy);
  };

  return (
    <div className="toDoPanel">
      <ToDoHeader
        totalTasks={toDoList.length}
        doneTasks={toDoList.filter((x) => x.complete == true).length}
        onEnter={handleAddToDoElement}
      ></ToDoHeader>
      {toDoList.map((e, i) => (
        <ToDoElement
          key={i}
          status={e.complete}
          title={e.name}
          onClick={() => handleDelete(e.id)}
          changeStatus={() => changeStatus(e.id)}
        ></ToDoElement>
      ))}
    </div>
  );
};

export default ToDoPanel;
