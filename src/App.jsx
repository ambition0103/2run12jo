import React, { useState } from "react";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const initialState = [
    {
      title: "제목1",
      contents: "내용1",
      isDone: false,
      id: uuidv4(),
    },
    {
      title: "제목2",
      contents: "내용2",
      isDone: true,
      id: uuidv4(),
    },
    {
      title: "제목3",
      contents: "내용3",
      isDone: false,
      id: uuidv4(),
    },
  ];

  const [todos, setTodos] = useState(initialState);

  return (
    <div>
      <Header>My Todo List</Header>
      <Input todos={todos} setTodos={setTodos} />
      <TodoList isActive={true} todos={todos} setTodos={setTodos} />
      <TodoList isActive={false} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
