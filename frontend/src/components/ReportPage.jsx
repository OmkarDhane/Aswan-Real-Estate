import React from 'react';
import DubaiNight from '../assets/dubai_night.webp';
import Footer from "../components/Footer"; 

const ReportPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-12 pb-16 px-4 sm:px-6 lg:px-16">
      
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center sm:text-left">
        Dubai Residential Market Report
      </h1>
      
      {/* Image */}
      <img
        src={DubaiNight}
        alt="Dubai Night Skyline"
        className="w-full sm:w-4/5 lg:w-3/5 rounded-lg shadow-lg object-cover"
      />
      
      {/* Description */}
      <p className="mt-6 max-w-3xl text-center sm:text-left text-gray-700 text-sm sm:text-base">
        Detailed market insights and analysis on Dubai real estate. Stay informed with the latest trends, pricing, and investment opportunities in Dubai’s residential market.
      </p>

      {/* Footer */}
      <div className="mt-12 w-full">
        <Footer />
      </div>
      
    </div>
  );
};

export default ReportPage;
