import "./App.css";
import { Header } from "./components";
import { ToDoPanel } from "./to-do-list";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ToDoPanel></ToDoPanel>
    </div>
  );
}

export default App;
