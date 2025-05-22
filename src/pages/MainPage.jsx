import { useRef, useState, useEffect } from "react";
import Footer from "../components/section/Footer";
import gsap from "gsap";
import { useSearchParams } from "react-router";
import HomeSection from "../components/section/HomeSection";
import About from "../components/section/AboutSection";
import NoSpam from "../components/section/NoSpamSection";
import QuietWaitlistSection from "../components/section/QuietWaitlistSection";

const MainPage = () => {
  const [searchParams,setSearchParams] = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");

    if (scrollTo) {
      setTimeout(() => {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: `#${scrollTo}`,
          ease: "power3.out",
        });
        searchParams.delete("scrollTo");
        setSearchParams(searchParams);
      }, 500);
    }


  }, [searchParams,setSearchParams])
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
