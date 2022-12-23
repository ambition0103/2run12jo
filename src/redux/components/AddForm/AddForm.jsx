import { React, useState } from "react";
import { v4 as uuid } from "uuid";

const AddForm = ({ setTodos }) => {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [userIdValue, setUserIdValue] = useState("");
  const [userPw, setUserPw] = useState("");

  // 일정제목 입력
  const titleHandler = (e) => {
    setTitleValue(e.target.value);
  };

  // 일정내용 입력
  const contentHandler = (e) => {
    setContentValue(e.target.value);
  };

  // 작성자 입력
  const userIdHandler = (e) => {
    setUserIdValue(e.target.value);
  };

  // 암호 입력
  const todoUserPwHandler = (e) => {
    setUserPw(e.target.value);
  };

  // 일정 추가하기 이벤트
  const addTodoClick = (event) => {
    // 새로고침 방지
    event.preventDefault();

    // 일정제목,내용, 작성자 빈칸 제거
    const title = titleValue.trim();
    const content = contentValue.trim();
    const userId = userIdValue.trim();

    // 입력값 없을 때 작성X 알림
    if (!title) {
      alert("일정제목을 입력해주세요!");
      setTitleValue("");
      return;
    }
    if (!content) {
      alert("일정내용을 입력해주세요!");
      setContentValue("");
      return;
    }
    if (!userId) {
      alert("담당자를 입력해주세요!");
      setUserIdValue("");
      return;
    }
    if (!userPw) {
      alert("암호를 입력해주세요!");
      setUserPw("");
      return;
    }

    // 일정에 들어갈 key, value
    const newTodo = {
      title: title,
      content: content,
      userId: userId,
      userPw: userPw,
      id: uuid(),
    };

    // 일정 추가 후 인풋창 초기화
    setTodos((prev) => {
      return [...prev, newTodo];
    });
    setTitleValue("");
    setContentValue("");
    setUserIdValue("");
    setUserPw("");
  };

  return (
    <div>
      <h3>일정추가</h3>
      <form onSubmit={addTodoClick}>
        <label htmlFor="new-title">Title </label>
        <input
          type="text"
          id="new-title"
          name="new-title"
          onChange={titleHandler}
          value={titleValue}
          autoFocus={true}
          placeholder="일정제목을 적어주세요."
        />
        <label htmlFor="new-content">Content </label>
        <textarea
          cols="300px"
          rows="100px"
          id="new-content"
          name="new-content"
          onChange={contentHandler}
          value={contentValue}
          autoFocus={false}
          placeholder="일정내용을 적어주세요."
        />
        <label htmlFor="new-userid">Writer </label>
        <input
          type="text"
          id="new-userid"
          name="new-userid"
          onChange={userIdHandler}
          value={userIdValue}
          autoFocus={false}
          placeholder="작성자를 적어주세요."
        />
        <label htmlFor="new-userpw">Password </label>
        <input
          type="password"
          id="new-userpw"
          name="new-userpw"
          onChange={todoUserPwHandler}
          value={userPw}
          autoFocus={false}
          placeholder="암호를 적어주세요."
        />
        <button>일정추가</button>
      </form>
    </div>
  );
};

export default AddForm;
