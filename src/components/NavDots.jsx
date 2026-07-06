import React, { useEffect, useState } from 'react';

export default function NavDots({ sections }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="nav-dots" aria-label="Section navigation">
      {sections.map((s) => (
        <button
          key={s.id}
          className="nav-dot-btn"
          onClick={() =>
            document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <span
            className="dot"
            style={
              active === s.id
                ? { background: 'var(--accent)', borderColor: 'var(--accent)' }
                : undefined
            }
          />
          <span className="nav-dot-label">{s.label}</span>
        </button>
      ))}
    </nav>
  );
}
