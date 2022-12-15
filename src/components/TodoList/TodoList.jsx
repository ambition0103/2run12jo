import React from "react";

const TodoList = ({ isActive, todos, setTodos }) => {
  return (
    <div>
      {/* 삼항연산자 */}
      <h4>{isActive ? "Working" : "Done!"}</h4>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.contents}</p>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
