import React from "react";

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4 sm:px-6">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md sm:max-w-lg md:max-w-xl">
        {children}
        <button
          onClick={onClose}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded mt-4 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
