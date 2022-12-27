import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { __modifySchedule } from "../../modules/todosSlice";
import { useDispatch } from "react-redux";

const DetailScheduleEdit = () => {
  // 일정추가 form input
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState({
    id: uuidv4(),
    schedule: "시작전",
    title: "",
    content: "",
    userId: "",
    userPw: "",
    startDate: new Date().toLocaleDateString(),
    doneDate: "",
  });

  const { schedule } = todoValue;

  const BB = () => {
    dispatch(__modifySchedule({ schedule: schedule }));
  };

  return (
    <form onSubmit={BB}>
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
            value={"시작전"}
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
              //함수
            }}
            type="radio"
            id="schedule-list1"
            name="schedule-list"
            value={"시작예정"}
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
            value={"진행중"}
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
            value={"완료"}
          />
          완료
        </label>
        <button>수정</button>
      </div>
    </form>
  );
};

export default DetailScheduleEdit;
