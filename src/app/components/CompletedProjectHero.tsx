// components/ServiceHero.tsx
import Image from 'next/image';


export default function ServiceHero() {

    
  return (
    <section className="service-hero-completed">
      <div className="service-hero-completed__container">
        <div className="service-hero-completed__content">
          <div className="service-hero-completed__text-content">
            <h1 className="service-hero-completed__title">
              THE PERFECT PARTNER FOR YOUR REAL ESTATE NEEDS
            </h1>
          </div>
          
          <div className="service-hero-completed__description">
            <p>
              At Realty, We Believe That Finding Your Dream Home Should Be An Enjoyable Experience. 
              With Over 15 Years Of Experience, Our Team Of Dedicated Real Estate Professionals Is 
              Committed To Providing You With Personalized And Comprehensive Services That Cater To 
              Your Unique Needs. Whether You're Looking To Buy, Sell, Or Rent A Property, We Have 
              The Expertise And Resources To Help You Achieve Your Goals. We Prioritize Customer 
              Satisfaction And Strive To Build Lasting Relationships With Each Of Our Clients.
            </p>
          </div>
        </div>

        <div className="service-hero-completed__image-collage">
          <div className="service-hero-completed__image-wrapper">
            {/* Large image - top left */}
            <div className="service-hero-completed__image-card service-hero-completed__image-card--large" style={{ '--delay': '0s' } as React.CSSProperties}>
              <Image
                src="/gallery/hotel 01.jpg"
                alt="Modern house with glass walls"
                width={700}
                height={800}
                className="service-hero-completed__image"
              />
            </div>
            
            {/* Medium image - center, overlapping */}
            <div className="service-hero-completed__image-card service-hero-completed__image-card--medium" style={{ '--delay': '0.1s' } as React.CSSProperties}>
              <Image
                src="/gallery/hotel 02.jpg"
                alt="Contemporary home exterior"
                width={600}
                height={700}
                className="service-hero-completed__image"
              />
            </div>
            
            {/* Small image - right center */}
            <div className="service-hero-completed__image-card service-hero-completed__image-card--small" style={{ '--delay': '0.2s' } as React.CSSProperties}>
              <Image
                src="/gallery/hotel 03.jpg"
                alt="Modern architectural design"
                width={500}
                height={600}
                className="service-hero-completed__image"
              />
            </div>
            
            {/* Extra small image - far right bottom */}
            <div className="service-hero-completed__image-card service-hero-completed__image-card--extra-small" style={{ '--delay': '0.3s' } as React.CSSProperties}>
              <Image
                src="/gallery/hotel 01.jpg"
                alt="Architectural detail"
                width={400}
                height={500}
                className="service-hero-completed__image"
              />
            </div>
          </div>
          
          {/* Decorative lines */}
          <div className="service-hero-completed__decorative-lines">
            <svg className="service-hero-completed__lines-svg" viewBox="0 0 1400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 400 Q 400 200, 700 400 T 1300 400" stroke="#e0e0e0" strokeWidth="1" opacity="0.3"/>
              <path d="M150 450 Q 450 250, 750 450 T 1350 450" stroke="#e0e0e0" strokeWidth="1" opacity="0.2"/>
              <line x1="200" y1="100" x2="1200" y2="100" stroke="#e0e0e0" strokeWidth="1" opacity="0.15"/>
              <line x1="200" y1="700" x2="1200" y2="700" stroke="#e0e0e0" strokeWidth="1" opacity="0.15"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}