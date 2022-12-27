import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { __getTodos, __modifyEdittedTodo } from '../../modules/todosSlice';
import DetailScheduleEdit from '../DetailPage/DetailScheduleEdit';
import Comment from '../commentsComment';

function DetailMain() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

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

  // 마감 일시 수정 스위치
  const [buttonSwitch, setButtonSwitch] = useState(false);
  const openScheduleEditButton = () => {
    setButtonSwitch(true);
  };

  // 내용
  const [editContent, setEditContent] = useState('');
  const editContentInputChangeHandler = (event) => {
    setEditContent(event.target.value);
  };

  //제목
  const [editTitle, setEdtitTitle] = useState('');
  const editTitleChangeHandler = (e) => {
    setEdtitTitle(e.target.value);
  };

  //완료일
  const [editDoneDate, setEdtitDoneDate] = useState('');
  const editDoneDateChangeHandler = (e) => {
    setEdtitDoneDate(e.target.value);
  };

  const onSubmitEdittedTodo = (e) => {
    e.preventDefault();

    dispatch(
      __modifyEdittedTodo({
        id: todoId,
        title: editTitle,
        content: editContent,
        doneDate: editDoneDate,
      })
    );
  };

  return (
    <StyledDetailMain>
      {/* 제목 */}
      <form onSubmit={onSubmitEdittedTodo}>
        <StyledDetailTitleDivBox>
          <StyledDetailTitleText
            placeholder={todosTitle}
            value={editTitle}
            onChange={editTitleChangeHandler}
          />
          {/* 컴포넌트 내부에서 map을 통해 새로운 컴포넌트가 아닌 다른 데이터를 return하면
          Array.prototype.map() expects a value to be returned at the end of arrow function  array-callback-return
          위 오류가 발생할 확률이 증가한다. 그래서 &&연산자를 통해 내가 원하는 값을 텍스트로 출력. */}
          <button>수정하기</button>
        </StyledDetailTitleDivBox>

        <StyledDetailInformationDivBox>
          {/* 담당자 */}
          <StyledDetailInformationSubBox>
            <StyledDetailInformationStaticText>
              담당자{' '}
            </StyledDetailInformationStaticText>
            {todosUserId}
          </StyledDetailInformationSubBox>

          {/* 진행상태 */}
          <StyledDetailInformationSubBox>
            <StyledDetailInformationStaticText>
              진행 상태{' '}
            </StyledDetailInformationStaticText>

            <StyledDetailInformationVariableText
              onClick={openScheduleEditButton}
            >
              {buttonSwitch ? (
                <DetailScheduleEdit
                  todoId={todoId}
                  buttonSwitch={buttonSwitch}
                  setButtonSwitch={setButtonSwitch}
                />
              ) : (
                todosSchedule
              )}
            </StyledDetailInformationVariableText>
          </StyledDetailInformationSubBox>

          {/* 생성일시 */}
          <StyledDetailInformationSubBox>
            <StyledDetailInformationStaticText>
              생성 일시{' '}
            </StyledDetailInformationStaticText>

            <StyledDetailTitleText placeholder={todosStartDate} />
          </StyledDetailInformationSubBox>

          {/* 마감일시 */}
          <StyledDetailInformationSubBox>
            <StyledDetailInformationStaticText>
              마감 일시{' '}
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
          </StyledDetailContentsEditButtonBox>

          <textarea
            placeholder={todosContent}
            value={editContent}
            onChange={editContentInputChangeHandler}
          ></textarea>
        </StyledDetailContentsDivBox>
      </form>
      <Comment />
    </StyledDetailMain>
  );
}

export default DetailMain;

//CSS

const StyledDetailMain = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
  }
`;

const StyledDetailTitleDivBox = styled.div``;

const StyledDetailTitleText = styled.input``;

const StyledDetailInformationDivBox = styled.div``;
const StyledDetailInformationSubBox = styled.div``;
const StyledDetailInformationStaticText = styled.span``;
const StyledDetailInformationVariableText = styled.span``;
const StyledDetailContentsDivBox = styled.div``;
const StyledDetailContentsEditButtonBox = styled.div``;
const StyledDetailContentsStatic = styled.span``;
