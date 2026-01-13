import React from "react";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="cta-wrapper">
      <div className="cta-card">

        {/* Left Images */}
        <div className="cta-images left">
          <div className="cta-img img-1">
            <Image src="/gallery/Hilton02.jpg" alt="Interior" fill />
          </div>
          <div className="cta-img img-2">
            <Image src="/gallery/Hilton02.jpg" alt="Interior" fill />
          </div>
        </div>

        {/* Center Content */}
        <div className="cta-content">
          <span className="cta-label">✦ Transform Your Vision into Reality. ✦</span>

          <h2 className="cta-title">
            Partner with Avinya Construction Management for expert planning, <br />
            <span>precise execution, and reliable delivery.</span>
          </h2>

          <button className="cta-button">
            GET IN TOUCH <span>→</span>
          </button>
        </div>

        {/* Right Images */}
        <div className="cta-images right">
          <div className="cta-img img-3">
            <Image src="/gallery/Hilton02.jpg" alt="Interior" fill />
          </div>
          <div className="cta-img img-4">
            <Image src="/gallery/Hilton02.jpg" alt="Interior" fill />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;
