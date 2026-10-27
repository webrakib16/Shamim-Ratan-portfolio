'use client';

import { useState, useEffect } from 'react';

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Touch devices (mobile/tablet) -> direct call, Desktop (hover devices) -> WhatsApp
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(hover: none) and (pointer: coarse)');
    const update = () => setIsTouchDevice(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message') {
      if (value.length <= 500) {
        setCharCount(value.length);
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setCharCount(0);
      }, 4000);
    }, 1000);
  };

  return (
    <section className="contact-touch-section" id="contact">
      {/* Background Visual Overlay */}
      <div className="contact-backdrop-glow"></div>

      <div className="contact-main-wrapper">
        {/* Header */}
        <div className="contact-header-center">
          <div className="contact-eyebrow">
            <span className="gold-line"></span> CONTACT <span className="gold-line"></span>
          </div>
          <h2 className="contact-main-title">
            Get in <span className="golden-serif-word">Touch</span>
          </h2>
          <p className="contact-lead-sub">
            I'm always open to academic discussions, collaboration, research opportunities,
            student guidance, or any other inquiries. Feel free to reach out.
          </p>
        </div>

        {/* ========================================================
            UPPER CONTENT: Left Features & Right Form Card
        ========================================================= */}
        <div className="contact-split-layout">
          {/* Left Column: Discussions, Guidance, Opportunities + Stack of Books */}
          <div className="contact-features-side">
            <div className="contact-feature-item">
              <div className="feature-icon-circle">
                <i className="fa-regular fa-comment-dots"></i>
              </div>
              <div className="feature-text-block">
                <h4>Discussions</h4>
                <p>Academic topics, research ideas, or collaborative projects.</p>
              </div>
            </div>

            <div className="contact-feature-item">
              <div className="feature-icon-circle">
                <i className="fa-solid fa-users"></i>
              </div>
              <div className="feature-text-block">
                <h4>Guidance</h4>
                <p>Support for current and prospective students.</p>
              </div>
            </div>

            <div className="contact-feature-item">
              <div className="feature-icon-circle">
                <i className="fa-regular fa-file-lines"></i>
              </div>
              <div className="feature-text-block">
                <h4>Opportunities</h4>
                <p>Research, teaching, or other professional inquiries.</p>
              </div>
            </div>

            {/* Stack of Classic Academic Books Visual (As shown in image) */}
            <div className="academic-books-stack-wrapper">
              <div className="book-spine book-1">
                <span>Education</span>
              </div>
              <div className="book-spine book-2">
                <span>Research</span>
              </div>
              <div className="book-spine book-3">
                <span>Teaching</span>
              </div>
              <div className="book-spine book-4">
                <span>A Better Tomorrow</span>
              </div>
              <div className="pen-cup-visual">
                <i className="fa-solid fa-pen-nib"></i>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Message Form */}
          <div className="contact-form-glass-card">
            <div className="form-card-header">
              <div className="form-title-with-icon">
                <div className="mail-envelope-icon">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <h3>Send a Message</h3>
              </div>
              <span className="response-time-sub">I'll get back to you as soon as possible.</span>
            </div>

            {isSubmitted ? (
              <div className="form-success-alert">
                <i className="fa-solid fa-circle-check"></i>
                <div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. I will get back to you promptly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="message-form-body">
                {/* Row 1: Name and Email */}
                <div className="form-two-cols">
                  <div className="form-input-group">
                    <div className="input-with-icon">
                      <i className="fa-regular fa-user"></i>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-input-group">
                    <div className="input-with-icon">
                      <i className="fa-regular fa-envelope"></i>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Subject */}
                <div className="form-input-group">
                  <div className="input-with-icon select-box">
                    <i className="fa-regular fa-file-lines"></i>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled>
                        Subject
                      </option>
                      <option value="Academic Inquiry">Academic Inquiry</option>
                      <option value="Student Mentoring">Student Guidance &amp; Mentoring</option>
                      <option value="Research Collaboration">Research Collaboration</option>
                      <option value="Department Consultation">Department Consultation</option>
                      <option value="General Question">General Question</option>
                    </select>
                    <i className="fa-solid fa-chevron-down select-chevron"></i>
                  </div>
                </div>

                {/* Row 3: Message Textarea */}
                <div className="form-input-group">
                  <div className="textarea-with-icon">
                    <i className="fa-regular fa-comment-dots textarea-icon"></i>
                    <textarea
                      name="message"
                      required
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="char-counter-label">{charCount} / 500</div>
                </div>

                {/* Row 4: Submit Button */}
                <div className="form-submit-row">
                  <button
                    type="submit"
                    className="golden-pill-send-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                      </>
                    ) : (
                      <>
                        <i className="fa-regular fa-paper-plane"></i>
                        <span>Send Message</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ========================================================
            BOTTOM ROW: 4 Glowing Glass Cards (As in Image 1)
        ========================================================= */}
        <div className="contact-bottom-cards-row">
          {/* Card 1: Email (whole card clickable -> Gmail compose) */}
          <a
            className="glass-info-pill-card cyan-glow-card"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shamimraton.ru@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-top-icon-circle cyan-circle">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="card-text-inner">
              <span className="card-micro-label">Email</span>
              <h4 className="card-primary-val">shamimraton.ru@gmail.com</h4>
              <p className="card-subtext">Feel free to drop an email anytime.</p>
            </div>
          </a>

          {/* Card 2: Phone (whole card clickable -> call on touch, WhatsApp on desktop) */}
          <a
            className="glass-info-pill-card green-glow-card"
            href={
              isTouchDevice
                ? 'tel:+8801737918175'
                : 'https://wa.me/8801737918175?text=Hello%20Sir%2C%20I%20would%20like%20to%20get%20in%20touch.'
            }
            target={isTouchDevice ? undefined : '_blank'}
            rel={isTouchDevice ? undefined : 'noopener noreferrer'}
          >
            <div className="card-top-icon-circle green-circle">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="card-text-inner">
              <span className="card-micro-label">Phone</span>
              <h4 className="card-primary-val">+880 1737-918175</h4>
              <p className="card-subtext">Available during working hours.</p>
            </div>
          </a>

          {/* Card 3: Location (whole card clickable -> Google Maps) */}
          <a
            className="glass-info-pill-card amber-glow-card"
            href="https://www.google.com/maps/search/?api=1&query=Rajshahi+College"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-top-icon-circle amber-circle">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="card-text-inner">
              <span className="card-micro-label">Location</span>
              <h4 className="card-primary-val">
                Rajshahi College <br />
                <span className="city-sub">Rajshahi, Bangladesh</span>
              </h4>
              <p className="card-subtext">You are always welcome to visit.</p>
            </div>
          </a>

          {/* Card 4: Office (whole card clickable -> Google Maps) */}
          <a
            className="glass-info-pill-card blue-glow-card"
            href="https://www.google.com/maps/search/?api=1&query=Department+of+Chemistry,+Rajshahi+College"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-top-icon-circle blue-circle">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <div className="card-text-inner">
              <span className="card-micro-label">Office</span>
              <h4 className="card-primary-val">
                Department of Chemistry <br />
                <span className="city-sub">Rajshahi College</span>
              </h4>
              <p className="card-subtext">For academic and official matters.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
