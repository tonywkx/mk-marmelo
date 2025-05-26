import { Routes, Route } from "react-router";
import MainPage from "./pages/MainPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import TermsService from "./pages/TermsService";
import AfterSingUp from "./pages/AfterSingUp";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="/terms-service" element={<TermsService />} />
        <Route path="/after-singup" element={<AfterSingUp />} />
      </Routes>
    </>
  );
}

export default App;
