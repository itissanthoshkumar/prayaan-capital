import { Shield } from "lucide-react";
import LegalPageTemplate from "@/components/templates/LegalPageTemplate";

const intro = (
  <div className="space-y-4">
    <p>{`Prayaan Capital Private Limited (the "Company") renders certain services on its proprietary website, i.e. the https://prayaancapital.com/ (the "Website"). The Company is committed to upholding the privacy and security of the information supplied by every person ("User") accessing and using any version of the Website on a compatible device. This privacy policy ("Privacy Policy") briefly provides the manner in which the Company collects and uses the User's Personal Information (as defined hereinafter) and data collected and processed from persons who visit and/or use the Website.`}</p>
    <p>{`By downloading and/or accessing the Website, the person who so downloads and/or uses the Website, agrees and consents to this Privacy Policy. All the collection and processing of the data and information is performed as per the applicable law in India. The Company reserves the right to make changes to this Privacy Policy by posting the new/updated version and the User's continued use and/or accessing the Website shall indicate the User's agreement to such changes. If the Company makes any material changes to this Privacy Policy, the Company will notify the Users either through the contact number or the address or email address provided by the User to the Company, or by placing a prominent notice on the Website. The Company urges and encourages the Users and/or the visitors of the Website to peruse this Privacy Policy so as to better understand their rights and obligations under this Privacy Policy.`}</p>
  </div>
);

const sections = [
  {
    title: "I. Audience",
    content: <p>{`This Website is intended for the use of Indian residents only and the User's continuing access to the Website, shall be construed as a deemed declaration that he/she is an Indian resident. This Privacy Policy applies to all Users of the Website, including but not limited to visitors, the customers that use the services the Company offers, including merchants, franchises, end users and back-end technology service providers/ partners.`}</p>,
  },
  {
    title: "II. Purpose of this Policy",
    content: <p>{`All the collection and processing of the Personal Information is performed as per the applicable law in India. The Company endeavours to have a transparent mechanism to collect and process the Personal Information of the Users and this Privacy Policy is being published in furtherance of the same. The Company recognizes that the Users of this Website are concerned about the information they provide to the Company, and how the Company treats such information. The Company has designed this Privacy Policy to explain how the Company handles information including Personal Information collected from Users who seek and use the services and submit information on the Website. If the Users have any questions about the Company's privacy practices, please write to the Company at customercare@prayaancapital.com.`}</p>,
  },
  {
    title: "III. Information Collected",
    content: (
      <>
        <p>{`The Company may collect User's personal information, which shall include any information related to the User which, either directly or indirectly, in combination with other information available or likely to be available with a body corporate, which is capable of identifying the User, including, but not limited to name, address, passwords, date of birth, phone number, fax number, email address, PAN, Aadhaar number, driving license/passport/voter identity card/government issued identification card, financial profiles like the name of the User's employer, monthly salary, annual income, net worth, details of the User's assets and liabilities, copies of identification documents, e-KYC, demographic information, photographs, biometric information, digital signature keys, bank account, card information and other personal information and shall include ("User Information/Personal Information"):`}</p>
        <p>{`A. Mandatory information: collected at the time of registration on the Website which is required to enable the User to login to the Website and for the Company to: (i) verify the User's identity; (ii) determine the User's eligibility for taking loans as per rules that may be determined by: (a) the Company; (b) the Company's lending partners; or (c) both (a) and (b); and (iii) safeguard against illegal activities like fraud, cheating, misappropriation, etcetera.`}</p>
        <p>{`B. Optional information that the User voluntarily provide to the Company: In order to use the facilities and services available on the Website, the Company may be required, from time to time, to provide certain additional personal information after registration on the Website, which information shall be collected only upon receiving the User's express consent.`}</p>
        <p>{`C. Anonymous Information: The Company may also automatically receive and collect certain anonymous information in standard usage logs through the web server, including mobile-identification information obtained from the equivalent of "cookies" sent to the Website, including mobile network information, standard web log information, traffic to and from the Website, tracking inside the Website and any other available information, from:`}</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>{`an Internet Protocol ("IP") address, assigned to the device used by the User;`}</li>
          <li>{`troubleshooting/administering the Website;`}</li>
          <li>{`the domain server through which the User accesses the Website and the functions and features therein; and`}</li>
          <li>{`the type of device used by the User ("Device").`}</li>
        </ul>
        <p>{`Depending on the activity, some of the Personal Information the Company may ask the User to provide is identified as mandatory and some is identified as voluntary. If the Company does not provide the mandatory information for a particular activity that requires it, the User may not be able to engage in that activity.`}</p>
        <p>{`Certain portions of the Personal Information will remain private and some will be displayed to other Users, after clearly highlighting the same to the User, which information is private and what may be made public.`}</p>
        <p>{`In order to enhance the Company's ability to provide valuable services and experiences to the Users, the Company may automatically receive, collect and analyse the User's location information which may be accessed through a variety of methods including, GPS, IP address, cell tower location, Device information (including storage, model, installed apps, WiFi, mobile network), transactional and promotional SMS, communication information including the User's contacts to provide the User with customized services.`}</p>
      </>
    ),
  },
  {
    title: "IV. Method and manner of use of User Information",
    content: (
      <>
        <p>{`The Company shall use Personal Information only to provide services to its Users, enhance the operation of the Website, improve the Company's marketing and promotional efforts and to provide the Users a better experience.`}</p>
        <p>{`When the User registers on the Website, the Company will use the information supplied by the User for its business, including to access credit reports from credit bureaus and for identity verification services to evaluate the User's loan request in the context of the User's complete financial situation.`}</p>
        <p>{`The Company will also use the Personal Information that may be required to enable activities and transactions during the process of lending, such as:`}</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>{`Generating and maintaining User profiles on the Website;`}</li>
          <li>{`Providing personalized features;`}</li>
          <li>{`Aiding financial services organizations to provide better services;`}</li>
          <li>{`Facilitating collection activities as needed;`}</li>
          <li>{`Maintaining regular communications with the User concerning transactions the User initiates, such as requesting information or assistance, submitting a loan request, making payments, transferring funds, etc.`}</li>
          <li>{`Modifying the Website from time to time to cater to the User's interests;`}</li>
          <li>{`Providing the Website and the functions and features therein, efficiently; and`}</li>
          <li>{`Preserving social history as governed by existing law or policy;`}</li>
        </ul>
        <p>{`The User acknowledges that the User is licensing the Company to use, modify, display, distribute and create new material from the information that the User provides through the Website, to render certain services on the Website. By providing such information, the User automatically agrees, or promises that the owner of such information has expressly agreed to allow or license, as the case may be, in favour of the Company to use such information in the manner set out in this Privacy Policy, without the payment of any fees by the Company. The Company may, to the extent permitted by law, also use, license, reproduce, distribute, disclose and aggregate, non-personally identifiable information that is derived through the User's use of the Website and the User hereby provides consent for the same.`}</p>
        <p>{`Please note that the Personal Information may also be shared with third party products/service providers who shall also be subject to the privacy principles contained in this Privacy Policy. The Website may also link to a wide variety of other sites/links. These sites are governed by their own privacy policies and the Company is not responsible for the content or information practices of such third parties.`}</p>
        <p>{`The Company may store Personal Information even after the User ceases to use the Website or retain the same for general record keeping purposes and statistical research.`}</p>
        <p>{`The Company may also use Personal Information to troubleshoot, resolve disputes, accomplish administrative tasks, contact the User, enforce the Company's agreements with the User, including the Website's Terms & Conditions and this Privacy Policy, comply with applicable law, and cooperate with law enforcement activities. If the User opts to open an account/use the Website or use the Company's services, the User may be required to supply the User's Personal Information. If the User wishes to opt-out receiving such communication from the Company, the User can do so at customercare@prayaancapital.com or by sending a SMS or calling us at +91 6380589898.`}</p>
      </>
    ),
  },
  {
    title: "V. Cross-Border Information",
    content: <p>{`The Internet is spread worldwide and if the User is downloading, accessing, browsing and using this Website from outside India, the User's visit will necessarily result in the transfer of information across international borders. By visiting this Website and communicating electronically with the Company while using this Website, the User is consenting to these transfers.`}</p>,
  },
  {
    title: "VI. Processing of Data",
    content: <p>{`The Company may also process any Personal Information collected from the Users for legitimate commercial purposes including providing its services. The Company implements appropriate technical and organizational measures to ensure a level of security appropriate to the risk of processing of such Personal Information about Users such as: (i) only sharing and providing access to the User's Personal Information to the minimum extent necessary, subject to confidentiality restrictions where appropriate, and on an anonymized basis wherever possible; (ii) using secure servers to store the User's information; (iii) verifying the identity of any individual who requests access to information prior to granting them access to Personal Information; and (iv) using Secure Sockets Layer (SSL) software or other similar encryption technologies to encrypt any payment transactions the User makes on or via the Website.`}</p>,
  },
  {
    title: "VII. Information security",
    content: (
      <>
        <p>{`The security of the User's Personal Information is important to the Company, but please remember that no method of transmission over the internet, or method of electronic storage, is 100% secure. While the Company strives to use commercially acceptable means to protect the User's Personal Information, the Company cannot guarantee its absolute security.`}</p>
        <p>{`The Company takes precautions to protect its data that contains the User's Personal Information. However, as a consideration for accessing or interacting with this Website in any manner, the User waives all claims of any nature against this Website and the Company, concerning the loss, alteration, or misuse of his/her Personal Information. The User must assume that it is possible for the User's Personal Information to be obtained by others, such as "hackers," and used in an inappropriate manner that may cause harm to the User and that the User agrees that the Company is not responsible to provide any damages to the User in relation to the same.`}</p>
        <p>{`If a password is used to help protect User accounts and account information, it is the responsibility of the User to keep such password confidential.`}</p>
      </>
    ),
  },
  {
    title: "VIII. Rights of User and Opting out",
    content: (
      <>
        <p>{`The Users have the right to (i) access, correct, delete the User's Personal Information, subject to the Company successfully verifying the User's identity; (ii) object to the Company processing the User's Personal Information on legitimate grounds; or (iii) withdraw his/her consent to the Company's use of his/her Personal Information at any time, where the Company relies on the User's consent to use or process that information. ("Opt Out")`}</p>
        <p>{`To Opt Out, the User must send the Company an Opt Out request by writing to the Company at customercare@prayaancapital.com.`}</p>
        <p>{`Please note that the User's Opting Out, will not affect the lawfulness of the Company's use and processing of the User's information on the basis of his/her consent, where such consent was required, and the right to have the Personal Information transferred to another data controller, before the User Opts Out. Further, if the User Opts Out, he/she will not be able to use the Website or any of the services provided by the Website.`}</p>
      </>
    ),
  },
  {
    title: "IX. Usage of Cookies",
    content: (
      <>
        <p>{`"Cookies" are small pieces of information that are stored by the browser / application interface on the User's Device's hard drive when the User interacts with the browser through links provided on the Website or otherwise.`}</p>
        <p>{`The Company uses Cookies to collect information about how the Website is being used, to save the User's time while using the Website, and to identify any technical problems. In addition, the Company may use third party advertisers to display advertisements on the Website.`}</p>
        <p>{`Please note that the User may encounter "Cookies" or other similar functions on the Website that are placed by third parties. The Company does not control the use of Cookies by third parties.`}</p>
        <p>{`The User has the ability to accept or decline Cookies. The Company processes and keeps all data for the Company's own use and, if the User wishes to opt-out from tracking by the Company, the User can do so by writing to the Company at customercare@prayaancapital.com.`}</p>
      </>
    ),
  },
  {
    title: "X. Business Transfer and Consulting",
    content: (
      <>
        <p>{`The Company reserves the right to disclose and transfer all information to a subsequent owner, co-owner or operator of the Website. Further, the Company may partner with another party to provide specific services, if required. When the User signs-up for the services, the Company will share names, or other Personal Information that is necessary for the third party to provide these services.`}</p>
        <p>{`Access to the User's Personal Information is limited to employees, agents, consultants or partners and third parties, who the Company reasonably believes, will need that information to enable the Company to provide services to the User.`}</p>
      </>
    ),
  },
  {
    title: "XI. Grievance Officer",
    content: (
      <>
        <p>{`In accordance with Information Technology Act, 2000 and rules made thereunder, the contact details of the Company's grievance officer are provided below, in the event the User has any questions or complaints regarding the Company's Privacy Policy or practices:`}</p>
        <p>{`Grievance Redressal Officer: Harish Kumar E`}</p>
        <p>{`Phone: +91-9600133756 | Email: gro@prayaancapital.com`}</p>
      </>
    ),
  },
  {
    title: "XII. E.U. Specific Provisions",
    content: <p>{`This Privacy Policy is made available on the Application in compliance with the provisions of the European Union General Data Protection Regulations (Regulation 2016/679).`}</p>,
  },
  {
    title: "Contact Information",
    content: (
      <>
        <p>{`Corporate Office:`}</p>
        <p>{`Prayaan Capital private limited`}<br />{`No. 40/97, Minerva Building, 2nd Floor`}<br />{`Santhome high road`}<br />{`Chennai-600028`}<br />{`Phone: +91-6380589898`}<br />{`Email: info@prayaancapital.com`}</p>
        <p>{`Customer Care Email: customercare@prayaancapital.com`}</p>
        <p>{`CIN: U65900TN2018PTC126232`}</p>
      </>
    ),
  },
  {
    title: "Fraud Disclaimer",
    content: (
      <>
        <p>{`Prayaan Capital Private Limited (hereinafter referred to as 'the Company') has been made aware that persons purporting to act as, or on the Company's behalf and/or using the Company's name and logo (either in full or in part or similar names as owned and used by the Company) have been approaching prospective loan seekers to demonstrate that they represent the Company. These approaches are intended to defraud individuals and damage the reputation of the Company.`}</p>
        <p>{`Any communication that is sent from the Company is either sent from our registered domain name @prayaancapital.com or through formal correspondence. Kindly refrain from transferring any monies to any individual or entity without appropriate due diligence being conducted and verifying the name and details of such individual or entity.`}</p>
        <p>{`Please call us at 06380589898 or forward doubtful email communications to us at info@prayaancapital.com, along with such purported communication, and alternatively report this to your local police.`}</p>
        <p>{`Prayaan Capital Private Limited does not tolerate such frauds/criminal activity in any form and shall not be considered liable for any loss or inconvenience resulting from communication or business transactions with unauthorized persons.`}</p>
        <p>{`Please note that all announcements and information emanating from the Company will be published on its official website.`}</p>
        <p>{`Prayaan Capital © 2020 - 2026 All Rights Reserved.`}</p>
      </>
    ),
  },
];

const PrivacyPolicy = () => (
  <LegalPageTemplate
    eyebrow="Legal"
    icon={Shield}
    title="Privacy Policy"
    intro={intro}
    sections={sections}
  />
);

export default PrivacyPolicy;
