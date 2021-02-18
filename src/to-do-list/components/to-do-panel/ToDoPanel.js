import React, { useContext, useEffect } from "react";
import { ToDoElement } from "../to-do-element";
import { ToDoHeader } from "../to-do-header";
import "./ToDoPanel.scss";
import { ToDoContext } from "../../context/ToDoContext";

const ToDoPanel = () => {
  const { toDoState, toDoDispatch } = useContext(ToDoContext);
  console.log("render");
  return (
    <div className="toDoPanel">
      <ToDoHeader
        totalTasks={toDoState.toDoList.length}
        doneTasks={
          toDoState?.toDoList.filter((x) => x.complete == true).length ?? 0
        }
      ></ToDoHeader>
      {toDoState?.toDoList?.length > 0 ? (
        toDoState.toDoList.map((e, i) => (
          <ToDoElement
            key={i}
            id={e.id}
            complete={e.complete}
            title={e.name}
          ></ToDoElement>
        ))
      ) : (
        <p>do something</p>
      )}
    </div>
  );
};

export default ToDoPanel;
