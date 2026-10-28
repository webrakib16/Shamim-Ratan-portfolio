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
              <span>ðŸŽ“</span>
              <div>
                <span class="card-label-heading">Education</span>
                <p>36th BCS Education Cadre</p>
              </div>
            </div>

            <div className="info-card">
              <span>ðŸ§ª</span>
              <div>
                <span class="card-label-heading">Specialization</span>
                <p>Organic Chemistry</p>
              </div>
            </div>

            <div className="info-card">
              <span>ðŸ«</span>
              <div>
                <span class="card-label-heading">Institution</span>
                <p>Rajshahi College</p>
              </div>
            </div>

            <div className="info-card">
              <span>ðŸ“š</span>
              <div>
                <span class="card-label-heading">Experience</span>
                <p>4+ Years Teaching</p>
              </div>
            </div>
          </div>

          <a
            href="/assets/PDS_18136141064_à¦®à§‹à¦ƒ à¦¶à¦¾à¦®à§€à¦® à¦°à¦¤à¦¨.pdf"
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
