'use client';

import { useState } from 'react';

export default function Timeline() {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [activeHoverNode, setActiveHoverNode] = useState(null);

  const milestones = [
    {
      num: '01',
      year: '2011',
      stage: 'Graduation',
      title: 'B.Sc. (Honours)',
      subtitle: 'Biochemistry & Molecular Biology',
      description:
        'Successfully completed Bachelor of Science (Honours) in Biochemistry & Molecular Biology with strong academic performance.',
      details:
        'Graduated with honors, mastering advanced principles of chemical biology, organic synthesis, biochemical pathways, and analytical laboratory research methodologies.',
      image: '/assets/timeline/graduation.jpg',
      icon: 'fa-solid fa-graduation-cap',
      isFeatured: false,
    },
    {
      num: '02',
      year: '2013',
      stage: 'Education Cadre',
      title: '36th BCS Education Cadre',
      subtitle: 'Ministry of Education',
      description:
        'Qualified through the 36th BCS Education Cadre, marking the beginning of a professional career in higher education and academic service.',
      details:
        'Earned prestigious appointment through the competitive Bangladesh Civil Service examination, joining the national education administration to teach and inspire scholars.',
      image: '/assets/timeline/bcs.jpg',
      icon: 'fa-solid fa-book-open',
      isFeatured: false,
    },
    {
      num: '03',
      year: '2015',
      stage: 'Masters',
      title: 'M.Sc.',
      subtitle: 'Biochemistry & Molecular Biology',
      description:
        'Successfully completed M.Sc. in Biochemistry & Molecular Biology from the University of Rajshahi with strong academic performance.',
      details:
        'Conducted specialized molecular research, theoretical chemistry modeling, and laboratory practicals at the renowned University of Rajshahi with outstanding distinction.',
      image: '/assets/timeline/msc.jpg',
      icon: 'fa-solid fa-microscope',
      isFeatured: false,
    },
    {
      num: '04',
      year: '2022',
      stage: 'Joined as Lecturer',
      title: 'Lecturer',
      subtitle: 'Department of Chemistry, Rajshahi College',
      description:
        'Joined Rajshahi College as Lecturer in the Department of Chemistry on 19 October 2022.',
      details:
        'Mentoring undergraduate and graduate chemistry scholars at the historic Rajshahi College, conducting laboratory demonstrations, research workshops, and curriculum enrichment.',
      image: '/assets/timeline/lecturer.jpg',
      icon: 'fa-solid fa-flask',
      isFeatured: false,
    },
    {
      num: '05',
      year: 'Present',
      stage: 'Senior Lecturer',
      title: 'Academic Excellence',
      subtitle: 'Rajshahi College',
      description:
        'Continuing to educate, mentor students, and contribute to scientific research.',
      details:
        'Driving student-centric chemistry pedagogy, mentoring students to national science competitions and research milestones, and contributing to higher academic publications.',
      image: '/assets/timeline/excellence.jpg',
      icon: 'fa-solid fa-star',
      isFeatured: true, // Golden Highlighted Card
    },
  ];

  return (
    <section className="education-journey-section" id="journey">
      {/* ========================================================
          BACKGROUND ANIMATION: Animated Flowing Waves & Particles
      ========================================================= */}
      <div className="journey-animated-canvas">
        {/* Animated Flowing Golden & Cyan Aurora Waves */}
        <svg
          className="flowing-wave-svg wave-layer-1"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path
            className="wave-path-cyan"
            d="M 0,160 C 320,300 420,40 680,180 C 940,320 1120,80 1440,200 L 1440,0 L 0,0 Z"
          />
        </svg>

        <svg
          className="flowing-wave-svg wave-layer-2"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path
            className="wave-path-gold"
            d="M 0,220 C 280,60 520,320 820,140 C 1120,-40 1260,260 1440,160 L 1440,0 L 0,0 Z"
          />
        </svg>

        <svg
          className="flowing-wave-svg wave-layer-3"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path
            className="wave-path-subtle"
            d="M 0,100 C 380,240 640,-20 960,180 C 1280,380 1380,60 1440,120 L 1440,0 L 0,0 Z"
          />
        </svg>

        {/* Floating Glowing Particle Dust */}
        <div className="particle-dust p-1"></div>
        <div className="particle-dust p-2"></div>
        <div className="particle-dust p-3"></div>
        <div className="particle-dust p-4"></div>
        <div className="particle-dust p-5"></div>
        <div className="particle-dust p-6"></div>
        <div className="particle-dust p-7"></div>
        <div className="particle-dust p-8"></div>
        <div className="particle-dust p-9"></div>
        <div className="particle-dust p-10"></div>
      </div>

      <div className="journey-container">
        {/* Header */}
        <div className="journey-header">
          <div className="journey-eyebrow">
            <span className="line-accent"></span> CAREER TIMELINE <span className="line-accent"></span>
          </div>
          <h2 className="journey-main-title">
            Education <span className="golden-highlight">Journey</span>
          </h2>
          <p className="journey-subtitle">
            A journey dedicated to education, research, and inspiring future scientists.
          </p>
        </div>

        {/* ========================================================
            DESKTOP TIMELINE (Large Screen Layout as per Reference)
        ========================================================= */}
        <div className="desktop-timeline-view">
          {/* Milestone Progress Track Line with Glowing Nodes */}
          <div className="timeline-milestones-track">
            {/* The Connecting Glowing Lines */}
            <div className="track-segment segment-cyan"></div>
            <div className="track-segment segment-gold"></div>

            <div className="milestones-nodes-row">
              {milestones.map((item, idx) => (
                <div
                  key={idx}
                  className={`milestone-node-col ${item.isFeatured ? 'featured-node' : ''} ${
                    activeHoverNode === idx ? 'hovered' : ''
                  }`}
                  onMouseEnter={() => setActiveHoverNode(idx)}
                  onMouseLeave={() => setActiveHoverNode(null)}
                  onClick={() => setSelectedMilestone(item)}
                >
                  <div className="milestone-circle-badge">
                    <i className={item.icon}></i>
                  </div>
                  <div className="milestone-year-text">{item.year}</div>
                  <div className="milestone-stage-text">{item.stage}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 5 Cards Row Under Nodes (Exact Geometry Matching Reference Image) */}
          <div className="journey-cards-grid">
            {milestones.map((item, index) => (
              <div
                key={index}
                className={`journey-card ${item.isFeatured ? 'featured-card' : ''} ${
                  activeHoverNode === index ? 'active-highlight' : ''
                }`}
                onMouseEnter={() => setActiveHoverNode(index)}
                onMouseLeave={() => setActiveHoverNode(null)}
              >
                {/* Numeric Pill Badge Top Left */}
                <div className="card-num-pill">{item.num}</div>

                {/* Top Image Box with Diagonal Sloped Bottom */}
                <div className="card-thumb-sloped-box">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="card-sloped-edge-line"></div>
                </div>

                {/* Card Content Area */}
                <div className="card-body-content">
                  <h3 className="card-main-title">{item.title}</h3>
                  <h4 className="card-sub-dept">{item.subtitle}</h4>
                  <div className="card-mini-line"></div>
                  <p className="card-description-text">{item.description}</p>
                </div>

                {/* Card Footer: Read More Link + Circular Icon Badge */}
                <div className="card-footer-action">
                  <button
                    className="read-more-btn"
                    onClick={() => setSelectedMilestone(item)}
                  >
                    <span>Read more</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>

                  <div
                    className="card-mini-icon-bubble"
                    onClick={() => setSelectedMilestone(item)}
                  >
                    <i className={item.icon}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            MOBILE TIMELINE (Exact Phone Screen Layout as per Reference)
        ========================================================= */}
        <div className="mobile-timeline-view">
          <div className="mobile-track-line"></div>

          <div className="mobile-milestones-list">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className={`mobile-milestone-item ${item.isFeatured ? 'featured-mobile' : ''}`}
                onClick={() => setSelectedMilestone(item)}
              >
                {/* Left Node Icon */}
                <div className="mobile-node-box">
                  <div className="mobile-circle-badge">
                    <i className={item.icon}></i>
                  </div>
                </div>

                {/* Right Content Interactive Bar */}
                <div className="mobile-content-box">
                  <div className="mobile-year-label">
                    <span>{item.year}</span> {item.stage}
                  </div>

                  <div className="mobile-interactive-card">
                    <div className="mobile-card-img">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="mobile-card-info">
                      <h4>{item.title}</h4>
                      <p>{item.subtitle}</p>
                    </div>
                    <div className="mobile-chevron">
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            MODAL DETAIL POPUP
        ========================================================= */}
        {selectedMilestone && (
          <div
            className="journey-modal-backdrop"
            onClick={() => setSelectedMilestone(null)}
          >
            <div
              className={`journey-modal-dialog ${
                selectedMilestone.isFeatured ? 'modal-featured' : ''
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="journey-modal-close"
                onClick={() => setSelectedMilestone(null)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="journey-modal-img">
                <img src={selectedMilestone.image} alt={selectedMilestone.title} />
                <span className="modal-badge-year">
                  {selectedMilestone.year} • {selectedMilestone.stage}
                </span>
              </div>

              <div className="journey-modal-body">
                <h3>{selectedMilestone.title}</h3>
                <h4>{selectedMilestone.subtitle}</h4>
                <p className="modal-desc">{selectedMilestone.description}</p>
                <div className="modal-details-box">
                  <h5>Academic Milestone Overview:</h5>
                  <p>{selectedMilestone.details}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
