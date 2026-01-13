'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: 'Holiday Inn Express',
        text:
            'Avinya Construction Management handled our project with exceptional professionalism. From planning to execution, everything was transparent, well-coordinated, and delivered on time.',
        time: '10 days ago',
        avatar: '/clients/HolidayInn.png',
    },
    {
        name: 'Ups Inc',
        text:
            'What stood out was their attention to detail and cost control. The team ensured quality standards were met without delays or budget overruns.',
        time: '3 weeks ago',
        avatar: '/clients/ups.png',
    },
    {
        name: 'Sangam Group',
        text:
            'We trusted Avinya Construction Management with our commercial project, and they exceeded expectations. Clear communication, disciplined execution, and reliable delivery.',
        time: '1 month ago',
        avatar: '/clients/Sangam.png',
    },
    {
        name: 'Starbucks Corp',
        text:
            'Their project management approach is structured and efficient. Regular updates, on-site supervision, and strong vendor coordination made the entire process smooth.',
        time: '2 months ago',
        avatar: '/clients/starbucks.png',
    },
    {
        name: 'Comfort Inn',
        text:
            'From pre-construction planning to final handover, Avinya demonstrated professionalism and accountability. Highly recommended for quality-driven construction projects.',
        time: '3 months ago',
        avatar: '/clients/comfortinn.png',
    },
];


export default function HomeTestimonialsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let tween: gsap.core.Tween;

        const startAutoScroll = () => {
            const maxScroll = carousel.scrollWidth - carousel.clientWidth;

            tween = gsap.to(carousel, {
                scrollLeft: maxScroll,
                duration: 20,
                ease: 'linear',
                repeat: -1,
                modifiers: {
                    scrollLeft: (value) => {
                        return parseFloat(value) % maxScroll;
                    },
                },
            });
        };

        const stopAutoScroll = () => {
            tween && tween.pause();
        };

        const resumeAutoScroll = () => {
            tween && tween.resume();
        };

        startAutoScroll();

        // Hover pause
        carousel.addEventListener('mouseenter', stopAutoScroll);
        carousel.addEventListener('mouseleave', resumeAutoScroll);

        return () => {
            tween && tween.kill();
            carousel.removeEventListener('mouseenter', stopAutoScroll);
            carousel.removeEventListener('mouseleave', resumeAutoScroll);
        };
    }, []);

    return (
        <section className="home-testimonials-section">
            {/* HEADER */}
            <div className="testimonials-header">
                <h2>
                    Trusted by Clients to Deliver Quality Construction <br />
                    <span>with Speed and Precision</span>
                </h2>
            </div>

            {/* WAVE / FLOW IMAGE */}
            <div className="testimonial-wave">
                <img src="./kindpng_1241336.png" alt="city background" />
            </div>

            {/* FLOATING CLIENT LOGOS */}
            <div className="testimonial-avatars">
                <img src="/clients/comfortinn.png" />
                <img src="/clients/Hilton.png" />
                <img src="/clients/Hyatt.png" />
                <img src="/clients/Sangam.png" />
                <img src="/clients/ups.png" />
            </div>

            {/* CAROUSEL */}
            <div className="testimonial-carousel-wrapper">
                <div className="testimonial-carousel" ref={carouselRef}>
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <div className="testimonial-card" key={index}>
                            <p className="testimonial-text">“{item.text}”</p>

                            <div className="testimonial-user">
                                <img src={item.avatar} alt={item.name} />
                                <div className="user-info">
                                    <strong>{item.name}</strong>
                                </div>
                                <span className="testimonial-time">{item.time}</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
}
