import React from 'react';
import { useSelector } from 'react-redux';
import CmList from './CmList';

function Cmview() {
  const commentList = useSelector((state) => state.commentList);

  return (
    <div>
      {commentList.map((item) => {
        return <CmList item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Cmview;
