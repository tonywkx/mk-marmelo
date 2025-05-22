import { Link } from "react-router";

export const cookiesPolicyData = {
  intro: [
    <>
      Together with our{" "}
      <Link className="border-b border-dark-green" to={"/privacy-policy"}>
        Privacy Policy
      </Link>{" "}
      and{" "}
      <Link className="border-b border-dark-green" to={"/privacy-policy"}>
        Terms of Use
      </Link>
      , this Cookie Policy is an important document related to your privacy and
      the use of Website. For that reason, we highly recommend you get familiar
      with it and read it carefully.
    </>,
    "The Cookie Policy outlines what cookies are, what types of cookies we utilize in our Website, as well as how you can manage them.",
    "Kindly note that terms written in capital letters in this Cookie Policy shall have the same meaning as defined in our Privacy Policy or Terms of Use.",
  ],
  section1: {
    title: "1. What is a cookie?",
    content: [
      "Despite their tempting name, generally, cookies are small text files with data, stored on your device when you visit a website or use an app. Cookies represent a tool that collects information about users’ visits and preferences for different purposes (by creating a specific tag) and ensures the functionality of the services provided.",
      "Website cookies can send information back to the originating website, or to another web address that recognizes that cookie. On the other hand, the app cookies store users’ preferences only within the app, and those preferences cannot be shared amongst the different apps or with a web browser.",
      "So, we may use cookies to collect information about the use of our Website. The functions performed by cookies may be achieved by using other similar technologies, such as web beacons or pixels. Accordingly, in this Cookie Policy, “cookie” refers to objects delivered by all these technologies.",
      "The purpose of collecting and processing information through cookies is not to identify you or any other individual Users, but to analyze and improve Marmelo Content and User experience.",
      "Some cookies may process personal data, other cookies gather statistics on the Website, but cookies are also used to support our security and the ability to correctly display information to our user community. We will go into detail below.",
    ],
  },
  section2: {
    title: "2. Types of cookies",
    content: [
      "In general, there are three main criteria for classifying cookies: their duration, their provenance, and their purpose.",
    ],
    items: [
      {
        head: "1. In regard to their duration, cookies may fall into two categories:",
        list: [
          "Session cookies – stored in temporary memory, expiring once the User’s session ends. For example, they prevent Website from requiring the same information multiple times.",
          "Persistent cookies – exist longer than session cookies, until you or your browser deletes them. Every persistent cookie has a determined expiration date in its code, but the expiration duration may vary between them.",
        ],
      },
      {
        head: "2. Provenance distinguishes cookies as:",
        list: [
          "First-party cookies – cookies put on your device by us, or in general, by the domain (name of a website) that you are currently browsing.",
          "Third-party cookies – cookies placed on your device by a third party, such as an advertiser, social media platform, or an analytic system. Those cookies are assigned to a different domain name than the one you are currently at.",
        ],
        descrBottom:
          "For information on whether a certain cookie is placed on your device by us or a third party, please see the column “provider” in the tables below.",
      },
      {
        head: "3. In respect to the purpose they serve, cookies are classified as:",
        list: ["Necessary", "Preferences", "Statistics", "Marketing", "Other"],
      },
    ],
    sections: [
      {
        subtitle: "Necessary cookies",
        content: [
          "Necessary cookies are essential in enabling basic functions of the Website, such as page navigation, or access to secure areas of the Website. As their name implies, necessary cookies must be present for the Website to operate properly. In most cases, they are first-party, session cookies.",
        ],
      },
      {
        subtitle: "Preferences cookies",
        content: [
          "Preferences cookies, also known as functionality cookies, enable us to remember your previous choices, such as language preferences, the country you are in, or username and password.",
        ],
      },
      {
        subtitle: "Statistics cookies",
        content: [
          "Statistics or “performance” cookies are cookies that collect anonymized information about the overall user experience. They allow us to count visits and traffic sources, in order to measure and improve the performance of our Website.",
          "Statistics cookies enable analysis and evaluation of the pages or features that you and other Users have visited, as well as which links you have clicked on.",
          "With this data, we can understand what content is valuable to you, and even create a report on the most and the least interesting options and information.",
        ],
      },
      {
        subtitle: "Marketing cookies",
        content: [
          "Marketing cookies are used to provide you with a good user experience, by delivering relevant advertising content and limiting the number of times you have seen a specific ad. Also, they enable us to continually improve the Website.",
          "These cookies are set up through our Website by our advertising partner (third-party provenance). Marketing cookies create a profile of your interests and present you advertisements appropriate to your interest in other locations.",
          "Please note that marketing cookies uniquely identify your browser and device. You have an option to prevent experiencing targeted ads by not allowing these cookies.",
        ],
      },
    ],
    table: [
      [
        "_ga",
        "Tracks website visitor interactions and generates statistical data on how visitors use the site",
        "Google Analytics",
        "2 years",
        "Analytics",
      ],
      [
        "_gid",
        "Stores and updates a unique visitor ID to track user sessions",
        "Google Analytics",
        "24 hours",
        "Analytics",
      ],
      [
        "_gat",
        "Used to throttle request rate to limit data collection on high traffic sites",
        "Google Analytics",
        "1 minute",
        "Performance",
      ],
      [
        "ads/_ga",
        "Tracks advertising performance and user interactions with ads",
        "Google Ads",
        "2 years",
        "Advertising",
      ],
      [
        "_fbp",
        "Sets a unique visitor ID for tracking ad conversions and website interactions",
        "Meta (Facebook)",
        "3 months",
        "Advertising",
      ],
      [
        "tr",
        "Tracks conversions, optimize ads, and create audiences for ad targeting",
        "Meta (Facebook)",
        "Session",
        "Advertising",
      ],
      [
        "AnalyticsSyncHistory",
        "Synchronizes user tracking across different platforms",
        "Google/Meta",
        "30 days",
        "Tracking",
      ],
    ],
    tableMobile: [
      {
        cookie_name: "_ga",
        purpose:
          "Tracks website visitor interactions and generates statistical data on how visitors use the site",
        provider: "Google Analytics",
        expiry: "2 years",
        type: "Analytics",
      },
      {
        cookie_name: "_gid",
        purpose:
          "Stores and updates a unique visitor ID to track user sessions",
        provider: "Google Analytics",
        expiry: "24 hours",
        type: "Analytics",
      },
      {
        cookie_name: "_gat",
        purpose:
          "Used to throttle request rate to limit data collection on high traffic sites",
        provider: "Google Analytics",
        expiry: "1 minute",
        type: "Performance",
      },
      {
        cookie_name: "ads/_ga",
        purpose:
          "Tracks advertising performance and user interactions with ads",
        provider: "Google Ads",
        expiry: "2 years",
        type: "Advertising",
      },
      {
        cookie_name: "_fbp",
        purpose:
          "Sets a unique visitor ID for tracking ad conversions and website interactions",
        provider: "Meta (Facebook)",
        expiry: "3 months",
        type: "Advertising",
      },
      {
        cookie_name: "tr",
        purpose:
          "Tracks conversions, optimize ads, and create audiences for ad targeting",
        provider: "Meta (Facebook)",
        expiry: "Session",
        type: "Advertising",
      },
      {
        cookie_name: "AnalyticsSyncHistory",
        purpose: "Synchronizes user tracking across different platforms",
        provider: "Google/Meta",
        expiry: "30 days",
        type: "Tracking",
      },
    ],
  },
  section3: {
    title: "3. Legal basis for using cookies",
    content: [
      <>
        Please note that we are not allowed to use cookies unless you agree to
        it via the cookie banner. Therefore, as we have explained in our{" "}
        <Link className="border-b border-dark-green" to={"/privacy-policy"}>
          Privacy Policy
        </Link>{" "}
        the legal basis for using cookies in Website is your consent.
      </>,
      "We assume the device you are using is yours. If this is not the case, (for example, if you are visiting the Website on your employer’s computer or smart device), we expect you to have the authorization of the owner of the device to agree on their behalf with our storing cookies on the device and retrieving information from it as described in the Cookie Policy. By using the device, you are confirming to us that you are so authorised.",
    ],
  },
  section4: {
    title: "4. Use of external tools on our Website",
    sections: [
      {
        subtitle: "Google Analytics",
        content: [
          "We have integrated Google Analytics in Website (with an anonymization function). Google Analytics is a website analysis service. Website analysis refers to the collection, recording and analysis of data regarding the behaviour of Website Users. In other words, Google Analytics uses Cookies to remember a visitor's behavior and provide us with reports on the Website visits and the User's activity.",
          "Google Inc, 1600 Amphitheatre Pkwy, Mountain View, CA 94043-1351, USA, is the operator of the Google Analytics component.",
          "Google Analytics uses Cookies, as described in the table above. The information about your use of the Website generated by the Google Analytics Cookies is normally transmitted to a Google server in the USA and stored there. Google might disclose these personal data collected via the technical procedure to third parties.",
          "We have activated IP anonymization, which means that Google shortens the IP addresses of our visitors within the Member States of the European Union or in other countries that are parties to the European Marketing Area Treaty. Only in exceptional cases is the full IP address transmitted to a Google server in the USA and shortened there. Google uses this information to analyze your use of the Website to compile a report about your activities within Website and provide us with other services associated with the Website and Service.",
          "In addition to the instructions in Section 5 of this Cookie Policy, you may prevent the disclosure of the data generated by the Cookie which refers to the use of the Website (including your IP address) to Google, as well as the processing of these data by Google, by downloading and installing the browser plug-in available under the following link: https://tools.google.com/dlpage/gaoptout?hl=en.",
          "This browser add-on notifies Google Analytics via JavaScript that no data or information about Website visitors may be transmitted to Google Analytics. Apart from that, a Cookie left behind by Google Analytics may be erased at any time.",
          "Google Analytics is explained in more detail under this link: https://marketingplatform.google.com/about/, while information on how Google processes data you may find under this link: https://support.google.com/analytics/answer/6004245?hl=en.",
        ],
      },
      {
        subtitle: "Google Tag Manager",
        content: [
          "We use Google Tag Manager. That is a management tool that allows us to administer so-called website tags centrally, via an interface. Google Tag Manager implements only tags, which means that no Cookies are used, and no personal data are collected.",
          <>
            Google has a suitable privacy policy for such data collection by
            third-party providers:{" "}
            <a
              href="https://marketingplatform.google.com/intl/de/about/analytics/tag-manager/use-policy/"
              className="break-words underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://marketingplatform.google.com/intl/de/about/analytics/tag-manager/use-policy/
            </a>
            .
          </>,
          "However, Google Tag Manager does not access this data. If certain domains/websites or Cookies were deactivated, it remains in place for all tracking tags provided that they are implemented using Google Tag Manager.",
        ],
      },
    ],
  },
  section5: {
    title: "5. How to block cookies?",
    content: [
      "When enjoying our Website, you are free to disable any type of cookies except for the necessary ones. In other words, if you do not agree with any of the above-described processing you may block cookies through the cookie banner or cookie settings.",
      "To disable cookies via the cookie banner, please click on the option “Decline”.",
      "In regard to your general cookie settings, you can adjust available sliders/checkboxes to “On” or “Off”, then click “Save and close”. Please be informed that you may need to refresh the Website for your settings to take effect.",
      "Website cookies can be managed with browser settings as well. Depending on your internet browser, you may be accepting cookies by default. However, you can change that. For more information or support, please refer to your browser for instructions (Internet Explorer, Google Chrome, Mozilla Firefox, Safari, etc.).",
    ],
  },
  section6: {
    title: "6. Changes to our Cookie Policy",
    content:
      "As technology constantly evolves, we may modify our Cookie Policy from time to time. However, in case of an update, we will notify you through:",
    list: ["a pop-up on the Website", "a notice within Marmelo App"],
    contentBottom:
      "Modifications will be disclosed to you in a reasonable period of time prior to and following the change.",
  },
};
