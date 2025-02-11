// components/ModalComponent.js
import React from 'react';

const ModalComponent = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box relative">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </button>
        {/* Modal Title */}
        {title && <h3 className="text-slate-200 text-lg font-bold mb-4">{title}</h3>}
        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
};

export default ModalComponent;
