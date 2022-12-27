import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
// import { ko } from "date-fns/esm/locale";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { __getTodos } from "../../modules/todosSlice";
import DetailScheduleEdit from "../DetailPage/DetailScheduleEdit";

// import {v4 as uuidv4} from 'uuid';

function DetailMain() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  // useNavigate로 전달한 props(todo의 id)
  const location = useLocation();
  const todoId = location.pathname.split("/")[1];

  // 상세페이지 제목을 받아오려면 todos를 일단 가져오자.
  const { todos } = useSelector((state) => state.allTodos);

  //. todoId와 같은 id를 가진 todo를 filter를 통해 변수에 할당하자.
  const sameIdTodos = todos.filter((item) => item.id === todoId)[0];

  // 처음에 const todosSchedule = sameIdTodos.schedule;
  // 이렇게 변수 할당을 했더니 type 에러가 발생.
  // 왜 타입 에러인가??
  // useSelcertor로 todos를 불러온 후 sameIdTodos를 만들 때,
  // 이것이 생성되기 전에 렌더링이 먼저 되고
  // 스크립트가 const todosSchedule = sameIdTodos.schedule;를 읽기 때문에
  // sameIdTodos에 값이 없는 상태라서 타입 에러가 생긴다.
  // 해결 방법은 아래와 같이 sameIdTodos가 있을 때! sameIdTodos.schedule을
  //. todosSchedule에 할당하는 방법을 써야한다.

  const todosSchedule = sameIdTodos && sameIdTodos.schedule;
  const todosStartDate = sameIdTodos && sameIdTodos.startDate;
  const todosDoneDate = sameIdTodos && sameIdTodos.doneDate;
  const todosTitle = sameIdTodos && sameIdTodos.title;
  const todosContent = sameIdTodos && sameIdTodos.content;
  const todosUserName = sameIdTodos && sameIdTodos.userName;

  // 생성일시
  // const [startDate, setStartDate] = useState(new Date());

  // 마감일시
  // const [completionDate, setCompletionDate] = useState(new Date());

  // 마감 일시 수정 스위치
  const [buttonSwitch, setButtonSwitch] = useState(false);
  const openScheduleEditButton = () => {
    setButtonSwitch(true);
  };

  // 내용
  const [editContent, setEditContent] = useState("");
  const editContentInputChangeHandler = (event) => {
    setEditContent(event.target.value);
  };

  //제목
  const [editTitle, setEdtitTitle] = useState("");
  const editTitleChangeHandler = (e) => {
    setEdtitTitle(e.target.value);
  };

  //완료일
  const [editDoneDate, setEdtitDoneDate] = useState("");
  const editDoneDateChangeHandler = (e) => {
    setEdtitDoneDate(e.target.value);
  };

  const onSubmitModifiedEditValue = () => {};

  return (
    <StyledDetailMain>
      {/* 제목 */}
      <form onSubmit={onSubmitModifiedEditValue}>
        <StyledDetailTitleDivBox>
          <StyledDetailTitleText placeholder={todosTitle} />
          {/* 컴포넌트 내부에서 map을 통해 새로운 컴포넌트가 아닌 다른 데이터를 return하면
          Array.prototype.map() expects a value to be returned at the end of arrow function  array-callback-return
          위 오류가 발생할 확률이 증가한다. 그래서 &&연산자를 통해 내가 원하는 값을 텍스트로 출력. */}
          <button>수정하기</button>
        </StyledDetailTitleDivBox>

        <StyledDetailInformationDivBox>
          {/* 담당자 */}
          <StyledDetailInformationSubBox>
            <StyledDetailInformationStaticText>
              담당자{" "}
            </StyledDetailInformationStaticText>
            <StyledDetailTitleText
              placeholder={todosUserName}
              value={editTitle}
              onChange={editTitleChangeHandler}
            />
          </StyledDetailInformationSubBox>

          {/* 진행상태 */}
          <StyledDetailInformationSubBox>
            <StyledDetailInformationStaticText>
              진행 상태{" "}
            </StyledDetailInformationStaticText>

            <StyledDetailInformationVariableText
              onClick={openScheduleEditButton}
            >
              {buttonSwitch ? <DetailScheduleEdit /> : todosSchedule}
            </StyledDetailInformationVariableText>
          </StyledDetailInformationSubBox>

          {/* 생성일시 */}
          <StyledDetailInformationSubBox>
            <StyledDetailInformationStaticText>
              생성 일시{" "}
            </StyledDetailInformationStaticText>

            <StyledDetailTitleText placeholder={todosStartDate} />
          </StyledDetailInformationSubBox>

          {/* 마감일시 */}
          <StyledDetailInformationSubBox>
            <StyledDetailInformationStaticText>
              마감 일시{" "}
            </StyledDetailInformationStaticText>
            <StyledDetailTitleText
              placeholder={todosDoneDate}
              value={editDoneDate}
              onChange={editDoneDateChangeHandler}
            />
          </StyledDetailInformationSubBox>
        </StyledDetailInformationDivBox>

        {/* 내용 */}
        <StyledDetailContentsDivBox>
          <StyledDetailContentsEditButtonBox>
            <StyledDetailContentsStatic>내용</StyledDetailContentsStatic>
            <StyledDetailEditButton>수정</StyledDetailEditButton>
          </StyledDetailContentsEditButtonBox>

          <textarea
            placeholder={todosContent}
            value={editContent}
            onChange={editContentInputChangeHandler}
          ></textarea>
        </StyledDetailContentsDivBox>
      </form>
    </StyledDetailMain>
  );
}

export default DetailMain;

//CSS

const StyledDetailMain = styled.div``;

const StyledDetailTitleDivBox = styled.div``;

const StyledDetailTitleText = styled.input``;

const StyledDetailInformationDivBox = styled.div``;
const StyledDetailInformationSubBox = styled.div``;
const StyledDetailInformationStaticText = styled.span``;
const StyledDetailInformationVariableText = styled.span``;
const StyledDetailContentsDivBox = styled.div``;
const StyledDetailContentsEditButtonBox = styled.div``;
const StyledDetailContentsStatic = styled.span``;
const StyledDetailEditButton = styled.button``;
