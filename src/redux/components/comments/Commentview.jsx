import React, { useEffect } from 'react';
import CommentList from './CommentList';
import { useDispatch, useSelector } from 'react-redux';
import { __getComment } from '../../modules/commentSlice';

function CommmentView({ commentId }) {
  const dispatch = useDispatch();

  const { isLoading, error, commentLists } = useSelector(
    (state) => state.commentList
  );

  useEffect(() => {
    dispatch(__getComment());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const idValue = commentLists.filter((item) => commentId === item.postId);

  return (
    <div>
      {idValue.map((item) => {
        return <CommentList item={item} key={item?.id} />;
      })}
    </div>
  );
}

export default CommmentView;
