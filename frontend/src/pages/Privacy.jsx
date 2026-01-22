import React from "react";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7] font-[Poppins] text-gray-800">

      {/* ---------------- HEADER SECTION ---------------- */}
      <div className="bg-black py-16 sm:py-24 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-light text-white uppercase tracking-[0.2em] mb-4">
          Privacy <span className="text-[#D4AF37] italic font-normal">Policy</span>
        </h1>
        <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
        <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-[0.3em]">
          Last Updated: 21/01/2026
        </p>
      </div>

      {/* ---------------- CONTENT SECTION ---------------- */}
      <div className="flex-grow max-w-5xl mx-auto bg-white my-8 sm:my-16 p-6 md:p-16 shadow-sm border border-gray-100 rounded-sm">

        <div className="text-gray-600 leading-relaxed text-sm sm:text-base">
          <p className="mb-10 text-lg font-light leading-relaxed">
            This Privacy Policy describes how <span className="text-black font-semibold">Aswan Real Estate</span> (“Company”, “we”, “us”, or “our”) collects, uses, discloses, and protects personal data when you access or use <a href="https://aswanrealestate.com" className="text-[#D4AF37] underline">aswanrealestate.com</a>. By using the Website, you acknowledge that you have read and understood this policy.
          </p>

          <div className="space-y-12">
            {/* 1. Scope */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                1. Scope of This Privacy Policy
              </h2>
              <p>This Privacy Policy applies to: Visitors to the Website, individuals who submit enquiries, and users who interact with our property listings or marketing content. This Policy does not apply to third-party websites linked from our platform.</p>
            </section>

            {/* 2. Legal Basis */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                2. Legal Basis for Processing
              </h2>
              <p>Personal data is processed in accordance with the <span className="text-black font-medium">UAE Federal Decree-Law No. 45 of 2021 (PDPL)</span> and other applicable UAE laws. We process data only where there is consent, contractual necessity, or legitimate business interest.</p>
            </section>

            {/* 3. Data Collection */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                3. Personal Data We Collect
              </h2>
              <ul className="list-none space-y-4">
                <li><strong className="text-black block mb-1">a. Information You Provide:</strong> Full name, email address, phone number, enquiry details, and property preferences.</li>
                <li><strong className="text-black block mb-1">b. Automatically Collected:</strong> IP address, browser type, device info, and website usage data (pages visited, time spent).</li>
                <li><strong className="text-black block mb-1">c. Marketing Data:</strong> Preferences related to property updates and communications.</li>
              </ul>
            </section>

            {/* 4. Use of Data */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                4. How We Use Personal Data
              </h2>
              <p>Data is used for responding to enquiries, providing real estate services, facilitating agent communication, improving user experience, and complying with UAE legal obligations.</p>
            </section>

            {/* 5. Disclosure */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                5. Disclosure of Personal Data
              </h2>
              <p>We may share data with licensed agents affiliated with Aswan Real Estate and IT service providers. We strictly <span className="text-black font-semibold">do not sell or rent</span> personal data to third parties.</p>
            </section>

            {/* 6. International Transfers */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                6. International Data Transfers
              </h2>
              <p>Some providers may process data outside the UAE. We take reasonable steps to ensure appropriate safeguards are in place to protect your information.</p>
            </section>

            {/* 7. Cookies */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                7. Cookies and Tracking
              </h2>
              <p>The Website uses cookies to enhance user experience. Details regarding their use are set out in our Cookies Policy, which forms part of this Privacy Policy.</p>
            </section>

            {/* 8. Retention */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                8. Data Retention
              </h2>
              <p>Personal data is retained only for as long as necessary to fulfil the purposes outlined or to comply with legal requirements. Secure deletion occurs thereafter.</p>
            </section>

            {/* 9. Data Security */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                9. Data Security
              </h2>
              <p>We implement technical and organizational measures to protect data against unauthorized access, loss, or misuse. However, no internet transmission is 100% secure.</p>
            </section>

            {/* 10. Your Rights */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                10. Your Rights
              </h2>
              <p>Under UAE law, you may request access, correction, or deletion of your data, or withdraw consent. Please contact us using the details below for such requests.</p>
            </section>

            {/* 11. Third-Party Websites */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                11. Third-Party Websites
              </h2>
              <p>We are not responsible for the privacy practices of third-party platforms. We encourage users to review their policies independently.</p>
            </section>
            {/* 12. Third-Party Websites */}
            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                12. Changes to This Policy
              </h2>
              <p>Updates are effective immediately upon publication. Continued use of the Website constitutes acceptance of revised terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-4 border-l-4 border-[#D4AF37] pl-4">
                13. Contact Information
              </h2>
              <p className="font-bold text-black">Aswan Real Estate</p>
              <p>Website: <a href="https://aswanrealestate.com" className="text-[#D4AF37] hover:underline">aswanrealestate.com</a></p>
              <p>Email: <a href="mailto:info@aswanrealestate.com" className="text-[#D4AF37] hover:underline">info@aswanrealestate.com</a></p></section>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;