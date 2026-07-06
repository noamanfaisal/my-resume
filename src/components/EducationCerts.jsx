import React from 'react';

export default function EducationCerts({ education, certificates }) {
  const hasEdu = education && education.length > 0;
  const hasCerts = certificates && certificates.length > 0;

  return (
    <section className="container">
      <div className="section-eyebrow">Background</div>
      <h2 className="section-title">Education &amp; Certifications</h2>
      <div className="background-grid">
        <div>
          <div className="background-subhead">Education</div>
          {hasEdu ? (
            education.map((e, i) => (
              <div className="background-entry" key={i}>
                <div className="background-entry-title">{e['Institution']}</div>
                <div className="background-entry-sub">
                  {e['Degree / Program']}
                  {e['Field of Study'] ? ` — ${e['Field of Study']}` : ''}
                </div>
                <div className="background-entry-meta mono">
                  {e['Start Year']}
                  {e['End Year'] ? ` – ${e['End Year']}` : ''}
                </div>
                {e['Notes / GPA / Honors'] && (
                  <div className="background-entry-note">{e['Notes / GPA / Honors']}</div>
                )}
              </div>
            ))
          ) : (
            <p className="empty-note">Add entries to resume-data/education.md.</p>
          )}
        </div>
        <div>
          <div className="background-subhead">Certifications</div>
          {hasCerts ? (
            certificates.map((c, i) => (
              <div className="background-entry" key={i}>
                <div className="background-entry-title">
                  {c['Credential Link'] ? (
                    <a href={c['Credential Link'].startsWith('http') ? c['Credential Link'] : `https://${c['Credential Link']}`} target="_blank" rel="noreferrer">
                      {c['Certificate Name']}
                    </a>
                  ) : (
                    c['Certificate Name']
                  )}
                </div>
                <div className="background-entry-sub">{c['Issuing Organization']}</div>
                <div className="background-entry-meta mono">{c['Date Earned']}</div>
              </div>
            ))
          ) : (
            <p className="empty-note">Add entries to resume-data/certificates.md.</p>
          )}
        </div>
      </div>
    </section>
  );
}
