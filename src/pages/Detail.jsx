import React from 'react';
import Comment from '../redux/components/comments/Comment';
import DetailMain from '../redux/components/DetailPage/DetailMain';

function Detail() {
  return (
    <div>
      <DetailMain />
      <Comment />
    </div>
  );
}

export default Detail;
