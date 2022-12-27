import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "../../modules/todosSlice";
import Todo from "./Todo";

const TodoList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.allTodos);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  //. todos의 데이터가 없으면 사용자 편의를 위해 아래 메시지를 띄운다.
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
