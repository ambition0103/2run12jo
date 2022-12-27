import { configureStore } from "@reduxjs/toolkit";
import commentList from "../modules/commentSlice";
import allTodos from "../modules/todosSlice";

const store = configureStore({
  reducer: { commentList: commentList, allTodos: allTodos },
});

export default store;
