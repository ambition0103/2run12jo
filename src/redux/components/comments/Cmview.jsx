import React from 'react';
import CmList from './CmList';

function Cmview({ commentList, setCommentList }) {
  return (
    <div>
      {commentList.map((item) => {
        return (
          <CmList item={item} setCommentList={setCommentList} key={item.id} />
        );
      })}
    </div>
  );
}

export default Cmview;
