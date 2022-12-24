import React from 'react';
import styled from 'styled-components';

function Button({ children, backgroundColor, radius, ClickHandler }) {





  return (
    <StyleButton
      backgroundColor={backgroundColor}
      radius={radius}
      onClick={ClickHandler}
    >
      {children}
    </StyleButton>




  );
}

export default Button;

const StyleButton = styled.button`
  padding: 8px 16px;
  color: #fff;
  font-weight: 700;
  background: ${(props) => props.backgroundColor};
  border: 0;
  cursor: pointer;
  border-radius: ${(props) => props.radius}px;
`;
