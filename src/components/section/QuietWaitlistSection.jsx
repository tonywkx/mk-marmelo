import React from "react";
import  Title  from "../ui/Title";
import { useNavigate } from "react-router";
import appImage from '../../assets/images/app.png'
import appMobileImage from '../../assets/images/app-mobile.png'

const QuietWaitlistSection = () => {
  const navigate = useNavigate();

  const handlerOnClick = (e) => {
    e.preventDefault();
    navigate("/after-singup")
  };

  return (
    <section id="waitlist" className="bg-yellow">
      <div className="container">
        <div className="py-15">
          <Title
            titles={["WANT IN?", "WE'LL KEEP IT\u00A0QUIET.", "UNTIL IT'S\u00A0TIME."]}
            className="text-dark-green font-black uppercase mb-10"
          />
          <p className="text-dark-green font-medium md:text-lg text-base mb-10 text-center">
            Free for the first 500. For good.
          </p>
          <div className=" flex justify-center items-center mb-[90px]">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={appMobileImage}
              />
              <img
                className="md:max-w-[600px]"
                src={appImage}
                alt="App preview"
              />
            </picture>
          </div>
          <div className="flex justify-center items-center w-full mb-12">
            <form className="flex justify-stretch flex-col sm:w-[500px] w-[250px]">
              <div className="flex flex-col gap-2 mb-5">
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="py-4 px-7 placeholder:text-dark-green/70 font-garnett border-none text-xs rounded-full bg-white"
                />
                <input
                  type="tel"
                  placeholder="PHONE"
                  className="py-4 px-7 placeholder:text-dark-green/70 font-garnett border-none text-xs rounded-full bg-white"
                />
              </div>
              <p className="flex font-garnett flex-col text-dark-green md:text-sm text-[10px] text-center mb-10">
                <span>We'll text a few early birds with a VIP invite to</span>
                <span>our low-key legendary launch party.</span>
              </p>
              <button
                type="button"
                className="bg-dark-green font-garnett text-yellow self-center  font-medium text-xs  rounded-full px-14 py-5 cursor-pointer mt-2"
                onClick={handlerOnClick}
              >
                JOIN THE WAITLIST
              </button>
            </form>
          </div>
          <div className="flex justify-center flex-col items-center">
            <p className="text-dark-green font-bold md:text-[40px] text-3xl font-greed">
              27
            </p>
            <p className="text-dark-green font-medium md:text-3xl text-xl font-greed">
              people have already joined quietly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuietWaitlistSection;
