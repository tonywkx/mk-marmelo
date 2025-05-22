import Footer from "../components/section/Footer"
import Header from "../components/layout/Header"
import { termsOfServiceData } from "../data/termsServiceData"
import { renderParagraph } from "../utils/renderParagraph"
import { renderTitle } from "../utils/renderTitle"
import { renderList } from "../utils/renderList"
import { Link } from "react-router"

const TermsService = () => {
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
        <section id="hero" className=" border-y border-dark-green bg-yellow">
          <div className="px-1 sm:px-4 py-4">
            <div className="flex justify-star justify-center">
              <h1 className="font-greed tracking-[-0.02em] flex flex-col text-[clamp(100px,12vw,173px)] font-bold text-dark-green leading-[0.8] sm:max-w-[70%] text-center ">
                TERMS OF SERVICE
              </h1>
            </div>
          </div>
        </section>
        <section id="welcom" className="bg-yellow">
          <div className="flex justify-center">
            <p className="text-xs font-medium text-dark-green m-auto inline-block  mt-4 max-w-[60%] text-center mx-auto">
              THESE TERMS OF USE ARE EFFECTIVE AS&nbsp;
              <span className="border-b border-dark-green inline">05.12.24.</span>
            </p>
          </div>
          <div className="terms__content">
            <div>
              <p className="parag">Dear User, welcome to Marmelo Terms of Use!</p>
              <p className="parag">
                By creating an Account in Marmelo App, you confirm that you are familiar with and accept these Terms of Use, along with our&nbsp;
                <Link className="border-b border-dark-green" to={'/privacy-policy'}>Privacy Policy</Link>&nbsp;and &nbsp;
                <Link className="border-b border-dark-green" to={'/cookie-policy'}>Cookie Policy</Link>.
                That way, you enter into a legally binding contract with MARMELO TECHNOLOGIES INC with address at 1007 N ORANGE ST, 4TH FLOOR, SUITE 1382 WILMINGTON, DE 19801. Before you become a member of the Marmelo online community, we strongly suggest you read these Terms of Use, in order to get familiar with the rights and obligations you have as a User of Marmelo App. In case you find anything in this document you do not agree with, please stop using Marmelo App immediately.
              </p>
              <p className="parag">
                To discover more about how we process your personal data, please visit our&nbsp; <Link className="border-b border-dark-green" to={'/privacy-policy'}>Privacy Policy</Link> and <Link className="border-b border-dark-green" to={'/cookie-policy'}>Cookie Policy</Link>.
              </p>
              <p className="parag">
                Click here to download these Terms of Use in pdf.
              </p>
            </div>
            <nav>
              <ul className="flex flex-col gap-1 items-start ">
                {termsOfServiceData.nav.list.map((item, index) => (
                  <li key={index} className="marker:text-dark-green group">
                    <a
                      onClick={(e) => handleClick(e, index + 1)}
                      href="#"
                      className="text-base sm:text-xl font-normal text-dark-green group-hover:border-b border-dark-green transition-all">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
        <section id="section-1" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.definitions.title)}
            {termsOfServiceData.definitions.content.map((item, index) =>
              renderParagraph(item, index)
            )}
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
              {termsOfServiceData.definitions.list.map((item, index) => (
                <li key={index} className="border-b border-dark-green">
                  <div className="group relative grid gap-4 py-7 transition-all grid-cols-6 md:grid-cols-8 sm:gap-8 md:gap-4 justify-center sm:py-[30px] md:items-center">
                    <h4
                      className={`${index === 6 ? "definitionsLogoTerms" : "definitionsTerms"} sm:max-w-[80%] text-dark-green text-[clamp(16px,3vw,30px)] font-greed col-[1_/span_2] md:col-[1_/span_3] justify-self-center
                       flex flex-col items-center text-center gap-3 font-medium leading-6`}
                      style={{ "--icon-url": `url(${item.icon})` }}>
                      {item.term}
                    </h4>
                    <p className=" text-sm md:text-base font-normal text-dark-green col-[3_/span_4] md:col-[5_/span_4] ">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section id="section-2" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.eligibility.title)}
            {termsOfServiceData.eligibility.content.map((item, index) =>
              renderParagraph(item, index)
            )}
          </div>
        </section>
        <section id="section-3" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.acoount.title)}
            <div>
              <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                General
              </h4>
              <p className="parag">
                You start using Marmelo App by creating an Account, provided that all the conditions are satisfied (such as the condition regarding your age, described under&nbsp;
                <a className="border-b border-dark-green" href="#section-2">Section 2 (Eligibility))</a>.
              </p>
              <p className="parag">
                There are two ground rules when it comes to Accounts:
              </p>
              {renderList([
                "Each User may have only one Account.",
                "Account can be used solely by the person whose information is entered and/or uploaded to the Account. In order to assist us in maintaining the accuracy of Services and ensuring that matches between Users are based on true and reliable information, you are strictly forbidden to allow any other person to use your Account."
              ])}
            </div>
            {termsOfServiceData.acoount.sectionsTop.map((section, index) =>
              <div key={index}>
                <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                  {section.subtitle}
                </h4>
                {section.content.map((item, index) =>
                  renderParagraph(item, index)
                )}
                {section.list && renderList(section.list)}
                {section.contentCenter && section.contentCenter.map((item, index) =>
                  renderParagraph(item, index)
                )}
                {section.listEnd && renderList(section.listEnd)}
                {section.contentEnd && section.contentEnd.map((item, index) =>
                  renderParagraph(item, index)
                )}
              </div>
            )}
            <div id="section-4">
              <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                {termsOfServiceData.acoount.section3a.subtitle}
              </h4>
              {termsOfServiceData.acoount.section3a.content.map((item, index) =>
                renderParagraph(item, index)
              )}
            </div>
            <div id="section-5">
              <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                {termsOfServiceData.acoount.section3b.subtitle}
              </h4>
              {termsOfServiceData.acoount.section3b.content.map((item, index) =>
                renderParagraph(item, index)
              )}
            </div>
            {termsOfServiceData.acoount.sectionsBottom.map((section, index) =>
              <div key={index}>
                <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                  {section.subtitle}
                </h4>
                {section.content.map((item, index) =>
                  renderParagraph(item, index)
                )}
                {section.list && renderList(section.list)}
                {section.contentCenter && section.contentCenter.map((item, index) =>
                  renderParagraph(item, index)
                )}
                {section.listEnd && renderList(section.listEnd)}
                {section.contentEnd && section.contentEnd.map((item, index) =>
                  renderParagraph(item, index)
                )}
              </div>
            )}
          </div>
        </section>
        <section id="section-6" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.service.title)}
            {termsOfServiceData.service.sections.map((section, index) => (
              <div key={index}>
                <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                  {section.subtitle}
                </h4>
                {section.content.map((item, index) =>
                  renderParagraph(item, index)
                )}
              </div>
            ))}
          </div>
        </section>
        <section id="section-7" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.content.title)}
            <h4 id="section-8" className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
              {termsOfServiceData.content.section5a}
            </h4>
            <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
              Responsibility for User Content
            </h4>
            <p className="parag">
              Each User is solely responsible for any User Content (including User Content posted on our social media). This means that Marmelo has no liability or may not otherwise be found responsible for any damage, loss, or other harmful consequence that may arise from User Content or its interpretation by any person.
              Truthfulness and accuracy. You are obliged to share only information that is true and accurate. This is particularly important to us and we may remove any User Content proven to be wrong, incorrect or inaccurate. That way, we maintain the quality of our Services and consequently make our Users satisfied with Marmelo App. You may find out more about the rules regarding the User Content in&nbsp;
              <a className="border-b border-dark-green" href="#section-9">Section 6 (Our Code of Conduct)</a>.
            </p>
            {termsOfServiceData.content.sections.map((section, index) => (
              <div key={index}>
                <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                  {section.subtitle}
                </h4>
                {section.content && section.content.map((item, index) =>
                  renderParagraph(item, index)
                )}
              </div>
            ))}
            <div id="section-9">
              <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                {termsOfServiceData.content.section5b.subtitle}
              </h4>
              {renderParagraph(termsOfServiceData.content.section5b.content)}
            </div>
            <div id="section-10">
              <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                {termsOfServiceData.content.section5c.subtitle}
              </h4>
              {renderParagraph(termsOfServiceData.content.section5c.content)}
            </div>
          </div>
        </section>
        <section id="section-11" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.codeConduc.title)}
            {termsOfServiceData.codeConduc.content.map((item, index) =>
              renderParagraph(item, index)
            )}
            {renderList(termsOfServiceData.codeConduc.list)}
            {termsOfServiceData.codeConduc.contentEnd.map((item, index) =>
              renderParagraph(item, index)
            )}
          </div>
        </section>
        <section id="section-12" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.property.title)}
            {termsOfServiceData.property.content.map((item, index) =>
              renderParagraph(item, index)
            )}
            {termsOfServiceData.property.sections.map((section, index) =>
              <div key={index}>
                <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                  {section.subtitle}
                </h4>
                {section.content.map((item, index) =>
                  renderParagraph(item, index)
                )}
              </div>
            )}
          </div>
        </section>
        <section id="section-13" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.websites.title)}
            {termsOfServiceData.websites.content.map((item, index) =>
              renderParagraph(item, index)
            )}
          </div>
        </section>
        <section id="section-14" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.termsUse.title)}
            <p className="parag">
              If you are reading these Terms of Use, it means that you have downloaded Marmelo App from Apple Store or Google Play. Having that in mind, please acknowledge that these TOU refer solely to your use of Marmelo App and Service, i.e., regulate the relationship between you and Marmelo. Therefore, Marmelo is solely responsible for Marmelo App and Service, whereas your app store provider has no obligation or liabilities in relation thereto. Any claims, requests and other demands with regard to Marmelo App or Service shall be addressed to Marmelo directly in accordance with{' '}
              <a className="border-b border-dark-green" href="#section-15">Section 10 (Communication)</a>.
            </p>
            <p className="parag">
              On the other hand, any matters which may be of relevance in respect of your use of Apple Store or Google Play are not governed by these TOU, so please check the particular terms of use of the respective app store platform in order to get informed.
            </p>
          </div>
        </section>
        <section id="section-15" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.communication.title)}
            {termsOfServiceData.communication.sections.map((section, index) =>
              <div key={index}>
                <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                  {section.subtitle}
                </h4>
                {section.content.map((item, index) =>
                  renderParagraph(item, index)
                )}
                {section.subsections && section.subsections.map((item, index) =>
                  <div key={index}>
                    {renderParagraph(item.head, index)}
                    {item.list && renderList(item.list)}
                  </div>
                )}
                {section.list && renderList(section.list)}
                {section.contentCenter && section.contentCenter.map((item, index) =>
                  renderParagraph(item, index)
                )}
                {section.listEnd && renderList(section.listEnd)}
                {section.contentEnd && section.contentEnd.map((item, index) =>
                  renderParagraph(item, index)
                )}
              </div>
            )}
          </div>
        </section>
        <section id="section-16" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.privacy.title)}
            {termsOfServiceData.privacy.content.map((item, index) =>
              renderParagraph(item, index)
            )}
          </div>
        </section>
        <section id="section-17" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.interaction.title)}
            {termsOfServiceData.interaction.content.map((item, index) =>
              renderParagraph(item, index)
            )}
          </div>
        </section>
        <section id="section-18" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.warranties.title)}
            {termsOfServiceData.warranties.content.map((item, index) =>
              renderParagraph(item, index)
            )}
            {renderList(termsOfServiceData.warranties.list)}
            {termsOfServiceData.warranties.contentCenter.map((item, index) =>
              renderParagraph(item, index)
            )}
            {renderList(termsOfServiceData.warranties.sublist)}
          </div>
        </section>
        <section id="section-19" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.liability.title)}
            {termsOfServiceData.liability.content.map((item, index) =>
              renderParagraph(item, index)
            )}
            {renderList(termsOfServiceData.liability.list)}
            {termsOfServiceData.liability.contentCenter.map((item, index) =>
              renderParagraph(item, index)
            )}
            <p className="parag">
              If you find anything in Marmelo App that makes you dissatisfied, you acknowledge and accept that your sole remedy is to stop the use of Marmelo App and to delete your Account in accordance with
              &nbsp;<a className="border-b border-dark-green" href="#section-3">Section 3 (Account)</a>.
            </p>
            {termsOfServiceData.liability.subSections.map((section, index) =>
              <div key={index}>
                <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                  {section.title}
                </h4>
                {section.content.map((item, index) =>
                  renderParagraph(item, index)
                )}
                {section.list && renderList(section.list)}
              </div>
            )}
          </div>
        </section>
        <section id="section-20" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.indemnification.title)}
            {termsOfServiceData.indemnification.content.map((item, index) =>
              renderParagraph(item, index)
            )}
            {renderList(termsOfServiceData.indemnification.list)}
          </div>
        </section>
        <section id="section-21" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.waiver.title)}
            {termsOfServiceData.waiver.content.map((item, index) =>
              renderParagraph(item, index)
            )}
          </div>
        </section>
        <section id="section-22" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.severability.title)}
            {termsOfServiceData.severability.content.map((item, index) =>
              renderParagraph(item, index)
            )}
          </div>
        </section>
        <section id="section-23" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.modifications.title)}
            <p className="parag">
              We would not like you to miss any happening on Marmelo App.
            </p>
            <p className="parag">
              Any time we make any changes to our Terms of Use (or any other part of Agreement), we will publish a notice on such change within Marmelo App. Additionally, we will inform you of such modifications in accordance with
              &nbsp;<a className="border-b border-dark-green" href="/terms-service#section-15">Section 10 (Communication)</a>
              &nbsp;no later than 10 days prior to such change entering into force. Please remember that, in case you disable email and push notifications, you may not receive this notice. Just to be sure, do not forget to review these TOU from time to time, to ensure that you are not missing something important.
            </p>
            <p className="parag">
              The updated version of Terms of Use enters into force once it is published in Marmelo App. Your continued use of the Marmelo App will mean acceptance of such modified terms.
            </p>
          </div>
        </section>
        <section id="section-24" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.termination.title)}
            {termsOfServiceData.termination.content.map((item, index) =>
              renderParagraph(item, index)
            )}
            {renderList(termsOfServiceData.termination.list)}
            {termsOfServiceData.termination.contentCenter.map((item, index) =>
              renderParagraph(item, index)
            )}
            {termsOfServiceData.termination.sections.map((section, index) =>
              <div key={index}>
                <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                  {section.title}
                </h4>
                {section.content.map((item, index) =>
                  renderParagraph(item, index)
                )}
                {section.list && renderList(section.list)}
              </div>

            )}
            <p className="parag">For more details on data retention, please visit our <Link className="border-b border-dark-green" to={"/privacy-policy"}>Privacy Policy</Link>.</p>
          </div>
        </section>
        <section id="section-25" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.dispute.title)}
            {termsOfServiceData.dispute.sections.map((section, index) =>
              <div key={index}>
                <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                  {section.title}
                </h4>
                {section.content.map((item, index) =>
                  renderParagraph(item, index)
                )}
              </div>
            )}
          </div>
        </section>
        <section id="section-26" className="bg-yellow">
          <div className="terms__content">
            {renderTitle(termsOfServiceData.action.title)}
            {termsOfServiceData.action.content.map((item, index) =>
              renderParagraph(item, index)
            )}
          </div>
        </section>
        <section id="section-27" className="bg-yellow">
          <div className="terms__content pb-[clamp(120px,5vw,230px)]">
            {renderTitle(termsOfServiceData.agreement.title)}
            <p className="parag">
            Agreement, as amended from time to time in accordance with
            &nbsp;<a className="border-b border-dark-green" href="#section-23">Section 18 (Modifications of Terms of Use)</a>, along with any documents or documents that are linked or otherwise included in Agreement constitutes the entire agreement between you and Marmelo relating to the subject matter hereof and supersedes all prior agreements and understandings between you and Marmelo with respect to that subject matter.
            </p>
            {termsOfServiceData.agreement.content.map((item, index) =>
              renderParagraph(item, index)
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default TermsService
