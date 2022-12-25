import React from 'react';
import styled from 'styled-components';
import Commentview from './CommentView';
import CommentWrite from './CommentWrite';

function Comment() {
  return (
    <StyleCommentWrap>
      <CommentWrite />
      <Commentview />
    </StyleCommentWrap>
  );
}

export default Comment;

const StyleCommentWrap = styled.div`
  width: calc(100% - 24px);
  margin: 16px auto;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
`;
