import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { EditTaskModel, Todos, TodosModel } from "../../Models/TodoModel";

const initialState: TodosModel = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const todo = {
        id: nanoid(),
        taskName: action.payload,
        isDone: false,
        isTaskDone: false,
      };
      state.todos.push(todo);
    },
    editTask: (state, action: PayloadAction<Todos>) => {
      const {
        payload: { id, taskName, isDone, isTaskDone },
      } = action;

      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, taskName, isDone, isTaskDone } : todo
      );
    },
    isDoneTask: (state, action: PayloadAction<EditTaskModel>) => {
      const {
        payload: { id, isTaskDone },
      } = action;

      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, isTaskDone } : todo
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
  },
});

export const { addTask, deleteTask, editTask, isDoneTask } = todosSlice.actions;

export default todosSlice.reducer;
