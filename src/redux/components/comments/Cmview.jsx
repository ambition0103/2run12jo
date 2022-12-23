import React from 'react';
import CmList from './CmList';

function Cmview({ commentList, setCommentList }) {
  return (
    <div>
      {commentList.map((item) => {
        return <CmList item={item} setCommentList={setCommentList} />;
      })}
    </div>
  );
}

export default Cmview;
