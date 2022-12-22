import React from 'react';
import Todo from './Todo';

const TodoList = ({ isActive, todos, setTodos }) => {
  return (
    <div>
      {/* 삼항연산자 */}
      <h4>{isActive ? 'Working' : 'Done!'}</h4>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return <Todo item={item} isActive={isActive} setTodos={setTodos} key={item.id}/>;
        })}
    </div>
  );
};

export default TodoList;
