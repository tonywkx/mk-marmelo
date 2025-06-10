import HeaderMain from "../components/layout/HeaderMain";

const AfterSingUp = () => {
  return (
    <div className="home bg-dark-green h-dvh bg-[url('assets/images/singup-mobile.webp')] min-sm:bg-[url('assets/images/singup.webp')] bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col h-full">
        <HeaderMain />
        <div className="flex flex-col h-full items-center justify-center py-20 px-4">
          <div className="sm:mt-auto mt-30 flex flex-col gap-5 items-center">
            <p className="font-garnett text-yellow sm:text-base text-sm">
              Welcome to Marmelo.
            </p>
            <h1 className="leading-[0.8] tracking-[-0.01em] font-greed text-yellow font-bold text-[clamp(87px,15vw,220px)]">
              YOU’RE IN.
            </h1>
            <p className="font-garnett text-yellow text-sm text-center sm:hidden flex flex-col items-center mt-9">
              <span>Someone charming might</span>
              <span>already be two tables away.</span>
            </p>
          </div>
          <div className="mt-auto flex flex-col gap-5 items-center justify-between">
            <p className="font-garnett text-yellow sm:text-base text-xs mb-[clamp(24px,5vw,75px)] text-center sm:block hidden">
              Someone charming might already be two tables away.
            </p>
            <p className="font-garnett text-yellow sm:text-base text-sm flex flex-col items-center">
              <span>And the city’s about to feel different.</span>
              <span>We’ll let you know when it’s time.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterSingUp;
