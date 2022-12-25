import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "../../modules/todosSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.allTodos);

  console.log("isLoading", isLoading);
  console.log("error", error);
  console.log("todos", todos);
  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  // const todos = useSelector((state) => state.todosSlice.todos);
  return (
    <div>
      <h3>TodoList</h3>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <h4>제목: {item.title}</h4>
            <p>내용: {item.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
