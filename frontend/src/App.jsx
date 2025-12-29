import { Route, Routes } from "react-router-dom";

import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MarketReport from "./components/MarketReport";
import Services from "./components/Services";
import TopProperties from "./components/TopProperties";

import PropertyDetails from "./components/PropertyDetails";
import ReportPage from "./components/ReportPage";
import TopPropertyDetails from "./components/topPropertyDetails";

import Privacy from "./pages/Privacy";
import Sitemap from "./pages/Sitemap";
import Terms from "./pages/Terms";
import './styles/custom.css';
import WhyChooseEspace from "./pages/WhyChooseEspace";
// import OffPlanProperties from "./pages/OffPlanProperties";
// import OffPlanInfo from "./pages/OffPlanInfo";   

import ForRent from "./pages/ForRent";
import ForSale from "./pages/ForSale";
import PropertyInfoRent from "./pages/PropertyInfoRent";
import PropertyInfoSale from "./pages/PropertyInfoSale";

import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";

import TeamPage from "./components/TeamPage";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import PropertyForm from "./pages/admin/PropertyForm";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


const App = () => {
  return (
    <>
      <Header />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <MarketReport />
              <TopProperties />
              <AboutSection />
              <Services />
              <Footer />
            </>
          }
        />

        {/* TEAM PAGE */}
        <Route path="/team" element={<TeamPage />} />

        {/* PROPERTY DETAILS */}
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/top-property/:id" element={<TopPropertyDetails />} />

        {/* REPORT */}
        <Route path="/report-page" element={<ReportPage />} />

        {/* STATIC PAGES */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/sitemap" element={<Sitemap />} />

        {/* WHY CHOOSE US */}
        <Route path="/why-espace" element={<WhyChooseEspace />} />

        {/* OFFPLAN LIST + DETAILS
      <Route path="/offplan" element={<OffPlanProperties />} />
<Route path="/offplan/:id" element={<OffPlanInfo />} /> */}



        {/* FOR SALE / RENT */}
        <Route path="/for-sale" element={<ForSale />} />
        <Route path="/for-rent" element={<ForRent />} />

        {/* PROPERTY INFO */}
       <Route path="/property-info-rent/:id" element={<PropertyInfoRent />} />

        <Route path="/property-info-sale/:id" element={<PropertyInfoSale />} />

        {/* OTHER PAGES */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-property/:type" element={<PropertyForm />} />
        <Route path="/admin/edit-property/:type/:id" element={<PropertyForm />} />

        {/* 404 */}
        <Route path="*" element={<p className="text-center mt-20">Page Not Found</p>} />
      </Routes>
    </>
  );
};

export default App;
