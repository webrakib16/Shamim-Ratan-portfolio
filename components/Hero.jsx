'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <header className="hero-section">
      {/* ========================================================
          CHEMISTRY THEMED ANIMATED DECOR (Mobile View Only)
      ========================================================= */}
      <div className="hero-chem-decor" aria-hidden="true">
        {/* Benzene ring */}
        <svg className="chem-svg chem-benzene" viewBox="0 0 120 120">
          <polygon
            points="60,10 103,35 103,85 60,110 17,85 17,35"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="60" cy="60" r="24" vectorEffect="non-scaling-stroke" />
        </svg>

        {/* Molecular structure with atoms & bonds */}
        <svg className="chem-svg chem-molecule" viewBox="0 0 220 140">
          <line x1="40" y1="95" x2="110" y2="50" />
          <line x1="110" y1="50" x2="180" y2="95" />
          <line x1="40" y1="95" x2="110" y2="115" />
          <line x1="110" y1="115" x2="180" y2="95" />
          <circle className="chem-atom atom-c" cx="110" cy="50" r="13" />
          <circle className="chem-atom atom-o1" cx="40" cy="95" r="9" />
          <circle className="chem-atom atom-o2" cx="110" cy="115" r="9" />
          <circle className="chem-atom atom-h" cx="180" cy="95" r="7" />
        </svg>

        {/* Conical flask with rising bubbles */}
        <svg className="chem-svg chem-flask" viewBox="0 0 100 140">
          <path
            d="M42 12 h16 v28 l26 72 a12 12 0 0 1 -11 16 h-46 a12 12 0 0 1 -11 -16 l26 -72 z"
            vectorEffect="non-scaling-stroke"
          />
          <line x1="40" y1="12" x2="60" y2="12" vectorEffect="non-scaling-stroke" />
          <circle className="flask-bubble fb-1" cx="50" cy="112" r="4" />
          <circle className="flask-bubble fb-2" cx="40" cy="120" r="3" />
          <circle className="flask-bubble fb-3" cx="60" cy="118" r="3.5" />
        </svg>

        <span className="chem-formula formula-1">H₂O</span>
        <span className="chem-formula formula-2">CO₂</span>
        <span className="chem-formula formula-3">CH₄</span>
        <span className="chem-formula formula-4">NaCl</span>
        <span className="chem-formula formula-5">C₆H₆</span>

        <span className="chem-bubble bubble-1"></span>
        <span className="chem-bubble bubble-2"></span>
        <span className="chem-bubble bubble-3"></span>
        <span className="chem-bubble bubble-4"></span>
        <span className="chem-bubble bubble-5"></span>
        <span className="chem-bubble bubble-6"></span>

        <span className="chem-ring ring-1"></span>
        <span className="chem-ring ring-2"></span>
      </div>

      <div className="header-content">
        <h4>
          LECTURER, DEPARTMENT OF CHEMISTRY •
          RAJSHAHI COLLEGE
        </h4>
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
            <button className="neon-button">
              <i className="fa-solid fa-paper-plane" style={{ marginRight: '6px' }}></i>
              <span className="neon-git-text">Get In Touch</span>
            </button>
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
        </div>
      </div>
    </header>
  );
}
