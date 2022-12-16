import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Input = ({ todos, setTodos }) => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentsChangeHandler = (event) => {
    setContents(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!title) {
      alert('제목을 입력해주세요');
      return;
    }
    if (!contents) {
      alert('내용을 입력해 주세요');
      return;
    }
    const newTodo = {
      title,
      contents,
      isDone: false,
      id: uuidv4(),
    };
    setTodos((prev) => [...prev, newTodo]);
    setTitle('');
    setContents('');
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <span>제목</span>
        <input type="text" onChange={titleChangeHandler} value={title} />
        <span>내용</span>
        <input type="text" onChange={contentsChangeHandler} value={contents} />
        <button>추가하기</button>
      </form>
    </div>
  );
};

export default Input;
