import React from "react";

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl min-w-[350px]">
        {children}
        <button
          onClick={onClose}
          className="w-full bg-red-600 text-white py-2 rounded mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
