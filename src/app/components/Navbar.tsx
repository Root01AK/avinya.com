'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        {/* Logo */}
        <Link href="/" className="navbar-brand">
          <Image src="/logo.png" alt="Avinya-logo" width={200} height={200} />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-auto">
            <Link href="/" className="nav-link">HOME</Link>
            <Link href="/Services" className="nav-link">SERVICES</Link>

            <NavDropdown title="PROJECTS" id="basic-nav-dropdown">
              <Link href="/CompletedProjects" className="dropdown-item">Completed</Link>
              <Link href="/LatestProjects" className="dropdown-item">Ongoing Projects</Link>
            </NavDropdown>
          </Nav>

          <Nav className="ms-auto">
            <Link href="/Portfolio" className="nav-link">PORTFOLIO</Link>
            <Link href="/Contact" className="nav-link">CONTACT</Link>
            <Link href="/Careers&Collaborations" className="nav-link">JOIN US</Link>

            {/* External login */}
            <a
              className="nav-link"
              href="https://avinya.app.go.redteam.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tooltip">Redteam!</span>
              <span className="login-btn">LOGIN</span>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
