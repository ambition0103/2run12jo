import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../button/Button';

function CmList({ item, setCommentList }) {
  const [commentModify, setCommnetModify] = useState(false);
  const [modifyValue, setModifyValue] = useState('');

  //코멘트 수정
  const commentModifyButton = () => {
    //commentModify false 일때
    if (!commentModify) {
      const ModifyCommnet = window.prompt(
        '수정을 위해서 비밀번호를 입력 해 주세요.',
        '비밀번호를 입력해주세요.'
      );
      if (ModifyCommnet === item.userPw) {
        setCommnetModify(!commentModify);
      } else {
        window.confirm('비밀번호가 틀립니다. 다시 입력 해 주세요.');
      }
    } else {
      //commentModify true 일때 새로운 코멘트 입력 값 변경
      setCommentList((prev) =>
        prev.map((t) => {
          if (t.id === item.id) {
            return { ...t, comment: modifyValue };
          } else {
            return t;
          }
        })
      );
      setCommnetModify(!commentModify);
    }
  };

  //코멘트 삭제
  const commentDeleteButton = () => {
    const deleteCommnet = window.prompt(
      '삭제를 위해서 비밀번호를 입력 해 주세요.',
      '비밀번호를 입력해주세요.'
    );
    //비밀번호가 같을 때
    if (deleteCommnet === item.userPw) {
      window.confirm('정말 삭제하겠습니까?');
      setCommentList((prev) => prev.filter((c) => c.id !== item.id));
    } else {
      window.confirm('비밀번호가 틀립니다. 다시 입력 해 주세요.');
    }
  };

  return (
    <>
      <StyleComments key={item.id}>
        <p>
          {item.comment}
          <span className="comment-date">{item.date}</span>
        </p>
        <div className="comment-modify">
          <span className="comment-user">{item.userId}</span>
          {commentModify && (
            <input
              type="text"
              vale={modifyValue}
              placeholder="변경할 댓글을 입력해 주세요."
              onChange={(e) => {
                setModifyValue(e.target.value);
              }}
            />
          )}
          <Button
            backgroundColor="#2F80ED"
            radius="100"
            ClickHandler={commentModifyButton}
          >
            {commentModify ? '완료하기' : '수정하기'}
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
    </>
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

    > input {
      height: 34px;
      padding: 0 8px;
      margin-right: 8px;
      border: none;
      border-bottom: 1px solid #e6e6e6;

      :focus {
        outline: none;
      }
    }
  }
`;

const StyleMarginRight = styled.span``;
