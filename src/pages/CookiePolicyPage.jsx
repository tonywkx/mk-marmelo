import { cookiesPolicyData } from "../data/cookiesPolicyData"
import { renderParagraph } from "../components/ui/renderParagraph"
import { renderTitle } from "../components/ui/renderTitle"
import { renderList } from "../components/ui/renderList"
import Footer from "../components/section/Footer"
import Header from "../components/layout/Header"

const CookiePolicyPage = () => {
  return (
    <>
      <Header />
      <main>
        <section id="hero" className="sm:border-b border-dark-green border-y bg-yellow">
          <div className="px-4 py-4">
            <div className="flex justify-star justify-center m-auto items-center">
              <h1 className="font-greed tracking-[-0.02em] text-[clamp(100px,12vw,173px)] font-bold text-dark-green leading-[0.8] max-w-[95%] sm:max-w-[50%] text-center ">
                COOKIE POLICY
              </h1>
            </div>
          </div>
        </section>
        <section className="bg-yellow">
          <div className="flex justify-center">
            <p className="text-xs font-medium text-dark-green m-auto inline-block  mt-4 max-w-[60%] text-center mx-auto">
              LAST UPDATED ON AND EFFECTIVE AS OF&nbsp;
              <span className="border-b border-dark-green inline">01.06.25.</span>
            </p>
          </div>
          <div className="cookie__content">
            {cookiesPolicyData.intro.map((item, index) => renderParagraph(item, index))}
          </div>
        </section>
        <section className="bg-yellow">
          <div className="cookie__content">
            {renderTitle(cookiesPolicyData.section1.title)}
            {cookiesPolicyData.section1.content.map((item, index) => renderParagraph(item, index))}
          </div>
        </section>
        <section className="bg-yellow">
          <div className="cookie__content ">
            {renderTitle(cookiesPolicyData.section2.title)}
            {renderParagraph(cookiesPolicyData.section2.content)}
            {cookiesPolicyData.section2.items.map((item, index) => (
              <div key={index} className="sm:ml-4">
                <h5 className="text-base leading-[1.5625] mb-5 font-medium text-dark-green">
                  {item.head}
                </h5>
                {item.list && renderList(item.list)}
                {renderParagraph(item.descrBottom)}
              </div>
            ))}
            {cookiesPolicyData.section2.sections.map((item, index) => (
              <div key={index}>
                <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                  {item.subtitle}
                </h4>
                {item.content.map((item, index) => (renderParagraph(item, index)))}
              </div>
            ))}
            <ul className="hidden md:flex flex-col gap-5 border-t border-dark-green">
              <li className="border-b border-dark-green">
                <div className="group relative grid gap-4 transition-all grid-cols-10 sm:gap-8 py-4 items-end">
                  <h4
                    className="text-dark-green col-span-2 text-base sm:text-[28px] font-greed leading-[1.33333] justify-self-center
                  before:h-[70px] before:w-[80px]  before:bg-[url('./assets/images/cookie1.svg')] before:block before:bg-no-repeat flex flex-col items-center gap-[15px]  bg-contain " >
                    COOKIE&nbsp;NAME
                  </h4>
                  <h4
                    className="text-dark-green col-span-2 text-base sm:text-[28px] font-greed leading-[1.33333] justify-self-center
                 sm:before:bg-[url('./assets/images/cookie2.svg')] before:block before:bg-no-repeat flex flex-col items-center gap-[15px]
                 before:h-[70px] before:w-[80px]   bg-contain ">
                    PURPOSE
                  </h4>
                  <h4
                    className="text-dark-green col-span-2 text-base sm:text-[28px] font-greed leading-[1.33333] justify-self-center
                before:h-[70px] before:w-[80px] sm:before:bg-[url('./assets/images/cookie3.svg')] before:block before:bg-no-repeat flex flex-col items-center gap-[15px]
                  before:bg-contain">
                    PROVIDE
                  </h4>
                  <h4
                    className="text-dark-green col-span-2 text-base sm:text-[28px] font-greed leading-[1.33333] justify-self-center
                   sm:before:bg-[url('./assets/images/cookie4.svg')] before:block before:bg-no-repeat flex flex-col items-center gap-[15px]
                 before:h-[70px] before:w-[80px]  before:bg-contain">
                    EXPIRY
                  </h4>
                  <h4
                    className="text-dark-green col-span-2 text-base sm:text-[28px] font-greed leading-[1.33333] justify-self-center
                   sm:before:bg-[url('./assets/images/cookie5.svg')] before:block before:bg-no-repeat flex flex-col items-center gap-[15px]
                 before:h-[70px] before:w-[80px] before:bg-contain">
                    TYPE
                  </h4>
                </div>
              </li>
              {cookiesPolicyData.section2.table.map((array, index) => (
                <li key={index} className="border-b border-dark-green">
                  <div className="group relative grid gap-4 transition-all grid-cols-10 sm:gap-10 pb-[20px] justify-center ">
                    {array.map((item, index) => (
                      <p key={index}
                        className={` ${index >= 2 ? 'justify-self-center' : ""} flex text-sm lg:text-base font-normal col-span-2 text-dark-green`}>
                        {item}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            <div className="md:hidden flex flex-col border-t border-dark-green">
              {cookiesPolicyData.section2.tableMobile.map((item, index) => (
                <div key={index} className="border-b border-dark-green py-8 flex flex-col gap-4">
                  <p className="font-medium text-base text-dark-green font-greed">COOKIE NAME: <span className=" font-mainFontGarnett font-normal text-sm">{item.cookie_name}</span></p>
                  <p className="font-medium text-base text-dark-green font-greed">PURPOSE: <span className=" font-mainFontGarnett font-normal text-sm">{item.purpose}</span></p>
                  <p className="font-medium text-base text-dark-green font-greed">PROVIDER: <span className=" font-mainFontGarnett font-normal text-sm">{item.provider}</span></p>
                  <p className="font-medium text-base text-dark-green font-greed">EXPIRY: <span className=" font-mainFontGarnett font-normal text-sm">{item.expiry}</span></p>
                  <p className="font-medium text-base text-dark-green font-greed">TYPE: <span className=" font-mainFontGarnett font-normal text-sm">{item.type}</span></p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-yellow">
          <div className="cookie__content ">
            {renderTitle(cookiesPolicyData.section3.title)}
            {cookiesPolicyData.section3.content.map((item, index) => renderParagraph(item, index))}
          </div>
        </section>
        <section className="bg-yellow">
          <div className="cookie__content ">
            {renderTitle(cookiesPolicyData.section4.title)}
            {cookiesPolicyData.section4.sections.map((item, index) => (
              <div key={index}>
                <h4 className="text-dark-green text-xl  sm:text-[28px] font-greed  leading-[0.83333] mb-5 font-medium">
                  {item.subtitle}
                </h4>
                {item.content.map((item, index) => (renderParagraph(item, index)))}
              </div>
            ))}
          </div>
        </section>
        <section className="bg-yellow">
          <div className="cookie__content ">
            {renderTitle(cookiesPolicyData.section5.title)}
            {cookiesPolicyData.section5.content.map((item, index) => renderParagraph(item, index))}
          </div>
        </section>
        <section className="bg-yellow">
          <div className="cookie__content pb-[clamp(120px,5vw,230px)] ">
            {renderTitle(cookiesPolicyData.section6.title)}
            {renderParagraph(cookiesPolicyData.section6.content)}
            {renderList(cookiesPolicyData.section6.list)}
            {renderParagraph(cookiesPolicyData.section6.contentBottom)}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default CookiePolicyPage
