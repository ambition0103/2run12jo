import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <StyleHeader>
      <h1>
        <Link to="/">
          <span className="icon">📚</span> <span>P</span>roject <span>A</span>pp
        </Link>
      </h1>
      <p>
        <span>안녕</span>하세요.
        <span>반갑</span>습니다.
      </p>
    </StyleHeader>
  );
}

export default Header;

const StyleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2em 1.6em;

  > h1 {
    font-size: 36px;
    font-weight: 900;
    .icon {
      font-size: 24px;
      vertical-align: middle;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }
  > p {
    font-size: 16px;
  }
  span {
    color: #2f80ed;
    font-weight: 800;
  }
`;
