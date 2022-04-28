import { Alert } from "reactstrap";
import React from "react";
import "../Styles.scss";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { completedTodo, deleteTodo } from "../redux/TodoSlice";

function Todo() {
  const Todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleSubmit = (e, todo) => {
    dispatch(deleteTodo(todo.id));
    e.preventDefault();
  };

  const handleClick = (todo) => {
    console.log(todo);
    dispatch(completedTodo(todo));
  };

  return (
    <div className="Todo">
      {Todos.todos.map((todo) => (
        <Alert className="alert" color="info" key={todo.id}>
          <div className={todo.completed?"active":null}>
            <input type="checkbox" onClick={() => handleClick(todo)}></input>
            {todo.title}
          </div>

          <form
            onSubmit={(e) => {
              handleSubmit(e, todo);
            }}
          >
            <Button color="red" text="Delete"></Button>
          </form>
        </Alert>
      ))}
    </div>
  );
}

export default Todo;
