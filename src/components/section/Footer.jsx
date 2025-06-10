import { Link } from "react-router";
import Palm from "../ui/Palm";
import FooterLogo from "../ui/FooterLogo";

const Footer = () => {
  return (
    <footer className="footer border-t border-dark-green first-line:bg bg-yellow">
      <div className="border-b border-dark-green relative">
        <div className="px-4 sm:pt-11.5 pt-10">
          <div className="flex justify-center flex-col items-center">
            <Palm />
            <div className="sm:mt-8 sm:mb-10 mt-10 mb-18 flex md:gap-2 gap-4.5 flex-col items-center md:max-w-full max-w-[60%]">
              <p className="md:text-base text-sm text-dark-green font-garnett text-center ">
                This is&nbsp;where the social icons would&nbsp;be. But they
                aren&rsquo;t.
              </p>
              <p className="md:text-3xl tracking-[0.02em] text-[40px] font-greed text-dark-green font-bold sm:leading-[0.7] leading-[0.8] text-center">
                OFFLINE BY&nbsp;DESIGN.
              </p>
              <p className="md:text-base text-sm text-dark-green font-garnett text-center">
                LA born and raised. See&nbsp;you&nbsp;out&nbsp;there.
              </p>
            </div>
          </div>
          <div className="flex gap-[2px] flex-col items-center justify-center sm:mb-0 mb-13">
            <p className="text-xs text-dark-green font-garnett">
              We don’t do DMs.{" "}
            </p>
            <p className="text-xs text-dark-green font-garnett">
              But we read every ciao.{" "}
            </p>
            <a
              href="mailto:ciao@marmelo.app"
              className="underline text-xs text-dark-green font-garnett font-medium"
            >
              ciao@marmelo.app
            </a>
          </div>
          <div className="sm:mb-6 mb-3.5">
            <FooterLogo />
          </div>
        </div>
      </div>
      <div className=" px-4 pt-[clamp(32px,4vw,40px)] sm:pb-4 pb-6 flex gap-5 md:gap-1 justify-center md:justify-between items-center flex-col md:flex-row flex-wrap ">
        <p className="md:order-none order-2 text-xs font-normal leading-[1.25 text-dark-green] text-dark-green ">
          &copy;2025 Marmelo Technologies Inc. All rights reserved.
        </p>
        <ul className="flex gap-1 md:gap-10 md:flex-row flex-col items-center ">
          <li>
            <Link
              className="text-xs font-medium leading-[1.25 text-dark-green] hover:border-b text-dark-green border-dark-green "
              to="/privacy-policy"
            >
              PRIVACY POLICY
            </Link>
          </li>
          <li>
            <Link
              className="text-xs font-medium leading-[1.25 text-dark-green] hover:border-b text-dark-green border-dark-green  "
              to="/cookie-policy"
            >
              COOKIE POLICY
            </Link>
          </li>
          <li>
            <Link
              className="text-xs font-medium leading-[1.25 text-dark-green] hover:border-b text-dark-green border-dark-green  "
              to="/terms-service"
            >
              TERMS OF SERVICE
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
