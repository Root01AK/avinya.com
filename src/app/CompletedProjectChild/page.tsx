"use client";
import Image from "next/image";
import CTA from "../components/CTA";


const images = [
    { id: 1, src: "/gallery/Hilton.jpg", className: "img-wide" },
    { id: 2, src: "/gallery/Hilton01.jpg", className: "img-tall" },
    { id: 3, src: "/gallery/Hilton02.jpg", className: "img-medium" },
    { id: 4, src: "/gallery/Hilton03.jpg", className: "img-small" },
    { id: 5, src: "/gallery/Hilton04.jpg", className: "img-tall" },
    { id: 6, src: "/gallery/Hilton05.jpg", className: "img-medium" },
    { id: 7, src: "/gallery/Hilton03.jpg", className: "img-wide" },
];

export default function ServiceChild() {
    return (
        <section className="service-child">
            {/* HEADER */}
            <div className="service-header">
                <div className="year">2026</div>
                <div className="nav-arrows">
                    <button>←</button>
                    <button>→</button>
                </div>

                <div className="service-intro">
                    <h1>MY WORKS</h1>
                    <p>
                        Every image is a meticulous composition, carefully curated to evoke
                        emotion and provoke thought. Whether it’s a candid moment frozen in
                        time or the grandeur of nature’s spectacle.
                    </p>
                </div>
            </div>

            {/* GRID */}
            <div className="service-grid">
                {images.map((img) => (
                    <div key={img.id} className={`grid-item ${img.className}`}>
                        <Image src={img.src} alt="portfolio" fill className="grid-image" />
                    </div>
                ))}

                {/* FLOATING FEATURE CARD */}
                <div className="floating-card-frame">
                    <div className="floating-card">
                        <Image
                            src="/gallery/hoc2.JPG"
                            alt="featured"
                            fill
                            className="grid-image"
                        />
                    </div>
                </div>
            </div>
            {/* CTA SECTION */}
            < CTA />
        </section>

    );
}
