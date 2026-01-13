import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Customizable Theme",
    description:
      "Personalize your Snappy experience with a variety of themes, allowing you to tailor the app to match your unique lifestyle.",
    image: "/services/theme.jpg",
  },
  {
    title: "Secure File Sharing",
    description:
      "Snappy ensures the security of your business conversations with end-to-end encryption.",
    image: "/services/file-sharing.jpg",
  },
  {
    title: "Health Reminders",
    description:
      "Stay on top of your wellness routine with scheduled messages and reminders for self-care and health-related activities.",
    image: "/services/health.jpg",
  },
  {
    title: "Secure Communication",
    description:
      "Communicate securely with service providers for inquiries, updates, and feedback, all within the Snappy app.",
    image: "/services/secure-chat.jpg",
  },
];

const ServiceHeroCard = () => {
  return (
    <section className="service-hero-card">
      {/* Hero Text */}
      <div className="service-hero-header">
        <h1>
          Elevate Your Chatting,
          <br />
          Simplify Your Life
        </h1>

        <p>
          Discover a Seamless World of Professional Services,
          Appointments, and Secure Transactions – All in One Place!
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
        <span className="service-label">Services</span>
        <h2>
          Elevate Every Experience, Simplify
          <br />
          Your Everyday Needs.
        </h2>
      </div>
    </section>
  );
};

export default ServiceHeroCard;
