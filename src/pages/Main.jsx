import React, { useEffect, useState } from 'react';
import AddForm from '../redux/components/AddForm/AddForm';
import AddScheduleInput from '../redux/components/Input/AddScheduleInput';
import TodoList from '../redux/components/TodoList/TodoList';
import TodoForm from '../redux/components/todoForm/TodoForm';

function Main() {
  // 모달을 위한 state
  const [modalSwitch, setModalSwitch] = useState(false);

  const openModalAddScheduleButton = () => {
    setModalSwitch(!modalSwitch);
  };

  return (
    <div>
      메인메인
      <button onClick={openModalAddScheduleButton}>일정추가</button>
      <TodoList />
      {/* <AddForm /> */}
      {modalSwitch && (
        <TodoForm setModalSwitch={setModalSwitch} modalSwitch={modalSwitch} />
      )}
    </div>
  );
}

export default Main;
