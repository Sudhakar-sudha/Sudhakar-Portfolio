import React from 'react';

export const Education = () => {
  return (
    <div>
      <div className="education">
        {/* Section Heading */}
        <h1 className="headingeducation glow-effect">Education</h1>

        {/* Timeline Items */}
        <div className="timeline-items">
          {/* Secondary School */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2020</div>
            <div className="timeline-content">
              <h2>Secondary School</h2>
              <p>
                Successfully completed secondary education, laying a strong
                foundation for future academic pursuits.
              </p>
            </div>
          </div>

          {/* Higher Secondary School */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022</div>
            <div className="timeline-content">
              <h2>Higher Secondary School</h2>
              <p>
                Achieved higher secondary school education with a focus on
                science and mathematics.
              </p>
            </div>
          </div>

          {/* Internship */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h2>Internship</h2>
              <p>
                Gained hands-on experience in software development during an
                industry internship program.
              </p>
            </div>
          </div>

          {/* College */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2025</div>
            <div className="timeline-content">
              <h2>College</h2>
              <p>
                Pursuing a Bachelor’s degree in Computer Science, specializing in
                software engineering and development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
