'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Gallery({ mode = 'preview' }) {
  const [activeTab, setActiveTab] = useState('academic');
  const [lightboxImg, setLightboxImg] = useState(null);

  // Gallery categories with full images
  const galleryData = {
    academic: {
      title: 'Academic Gallery',
      subtitle: 'Teaching & academic milestones — Rajshahi College',
      items: [
        {
          id: 1,
          tag: 'Lecture',
          title: 'Classroom Lecture',
          sub: 'Chemistry Department',
          src: '/assets/gallery/academic/9.jpg',
        },
        {
          id: 2,
          tag: 'Lab',
          title: 'Laboratory Session',
          sub: 'Organic Chemistry Lab',
          src: '/assets/gallery/academic/2.jpg',
        },
        {
          id: 3,
          tag: 'Seminar',
          title: 'Research Seminar',
          sub: 'Academic Presentation',
          src: '/assets/gallery/academic/3.jpg',
        },
        {
          id: 4,
          tag: 'Practical',
          title: 'Practical Demonstration',
          sub: 'Student Guidance',
          src: '/assets/gallery/academic/4.jpg',
        },
        {
          id: 5,
          tag: 'Classroom',
          title: 'Interactive Session',
          sub: 'Concept Building',
          src: '/assets/gallery/academic/5.jpg',
        },
        {
          id: 6,
          tag: 'Academic',
          title: 'Faculty Discussion',
          sub: 'Rajshahi College',
          src: '/assets/gallery/academic/6.jpg',
        },
        {
          id: 7,
          tag: 'Exhibition',
          title: 'Science Project Review',
          sub: 'Mentoring Young Minds',
          src: '/assets/gallery/academic/7.jpg',
        },
        {
          id: 8,
          tag: 'Workshop',
          title: 'Chemistry Workshop',
          sub: 'Hands-on Learning',
          src: '/assets/gallery/academic/8.jpg',
        },
        {
          id: 9,
          tag: 'Lecture',
          title: 'Theoretical Chemistry',
          sub: 'Advanced Concepts',
          src: '/assets/gallery/academic/1.jpg',
        },
      ],
    },
    teachers: {
      title: 'Teachers Gallery',
      subtitle: 'Respected colleagues & honourable faculty members',
      items: [
        {
          id: 1,
          tag: 'Faculty',
          title: 'Honourable Faculty',
          sub: 'Chemistry Department',
          src: '/assets/gallery/teachers/1.jpg',
        },
        {
          id: 2,
          tag: 'Colleagues',
          title: 'Academic Meet',
          sub: 'Faculty Exchange',
          src: '/assets/gallery/teachers/2.jpg',
        },
        {
          id: 3,
          tag: 'Event',
          title: 'Prize Ceremony',
          sub: 'Faculty Gathering',
          src: '/assets/gallery/teachers/60.jpg',
        },
        {
          id: 4,
          tag: 'Meeting',
          title: 'Department Conference',
          sub: 'Curriculum Planning',
          src: '/assets/gallery/teachers/4.jpg',
        },
        {
          id: 5,
          tag: 'Celebration',
          title: 'Academic Celebration',
          sub: 'Department Event',
          src: '/assets/gallery/teachers/5.jpg',
        },
        {
          id: 6,
          tag: 'Honor',
          title: 'Honoring Excellence',
          sub: 'Faculty Members',
          src: '/assets/gallery/teachers/80.jpg',
        },
      ],
    },
    tour: {
      title: 'Tour & Travel',
      subtitle: 'Excursions, field trips, nature & journeys',
      items: [
        {
          id: 1,
          tag: 'Mountain',
          title: 'Sajek Valley',
          sub: 'Clouds & Hills Journey',
          src: '/assets/gallery/tour/9.jpg.jpg',
        },
        {
          id: 2,
          tag: 'Tour',
          title: 'Jaflong, Sylhet',
          sub: 'Tour With Antimatter',
          src: '/assets/gallery/tour/3.jpg',
        },
        {
          id: 3,
          tag: 'Nature',
          title: 'Scenic Retreat',
          sub: 'Exploring Beauty',
          src: '/assets/gallery/tour/1.jpg',
        },
        {
          id: 4,
          tag: 'Travel',
          title: 'Expedition Memories',
          sub: 'Group Travel',
          src: '/assets/gallery/tour/2.jpg',
        },
        {
          id: 5,
          tag: 'Adventure',
          title: 'Field Exploration',
          sub: 'Unforgettable Journeys',
          src: '/assets/gallery/tour/4.jpg',
        },
        {
          id: 6,
          tag: 'Landscape',
          title: 'Nature Photography',
          sub: 'Serene Moments',
          src: '/assets/gallery/tour/5.jpg',
        },
      ],
    },
    memories: {
      title: 'Old Memories',
      subtitle: 'Cherished memories & milestones through the years',
      items: [
        {
          id: 1,
          tag: 'Memories',
          title: 'Campus Life',
          sub: 'Golden Days',
          src: '/assets/gallery/memories/4.jpg',
        },
        {
          id: 2,
          tag: 'Milestone',
          title: 'University Days',
          sub: 'University of Rajshahi',
          src: '/assets/gallery/memories/1.jpg',
        },
        {
          id: 3,
          tag: 'Friends',
          title: 'Study Circle',
          sub: 'Biochemistry Batch',
          src: '/assets/gallery/memories/2.jpg',
        },
        {
          id: 4,
          tag: 'Alumni',
          title: 'Gathering of Friends',
          sub: 'Life Moments',
          src: '/assets/gallery/memories/3.jpg',
        },
        {
          id: 5,
          tag: 'Reunion',
          title: 'Cherished Moments',
          sub: 'Time Capsule',
          src: '/assets/gallery/memories/5.jpg',
        },
      ],
    },
  };

  // Preview items for homepage
  const previewItems = [
    {
      type: 'featured',
      tag: 'Mountain',
      title: 'Sajek Valley',
      src: '/assets/gallery/tour/9.jpg.jpg',
    },
    {
      type: 'normal',
      tag: 'Faculty',
      title: 'Honorable Teachers',
      src: '/assets/gallery/teachers/1.jpg',
    },
    {
      type: 'normal',
      tag: 'Practical',
      title: 'Laboratory Session',
      src: '/assets/chemistry workshop.jpg',
    },
    {
      type: 'normal',
      tag: 'Research',
      title: 'Research Seminar',
      src: '/assets/gallery/academic/3.jpg',
    },
    {
      type: 'normal',
      tag: 'Sports & Awards',
      title: 'Prize Ceremony',
      src: '/assets/gallery/teachers/60.jpg',
    },
    {
      type: 'normal',
      tag: 'Memories',
      title: 'Old Memories',
      src: '/assets/gallery/memories/4.jpg',
    },
    {
      type: 'wide',
      tag: 'Jaflong, Sylhet',
      title: 'Tour With Antimatter',
      src: '/assets/gallery/tour/3.jpg',
    },
  ];

  // If on Full Gallery page
  if (mode === 'full') {
    const currentCategory = galleryData[activeTab];

    return (
      <section className="full-gallery-page" id="gallery-page">
        <div className="gallery-inner">
          <header className="gallery-header">
            <div className="gallery-eyebrow">✦ Gallery ✦</div>
            <h2 className="gallery-title">
              Memories &amp; <span>milestones</span>
            </h2>
            <p className="gallery-sub">
              A visual collection of Academic Achievements, Teaching moments,
              Memorable Journeys, and cherished memories.
            </p>
          </header>

          {/* Tab Navigation */}
          <nav className="gallery-tabs-nav" aria-label="Gallery categories">
            <button
              className={`tab-btn ${activeTab === 'academic' ? 'active' : ''}`}
              onClick={() => setActiveTab('academic')}
            >
              <span className="tab-symbol">01</span>
              Academic Gallery
            </button>
            <button
              className={`tab-btn ${activeTab === 'teachers' ? 'active' : ''}`}
              onClick={() => setActiveTab('teachers')}
            >
              <span className="tab-symbol">02</span>
              Teachers Gallery
            </button>
            <button
              className={`tab-btn ${activeTab === 'tour' ? 'active' : ''}`}
              onClick={() => setActiveTab('tour')}
            >
              <span className="tab-symbol">03</span>
              Tour &amp; Travel
            </button>
            <button
              className={`tab-btn ${activeTab === 'memories' ? 'active' : ''}`}
              onClick={() => setActiveTab('memories')}
            >
              <span className="tab-symbol">04</span>
              Old Memories
            </button>
          </nav>

          {/* Current Category Info */}
          <div className="panel-meta">
            <h3>{currentCategory.title}</h3>
            <p>{currentCategory.subtitle}</p>
          </div>

          {/* Categorized Image Grid */}
          <div className="categorized-grid">
            {currentCategory.items.map((item, idx) => (
              <figure
                className="tile"
                key={idx}
                onClick={() => setLightboxImg(item)}
              >
                <span className="tile-index">{String(idx + 1).padStart(2, '0')}</span>
                <span className="tile-tag">{item.tag}</span>
                <div className="tile-img-box">
                  <img src={item.src} alt={item.title} loading="lazy" />
                </div>
                <figcaption className="tile-caption">
                  <h4>{item.title}</h4>
                  <p>{item.sub}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Modal Lightbox */}
          {lightboxImg && (
            <div
              className="lightbox-modal"
              onClick={() => setLightboxImg(null)}
            >
              <div
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="lightbox-close"
                  onClick={() => setLightboxImg(null)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <img src={lightboxImg.src} alt={lightboxImg.title} />
                <div className="lightbox-info">
                  <h3>{lightboxImg.title}</h3>
                  <p>{lightboxImg.sub}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Otherwise, render Homepage Bento Preview
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-title">
          <span>Academic Gallery</span>
          <h2>
            Moments of Teaching &amp;{' '}
            <span className="section-title-highlight">Academic Excellence</span>
          </h2>
          <p>
            Showcasing Memorable Academic Milestones
          </p>
        </div>

        <div className="gallery-grid">
          {previewItems.map((item, index) => (
            <div
              key={index}
              className={`gallery-card ${item.type}`}
              onClick={() => setLightboxImg(item)}
            >
              <img src={item.src} alt={item.title} loading="lazy" />
              <span className="gallery-card-tag">{item.tag}</span>
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-center-btn">
          <Link href="/gallery" target="_blank" rel="noopener noreferrer">
            <button className="neon-button">
              <i className="fa-solid fa-images" style={{ marginRight: '8px' }}></i> View Full Categorized Gallery
            </button>
          </Link>
        </div>
      </div>

      {lightboxImg && (
        <div className="lightbox-modal" onClick={() => setLightboxImg(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setLightboxImg(null)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img src={lightboxImg.src} alt={lightboxImg.title} />
            <div className="lightbox-info">
              <h3>{lightboxImg.title}</h3>
              <p>{lightboxImg.tag}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
