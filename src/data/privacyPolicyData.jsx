import { Link } from 'react-router';
import definition1 from '../assets/images/definition-1.svg';
import definition2 from '../assets/images/definition-2.svg';
import definition3 from '../assets/images/definition-3.svg';
import definition4 from '../assets/images/definition-4.svg';
import definition5 from '../assets/images/definition-5.svg';
import definition6 from '../assets/images/definition-6.svg';
import definition7 from '../assets/images/definition-7.svg';
import definition8 from '../assets/images/definition-8.svg';
import rights1 from '../assets/images/rights1.svg';
import rights2 from '../assets/images/rights2.svg';
import rights3 from '../assets/images/rights3.svg';
import rights4 from '../assets/images/rights4.svg';
import rights5 from '../assets/images/rights5.svg';
import rights6 from '../assets/images/rights6.svg';
import rights7 from '../assets/images/rights7.svg';
import rights8 from '../assets/images/rights8.svg';



export const privacyPolicyData = {
  nav: {
    title: "Content",
    list: [
      "Definitions",
      "Marmelo as data controller",
      "What personal data do we collect and how?",
      "Not selling any personal data",
      "Personal data security",
      "Sharing your personal data",
      "International transfer of your personal data",
      "How long do we keep your data?",
      "Your rights",
      "California Residents Privacy Notice",
      "Data Breach Notification",
      "Changes to our Privacy Policy",
      "Contact us"
    ]
  },
  definitions: {
    title: "1. Defitions",
    list: [
      {
        term: "Consent",
        description: "Your explicit consent on the processing of personal data.",
        icon: definition1
      },
      {
        term: "Cookies",
        description:
          <>
            Small pieces of data stored on your device (computer or mobile device) that is used to: track the use of the Marmelo App and the Website and compile statistical reports on user activity. You can read more about this topic in our{" "}
            <Link to="/cookie-policy" className="border-b border-dark-green">
              Cookie Policy
            </Link>.
          </>,
        icon: definition2
      },
      {
        term: "Controller or data controller",
        description: "The entity that alone or jointly with others, determines the purposes and means of the processing of personal data.",
        icon: definition3
      },
      {
        term: "Data subject or you",
        description: "Any natural person that shares personal data with us via Marmelo App, Website or otherwise.",
        icon: definition4
      },
      {
        term: "Personal data or data",
        description: "Any information relating to an identified or identifiable natural person; an identifiable natural person is one who can be identified, either directly or indirectly. Thus, data about a company or any legal entity is not considered to be personal data but registering on behalf of a legal entity may include disclosure of personal data. For example, the information about one-person companies may constitute personal data where it allows the identification of a natural person. The rules also apply to all personal data relating to natural persons in the course of professional activity, such as the employees of a company or organization, business e-mail addresses like 'firstname.surname@company.com'. This Privacy Policy does not apply to information from which no individual can reasonably be identified (anonymized information).",
        icon: definition5
      },
      {
        term: "Processing",
        description: "Any operation or set of operations that are performed on personal data or sets of personal data. This includes activities such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure, or destruction.",
        icon: definition6
      },
      {
        term: "Processor",
        description: "Any natural or legal person who processes the data on behalf of the controller.",
        icon: definition7
      },
      {
        term: "Website",
        description: "Our website located at www.marmelo.app",
        icon: definition8
      }
    ]
  },
  сontroller: {
    title: "2. Marmelo as data controller",
    content: [
      "Following the nature of the Services we provide, and with the aim to support you in developing meaningful connections with other Users, we collect certain information about you. In respect to your personal data processed via the Marmelo App or the Website, we act in the capacity of a data controller. That means that we are responsible for determining the purposes and means of the processing of your personal data. The only exception refers to services provided by third parties in our Marmelo App or the Website, in which cases the privacy policy of such third party will apply.",
    ]
  },
  personalData: {
    title: "3. What personal data do we collect and how?",
    listOne: [
      "You provide certain personal data through the use of Marmelo App or Website (for example, by creating the Account, we may collect your name, date of birth, gender, email address, photo, food preferences, location, etc.);",
      "You also choose which data to share with us when you are getting in touch with us via 'Contact Support' section in Settings."
    ],
    listTwo: [
      "take certain steps at your request prior to entering into a contract with Marmelo,",
      "perform the contract that you have concluded with Marmelo,",
      "provide you with a Service and improve the quality of the Service,",
      "comply with its legal obligations,",
      "protect the legitimate interest of third parties."
    ]
  },
  collectionDetails: [
    [
      "Your name, email address, verification code, your country and date of birth, contact telephone, your gender, photographs, food preferences etc.",
      <>
        Creating and maintaining an Account according to the{" "}
        <Link to={"/terms-service"} className="border-b border-dark-green">Terms of Use</Link>. Without providing this data, you could not
        create the Account and we would not be able to provide you with our Services.
        Your date of birth is collected in order to ensure that no data of the persons
        under legal age (as explained in Terms of Use, and especially under 15 is being
        processed). We may also collect additional data from you to access certain premium
        services on our platform, consequently increasing the chances to find you a match.
      </>,
      "Processing is necessary for the conclusion and performance of the Agreement, as well as for the protection of a legitimate interest of a third party – other Users. Date of birth is also required in order to comply with a legal obligation to which the controller is subject. We may also collect optional information such as your food and drink choices etc. If you choose to provide this data, the processing is based on your consent. If you seek to withdraw consent to us tracking your data at any time, you may delete your profile from our app. Upon deletion of your profile, we will automatically cease processing your data.",
      <>Until the Account is deleted in accordance with the <Link to={"/terms-service"} className="border-b border-dark-green">Terms of Use</Link>.</>
    ],
    [
      "Your current location",
      "Providing Service. Given that Marmelo’s aim is to support Users in meeting their nearby matches in real life, we need to collect information on your location to be able to suggest you another nearby User who may be a match based on your preferences. You will only be able to share public locations that we have available on our app. If you disable a location function, that will reduce the performance of Marmelo in finding you a match.",
      "Performance of the Agreement. Pursuant to Terms of Use, this is a core function of Marmelo.",
      <>
        Until first of the following events occur:<br />
        - until you leave the selected radius,<br />
        - in case you do not confirm your new spot within a specified timeframe, which may be set at our discretion,<br />
        - if you close the Marmelo App.
      </>],
    [
      "Restaurant, bar, shop, or another venue that you have visited",
      "Providing better service by the establishment of Marmelo nearby recommendation spots, which may help you find match Users more easily.",
      "Performance of the Agreement. Pursuant to Terms of Use, we may inform you about new location spots, and sort them by their popularity with your match preferences.",
      <>Until the Account is deleted in accordance with the <Link to={"/terms-service"} className="border-b border-dark-green">Terms of Use</Link>.</>
    ],
    [
      "Your drink of choice, and your interests in regard to age range and distance range",
      "For the purpose of connecting you with potential match Users, who are interested in similar User Characteristics.",
      "Performance of the Agreement pursuant to the Terms of Use.",
      <>Until the Account is deleted in accordance with the <Link to={"/terms-service"} className="border-b border-dark-green">Terms of Use</Link>.</>
    ],
    [
      "Additional Data - any other personal data you decide to share with us",
      "You can choose to upload your biography to your Account, in order to provide more information about yourself and therefore improve the process of finding you a match. Additionally, if you send us an inquiry via 'Contact Us' section in Settings or otherwise request support, we will collect the data that you have decided to share with us. Furthermore, messages you send to another User on chat will be saved for a certain period of time, in order to improve our Service and enable you to connect with other Users.",
      "Processing of personal data is either necessary to provide a Service or part thereof, or the processing is based on your consent.",
      "We process your information until you delete your profile on our platform. Messages sent by chat are retained on your device for the period of 60 minutes and afterwards are removed from your device and encrypted on our servers. We, however, reserve the right to retain and store encrypted data on our servers for legitimate business purposes, including to prevent the abuse and misuse of our platform."
    ]
  ],
  selling: {
    title: "4. Not selling any personal data",
    content: "Marmelo does not:",
  },
  personal: {
    title: "5. Personal data security",
    content: [
      "We take administrative, technical, organizational and other measures to ensure the appropriate level of security of the personal data we process. Upon assessing whether a measure is adequate and which level of security is appropriate, we consider the nature of the personal data we are processing and the nature of the processing operations we perform. In the evaluation process, we also include the risks to which you may be exposed in relation to our processing activities, the costs of the implementation of security measures and other relevant matters in particular circumstances.",
      "Some of the measures we apply include access authorization control, data classification (and handling thereof), protection of integrity and confidentiality, data backup, firewalls, data encryption, and other appropriate measures. Our staff is equipped with the appropriate knowledge and understanding of the importance and confidentiality of your personal data security.",
      "We protect the personal data you provide online in connection with registering yourself as a User. Access to your own personal data is available through the verification code sent to you by Marmelo via SMS upon your request. To protect the security of your personal data, never share the verification code you have received with anyone. Please notify us immediately if you believe your verification code has been compromised.",
      "Whenever we save your personal data, it is stored on servers and in facilities that only selected Marmelo personnel and contractors have access to. We encrypt all data that you submit through Marmelo App to prevent unauthorized parties from viewing such information. Please keep in mind that information you share with us by email is not secure. Thus, we urge you not to send any sensitive data in an email to Marmelo. We never request that you submit sensitive or personal data over email, so please report any such requests to us by sending an email to hello@marmelo.app."
    ]
  },
  sharing: {
    title: "6. Sharing your personal data",
    contentTop: [
      "We collaborate with trusted third parties, i.e., external processors in order to conduct certain processing activities and improve our Service. We use information audits to identify, categorize and record all personal data that is processed outside Marmelo, so that the information, processing activity, processor and legal basis are all recorded, reviewed and easily accessible.",
      "In that light, before we establish a business relationship with a processor, we conduct a detailed due diligence procedure. Our policy is to review, assess and background check all third parties that may be included in the processing of your data. In addition, we obtain company documents, certifications, references and ensure that the processor is adequate, appropriate and effective for the task we are engaging them for.",
      "We audit the processes and activities of all processors prior to the conclusion of the contract with them and during the contract period to ensure compliance with the data protection regulations and review any codes of conduct that oblige them to confirm compliance.",
      "This is the list of processors and sub-processors with whom we share your personal data:"
    ],
    tableData: [
      ["Here Global B.V.", "Analytics and location tracking", "USA"],
      ["Twilio", "Marketing services", "USA"],
      ["AWS", "IT services and IT system maintenance", "USA"],
      ["Firebase", "Analytics and location tracking", "USA"],
      ["Amazon Web Services EMEA\u00A0S.A.R.L", "Cloud services and hosting", "Luxembourg"]
    ],
    listData: {
      title: "Please be informed that we may disclose your personal data to third parties:",
      content: [
        "if we are under a duty to disclose or share your personal data in order to comply with any legal obligation;",
        "to prevent and detect fraud or crime;",
        "in response to a subpoena, warrant, court order, or as otherwise required by law.",
      ]
    },
    contentBottom: [
      "Finally, personal data may be disclosed or transferred as part of, or during negotiations of, a merger, consolidation, sale of our assets, as well as equity financing, acquisition, strategic alliance or in any other situation where personal data may be transferred as one of the business assets of Marmelo.",
      "We do not have a list of all third parties we share your data with, as this would be dependent on your specific use of our Services. However, if you would like further information about who we have shared your data with, or to be provided with a list specific to you, you can request this by writing to legal@marmelo.app"
    ]
  },
  sevenItem: {
    title: "7. International transfer of your personal data",
    content: [
      "For operational purposes, we may transfer your personal data to countries other than the one you reside in. In that case, we maintain appropriate technical and organizational measures to ensure that an appropriate level of security in respect of all personal data we process. In such instances, such transfer is made either to jurisdictions that ensure an adequate level of data protection and encryption similar to your jurisdiction.",
      "If you require further information about these protective measures, please contact us at legal@marmelo.app",
      "Your personal data is stored on servers located in the US."
    ]
  },
  keepData: {
    title: "8. How long do we keep your data?",
    content: [
      <>The period for which we store your personal data depends on a particular purpose for the processing of personal data, as explained in detail in{" "}
      <a className='border-b border-dark-green' href="#section-3">Section 3</a>. We retain personal data for as long as we reasonably require it for legal or business purposes.</>,
      "In determining data retention periods, we take into consideration the applicable law, contractual obligations, and the expectations and requirements of our users. If the situation is such that we no longer need certain personal data, or you request us to delete your data, we will securely delete or destroy it.",
      "However, as an exception to the retention periods in Section 3 the data may be processed to determine, pursue, or defend claims and counterclaims."
    ]
  },
  userRights: {
    title: "9. Your rights",
    content: "Given that transparency is one of our cornerstone principles, we grant data subjects the following rights in relation to their personal data:",
    rights: [
      {
        icon: rights1,
        title: "Right of Access",
        contentTop: [
          "You can send us a request for a copy of the personal data we hold about you.",
          "We have ensured that appropriate measures have been taken to provide such in a concise, transparent, intelligible and easily accessible form, using clear and plain language. Such information is provided in writing free of charge. It may be provided by other means when authorized by the data subject and with prior verification as to the subject’s identity.",
          "Information is provided to the data subject at the earliest convenience, but at a maximum of 30 days from the date the request was received. Where the retrieval or provision of information is particularly complex or is subject to a valid delay, the period may be extended by two further months where necessary."
        ],
      },
      {
        icon: rights2,
        title: "Right to Correction of Your Personal Data",
        contentTop: [
          "If the personal data we have about you is incorrect or incomplete, you have the right to request that we correct that data. Where notified of inaccurate data by the data subject, we will rectify the error within 30 days and inform any third party of the rectification if we have disclosed the personal data in question to them."
        ]
      },
      {
        icon: rights3,
        title: "Right to Object to Processing",
        contentTop: [
          "You have the right to object to the processing of your personal data where that processing is being undertaken based on the controller’s legitimate interest. In such a case the controller is required to cease processing your data unless the controller can demonstrate compelling grounds that override your objection."
        ]
      },
      {
        icon: rights4,
        title: "Right to Restriction of Processing",
        contentTop: [
          "In the following cases:",
        ],
        list: [
          "if you contest the processing of your personal data,",
          "if you consider the processing of your personal data is not in accordance with the law, but you are not interested in the erasure of such data,",
          "if we do not need your personal data for the purpose of the processing, but you require it for the establishment, exercise or defense of legal claims, or",
          "if you have objected to processing based on our legitimate interest, and the verification on whether our legitimate interest overrides the interests of you as a data subject,",
        ],
        contentButtom: "you have the right to the restriction of processing of your personal data."
      },
      {
        icon: rights5,
        title: "Right to Data Portability",
        contentTop: [
          "Where you have provided personal data to us, you have the right to receive such personal data back in a structured, commonly used and machine-readable format, and to have those data transmitted to a third-party without hindrance, but in each case only where:",
        ],
        list: [
          "the processing is carried out by automated means; and",
          "the processing is based on your consent or the performance of a contract with you."
        ]
      },
      {
        icon: rights6,
        title: "Right to Withdraw the Consent",
        contentTop: [
          "If you have provided your consent to the collection, processing and transfer of your personal data, you have the right to withdraw your consent by deleting your profile from our platform, or contacting us to do so on your behalf. Once we have received notification that you have withdrawn your consent, we will no longer process your information for the purpose(s) to which you originally consented unless there is another legal ground for the processing."
        ]
      },
      {
        icon: rights7,
        title: "Right to Erasure",
        contentTop: [
          "You have the right to request that your personal data is deleted in certain circumstances including:",
        ],
        list: [
          "The personal data are no longer needed for the purpose for which they were collected;",
          "You withdraw your consent (where the processing was based on consent);",
          "You object to the processing and no overriding legitimate grounds are justifying processing the personal data;",
          "The personal data have been unlawfully processed; or",
          "To comply with a legal obligation.",
        ],
        contentButtom: "However, this right does not apply where, for example, the processing is necessary in order to comply with a legal obligation, or for the establishment, exercise or defense of legal claims."
      },
      {
        icon: rights8,
        title: "Right to Lodge a Complaint",
        contentTop: [
          "If you have any concerns or requests in relation to your personal data, please contact us at legal@marmelo.app and we will respond as soon as possible but not later than within 30 days."
        ]
      }
    ]
  },
  noties: {
    title: "10. California residents privacy notice",
    content: [
      "This section of our Privacy Policy ('CCPA Notice') applies to all Users residing in the territory of California. By visiting our Website and using Marmelo App, such Users fall under the scope of the California Consumer Privacy Act of 2018 ('CCPA') as amended by the California Privacy Rights Act of 2020 (CPRA), collectively referred to as 'CCPA' in this notice. This CCPA Notice outlines how Marmelo complies with these laws.",
    ],
    sections: [
      {
        subtitle: "No selling your personal information",
        content: [
          "In accordance with the CCPA, a business that sells consumers' personal information to others must: 1) give notice to consumers before selling their personal information to others; and 2) provide consumers with the right to opt out of the sale of their personal information.",
          "Marmelo's practices regarding the sale and sharing of personal information are as follows:"
        ],
        list: [
          "Sale of Personal Information: Marmelo does not sell personal information for monetary consideration. This includes personal information of consumers of all ages, including those under 16 years old.",
          "Sharing of Personal Information: While we do not sell personal information, we may share certain personal information with third-party partners for purposes that may be considered 'sharing' under California law, such as for cross-context behavioral advertising.",
          "Opt-Out Rights: Although we do not sell personal information, we respect your right to control your data. California residents have the right to opt out of the sharing of their personal information for cross-context behavioral advertising purposes. To exercise this right, please visit our 'Do Not Share My Personal Information' page [Insert link] or contact us using the information provided in the 'Contact Us' section of our Privacy Policy.",
          "Minors’ Personal Information: We do not knowingly sell or share personal information of consumers under 16 years of age. We are committed to transparency in our data practices and to complying with applicable privacy laws. If you have any questions about how we handle your personal information, please refer to our full Privacy Policy or contact us using the information provided therein."
        ]
      },
      {
        subtitle: "Your Rights and Choices",
        content: [
          "This section describes your rights under the CCPA and explains how to exercise those rights. These rights may be exercised by consumers when Marmelo operates as a Data Controller.",
          "In the event Click or tap here to enter text. receives a request for exercising any of these rights directly from a consumer, we are obliged to notify the owner of the relevant Workspace before responding to such a request."
        ],
        subsections: [
          {
            head: " 1. Right to know Personal Information and Data Portability Rights",
            descrTop: [
              "You have the right to request that we disclose certain information to you about Marmelo’s collection and use of your personal information over the past 12 months, i.e.:",
            ],
            list: [
              "Our business or commercial purpose for collecting your personal information.",
              "The categories of personal information we collected about you.",
              "The categories of third parties with whom we share your personal information.",
              "The specific pieces of personal information we collected about you (data portability request).",
              "We will disclose this information to you once we receive and confirm your verifiable consumer request."
            ]
          },
          {
            head: "2. Right to Deletion",
            descrTop: [
              "You have the right to request the deletion of the personal information we have collected from you. Marmelo will delete your personal information from the records once we receive and confirm your verifiable consumer request unless the CCPA exception described above applies.",
              "Namely, we may deny your deletion request subject to the exceptions in CCPA para. 1798.105, i.e. if retaining the information is necessary for us or our service providers to:",
            ],
            list: [
              "Complete the transaction for which we have collected the personal information, provide a good or service that you  requested, take actions reasonably anticipated within the context of our ongoing business relationship with you,  or otherwise perform our contract with you.",
              "Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.",
              "Debug products to identify and repair errors that impair existing intended functionality.",
              "Exercise free speech, ensure the right of another consumer to exercise their free speech rights or exercise another  right provided for by law.",
              "Comply with the California Electronic Communications Privacy Act (Cal. Penal Code para. 1546 seq.).",
              "Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information’s deletion may likely render impossible or seriously impair the research’s achievement if you previously provided informed consent.",
              "Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us.",
              "Comply with a legal obligation.",
              "Make other internal and lawful uses of that information that are compatible with the context in which you provided it.",
            ],
            descrButton: "If your request is justified, Marmelo will also direct their service providers to delete your personal information as well."

          },
          {
            head: "3. Right to Non-Discrimination",
            descrTop: [
              "Marmelo will not discriminate against you for exercising any of your CCPA rights. That means that, unless permitted by the CCPA, we will not:",
            ],
            list: [
              "Deny you the use of our Services.",
              "Provide you with a different level or quality of Services.",
              "Charge you different prices or rates for Services, including through the use of discounts or other benefits or by imposing penalties.",
              "Suggest that the person exercising their rights will receive a different price or rate for Services or a different level or quality of Services.",
            ]
          },
          {
            head: "4. Right to say no to the sale of your personal information (Right to opt-out)",
            descrTop: [
              "As explained above, the CCPA requires businesses that sell personal information to allow consumers the ability to opt out of the selling of their personal information.",
              "As previously stated, Marmelo does not sell personal information."
            ],
          }
        ]
      },
      {
        subtitle: "Exercising your rights",
        content: [
          <>To exercise the rights to access, data portability, correction, and deletion, please submit a verifiable consumer request at legal@marmelo.app or contact us via any manner described in <a href="#section-13" className='border-b border-dark-green'>Section 12 (Contact us)</a>.</>,
          "Consumers are entitled to make a request for access or data portability without limitation.",
          "To exercise your rights, you may send a request by yourself or use an authorized agent. If using an authorized agent, you may need to provide the agent with written permission to submit requests on your behalf and we may require you to verify your identity directly with us.",
          "In case we cannot verify your identity or authority to make the request and confirm the personal information that relates to you, we cannot respond to your request or provide you with personal information.",
          "We attempt to respond to consumers’ requests within 45 days of their receipt. Sometimes, we may need more time to respond to the request (up to 90 days total from the moment we receive the request) in which case we will inform the consumer of the reason and extension period in writing.",
          "You are not obliged to create an account with us in order to make a verifiable consumer request. We will deliver our written response to the registered email associated with the account if you have an account with us. We will provide information covering the 12-month period preceding the verifiable consumer request. For requests for specific pieces of personal information, we will provide the information from January 1, 2024, unless doing so proves impossible or would involve disproportionate effort. If we cannot comply with your request, we will provide an explanation.",
          "If a consumer files a data portability request, Marmelo will select a format that is readily useable and should allow the transmission of the information from one entity to another entity without hindrance.",
          "We do not charge a fee to process or respond to verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded. If we determine that the request warrants a fee, we will:",
        ],
        list: [
          "inform you why the decision was made and",
          "provide the consumer with a cost estimate before completing the request."
        ]
      }
    ]
  },
  breach: {
    title: "11. Data breach notification",
    content: "We take the security of your personal information seriously and implement robust measures to protect it. However, in the unlikely event of a data breach, we have procedures in place to respond promptly and effectively. In case of a data breach that involves your personal information:",
    list: [
      {
        descr: "Upon discovery of a potential data breach, we will immediately initiate an investigation to determine the nature and scope of the incident."
      },
      {
        descr: "We will take swift action to contain the breach and mitigate any potential harm."
      },
      {
        descr: "We will assess the risk of harm to individuals whose data may have been compromised."
      },
      {
        descr: "If we determine that the breach is likely to result in a high risk to your rights and freedoms, we will notify you without undue delay and, where feasible, within 72 hours of becoming aware of the breach."
      },
      {
        descr: "We will notify affected users directly via email, using the email address associated with your Marmelo account. If direct notification is not possible or would involve disproportionate effort, we may issue a public notice or take similar measures to ensure you are informed effectively."
      },
      {
        descr: "Our notification will include:",
        details: [
          "A description of the nature of the breach",
          "The categories and approximate number of personal data records concerned",
          "The likely consequences of the breach",
          "The measures taken or proposed to address the breach",
          "Contact information for our Data Protection Officer or other point of contact Recommendations for steps you can take to protect yourself"
        ]
      },
      {
        descr: "Where required by law, we will notify relevant supervisory authorities and cooperate fully with their investigations."
      },
      {
        descr: "We will keep you informed of the steps we are taking to address the breach and provide any additional information or assistance you may need."
      },
      {
        descr: "Following any breach, we will conduct a thorough review of our security measures and implement any necessary improvements to prevent similar incidents in the future."
      }
    ]
  },
  changes: {
    title: "12. Changes to our privacy policy",
    content: "As we strive to continually improve and develop the quality of our Services, we may also update and modify our Privacy Policy over time. Any changes we make will be posted on this page, and where appropriate may be notified to you, by e-mail or advised to you on the next login to Marmelo. Please review the changes and keep in mind that the continued use of the Marmelo, after the changes took place, will signify that you agree to it. Therefore, if you do not consent to the introduced changes, please stop using our Services."
  },
};


