import React, { useState } from 'react';
import styled from 'styled-components';
import Cmview from './Cmview';
import CmWrite from './CmWrite';
import { v4 as uuidv4 } from 'uuid';

function Comment() {
  const [commentList, setCommentList] = useState(initailState);

  return (
    <StyleCommentWrap>
      <CmWrite setCommentList={setCommentList} commentList={commentList} />
      <Cmview commentList={commentList} setCommentList={setCommentList} />
    </StyleCommentWrap>
  );
}

export default Comment;

const initailState = [
  {
    id: uuidv4(),
    comment: '코멘트1',
    userId: 'user1',
    userPw: 'dffddfdf',
    date: '22.12.25',
  },
  {
    id: uuidv4(),
    comment: '코멘트2코멘트2코멘트2코멘트2코멘트2코멘트2',
    userId: 'user1',
    userPw: 'dffddfdf',
    date: '22.12.25',
  },
  {
    id: uuidv4(),
    comment: '코멘트3',
    userId: 'user1',
    userPw: 'dffddfdf',
    date: '22.12.25',
  },
];

const StyleCommentWrap = styled.div`
  width: calc(100% - 24px);
  margin: 16px auto;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
`;
