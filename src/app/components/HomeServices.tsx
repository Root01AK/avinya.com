'use client';
import Link from "next/link";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { logo: '/Logo/logo.png', title: 'Pre-Construction Services', desc: 'Integrated Construction Management, Design & Engineering, and Pre-Construction Solutions for Seamless Project Delivery.' },
  { logo: '/Logo/logo.png', title: 'Design and Engineering', desc: 'From Design & Engineering to Pre-Construction Planning and Full Construction Management — We Cover Every Step.' },
  { logo: '/Logo/logo.png', title: 'Construction Management', desc: 'Integrated Construction Management, Design & Engineering, and Pre-Construction Solutions for Seamless Project Delivery.' },
];

const HomeServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0); // default first card active

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll('.homeservicesection-card'),
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section className="homeservicesection" ref={sectionRef}>
      <div className="homeservicesection-header">
        <div>
          <h2>Our Services</h2>
          <p>
            Managing Every Aspect of Your Construction Projects with Expertise, Efficiency, and Reliability.
          </p>
        </div>
        <Link href="/Services">
          <button className="homeservicesection-btn">Explore</button>
        </Link>
      </div>

      <div className="homeservicesection-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`homeservicesection-card ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(0)} // back to first card when mouse leaves
          >
            <div className="homeservicesection-icon">
              <img src={service.logo} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <span className="homeservicesection-learnmore">
              Learn more <span>→</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
