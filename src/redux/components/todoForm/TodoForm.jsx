import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import Button from '../button/Button';
import { useDispatch } from 'react-redux';
import { __postTodos } from '../../modules/todosSlice';

const TodoForm = ({ setModalSwitch, modalSwitch }) => {
  const dispatch = useDispatch();

  // 일정추가 form input
  const [todoValue, setTodoValue] = useState({
    id: uuidv4(),
    schedule: '시작전',
    title: '',
    content: '',
    userId: '',
    userPw: '',
    startDate: new Date().toLocaleDateString(),
    doneDate: '',
  });
  const { title, content, userId, userPw, startDate, doneDate, schedule } =
    todoValue;

  //input value 작성안했을때 경고 메세지
  const [inputTxt, setInputTxt] = useState({
    titleTxt: '',
    contentTxt: '',
    userIdTxt: '',
    userPwTxt: '',
    doneDateTxt: '',
  });

  const { titleTxt, contentTxt, userIdTxt, userPwTxt, doneDateTxt } = inputTxt;

  // 일정 추가하기 이벤트
  const addTodoClick = (event) => {
    // 새로고침 방지
    event.preventDefault();

    // 일정제목,내용, 작성자 빈칸 제거
    const titleTrim = title.trim();
    const contentTrim = content.trim();
    const userIdTrim = userId.trim();

    // 입력값 없을 때 작성X 알림
    if (!title || !content || !userId || !userPw || !doneDate) {
      setInputTxt({
        ...inputTxt,
        titleTxt: '일정 제목 을 작성해주세요',
        contentTxt: '일정 내용 을 작성해주세요',
        doneDateTxt: '마감 일자 를 작성해주세요',
        userIdTxt: '담당자 를 작성해주세요',
        userPwTxt: '비밀번호 를 작성해주세요',
      });
      return;
    }

    // 새로추가 하는 일정
    const newTodo = {
      id: uuidv4(),
      title,
      content,
      userId,
      userPw,
      startDate,
      doneDate,
      schedule,
    };

    // 리덕스 일정추가
    dispatch(__postTodos(newTodo));

    //추가 후 입력된 value 빈값으로 수정
    setTodoValue({
      ...todoValue,
      schedule: [0],
      title: '',
      content: '',
      userId: '',
      userPw: '',
      startDate: '',
      doneDate: '',
    });
    setModalSwitch(!modalSwitch);
  };

  return (
    <PopupWrapper>
      <StyleTodoForm>
        <h3 className="form-title">일정추가</h3>
        <form onSubmit={addTodoClick}>
          <StyleInputWrap>
            <div className="check-box">
              <label htmlFor="schedule-list0">
                <input
                  onChange={(e) => {
                    const { value } = e.target;
                    setTodoValue({
                      ...todoValue,
                      schedule: value,
                    });
                  }}
                  type="radio"
                  id="schedule-list0"
                  name="schedule-list"
                  value={'시작전'}
                  defaultChecked
                />
                시작전
              </label>
              <label htmlFor="schedule-list1">
                <input
                  onChange={(e) => {
                    const { value } = e.target;
                    setTodoValue({
                      ...todoValue,
                      schedule: value,
                    });
                  }}
                  type="radio"
                  id="schedule-list1"
                  name="schedule-list"
                  value={'시작예정'}
                />
                시작예정
              </label>

              <label htmlFor="schedule-list2">
                <input
                  onChange={(e) => {
                    const { value } = e.target;
                    setTodoValue({
                      ...todoValue,
                      schedule: value,
                    });
                  }}
                  type="radio"
                  id="schedule-list2"
                  name="schedule-list"
                  value={'진행중'}
                />
                진행중
              </label>

              <label htmlFor="schedule-list3">
                <input
                  onChange={(e) => {
                    const { value } = e.target;
                    setTodoValue({
                      ...todoValue,
                      schedule: value,
                    });
                  }}
                  type="radio"
                  id="schedule-list3"
                  name="schedule-list"
                  value={'완료'}
                />
                완료
              </label>
            </div>
          </StyleInputWrap>

          <StyleInputWrap>
            <label htmlFor="new-title">일정제목</label>
            <input
              type="text"
              id="new-title"
              name="new-title"
              onChange={(e) => {
                const { value } = e.target;
                setTodoValue({
                  ...todoValue,
                  title: value,
                });
              }}
              value={title}
              autoFocus={true}
              placeholder="일정제목을 적어주세요."
            />
            <StyleInputError>{title ? '' : titleTxt}</StyleInputError>
          </StyleInputWrap>

          <StyleInputWrap>
            <label htmlFor="new-content">일정내용 </label>
            <textarea
              cols="300px"
              rows="100px"
              id="new-content"
              name="new-content"
              onChange={(e) => {
                const { value } = e.target;
                setTodoValue({
                  ...todoValue,
                  content: value,
                });
              }}
              value={content}
              autoFocus={false}
              placeholder="일정내용을 적어주세요."
            />
            <StyleInputError>{content ? '' : contentTxt}</StyleInputError>
          </StyleInputWrap>

          <StyleInputWrap>
            <label htmlFor="done-date">마감일자</label>
            <input
              onChange={(e) => {
                const { value } = e.target;
                console.log(value);
                setTodoValue({
                  ...todoValue,
                  doneDate: value,
                });
              }}
              type="date"
              id="done-date"
              name="done-date"
              min="2022.01.01"
              max="2023.03.15"
              value={doneDate}
            />
            <StyleInputError>{doneDate ? '' : doneDateTxt}</StyleInputError>
          </StyleInputWrap>

          <StyleFlex>
            <StyleInputWrap>
              <label htmlFor="new-userid">담당자</label>
              <input
                type="text"
                id="new-userid"
                name="new-userid"
                onChange={(e) => {
                  const { value } = e.target;
                  setTodoValue({
                    ...todoValue,
                    userId: value,
                  });
                }}
                value={userId}
                autoFocus={false}
                placeholder="작성자를 적어주세요."
              />
              <StyleInputError>{userId ? '' : userIdTxt}</StyleInputError>
            </StyleInputWrap>

            <StyleInputWrap>
              <label htmlFor="new-userpw">비밀번호</label>
              <input
                type="password"
                id="new-userpw"
                name="new-userpw"
                onChange={(e) => {
                  const { value } = e.target;
                  setTodoValue({
                    ...todoValue,
                    userPw: value,
                  });
                }}
                value={userPw}
                autoFocus={false}
                placeholder="암호를 적어주세요."
              />
              <StyleInputError>{userPw ? '' : userPwTxt}</StyleInputError>
            </StyleInputWrap>
          </StyleFlex>

          <StyleButton>
            <Button
              radius="4"
              backgroundColor="#878787"
              sidePadding="28"
              upDownPadding="10"
              ClickHandler={() => {
                setModalSwitch(!modalSwitch);
              }}
            >
              취소
            </Button>
            <Button radius="4">일정 추가</Button>
          </StyleButton>
        </form>
      </StyleTodoForm>
    </PopupWrapper>
  );
};
export default TodoForm;
const StyleFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 3em 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyleTodoForm = styled.div`
  width: 500px;
  padding: 24px;
  background-color: #fff;

  .form-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  }
`;

const StyleInputWrap = styled.div`
  width: 100%;
  margin-bottom: 16px;

  > label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
  }

  > input,
  textarea {
    width: 100%;
    box-sizing: border-box;
  }

  > input {
    height: 30px;

    [type='radio'] {
      cursor: pointer;
    }
  }
  > textarea {
    height: 120px;
    resize: none;
  }
`;
const StyleButton = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const StyleInputError = styled.p`
  color: red;
  font-size: 13px;
  margin-top: 4px;
`;
