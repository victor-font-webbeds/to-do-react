import React, { createContext, useReducer, useEffect } from "react";
import { reducer } from "./ToDoReducer";
import server from "axios";

export const ToDoContext = createContext();

const ToDoContextProvider = ({ children }) => {
  const initialState = {
    toDoList: [],
  };
  const [toDoState, toDoDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    server
      .get(`https://todo-api-zeta.vercel.app/`)
      .then((res) => {
        toDoDispatch({ type: "ADD_BULK", payload: res.data });
        console.log(toDoState);
      })
      .catch((e) => {
        console.log("What an error `" + e + "`");
      });
  }, []);

  return (
    <ToDoContext.Provider
      value={{
        toDoState,
        toDoDispatch,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoContextProvider;
