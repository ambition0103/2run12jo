import React from "react";
import Input from "./components/Input";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import styled from "styled-components";
import But from "./components/But";

function App({}) {
  const [todos, setTodos] = useState(initialState);

  //밑줄 코드
  const Hi = styled.hr`
    width: 98%;
    border: 0.6px solid #efefef;
    margin-bottom: 50px;
  `;

  //글자정렬
  const FForm = styled.form`
    display: flex;
  `;
  //h1
  const HH1 = styled.h1`
    width: 500px;
    margin-left: 30px;
  `;
  //h3
  const HH3 = styled.h3`
    margin-left: 30px;
  `;
  //h5
  const HH5 = styled.h5`
    margin-left: 30px;
    color: gray;
  `;
  //카테고리 및 추가버튼 정렬
  const MMain = styled.main`
    display: flex;
    justify-content: space-around;
  `;

  //일정추가 버튼 !
  const Plus = styled.button`
    width: 70px;
    height: 30px;
    background-color: #2f80ed;
    border: 0px solid;
    border-radius: 5px;
    color: white;
    :hover {
      background-color: skyblue;
    }
  `;

  return (
    <div>
      <FForm>
        <HH1>ProjectApp</HH1>
        <But />
      </FForm>
      <HH3>자유롭게 프로젝트를 만들어보세요</HH3>
      <HH5>여러 상태로 변경할수 있습니다.</HH5>

      <Hi />

      <MMain>
        <TodoList todos={todos} isActive={0} setTodos={setTodos} />
        <TodoList todos={todos} isActive={1} setTodos={setTodos} />
        <TodoList todos={todos} isActive={2} setTodos={setTodos} />
        <TodoList todos={todos} isActive={3} setTodos={setTodos} />
        <Plus>+ 일정추가</Plus>
      </MMain>
    </div>
  );
}

export default App;

const initialState = [
  {
    title: "작성자",
    contents: "내용",
    date: "22.12.25",
    isDone: 0,
    id: uuidv4(),
  },
  {
    title: "작성자",
    contents: "내용",
    date: "22.12.25",
    isDone: 1,
    id: uuidv4(),
  },
  {
    title: "작성자",
    contents: "내용",
    date: "22.12.25",
    isDone: 2,
    id: uuidv4(),
  },
  {
    title: "작성자",
    contents: "내용",
    date: "22.12.25",
    isDone: 3,
    id: uuidv4(),
  },
  {
    title: "작성자",
    contents: "내용",
    date: "22.12.25",
    isDone: 0,
    id: uuidv4(),
  },
];
