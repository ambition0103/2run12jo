import React, { useEffect, useState } from "react";
import AddScheduleInput from "../redux/components/Input/AddScheduleInput";
import TodoList from "../redux/components/TodoList/TodoList";
import { __getTodos } from "../redux/modules/todosSlice";


function Main() {
  // 모달을 위한 state
  const [modalSwitch, setModalSwitch] = useState(false);

  const openModalAddScheduleButton = () => {
    setModalSwitch(true);
  };

  return (
    <div>
      메인메인
      <button onClick={openModalAddScheduleButton}>일정추가</button>
      {modalSwitch && <AddScheduleInput />}
      <TodoList />

    </div>
  );
}

export default Main;
