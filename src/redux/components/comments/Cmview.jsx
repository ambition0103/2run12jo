import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CmList from './CmList';

function Cmview({ commentLists, setCommentLists }) {
  const commentList = useSelector((state) => state.commentList);

  return (
    <div>
      {commentLists.map((item) => {
        return (
          <CmList item={item} key={item.id} setCommentLists={setCommentLists} />
        );
      })}
    </div>
  );
}

export default Cmview;
