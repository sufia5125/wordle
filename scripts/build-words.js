//take the csv inputs, give json outputs at build time.
const fs = require('fs');

const lines = fs.readFileSync('data/words.csv', 'utf8').split(/\r?\n/);
if (lines[0].trim().toLowerCase() === 'words') lines.shift();   // header

const words = [...new Set(
  lines
    .map((l) => l.trim().replace(/^"|"$/g, '').toLowerCase())
    .filter((w) => /^[a-z]{5}$/.test(w))
)].sort();

// One big string instead of an array literal: Metro/Hermes parse it much faster.
fs.writeFileSync(
  'src/data/validGuesses.ts',
  `export default ${JSON.stringify(words.join(' '))};\n`
);
console.log(`Wrote ${words.length} words`);