import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { __getTodos, __modifyEdittedTodo } from "../../modules/todosSlice";
import DetailScheduleEdit from "../DetailPage/DetailScheduleEdit";
import Comment from "../comments/Comment";
import Button from "../button/Button";

function DetailMain() {
  const dispatch = useDispatch();

  // useNavigate로 전달한 props(todo의 id)
  const location = useLocation();
  const todoId = location.pathname.split("/")[1];

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
    setButtonSwitch(true);
  };

  // 내용
  const [editContent, setEditContent] = useState("");
  const editContentInputChangeHandler = (event) => {
    setEditContent(event.target.value);
  };

  // 제목
  const [editTitle, setEdtitTitle] = useState("");
  const editTitleChangeHandler = (e) => {
    setEdtitTitle(e.target.value);
  };

  // 완료일
  const [editDoneDate, setEdtitDoneDate] = useState("");
  const editDoneDateChangeHandler = (e) => {
    setEdtitDoneDate(e.target.value);
  };

  // 작성자
  const [editUserId, setEditUserId] = useState("");
  const editUserIdChangeHandler = (e) => {
    setEditUserId(e.target.value);
  };

  const onSubmitEdittedTodo = (e) => {
    e.preventDefault();

    const passwordForModifying = window.prompt(
      window.confirm("비밀번호를 입력 해 주세요", "")
    );

    if (passwordForModifying === sameIdTodos.userPw) {
      dispatch(
        __modifyEdittedTodo({
          id: todoId,
          userId: editUserId,
          title: editTitle,
          content: editContent,
          doneDate: editDoneDate,
        })
      );
      return alert("수정이 완료되었습니다.");
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  return (
    <StyledDetailMain>
      <form onSubmit={onSubmitEdittedTodo}>
        <ButtonWrapper>
          <Button backgroundColor="#484848" radius="4">
            뒤로가기
          </Button>
          <Button radius="4">수정하기</Button>
        </ButtonWrapper>
        {/* 제목 */}
        <StyleContent className="title">
          <label>{todosTitle}</label>
          <input value={editTitle} onChange={editTitleChangeHandler} />
        </StyleContent>
        {/* 담당자 */}
        <StyleContent>
          <ConentTitle>담당자 </ConentTitle>

          <input
            placeholder={todosUserId}
            value={editUserId}
            onChange={editUserIdChangeHandler}
          />
        </StyleContent>
        {/* 진행상태 */}
        <StyleContent>
          <ConentTitle>진행 상태 </ConentTitle>

          <div onClick={openScheduleEditButton}>
            {buttonSwitch ? (
              <DetailScheduleEdit
                todoId={todoId}
                buttonSwitch={buttonSwitch}
                setButtonSwitch={setButtonSwitch}
              />
            ) : (
              todosSchedule
            )}
          </div>
        </StyleContent>
        {/* 마감일시 */}
        <StyleContent>
          <ConentTitle>마감 일시 </ConentTitle>

          <input
            placeholder={todosDoneDate}
            value={editDoneDate}
            onChange={editDoneDateChangeHandler}
            type="date"
          />
        </StyleContent>
        {/* 내용 */}
        <StyleText>
          <ConentTitle>내용</ConentTitle>

          <textarea
            placeholder={todosContent}
            setModifyValue={todosContent}
            value={editContent}
            onChange={editContentInputChangeHandler}
          ></textarea>
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

      ::placeholder {
        font-size: 24px;
        color: #000;
      }
    }
  }
`;

const StyleContent = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: 0.5em;

  .title {
    display: flex;
  }

  > input {
    display: block;
    flex: 1;
    border: none;
    border-bottom: 1px solid #ddd;
    outline: none;
  }
`;

const ConentTitle = styled.div`
  font-weight: 900;
  flex: 1;
`;

const StyleText = styled.div`
  margin: 1.5em 0;
  border-top: 1px solid #ddd;
  padding: 2em 0;

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
