"use client";
import Link from 'next/link';
import { Metadata } from "next";
import { useState } from "react";
import ServiceHero from '../components/ServiceHero';

const completedProjects = [
  {
    id: 1,
    city: "Hilton garden inn",
    classType: "Premium economy",
    price: 240,
    airportCode: "SFO",
    images: ["/gallery/Hilton.jpg",
      "/gallery/Hilton02.jpg",
      "/gallery/Hilton03.jpg"
    ],
    location: "Chennai, India",
    description: "A premium residential development featuring modern architecture and sustainable living spaces."
  },
  {
    id: 2,
    city: "Hyatt Place",
    classType: "Premium economy",
    price: 240,
    airportCode: "SFO",
    images: ["/gallery/hotel 04.jpg",
      "/gallery/hotel 05.jpg",
      "/gallery/hotel 07.jpg"
    ],
  },
  {
    id: 3,
    city: "Clothing store",
    classType: "Premium economy",
    price: 240,
    airportCode: "SFO",
    images: ["/gallery/Clothing01.jpg",
      "/gallery/Clothing02.jpg",
      "/gallery/Clothing03.jpg"
    ],
  },
  {
    id: 4,
    city: "Kizza Pizza",
    classType: "Premium economy",
    price: 240,
    airportCode: "SFO",
    images: ["/gallery/Kizza.jpg",
      "/gallery/Hilton02.jpg",
      "/gallery/Hilton03.jpg"
    ],
  },
  {
    id: 5,
    city: "Dumont Round Rock",
    classType: "Premium economy",
    price: 240,
    airportCode: "SFO",
    images: ["/gallery/Final.JPG",
      "/gallery/res 03.jpg",
      "/gallery/res01.jpg"
    ],
  },
  {
    id: 6,
    city: "Sangam Roundrock",
    classType: "Premium economy",
    price: 240,
    airportCode: "SFO",
    images: ["/gallery/IMG_3934.JPG",
      "/gallery/IMG_4212.JPG",
      "/gallery/IMG_4237.JPG"
    ],
  },
  {
    id: 7,
    city: "Tuff Puff Smoke Shop",
    classType: "Premium economy",
    price: 240,
    airportCode: "SFO",
    images: ["/gallery/tuff01.jpg",
      "/gallery/tuff02.jpg"
    ],
  },
  {
    id: 8,
    city: "House of Chettinad",
    classType: "Premium economy",
    price: 240,
    airportCode: "SFO",
    images: ["/gallery/hoc01.jpg",
      "/gallery/hoc2.jpg",
      "/gallery/hoc3.jpg"
    ],
  },
  {
    id: 9,
    city: "Dumont Creamery & Cafe",
    classType: "Premium economy",
    price: 240,
    airportCode: "SFO",
    images: ["/gallery/Final.JPG",
      "/gallery/res 03.jpg"
    ],
  },
  {
    id: 10,
    city: "Island Riddim, BBQ & Grill",
    classType: "Premium economy",
    price: 240,
    airportCode: "SFO",
    images: ["/gallery/ir01.jpg",
      "/gallery/ir02.jpg",
      "/gallery/ir03.jpg"
    ],
  },
];


export default function CompletedProjects() {

  return (
    <>
      {/* Breadcrumbs starts */}
      <section className="breadcrumb-hero">
        <p className="breadcrumb-subtitle">
          Built with precision & trust
        </p>

        <h1 className="breadcrumb-title">
          DELIVERED <span>PROJECTS</span>
        </h1>
      </section>
      {/* Breadcrumbs ends */}
      {/* Breadcrumbs starts */}
      <ServiceHero />
      {/* Breadcrumbs ends */}


      <div className="projects-grid">
        {completedProjects.map((item) => {
          const [index, setIndex] = useState(0);

          const prev = () =>
            setIndex((index - 1 + item.images.length) % item.images.length);

          const next = () =>
            setIndex((index + 1) % item.images.length);

          return (
            <div className="completed-project" key={item.id}>

              {/* IMAGE SLIDER */}
              <div className="project-image-wrapper">
                <img
                  src={item.images[index]}
                  alt={item.city}
                  className="project-image"
                />

                {/* Controls */}
                <button className="slider-btn left" onClick={prev}>‹</button>
                <button className="slider-btn right" onClick={next}>›</button>

                {/* Dots */}
                <div className="slider-dots">
                  {item.images.map((_, i) => (
                    <span
                      key={i}
                      className={i === index ? "dot active" : "dot"}
                      onClick={() => setIndex(i)}
                    />
                  ))}
                </div>
              </div>

              {/* CONTENT */}
              <div className="projects-content">
                <h2 className="project-title">{item.city}</h2>

                <div className="project-location">
                  📍 <span>{item.location}</span>
                </div>

                <p className="project-subtitle">{item.classType}</p>

                <p className="project-description">
                  {item.description}
                </p>

                <div className="project-actions">
                  <button className="search-btn">View More</button>
                </div>
              </div>

            </div>
          );
        })}
      </div>


      {/* Projects Grid Ends */}

    </>
  );
}