"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const categories = [
  "Services & Expertise",
  "Project Planning & Execution",
  "Cost, Budget & Contract",
  "Quality, Safety & Compliance",
];

const faqsData = [
  {
    category: "Services & Expertise",
    question: "What services does Avinya Construction Management provide?",
    answer:
      "Avinya Construction Management offers end-to-end construction and project management services, including planning, budgeting, scheduling, vendor coordination, site supervision, quality control, and project delivery.",
  },
  {
    category: "Project Planning & Execution",
    question: "How do you ensure project quality and timelines?",
    answer:
      "We follow a structured construction management process with defined milestones, regular site inspections, and strict quality checks. Our team closely monitors timelines and coordinates with contractors to ensure on-time, high-quality execution.",
  },
  {
    category: "Cost, Budget & Contracts",
    question: "Do you handle residential and commercial projects?",
    answer:
      "Yes, we manage a wide range of projects, including residential, commercial, and mixed-use developments, tailoring our approach to meet the specific requirements of each project.",
  },
  {
    category: "Quality, Safety & Compliance",
    question: "How do you manage project costs and budgets?",
    answer:
      "We focus on transparent budgeting, cost planning, and continuous cost monitoring throughout the project lifecycle. This helps control expenses, minimize overruns, and deliver maximum value without compromising quality.",
  },
    {
    category: "Services & Expertise",
    question: "How can I start a project with Avinya Construction Management?",
    answer:
      "You can get started by contacting us through our website or phone. Our team will discuss your requirements, evaluate your project scope, and guide you through the next steps for a smooth project kickoff.",
  },
];

const Faqs = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqListRef = useRef<HTMLDivElement>(null);

  const filteredFaqs = faqsData.filter(
    (faq) => faq.category === activeCategory
  );

  /* 🔹 Animate category change */
  useEffect(() => {
    if (!faqListRef.current) return;

    gsap.fromTo(
      faqListRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      }
    );
  }, [activeCategory]);

  /* 🔹 Accordion animation */
  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs">
      <div className="faq-header">
        <span className="faq-badge">Construction Made Simple</span>
        <h2>Frequently Asked Questions</h2>
        <p>All the essential details about our services, process, and project delivery.</p>
      </div>

      <div className="faq-layout">
        {/* LEFT CATEGORIES */}
        <aside className="faq-categories">
          <h4>Categories</h4>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={cat === activeCategory ? "active" : ""}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveIndex(0);
                }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* RIGHT FAQ */}
        <div className="faq-content" ref={faqListRef}>
          {filteredFaqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "open" : ""
              }`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>

              <div
                className="faq-answer-wrapper"
                style={{
                  height: activeIndex === index ? "auto" : 0,
                }}
              >
                {activeIndex === index && (
                  <p className="faq-answer">{item.answer}</p>
                )}
              </div>
            </div>
          ))}

          {/* Contact */}
          <div className="faq-contact">
            <div>
              <strong>Still have a question?</strong>
              <p>Contact our support team anytime.</p>
            </div>
            <button>Contact us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
