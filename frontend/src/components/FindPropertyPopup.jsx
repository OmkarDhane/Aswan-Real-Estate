// // src/components/FindPropertyPopup.jsx
// import React from "react";

// const FindPropertyPopup = ({ onClose }) => {
//   return (
//    <div className="fixed top-20 right-44 bg-white rounded-lg shadow-xl p-6 w-96 z-50 border border-gray-100">

//       <h3 className="text-lg font-semibold mb-2 text-gray-900">
//         Let’s find your new home together
//       </h3>
//       <p className="text-sm text-gray-600 mb-4">
//         Find your dream home with us, we have a wide range of property that suits your need.
//       </p>
//       <div className="flex gap-3">
//         <button className="flex-1 border border-gray-900 py-2 font-semibold hover:bg-gray-100 transition">
//           FOR SALE
//         </button>
//         <button className="flex-1 border border-gray-900 py-2 font-semibold hover:bg-gray-100 transition">
//           FOR RENT
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FindPropertyPopup;

// src/components/FindPropertyPopup.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const FindPropertyPopup = ({ onClose }) => {
  const navigate = useNavigate(); // useNavigate hook

  const handleForSale = () => {
    navigate("/for-sale"); // FOR SALE page
    onClose(); // popup close करणे
  };

  const handleForRent = () => {
    navigate("/for-rent"); // FOR RENT page
    onClose(); // popup close करणे
  };

  return (
    <div className="fixed top-20 right-44 bg-white rounded-lg shadow-xl p-6 w-96 z-50 border border-gray-100">

      <h3 className="text-lg font-normal mb-2 text-gray-900">
        Let’s find your new home together
      </h3>
      <p className="text-normal text-gray-600 mb-4">
        Find your dream home with us, we have a wide range of property that suits your need.
      </p>

      <div className="flex gap-3">
        <button
          onClick={handleForSale}
          className="flex-1 border border-gray-900 py-2 font-normal hover:bg-gray-100 transition"
        >
          FOR SALE
        </button>
        <button
          onClick={handleForRent}
          className="flex-1 border border-gray-900 py-2 font-normal hover:bg-gray-100 transition"
        >
          FOR RENT
        </button>
      </div>
    </div>
  );
};

export default FindPropertyPopup;
