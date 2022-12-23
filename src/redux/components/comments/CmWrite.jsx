import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addComment } from '../../modules/commentSlice';

function CmWrite() {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [inputTxt, setInpuTxt] = useState({
    commentTxt: '',
    userIdTxt: '',
    userPwTxt: '',
  });

  const { commentTxt, userIdTxt, userPwTxt } = inputTxt;

  //댓글 입력창
  const commentOnChange = (e) => {
    setComment(e.target.value);
  };
  //유저이름 입력창
  const userIdOnChange = (e) => {
    setUserId(e.target.value);
  };
  //비밀번호 입력창
  const userPwOnChange = (e) => {
    setUserPw(e.target.value);
  };

  //댓글 추가버튼
  const commentOnSubmit = (e) => {
    e.preventDefault();
    //현재시간 객체로 받음.
    let today = new Date();

    //form 유효검사
    if (!comment || !userId || !userPw) {
      setInpuTxt({
        ...inputTxt,
        commentTxt: '댓글 을 입력해주세요.',
        userIdTxt: '이름 을 입력해주세요.',
        userPwTxt: '비밀번호 를 입력해주세요.',
      });
      return;
    }

    const newComment = {
      id: uuidv4(),
      comment,
      userId,
      userPw,
      date: today.toLocaleDateString(),
    };
    dispatch(addComment(newComment));

    setComment('');
    setUserId('');
    setUserPw('');
  };

  return (
    <>
      <StyleForm onSubmit={commentOnSubmit}>
        <div className="comment-wrap">
          <input
            maxLength="40"
            type="text"
            value={comment}
            onChange={commentOnChange}
            placeholder="댓글을 입력해주세요."
          />
          {/* 코멘트 입력했을때  */}
          <StyleInputErro>{comment ? '' : commentTxt}</StyleInputErro>
        </div>

        <StyleFlex>
          <div className="user-infor">
            <div>
              <input
                maxLength="5"
                type="text"
                value={userId}
                onChange={userIdOnChange}
                placeholder="이름을 입력해주세요"
              />
              <StyleInputErro>{userId ? '' : userIdTxt}</StyleInputErro>
            </div>

            <div>
              <input
                maxLength="10"
                type="text"
                value={userPw}
                onChange={userPwOnChange}
                placeholder="비밀번호를 입력 해 주세요"
              />
              <StyleInputErro>{userPw ? '' : userPwTxt}</StyleInputErro>
            </div>
          </div>
        </StyleFlex>
        <Button backgroundColor="#0a0a0a" radius="100">
          댓글추가
        </Button>
      </StyleForm>
    </>
  );
}

export default CmWrite;

const StyleForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 24px;

  .comment-wrap {
    flex: 1;

    > input {
      width: 100%;
      height: 34px;
      border: none;
      padding: 0 8px;
      border-bottom: 1px solid #e6e6e6;

      :focus {
        outline: none;
      }
    }
  }
`;

const StyleFlex = styled.div`
  display: flex;
  flex: 1.5;
  justify-content: flex-end;

  .user-infor {
    display: flex;

    > div {
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
  }
`;

const StyleInputErro = styled.p`
  color: red;
  font-size: 13px;
  margin-top: 4px;
`;
