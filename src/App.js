import Input from "./components/Input";
import Todo from "./components/Todo";
import "./Styles.scss";

function App() {
  return (
    <div>
      <div className="container">
        <h1>My Todo List</h1>
        <Input placeholder="Add todo"></Input>
        <Todo></Todo>
      </div>
    </div>
  );
}

export default App;
