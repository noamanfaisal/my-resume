import React, { useMemo } from 'react';

// Surfaces open-source / founder-led projects near the top of the page.
// Detection: title mentions "Open Source", client/link mentions GitHub,
// or the project is explicitly self-founded (role includes "Founder"/"CTO").
function isFeatured(p) {
  const t = (p.title || '').toLowerCase();
  const c = (p.client || '').toLowerCase();
  const r = (p.role || '').toLowerCase();
  return (
    t.includes('open source') ||
    c.includes('github') ||
    r.includes('founder') ||
    r.includes('cto')
  );
}

export default function FeaturedOSS({ projects }) {
  const featured = useMemo(() => (projects || []).filter(isFeatured), [projects]);

  if (featured.length === 0) return null;

  return (
    <section className="container">
      <div className="section-eyebrow">Building in the open</div>
      <h2 className="section-title">Open Source &amp; Founder Projects</h2>
      <div className="oss-grid">
        {featured.map((p, i) => (
          <div className="card oss-card" key={i}>
            <div className="oss-card-top">
              <span className="oss-badge">{p.role.includes('Founder') ? 'Founder' : 'CTO'}</span>
              <span className="project-dates mono">{p.dates}</span>
            </div>
            <div className="oss-title">{p.title}</div>
            {p.affiliation && <div className="oss-affiliation">{p.affiliation}</div>}
            {p.problem && <p className="oss-desc">{p.problem}</p>}
            {p.techStack && p.techStack.length > 0 && (
              <div className="tag-row">
                {p.techStack.slice(0, 6).map((t, j) => (
                  <span className="tag" key={j}>
                    {t}
                  </span>
                ))}
              </div>
            )}
            {p.client && (
              <div className="oss-link">
                {/(https?:\/\/|\.\w{2,})/.test(p.client) ? (
                  <a
                    href={p.client.startsWith('http') ? p.client : `https://${p.client.split('/').pop().trim()}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.client}
                  </a>
                ) : (
                  p.client
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
