import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Comprehensive Project Management",
    description:
      "End-to-end construction management covering planning, scheduling, budgeting, vendor coordination, and site supervision for smooth project delivery.",
    image: "/gallery/hotel 01.jpg",
  },
  {
    title: "Quality-Driven Execution",
    description:
      "We ensure strict quality control at every stage, using proven construction practices, certified materials, and experienced professionals.",
    image: "/gallery/hotel 02.jpg",
  },
  {
    title: "Cost & Time Optimization",
    description:
      "Smart planning and disciplined execution help reduce delays, control costs, and maximize project value without compromising quality.",
    image: "/gallery/hotel 03.jpg",
  },
  {
    title: "Safety & Compliance",
    description:
      "We follow industry-best safety standards and regulatory compliance to deliver secure, risk-managed construction environments.",
    image: "/gallery/hotel 04.jpg",
  },
];

const ServiceHeroCard = () => {
  return (
    <section className="service-hero-card">
      {/* Hero Text */}
      <div className="service-hero-header">
        <h1>
          Elevate Your Construction,
          <br />
          Simplify Project Delivery
        </h1>

        <p>
          Experience seamless construction management, expert execution, and transparent coordination — all under one trusted partner.
        </p>
      </div>

      {/* Service Cards */}
      <div className="service-cards">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <h3>{item.title}</h3>

            <div className="service-image">
              <Image src={item.image} alt={item.title} fill />
            </div>

            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Next Section Title */}
      <div className="service-footer">
        <span className="service-label">Our Core Offerings</span>
        <h2>
          Building Excellence.
          <br />
          Managing with Precision.
        </h2>
      </div>
    </section>
  );
};

export default ServiceHeroCard;
