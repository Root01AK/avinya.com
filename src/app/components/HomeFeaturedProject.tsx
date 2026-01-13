'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Project = {
    id: string;
    status: 'Completed' | 'Ongoing';
    title: string;
    image: string;
    thumb: string;
};

const projects: Project[] = [
    {
        id: '01',
        status: 'Completed',
        title: 'Commercial Business Tower',
        image: '/gallery/res01.jpg',
        thumb: '/gallery/res01.jpg',
    },
    {
        id: '02',
        status: 'Ongoing',
        title: 'Modern Corporate Office',
        image: '/gallery/bar 01.jpg',
        thumb: '/gallery/bar 01.jpg',
    },
    {
        id: '03',
        status: 'Ongoing',
        title: 'Smart Infrastructure Hub',
        image: '/gallery/clothing.jpg',
        thumb: '/gallery/clothing.jpg',
    },
];

export default function HomeFeaturedProjectSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;

        if (!section || !track) return;

        const slides = gsap.utils.toArray<HTMLElement>('.fp-slide');
        const numbers = gsap.utils.toArray<HTMLElement>('.fp-number');

        const totalScrollWidth = track.scrollWidth - window.innerWidth;

        /* 🔹 MAIN PIN + HORIZONTAL SCROLL */
        const mainTween = gsap.to(track, {
            x: -totalScrollWidth,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${track.scrollWidth}`,
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        /* 🔹 ACTIVE INDEX + NUMBER SYNC */
        slides.forEach((slide, index) => {
            ScrollTrigger.create({
                trigger: slide,
                containerAnimation: mainTween,
                start: 'left center',
                end: 'right center',
                onEnter: () => setActive(index),
                onEnterBack: () => setActive(index),
            });
        });

        function setActive(index: number) {
            setActiveIndex(index);

            numbers.forEach((n, i) => {
                n.classList.toggle('active', i === index);
            });
        }

        /* 🔹 SMOOTHNESS TUNING */
        ScrollTrigger.normalizeScroll(true);
        ScrollTrigger.config({
            limitCallbacks: true,
            syncInterval: 999999,
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);


    const completed = projects.filter(p => p.status === 'Completed')[0];
    const ongoing = projects.filter(p => p.status === 'Ongoing')[activeIndex] || projects[1];

    return (
        <section className="home-featured-project-section" ref={sectionRef}>
            {/* INTRO */}
            <div className="fp-intro-card">
                <small>Avinya's Work</small>
                <h2>Featured Projects</h2>
                <p>
                    A curated selection of our completed and ongoing landmark developments.
                </p>
            </div>

            {/* CAROUSEL */}
            <div className="fp-carousel">
                <div className="fp-track" ref={trackRef}>
                    {projects.map((p, i) => (
                        <div className="fp-slide" key={i}>
                            <div className="fp-image-wrap">
                                <img src={p.image} alt={p.title} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="fp-numbers">
                    {projects.map((_, i) => (
                        <span key={i} className="fp-number">
                            {String(i + 1).padStart(2, '0')}
                        </span>
                    ))}
                </div>

                {/* INDEX */}
                <div className="fp-index">
                    {projects.map((p, i) => (
                        <span key={p.id} className={activeIndex === i ? 'active' : ''}>
                            {p.id}.
                        </span>
                    ))}
                </div>
            </div>

            {/* SORTED CARDS */}
            <div className="fp-cards">
                <ProjectCard project={completed} />
                <ProjectCard project={ongoing} />
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="fp-card">
            <img src={project.thumb} alt={project.title} />
            <div>
                <small>{project.status} Project</small>
                <h4>{project.title}</h4>
            </div>
        </div>
    );
}
