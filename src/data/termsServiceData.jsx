import terms1 from '../assets/images/terms1.svg';
import terms2 from '../assets/images/terms2.svg';
import terms3 from '../assets/images/terms3.svg';
import terms4 from '../assets/images/terms4.svg';
import terms5 from '../assets/images/terms5.svg';
import terms6 from '../assets/images/terms6.svg';
import terms7 from '../assets/images/terms7.svg';
import terms8 from '../assets/images/terms8.svg';
import terms9 from '../assets/images/terms9.svg';
import terms10 from '../assets/images/terms10.svg';
import terms11 from '../assets/images/terms11.svg';
import terms12 from '../assets/images/terms12.svg';
import terms13 from '../assets/images/terms13.svg';
import terms14 from '../assets/images/terms14.svg';
import terms15 from '../assets/images/terms15.svg';
import terms16 from '../assets/images/terms16.svg';
import terms17 from '../assets/images/terms17.svg';
import { Link } from 'react-router';


export const termsOfServiceData = {
  nav: {
    list: [
      "1. Definitions",
      "2. Eligibility",
      "3. Account",
      "3a. Signing up",
      "3b.Deleting your Account",
      "4. Marmelo Service",
      "5. Content on Marmelo",
      "5a. User Content",
      "5b. Other Users' Content",
      "5c. Marmelo Content",
      "6. Our Code of Conduct",
      "7. Intellectual Property",
      "8. Third-party Websites and Services",
      "9. Third-party Terms of Use",
      "10. Communication",
      "11. Privacy and Personal Data Protection",
      "12. Interactions between Users",
      "13. Warranties Disclaimer",
      "14. Liability",
      "15. Indemnification",
      "16. No Waiver",
      "17. Severability",
      "18. Modifications of Terms of Use",
      "19. Termination",
      "20. Dispute Resolution",
      "21. No Class Action",
      "22. Entire Agreement"
    ]
  },
  definitions: {
    title: "1. Defitions",
    content: [
      "It is very important to us that you clearly understand this Agreement. In order to make that happen, we have drafted a list of definitions that we use in our legal documents.",
      "Please read and acknowledge the following definitions. Remember, whenever you come across one of the terms written in capital letters in our Terms of Use, Privacy Policy, or Cookie Policy, you can come back to this Section to bring to mind its meaning."
    ],
    list: [
      {
        term: "Account",
        description: "User's designated part of Marmelo App, accessed when User registers, connects or uses Marmelo App, or through the downloaded application or otherwise as made available by us. Users may access Services solely through Account and each User may have only one Account.",
        icon: terms1
      },
      {
        term: "Agreement",
        description:
        <>A legally binding agreement between User and Marmelo, comprising these Terms of Use (as amended from time to time in accordance with{' '}
        <a href="terms-service#section-23" className='border-b border-dark-green'>Section 18 (Modifications of Terms of Use))</a>, Privacy Policy, as well as any other terms linked in these TOU.</>,
        icon: terms2
      },
      {
        term: "Cookie Policy",
        description: "The policy available in Marmelo App explaining cookies: what they are, which of them Marmelo App uses and how Users can control them. Cookie Policy represents a part of Privacy Policy and can be visited by clicking here.",
        icon: terms3
      },
      {
        term: "Force Majeure",
        description: "Any circumstance that could not have been reasonably foreseen and goes beyond the bounds of Marmelo’s or User’s control. For instance, Force Majeure includes, but is not limited to, the act of nature, an act of state authority, the act of terror, war, civil unrest, strike, cyber-attack, internet failure, or any other circumstance that may be deemed a force majeure under the applicable law.",
        icon: terms4
      },
      {
        term: "Intellectual Property Rights",
        description: "Any and all registered and unregistered rights granted, applied for or otherwise now or hereafter in existence under or related to any patent, copyright, trademark, trade secret, database protection or another intellectual property right, and similar or equivalent rights or forms of protection, in any part of the world.",
        icon: terms5
      },
      {
        term: "Marmelo App",
        description: "Marmelo mobile app, available on Apple Store and Google Play, enabling Users to connect, chat and casually meet up with other Users who comply with the specifically chosen Discovery Preference, i.e., who have specific User Characteristics.",
        icon: terms6
      },
      {
        term: "Marmelo, we or us",
        description: "MARMELO TECHNOLOGIES INC with address at 1007 N. ORANGE ST. 4TH FLOOR, SUITE 1382 WILMINGTON, DELAWARE.",
        icon: terms7
      },
      {
        term: "Marmelo Content",
        description: "All features and technical resources available to Users via Marmelo App. Marmelo Content includes, but is not limited to any data, information, text, photos, video and audio clips, graphics, software, and interactive features that are generated, provided, or otherwise made accessible within or through Marmelo App.",
        icon: terms8
      },
      {
        term: "Party or Parties",
        description: "Marmelo and User (individually or collectively).",
        icon: terms9
      },
      {
        term: "Privacy Policy",
        description: "The policy available in Marmelo App, governing the collection, sharing and usage of your personal data. Also, Privacy Policy explains which rights you have as a data subject. Visit our Privacy Policy here.",
        icon: terms10
      },
      {
        term: "Service(s)",
        description: "In general, making Marmelo App available to Users, including any service offered by Marmelo in order to bring together Users with shared interests (based on their chosen search criteria) whose paths have crossed and encourage meaningful social interaction between them.",
        icon: terms11
      },
      {
        term: "Terms of Use or TOU",
        description: "These terms, which regulate the use of Marmelo App and Service.",
        icon: terms12
      },
      {
        term: "User or you",
        description: "Natural persons who enter into Agreement with Marmelo. In other words, any person who created an Account on Marmelo App.",
        icon: terms13
      },
      {
        term: "User Content",
        description:
        <>Any content provided by User on its Account, or anywhere else within Marmelo App, including any entered, recorded, stored, used, controlled, modified, disclosed, transmitted, or erased information and data, as well as User Data and User Characteristics. User Content comprises any information transmitted via chat, photos and profile information or any other manner available through Marmelo App. Furthermore, User Content includes any feedback User provides to Marmelo in regard to Marmelo App, Service, or Marmelo Content. Exceptionally, User Content excludes User Data in respect to the licence granted by User to Marmelo, in accordance with
        <a href="/section-8" className='border-b border-dark-green'>Section 5a (User Content)</a>.</>,
        icon: terms14
      },
      {
        term: "User Characteristics",
        description: "Information provided by User that describes User’s personal information, interests, lifestyle and other characteristics. The main purpose of entering User Characteristics is for Users to be displayed as a match to other Users who are interested in similar User Characteristics. Users can freely decide which User Characteristics will appear on User’s Account.",
        icon: terms15
      },
      {
        term: "User Data",
        description: "Any data in electronic form input or collected through Marmelo App from User, including personal data of such User.",
        icon: terms16
      },
      {
        term: "Website",
        description: 'Our website, located at: www.marmelo.app.',
        icon: terms17
      }
    ]
  },
  eligibility: {
    title: "2. Eligibility",
    content: ["Although we love a big community, there are some ground rules which must be fulfilled in order for one to become a User of Marmelo App.",
      "By creating an Account, you represent and warrant that:",
      "1. You are of legal age, necessary for you to be legally capable to enter into a legally binding contract. Legal age depends on the national legislation applicable to you, but usually, a natural person needs to be 18 years old. Marmelo App is not intended to be used by minors and by using Service you confirm that you fulfil this condition.",
      "In case you are not of legal age, please stop using Marmelo App immediately. Marmelo holds the right to suspend any Account of User who does not fulfil this condition immediately upon the discovery of such fact.",
      "Additionally, you must be legally permitted to be using Marmelo App by the laws of the country you reside in;",
      "2.	You have not previously been a User whose Account has been suspended or deleted by Marmelo."
    ],
  },
  acoount: {
    title: "3. Account",
    sectionsTop: [
      {
        subtitle: "Login credentials",
        content: [
          "Please have in mind that you are solely responsible to ensure that your login credentials for signing up to Marmelo App remain confidential and secure. You are liable for any activity conducted under your Account.In case you suspect that any unauthorized subject has access to your Account, please immediately contact us in accordance with Section 10 (Correspondence) in order for us to undertake the necessary measures."
        ]
      },
    ],
    section3a: {
      subtitle: "3a. Signing up",
      content: [
        "You sign up for Marmelo by creating an Account. The first step in this process is to enter your phone number, in order for us to send you a verification code via SMS. Once you verify your account by entering the verification code, you will be redirected to the following pages where you will be asked to enter additional information about yourself, which will be used to provide Service and match you with other Users who will fall under the criteria you have chosen as your preference in Marmelo App.",
        "For more information on the personal data we collect about you and how we use it once you create an Account, please visit our Privacy Policy."
      ]
    },
    section3b: {
      subtitle: "3b. Deleting the Account",
      content: ["Your Account may be deleted for several different reasons described below. However, please note that Marmelo shall not be responsible for any damage suffered by any User or any third party due to the deletion of User’s Account, regardless of the reason for its deletion."],
    },
    sectionsBottom: [
      {
        subtitle: "Deleting by User",
        content: [
          "Although we would not like to see you go, you can choose to leave Marmelo App at any time. In this case you decide to do so:"
        ],
        list: [
          "Your Account will be made invisible to other Users, so no User will be able to find you, connect with you, nor your Account will be shown as a match to any User.",
          "Any User Content you have shared during the Agreement will be permanently deleted in accordance with our Privacy Policy."
        ],
        contentEnd: [
          "Please be aware that uninstallation of Marmelo App does not automatically delete your Account – this means that, in case you uninstall Marmelo App from your phone but do not previously delete your Account, you won’t be able to access Marmelo App but your Account will still be visible to other Users. In order to prevent this from happening, make sure you have deleted your Account before uninstalling of Marmelo App."]
      },
      {
        subtitle: "Deleting by Marmelo",
        content: [
          "Marmelo holds the right to suspend and delete any Account in case the User behind that Account commits a breach of these TOU, or if Marmelo is required by the applicable law to do so.",
          <>In such an event, you will be immediately notified of the suspension of your Account via email connected to your Account. If you consider the suspension of your Account unjustified, please contact us in accordance with{' '}
          <a href="/terms-service#section-15" className='border-b border-dark-green'>Section 10 (Communication)</a> in order to obtain additional information on the reasons for the suspension, to provide evidence that the committed breach has been adequately remediated and/or other explanation which may be the reason for the suspension to be withdrawn.</>,
          "If you do not provide a response to the notice previously described within thirty (30) days upon we have sent it to you, your Account shall be permanently deleted, without the possibility of it being returned.",
          "Consequently:"
        ],
        list: [
          "Your Account will be made invisible to other Users, so no User will be able to find you, connect with you, nor your Account will be shown as a match to any User.",
          "Any User Content you have shared during the time you used Marmelo App will be permanently deleted in accordance with our Privacy Policy."
        ],
      },
      {
        subtitle: "Deleting inactive Accounts",
        content: [
          "We strive to keep our Service updated and accurate, in order to display only the confirmed and accurate data to our Users. For that reason, we hold the right to delete any Account that has not been active within a period of one (1) year. An inactive Account is the one that:"
        ],
        list: [
          "has not established contact with Marmelo App’s servers within the period of 1 (one) year, which in particular means that within the said time period Marmelo App installed on User’s particular phone has not been able to determine User’s geolocation data, or that User’s geolocation is outside of the countries in which Marmelo App is available;",
          "has not been accessed by User within the uninterrupted period of one (1) year."
        ],
        contentCenter: [
          "In this event, we will send you a warning notice prior to deleting your Account via email connected to your Account. In case we do not receive a response from you within ten (10) days upon sending the notice to you, your Account shall be permanently deleted, without the possibility of it being returned. Consequently:"
        ],
        listEnd: [
          "	your Account will be made invisible to other Users, so no User will be able to find you, to connect with you, nor your Account will be shown as a match to any User;",
          "	any User Content you have shared during the time you used Marmelo App will be permanently deleted in accordance with our Privacy Policy."
        ]
      }
    ]
  },
  service: {
    title: "4. Marmelo Service",
    sections: [
      {
        subtitle: "What is (not) a goal of Marmelo App",
        content: [
          "Marmelo Services are intended for personal, social and entertainment purposes. That means that our main goal is to help Users match and meet with other Users who share the same interests, preferences and happen to be located nearby. On the other hand, please have in mind that Marmelo App is not a relationship counselling or a marriage bureau service."
        ]
      },
      {
        subtitle: "Matching Users",
        content: [
          "Based on your Account, you may be suggested as a match to other Users whose desired Discovery Preference overlap to a certain extent with your User Characteristics, and who are nearby your current location. Once you turn on the location tracking, Marmelo will scan your surroundings within a radius of up to 200 meters, in order to find you a match. Users who wish to interact with you will be able to wave at you, as an icebreaker. You will be notified as soon as someone indicates their interest. You can accept or decline the invitation to chat, in which case your Account will be removed as a match and will not be shown as a suggestion to that same User in the future."
        ]
      },
      {
        subtitle: "Chat",
        content: [
          "Marmelo App allows Users who have waived to each other to chat via Marmelo App. However, given that our primary goal is to encourage Users to meet in person, the chat option is time-limited – you only have 60 minutes to chat and decide whether you want to meet up with the User you are chatting with. Once 60 minutes expire, the chat window disappears and you will have no possibility to write to that User again. Make sure to chat quickly!"
        ]
      },
      {
        subtitle: "Data Usage Expenses",
        content: [
          "Our essential Service is provided free of charge. While we may charge some features if you decide to subscribe to such features. Additionally, the use of Marmelo App on your mobile phone may require the use of your data service, which may result in charges and costs for you, depending on the mobile data plan you have agreed on with your mobile data provider. Marmelo has no responsibilities for any data charges, internet connection expenses, or any other fees arising out of your use of Marmelo App. For more details on this topic, please contact your mobile data provider."
        ]
      }
    ]
  },
  content: {
    title: "5. Content on Marmelo",
    section5a: "5a. User Content",
    sections: [
      {
        subtitle: "User Content Review",
        content: [
          "Marmelo has no legal obligation to review, monitor, or delete any User Content. However, we keep the right to do so if we consider it necessary at our sole discretion. In such cases, we may monitor, modify or remove User Content with or without the notice to you, in order to resolve any purported violations of Agreement or other illegal conduct in Marmelo App."
        ]
      },
      {
        subtitle: "Storing User Content",
        content: [
          "Any feature within Marmelo App that may allow you to save or otherwise store User Content is for your convenience only – please note that Marmelo does not guarantee that any User Content will be retrievable or otherwise maintained."
        ]
      },
      {
        subtitle: "License to User Content, and Warranties in Relation Thereto",
        content: [
          "User Content represents the ownership of User and Marmelo does not claim ownership or control over such content. However, by sharing User Content, you grant Marmelo an irrevocable, perpetual, non-exclusive, fully paid, worldwide license to use, reproduce, publicly perform, publicly display, adapt, modify, and distribute User Content, as well as to prepare derivative works of it and sublicense User Content in any manner.",
          "Notwithstanding the above, in this particular situation only, the license to User Content does not include User Data. User Data is processed in accordance with our Privacy Policy.",
          "You represent and warrant that User Content does not infringe or violate any third-party rights, including, without limitation, any intellectual property rights, rights of privacy or publicity, and that User Content may not harm any third party.",
          <>Furthermore, you acknowledge that you are not entitled to any kind of compensation for any use of User Data by Marmelo in accordance with{' '}
          <Link to={'/privacy-policy'} className='border-b border-dark-green'>Privacy Policy</Link>.</>
        ]
      },
    ],
    section5b: {
      subtitle: "5b. Other Users’ Content",
      content: [
        "At Marmelo, we always do our best to remove any content that may violate this Agreement. Anyhow, we cannot guarantee at all times that Users share only content compliant with Agreement. Therefore, User Content is the sole responsibility of the particular User sharing it and Marmelo has no liability in regard to it, as explained above.With that in mind, you are welcome to inform us as soon as you notice any User Content on Service that represents the breach of TOU or is offending or inappropriate so that we can undertake all necessary measures in order to remove such User Content."
      ]
    },
    section5c: {
      subtitle: "5c. Marmelo Content",
      content: [
        <>If you are curious about who owns Marmelo Content, read more on this topic in <a href="/section-" className='border-b border-dark-green'>Section 7 (Intellectual Property)</a>.</>
      ]
    }
  },
  codeConduc: {
    title: "6. Our Code of Conduct",
    content: [
      "We believe that every User of Marmelo App is unique and we love to see diversity among our Users. With that in mind, we encourage our Users to express themselves freely, which includes the opportunity to share different content via Accounts. However, in order to maintain the quality of our Service and make Marmelo App enjoyable for all Users, there are certain rules regarding User Content that must be ensured. Please make sure you comply with them at all times."
    ],
    list: [
      "User Content shall not contain any form of hate speech or any offensive or discriminatory language that may reasonably upset other Users. This particularly includes but is not limited to any content that may be deemed discriminatory towards other User’s race, nationality, religion, sex, gender expression or gender identity, sexual orientation, skin colour or physical appearance overall, and other personal characteristics of any User.",
      "Sharing of any obscene, pornographic, or otherwise offensive and undignified content via Marmelo will not be tolerated, as well as sharing of any abusive, harassing, threatening, or content supporting or encouraging any form of racism or discrimination.",
      "It is prohibited to share any User Content that may encourage any illegal activities, including but not limited to terrorism, war crimes, crimes against humanity, or any other criminal conduct.",
      "User Content shall not in any way infringe or violate third-party’s rights, including but not limited to the right of publicity, privacy, or any Intellectual Property Right.",
      "Account shall not be used to arrange any type of professional services, sell any products, or promote any paid products and/or services.",
      "Users are obliged to pay due respect to the private nature of chat messages exchanged with other Users via Marmelo App, and therefore shall refrain from disclosing such content to any person not participating in such conversation.",
      "User Content must be complete, accurate, and up-to-date, in accordance with Section 5a (User Content). It is strictly prohibited to use a false identity in Marmelo App or share any incorrect data about yourself on your Account. Also, any form of misrepresentation in Marmelo App is not permitted.",
      "One Account may be used solely by one User, and it is not permitted to share your Account credentials with other persons, unless otherwise explicitly allowed by Agreement. Additionally, you are obliged to prevent third parties from using your Account individually or simultaneously with you.",
      "Furthermore, Users are obliged to refrain from sharing any third-party data, including but not limited to any personal data, financial information, as well as posting images of any third party without their explicit permission."
    ],

    contentEnd: [
      "We would appreciate you always remembering that Marmelo App’s primary purpose is to connect Users with similar interests and help in creating interpersonal relationships between Users. Please, do not use Marmelo App for any other purposes than the ones for which it is intended.",
      "If you notice that another User violates any of the previously listed rules or otherwise behaves inappropriately in Marmelo App, please inform us. We will undertake all necessary and available measures to cease any inadequate conduct in Marmelo App and prevent it from reoccurring."
    ]
  },
  property: {
    title: "7. Intellectual Property",
    content: [
      "We are extremely glad that you enjoy using Marmelo App!",
      "We have invested a lot of time and energy into making Marmelo Content (and any other parts of Marmelo App) fun and attractive for our Users, and in order to maintain and continuously improve the quality of Marmelo App, we must establish adequate protection.",
      <>Everything you see within Marmelo App represents Marmelo’s intellectual property and as such is protected by Marmelo’s Intellectual Property Rights, unless this Agreement explicitly states different (for instance, the exception is User Content, which is the ownership of User and is licensed to Marmelo in accordance with{' '}
      <a href="/section-" className='border-b border-dark-green'>Section 5a (User Content))</a>. This, in particular, refers to any Marmelo Content, including but not limited to the source code, databases, design, images, graphic elements, logos or other signs displayed within Marmelo App, trade name and business name, trademarks or service marks, any customized work or any other related materials.</>,
      "In regard to Marmelo Content User may have only the rights specified in this Agreement. This means that, besides explicitly declared rights, User does not have any other Intellectual Property Rights under this Agreement. Marmelo App is available to Users on a limited-access basis and no ownership right may be transferred to any User, nor does Marmelo grant to User any license on any of Marmelo Content, regardless of the fact that User can access and use Marmelo App.",
      "We are happy to share Marmelo Content with you, but we must maintain its safety and for that reason, we will undertake all legal remedies for the protection of our Intellectual Property Rights in case we acknowledge that there has been any unauthorized use of Marmelo Content, entirely or partially. With that in mind, please remember that the use of Marmelo Content is allowed solely with our explicit written permission. The same goes for copying or downloading any Marmelo Content, in whole or in part.",
      "Additionally, we reserve any Intellectual Property Right not explicitly granted herein.",
      "If any third party’s intellectual property is made available within Marmelo App, Marmelo does not guarantee that its further use by User will not be deemed an intellectual property infringement. In other words, Marmelo has no responsibility in that regard."
    ],
    sections: [
      {
        subtitle: "Names and logos",
        content: [
          "We are aware that good news travels fast and we always appreciate good advertising, but please do not use Marmelo’s name and/or logo without checking it with us first, unless such authorization is explicitly given to you.",
          "Any names and/or logos that might be seen within Marmelo App, such as the names and logos of the recommended restaurants or cafes, are the intellectual property of such subjects and may not be used without their permission. Also, we are not permitted to provide any rights in respect of such names and/or logos given that they are subject to their owners’ terms, which we do not control."
        ]
      },
      {
        subtitle: "User Feedback",
        content: [
          "If you wish, you have absolute freedom to provide us with any suggestions, ideas, feedback, or other information and material. In case you decide to do so, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use such material for any purpose (including modifying or creating derivative works), and you hereby irrevocably waive any and all Intellectual Property Rights to such material."
        ]
      }
    ]
  },
  websites: {
    title: "8. Third-party Websites and Services",
    content: [
      "Sometimes, you may access information originating from another service provider through Marmelo App, for instance by clicking on a link included in Marmelo Content. Such information is the sole responsibility of those subjects and Marmelo has no liability in regards thereto.",
      "Furthermore, when you visit third-party websites by clicking on a link within Marmelo App, please have in mind that such websites also have their own terms of use and privacy policies regarding personal data. Third-party websites are in the ownership of other legal or natural persons and Marmelo has no control over them and does not decide on the content available on them. Therefore, we do not carry any responsibility neither for the availability of such websites nor for the terms of use and privacy policies published on them, which are applicable to their visitors and users.",
      "Although we may at times recommend a place for meet-up (restaurant, coffee shop, etc.), we do not guarantee the quality of the services or products offered in such places."
    ]
  },
  termsUse: {
    title: "9. Third-party Terms of Use"
  },
  communication: {
    title: "10. Communication",
    sections: [
      {
        subtitle: "General",
        content: [
          "The relationship between User and Marmelo is a two-way street, so it is important to us that you can easily reach us whenever you have a reason to do so, as well as that we can contact you in order to deliver relevant notices to you."
        ],
        subsections: [
          {
            head: "1. If you wish to contact us, you can do so by sending an email to the address: hello@marmelo.app, or by clicking the “Help and Support” button under the “Contact Us” section in Settings, available in Marmelo App. Additionally, you may send us your letter via registered post on our address: MARMELO TECHNOLOGIES INC, 1007 N. ORANGE ST. 4TH FLOOR, SUITE 1382 WILMINGTON DE 19801.",
          },
          {
            head: "2. We may reach out to you in one of the following ways:",
            list: [
              "by sending an email to an email address associated with your Account,",
              "via push notifications within the Marmelo App."
            ]
          }
        ]
      },
      {
        subtitle: " Delivery",
        content: [
          "Any notice sent in accordance with Agreement shall be deemed to have been received:",
          "1. the following day upon sending the email to the other Party’s address;",
          "2. Ten workdays from the date the notice is delivered via registered post or courier. Workday shall have the meaning of workday in accordance with the laws of the country where Marmelo’s seat is located."
        ]
      },
      {
        subtitle: "Notices by Marmelo",
        content: [
          "Notices we send to you may include information about the changes we have made in relation to Account, Marmelo App, Service, TOU, Privacy Policy, or other parts of Marmelo Content, which may be of relevance to you.",
          "Additionally, push notifications we send you may include, but are not limited to:"
        ],
        list: [
          "information about the new match Marmelo has found for you, as well as about its expiration,",
          "match request other User has sent you,",
          "the new location spot available near you."
        ]
      },
      {
        subtitle: "Advertising and Promotions",
        content: [
          "We might send you notifications on offers, recommendations of popular places and new products, events, or other promotional material, provided you consented to receiving such information.",
          "You can adjust the notifications which you wish to receive from us, under the “Notifications” section in Settings, available in Marmelo App."
        ],
      }
    ]
  },
  privacy: {
    title: "11. Privacy and Personal Data Protection",
    content: [
      "Marmelo is highly aware of the importance of protecting your personal data which we process in order to provide Services.",
      <>By creating an Account, you accept our{" "}
      <Link to={'/privacy-policy'} className='border-b border-dark-green'>Privacy Policy</Link> and confirm that you are familiar with the manner of collecting and processing your personal data by Marmelo. Additionally, you acknowledge and agree that any User Content you might post or otherwise share with Marmelo, with the purpose for it to be shared with other Users, may be disclosed accordingly.</>,
      "Location Data. Marmelo App is a location-based app, which means that we will need to know your location in order to provide you with the most relevant information, such as nearby places and/or Users who comply with your preferred User Characteristics. Our goal is to connect you with other Users who might be a match with you, within a radius of 200 m from your location. With that goal, we may use different reference points, i.e., the location determining software in order to detect your location. Please have in mind that Marmelo will not be able to do this in case you disable GPS, Bluetooth or other similar software on your mobile phone, as well as if you disable Marmelo App to access your location data. Our Privacy Policy further explains how we process location data referring to you."
    ]
  },
  interaction: {
    title: "12. Interactions between Users",
    content: [
      "Although we attempt to undertake necessary caution measures in order to verify the information provided by each User, please have in mind that we do not conduct any type of background checks, screenings or verifications with respect to our Users. Consequently, we do not make any representations or warranties regarding the conduct of other Users. You are solely responsible for verifying the identity of other Users with whom you interact via Marmelo app, as well as for undertaking any other measure in order to maintain your safety.",
      "We kindly advise you not to reveal an excessive amount of personal information to other Users via the chat option within Marmelo App, before actually meeting them. In case you arrange a real-life meeting with another User, Marmelo recommends you stay within the location recognized by Marmelo App as a cross-path between you and another User, i.e., to ensure that such meeting is scheduled in a public place. Also, we suggest you always notify a friend, family member, or another close person about the scheduled meeting upfront."
    ]
  },
  warranties: {
    title: "13. Warranties Disclaimer",
    content: [
      "Marmelo does not warrant the compatibility between Users who are matched by Marmelo App and we may under no circumstances be responsible for any damage, loss, or other harmful consequence arising from any User's conduct or use of Services, including, but without limitation to fraud, identity theft, any conduct of commercial nature, unauthorized use of User Content provided by other Users, or any other misuse of any information provided via Marmelo.",
      "NO INFORMATION, STATEMENT, OPINION, OR ADVICE SHARED VIA MARMELO APP (INCLUDING, IN PARTICULAR, ANY USER CONTENT) SHALL BE RELIED UPON. PLEASE BE AWARE THAT YOU ARE USING MARMELO APP AT YOUR SOLE RISK.",
      "SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED.",
      "TO THE FULLEST EXTENT PERMITTED UNDER THE APPLICABLE LAW, MARMELO HEREBY DISCLAIMS ANY AND ALL WARRANTIES, INCLUDING THE MERCHANTABILITY WARRANTIES, WARRANTIES ARISING FROM THE COURSE OF DEALING, COURSE OF PERFORMANCE, OR USAGE OF TRADE. ANY WARRANTIES OF MARMELO REGARDING MARMELO APP, SERVICE, OR MARMELO CONTENT THAT ARE NOT EXPLICITLY STATED HEREIN SHALL BE DEEMED WITHHELD. IN PARTICULARLY, MARMELO DOES NOT WARRANT:"
    ],
    list: [
      "FITNESS FOR A PARTICULAR PURPOSE OF SERVICE, NOR THAT SERVICE WILL MEET USER’S SPECIFIC REQUIREMENTS.",
      "ACCURACY OR RELIABILITY OF INFORMATION OBTAINED THROUGH THE USE OF SERVICES."
    ],
    contentCenter: [
      "We attempt to ensure that Service is uninterrupted, error-free, secure and timely, as well as its quality is satisfactory for our Users. Also, we attempt to repair any deviation which may occur in relation to Marmelo App or Service. However, it might happen at times that Service does not fulfill such expectations and we do not warrant that it will.",
      "Marmelo reserves the right (but has no obligation to), without notice to Users:",
    ],
    sublist: [
      "Modify, interrupt, or terminate access to Marmelo App, or any part of Service or any feature within Marmelo App, for any reason.",
      "Modify Marmelo App or any part of it.",
      "Suspend the performance of Marmelo App in case it is necessary for the conduct of maintenance, correction of an error, or other reasons."
    ]
  },
  liability: {
    title: "14. Liability",
    content: [
      "Matching people is a very responsible and demanding task – the Marmelo team works very hard to provide the best possible Service to Users. Anyhow, without certain limitations and exclusions of Marmelo’s liability, Marmelo App and Service would not be provided, having in mind their purpose and nature. Therefore, User understands that the disclaimers contained in these Terms of Use represent a reasonable allocation of risk and are the fundamental element of Agreement.",
      "TO THE MAXIMUM EXTENT PERMITTED BY THE APPLICABLE LAW, IN NO EVENT MAY MARMELO, INCLUDING ITS EMPLOYEES, SUPPLIERS AND/OR REPRESENTATIVES, BE DEEMED AS LIABLE FOR ANY CONSEQUENTIAL, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, DAMAGES, OR ANY DAMAGES WHATSOEVER, OR ANY LOSS OF DATA, PROFIT, INCOME, OR GOODWILL, ARISING OUT OF OR IN CONNECTION TO:"
    ],
    list: [
      "USE OF MARMELO APP OR SERVICES,",
      "THE DELAY OR INABILITY TO USE MARMELO APP OR SERVICE,",
      "ANY USER CONTENT,",
      "COMMUNICATION WITH OTHER USERS OF MARMELO,",
      "ANY ACT OR EVENT INCURRED IN THE LOCATION THAT USER VISITED DUE TO ITS USE OF MARMELO APP,",
      "ANY OTHER INFORMATION OBTAINED THROUGH MARMELO APP, OR OTHERWISE ARISING OUT OF THE USE OF MARMELO APP, REGARDLESS OF WHETHER IT IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE."
    ],
    contentCenter: [
      "IF ANY DISCLAIMER OR LIMITATION OF LIABILITY CONTAINED IN THIS SECTION HAPPENS TO BE INAPPLICABLE TO ANY USER, DUE TO THE FACT THAT USER’S COUNTRY OF RESIDENCE PROHIBITS THE LIMITATION OF ANY PARTICULAR DAMAGE, USER MAY HAVE SOME ADDITIONAL RIGHTS. IN CASE ANY PART OF THIS SECTION IS HELD TO BE INVALID UNDER THE APPLICABLE LAW, SUCH INVALIDITY SHALL NOT AFFECT THE VALIDITY AND ENFORCEABILITY OF THE REMAINING PARTS OF THIS SECTION.",
    ],
    subSections: [
      {
        title: "LIABILITY CAP",
        content: [
          "IN CASE ANY DISCLAIMER OF LIABILITY CONTAINED HEREIN IS FOUND TO BE VOID OR UNENFORCEABLE, OR IF ANY LIABILITY OF MARMELO OCCURS TO BE ESTABLISHED, MARMELO’S AGGREGATE LIABILITY SHALL NOT EXCEED THE AMOUNT OF 100 USD (ONE HUNDRED AMERICAN DOLLARS)."
        ]
      },
      {
        title: "Exceptions",
        content: [
          "In some cases, the limitation of Marmelo’s liability does not apply:"
        ],
        list: [
          "In case we commit a willful breach of any of our obligations arising from the Agreement,",
          "In the event of death or personal injury caused by any defective item provided or produced by Marmelo."
        ]
      },
      {
        title: "Force Majeure",
        content: [
          "Neither User nor Marmelo shall be deemed liable for any breach of obligations arising from Agreement if such breach is a result of a Force Majeure. Anyhow, this exception may be applied only to the extent that the Force Majeure prevents or hinders the performance of the respective obligation."
        ]
      }
    ]
  },
  indemnification: {
    title: "15. Indemnification",
    content: [
      "Any User Content, as well as any other information you upload, submit, or otherwise share with Marmelo, remains your sole responsibility. Accordingly, you agree to fully indemnify, defend, and hold Marmelo harmless from any and all claims, complaints, and/or demands directed against Marmelo, and all damages, liabilities, penalties, fines, costs and expenses payable to any third party (including attorney’s fees) arising out of or connected to Agreement. This particularly refers to any claim, demand, liability and/or expense in relation to:"
    ],
    list: [
      "Your use of Marmelo App and/or Service;",
      "User Content and other information you upload, submit or otherwise share with Marmelo;",
      "Any negligent acts or willful misconduct you conduct;",
      "Your activity resulting in any violation of these TOU;",
      "Your violation of any law or any third-party rights, including in particular (but not limited to) any Intellectual Property Right and any other personal or proprietary right."
    ]
  },
  waiver: {
    title: "16. No Waiver",
    content: [
      "Failure by neither Party to exercise or enforce any right or provision of TOU shall not constitute a waiver of such right or provision.",
      "No waiver of a breach of this Agreement will constitute a waiver of any other breach of this Agreement."
    ]
  },
  severability: {
    title: "17. Severability",
    content: [
      "If any Section of Agreement or part thereof is found invalid by the competent arbiter or any court having competent jurisdiction, the invalidity of such Section shall not affect the validity of the remaining Sections of Agreement, which shall remain in full force and effect.",
      "In case any Section of Agreement or part thereof violates any mandatory rule of the applicable law and consequently proves to be void, such Section shall, for those specific circumstances and only in the particular respect in which it is void, be deemed to have been amended to comply with the law. Any such amendment shall be limited to the minimum necessary to make the Section valid and shall retain as much of its original extent and meaning as possible."
    ]
  },
  modifications: {
    title: "18. Modifications of Terms of Use",
  },
  termination: {
    title: "19. Termination",
    content: [
      "This Agreement remains at force and shall continue to be binding until the occurrence of one of the following events:",
    ],
    list: [
      "You decide to terminate it by deleting your Account and ceasing to use Marmelo App.",
      "We decide to terminate it by deleting your Account."
    ],
    contentCenter: [
      "Termination of Agreement in any event includes the disabling of Account as well as the deleting of all the User Content as a part thereof."
    ],
    sections: [
      {
        title: "Termination by User",
        content: [
          "If you consider you and Marmelo App are not a match, you may delete your Account at any time. In such a case, Section “Profile” > “Settings” > “Delete Account” shall apply."
        ]
      },
      {
        title: "Termination by Marmelo",
        content: [
          "Marmelo may deny you access to all or any part of the Services or terminate your Account with or without prior notice, if you engage in any conduct or activities that Marmelo determines, at its sole discretion, violate this Agreement or the rights of Marmelo or any third party, or is otherwise inappropriate. Without limitation, Marmelo may deny you access to the Services or Marmelo App or terminate this Agreement and your Account. In case of a TOU breach committed by User for whatever reason, or if applicable law compels Marmelo to do so, Marmelo may delete your Account. In such an event, Section “User Account” > “Deleting the Account” > “Deleting by Marmelo” shall apply."
        ]
      },
      {
        title: "Survival",
        content: [
          "Even if Agreement is terminated the following Sections shall continue to apply and be binding for both Marmelo and User:"
        ],
        list: [
          "Section 7 (Intellectual Property)",
          "Section 13 (Warranties Disclaimer)",
          "Section 14 (Liability)",
          "Section 15 (Indemnification)",
          "Section 19 (Termination)",
          "Section 20 (Dispute Resolution)",
          "Section 21 (No Class Action)"
        ]
      },
      {
        title: "User Content Retention",
        content: [
          "Upon the termination of Agreement other than for the breach of the Agreement by User, User may request from Marmelo to deliver any User Content that User has provided during the course of Agreement.",
          "Once Agreement is terminated, Account will be irreversibly suspended and any User Content will be anonymized in order to make User Content unreadable unless otherwise stipulated by these Terms of Use. This means that Marmelo will keep such information but in an unreadable form solely for statistical purposes. Anonymized information contains no personal data.",
        ]
      }
    ]
  },
  dispute: {
    title: "20. Dispute Resolution",
    sections: [
      {
        title: "Governing Law",
        content: [
          "Agreement is drafted and shall be governed and enforced in accordance with the laws of the State of Delaware, without regard to its conflict of laws rules. The same is applicable to any matter or dispute that may arise out of or in relation to the subject of this Agreement. The United Nations Convention on the International Sale of Goods is specifically excluded from application to Agreement."
        ]
      },
      {
        title: "Mandatory Negotiations",
        content: [
          <>Before initiating the procedure of the dispute resolution, Marmelo and User agree to first attempt in good faith to settle the potential dispute amicably. This means that the Party asserting dispute shall deliver the written notice to the other Party comprising the description of the present facts and the relevant circumstances of such dispute, including any relevant documentation, and request the other Party to respond to it or settle the dispute within 30 days following the receipt of such notice. Notice shall be delivered in accordance with{' '}
          <a href="/terms-service#section-15" className='border-b border-dark-green'>Section 10 (Communication)</a>.</>,
          "Mandatory negotiations procedure, as described above, represents a mandatory condition preceding the initiation of any arbitration or filing any claim against any Party."
        ]
      },
      {
        title: "Dispute Resolution",
        content: [
          "Any dispute which had been intended to be resolved by arbitration shall be subject to the exclusive jurisdiction of the competent court in the state of Delaware.",
          "Notwithstanding the provisions above, Marmelo may, at its sole discretion, assert the protection of its Intellectual Property Rights, as well as its rights concerning confidential information or data processing anywhere in the world."
        ]
      }
    ]
  },
  action: {
    title: "21. No Class Action",
    content: [
      "In case of any dispute, we only consider it fair to settle it individually. With that in mind, User acknowledges and accepts that any dispute arising in connection to Marmelo App and/or Service shall be resolved on an individual basis and not as any form of a class proceeding. User waives the right to participate in any class proceeding in relation to this Agreement, unless where such waiver is prohibited by applicable law. Furthermore, User agrees to withdraw from any class proceeding against Marmelo.",
      "The arbitrator presiding in the dispute resolution may not consolidate more than one User’s claims and may not otherwise govern any class proceeding."
    ]
  },
  agreement: {
    title: "22. Entire Agreement",
    content: [
      "In case of conflict between any provision of Agreement and any statement, representation, or other information published within Marmelo App or contained in any other materials or communications, the Agreement shall prevail.",
      "These TOU comprise the fundamental rules which you need to know in respect to the use of Marmelo App and provision of Services. Although Privacy Policy and Cookie Policy also make an integral part of Agreement along with TOU, in case of any conflict between one or both of these documents with TOU, these TOU shall prevail."
    ]
  }
}





