'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <header className="hero-section">
      <div className="header-content">
        <h4>36TH BCS EDUCATION CADRE • RAJSHAHI COLLEGE</h4>
        <h1 className="header-color2">Inspiring Minds Through</h1>
        <h1 className="header-color">Chemistry &amp; Science</h1>
        <p>
          Dedicated Lecturer in the Department of Chemistry at Rajshahi College.
          Passionate about making molecular science simple, meaningful, and engaging.
          Building strong fundamentals, critical analytical thinking, and mentoring the next generation of scientists.
        </p>

        <div className="header-button">
          <Link href="/gallery" target="_blank" rel="noopener noreferrer">
            <button className="neon-button">View Gallery</button>
          </Link>
          <a href="#contact">
            <button className="btn2">Get In Touch</button>
          </a>
        </div>

        {/* ========================================================
            MOBILE ONLY ANIMATION (Displays below article only on mobile)
        ========================================================= */}
        <div className="mobile-hero-animation-wrapper">
          <div className="mobile-chemistry-atom">
            <div className="atom-nucleus">
              <i className="fa-solid fa-atom"></i>
            </div>
            <div className="electron-orbit orbit-1">
              <span className="electron electron-cyan"></span>
            </div>
            <div className="electron-orbit orbit-2">
              <span className="electron electron-gold"></span>
            </div>
            <div className="electron-orbit orbit-3">
              <span className="electron electron-teal"></span>
            </div>
          </div>
          <div className="mobile-atom-label">
            <span>Exploration</span> • <span>Innovation</span> • <span>Excellence</span>
          </div>
        </div>
      </div>
    </header>
  );
}
