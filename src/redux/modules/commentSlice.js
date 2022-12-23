import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

//initialState
const initialState = [
  {
    id: uuidv4(),
    comment: '코멘트1',
    userId: 'user1',
    userPw: 'dffddfdf',
    date: '22.12.25',
  },
  {
    id: uuidv4(),
    comment: '코멘트2코멘트2코멘트2코멘트2코멘트2코멘트2',
    userId: 'user1',
    userPw: 'dffddfdf',
    date: '22.12.25',
  },
  {
    id: uuidv4(),
    comment: '코멘트3',
    userId: 'user1',
    userPw: '1',
    date: '22.12.25',
  },
];

const commentSlice = createSlice({
  name: 'commentList',
  initialState,
  reducers: {
    addComment: (state, action) => {
      return [...state, action.payload];
    },
    deleteComment: (state, action) => {
      return state.filter((c) => c.id !== action.payload);
    },
    modifyComment: (state, action) => {
      console.log('action', action.payload);

      state.forEach((c) => {
        console.log('state', state);
        if (c.id === action.payload.id) {
          c.comment = action.payload.comment;
          return;
          //   return { ...c, comment: action.payload.comment };
        }
      });
      return state;
    },
  },
});

export const { addComment, deleteComment, modifyComment } = commentSlice.actions;
export default commentSlice.reducer;
