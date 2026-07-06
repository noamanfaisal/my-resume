import React from 'react';

export default function Experience({ experience }) {
  if (!experience || experience.length === 0) {
    return (
      <section className="container">
        <div className="section-eyebrow">Career</div>
        <h2 className="section-title">Experience</h2>
        <p className="empty-note">No experience entries found yet — add them to resume-data/experience.md.</p>
      </section>
    );
  }

  return (
    <section className="container">
      <div className="section-eyebrow">Career</div>
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experience.map((job, i) => (
          <div className="experience-row" key={i}>
            <div className="experience-dates mono">{job.dates}</div>
            <div>
              <div className="experience-main-line">
                <span className="experience-company">{job.company}</span>
                {job.title && <span className="experience-title">— {job.title}</span>}
              </div>
              {/* Compact by design: show only the first highlight as a one-line summary. */}
              {job.highlights && job.highlights.length > 0 && (
                <div className="experience-detail">{job.highlights[0]}</div>
              )}
              {job.location && <div className="experience-location">{job.location}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
