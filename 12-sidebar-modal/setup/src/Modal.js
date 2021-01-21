import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const msg = useGlobalContext();
  console.log("From Modal:" + msg);

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
