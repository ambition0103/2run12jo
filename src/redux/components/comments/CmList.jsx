import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';

function CmList({ item, setCommentList }) {
  //코멘트 수정
  const commentModifyButton = () => {
    alert('수정');
  };

  //코멘트 삭제
  const commentDeleteButton = () => {
    const deleteCommnet = window.prompt(
      '삭제를 위해서 비밀번호를 입력 해 주세요.',
      '비밀번호를 입력해주세요.'
    );
    if (deleteCommnet === item.userPw) {
      window.confirm('정말 삭제하겠습니까?');
      setCommentList((prev) => prev.filter((c) => c.id !== item.id));
    } else {
      window.confirm('비밀번호가 틀립니다. 다시 입력 해 주세요.');
    }
  };

  return (
    <StyleComments key={item.id}>
      <p>
        {item.comment}
        <span className="comment-date">{item.date}</span>
      </p>
      <div className="comment-modify">
        <span className="comment-user">{item.userId}</span>
        <span className="comment-user">{item.userPw}</span>
        <Button
          backgroundColor="#2F80ED"
          radius="100"
          ClickHandler={commentModifyButton}
        >
          수정하기
        </Button>
        <StyleMarginRight />
        <Button
          backgroundColor="#8d8d8d"
          radius="100"
          ClickHandler={commentDeleteButton}
        >
          삭제하기
        </Button>
      </div>
    </StyleComments>
  );
}

export default CmList;

const StyleComments = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;

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
