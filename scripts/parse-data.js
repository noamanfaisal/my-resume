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

  console.log(
    `[parse-data] Wrote ${OUT_FILE}\n` +
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
