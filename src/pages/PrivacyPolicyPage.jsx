import Footer from "../components/section/Footer";
import { renderParagraph } from "../components/ui/renderParagraph";
import { renderTitle } from "../components/ui/renderTitle";
import { renderList } from "../components/ui/renderList";
import { privacyPolicyData } from "../data/privacyPolicyData";
import { Link } from "react-router";
import Header from "../components/layout/Header"

const PrivacyPolicyPage = () => {
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <Header />
      <main>
        <section id="hero" className="border-y border-dark-green bg-yellow ">
          <div className="px-4 py-4">
            <div className="flex justify-star justify-center">
              <h1 className="font-greed tracking-[-0.02em] flex flex-col text-[clamp(100px,12vw,173px)] font-bold text-dark-green leading-[0.8] max-w-[95%] text-center ">
                <span className="sm:block hidden">MARMELO</span>
                <span>PRIVACY POLICY</span>
              </h1>
            </div>
          </div>
        </section>
        <section id="welcom" className="bg-yellow">
          <p className="text-xs font-medium text-dark-green m-auto max-w-[200px] flex gap-2 pt-4">
            LAST UPDATED ON
            <span className="border-b border-dark-green ">01.06.25</span>
          </p>
          <div className="policy__content">
            <div className=" mb-[clamp(20px,5vw,45px)]">
              <p className="parag">
                Welcome to Marmelo&apos;s Privacy Policy!
              </p>
              <p className="parag">
                At Marmelo, we respect your privacy, and we consider it very important. For that reason, we summarized our commitment to protect your personal data in this document. It is essential that you read it carefully.
              </p>
              <p className="parag">
                This Privacy Policy applies to all personal data that is collected and processed in relation to the provision of Services by&nbsp;
                <span className="font-medium">MARMELO TECHNOLOGIES INC</span>&nbsp;
                with address at 1007 N. ORANGE ST. 4TH FLOOR, SUITE 1382 WILMINGTON, DE 19801 (hereinafter:
                <span className="font-medium">&apos;Marmelo&apos;</span>,
                <span className="font-medium">&apos;we&apos;</span> or <span className="font-medium">&apos;us&apos;</span>), in accordance with our&nbsp;
                <Link className="border-b border-dark-green" to={'/terms-service'}>Terms of Use</Link>.
              </p>
              <p className="parag">
                The purpose of the Privacy Policy is to describe the manners in which we collect, process, and protect any information that you have entrusted us. Whilst you are enjoying our Services via Marmelo App or our Website (as defined in Section 1 (Definitions) of the
                <Link className="border-b border-dark-green" to={'/terms-service/#section-1'}>Terms of Use</Link> ), we collect certain information about you. We will go into more detail below.,
              </p>
              <p className="parag">
                Marmelo stands for full transparency, which is why we keep our Privacy Policy simple as possible. Please make sure that you fully understand and agree with it.,
              </p>
              <p className="parag">
                If you do not agree to this Privacy Policy, please do not access, or otherwise use our Marmelo App or Website. Should you have any inquiries regarding this Privacy Policy, you can contact us at legal@marmelo.app.,
              </p>
              <p className="parag">
                Kindly note that any capitalized but undefined term in this Privacy Policy shall have the meaning given to it in the Section 1 (Definitions) of the <Link className="border-b border-dark-green" to={'/terms-service/#section-1'}>Terms of Use</Link>.
              </p>
            </div>
            <nav>
              <h2 className="font-greed font-medium text-[clamp(35px,5vw,55px)] leading-[1.01562] tracking-[-0.02em] text-dark-green mb-[clamp(16px,5vw,24px)]">
                {privacyPolicyData.nav.title}
              </h2>
              <ul className="list-decimal list-inside flex flex-col gap-1 items-start ">
                {privacyPolicyData.nav.list.map((item, index) => (
                  <li key={index} className="marker:text-dark-green group">
                    <a
                      onClick={(e) => handleClick(e, index + 1)}
                      href="#"
                      className="text-base sm:text-xl font-normal text-dark-green group-hover:border-b border-dark-green transition-all"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
        <section id="section-1" className="bg-yellow">
          <div className="policy__content">
            {renderTitle(privacyPolicyData.definitions.title)}
            <ul className="group/list border-t border-dark-green">
              <li className="border-b border-dark-green">
                <div className="group relative grid gap-4 transition-all grid-cols-6 md:grid-cols-8 sm:gap-8 md:gap-4 py-4 justify-center sm:py-[30px] items-center">
                  <h3 className="leading-[0.9] text-dark-green text-xl md:text-3xl font-greed col-[1_/span_2] md:col-[1_/span_3] justify-self-center ">
                    What do we say?
                  </h3>
                  <h3
                    className={`leading-[0.9] text-dark-green text-xl md:text-3xl font-greed col-[3_/span_4] md:col-[5_/span_3]`}>
                    What do we mean?
                  </h3>
                </div>
              </li>
              {privacyPolicyData.definitions.list.map((item, index) => (
                <li key={index} className="border-b border-dark-green">
                  <div className="group relative grid gap-4 py-7 transition-all grid-cols-6 md:grid-cols-8 sm:gap-8 md:gap-4 justify-center sm:py-[30px]">
                    <h4
                      className="definitions sm:max-w-[80%] text-dark-green text-[clamp(16px,3vw,30px)] font-greed col-[1_/span_2] md:col-[1_/span_3] justify-self-center
                       flex flex-col items-center text-center gap-3 font-medium leading-6"
                      style={{ "--icon-url": `url(${item.icon})` }}>
                      {item.term}
                    </h4>
                    <p className=" text-sm md:text-base font-normal text-dark-green col-[3_/span_4] md:col-[5_/span_4]  ">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section id="section-2" className="bg-yellow">
          <div className="policy__content">
            {renderTitle(privacyPolicyData.сontroller.title)}
            {privacyPolicyData.сontroller.content.map((item, index) =>
              renderParagraph(item, index)
            )}
            <p className="parag">
              In the table of <Link className="border-b border-dark-green" to={'/terms-service/#section-4'}> Section 3.a (Processing – What, why, on what grounds, and for how long?)</Link>, we have disclosed the purpose and legal basis for specific data processing. In the listed cases, Marmelo acts as a data controller.
            </p>
          </div>
        </section>
        <section id="section-3" className="bg-yellow">
          <div className="policy__content">
            {renderTitle(privacyPolicyData.personalData.title)}
            {renderParagraph(
              "We may collect and receive information about you in various ways:"
            )}
            <p className="mb-[clamp(16px,5vw,24px)] text-base font-medium text-dark-green leading-[1.5625]">
              (i) Information you voluntarily provide
            </p>
            {renderList(privacyPolicyData.personalData.listOne)}
            {renderParagraph(
              "We advise and support you to think about your privacy before disclosing any of your personal data publicly. Please note that disclosing sensitive personal data may be open to abuse and misuse, and your choice of sharing them is at your own risk."
            )}
            <h3 className="text-dark-green text-[clamp(20px,5vw,40px)] font-medium leading-[1] pl-4 max-w-[80] my-10">
              3a. Processing – What, Why, on What Grounds, and for how Long?
            </h3>
            {renderParagraph(
              "Marmelo collects and uses your personal data in order to:"
            )}
            {renderList(privacyPolicyData.personalData.listTwo)}
            {renderParagraph(
              "In the table below, you can read about the collection of your personal data in detail."
            )}
            <ul className="sm:flex flex-col gap-5 border-t border-dark-green hidden ">
              <li className="border-b border-dark-green">
                <div className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 py-[11px]">
                  {[
                    "DATA WE COLLECT",
                    "PURPOSE",
                    "LEGAL BASIS",
                    "RETENTION",
                  ].map((item, index) => (
                    <h4
                      key={index}
                      className="text-dark-green text-[20px] sm:text-[30px] font-greed sm:col-span-2 leading-[1.33333] justify-self-center ">
                      {item}
                    </h4>
                  ))}
                </div>
              </li>
              {privacyPolicyData.collectionDetails.map((array, index) => (
                <li key={index} className="border-b border-dark-green px-5">
                  <div className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 pb-[30px]">
                    {array.map((item, index) => (
                      <p
                        key={index}
                        className={`${index === 0 ? 'font-medium' : 'font-normal'} text-base  text-dark-green sm:col-span-2`}>
                        {item}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            <ul className="border-t border-dark-green sm:hidden block">
              {privacyPolicyData.collectionDetails.map((array, index) => (
                <li key={index} className="border-b border-dark-green pt-8">
                  {[
                    "DATA WE COLLECT",
                    "PURPOSE",
                    "LEGAL BASIS",
                    "RETENTION",
                  ].map((item, index) => (
                    <div key={index}>
                      <h4 className="text-dark-green text-x] font-greed leading-[1.33333] font-medium">
                        {item}
                      </h4>
                      {renderParagraph(array[index])}
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section id="section-4" className="bg-yellow">
          <div className="policy__content">
            {renderTitle(privacyPolicyData.selling.title)}
            {renderParagraph(privacyPolicyData.selling.content)}
            <ul className="list-disc list-inside flex flex-col gap-1 sm:ml-4">
              <li className="marker:m-0 marker:p-0">
                <p className="parag mb-0 inline">
                  Sell any kind of personal data.
                </p>
              </li>
              <li className="marker:m-0 marker:p-0">
                <p className="parag mb-0 inline">
                  Disclose this information to marketers or third parties not specified in <a className="border-b border-dark-green" href="#section-6">Section 6</a> (Sharing your Personal Data).
                </p>
              </li>
              <li className="marker:m-0 marker:p-0">
                <p className="parag mb-0 inline">
                  Process your data in any way other than stated in this Privacy Policy.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section id="section-5" className="bg-yellow">
          <div className="policy__content">
            {renderTitle(privacyPolicyData.personal.title)}
            {privacyPolicyData.personal.content.map((item, index) =>
              renderParagraph(item, index)
            )}
          </div>
        </section>
        <section id="section-6" className="bg-yellow">
          <div className="policy__content">
            {renderTitle(privacyPolicyData.sharing.title)}
            {privacyPolicyData.sharing.contentTop.map((item, index) =>
              renderParagraph(item, index)
            )}
            <ul className="flex flex-col gap-5 border-t border-dark-green mb-[clamp(30px,5vw,78px)]">
              <li className="border-b border-dark-green">
                <div className="group relative grid gap-4 transition-all grid-cols-6 sm:gap-8 py-4 items-end">
                  <h4
                    className="text-dark-green text-xl sm:text-[30px] font-greed col-span-2 leading-[1.33333] justify-self-center
                  sm:before:h-[60px] sm:before:w-[70px] sm:before:bg-[url('./assets/images/sharing-3.svg')] before:block before:bg-no-repeat flex flex-col items-center gap-[15px]
                  before:w-[43px] before:h-[50px]  before:bg-[url('./assets/images/sharingMobile-1.svg')] bg-contain "
                  >
                    PROCESSOR
                  </h4>
                  <h4
                    className="text-dark-green text-xl sm:text-[30px] font-greed col-span-2 leading-[1.33333] justify-self-center
                  sm:before:h-[80px] sm:before:w-[70px] sm:before:bg-[url('./assets/images/sharing-2.svg')] before:block before:bg-no-repeat flex flex-col items-center gap-[15px]
                  before:w-[37px] before:h-[52px]  before:bg-[url('./assets/images/sharingMobile-2.svg')] bg-contain "
                  >
                    ROLE
                  </h4>
                  <h4
                    className="text-dark-green text-xl sm:text-[30px] font-greed col-span-2 leading-[1.33333] justify-self-center
                  sm:before:h-[60px] sm:before:w-[50px] sm:before:bg-[url('./assets/images/sharing-1.svg')] before:block before:bg-no-repeat flex flex-col items-center gap-[15px]
                  before:w-[30px] before:h-[50px]  before:bg-[url('./assets/images/sharingMobile-3.svg')] before:bg-contain"
                  >
                    SEAT
                  </h4>
                </div>
              </li>
              {privacyPolicyData.sharing.tableData.map((array, index) => (
                <li key={index} className="border-b border-dark-green">
                  <div className="group relative grid gap-4 transition-all grid-cols-6 sm:gap-10 pb-[20px] ">
                    {array.map((item, index) => (
                      <p
                        key={index}
                        className="flex items-center text-sm sm:text-base font-normal text-dark-green col-span-2 justify-self-center text-center sm:max-w-[80%] "
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            {renderParagraph(privacyPolicyData.sharing.listData.title)}
            {renderList(privacyPolicyData.sharing.listData.content)}
            {privacyPolicyData.sharing.contentBottom.map((item, index) =>
              renderParagraph(item, index)
            )}
          </div>
        </section>
        <section id="section-7" className="bg-yellow">
          <div className="policy__content">
            {renderTitle(privacyPolicyData.sevenItem.title)}
            {privacyPolicyData.sevenItem.content.map((item, index) =>
              renderParagraph(item, index)
            )}
          </div>
        </section>
        <section id="section-8" className="bg-yellow">
          <div className="policy__content">
            {renderTitle(privacyPolicyData.keepData.title)}
            {privacyPolicyData.keepData.content.map((item, index) =>
              renderParagraph(item, index)
            )}
          </div>
        </section>
        <section id="section-9" className="bg-yellow">
          <div className="policy__content">
            {renderTitle(privacyPolicyData.userRights.title)}
            {renderParagraph(privacyPolicyData.userRights.content)}
            <ul className="flex flex-col sm:gap-8 gap-0">
              {privacyPolicyData.userRights.rights.map((rights, index) => (
                <li key={index}>
                  <div
                    className="rights grid grid-cols-6 gap-[13px] sm:gap-[30px] justify-between"
                    style={{ "--icon-url": `url(${rights.icon})` }}>
                    <div className="col-[2_/span_6]">
                      <h4 className="text-dark-green text-xl sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                        {rights.title}
                      </h4>
                      {rights.contentTop.map((item, index) =>
                        renderParagraph(item, index)
                      )}
                      {rights.list && renderList(rights.list)}
                      {rights.contentButtom &&
                        renderParagraph(rights.contentButtom)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section id="section-10" className="bg-yellow">
          <div className="policy__content">
            {renderTitle(privacyPolicyData.noties.title)}
            {privacyPolicyData.noties.content.map((item, index) =>
              renderParagraph(item, index)
            )}
            <p className="parag">
              Any capitalized but undefined term in this CCPA Notice shall have the meaning given to it in the CCPA, <Link className="border-b border-dark-green" to={'/terms-service/#section-1'}>Definitions</Link> section of the Terms of Use, Privacy Policy and <Link className="border-b border-dark-green" to={'/cookie-policy'}>Cookie Policy</Link>.
            </p>
            <p className="parag">
              This CCPA Notice makes an integral part of our
              &nbsp;<Link className="border-b border-dark-green" to={'/privacy-policy'}>Privacy Policy</Link> and
              &nbsp;<Link className="border-b border-dark-green" to={'/terms-service'}>Terms of Use.</Link>
            </p>
            <div className="mb-5">
              <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                Information we collect
              </h4>
              <p className="parag">
                For more details about the personal information we have collected over the last 12 months please see <Link to={'/terms-service/#section-4'} className="border-b border-dark-green"> Section 3a (Processing – What, why, on what grounds, and for how long?)</Link>.
              </p>
              <p className="parag">
                The categories of personal information that are listed in Section 3a (Processing – What, why, on what grounds, and for how long?) are obtained by Marmelo in accordance with Section 3a (Processing – What, why, on what grounds, and for how long?).
              </p>
            </div>
            <div className="mb-5">
              <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                Use of Personal Information
              </h4>
              <p className="parag">
                Marmelo collects personal information for the purposes described in Section 3a (Processing – What, why, on what grounds, and for how long?).
              </p>
            </div>
            <div className="mb-5">
              <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                Sharing Personal Information
              </h4>
              <p className="parag">
                Marmelo shares personal information with the categories of third parties described in <a href="#section-6" className="border-b border-dark-green">Section 6 (Sharing your personal data)</a> of the Privacy Policy.
              </p>
              <p className="parag">
                Please note that we use third-party cookies for advertising purposes as further described in our <Link to={'/cookie-policy'} className="border-b border-dark-green">Cookie Policy</Link> .
              </p>
            </div>
            {privacyPolicyData.noties.sections.map((section, index) => (
              <div key={index}>
                <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                  {section.subtitle}
                </h4>
                {section.content.map((item, index) =>
                  renderParagraph(item, index)
                )}
                {section.list && renderList(section.list)}
                {section.subsections &&
                  section.subsections.map((subsection, index) => (
                    <div key={index} className="sm:ml-4">
                      <h5 className="text-base leading-[1.5625] mb-5 font-medium text-dark-green">
                        {subsection.head}
                      </h5>
                      {subsection.descrTop.map((item, index) =>
                        renderParagraph(item, index)
                      )}
                      {subsection.list && renderList(subsection.list)}
                      {renderParagraph(subsection.descrButton)}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </section>
        <section id="section-11" className="bg-yellow">
          <div className="policy__content ">
            {renderTitle(privacyPolicyData.breach.title)}
            {renderParagraph(privacyPolicyData.breach.content)}
            {renderList(privacyPolicyData.breach.list)}
          </div>
        </section>
        <section id="section-12" className="bg-yellow">
          <div className="policy__content">
            {renderTitle(privacyPolicyData.changes.title)}
            {renderParagraph(privacyPolicyData.changes.content)}
          </div>
        </section>
        <section id="section-13" className="bg-yellow">
          <div className="policy__content pb-[clamp(120px,5vw,230px)]">
            {renderTitle("13. Contact us")}
            <p className="parag">
              Should you have any inquiries, or you wish to exercise any of the rights of a data subject stipulated in&nbsp;
              <a className="border-b border-dark-green" href="#section-9">Section 9 (Your Rights)</a> or&nbsp;
              <a className="border-b border-dark-green" href="#section-10">Section 10 (California Residents Privacy Notice)</a>,
              please contact us via the &apos;Contact Support&apos; button in Settings, or via any of the following addresses:
            </p>
            <address className="flex flex-col not-italic text-base text-dark-green justify-start mb-4">
              <span className="font-medium">MARMELO TECHNOLOGIES, INC</span>
              <span>1007 N. ORANGE ST. </span>
              <span>4TH FLOOR, SUITE 1382</span>
              <span>WILMINGTON, DE 19801</span>
            </address>
            <p className="text-base text-dark-green">
              Email:&nbsp;
              <a
                className=" hover:border-b border-dark-green"
                href="mailto:legal@marmelo.app">
                legal@marmelo.app
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer className="border-t border-dark-green" />
    </>
  );
};

export default PrivacyPolicyPage;
