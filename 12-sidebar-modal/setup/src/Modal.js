import React from "react";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h4>modal content</h4>
        <button className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
