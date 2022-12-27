import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getTodos, __postTodos } from '../../modules/todosSlice';
import Todo from './Todo';
import styled from 'styled-components';

const TodoList = ({ title, className }) => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.allTodos);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h3>로딩중 입니다...</h3>
        <p>잠시만 기다려 주세요.</p>
      </div>
    );
  }
  if (!todos) {
    return (
      <div>
        <h3>TodoList</h3>
        <p>표시할 목록이 없습니다.</p>
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <StyleFlex>
      <StyleTitle className="title">
        <StyleTitleColor className={className}>
          <StylePoint className="point" />
          {title}
        </StyleTitleColor>
      </StyleTitle>

      {todos.map((item) => {
        return <Todo item={item} title={title} key={item.id} />;
      })}
    </StyleFlex>
  );
};

export default TodoList;

const StyleFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 800px;

  @media (max-width: 800px) {
    flex: none;
    max-width: 240px;
  }
`;

const StyleTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  .before {
    background-color: #ffdfdf;

    .point {
      background-color: #ff9999;
    }
  }
  .planning {
    background-color: #ffdeae;

    .point {
      background-color: orange;
    }
  }
  .ongoing {
    background-color: #a3f8bb;

    .point {
      background-color: #27ae60;
    }
  }
  .completion {
    background-color: #d4d4d4;

    .point {
      background-color: #828282;
    }
  }
`;

const StyleTitleColor = styled.span`
  padding: 0.4em 1em;
  border-radius: 100px;
`;

const StylePoint = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin-right: 4px;
`;
