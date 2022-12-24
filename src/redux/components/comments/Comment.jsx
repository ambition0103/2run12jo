import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cmview from './Cmview';
import CmWrite from './CmWrite';
import axios from 'axios';

function Comment() {
  const [commentLists, setCommentLists] = useState([]);
  let today = new Date();
  const [commentList, setCommentList] = useState({
    // id: ,
    comment: '',
    userId: '',
    userPw: '',
    date: today.toLocaleDateString(),
  });
  const fetchComment = async () => {
    const { data } = await axios.get('http://localhost:3001/commentLists');
    setCommentLists(data);
  };
  useEffect(() => {
    fetchComment();
  }, []);

  return (
    <StyleCommentWrap>
      <CmWrite
        commentLists={commentLists}
        setCommentLists={setCommentLists}
        commentList={commentList}
        setCommentList={setCommentList}
      />
      <Cmview
        commentLists={commentLists}
        setCommentLists={setCommentLists}
        commentList={commentList}
        setCommentList={setCommentList}
      />
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
