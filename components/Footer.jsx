import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      {/* Top Glow Line */}
      <div className="top-line"></div>

      {/* ========================================================
          ANIMATED FOOTER BACKGROUND LAYERS
      ========================================================= */}
      <div className="footer-animated-bg-canvas">
        {/* Pulsing Molecule Rings */}
        <div className="footer-orbit-ring orbit-ring-1">
          <span className="orbiting-electron el-1"></span>
        </div>
        <div className="footer-orbit-ring orbit-ring-2">
          <span className="orbiting-electron el-2"></span>
        </div>

        {/* Floating Chemistry Benzene Symbols */}
        <div className="floating-chem-icon chem-1">
          <i className="fa-solid fa-atom"></i>
        </div>
        <div className="floating-chem-icon chem-2">
          <i className="fa-solid fa-flask"></i>
        </div>
        <div className="floating-chem-icon chem-3">
          <i className="fa-solid fa-dna"></i>
        </div>

        {/* Shimmering Dust Dots */}
        <div className="footer-dust-dot f-dot-1"></div>
        <div className="footer-dust-dot f-dot-2"></div>
        <div className="footer-dust-dot f-dot-3"></div>
        <div className="footer-dust-dot f-dot-4"></div>
      </div>

      <div className="footer-wrapper">
        {/* Left Column: Brand & Socials */}
        <div className="footer-left">
          <div className="brand">
            <img src="/assets/download.png" alt="Logo" />
            <div>
              <h2>
                Shamim <span>Ratan</span>
              </h2>
              <h5>
                Lecturer, Department of Chemistry <br />
                Rajshahi College
              </h5>
            </div>
          </div>

          <p>
            Dedicated to teaching Chemistry with passion and purpose. Building
            strong concepts, nurturing analytical inquiry, and inspiring minds for a better tomorrow.
          </p>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/share/14iL2Ks7jxD/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a href="#" title="LinkedIn" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href="mailto:shamimraton.ru@gmail.com"
              title="Email"
              aria-label="Send Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>

            <a
              href="https://wa.me/8801737918175"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Center Column: Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#about">About Professor</Link>
            </li>
            <li>
              <Link href="/#journey">Education Journey</Link>
            </li>
            <li>
              <Link href="/gallery" target="_blank" rel="noopener noreferrer">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/research" target="_blank" rel="noopener noreferrer">
                Research
              </Link>
            </li>
            <li>
              <a href="#contact">Get In Touch</a>
            </li>
          </ul>
        </div>

        {/* Right Column: Contact Details */}
        <div className="footer-contact">
          <h3>Contact Info</h3>

          <div className="contact-box">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              Department Of Chemistry <br />
              Rajshahi College <br />
              Saheb-Bazar Road, Rajshahi, Bangladesh
            </div>
          </div>

          <div className="contact-box">
            <i className="fa-solid fa-envelope"></i>
            <div>shamimraton.ru@gmail.com</div>
          </div>

          <div className="contact-box">
            <a href="tel:+8801737918175" title="Call">
              <i className="fa-solid fa-phone"></i>
            </a>
            <div>+880 1737-918175</div>
          </div>
        </div>
      </div>

      {/* Floating Animated Flask & DNA */}
      <img src="/assets/middile.png" className="flask" alt="Flask" />
      <img src="/assets/dna.png" className="dna" alt="DNA" />
      <div className="molecule molecule1"></div>
      <div className="molecule molecule2"></div>

      {/* Divider */}
      <div className="footer-divider">
        <div className="line"></div>
        <div className="center-icon">
          <img src="/assets/download.png" alt="Flask Icon" />
        </div>
        <div className="line"></div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 <span>MD. Shamim Raton</span>. All Rights Reserved.
        </p>
        <p>
          Designed &amp; Developed for <span>Academic &amp; Student Excellence</span>
        </p>
      </div>
    </footer>
  );
}
