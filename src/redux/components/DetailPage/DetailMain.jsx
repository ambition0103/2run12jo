import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { __getTodos, __modifyEdittedTodo } from '../../modules/todosSlice';
import DetailScheduleEdit from '../DetailPage/DetailScheduleEdit';
import Comment from '../comments/Comment';
import Button from '../button/Button';

function DetailMain() {
  const dispatch = useDispatch();

  const navigation = useNavigate();
  // useNavigate로 전달한 props(todo의 id)
  const location = useLocation();
  const todoId = location.pathname.split('/')[1];

  // 상세페이지 제목을 받아오려면 todos를 일단 가져오자.
  const { todos } = useSelector((state) => state.allTodos);

  //. todoId와 같은 id를 가진 todo를 filter를 통해 변수에 할당하자.
  const sameIdTodos = todos.filter((item) => item.id === todoId)[0];

  const todosSchedule = sameIdTodos && sameIdTodos.schedule;
  const todosStartDate = sameIdTodos && sameIdTodos.startDate;
  const todosDoneDate = sameIdTodos && sameIdTodos.doneDate;
  const todosTitle = sameIdTodos && sameIdTodos.title;
  const todosContent = sameIdTodos && sameIdTodos.content;
  const todosUserId = sameIdTodos && sameIdTodos.userId;

  // 진행 상태 수정 스위치
  const [buttonSwitch, setButtonSwitch] = useState(false);
  const openScheduleEditButton = () => {
    setButtonSwitch((prev) => !buttonSwitch);
  };

  const [editValue, setEditValue] = useState({
    editContent: todosContent,
    editTitle: todosTitle,
    editDoneDate: todosDoneDate,
    editUserId: todosUserId,
    editSchedule: todosSchedule,
  });

  const { editContent, editTitle, editDoneDate, editUserId, editSchedule } =
    editValue;

  const onSubmitEdittedTodo = (e) => {
    e.preventDefault();

    const passwordForModifying = window.prompt(
      '수정을 위해 비밀 번호를 입력해 주세요.'
    );

    if (passwordForModifying === sameIdTodos.userPw) {
      dispatch(
        __modifyEdittedTodo({
          id: todoId,
          userId: editUserId,
          title: editTitle,
          content: editContent,
          doneDate: editDoneDate,
          schedule: editSchedule,
        })
      );

      setEditValue({
        ...editValue,
        editContent: editContent,
        editTitle: editTitle,
        editDoneDate: editDoneDate,
        editUserId: editUserId,
        editSchedule: editSchedule,
      });

      window.confirm('수정이 완료되었습니다.');
    } else {
      alert('비밀번호가 틀렸습니다.');
      setEditValue({
        ...editValue,
        editContent: todosContent,
        editTitle: todosTitle,
        editDoneDate: todosDoneDate,
        editUserId: todosUserId,
        editSchedule: todosSchedule,
      });
    }
  };

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  return (
    <StyledDetailMain>
      <form onSubmit={onSubmitEdittedTodo}>
        <ButtonWrapper>
          <Button
            backgroundColor="#484848"
            radius="4"
            ClickHandler={() => {
              navigation('/');
            }}
          >
            뒤로가기
          </Button>
          <Button radius="4">수정하기</Button>
        </ButtonWrapper>

        {/* 제목 */}
        <StyleContent className="title">
          <input
            placeholder={todosTitle}
            value={editTitle}
            onChange={(e) => {
              const { value } = e.target;
              setEditValue({
                ...editValue,
                editTitle: value,
              });
            }}
          />
        </StyleContent>

        {/* 담당자 */}
        <StyleContent>
          <ConentTitle>담당자 </ConentTitle>
          <input
            placeholder={todosUserId}
            value={editUserId}
            onChange={(e) => {
              const { value } = e.target;
              setEditValue({
                ...editValue,
                editUserId: value,
              });
            }}
          />
        </StyleContent>

        {/* 진행상태 */}
        <StyleContent>
          <ConentTitle>진행 상태 </ConentTitle>

          <StyleSchedule>
            <p className="schedule-title" onClick={openScheduleEditButton}>
              <span>{editSchedule ? editSchedule : todosSchedule}</span>
            </p>

            {buttonSwitch && (
              <StyleRadio className="check-box">
                <input
                  onChange={(e) => {
                    const { value } = e.target;
                    setEditValue({
                      ...editValue,
                      editSchedule: value,
                    });
                  }}
                  type="radio"
                  id="schedule-list0"
                  name="schedule-list"
                  value={'시작전'}
                  defaultChecked
                />
                <label htmlFor="schedule-list0" className="start">
                  <span className="pointer" />
                  시작전
                </label>

                <input
                  onChange={(e) => {
                    const { value } = e.target;
                    setEditValue({
                      ...editValue,
                      editSchedule: value,
                    });
                  }}
                  type="radio"
                  id="schedule-list1"
                  name="schedule-list"
                  value={'시작예정'}
                />
                <label htmlFor="schedule-list1" className="planning">
                  <span className="pointer" />
                  시작예정
                </label>

                <input
                  onChange={(e) => {
                    const { value } = e.target;
                    setEditValue({
                      ...editValue,
                      editSchedule: value,
                    });
                  }}
                  type="radio"
                  id="schedule-list2"
                  name="schedule-list"
                  value={'진행중'}
                />
                <label htmlFor="schedule-list2" className="ongoing">
                  <span className="pointer" />
                  진행중
                </label>

                <input
                  onChange={(e) => {
                    const { value } = e.target;
                    setEditValue({
                      ...editValue,
                      editSchedule: value,
                    });
                  }}
                  type="radio"
                  id="schedule-list3"
                  name="schedule-list"
                  value={'완료'}
                />
                <label htmlFor="schedule-list3" className="completion">
                  <span className="pointer" />완 료
                </label>
              </StyleRadio>
            )}
          </StyleSchedule>
        </StyleContent>

        {/* 마감일시 */}
        <StyleContent>
          <ConentTitle>마감 일시 </ConentTitle>
          <input
            placeholder={todosDoneDate}
            value={editDoneDate}
            onChange={(e) => {
              const { value } = e.target;
              setEditValue({
                ...editValue,
                editDoneDate: value,
              });
            }}
            type="date"
          />
        </StyleContent>
        {/* 내용 */}
        <StyleText>
          <ConentTitle className="content-wrap">내용</ConentTitle>
          <textarea
            placeholder={todosContent}
            value={editContent}
            onChange={(e) => {
              const { value } = e.target;
              setEditValue({
                ...editValue,
                editContent: value,
              });
            }}
          />
        </StyleText>
      </form>
      <Comment />
    </StyledDetailMain>
  );
}

export default DetailMain;

//CSS

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
`;

const StyledDetailMain = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
  }

  .title {
    margin-bottom: 1em;

    > input {
      border: none;
      font-size: 24px;
      color: #000;
      outline: none;
      text-align: left;

      ::placeholder {
        font-size: 24px;
        color: #000;
      }
    }
  }
`;

const StyleContent = styled.div`
  display: flex;
  /* width: 80%; */
  margin-bottom: 0.5em;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 1em;
  }

  .title {
    display: flex;
  }

  > input {
    display: block;
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    text-align: right;
    color: #000;

    ::placeholder {
      color: #000;
    }
  }
`;

const ConentTitle = styled.div`
  font-weight: 900;
  flex: 1;

  @media (max-width: 600px) {
    margin-bottom: 1em;
  }
`;

const StyleText = styled.div`
  margin: 1.5em 0;
  border-top: 1px solid #ddd;
  padding: 2em 0;

  .content-wrap {
    font-size: 24px;
  }

  > textarea {
    width: 100%;
    border: none;
    margin-top: 1em;
    min-height: 200px;
    border-radius: 4px;
    resize: none;
    outline: none;
    font-size: 16px;
    color: #000;

    ::placeholder {
      font-size: 16px;
      color: #000;
    }
  }
`;
const StyleRadio = styled.div`
  padding: 16px 0 16px;
  cursor: pointer;

  input[type='radio'] {
    display: none;
  }
  .pointer {
    display: inline-block;
    margin-right: 4px;
    border-radius: 100%;
    width: 8px;
    height: 8px;
    background-color: red;
  }

  input[type='radio']:checked + label {
    border: 2px solid #333;

    &.start {
      border-color: #ff5e5e;
    }
    &.planning {
      border-color: #ff9900;
    }
    &.ongoing {
      border-color: #00f846;
    }
    &.completion {
      border-color: #343434;
    }
  }

  input[type='radio'] + label {
    border: 2px solid transparent;
    box-sizing: border-box;
    display: inline-block;
    cursor: pointer;
    padding: 0.4em 1.4em;
    margin-right: 8px;
    border-radius: 50px;
    font-weight: bold;
    font-size: 13px;

    @media (max-width: 600px) {
      margin-bottom: 1em;
    }

    &.start {
      background-color: #ffdfdf;
      .pointer {
        background-color: #ff9999;
      }
    }
    &.planning {
      background-color: #ffdeae;
      .pointer {
        background-color: orange;
      }
    }
    &.ongoing {
      background-color: #a3f8bb;
      .pointer {
        background-color: #27ae60;
      }
    }
    &.completion {
      background-color: #d4d4d4;
      .pointer {
        background-color: #828282;
      }
    }
  }
`;

const StyleSchedule = styled.div`
  background-color: #ededed;
  border-radius: 4px;
  padding: 16px 16px 0;
  width: 60%;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 100%;
  }

  .schedule-title {
    padding: 0 4px 8px;
    display: flex;
    justify-content: flex-end;

    > span {
      font-weight: 900;
      color: #3187f1;
    }
  }
`;
