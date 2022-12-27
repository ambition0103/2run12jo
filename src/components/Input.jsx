import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Input({ setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmitClick = (event) => {
    event.preventDefault();

    const newTodo = {
      title: title,
      contents: contents,
      isDone: 0,
      id: uuidv4(),
    };

    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentsChange = (event) => {
    setContents(event.target.value);
  };

  return (
    <section>
      <form
        style={{
          padding: "20px",
          width: "700px",
          border: "1px solid black",
          borderRadius: "10px",

          margin: "auto",
        }}
        onSubmit={handleSubmitClick}
      >
        작성자 :{" "}
        <input
          style={{
            marginRight: "10px",
          }}
          value={title}
          onChange={handleTitleChange}
        />
        내용 :{" "}
        <input
          style={{
            marginRight: "10px",
          }}
          value={contents}
          onChange={handleContentsChange}
        />
        비밀번호 :{""}
        <input
          style={{
            marginRight: "10px",
          }}
          value={""}
          onChange={handleContentsChange}
        />
        <button
          onClick={handleSubmitClick}
          style={{
            width: "70px",
          }}
        >
          추가
        </button>
      </form>
    </section>
  );
}

export default Input;
