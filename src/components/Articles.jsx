import React from 'react';

export default function Articles({ articles }) {
  if (!articles || articles.length === 0) {
    return (
      <section className="container">
        <div className="section-eyebrow">Writing</div>
        <h2 className="section-title">Articles &amp; Publications</h2>
        <p className="empty-note">No articles added yet — fill in resume-data/articles.md.</p>
      </section>
    );
  }

  return (
    <section className="container">
      <div className="section-eyebrow">Writing</div>
      <h2 className="section-title">Articles &amp; Publications</h2>
      <div className="articles-list">
        {articles.map((a, i) => (
          <a
            className="article-row"
            href={a['Link'] && a['Link'].startsWith('http') ? a['Link'] : `https://${a['Link']}`}
            target="_blank"
            rel="noreferrer"
            key={i}
          >
            <div>
              <div className="article-title">{a['Title']}</div>
              {a['Short Description'] && (
                <div className="background-entry-sub">{a['Short Description']}</div>
              )}
            </div>
            <div className="article-meta">
              {a['Publisher / Platform']}
              {a['Date'] ? ` · ${a['Date']}` : ''}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
