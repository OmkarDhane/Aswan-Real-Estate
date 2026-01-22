import React from "react";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7] font-[Poppins] text-gray-800">

      {/* ---------------- HEADER SECTION ---------------- */}
      <div className="bg-black py-16 sm:py-24 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-light text-white uppercase tracking-[0.2em] mb-4">
          Terms & <span className="text-[#D4AF37] italic font-normal">Conditions</span>
        </h1>
        <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
        <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-[0.3em]">
          Last Updated: 21/01/2026
        </p>
      </div>

      {/* ---------------- CONTENT SECTION ---------------- */}
      <div className="flex-grow max-w-5xl mx-auto bg-white my-8 sm:my-16 p-6 md:p-16 shadow-sm border border-gray-100 rounded-sm">

        <div className="text-gray-600 leading-relaxed text-sm sm:text-base">
          <p className="mb-10 text-lg font-light leading-relaxed border-b border-gray-100 pb-8">
            These Terms and Conditions (“Terms”) govern your access to and use of the website 
            <a href="https://aswanrealestate.com" className="text-[#D4AF37] underline ml-1">aswanrealestate.com</a>, 
            operated by <span className="text-black font-semibold">Aswan Real Estate</span>. By using this Website, you agree to be legally bound by these Terms.
          </p>

          <div className="space-y-12">
            
            {/* 1. About */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                1. About Aswan Real Estate
              </h2>
              <p>Aswan Real Estate is a brokerage operating in the UAE. Information provided here is for general informational purposes and does not constitute professional, legal, or investment advice.</p>
            </section>

            {/* 2. Eligibility */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                2. Eligibility and Permitted Use
              </h2>
              <p>The Website is for individuals aged 18+. You agree not to violate laws, interfere with site security, or scrape content without prior written consent.</p>
            </section>

            {/* 3. Listings Disclaimer */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                3. Property Listings Disclaimer
              </h2>
              <p>Listings are subject to change, errors, or prior sale. Images and floor plans are illustrative only. Users must independently verify all details before transactions.</p>
            </section>

            {/* 4. No Professional Advice */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                4. No Reliance and No Professional Advice
              </h2>
              <p>Content should not be relied upon as legal or financial advice. Conduct independent due diligence before making real estate decisions.</p>
            </section>

            {/* 5. Agent Content */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                5. Agent-Submitted Content
              </h2>
              <p>Affiliated agents are responsible for ensuring their listings comply with UAE laws and RERA regulations. We are not liable for inaccuracies in third-party content.</p>
            </section>

            {/* 6. Maps */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                6. Maps and Location Information
              </h2>
              <p>Displayed locations are approximate only and should not be used to determine exact property boundaries or plot limits.</p>
            </section>

            {/* 7. IP Rights */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                7. Intellectual Property Rights
              </h2>
              <p>All text, images, and logos are owned by Aswan Real Estate. Reproduction or commercial use without authorization is strictly prohibited.</p>
            </section>

            {/* 8. Third-Party Links */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                8. Third-Party Links and Services
              </h2>
              <p>We do not control or endorse the content or policies of third-party websites linked from our platform.</p>
            </section>

            {/* 9. Liability */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                9. Limitation of Liability
              </h2>
              <p>To the fullest extent permitted by UAE law, we are not liable for direct or indirect losses arising from your use of the Website or reliance on its content.</p>
            </section>

            {/* 10. Indemnification */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                10. Indemnification
              </h2>
              <p>You agree to hold Aswan Real Estate harmless from any claims or expenses arising from your breach of these Terms.</p>
            </section>

            {/* 11. Privacy */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                11. Privacy and Data Protection
              </h2>
              <p>Data processing is governed by our Privacy Policy and UAE Federal Decree-Law No. 45 of 2021.</p>
            </section>

            {/* 12. Cookies */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                12. Cookies and Tracking Technologies
              </h2>
              <p>We use strictly necessary, performance, and functional cookies to enhance user experience. By using the site, you consent to this use.</p>
            </section>

            {/* 13. Termination */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                13. Termination of Access
              </h2>
              <p>We reserve the right to suspend or terminate access without notice if these Terms are violated.</p>
            </section>

            {/* 14. Law */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                14. Governing Law and Jurisdiction
              </h2>
              <p>These Terms are governed by the laws of the United Arab Emirates. Disputes shall be subject to UAE courts.</p>
            </section>

            {/* 15. Amendments */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                15. Amendments
              </h2>
              <p>We may modify these Terms at any time. Continued use of the Website constitutes acceptance of revised terms.</p>
            </section>

            {/* 16. Contact */}
            <section >
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                16. Contact Information
              </h2>
              <div className="text-sm space-y-1">
                <p className="font-bold text-black">Aswan Real Estate</p>
                <p>Website: <a href="https://aswanrealestate.com" className="text-[#D4AF37] hover:underline">aswanrealestate.com</a></p>
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

export default Terms;