import React from "react";
import styled from "styled-components";

// 투두
const Bbox = styled.div`
  width: 300px;
  border: 1px solid #e6e6e6;
  margin-top: 50px;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 1px;
`;

//일정수정, 삭제 버튼 정렬
const Cbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  gap: 1px;
`;

//일정수정, 삭제버튼 css
const Abut = styled.button`
  border: 0px solid;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  color: white;
  margin-right: 10px;
  :hover {
    background-color: ${(props) => props.bcolor};
  }
  height: 30px;
`;

//날짜
const DDate = styled.h5`
  color: gray;
`;

function Todo({ item, isActive, setTodos }) {
  const handleDeleteButtonClick = () => {
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };

  const handleSwitchButtonClick = (event) => {};

  return (
    <Bbox>
      <h2>{item.title}</h2>
      <h4>{item.contents}</h4>
      <DDate>{item.date}</DDate>
      <Cbox>
        <Abut
          color="#2F80ED"
          bcolor="skyblue"
          onClick={handleSwitchButtonClick}
        >
          일정 수정
        </Abut>
        <Abut color="#4F4F4F" bcolor="gray" onClick={handleDeleteButtonClick}>
          삭 제
        </Abut>
      </Cbox>
    </Bbox>
  );
}

export default Todo;
