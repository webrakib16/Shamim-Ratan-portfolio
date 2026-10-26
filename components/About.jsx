import Image from 'next/image';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Side: Profile Image */}
        <div className="about-image">
          <div className="image-card">
            <img
              src="/assets/profile (1).png"
              alt="Professor MD. Shamim Raton"
            />
          </div>
        </div>

        {/* Right Side: Details & Highlights */}
        <div className="about-content">
          <span className="section-tag">ABOUT ME</span>
          <h2>MD. Shamim Raton</h2>
          <h4>
            Lecturer, Department of Chemistry <br />
            Rajshahi College
          </h4>
          <p>
            I am passionate about helping students understand Chemistry through
            conceptual learning, practical demonstrations, and critical
            thinking. My mission is to inspire future scientists while making
            Chemistry simple, engaging, and meaningful.
          </p>

          <div className="info-grid">
            <div className="info-card">
              <span>🎓</span>
              <div>
                <h5>Education</h5>
                <p>36th BCS Education Cadre</p>
              </div>
            </div>

            <div className="info-card">
              <span>🧪</span>
              <div>
                <h5>Specialization</h5>
                <p>Organic Chemistry</p>
              </div>
            </div>

            <div className="info-card">
              <span>🏫</span>
              <div>
                <h5>Institution</h5>
                <p>Rajshahi College</p>
              </div>
            </div>

            <div className="info-card">
              <span>📚</span>
              <div>
                <h5>Experience</h5>
                <p>4+ Years Teaching</p>
              </div>
            </div>
          </div>

          <a
            href="/assets/PDS_18136141064_মোঃ শামীম রতন.pdf"
            download="Shamim_Ratan_CV.pdf"
            className="download-btn"
          >
            <i className="fa-solid fa-file-arrow-down"></i> Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
