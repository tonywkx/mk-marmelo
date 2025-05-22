/* eslint-disable react/prop-types */

import { Link } from "react-router";
import { Title } from "../../utils/Title";
import { ArrowYellow } from "../../utils/ArrowYellow";
import  HeaderMain  from "../layout/HeaderMain";

const HomeSection = () => {
  const handleClick = (e, name) => {
    e.preventDefault();
    const element = document.getElementById(`${name}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="home h-dvh bg-[url('assets/images/home-mobile.jpg')] bg-dark-green sm:bg-[url('assets/images/home.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col h-full">
        <HeaderMain/>
          <div className="flex flex-col justify-between h-full">
            <div className="flex items-center justify-center">
              <h1
                className='flex text-center flex-col text-[clamp(40px,10vw,120px)] font-bold text-yellow  leading-[0.95833] font-greed md:mt-0 mt-3'
              >
                <span className="tracking-[-0.04em]">IT WASN'T A MATCH.</span>
                <span className="tracking-[-0.04em]">IT WAS A MOMENT.</span>
              </h1>
            </div>
            <button
              onClick={(e) => handleClick(e, "waitlist")}
              className="mt-auto mb-7 cursor-pointer text-yellow flex gap-2 items-center self-center"
            >
              JOIN THE WAITLIST
              <ArrowYellow />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
