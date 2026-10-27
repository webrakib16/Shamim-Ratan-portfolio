'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar({ activePage = 'home' }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="container main-navbar-bar" id="navbar">
      {/* Brand Name / Title */}
      <div className="nav-brand-box">
        <Link href="/" onClick={closeMobileMenu}>
          <h2>
            MD. <span className="span-clr">Shamim </span>Raton
          </h2>
          <p>
            <span className="span-star">&#9733; </span>
            36th BCS Education Cadre
            <span className="span-star"> &#9733;</span>
          </p>
        </Link>
      </div>

      {/* ========================================================
          DESKTOP / LAPTOP / TABLET FULL MENU
      ========================================================= */}
      <ul className="nav-links desktop-nav-menu">
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <Link href="/#journey">Education</Link>
        </li>
        <li>
          <Link
            href="/gallery"
            target="_blank"
            rel="noopener noreferrer"
            className={activePage === 'gallery' ? 'active' : ''}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            href="/research"
            target="_blank"
            rel="noopener noreferrer"
            className={activePage === 'research' ? 'active' : ''}
          >
            Research
          </Link>
        </li>
        <li>
          <a href="#contact">
            <button className="neon-button">
              <i className="fa-solid fa-paper-plane" style={{ marginRight: '6px' }}></i>
              <span className="neon-git-text">Get In Touch</span>
            </button>
          </a>
        </li>
      </ul>

      {/* ========================================================
          MOBILE VIEW DIRECT ACTIONS: Get In Touch & Hamburger Only!
      ========================================================= */}
      <div className="mobile-direct-actions">
        {/* Directly visible Get In Touch Button */}
        <a href="#contact" className="mobile-direct-contact-btn-wrap">
          <button className="neon-button mobile-small-neon">
            <span className="neon-git-text">Get In Touch</span>
          </button>
        </a>

        {/* Hamburger Toggle Button */}
        <button
          className="mobile-hamburger-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
      </div>

      {/* ========================================================
          MOBILE DRAWER / DROPDOWN (Inside Hamburger)
      ========================================================= */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer-menu">
          <ul className="mobile-drawer-links">
            <li>
              <Link
                href="/"
                className={activePage === 'home' ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                <i className="fa-solid fa-house"></i> Home
              </Link>
            </li>
            <li>
              <Link href="/#journey" onClick={closeMobileMenu}>
                <i className="fa-solid fa-graduation-cap"></i> Education
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                <i className="fa-solid fa-images"></i> Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/research"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                <i className="fa-solid fa-flask"></i> Research
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={closeMobileMenu}>
                <i className="fa-solid fa-user"></i> About Professor
              </Link>
            </li>
            <li>
              <a href="#contact" onClick={closeMobileMenu}>
                <i className="fa-solid fa-paper-plane"></i> Get In Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
