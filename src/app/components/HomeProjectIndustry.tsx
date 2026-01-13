'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

gsap.registerPlugin(ScrollTrigger);

const HomeProjectIndustry = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Headline animation
            gsap.from('.headline span', {
                y: 140,
                opacity: 0,
                stagger: 0.15,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            });

            // Side content slide-in
            gsap.from('.side-content', {
                x: 80,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            });

            // Glass text fade
            gsap.from('.glass-text', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.glass-text',
                    start: 'top 85%',
                },
            });

            // Parallax on images
            gsap.to('.image-wrapper img', {
                y: -80,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.image-wrapper',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="home-pro-inc-section" ref={sectionRef}>
            {/* TOP AREA */}
            <div className="top-area">
                <div className="headline">
                    <span>INDUSTRIES</span>
                    <span className="accentand">&</span>
                    <span className="accent">PROJECTS</span>
                </div>

                <div className="side-content">
                    <div className="tabs">
                        <span className="active">Shaping Spaces, Building Futures</span>
                    </div>
                    <div className="stats">
                        <strong>Featured Projects</strong>
                    </div>
                    <p className="glass-text">
                        Whether it’s residential, commercial, or industrial developments, Avinya Construction Management partners with clients across industries to deliver expertly managed projects with precision, quality, and efficiency.
                        <br/> +50 successfully delivered projects across diverse sectors, each reflecting our commitment to excellence, safety, and sustainable design.
                    </p>
                </div>
            </div>

            {/* IMAGE SLIDER */}
            <div className="image-wrapper">
                <Swiper
                    slidesPerView={1}
                    loop
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation
                    modules={[Pagination, Autoplay]}
                >
                    <SwiperSlide>
                        <img src="/gallery/bar 01.jpg" alt="Mindful Balance" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/gallery/hotel 08.jpg" alt="Mindful Balance" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/gallery/hotel 09.jpg" alt="Mindful Balance" />
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>
    );
};

export default HomeProjectIndustry;
