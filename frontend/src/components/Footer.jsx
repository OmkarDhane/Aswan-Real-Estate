import { 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    try {
      const res = await fetch("https://formspree.io/f/xdkqzdbk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Email: email })
      });
      if (res.ok) {
        setStatus("SUCCESS");
        setEmail("");
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <footer className="bg-black text-white py-12 sm:py-16">

      {/* TOP BORDER */}
      <div className="w-full border-t border-gray-800 mb-10"></div>

      {/* SUBSCRIBE & SOCIAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* SUBSCRIBE FORM */}
        <div className="flex flex-col">
          <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6">
            Stay <span className="italic font-['Playfair_Display']">in the loop</span>
          </h2>

          <form 
  onSubmit={handleSubscribe}
  className="flex flex-col sm:flex-row items-stretch sm:items-center border border-gray-700 rounded-lg overflow-hidden w-full max-w-xl mb-3"
>
  <input
    type="email"
    placeholder="Email Address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="bg-transparent text-gray-300 outline-none w-full px-4 py-3 sm:py-2 mb-2 sm:mb-0 sm:mr-2"
  />
  <button
    type="submit"
    className="bg-red-600 hover:bg-red-700 text-white uppercase tracking-widest text-sm sm:text-base font-semibold px-4 sm:px-6 py-3 w-full sm:w-auto transition"
  >
    Subscribe
  </button>
</form>


          {status === "SUCCESS" && (
            <p className="text-green-400 text-sm mt-1">Thank you for subscribing!</p>
          )}
          {status === "ERROR" && (
            <p className="text-red-400 text-sm mt-1">Something went wrong. Try again.</p>
          )}

          <p className="text-gray-500 text-xs sm:text-sm mt-3">
            By clicking Subscribe, you agree to our{" "}
            <a href="/terms" className="underline hover:text-red-600">Terms</a>{" "}
            and{" "}
            <a href="/privacy" className="underline hover:text-red-600">Privacy Policy</a>.
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex md:justify-end items-center gap-4 sm:gap-6 mt-6 md:mt-0">
          <FaTwitter className="cursor-pointer transition hover:text-red-600 hover:scale-110 text-2xl sm:text-3xl" />
          <FaFacebookF className="cursor-pointer transition hover:text-red-600 hover:scale-110 text-2xl sm:text-3xl" />
          <FaYoutube className="cursor-pointer transition hover:text-red-600 hover:scale-110 text-2xl sm:text-3xl" />
          <FaInstagram className="cursor-pointer transition hover:text-red-600 hover:scale-110 text-2xl sm:text-3xl" />
          <FaLinkedinIn className="cursor-pointer transition hover:text-red-600 hover:scale-110 text-2xl sm:text-3xl" />
        </div>
      </div>

      {/* BOTTOM: LOGO + LINKS + CREDIT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">

        {/* LOGO */}
        <img 
          src="/assets/logo2.jpg" 
          alt="Aswan Real Estate Logo" 
          className="h-16 sm:h-20"
        />

        {/* LINKS */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-gray-400 text-xs sm:text-sm text-center sm:text-left">
          <a href="/terms" className="hover:text-red-600">Terms & Conditions</a>
          <a href="/privacy" className="hover:text-red-600">Privacy Policy</a>
          <a href="/sitemap" className="hover:text-red-600">Sitemap</a>
        </div>

        {/* DESIGN CREDIT */}
        <div className="text-gray-600 text-xs sm:text-sm text-center sm:text-right">
          © {new Date().getFullYear()} Aswan Real Estate • Designed by <a href="https://actaldigital.com" className="text-red-600 font-semibold">ActalDigital</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
