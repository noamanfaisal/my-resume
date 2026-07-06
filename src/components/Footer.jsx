import React from 'react';

export default function Footer({ personal, social }) {
  const email = personal?.['Email'];
  const links = (social || []).filter((s) => s['URL']);

  return (
    <footer className="footer container">
      <div className="section-eyebrow">Get in touch</div>
      <h2 className="footer-title">Let's build something.</h2>
      <div className="footer-links">
        {email && <a href={`mailto:${email}`}>{email}</a>}
        {links.map((l, i) => (
          <a
            key={i}
            href={l['URL'].startsWith('http') ? l['URL'] : `https://${l['URL']}`}
            target="_blank"
            rel="noreferrer"
          >
            {l['Platform']}
          </a>
        ))}
      </div>
      <div className="footer-note mono">
        Built with React · Data-driven from a single markdown source · Deployed on Vercel
      </div>
    </footer>
  );
}
