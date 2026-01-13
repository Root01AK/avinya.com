import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
const footerLinks = [
  {
    title: "Our Works",
    links: [
      { label: "Delivered Projects", href: "/CompletedProjects" },
      { label: "Latest Projects", href: "/LatestProjects" },
      { label: "Portfolio", href: "/Portfolio" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Services", href: "/Services" },
      { label: "Contact", href: "/Contact" },
      { label: "Join Us", href: "/Careers&Collaborations" },
    ],
  },
];


const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-card">

        {/* Top Section */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="logo-text">Avinya Construction | Management</span>
            </div>

            <p className="brand-description">
              Avinya Construction Management empowers teams to transform plans into precision-driven execution —
              delivering clarity, control, and confidence across every project.
            </p>

            <div className="social-icons">
              <Link href="https://www.linkedin.com/company/yourcompany" target="_blank" aria-label="LinkedIn">
                <FaLinkedinIn />
              </Link>

              <Link href="https://www.facebook.com/yourcompany" target="_blank" aria-label="Facebook">
                <FaFacebookF />
              </Link>

              <Link href="https://www.instagram.com/yourcompany" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            {footerLinks.map((section, index) => (
              <div className="footer-column" key={index}>
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Section */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Avinya Construction | Management. All rights reserved.</span>



          <div className="footer-legal">
            <Link href="/PrivacyPolicy">Privacy Policy</Link>
            <Link href="/Terms&Conditions">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
