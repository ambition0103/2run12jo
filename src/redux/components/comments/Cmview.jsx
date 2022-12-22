import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';

function Cmview({ commentList }) {
  return (
    <div>
      {commentList.map((item) => {
        return (
          <StyleComments key={item.id}>
            <p>
              {item.comment}
              <span className="comment-date">{item.date}</span>
            </p>
            <div className="comment-modify">
              <span className="comment-user">{item.userId}</span>
              <Button backgroundColor="#2F80ED" radius="4">
                수정하기
              </Button>
              <StyleMarginRight />
              <Button backgroundColor="#8d8d8d" radius="4">
                삭제하기
              </Button>
            </div>
          </StyleComments>
        );
      })}
    </div>
  );
}

export default Cmview;

const StyleComments = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  .comment-date {
    color: #535353;
    font-size: 11px;
    margin-left: 16px;
  }

  .comment-modify {
    > span {
      margin-right: 16px;
    }
    .comment-user {
      font-weight: 700;
    }
  }
`;

const StyleMarginRight = styled.span``;
