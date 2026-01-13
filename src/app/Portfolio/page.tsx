'use client';

import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type Category = 'all' | 'retail' | 'hospitality' | 'restaurant';

interface GalleryItem {
  src: string;
  title: string;
  category: Category;
}

const galleryData: GalleryItem[] = [
  { src: '/gallery/hotel 08.jpg', title: 'Luxury Hotel Interior', category: 'hospitality' },
  { src: '/gallery/retail02.jpg', title: 'Modern Retail Space', category: 'retail' },
  { src: '/gallery/bar 01.jpg', title: 'Premium Bar Lounge', category: 'restaurant' },
  { src: '/gallery/Hilton01.jpg', title: 'Hilton Experience', category: 'hospitality' },
  { src: '/gallery/Clothing05.jpg', title: 'Fashion Retail Design', category: 'retail' },
  { src: '/gallery/restaurant02.jpg', title: 'Fine Dining Ambience', category: 'restaurant' },
  { src: '/gallery/bar 01.jpg', title: 'Premium Bar Lounge', category: 'restaurant' },
  { src: '/gallery/Hilton01.jpg', title: 'Hilton Experience', category: 'hospitality' },
  { src: '/gallery/Clothing05.jpg', title: 'Fashion Retail Design', category: 'retail' },
  { src: '/gallery/restaurant02.jpg', title: 'Fine Dining Ambience', category: 'restaurant' },
  { src: '/gallery/Clothing05.jpg', title: 'Fashion Retail Design', category: 'retail' },
  { src: '/gallery/restaurant02.jpg', title: 'Fine Dining Ambience', category: 'restaurant' },
  { src: '/gallery/bar 01.jpg', title: 'Premium Bar Lounge', category: 'restaurant' },
  { src: '/gallery/Hilton01.jpg', title: 'Hilton Experience', category: 'hospitality' },
  { src: '/gallery/Clothing05.jpg', title: 'Fashion Retail Design', category: 'retail' },
  { src: '/gallery/restaurant02.jpg', title: 'Fine Dining Ambience', category: 'restaurant' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<Category>('all');
  const [modalImage, setModalImage] = useState<string | null>(null);

  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  const filteredItems =
    filter === 'all'
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

    useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      lettersRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power3.out',
      }
    ).fromTo(
      taglineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.3'
    );
  }, []);

  const text = 'PORTFOLIO';

  return (
    <>
      {/* HERO */}
    <section className="portfolio-banner">
      <div className="portfolio-banner-inner">
        <h1 className="wave-text">
          {text.split('').map((char, i) => (
            <span
              key={i}
              ref={(el) => {
                if (el) lettersRef.current[i] = el;
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        <p ref={taglineRef} className="portfolio-tagline">
          DON&apos;T WORRY. MELT YOUR MIND. CHILL OUT.
        </p>
      </div>
    </section>

      {/* FILTER */}
      <div className="container my-5">
        <div className="text-center">
          <h1 className="display-5 mb-4 headings">Glimpse of our latest stunning creations</h1>
        </div>
        <ul className="gallery-filters">
          {['all', 'retail', 'hospitality', 'restaurant'].map((cat) => (
            <li key={cat}>
              <button
                className={filter === cat ? 'active' : ''}
                onClick={() => setFilter(cat as Category)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        {/* GRID */}
<div className="gallery-grid">
  {filteredItems.map((item, index) => {
    const isLarge = index % 6 === 0;

    return (
      <div
        key={index}
        className={`gallery-card ${isLarge ? 'card-large' : ''}`}
        onClick={() => setModalImage(item.src)}
      >
        <img src={item.src} alt={item.title} />
        <div className="gallery-overlay">
          <span className="category">{item.category}</span>
          <h3>{item.title}</h3>
        </div>
      </div>
    );
  })}
</div>


      </div>

      {/* MODAL */}
      {modalImage && (
        <div className="gallery-modal" onClick={() => setModalImage(null)}>
          <img src={modalImage} alt="Fullscreen" />
          <span className="close">&times;</span>
        </div>
      )}
    </>
  );
}
