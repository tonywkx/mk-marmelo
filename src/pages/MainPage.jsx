import Footer from "../components/section/Footer";
import HomeSection from "../components/section/HomeSection";
import About from "../components/section/AboutSection";
import NoSpam from "../components/section/NoSpamSection";
import QuietWaitlistSection from "../components/section/QuietWaitlistSection";

const MainPage = () => {
  return (
    <>
      <HomeSection />
      <About />
      <QuietWaitlistSection />
      <NoSpam />
      <Footer />
    </>
  );
};

export default MainPage;
