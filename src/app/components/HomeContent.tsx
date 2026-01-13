"use client";

import { useLayoutEffect, useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeServices from "./HomeServices";
import HomeProjectIndustry from "./HomeProjectIndustry";
import HomeTestimonialsSection from "./HomeTestimonailsSection";
import ClientSection from "./ClientSection";
import ClientInstagramSection from "./ClientInstagramSection";

gsap.registerPlugin(ScrollTrigger);

const HomeContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const texts = ['Innovate.', 'Succeed.'];
  const speed = 100;
  const pauseBetweenEffects = 500;

  const [displayText, setDisplayText] = useState(texts[0]);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* TYPEWRITER EFFECT */
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = texts[textIndex];
    const nextIndex = (textIndex + 1) % texts.length;

    if (!isDeleting && displayText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, speed);
    } else if (!isDeleting && displayText.length === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBetweenEffects);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      }, speed);
    } else {
      setIsDeleting(false);
      setTextIndex(nextIndex);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  /* GSAP ANIMATIONS */
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {

      gsap.from("#management-text", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from("#aboutus .col-lg-6", {
        scrollTrigger: {
          trigger: "#aboutus",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.25,
        duration: 1,
      });

      gsap.from(".whychoose-box", {
        scrollTrigger: {
          trigger: ".why-choose-us",
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
      });

      gsap.from(".project-container", {
        scrollTrigger: {
          trigger: ".project-container",
          start: "top 85%",
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
      });

      gsap.from(".logos-slide img", {
        scrollTrigger: {
          trigger: ".clients",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <main ref={containerRef}>

      {/* HERO SECTION */}
      <div className="hero-site">
        <video autoPlay loop muted playsInline className="back-video">
          <source src="/Video/hero.mp4" type="video/mp4" />
          <source src="/Video/hero.webm" type="video/webm" />
          <source src="/Video/hero.ogv" type="video/ogg" />
        </video>

        <div className="wave-container">
          <h1 className="hero-management text-center">
            Build. Invest. <span className="typing-word">{displayText}</span>
          </h1>
        </div>
      </div>

      {/* ABOUT */}
      <div id="aboutus">
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="about-img">
                  <img src="./abt4.jpg" className="img-fluid" alt="Avinya" />
                  <img src="./ab1.jpg" className="img-fluid" alt="Avinya" />
                </div>
              </div>

              <div className="col-lg-6">
                <h4 className="title">ABOUT US</h4>
                <h1 className="display-5 mb-4 headings">
                  A Creative Architecture
                </h1>
                <p>
                  Welcome to Avinya Construction Management, where innovation meets precision. At Avinya, we specialize in delivering top-tier construction solutions, blending advanced technology with expert craftsmanship to create exceptional results. Our dedicated team is committed to excellence in every project, whether it's residential, commercial, or industrial.
                  We pride ourselves on our ability to manage every aspect of construction, from initial design and planning to final execution. Our integrated approach ensures that each project is completed on time, within budget, and to the highest standards of quality.
                </p>

                <div className="d-flex align-items-center mb-5">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5"
                    style={{ width: "120px", height: "120px", color: "#F4BA1A", borderColor: "#F4BA1A" }}
                  >
                    <h1 className="years display-1 mb-n2">10 </h1>
                  </div>
                  <div className="ps-4">
                    <h3>Years</h3>
                    <h3>Working</h3>
                    <h3 className="mb-0">Experience</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HOME SERVICES */}
      <HomeServices />
      {/* HOME PROJECT INDUSTRY */}
      <HomeProjectIndustry />
      {/* Why Choose Us Starts */}
      <section className="why-choose-us mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <img src='./crane.png' className="whychoose-img wow animate__animated animate__slideInLeft"
                data-wow-duration="2s" alt="Avinya" />
              <img src='./buildings.png' className="whychoose-img-right wow animate__animated animate__slideInRight"
                data-wow-duration="2s" alt="Avinya" />
            </div>
            <div className="col-md-12">
              <div className="wow animate__animated animate__backInLeft" data-wow-duration="2s">
                <h2 className="title">WHY CHOOSE US</h2>
                <h3 className="reason-title text-center headings">Reason for choosing us</h3>
                <p className="reason-description text-center">At Avinya Construction Management, we understand that your
                  project is more than just a building – it's a vision brought to life. Here’s why Avinya is the
                  perfect partner for your construction needs :</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="whychoose-box">
                    <div className="whychoose-icon"><i className="fas fa-trowel-bricks"></i></div>
                    <div className="whychoose-text">
                      <h4>Unmatched Expertise</h4>
                      <p>With years of experience in the construction industry, our team of professionals
                        brings a wealth of knowledge and expertise to every project. From architects and
                        engineers to project managers and skilled laborers, we have the right people to
                        ensure your project’s success.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="whychoose-box">
                    <div className="whychoose-icon"><i className="fas fa-lightbulb"></i></div>
                    <div className="whychoose-text">
                      <h4>Innovative Solutions</h4>
                      <p>We stay at the forefront of construction technology, utilizing the latest tools and
                        methods to enhance efficiency and quality. Our commitment to innovation ensures that
                        we can tackle even the most complex projects with ease and precision.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="whychoose-box">
                    <div className="whychoose-icon"><i className="fas fa-tools"></i></div>
                    <div className="whychoose-text">
                      <h4>Comprehensive Services</h4>
                      <p>From concept to completion, we offer a full range of construction services. Whether
                        it’s site selection, design, engineering, project management, or post-construction
                        services, Avinya handles every detail to deliver seamless and stress-free
                        experiences.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="whychoose-box">
                    <div className="whychoose-icon"><i className="fas fa-star"></i></div>
                    <div className="whychoose-text">
                      <h4>Quality Assurance</h4>
                      <p>Quality is at the heart of everything we do. We adhere to strict quality control
                        processes and industry standards to ensure that every aspect of your project meets
                        the highest levels of excellence. Our goal is to exceed your expectations in every
                        way.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="whychoose-box">
                    <div className="whychoose-icon"><i className="fas fa-tower-cell"></i></div>
                    <div className="whychoose-text">
                      <h4>Customer-Centric Approach</h4>
                      <p>Your satisfaction is our top priority. We work closely with you to understand your
                        needs and goals, providing personalized solutions that align with your vision. Our
                        transparent communication and collaborative approach keep you informed and involved
                        throughout the project.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="whychoose-box">
                    <div className="whychoose-icon"><i className="fas fa-solar-panel"></i></div>
                    <div className="whychoose-text">
                      <h4>Sustainability Commitment</h4>
                      <p>We are committed to building a sustainable future. Our environmentally-friendly
                        practices and sustainable building techniques help minimize environmental impact and
                        promote energy efficiency, ensuring that your project is both eco-friendly and
                        cost-effective.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="whychoose-box">
                    <div className="whychoose-icon"><i className="fas fa-clock"></i></div>
                    <div className="whychoose-text">
                      <h4>On-Time, On-Budget Delivery</h4>
                      <p>We understand the importance of timelines and budgets. Our meticulous planning and
                        management practices ensure that your project is completed on time and within
                        budget, without compromising on quality.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="whychoose-box">
                    <div className="whychoose-icon"><i className="fas fa-building"></i></div>
                    <div className="whychoose-text">
                      <h4>Versatility Across Sectors</h4>
                      <p>Our expertise spans across various sectors including residential, commercial,
                        industrial, and infrastructure. No matter the scope or complexity of your project,
                        Avinya has the capabilities to deliver outstanding results.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Ends */}
      {/* HOME TESTIMONIALS */}
      <HomeTestimonialsSection />
      <ClientInstagramSection />

     (
    <div className="container mt-5">
      <h1 className="text-center font-weight-bold ongopro-heading title mb-5">
        EXPLORE OUR PROJECTS
      </h1>

      <div className="row mt-5">

        {/* PROJECT 1 */}
        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
          <div className="project-container">
            <Image
              src="/img/clients/Sangam.png"
              alt="Sangam-pic Avinya constructions"
              className="project-img"
              width={800}
              height={500}
            />

            <a
              href="https://www.instagram.com/avinya.constructions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="connect-insta">
                <i className="fa fa-instagram"></i> Click Here for Current Updates.
              </p>
            </a>

            <img src="https://themexriver.com/wp/builta/wp-content/uploads/2024/05/p-1-arrow.webp" alt="Avinya Constructions" className="project-loading-img" />

            <div className="project-content">
              <h1>Sangam Chettinad Indian Cuisine. Leander</h1>
              <p>
                Scope of work: Design, general contracting, procurement and
                construction management.
              </p>
            </div>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
          <div className="project-container">
            <Image
              src="/img/icecream.jpg"
              alt="Dumont Round Rock"
              className="project-img"
              width={800}
              height={500}
            />

            <a
              href="https://www.instagram.com/avinya.constructions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="connect-insta">
                <i className="fa fa-instagram"></i> Click Here for Current Updates.
              </p>
            </a>

            <img src="https://themexriver.com/wp/builta/wp-content/uploads/2024/05/p-1-arrow.webp" alt="Avinya Constructions" className="project-loading-img" />

            <div className="project-content">
              <h1>⁠The Alley, Dripping Springs.</h1>
              <p>
                Scope of work: General contractor. Completed all interior
                renovation as per brand standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* CLIENT SECTION */}
      <ClientSection />
    </main>
  );
};

export default HomeContent;
