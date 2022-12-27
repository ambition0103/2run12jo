import { configureStore } from "@reduxjs/toolkit";
import allTodos from "../modules/todosSlice";
import commentList from "../modules/commentSlice";

const store = configureStore({
  reducer: { commentList, allTodos },
});

export default store;
