import React, { useEffect } from 'react';
import CommentList from './CommentList';
import { useDispatch, useSelector } from 'react-redux';
import { __getComment } from '../../modules/commentSlice';

function CommmentView() {
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

  return (
    <div>
      {commentLists.map((item) => {
        return <CommentList item={item} key={item?.id} />;
      })}
    </div>
  );
}

export default CommmentView;
