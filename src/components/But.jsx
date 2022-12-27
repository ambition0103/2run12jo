import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  /*공통 스타일*/
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 65%;
  margin-top: 30px;

  /*크기*/
  height: 2.25rem;
  width: 100px;
  font-size: 0.6rem;

  /*색상 */
  background: #e6ebeb;
  &:hover {
    background: #a0bdbd;
  }
  &:active {
    background: #a0bdbd;
  }
`;
function Button({ ...rest }) {
  return <StyledButton {...rest}>로그인/회원가입</StyledButton>;
}

export default Button;
