import React, { useState } from "react";

const Input = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentsChangeHandler = (event) => {
    setContents(event.target.value);
  };

  const onSubmitHandler = () => {
    // return;
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <span>제목</span>
        <input type="text" onChange={titleChangeHandler} />
        <span>내용</span>
        <input type="text" onChange={contentsChangeHandler} />
        <button>추가하기</button>
      </form>
    </div>
  );
};

export default Input;
