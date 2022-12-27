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
    <div key={item.id}>
      <StyledTodoBox>
        <StyledTodo onClick={goToDetail}>
          <h4 className="title">{item.title}</h4>
          <p className="user-name">{item.userId}</p>
          <p className="date">{item.startDate}</p>
        </StyledTodo>
        <StyledButtonWrap>
          <Button
            radius="100"
            backgroundColor="#484848"
            ClickHandler={todoListDeleteButton}
          >
            일정삭제
          </Button>
        </StyledButtonWrap>
      </StyledTodoBox>
    </div>
  );
};

export default Todo;

const StyledTodoBox = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 1em;
  cursor: pointer;
`;

const StyledTodo = styled.div`
  > .title {
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 1em;
  }
  .user-name {
    padding: 0.5em 0;
  }
  .date {
    font-size: 13px;
  }
`;

const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
