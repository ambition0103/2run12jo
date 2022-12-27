import React from 'react';
import styled from 'styled-components';

function Button({
  children,
  backgroundColor,
  radius,
  ClickHandler,
  sidePadding,
  upDownPadding,
}) {
  return (
    <StyleButton
      backgroundColor={backgroundColor}
      radius={radius}
      onClick={ClickHandler}
      upDownPadding={upDownPadding}
      sidePadding={sidePadding}
    >
      {children}
    </StyleButton>
  );
}

export default Button;

const StyleButton = styled.button`
  padding: ${(props) => props.upDownPadding || '8'}px
    ${(props) => props.sidePadding || '16'}px;
  color: #fff;
  font-weight: 700;
  background: ${(props) => props.backgroundColor || '#3187F1'};
  border: 0;
  cursor: pointer;
  border-radius: ${(props) => props.radius}px;
`;
