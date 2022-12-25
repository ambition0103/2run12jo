import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';

//initialState
const initialState = {
  commentLists: [],
  isLoading: false,
  error: null,
};

//Thunk 함수
export const __getComment = createAsyncThunk(
  'getComment',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get('http://localhost:3001/commentLists');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  'addComment',
  async (payload, thunkAPI) => {
    try {
      await axios.post('http://localhost:3001/commentLists', payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  'deleteComment',
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/commentLists/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __modifyComment = createAsyncThunk(
  'modifycomment',
  async (payload, thunkAPI) => {
    try {
      await axios
        .patch(`http://localhost:3001/commentLists/${payload.id}`, {
          comment: payload.comment,
        })
        

      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const commentSlice = createSlice({
  name: 'commentList',
  initialState,
  extraReducers: {
    [__getComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.commentLists = action.payload;
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //addComment
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.commentLists = [...state.commentLists, action.payload];
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //deleteCommet
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.commentLists = state.commentLists.filter(
        (comment) => comment.id !== action.payload
      );
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //modifycomment
    [__modifyComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__modifyComment.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.commentLists = current(state).commentLists.map((comment) => {
        if (comment.id === action.payload.id) {
          return { ...comment, comment: action.payload.comment };
        } else {
          return comment;
        }
      });
    },
    [__modifyComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getComment, addComment, commentLists, modifyComment } =
  commentSlice.actions;
export default commentSlice.reducer;
