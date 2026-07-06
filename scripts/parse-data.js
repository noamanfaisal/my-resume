// scripts/parse-data.js
// Reads resume-data/*.md and produces src/data/data.json
// Run automatically before dev/build (see package.json), or manually:
//   node scripts/parse-data.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'resume-data');
const OUT_FILE = path.join(ROOT, 'src', 'data', 'data.json');
const CV_OUT_FILE = path.join(ROOT, 'public', 'cv.md');

function readFile(name) {
  const p = path.join(DATA_DIR, name);
  if (!fs.existsSync(p)) {
    console.warn(`[parse-data] Missing ${name}, skipping.`);
    return '';
  }
  return fs.readFileSync(p, 'utf-8');
}

// Strip TODO/placeholder markers and blockquote notes for clean display,
// but keep raw value available too.
function cleanValue(v) {
  if (!v) return '';
  return v
    .replace(/_\(TODO.*?\)_/gi, '')
    .replace(/\(TODO.*?\)/gi, '')
    .trim();
}

function isPlaceholder(v) {
  if (!v) return true;
  const t = v.trim();
  return t === '' || /^_?\(TODO/i.test(t) || t === '_(TODO)_';
}

// ---------- Markdown table parser ----------
// Parses a GFM-style table into an array of row objects keyed by header.
function parseTables(markdown) {
  const lines = markdown.split('\n');
  const tables = [];
  let current = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*\|.*\|\s*$/.test(line)) {
      if (!current) {
        current = { header: [], rows: [] };
      }
      const cells = line
        .trim()
        .replace(/^\|/, '')
        .replace(/\|$/, '')
        .split('|')
        .map((c) => c.trim());

      // Skip separator rows like |---|---|
      if (cells.every((c) => /^:?-{2,}:?$/.test(c))) continue;

      if (current.header.length === 0) {
        current.header = cells;
      } else {
        current.rows.push(cells);
      }
    } else {
      if (current && current.header.length) {
        tables.push(current);
      }
      current = null;
    }
  }
  if (current && current.header.length) tables.push(current);

  return tables.map((t) =>
    t.rows.map((row) => {
      const obj = {};
      t.header.forEach((h, idx) => {
        obj[h] = cleanValue(row[idx] || '');
      });
      return obj;
    })
  );
}

// ---------- Field-block parser (### heading + * Field: value bullets) ----------
// Used for Projects and Experience files.
function parseFieldBlocks(markdown) {
  const blocks = [];
  const lines = markdown.split('\n');
  let current = null;
  let currentListField = null;

  const fieldLineRe = /^\s*[*-]\s+\*{0,2}([A-Za-z][A-Za-z0-9 /&–-]*?)\*{0,2}\s*:\s*(.*)$/;
  const subBulletRe = /^\s{2,}[*-]\s+(.*)$/;
  const topBulletNoColonRe = /^\s*[*-]\s+(.*)$/;

  function pushCurrent() {
    if (current) blocks.push(current);
  }

  for (const rawLine of lines) {
    const line = rawLine.replace(/\r$/, '');

    // New block starts at ### Heading (but not #### or deeper)
    const headingMatch = /^###\s+(.+?)\s*$/.exec(line);
    if (headingMatch) {
      pushCurrent();
      current = { title: headingMatch[1].trim(), fields: {} };
      currentListField = null;
      continue;
    }

    if (!current) continue;

    // Blockquote notes (> ...) — ignore for data, they're editorial notes
    if (/^\s*>/.test(line)) continue;

    // Sub-bullet under a list field (e.g. "What I Did:" or "Key Responsibilities")
    const sub = subBulletRe.exec(rawLine);
    if (sub && currentListField) {
      current.fields[currentListField] = current.fields[currentListField] || [];
      current.fields[currentListField].push(cleanValue(sub[1]));
      continue;
    }

    // Top-level "Field: value" line
    const fieldMatch = fieldLineRe.exec(line);
    if (fieldMatch) {
      const key = fieldMatch[1].trim();
      const value = fieldMatch[2].trim();
      if (value === '') {
        // This is a list field header, e.g. "* What I Did:"
        currentListField = key;
        current.fields[key] = current.fields[key] || [];
      } else {
        currentListField = null;
        current.fields[key] = cleanValue(value);
      }
      continue;
    }

    // Plain bullet with no colon — treat as continuation of current list field
    const plain = topBulletNoColonRe.exec(rawLine);
    if (plain && currentListField) {
      current.fields[currentListField] = current.fields[currentListField] || [];
      current.fields[currentListField].push(cleanValue(plain[1]));
      continue;
    }
  }
  pushCurrent();
  return blocks;
}

function normalizeProject(block) {
  const f = block.fields;
  const priorityRaw = f['Priority'];
  const priority = priorityRaw && !isNaN(parseInt(priorityRaw, 10)) ? parseInt(priorityRaw, 10) : 999;
  return {
    title: block.title,
    category: f['Category'] || '',
    role: f['Role'] || '',
    dates: f['Start – End'] || f['Start - End'] || '',
    problem: f['Problem/Goal'] || '',
    techStack: (f['Tech Stack'] || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean),
    whatIDid: Array.isArray(f['What I Did']) ? f['What I Did'] : [],
    outcome: f['Outcome/Metric'] || '',
    client: f['Client/Link'] || '',
    priority,
    affiliation: f['Affiliation'] || ''
  };
}

function normalizeExperience(block) {
  const f = block.fields;
  return {
    company: block.title,
    title: f['Job Title'] || '',
    location: f['Location'] || '',
    dates: f['Start – End'] || f['Start - End'] || '',
    highlights: Array.isArray(f['Key Responsibilities / Achievements'])
      ? f['Key Responsibilities / Achievements']
      : []
  };
}

// ---------- Full CV markdown generator ----------
// Builds a single clean, downloadable Markdown document from the same
// parsed data used for the site. Written to public/cv.md so Vite serves it
// statically at /cv.md — always in sync since it regenerates on every build.
function generateCvMarkdown(data) {
  const p = data.personal || {};
  const lines = [];

  const name = p['Full Name'] || 'Full Name';
  lines.push(`# ${name}`);
  if (p['Target Job Titles']) lines.push(`_${p['Target Job Titles']}_`);
  lines.push('');

  const contactBits = [p['Email'], p['Phone'], p['City / Province']].filter(Boolean);
  if (contactBits.length) lines.push(contactBits.join(' · '));
  if (data.social && data.social.length) {
    lines.push(data.social.map((s) => `[${s['Platform']}](${s['URL']})`).join(' · '));
  }
  lines.push('');

  if (p['Professional Summary (3-4 lines)']) {
    lines.push('## Summary');
    lines.push('');
    lines.push(p['Professional Summary (3-4 lines)']);
    lines.push('');
  }

  if (data.experience && data.experience.length) {
    lines.push('## Experience');
    lines.push('');
    data.experience.forEach((job) => {
      const titleLine = job.title ? `${job.company} — ${job.title}` : job.company;
      lines.push(`### ${titleLine}`);
      const meta = [job.dates, job.location].filter(Boolean).join(' · ');
      if (meta) lines.push(`_${meta}_`);
      lines.push('');
      (job.highlights || []).forEach((h) => lines.push(`- ${h}`));
      lines.push('');
    });
  }

  if (data.projects && data.projects.length) {
    lines.push('## Selected Projects');
    lines.push('');
    data.projects.forEach((proj) => {
      lines.push(`### ${proj.title}`);
      const meta = [proj.role, proj.dates].filter(Boolean).join(' · ');
      if (meta) lines.push(`_${meta}_`);
      if (proj.affiliation) lines.push(`_(${proj.affiliation})_`);
      lines.push('');
      if (proj.problem) {
        lines.push(proj.problem);
        lines.push('');
      }
      if (proj.techStack && proj.techStack.length) {
        lines.push(`**Tech:** ${proj.techStack.join(', ')}`);
        lines.push('');
      }
      if (proj.outcome) {
        lines.push(`**Outcome:** ${proj.outcome}`);
        lines.push('');
      }
    });
  }

  if (data.skills && data.skills.length) {
    lines.push('## Skills');
    lines.push('');
    data.skills.forEach((s) => {
      lines.push(`- **${s.category}:** ${s.items.join(', ')}`);
    });
    lines.push('');
  }

  if (data.education && data.education.length) {
    lines.push('## Education');
    lines.push('');
    data.education.forEach((e) => {
      const years = [e['Start Year'], e['End Year']].filter(Boolean).join(' – ');
      lines.push(`- **${e['Institution']}** — ${e['Degree / Program']}${e['Field of Study'] ? `, ${e['Field of Study']}` : ''}${years ? ` (${years})` : ''}`);
      if (e['Notes / GPA / Honors']) lines.push(`  ${e['Notes / GPA / Honors']}`);
    });
    lines.push('');
  }

  if (data.certificates && data.certificates.length) {
    lines.push('## Certificates');
    lines.push('');
    data.certificates.forEach((c) => {
      const link = c['Credential Link'] ? ` — [Verify](${c['Credential Link']})` : '';
      lines.push(`- **${c['Certificate Name']}** — ${c['Issuing Organization']}${c['Date Earned'] ? `, ${c['Date Earned']}` : ''}${link}`);
    });
    lines.push('');
  }

  if (data.articles && data.articles.length) {
    lines.push('## Articles & Publications');
    lines.push('');
    data.articles.forEach((a) => {
      lines.push(`- [${a['Title']}](${a['Link']})${a['Publisher / Platform'] ? ` — ${a['Publisher / Platform']}` : ''}`);
    });
    lines.push('');
  }

  lines.push('---');
  lines.push(`_Generated automatically from resume-data/ — last updated ${new Date().toISOString().split('T')[0]}._`);

  return lines.join('\n');
}

// ---------- Build ----------
function build() {
  const personalInfoMd = readFile('personal-info.md');
  const projectsMd = readFile('projects.md');
  const experienceMd = readFile('experience.md');
  const skillsMd = readFile('skills.md');
  const educationMd = readFile('education.md');
  const certificatesMd = readFile('certificates.md');
  const articlesMd = readFile('articles.md');
  const socialMd = readFile('social-links.md');

  // Personal info: first table in the file
  const personalTables = parseTables(personalInfoMd);
  const personalRows = personalTables[0] || [];
  const personal = {};
  personalRows.forEach((row) => {
    const field = row['Field'];
    const value = row['Value'];
    if (field) personal[field] = isPlaceholder(value) ? '' : value;
  });

  const projects = parseFieldBlocks(projectsMd)
    .map(normalizeProject)
    .filter(p => p.title)
    // Stable sort by Priority (lower = shows first); ties keep file order.
    .map((p, idx) => ({ ...p, __idx: idx }))
    .sort((a, b) => (a.priority - b.priority) || (a.__idx - b.__idx))
    .map(({ __idx, ...p }) => p);

  const experience = parseFieldBlocks(experienceMd).map(normalizeExperience).filter(e => e.company);

  const skillsRowsRaw = (parseTables(skillsMd)[0] || []).filter(
    (r) => r['Category'] && !isPlaceholder(r['Skills (comma-separated)'])
  );
  const skillsRows = skillsRowsRaw
    .map((r, idx) => ({ ...r, __idx: idx }))
    .sort((a, b) => {
      const pa = a['Priority'] && !isNaN(parseInt(a['Priority'], 10)) ? parseInt(a['Priority'], 10) : 999;
      const pb = b['Priority'] && !isNaN(parseInt(b['Priority'], 10)) ? parseInt(b['Priority'], 10) : 999;
      return (pa - pb) || (a.__idx - b.__idx);
    });
  const skills = skillsRows.map((r) => ({
    category: r['Category'],
    items: (r['Skills (comma-separated)'] || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean),
    proficiency: r['Proficiency (1-5)'] || ''
  }));

  const educationRows = (parseTables(educationMd)[0] || []).filter(
    (r) => !isPlaceholder(r['Institution'])
  );

  const certificateRows = (parseTables(certificatesMd)[0] || []).filter(
    (r) => !isPlaceholder(r['Certificate Name'])
  );

  const articleRows = (parseTables(articlesMd)[0] || []).filter(
    (r) => !isPlaceholder(r['Title'])
  );

  const socialRows = (parseTables(socialMd)[0] || []).filter(
    (r) => !isPlaceholder(r['URL'])
  );

  const data = {
    generatedAt: new Date().toISOString(),
    personal,
    projects,
    experience,
    skills,
    education: educationRows,
    certificates: certificateRows,
    articles: articleRows,
    social: socialRows
  };

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(data, null, 2), 'utf-8');

  const cvMarkdown = generateCvMarkdown(data);
  fs.mkdirSync(path.dirname(CV_OUT_FILE), { recursive: true });
  fs.writeFileSync(CV_OUT_FILE, cvMarkdown, 'utf-8');

  console.log(
    `[parse-data] Wrote ${OUT_FILE}\n` +
      `[parse-data] Wrote ${CV_OUT_FILE}\n` +
      `  Projects: ${projects.length}\n` +
      `  Experience: ${experience.length}\n` +
      `  Skills categories: ${skills.length}\n` +
      `  Education: ${educationRows.length}\n` +
      `  Certificates: ${certificateRows.length}\n` +
      `  Articles: ${articleRows.length}\n` +
      `  Social links: ${socialRows.length}`
  );
}

build();
