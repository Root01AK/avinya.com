"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const categories = [
  "General Information",
  "Purchasing and Payment",
  "Plans and Pricing",
  "Setup and Configuration",
];

const faqsData = [
  {
    category: "General Information",
    question: "What is Joy?",
    answer:
      "Joy is an AI voice assistant designed to handle calls, book appointments, and answer queries like a human operator.",
  },
  {
    category: "General Information",
    question: "How does Joy work?",
    answer:
      "Joy uses AI-driven conversational workflows to understand and respond in real time.",
  },
  {
    category: "Plans and Pricing",
    question: "Do you offer flexible pricing?",
    answer:
      "Yes, Joy offers flexible pricing based on usage and business needs.",
  },
  {
    category: "Setup and Configuration",
    question: "Is setup complicated?",
    answer:
      "No, setup is simple and can be completed within minutes.",
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
        <span className="faq-badge">Fill Every Call with Joy</span>
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know about Joy.</p>
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
