'use client'; // Required for the scroll functionality

import React from 'react';

const SocialBar = () => {
  
  // Function to handle smooth scroll to top
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // Prevents the default jump to #
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="social">
      {/* Login Link */}
      <a href="https://avinya.app.go.redteam.com/login" target="_blank" rel="noopener noreferrer">
        &nbsp; Login
      </a>

      {/* WhatsApp Link */}
      <a href="https://wa.me/+15122164230" target="_blank" rel="noopener noreferrer">
        {/* Ensure FontAwesome is loaded in your layout for this icon to appear */}
        <i className="fab fa-whatsapp"></i>
        &nbsp; Whatsapp
      </a>

      {/* Back to Top Link */}
      <a href="#" onClick={scrollToTop}>
        <i className="fas fa-angles-up"></i>
        &nbsp; Back to top
      </a>
    </div>
  );
};

export default SocialBar;