import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

// 관리해야 할 state
//. todos = [{id, title, content, 등등},{}] 에 관한 state
// 위에 todos만 관리해줘도 안에 있는 데이터 접근이 다 가능함.
// 위 todos를 기반으로 reducer 다 만들면 됨.

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
      const data = await axios.get("http://localhost:3001/todos");
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
      await axios.post("http://localhost:3001/todos", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __modifySchedule = createAsyncThunk(
  "modifyschedule",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`http://localhost:3001/commentLists/${payload.id}`, {
        schedule: payload.schedule,
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
      await axios.delete(`http://localhost:3001/todos/${payload}`);
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
    //modifyschedule
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
