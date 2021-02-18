import "./App.css";
import { Header } from "./components";
import { ToDoPanel } from "./to-do-list";
import ToDoContextProvider from "./to-do-list/context/ToDoContext";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ToDoContextProvider>
        <ToDoPanel />
      </ToDoContextProvider>
    </div>
  );
}

export default App;
