import React, { useState } from 'react';
import { __modifySchedule } from '../../modules/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../button/Button';

const DetailScheduleEdit = ({ todoId, buttonSwitch, setButtonSwitch }) => {
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.allTodos);

  const prevSchedule = todos
    .filter((item) => item.id === todoId)
    .map((i) => i.schedule)[0];

  const [todoSchedule, setTodoSchedule] = useState(prevSchedule);

  const modifyScheduleOnChange = (e) => {
    setTodoSchedule(e.target.value);
  };

  const modifyScheduleButtonClick = () => {
    // if (window.confirm('진행 상태를 변경하시겠습니까?')) {

    // }
    dispatch(__modifySchedule({ schedule: todoSchedule, id: todoId }));
    window.location.reload();
    // setButtonSwitch(false);
  };

  return (
    <div className="check-box">
      <label htmlFor="schedule-list0">
        <input
          onChange={modifyScheduleOnChange}
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
          onChange={modifyScheduleOnChange}
          type="radio"
          id="schedule-list1"
          name="schedule-list"
          value={'시작예정'}
        />
        시작예정
      </label>

      <label htmlFor="schedule-list2">
        <input
          onChange={modifyScheduleOnChange}
          type="radio"
          id="schedule-list2"
          name="schedule-list"
          value={'진행중'}
        />
        진행중
      </label>

      <label htmlFor="schedule-list3">
        <input
          onChange={modifyScheduleOnChange}
          type="radio"
          id="schedule-list3"
          name="schedule-list"
          value={'완료'}
        />
        완료
      </label>
      <Button type="button" onClick={modifyScheduleButtonClick}>
        수정
      </Button>
    </div>
  );
};

export default DetailScheduleEdit;
