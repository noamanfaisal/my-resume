import React, { useState } from 'react';

export default function Hero({ personal }) {
  const name = personal?.['Full Name'] || 'Your Name';
  const roles = personal?.['Target Job Titles'] || 'Software Architect · Data Engineer · AI Developer';
  const summary = personal?.['Professional Summary (3-4 lines)'] || '';
  const years = personal?.['Years of Experience'] || '';
  const location = personal?.['City / Province'] || '';
  const email = personal?.['Email'] || '';

  // Photo lives in /public/images/my-image.png — Vite serves anything in
  // /public from the site root, so no import is needed. If the file isn't
  // there, the <img> just fails to load and we hide it instead of showing
  // a broken icon.
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <header className="hero container">
      <div className="hero-top">
        <div className="hero-text">
          <div className="hero-kicker">// systems architecture &amp; ai engineering</div>
          <h1 className="hero-name">
            {name.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="accent">{name.split(' ').slice(-1)}</span>
          </h1>
          <div className="hero-roles">{roles}</div>
        </div>
        {!photoFailed && (
          <img
            className="hero-photo"
            src="/images/my-image.png"
            alt={name}
            onError={() => setPhotoFailed(true)}
          />
        )}
      </div>
      {summary && <p className="hero-summary">{summary}</p>}
      <div className="hero-meta">
        {years && (
          <span>
            <i className="dot" /> {years} years experience
          </span>
        )}
        {location && (
          <span>
            <i className="dot" /> {location}
          </span>
        )}
        {email && (
          <span>
            <i className="dot" /> <a href={`mailto:${email}`}>{email}</a>
          </span>
        )}
      </div>
    </header>
  );
}
