import React from "react";
import "../styles/Modal.css";

function Modal({ children, isOpen, onClose }) {
  return (
    isOpen && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
