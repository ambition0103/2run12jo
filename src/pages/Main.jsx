import React, { useEffect, useState } from 'react';
import Button from '../redux/components/button/Button';
import TodoList from '../redux/components/TodoList/TodoList';
import TodoForm from '../redux/components/todoForm/TodoForm';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Main() {
  const [modalSwitch, setModalSwitch] = useState(false);

  const openModalAddScheduleButton = () => {
    setModalSwitch(!modalSwitch);
  };

  return (
    <StyleContentsWrapper>
      <StyleSubTitle>
        <h3>자유롭게 팀프로젝트를 만들어보세요.</h3>
        <p>여러상태로 프로젝트를 관리 할수 있습니다.</p>
      </StyleSubTitle>

      <StyleMainWrap>
        <StyleTodoWrap className="todolist-wrapper">
          <TodoList title="시작전" className="before" />
          <TodoList title="시작예정" className="planning" />
          <TodoList title="진행중" className="ongoing" />
          <TodoList title="완료" className="completion" />
        </StyleTodoWrap>
        <div className="button-wrapper">
          <Button ClickHandler={openModalAddScheduleButton} radius="4">
            + 일정추가
          </Button>
        </div>
      </StyleMainWrap>

      {modalSwitch && (
        <TodoForm setModalSwitch={setModalSwitch} modalSwitch={modalSwitch} />
      )}
    </StyleContentsWrapper>
  );
}

export default Main;

const StyleContentsWrapper = styled.div`
  padding: 0 2em;
`;

const StyleSubTitle = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 2em 0em;
  margin-bottom: 1em;

  > h3 {
    font-size: 24px;
    font-weight: 600;
  }
  > p {
    margin-top: 1em;
  }
`;

const StyleMainWrap = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 1600px;
  margin: 0 auto;

  @media (max-width: 1600px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
  }

  .button-wrapper {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyleTodoWrap = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 2em;
  width: 1400px;

  @media (max-width: 1600px) {
    width: 100%;
    order: 2;
  }

  @media (max-width: 1100px) {
    width: 100%;
    padding: 2em;
    box-sizing: border-box;
    overflow-x: scroll;
    border: 1px solid #e6e6e6;
  }
`;
