import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};
// 123
// 서버와 데이터 통신
// GET
export const __getTodos = createAsyncThunk(
  "getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_TODOS}/todos`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// POST
export const __postTodos = createAsyncThunk(
  "addTodos",
  async (payload, thunkAPI) => {
    try {
      await axios.post(`${process.env.REACT_APP_TODOS}/todos`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __modifySchedule = createAsyncThunk(
  "modifyschedule",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      await axios.patch(`${process.env.REACT_APP_TODOS}/todos/${payload.id}`, {
        schedule: payload.schedule,
      });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __modifyEdittedTodo = createAsyncThunk(
  "modifyEdittedTodo",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`${process.env.REACT_APP_TODOS}/todos/${payload.id}`, {
        userId: payload.userId,
        title: payload.title,
        content: payload.content,
        doneDate: payload.doneDate,
      });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//삭제
export const __deleteTodos = createAsyncThunk(
  "deleteTodos",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${process.env.REACT_APP_TODOS}/todos/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,

  extraReducers: {
    //getToto
    [__getTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    //addTodos
    [__postTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = [...state.todos, action.payload]; // 실제 post 동작을 수행합니다.
    },
    [__postTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    // modifyschedule
    [__modifySchedule.pending]: (state) => {
      state.isLoading = true;
    },
    [__modifySchedule.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = current(state).todos.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, schedule: action.payload.schedule };
        } else {
          return item;
        }
      });
    },
    [__modifySchedule.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //modifyTodo
    [__modifyEdittedTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__modifyEdittedTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = current(state).todos.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.title,
            content: action.payload.content,
            doneDate: action.payload.doneDate,
          };
        } else {
          return item;
        }
      });
    },
    [__modifyEdittedTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //deleteTodos
    [__deleteTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.filter(
        (comment) => comment.id !== action.payload
      );
    },
    [__deleteTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addTodos, deleteTodos } = todosSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todosSlice.reducer;
