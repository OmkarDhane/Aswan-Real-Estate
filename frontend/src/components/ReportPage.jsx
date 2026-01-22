import React from 'react';
import MarketNightBg from '../assets/market-report-bg.jpeg';
import Footer from "../components/Footer"; 

const ReportPage = () => {
  return (
    <div className="min-h-screen bg-[#f4f4f4] flex flex-col font-[Poppins]">
      
      {/* Main Content Area */}
      <div className="flex-grow flex flex-col items-center pt-12 pb-16 px-4 sm:px-6 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mb-12">
          <h1 className="text-3xl sm:text-5xl font-light text-black mb-4">
            Sharjah Residential Market Report
          </h1>
          <h2 className="text-xl sm:text-2xl tracking-[0.2em] uppercase text-gray-500 font-medium">
            Market Performance Report 2025-2026
          </h2>
        </div>
        
        {/* Hero Image */}
        <div className="w-full lg:w-5/5 xl:w-5/5 overflow-hidden rounded-xl shadow-2xl border-4 border-white mb-16">
          <img
            src={MarketNightBg}
            alt="Sharjah Skyline"
            className="w-full h-[350px] md:h-[500px] object-cover"
          />
        </div>

        {/* Report Body */}
        <div className="max-w-5xl w-full space-y-16 text-gray-800">
          
          {/* Section 1: 2025 Performance */}
          <section className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-black mb-6 border-l-4 border-[#D4AF37] pl-4 uppercase tracking-tight">
              Market Performance in 2025
            </h3>
            <p className="leading-relaxed mb-6">
              Sharjah’s real estate market showed sustained momentum throughout 2025, with transaction volumes and values rising robustly year-on-year. In the first half of 2025, total real estate transactions reached approximately <span className="font-bold text-black">AED 27 billion ($7.35 billion)</span>; a <span className="text-[#D4AF37] font-bold">48.1% increase</span> compared to 2024.
            </p>
            <p className="leading-relaxed mb-6">
              The Sharjah Real Estate Registration Department reported total property transactions of around <span className="font-bold text-black">AED 44.3 billion ($12.1 billion)</span> in the first nine months of 2025; up nearly <span className="text-[#D4AF37] font-bold">58.3%</span> from the previous year. A total of <span className="font-bold text-black">80,000+ individual property deals</span> were completed during this period.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#f4f4f4] p-5 rounded border-t-2 border-black">
                <p className="text-sm font-bold uppercase text-[#D4AF37] mb-2">Residential Dominance</p>
                <p className="text-sm italic">Strong demand for family homes and mid-range apartments dominated market activity.</p>
              </div>
              <div className="bg-[#f4f4f4] p-5 rounded border-t-2 border-black">
                <p className="text-sm font-bold uppercase text-[#D4AF37] mb-2">Global Participation</p>
                <p className="text-sm italic">Investors from over 120 nationalities participating in Sharjah real estate deals.</p>
              </div>
            </div>
          </section>

          {/* Section 2: Key Drivers */}
          <section className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6 uppercase tracking-tight">Key Market Drivers</h3>
              <p className="leading-relaxed mb-4">
                <span className="font-bold text-[#D4AF37]">Affordability</span> remains a core advantage for Sharjah. Median prices per square foot are generally lower than Dubai or Abu Dhabi, attracting cost-conscious end-users and investors seeking strong rental yields.
              </p>
              <p className="leading-relaxed">
                Sharjah differentiation through diverse infrastructure projects and digital initiatives like the <span className="font-semibold italic underline">Aqari platform</span> aim to enhance transactional transparency.
              </p>
            </div>
            <div className="bg-black text-white p-8 rounded-lg shadow-xl">
              <h3 className="text-[#D4AF37] text-xl font-bold mb-4 uppercase">Snapshot: August 2025</h3>
              <p className="text-3xl font-light mb-2">AED 4.9 Billion</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Single Month Transactions</p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-[#D4AF37] font-bold">+75% Year-on-Year Increase</p>
              </div>
            </div>
          </section>

          {/* Section 3: 2026 Outlook */}
          <section className="bg-white p-8 md:p-12 rounded-lg shadow-sm border-b-8 border-[#D4AF37]">
            <h3 className="text-2xl font-bold text-black mb-6 uppercase tracking-tight text-center">Outlook for 2026</h3>
            <p className="text-center max-w-2xl mx-auto mb-10 text-gray-600">
              Analysts predict Sharjah’s market will maintain healthy growth in 2026, underpinned by economic stability and growing infrastructure.
            </p>
            
            <div className="space-y-4">
              {[
                { title: "Transaction Volume", desc: "Growth of around 12%-15% with steady engagement." },
                { title: "Foreign Investment", desc: "Expansion supported by attractive pricing and regulatory transparency." },
                { title: "Rental Demand", desc: "Sustained demand in well-connected communities." },
                { title: "Price Appreciation", desc: "Gentler annual rate compared to recent surges." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-gray-100 py-4">
                  <span className="font-bold text-black uppercase text-sm tracking-wider">{item.title}</span>
                  <span className="text-right text-sm text-gray-600 max-w-xs">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ReportPage;