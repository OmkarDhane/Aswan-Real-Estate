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
        style={{ backgroundImage: "url('/assets/valuation.webp')" }}
      >
        <div className="bg-black bg-opacity-40 min-h-screen w-full">
          <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* FORM SIDE */}
            <div className="bg-white/80 backdrop-blur-md p-12 rounded-lg shadow-xl">
              <Link
                to="/"
                className="text-white bg-black bg-opacity-60 px-4 py-2 rounded inline-block mb-6 hover:bg-opacity-80 transition"
              >
                ← Back to Home
              </Link>

              <h1 className="text-3xl font-normal mb-4">
                Request a Free Property Valuation
              </h1>

              <p className="text-gray-700 mb-8">
                To arrange a free appraisal, please complete the form below.
              </p>

              {/* SUCCESS MESSAGE */}
              {state.succeeded && (
                <p className="text-green-700 font-medium mb-4">
                  ✅ Your message has been sent! Our team will contact you shortly.
                </p>
              )}

              {/* FORM */}
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="border border-gray-300 rounded px-4 py-2"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="border border-gray-300 rounded px-4 py-2"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="border border-gray-300 rounded px-4 py-2"
                />

                <select
                  name="listingType"
                  required
                  className="border border-gray-300 rounded px-4 py-2"
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
                  className="border border-gray-300 rounded px-4 py-2"
                />

                <textarea
                  name="message"
                  placeholder="Write your message here"
                  rows={5}
                  className="border border-gray-300 rounded px-4 py-2"
                ></textarea>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-red-600 text-white py-3 rounded font-normal hover:bg-red-700 transition"
                >
                  {state.submitting ? "Sending..." : "SEND MESSAGE"}
                </button>
              </form>

              <div className="mt-8 text-sm text-gray-700">
                By clicking Submit, you agree to our{" "}
                <Link to="/terms-conditions" className="text-red-600 underline">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacy-policy" className="text-red-600 underline">
                  Privacy Policy
                </Link>.
              </div>

              <div className="flex items-center mt-6 space-x-3">
                <img src="/assets/google-reviews.png" alt="Google Reviews" className="h-8" />
                <span className="text-gray-900 text-sm font-medium">
                  Rated 4.7/5 from 1047+ Customer Reviews
                </span>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="text-white flex flex-col justify-center p-6 lg:p-12">
              <h2 className="text-5xl font-normal mb-4">
                Espace Real Estate Agents in Dubai
              </h2>

              <p className="mb-6 text-gray-200 text-lg">
                Why list your property with us?
              </p>

              <div className="space-y-10 text-base">
                <div className="border border-white border-opacity-40 p-8 rounded">
                  <strong>90,000 registered buyers & tenants</strong>
                  <p className="mt-2 text-gray-200">
                    Your property gets maximum visibility.
                  </p>
                </div>

                <div className="border border-white border-opacity-40 p-6 rounded">
                  <strong>Award-Winning Agency</strong>
                  <p className="mt-2 text-gray-200">
                    Leading real estate experts in Dubai since 2009.
                  </p>
                </div>

                <div className="border border-white border-opacity-40 p-6 rounded">
                  <strong>Expert Knowledge</strong>
                  <p className="mt-2 text-gray-200">
                    200+ RERA-certified brokers to assist you.
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
