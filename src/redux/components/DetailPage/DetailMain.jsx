import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { __getTodos } from "../../modules/todosSlice";
import Button from "../button/Button";

// import {v4 as uuidv4} from 'uuid';

function DetailMain() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  // 생성일시
  const [startDate, setStartDate] = useState(new Date());

  // 마감일시
  const [completionDate, setCompletionDate] = useState(new Date());

  // 내용
  const [text, setText] = useState("");
  const textInput = (event) => {
    setText(event.target.value);
  };

  // useNavigate로 전달한 props(todo의 id)
  const location = useLocation();
  const todoId = location.pathname.split("/")[1];
  console.log("todoId", todoId);

  // 상세페이지 제목을 받아오려면 todos를 들고와서 map을 돌리자.
  const { todos } = useSelector((state) => state.allTodos);

  const sameIdTods = todos.filter((item) => item.id === todoId)[0];

  console.log("todos", todos);
  return (
    <div>
      {/* 제목 */}
      <StyledDetailTitleDivBox>
        <StyledDetailTitleText>
          {sameIdTods && sameIdTods.title}
        </StyledDetailTitleText>
      </StyledDetailTitleDivBox>
      <StyledDetailInformationDivBox>
        {/* 담당자 */}
        <StyledDetailInformationSubBox>
          <StyledDetailInformationStaticText>
            담당자
          </StyledDetailInformationStaticText>
          <StyledDetailInformationVariableText>
            {" "}
            {sameIdTods && sameIdTods.userName}
          </StyledDetailInformationVariableText>
        </StyledDetailInformationSubBox>

        {/* 진행상태 */}
        <StyledDetailInformationSubBox>
          <StyledDetailInformationStaticText>
            진행 상태{" "}
          </StyledDetailInformationStaticText>
          <StyledDetailInformationVariableText>
            <input />
          </StyledDetailInformationVariableText>
        </StyledDetailInformationSubBox>

        {/* 생성일시 */}
        <StyledDetailInformationSubBox>
          <StyledDetailInformationStaticText>
            생성 일시
          </StyledDetailInformationStaticText>
          <StyledDetailInformationVariableText>
            {" "}
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              locale={ko} // 한글로 변경
              dateFormat='yyyy.MM.dd (eee)' // 시간 포맷 변경
              showPopperArrow={false} // 화살표 변경
              minDate={new Date()} // 오늘 날짜 전은 선택 못하게
            />
          </StyledDetailInformationVariableText>
        </StyledDetailInformationSubBox>

        {/* 마감일시 */}
        <StyledDetailInformationSubBox>
          <StyledDetailInformationStaticText>
            마감 일시
          </StyledDetailInformationStaticText>
          <StyledDetailInformationVariableText>
            {" "}
            <DatePicker
              selected={completionDate}
              onChange={(date) => setCompletionDate(date)}
              locale={ko} // 한글로 변경
              dateFormat='yyyy.MM.dd (eee)' // 시간 포맷 변경
              showPopperArrow={false} // 화살표 변경
              minDate={new Date()} // 오늘 날짜 전은 선택 못하게
            />
          </StyledDetailInformationVariableText>
        </StyledDetailInformationSubBox>
      </StyledDetailInformationDivBox>

      {/* 내용 */}
      <StyledDetailContentsDivBox>
        <StyledDetailContentsEditButtonBox>
          <StyledDetailContentsStatic>내용</StyledDetailContentsStatic>
          <StyledDetailEditButton>
            <Button backgroundColor='#2F80ED' radius='100'>
              수정하기
            </Button>
          </StyledDetailEditButton>
        </StyledDetailContentsEditButtonBox>

        <StyledTextArea>
          <textarea
            value={text}
            onChange={textInput}
            placeholder='댓글을 입력해 주세요.'
          ></textarea>
        </StyledTextArea>

        <div>{text}</div>
      </StyledDetailContentsDivBox>
    </div>
  );
}

export default DetailMain;

//CSS

const StyledDetailTitleDivBox = styled.div`
  padding: 10px;
`;

const StyledDetailTitleText = styled.div`
  margin-left: 150px;
  font-size: 60px;
  margin-top: 150px;
  margin-left: 20%;
`;

const StyledDetailInformationStaticText = styled.span`
  width: 100px;
  color: #9c9c9c;
`;

const StyledDetailInformationVariableText = styled.span`
  margin-right: 60%;
`;

const StyledDetailInformationDivBox = styled.div`
  padding: 30px;
`;

const StyledDetailInformationSubBox = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  margin-left: 20%;
  padding: 10px;
`;

const StyledDetailContentsDivBox = styled.div`
  padding: 30px;
`;
const StyledDetailContentsEditButtonBox = styled.div`
  border: 1px solid #e6e6e6;
  padding-top:15px;
  margin-left: 20%;
  margin-right: 29%;
  border-left-style: none;
  border-right-style: none;
  border-bottom-style: none;
`;

const StyledDetailContentsStatic = styled.span`
  font-size: 30px;
`;

const StyledTextArea = styled.textarea`
  font-size: 20px;
  margin-left: 20%;
  width: 50%;
  height: 80px;
  border: none;
`;
const StyledDetailEditButton = styled.button`
  border: none;
  display: inline-block;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
`;
