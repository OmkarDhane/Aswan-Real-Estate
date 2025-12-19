import React from 'react';
import DubaiNight from '../assets/dubai_night.webp';
import Footer from "../components/Footer"; 

const ReportPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">Dubai Residential Market Report</h1>
      <img
        src={DubaiNight}
        alt="Dubai Night Skyline"
        className="max-w-full rounded-lg shadow-lg"
      />
      <p className="mt-6 max-w-3xl text-center text-gray-700">
        Detailed market insights and analysis on Dubai real estate.
      </p>
    </div>
    
  );
 
};

export default ReportPage;
