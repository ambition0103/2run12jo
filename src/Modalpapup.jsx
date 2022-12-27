import React from "react";
import styled from "styled-components";

//큰 테두리
const Momian = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20%;
`;

//카테고리 버튼
const Stbox = styled.button`
  background-color: ${(props) => props.stcolor};
  border-radius: 5px;
  border: 0px;
`;

//카테고리 정렬
const Boxs = styled.div`
  display: flex;
  gap: 2px;
`;

//담당자, 비밀번호 정렬
const H4s = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

//일정추가, 취소버튼 정렬
const Buts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 4px;
  margin-top: 10px;
  background-color: white;
  border: 0px;
`;

//버튼 css
const PlusButton = styled.button`
  height: 30px;
  background-color: ${(props) => props.color};
  border: 0px solid;
  border-radius: 5px;
  color: white;
  :hover {
    background-color: ${(props) => props.hover};
  }
`;

//input창 css
const Inputs = styled.input`
  width: 30%;
  border: 1px solid #c0bfbf;
  border-radius: 5px;
`;

//담당자, 비밀번호 css
const Ins = styled.input`
  width: 95%;
  border: 1px solid #c0bfbf;
  border-radius: 5px;
`;

function App() {
  return (
    <div>
      <Momian>
        <h3>일정추가</h3>
        <h4>일정상태선택</h4>
        <Boxs>
          <Stbox stcolor="#FFDFDF">&#128308; 시작 전</Stbox>
          <Stbox stcolor="#FFDEAE">&#128992; 시작예정</Stbox>
          <Stbox stcolor="#A3F8BB">&#128994; 진행중</Stbox>
          <Stbox stcolor="#D4D4D4">&#9899; 완료</Stbox>
        </Boxs>
        <h4>일정제목</h4>
        <Inputs></Inputs>
        <h4>일정내용</h4>
        <Inputs></Inputs>
        <h4>마감일자</h4>
        <Inputs></Inputs>
        <H4s>
          <div>
            <h4>담당자</h4>
            <Ins></Ins>
          </div>
          <div>
            <h4>비밀번호</h4>
            <Ins></Ins>
          </div>
        </H4s>
        <Buts>
          <PlusButton color="#3187F1" hover="skyblue">
            일 정 추 가
          </PlusButton>
          <PlusButton color="#A2A2A2" hover="gray">
            취 소
          </PlusButton>
        </Buts>
      </Momian>
    </div>
  );
}

export default App;
