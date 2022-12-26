import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getTodos, __postTodos } from '../../modules/todosSlice';
import Todo from './Todo';

const TodoList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.allTodos);

  useEffect(() => {
    // post요청이 끝나면 isAdded 값이 변경되고 __getTodos()가 실행된다.
    // 그러면 AddScheduleInput 컴포넌트에서 새로운 todo를 입력 시 todo 화면이 리렌더링 되고 새로운 todo가 바로 보인다.
    dispatch(__getTodos());
  }, [dispatch]);

  console.log(isLoading, error);

  //. todos의 데이터가 없으면 사용자 편의를 위해 아래 메시지를 띄운다.
  if (isLoading === 0) {
    return (
      <div>
        <h3>로딩중 입니다...</h3>
        <p>잠시만 기다려 주세요.</p>
      </div>
    );
  }
  if (todos.length === 0) {
    return (
      <div>
        <h3>TodoList</h3>
        <p>표시할 목록이 없습니다.</p>
      </div>
    );
  }

  return (
    <div>
      <h3>TodoList</h3>
      {todos.map((item) => {
        return <Todo item={item} />;
      })}
    </div>
  );
};

export default TodoList;
