import React, { useContext } from "react";
import "./ToDoElement.scss";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { ToDoContext } from "../../context/ToDoContext";

const ToDoElement = ({ id, title, complete }) => {
  const { toDoState, toDoDispatch } = useContext(ToDoContext);

  return (
    <div className={`toDoElement ${complete ? "done" : null}`}>
      <div className="toDoElement__function">
        <CheckIcon
          onClick={() =>
            toDoDispatch({ type: "UPDATE_STATUS", payload: { id } })
          }
        ></CheckIcon>
        <span>{title}</span>
      </div>
      <div className="toDoElement__remove">
        <ClearIcon
          onClick={() => toDoDispatch({ type: "REMOVE", payload: { id } })}
        ></ClearIcon>
      </div>
    </div>
  );
};

export default ToDoElement;
