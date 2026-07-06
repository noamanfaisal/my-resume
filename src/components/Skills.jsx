import React from 'react';

export default function Skills({ skills }) {
  if (!skills || skills.length === 0) {
    return (
      <section className="container">
        <div className="section-eyebrow">Toolbox</div>
        <h2 className="section-title">Skills</h2>
        <p className="empty-note">No skills added yet — fill in resume-data/skills.md.</p>
      </section>
    );
  }

  return (
    <section className="container">
      <div className="section-eyebrow">Toolbox</div>
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div className="card" key={i}>
            <div className="skill-category-label">{s.category}</div>
            <div className="tag-row">
              {s.items.map((item, j) => (
                <span className="tag" key={j}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
