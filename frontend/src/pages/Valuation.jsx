import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useForm, ValidationError } from "@formspree/react";

const Valuation = () => {
  const [state, handleSubmit] = useForm("xdkqzdbk"); 

  return (
    <div className="w-full font-[Poppins]">
      <Header />

      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/property-valuation.jpg')" }}
      >
        <div className="bg-black bg-opacity-40 min-h-screen w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* FORM SIDE */}
            <div className="bg-white/80 backdrop-blur-md p-6 sm:p-10 md:p-12 rounded-lg shadow-xl">
              <Link
                to="/"
                className="text-white bg-black bg-opacity-60 px-4 py-2 rounded inline-block mb-6 hover:bg-opacity-80 transition"
              >
                ← Back to Home
              </Link>

              <h1 className="text-2xl sm:text-3xl font-normal mb-4">
                Request a Free Property Valuation
              </h1>

              <p className="text-gray-700 mb-6 sm:mb-8">
                To arrange a free appraisal, please complete the form below.
              </p>

              {state.succeeded && (
                <p className="text-green-700 font-medium mb-4">
                  ✅ Your message has been sent! Our team will contact you shortly.
                </p>
              )}

              <form className="flex flex-col gap-4 sm:gap-5" onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                />

                <select
                  name="listingType"
                  required
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                >
                  <option value="">Listing Type*</option>
                  <option>Sell</option>
                  <option>Rent</option>
                </select>

                <input
                  name="location"
                  type="text"
                  placeholder="Tower or Community"
                  required
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                />

                <textarea
                  name="message"
                  placeholder="Write your message here"
                  rows={5}
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                ></textarea>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-black text-white py-3 rounded font-normal hover:bg-[#D4AF37] transition w-full"
                >
                  {state.submitting ? "Sending..." : "SEND MESSAGE"}
                </button>
              </form>

              <div className="mt-6 sm:mt-8 text-sm text-gray-700">
                By clicking Submit, you agree to our{" "}
                <Link to="/terms" className="text-black hover:text-[#D4AF37] underline">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-black hover:text-[#D4AF37] underline">
                  Privacy Policy
                </Link>.
              </div>

              <div className="flex items-center mt-6 space-x-3">
                {/* <img
                  src="/assets/google-reviews.png"
                  alt="Google Reviews"
                  className="h-7 sm:h-8"
                /> */}
               
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="text-white flex flex-col justify-center p-4 sm:p-6 lg:p-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-4">
               
	Aswan Real Estate Agents in Sharjah


              </h2>

              <p className="mb-6 text-gray-200 text-base sm:text-lg">
                Why list your property with us?
              </p>

              <div className="space-y-6 sm:space-y-8 text-sm sm:text-base">
                <div className="border border-white border-opacity-40 p-5 sm:p-8 rounded">
                  <strong>•	Sharjah-Focused Expertise</strong>
                  <p className="mt-2 text-gray-200">
                    Deep local knowledge ensures your property is positioned correctly within the Sharjah market.
                  </p>
                </div>

                <div className="border border-white border-opacity-40 p-5 sm:p-6 rounded">
                  <strong>•	Thoughtful Property Presentation. </strong>
                  <p className="mt-2 text-gray-200">
                   We market properties with care and attention to detail to maximize genuine interest.
                  </p>
                </div>

                <div className="border border-white border-opacity-40 p-5 sm:p-6 rounded">
                  <strong>•	Clear Communication & Reliable Handling. </strong>
                  <p className="mt-2 text-gray-200">
                    A transparent process with consistent updates from listing to handover.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Valuation;
