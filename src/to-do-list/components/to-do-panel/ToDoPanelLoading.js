import React, { useContext } from "react";
import { ToDoContext } from "../../context/ToDoContext";
import { ToDoElement } from "../to-do-element";

const ToDoPanelLoading = ({ children }) => {
  const { toDoState, toDoDispatch } = useContext(ToDoContext);

  switch (toDoState.status) {
    case "LOADING": {
      return (
        <>
          <img
            src={
              "https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
            }
          />
        </>
      );
    }

    case "SUCCESS": {
      return <>{children}</>;
    }

    case "ERROR": {
      return (
        <>
          <ToDoElement
            id={"error_id"}
            title={
              "No tasks were found online. Add some right now or refresh this page!"
            }
            complete={false}
          />
        </>
      );
    }

    default: {
      //unhandled error
      return (
        <>
          <p>Add some toDo tasks</p>
        </>
      );
    }
  }
};

export default ToDoPanelLoading;
