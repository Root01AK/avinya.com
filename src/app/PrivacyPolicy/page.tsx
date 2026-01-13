"use client";

import { useState } from "react";

const termsContent = [
  {
    title: "Accepting the terms",
    content: [
      "By accessing or using our services, you agree to be bound by these Terms and Conditions.",
      "If you do not agree with any part of the terms, you may not use the service.",
      "These terms apply to all visitors, users, and others who access the service."
    ]
  },
  {
    title: "Changes to terms",
    content: [
      "We reserve the right to modify or replace these terms at any time.",
      "Changes will be effective immediately upon posting on this page.",
      "Continued use of the service constitutes acceptance of the updated terms."
    ]
  },
  {
    title: "Using our product",
    content: [
      "You agree to use the product only for lawful purposes.",
      "Any attempt to misuse, exploit, or disrupt the service is strictly prohibited."
    ]
  },
  {
    title: "General restrictions",
    content: [
      "You may not copy, modify, distribute, or reverse engineer the service.",
      "Unauthorized access attempts may result in suspension or legal action."
    ]
  },
  {
    title: "Content policy",
    content: [
      "Users are responsible for all content they upload or submit.",
      "Content that is illegal, offensive, or misleading is not permitted."
    ]
  },
  {
    title: "Your rights",
    content: [
      "You retain ownership of the content you provide.",
      "You may request access, correction, or deletion of your data."
    ]
  },
  {
    title: "Copyright policy",
    content: [
      "All materials are protected under applicable copyright laws.",
      "Unauthorized use of intellectual property is prohibited."
    ]
  },
  {
    title: "Relationship guidelines",
    content: [
      "Nothing in these terms creates a partnership or employment relationship.",
      "Each party operates independently."
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
          <span className="terms-updated">Updated April 2020</span>

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
