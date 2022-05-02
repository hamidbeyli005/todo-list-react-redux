import { createSlice } from "@reduxjs/toolkit";

var initialState = {
  todos: [
    { id: 1, title: "Todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: false },
  ],
};

export const TodoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completedTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, completedTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
