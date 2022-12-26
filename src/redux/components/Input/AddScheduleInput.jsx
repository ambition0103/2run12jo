import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
// import { addTodo } from "../../modules/todosSlice";
import { __getTodos, __postTodos } from "../../modules/todosSlice";

// onChange를 위한 state를 여기서 씀.
// 만약에 todos가 필요하면 useSelecter를 이용해서 가져온다.
// dispatch로 todos의 상태를 최신화 해본다.

const AddScheduleInput = () => {
  const dispatch = useDispatch();

  const [addTitle, setAddTitle] = useState("");
  const [addContent, setAddContent] = useState("");
  const [addUserName, setAddUserName] = useState("");
  const [addTodoPassword, setAddTodoPassword] = useState("");

  const titleOnChangeHadler = (e) => {
    setAddTitle(e.target.value);
  };

  const contentOnChangeHandler = (e) => {
    setAddContent(e.target.value);
  };

  const userNameOnChangeHandler = (e) => {
    setAddUserName(e.target.value);
  };

  const passwordOnChangeHandler = (e) => {
    setAddTodoPassword(e.target.value);
  };

  const newTodoOnSubmitHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      schedule: "",
      userName: addUserName,
      todoPassword: addTodoPassword,
      title: addTitle,
      content: addContent,
      date: "",
    };

    dispatch(__postTodos(newTodo));
    setAddTitle("");
    setAddContent("");
    setAddUserName("");
    setAddTodoPassword("");
  };

  return (
    <StyledInput>
      <StyledInputHeader>
        <span>일정 추가</span>
        <button>x</button>
      </StyledInputHeader>
      <br />
      <form onSubmit={newTodoOnSubmitHandler}>
        <div>
          제목:{" "}
          <input type="text" value={addTitle} onChange={titleOnChangeHadler} />
        </div>
        <div>
          내용:{" "}
          <input
            type="text"
            value={addContent}
            onChange={contentOnChangeHandler}
          />
        </div>
        <div>
          ID:{" "}
          <input
            type="text"
            value={addUserName}
            onChange={userNameOnChangeHandler}
          />
        </div>
        <div>
          PW:{" "}
          <input
            type="password"
            value={addTodoPassword}
            onChange={passwordOnChangeHandler}
          />
        </div>
        <button>추가하기</button>
      </form>
    </StyledInput>
  );
};

export default AddScheduleInput;

const StyledInput = styled.div`
  width: 300px;
  height: 300px;

  border: 1px solid #000000;
`;

const StyledInputHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;
