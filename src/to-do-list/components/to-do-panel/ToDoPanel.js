import React, { useContext, useEffect } from "react";
import { ToDoElement } from "../to-do-element";
import { ToDoHeader } from "../to-do-header";
import "./ToDoPanel.scss";
import { ToDoContext } from "../../context/ToDoContext";
import ToDoPanelLoading from "./ToDoPanelLoading";

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
      <ToDoPanelLoading>
        {toDoState.toDoList.map((e, i) => (
          <ToDoElement
            key={i}
            id={e.id}
            complete={e.complete}
            title={e.name}
          ></ToDoElement>
        ))}
      </ToDoPanelLoading>
    </div>
  );
};

export default ToDoPanel;
