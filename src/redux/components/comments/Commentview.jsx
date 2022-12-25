import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CommentList from './CommentList';

function Cmview({ commentLists, setCommentLists }) {
  const commentList = useSelector((state) => state.commentList);

  return (
    <div>
      {commentLists.map((item) => {
        return (
          <CommentList
            item={item}
            key={item.id}
            setCommentLists={setCommentLists}
          />
        );
      })}
    </div>
  );
}

export default Cmview;
