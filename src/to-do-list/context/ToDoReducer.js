export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BULK":
      return {
        ...state,
        toDoList: [...state.toDoList, ...action.payload],
      };

    case "ADD_NEW":
      return {
        ...state,
        toDoList: [
          ...state.toDoList,
          {
            id: Math.random().toString(36),
            name: action.payload,
            complete: false,
          },
        ],
      };

    case "REMOVE":
      return {
        ...state,
        toDoList: state.toDoList.filter((x) => x.id !== action.payload.id),
      };

    case "UPDATE_STATUS":
      return {
        ...state,
        toDoList: state.toDoList.map((x) => {
          if (x.id === action.payload.id) {
            return { ...x, complete: !x.complete };
          }
          return x;
        }),
      };

    default:
      return state;
  }
};
