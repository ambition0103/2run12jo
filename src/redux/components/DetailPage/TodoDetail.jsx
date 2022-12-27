import React from 'react';
import styled from 'styled-components';

function TodoDetail({ item }) {
  return (
    <Style>
      <StyleInput placeholder={item.title} />
      <p>{item.content}</p>
    </Style>
  );
}

export default TodoDetail;

const Style = styled.div``;
const StyleInput = styled.input`
  border: none;
`;
