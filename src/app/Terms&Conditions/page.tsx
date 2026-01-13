"use client";

import { useState } from "react";

const termsContent = [
  {
    title: "Interpretation and Definitions",
    content: [
      "The words of which the initial letter is capitalized have meanings defined under the following conditions.",
      "The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."
    ]
  },
  {
    title: "Definitions",
    content: [
      "Affiliate means an entity that controls, is controlled by or is under common control with a party.",
      "Country refers to: Texas, United States.",
      "Company refers to Avinya Constructions and Management.",
      "Device means any device that can access the Service such as a computer, cellphone or digital tablet.",
      "Service refers to the Website.",
      "Terms and Conditions mean these Terms that form the entire agreement between You and the Company.",
      "Third-party Social Media Service means any services or content provided by a third-party.",
      "Website refers to Avinya Constructions and Management, accessible from www.avinyaconstructions.com.",
      "You means the individual or legal entity accessing or using the Service."
    ]
  },
  {
    title: "Acknowledgment",
    content: [
      "These Terms and Conditions govern the use of this Service and the agreement between You and the Company.",
      "Your access to and use of the Service is conditioned on acceptance of these Terms.",
      "If You disagree with any part of these Terms, You may not access the Service.",
      "You represent that you are over the age of 18.",
      "Your use of the Service is also subject to the Privacy Policy of the Company."
    ]
  },
  {
    title: "Links to Other Websites",
    content: [
      "Our Service may contain links to third-party websites or services not owned or controlled by the Company.",
      "The Company assumes no responsibility for third-party content, privacy policies, or practices.",
      "We strongly advise You to read the terms and conditions of any third-party websites you visit."
    ]
  },
  {
    title: "Termination",
    content: [
      "We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.",
      "Upon termination, Your right to use the Service will cease immediately."
    ]
  },
  {
    title: "Limitation of Liability",
    content: [
      "The Company's total liability shall be limited to the amount paid by You or 100 USD if nothing was purchased.",
      "In no event shall the Company be liable for indirect or consequential damages.",
      "Some jurisdictions do not allow certain liability limitations, so some restrictions may not apply."
    ]
  },
  {
    title: '"AS IS" and "AS AVAILABLE" Disclaimer',
    content: [
      "The Service is provided on an 'AS IS' and 'AS AVAILABLE' basis without warranties of any kind.",
      "The Company disclaims all warranties including merchantability and fitness for a particular purpose.",
      "We do not guarantee uninterrupted, error-free, or secure operation of the Service."
    ]
  },
  {
    title: "Governing Law",
    content: [
      "The laws of the State of Texas, United States, shall govern these Terms.",
      "Your use of the Service may be subject to additional local or international laws."
    ]
  },
  {
    title: "Disputes Resolution",
    content: [
      "If You have any dispute, You agree to attempt informal resolution by contacting the Company first."
    ]
  },
  {
    title: "United States Legal Compliance",
    content: [
      "You represent that You are not located in an embargoed country.",
      "You are not listed on any United States government restricted parties list."
    ]
  },
  {
    title: "Severability and Waiver",
    content: [
      "If any provision is found unenforceable, the remaining provisions remain in effect.",
      "Failure to enforce any right does not constitute a waiver of that right."
    ]
  },
  {
    title: "Translation Interpretation",
    content: [
      "In case of dispute, the original English version of these Terms shall prevail."
    ]
  },
  {
    title: "Changes to These Terms",
    content: [
      "We reserve the right to modify these Terms at any time.",
      "Material changes will be communicated at least 30 days in advance where possible.",
      "Continued use of the Service means acceptance of the revised Terms."
    ]
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions about these Terms and Conditions:",
      "Email: avinya@avinyaconstructions.com",
      "Website: www.avinyaconstructions.com"
    ]
  }
];


export default function TermsAndConditions() {
  const [active, setActive] = useState(0);

  return (
    <section className="terms-and-conditions">
      <div className="terms-container">

        {/* LEFT SIDEBAR */}
        <aside className="terms-sidebar">
          {termsContent.map((item, index) => (
            <div
              key={index}
              className={`terms-step ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            >
              <span className="step-number">{index + 1}</span>
              <span className="step-text">{item.title}</span>
            </div>
          ))}
        </aside>

        {/* RIGHT CONTENT */}
        <main className="terms-content">
          <h1 className="terms-title">Terms and Conditions</h1>
          <span className="terms-updated">Last updated: September 08, 2024</span>

          <div className="terms-section">
            <h2>{termsContent[active].title}</h2>

            {termsContent[active].content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </main>

      </div>
    </section>
  );
}
