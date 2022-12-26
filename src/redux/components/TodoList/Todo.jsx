import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Detail from "../../../pages/Detail";

const Todo = ({ item: t }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/${t.id}`);
  };

  return (
    <div key={t.id} onClick={goToDetail}>
      <h4>제목: {t.title}</h4>
      <p>내용: {t.content}</p>
    </div>
  );
};

export default Todo;

const StyledTodoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
