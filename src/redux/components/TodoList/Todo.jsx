import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../button/Button';
import { __deleteTodos } from '../../modules/todosSlice';
import { useDispatch } from 'react-redux';

const Todo = ({ item }) => {
  const dispatch = useDispatch();

  //링크이동
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/${item.id}`);
  };

  //일정삭제
  const todoListDeleteButton = () => {
    const deleteCommnet = window.prompt(
      '삭제를 위해서 비밀번호를 입력 해 주세요.',
      '비밀번호를 입력해주세요.'
    );

    //비밀번호가 같을 때
    if (deleteCommnet === item.userPw) {
      window.confirm('정말 삭제하겠습니까?');
      dispatch(__deleteTodos(item.id));
    } else {
      window.confirm('비밀번호가 틀립니다. 다시 입력 해 주세요.');
    }
  };

  return (
    <StyledTodoBox key={item.id}>
      <div onClick={goToDetail}>
        <h4>제목: {item.title}</h4>
        <p>id: {item.id}</p>
        <p>내용: {item.content}</p>
        <p>schedule: {item.schedule}</p>
        <p>이름: {item.userId}</p>
        <p>비밀번호: {item.userPw}</p>
        <p>마감일: {item.doneDate}</p>
        <p>시작일: {item.startDate}</p>
      </div>
      <Button ClickHandler={todoListDeleteButton}>일정삭제</Button>
    </StyledTodoBox>
  );
};

export default Todo;

const StyledTodoBox = styled.div`
  border: 1px solid black;
`;
