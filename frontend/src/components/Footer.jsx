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
    <footer className="bg-black text-white py-16">

      <div className="w-full border-t border-gray-800 mb-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT SECTION */}
        <div>
          <h2 className="text-3xl font-light mb-6">
            Stay <span className="italic font-['Playfair_Display']">in the loop</span>
          </h2>

          <form 
            onSubmit={handleSubscribe}
            className="border border-gray-700 flex items-center justify-between px-4 py-3 w-full max-w-xl mb-3"
          >
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent text-gray-300 outline-none w-full"
            />
            <button
              type="submit"
              className="uppercase tracking-widest text-sm transition duration-300 hover:text-red-600 font-semibold"
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

          <p className="text-gray-500 text-sm mt-3">
            By clicking Subscribe, you agree to our{" "}
            <a href="/terms" className="underline hover:text-red-600">Terms</a>{" "}
            and{" "}
            <a href="/privacy" className="underline hover:text-red-600">Privacy Policy</a>.
          </p>
        </div>
        

        {/* RIGHT SECTION */}
        <div className="md:text-right">
          <h2 className="text-3xl font-light mb-6">
            Stay <span className="italic font-['Playfair_Display']">connected</span>
          </h2>

          <div className="flex md:justify-end gap-6 text-xl">
            <FaTwitter className="cursor-pointer transition hover:text-red-600 hover:scale-110" />
            <FaFacebookF className="cursor-pointer transition hover:text-red-600 hover:scale-110" />
            <FaYoutube className="cursor-pointer transition hover:text-red-600 hover:scale-110" />
            <FaInstagram className="cursor-pointer transition hover:text-red-600 hover:scale-110" />
            <FaLinkedinIn className="cursor-pointer transition hover:text-red-600 hover:scale-110" />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-col md:flex-row items-center justify-between">
        
        {/* LEFT: YOUR LOGO */}
        <img 
          src="/assets/logo2.jpg" 
          alt="Aswan Real Estate Logo" 
          className="h-20 mb-6 md:mb-0"
        />

        {/* CENTER LINKS */}
        <div className="flex flex-col md:flex-row md:gap-6 text-gray-400 text-sm text-center md:text-left mb-6 md:mb-0">
          <a href="/terms" className="hover:text-red-600">Terms & Conditions</a>
          <a href="/privacy" className="hover:text-red-600">Privacy Policy</a>
          <a href="/sitemap" className="hover:text-red-600">Sitemap</a>
        </div>

        {/* RIGHT: DESIGN CREDIT */}
        <div className="text-gray-600 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Aswan Real Estate • Designed by <span className="text-red-600 font-semibold">ActalDigital</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
