import React from 'react';

function Todo({ item, isActive, setTodos }) {
  const deleteHandler = () => {
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };

  const switchHandler = () => {
    setTodos((prev) =>
      prev.map((t) => {
        console.log('prev', prev);
        console.log('t', t);
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };

  return (
    <div key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.contents}</p>
      <button onClick={deleteHandler}>삭제</button>
      <button onClick={switchHandler}>{isActive ? '완료' : '취소'}</button>
    </div>
  );
}
export default Todo;
