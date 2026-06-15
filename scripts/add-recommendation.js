#!/usr/bin/env node
// Appends one recommendation entry to js/data.js.
// Called by the GitHub Actions workflow; reads fields from env vars.

const fs   = require('fs');
const path = require('path');

const name        = (process.env.REC_NAME        || '').trim();
const designation = (process.env.REC_DESIGNATION || '').trim();
const linkedin    = (process.env.REC_LINKEDIN    || '').trim();
const text        = (process.env.REC_TEXT        || '').trim();
const date        = (process.env.REC_DATE        || '').trim();

if (!name || !text) {
  console.error('Missing required fields (name, text). Aborting.');
  process.exit(1);
}

const dataPath = path.join(__dirname, '..', 'js', 'data.js');
const content  = fs.readFileSync(dataPath, 'utf8');

// Locate the recommendations array using bracket counting
// (handles block comments inside the array safely)
const marker      = 'recommendations: [';
const markerStart = content.indexOf(marker);
if (markerStart === -1) {
  console.error('Cannot find "recommendations: [" in data.js'); process.exit(1);
}

const openPos = content.indexOf('[', markerStart);
let depth = 0, closePos = -1;

for (let i = openPos; i < content.length; i++) {
  const ch = content[i];

  // Skip block comments
  if (ch === '/' && content[i + 1] === '*') {
    const end = content.indexOf('*/', i + 2);
    if (end === -1) break;
    i = end + 1;
    continue;
  }
  // Skip line comments
  if (ch === '/' && content[i + 1] === '/') {
    const end = content.indexOf('\n', i + 2);
    if (end === -1) break;
    i = end;
    continue;
  }

  if (ch === '[') depth++;
  else if (ch === ']') { depth--; if (depth === 0) { closePos = i; break; } }
}

if (closePos === -1) {
  console.error('Cannot locate closing ] of recommendations array'); process.exit(1);
}

// Check whether there are already real entries (ignoring comments)
const inner      = content.slice(openPos + 1, closePos);
const stripped   = inner.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '').trim();
const hasEntries = stripped.length > 0;

const entry = `    {
      name:        ${JSON.stringify(name)},
      designation: ${JSON.stringify(designation)},
      linkedin:    ${JSON.stringify(linkedin)},
      text:        ${JSON.stringify(text)},
      date:        ${JSON.stringify(date)}
    }`;

const separator  = hasEntries ? ',\n' : '\n';
const newContent = content.slice(0, closePos) + separator + entry + '\n  ' + content.slice(closePos);

fs.writeFileSync(dataPath, newContent, 'utf8');
console.log(`Added recommendation from "${name}".`);
