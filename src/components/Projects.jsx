import React, { useMemo, useState } from 'react';

export default function Projects({ projects }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const set = new Set();
    (projects || []).forEach((p) => {
      // Use the first slash-separated segment as a broad category for filtering
      const primary = (p.category || 'Other').split('/')[0].trim();
      if (primary) set.add(primary);
    });
    return ['All', ...Array.from(set).sort()];
  }, [projects]);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return (projects || []).filter((p) =>
      (p.category || '').split('/')[0].trim() === activeCategory
    );
  }, [projects, activeCategory]);

  if (!projects || projects.length === 0) {
    return (
      <section className="container">
        <div className="section-eyebrow">Selected Work</div>
        <h2 className="section-title">Projects</h2>
        <p className="empty-note">No projects found yet — add them to resume-data/projects.md.</p>
      </section>
    );
  }

  return (
    <section className="container">
      <div className="section-eyebrow">Selected Work</div>
      <h2 className="section-title">Projects ({projects.length})</h2>

      <div className="projects-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((p, i) => (
          <article className="card project-card" key={i}>
            <div className="project-card-top">
              <div>
                <div className="project-title">{p.title}</div>
                {p.role && <div className="project-role">{p.role}</div>}
              </div>
              {p.dates && <span className="project-dates mono">{p.dates}</span>}
            </div>

            {p.affiliation && <span className="tag affiliation-tag">{p.affiliation}</span>}

            {p.problem && <p className="project-problem">{p.problem}</p>}

            {p.techStack && p.techStack.length > 0 && (
              <div className="tag-row">
                {p.techStack.slice(0, 8).map((t, j) => (
                  <span className="tag" key={j}>
                    {t}
                  </span>
                ))}
              </div>
            )}

            {p.outcome && <div className="project-outcome">→ {p.outcome}</div>}
            {p.client && <div className="project-client">{p.client}</div>}
          </article>
        ))}
      </div>
    </section>
  );
}
