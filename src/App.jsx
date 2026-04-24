import { Routes, Route, Navigate } from "react-router-dom"; // Added Navigate for SEO redirects
import React, { useState, useEffect, lazy, Suspense } from "react";
import Loader from "./components/Loader"; 
import AOS from "aos";
import "aos/dist/aos.css";

// Static components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQSection";
import SocialMedia from "./components/SocialMedia";
import WhatsAppSticky from "./components/WhatsAppSticky";
import { Toaster } from "react-hot-toast";

// Page Components
import HospitalityAviationManagement from "./page/cabincrewtraning/HospitalityAviationManagement";
import AviationTravelHospital from "./page/cabincrewtraning/AviationTravelHospital";
import HospitalTravelCoustomer from "./page/cabincrewtraning/HospitalTravelCoustomer";
import AdvanceCertifivate from "./page/cabincrewtraning/AdvanceCertifivate";

// ✅ Lazy-loaded pages
const Home = lazy(() => import("./page/Home"));
const AboutUs = lazy(() => import("./page/AboutUs"));
const PilotTraining = lazy(() => import("./page/PilotTraining"));
const CPLGroundClasses = lazy(() => import("./page/PilotTraning/CPLGroundClasses"));
const ATPLGroundClasses = lazy(() => import("./page/PilotTraning/ATPLGroundClasses"));
const ATPLOralViva = lazy(() => import("./page/PilotTraning/ATPLOralViva"));
const RTRRadioTelephonyRestricted = lazy(() => import("./page/PilotTraning/RTRRadioTelephonyRestricted"));
const CadetPilotProgram = lazy(() => import("./page/PilotTraning/CadetPilotProgram"));
const AirlinesPreparationCourse = lazy(() => import("./page/PilotTraning/AirlinesPreparationCourse"));
const FLCRecencyFlying = lazy(() => import("./page/PilotTraning/FLCRecencyFlying"));
const ClassMedical = lazy(() => import("./page/PilotTraning/ClassMedical"));
const TRIncludingEndorsement = lazy(() => import("./page/PilotTraning/TRIncludingEndorsement"));
const CabinCrew = lazy(() => import("./page/CabinCrew"));
const CounsellingReappearance = lazy(() => import("./page/cabincrewtraning/CounsellingReappearance"));
const ServicesAndExpertise = lazy(() => import("./page/ServicesAndExpertise"));
const ServiceDetail = lazy(() => import("./page/ServiceDetail"));
const Blogs = lazy(() => import("./page/Blogs"));
const PostDetail = lazy(() => import("./page/PostDetail"));
const MakeAppointment = lazy(() => import("./page/MakeAppointment"));
const Contact = lazy(() => import("./page/Contact"));
const PrivacyPolicy = lazy(() => import("./page/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./page/TermsAndConditions"));
const NotFoundPage = lazy(() => import("./page/404Page"));

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />

      <Suspense fallback={<Loader />}>
        <Routes>
          {/* 🛑 SEARCH CONSOLE FIXES: Purane dead links ko redirect karein */}
          {/* Ye aapke Soft 404 errors (portfolio, category, tag, feed) ko khatam karega */}
          <Route path="/portfolio" element={<Navigate to="/services-expertise" replace />} />
          <Route path="/category/*" element={<Navigate to="/blog" replace />} />
          <Route path="/tag/*" element={<Navigate to="/blog" replace />} />
          <Route path="/feed" element={<Navigate to="/" replace />} />
          <Route path="/testimonial/*" element={<Navigate to="/" replace />} />
          
          {/* Date based links (jo aapke screenshot mein hain) unhe home par bhejein */}
          <Route path="/2019/*" element={<Navigate to="/" replace />} />
          <Route path="/2020/*" element={<Navigate to="/" replace />} />

          {/* 🟢 Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/pilot-training" element={<PilotTraining />} />
          <Route path="/cpl-ground-classes" element={<CPLGroundClasses />} />
          <Route path="/atpl-ground-classes" element={<ATPLGroundClasses />} />
          <Route path="/atpl-oral-viva" element={<ATPLOralViva />} />
          <Route path="/rtr-radio-telephony-restricted" element={<RTRRadioTelephonyRestricted />} />
          <Route path="/cadet-pilot-program" element={<CadetPilotProgram />} />
          <Route path="/airlines-preparation-course" element={<AirlinesPreparationCourse />} />
          <Route path="/flc-recency-flying" element={<FLCRecencyFlying />} />
          <Route path="/tr-including-endorsement" element={<TRIncludingEndorsement />} />
          <Route path="/class-12-medical" element={<ClassMedical />} />
          <Route path="/cabin-crew-training" element={<CabinCrew />} />

          <Route path="/hospitality-aviation-mangement" element={<HospitalityAviationManagement />} />
          <Route path="/aviation-hospitality-travel-management" element={<AviationTravelHospital />} />
          <Route path="/hospitality-travel-customer-service" element={<HospitalTravelCoustomer />} />
          <Route path="/advance-certificate-course" element={<AdvanceCertifivate />} />
          <Route path="/counselling-for-reappearance" element={<CounsellingReappearance />} />

          <Route path="/services-expertise" element={<ServicesAndExpertise />} />
          
          {/* Dynamic route ko hamesha niche rakhein */}
          <Route path="/:slug" element={<ServiceDetail />} />

          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:slug" element={<PostDetail />} />

          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-condition" element={<TermsAndConditions />} />
          <Route path="/make-appointment" element={<MakeAppointment />} />
          
          {/* Catch-all 404 page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <SocialMedia />
      <WhatsAppSticky />
      <FAQSection />
      <Footer />
    </>
  );
};

export default App;