import { configureStore } from '@reduxjs/toolkit';
import commentList from '../modules/commentSlice';

const store = configureStore({
  reducer: { commentList: commentList, allTodos: allTodos },
});

export default store;
