import React from 'react';
import { useNavigate } from 'react-router-dom';
import DubaiNight from '../assets/dubai_night.webp'; 

const MarketReport = () => {
  const navigate = useNavigate();

  return (
    <section
      id="report"
      className="relative bg-cover bg-center py-12 sm:py-14"
      style={{ backgroundImage: `url(${DubaiNight})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[450px]">
        
        {/* Content Box */}
        <div className="lg:col-span-7 bg-black bg-opacity-80 text-white p-6 sm:p-10 rounded-lg shadow-lg flex flex-col justify-center h-full mx-auto lg:ml-4">
          
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
            Dubai Real Estate
          </h2>
          <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold">
            Residential Market Report
          </h3>
          <h4 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold">
             – Q3 2025
          </h4>
          
          <p className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl">
           As Dubai’s property market continues to evolve, staying informed is essential. The Espace Real Estate Research Team publishes quarterly market reports designed to keep you up to date with the latest trends, data, and insights shaping Dubai’s real estate landscape.
          </p>
          
          <button
            onClick={() => navigate('/report-page')}
            className="mt-6 bg-transparent border border-white text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition hover:bg-red-600 hover:text-white w-max self-start"
          >
            Read Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketReport;
