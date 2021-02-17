import React from "react";
import "./ToDoElement.scss";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

const ToDoElement = ({ onClick, title, status, changeStatus }) => {
  return (
    <div className={`toDoElement ${status ? "done" : null}`}>
      <div className="toDoElement__function">
        <CheckIcon onClick={changeStatus}></CheckIcon>
        <span>{title}</span>
      </div>
      <div className="toDoElement__remove">
        <ClearIcon onClick={onClick}></ClearIcon>
      </div>
    </div>
  );
};

export default ToDoElement;
