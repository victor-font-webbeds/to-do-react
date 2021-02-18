import React, { createContext, useReducer, useEffect } from "react";
import { reducer } from "./ToDoReducer";
import server from "axios";

export const ToDoContext = createContext();

const ToDoContextProvider = ({ children }) => {
  const initialState = {
    toDoList: [],
    status: "LOADING",
  };
  const [toDoState, toDoDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    server
      .get(`https://todo-api-zeta.vercel.app/`)
      .then((res) => {
        toDoDispatch({ type: "ADD_BULK", payload: res.data });
      })
      .catch((e) => {
        toDoDispatch({ type: "DOWNLOAD_ERROR", payload: e });
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
