import Link from 'next/link';

export default function Research() {
  const researchCards = [
    {
      icon: 'fa-solid fa-flask',
      title: 'Chemistry Education',
      desc: 'Passionate about making Chemistry easy, conceptually sound, and enjoyable for students of all levels.',
    },
    {
      icon: 'fa-solid fa-microscope',
      title: 'Laboratory Learning',
      desc: 'Hands-on organic & inorganic experiments that bridge the gap between classroom theory and real-world science.',
    },
    {
      icon: 'fa-solid fa-book-open',
      title: 'Concept Building',
      desc: 'Developing innovative frameworks and problem-solving techniques to master fundamental molecular concepts.',
    },
    {
      icon: 'fa-solid fa-users',
      title: 'Student Mentoring',
      desc: 'Guiding aspiring science scholars toward national competitions, higher research, and civil services.',
    },
  ];

  return (
    <div className="research-page">
      {/* Hero Section */}
      <section className="research-hero">
        <div className="research-hero-left">
          <h1>
            Research &amp; <br />
            <span>Academic Interests</span>
          </h1>
          <div className="line"></div>
          <p>
            Exploring chemistry through pedagogy, experimental knowledge,
            innovation, and lifelong scientific inquiry. Dedicated to mentoring
            and inspiring tomorrow’s scientists.
          </p>
        </div>

        <div className="research-hero-right">
          <img
            src="/assets/research bg.jpg"
            alt="Chemistry Research"
            style={{
              maxWidth: '500px',
              width: '100%',
              borderRadius: '20px',
              border: '1px solid rgba(0, 217, 255, 0.3)',
              boxShadow: '0 0 35px rgba(0, 217, 255, 0.25)',
            }}
          />
        </div>
      </section>

      {/* Main Pillars */}
      <section className="research-section-title">
        <span>CORE PILLARS</span>
        <h2>Academic &amp; Pedagogical Focus</h2>
      </section>

      <section className="card-container">
        {researchCards.map((card, idx) => (
          <div className="research-card" key={idx}>
            <i className={card.icon}></i>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </section>

      {/* Philosophy Note */}
      <div className="research-note">
        <h3>
          <i className="fa-solid fa-lightbulb"></i> Teaching &amp; Research Philosophy
        </h3>
        <p>
          "Chemistry is not just formulas and reactions on paper; it is the
          fundamental language of nature and matter. By grounding complex
          theoretical ideas in vivid laboratory demonstrations and interactive
          dialogue, we ignite genuine curiosity and critical thinking in every
          student."
        </p>
      </div>
    </div>
  );
}
