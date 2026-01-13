'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: 'Yeray Rosales',
        text:
            'I believe in lifelong learning and this is the best place to learn from experts with step-by-step courses. I’ve learned a lot and recommended it to my friends.',
        time: '12 days ago',
        avatar: '/logos/client1.png',
    },
    {
        name: 'Lew Silverton',
        text:
            'I really like the content they’ve offered for marketing and sales. I’ve purchased many classes and all of them are really good.',
        time: '1 month ago',
        avatar: '/logos/client2.png',
    },
    {
        name: 'Neville Griffin',
        text:
            'Skeptical at first, but the support and structured learning convinced me quickly. Highly recommended.',
        time: '2 months ago',
        avatar: '/logos/client3.png',
    },
    {
        name: 'Neville Griffin',
        text:
            'Skeptical at first, but the support and structured learning convinced me quickly. Highly recommended.',
        time: '2 months ago',
        avatar: '/logos/client3.png',
    },
    {
        name: 'Neville Griffin',
        text:
            'Skeptical at first, but the support and structured learning convinced me quickly. Highly recommended.',
        time: '2 months ago',
        avatar: '/logos/client3.png',
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
                    Helping thousands of students <br />
                    <span>to succeed with speed</span>
                </h2>
            </div>

            {/* WAVE / FLOW IMAGE */}
            <div className="testimonial-wave">
                <img src="./kindpng_1241336.png" alt="city background" />
            </div>

            {/* FLOATING CLIENT LOGOS */}
            <div className="testimonial-avatars">
                <img src="/clients/comfortinn.png" />
                <img src="/clients/hiltoninn.svg" />
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
