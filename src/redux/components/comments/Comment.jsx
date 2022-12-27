import React from 'react';
import styled from 'styled-components';
import CommentView from './CommentView';
import CommentWrite from './CommentWrite';
import { useLocation } from 'react-router-dom';

function Comment() {
  const location = useLocation();
  const commentId = location && location.pathname.split('/')[1];

  return (
    <StyleCommentWrap>
      <CommentWrite commentId={commentId} />
      <CommentView commentId={commentId} />
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
