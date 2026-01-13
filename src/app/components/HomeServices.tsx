'use client';
import Link from "next/link";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const HomeServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll('.service-card'),
      {
        y: 80,
        opacity: 0,
      },
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
    <section className="home-service-section" ref={sectionRef}>
      <div className="service-header">
        <div>
          <h2>Our Services</h2>
          <p>
            Unleashing Comprehensive Digital Marketing Services Tailored to
            Elevate Your Online Presence and Boost Your Success.
          </p>
        </div>
        <Link href="/Services">
    <button className="primary-btn">Explore</button>
  </Link>
      </div>

      <div className="service-grid">
        {/* Active Card */}
        <div className="service-card active">
          <div className="icon">G</div>
          <h3>Google Ads</h3>
          <p>
            Effortlessly streamline your finances with our automated expense
            tracking feature.
          </p>
          <span className="learn-more">
            Learn more <span>→</span>
          </span>
        </div>

        <div className="service-card">
          <div className="icon">★</div>
          <h3>Social Media</h3>
          <p>
            Effortlessly streamline your finances with our automated expense
            tracking feature.
          </p>
          <span className="learn-more">
            Learn more <span>→</span>
          </span>
        </div>

        <div className="service-card">
          <div className="icon">👥</div>
          <h3>Human Resources</h3>
          <p>
            Effortlessly streamline your finances with our automated expense
            tracking feature.
          </p>
          <span className="learn-more">
            Learn more <span>→</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
