import React from "react";
import AddForm from "../AddForm/AddForm";

const openModalClick = () => {};

export default function AddFormModal() {
  return (
    <div>
      <button id="open_modal">일정추가</button>
      <div className="modal_hidden">
        <div className="modal_overlay" />
        <div className="modal_content">
          <AddForm />
          <button>X</button>
        </div>
      </div>
    </div>
  );
}
