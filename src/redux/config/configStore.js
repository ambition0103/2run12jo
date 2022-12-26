import { configureStore } from "@reduxjs/toolkit";
import allTodos from "../modules/todosSlice";

const store = configureStore({
  reducer: { allTodos },
});

export default store;
