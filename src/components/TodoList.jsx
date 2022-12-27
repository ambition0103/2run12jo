import React from "react";
import styled from "styled-components";
import Todo from "./Todo";

function TodoList({ todos, isActive, setTodos }) {
  //카테고리 css
  const Stbox = styled.button`
    background-color: ${(props) => props.stcolor};
    border-radius: 5px;
    border: 0px;
  `;

  return (
    <div>
      {isActive === 0 ? (
        <Stbox stcolor="#FFDFDF">&#128308; 시작 전</Stbox>
      ) : isActive === 1 ? (
        <Stbox stcolor="#FFDEAE">&#128992; 시작 예정</Stbox>
      ) : isActive === 2 ? (
        <Stbox stcolor="#A3F8BB">&#128994; 진행중</Stbox>
      ) : (
        <Stbox stcolor="#D4D4D4">&#9899; 완료</Stbox>
      )}

      {todos
        .filter((item) => item.isDone === isActive)
        .map((item) => {
          return (
            <Todo
              item={item}
              isActive={isActive}
              setTodos={setTodos}
              key={item.id}
            />
          );
        })}
    </div>
  );
}

export default TodoList;
