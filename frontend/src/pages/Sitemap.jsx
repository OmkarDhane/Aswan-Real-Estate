import React from "react";
import Footer from "../components/Footer";

const Disclaimer = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7] font-[Poppins] text-gray-800">

      {/* ---------------- HEADER SECTION ---------------- */}
      <div className="bg-black py-16 sm:py-24 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-light text-white uppercase tracking-[0.2em] mb-4">
          Website <span className="text-[#D4AF37] italic font-normal">Disclaimer</span>
        </h1>
        <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
        <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-[0.3em]">
          Last Updated: 21/01/2026
        </p>
      </div>

      {/* ---------------- CONTENT SECTION ---------------- */}
      <div className="flex-grow max-w-5xl mx-auto bg-white my-8 sm:my-16 p-6 md:p-16 shadow-sm border border-gray-100 rounded-sm">

        <div className="text-gray-600 leading-relaxed text-sm sm:text-base">
          <p className="mb-10 text-lg font-light leading-relaxed border-b border-gray-100 pb-8 text-center md:text-left">
            The information provided on <a href="https://aswanrealestate.com" className="text-[#D4AF37] underline">aswanrealestate.com</a> is for general informational purposes only.
          </p>

          <div className="space-y-12">
            
            {/* 1. No Offer */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                1. No Offer or Contract
              </h2>
              <p>
                Nothing on this Website constitutes an offer, contract, or binding agreement of any kind. 
                All real estate transactions are subject to formal agreements executed separately.
              </p>
            </section>

            {/* 2. No Warranty */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                2. No Warranty or Guarantee
              </h2>
              <p className="mb-4">While Aswan Real Estate endeavours to ensure information is accurate, no warranties are made regarding:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4">
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">✦</span> Accuracy & Completeness</li>
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">✦</span> Availability of Listings</li>
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">✦</span> Suitability of Properties</li>
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">✦</span> Third-party Information</li>
              </ul>
            </section>

            {/* 3. No Professional Advice */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                3. No Professional Advice
              </h2>
              <p className="mb-3">Content on the Website does not constitute:</p>
              <div className="bg-gray-50 p-6 rounded-sm border-t border-gray-100 italic">
                Legal advice, Financial advice, Investment advice, or Property valuation advice. 
                Users should seek independent professional advice before making any real estate decisions.
              </div>
            </section>

            {/* 4. Property Information */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                4. Property Information Disclaimer
              </h2>
              <p>
                Property listings, images, maps, sizes, prices, and descriptions are illustrative only. 
                They may be provided by third parties and are subject to availability and verification. 
                Aswan Real Estate shall not be liable for inaccuracies or omissions.
              </p>
            </section>

            {/* 5. Limitation of Liability */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                5. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted under UAE law, Aswan Real Estate disclaims all liability 
                for any loss or damage arising from reliance on Website content or use of the Website.
              </p>
            </section>

            {/* 6. External Links */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                6. External Links
              </h2>
              <p>
                The Website may contain links to third-party websites. Aswan Real Estate does not 
                endorse or assume responsibility for their content or practices.
              </p>
            </section>

            {/* 7. Governing Law */}
            <section >
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                7. Governing Law
              </h2>
              <p className="mb-8 text-sm">
                This Disclaimer shall be governed by and construed in accordance with the laws of the United Arab Emirates.
              </p>
              
              <div className="pt-6 border-t border-gray-200 text-sm space-y-1">
                <p className="font-bold text-black uppercase tracking-widest text-xs">Aswan Real Estate</p>
                <p>Sharjah, United Arab Emirates</p>
                <p>Email: <a href="mailto:info@aswanrealestate.com" className="text-[#D4AF37] hover:underline">info@aswanrealestate.com</a></p>
              </div>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Disclaimer;