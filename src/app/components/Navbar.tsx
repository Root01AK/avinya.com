import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" href="/">
          {/* 
             Note: For Next.js <Image />, width and height are required.
             Adjust these numbers based on your actual logo dimensions.
             Ensure your image is inside the 'public' folder at public/img/i.png
          */}
          <Image 
            src="/logo.png" 
            alt="Avinya-logo" 
            width={200} 
            height={200} 
          />
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto ml-auto">
            <li className="nav-item" id="home-link">
              <Link className="nav-link" href="/">HOME</Link>
            </li>
            <li className="nav-item" id="gallery-link">
              <Link className="nav-link" href="/Services">SERVICES</Link>
            </li>
            <li className="nav-item dropdown" id="projects-link">
              <Link 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="navbarDropdownMenuLink" 
                role="button" 
                aria-haspopup="true" 
                aria-expanded="false"
              >
                PROJECTS
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" href="/CompletedProjects">Completed</Link>
                <Link className="dropdown-item" href="/LatestProjects">Ongoing projects</Link>
              </div>
            </li>
          </ul>
          
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" id="services-link">
              <Link className="nav-link" href="/Portfolio">PORTFOLIO</Link>
            </li>
            <li className="nav-item" id="contact-link">
              <Link className="nav-link" href="/Contact">CONTACT</Link>
            </li>
            <li className="nav-item" id="collaboration-link">
              <Link className="nav-link" href="/Careers&Collaborations">JOIN US</Link>
            </li>
          </ul>

          <li className="nav-login">
            <div className="login">
              {/* External link, kept as <a> tag with target="_blank" */}
              <a href="https://avinya.app.go.redteam.com/login" target="_blank" rel="noopener noreferrer">
                <span className="tooltip">Redteam!</span>
                <span className="login-btn">LOGIN</span>
              </a>
            </div>
          </li>

          <li className="terms-mob">
            <p>
              <a href="/TP/T&C.pdf" target="_blank" rel="noopener noreferrer">Terms and Condition</a> | 
              <a href="/TP/privacy.pdf" target="_blank" rel="noopener noreferrer">Privacy policy</a>
            </p>
          </li>
        </div>
      </nav>
      <div className="mobile-menu-overlay"></div>
      {/* Navbar End */}
    </>
  );
};

export default Navbar;