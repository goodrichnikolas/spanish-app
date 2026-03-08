#!/usr/bin/env node
// Tests for the Spanish Flashcard PWA
// Usage: node test.js

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

let passed = 0, failed = 0;

function assert(name, fn) {
  try {
    fn();
    passed++;
    console.log(`  ✓ ${name}`);
  } catch (e) {
    failed++;
    console.log(`  ✗ ${name}`);
    console.log(`    ${e.message}`);
  }
}

function eq(a, b, msg) {
  if (a !== b) throw new Error(msg || `Expected "${b}", got "${a}"`);
}

function ok(val, msg) {
  if (!val) throw new Error(msg || `Expected truthy, got ${val}`);
}

// ─── Load app in jsdom ───
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const dataJs = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8');

// Inject data.js inline since jsdom won't load <script src>
// Change const/let to var so variables are accessible on window
const injectedHtml = html
  .replace('<script src="data.js"></script>', `<script>${dataJs.replace(/^const /, 'var ')}</script>`)
  .replace(/(<script>)\s*const /g, '$1\n    var ')
  .replace(/\n    let /g, '\n    var ');

const dom = new JSDOM(injectedHtml, {
  runScripts: 'dangerously',
  pretendToBeVisual: true,
  url: 'http://localhost/',
  resources: 'usable',
});
const { window } = dom;
const { document } = window;

// Give scripts a moment to run
const CATEGORIES = window.CATEGORIES;

// ─── DATA INTEGRITY ───
console.log('\nData integrity:');

assert('CATEGORIES has 6 categories', () => {
  eq(CATEGORIES.length, 6);
});

assert('Each category has name, icon, and words', () => {
  for (const cat of CATEGORIES) {
    ok(cat.name, `Category missing name`);
    ok(cat.icon, `${cat.name} missing icon`);
    ok(Array.isArray(cat.words), `${cat.name} words is not array`);
  }
});

assert('Each category has 10+ words', () => {
  for (const cat of CATEGORIES) {
    ok(cat.words.length >= 10, `${cat.name} has only ${cat.words.length} words`);
  }
});

assert('Every word has en, es, exEn, exEs', () => {
  for (const cat of CATEGORIES) {
    for (const w of cat.words) {
      ok(w.en, `Word missing en in ${cat.name}`);
      ok(w.es, `Word missing es in ${cat.name}`);
      ok(w.exEn, `"${w.en}" missing exEn`);
      ok(w.exEs, `"${w.en}" missing exEs`);
    }
  }
});

assert('Nouns have gender, non-nouns may have null', () => {
  for (const cat of CATEGORIES) {
    for (const w of cat.words) {
      if (w.gender) {
        ok(['m.', 'f.', 'm./f.'].includes(w.gender), `"${w.en}" has invalid gender "${w.gender}"`);
      }
    }
  }
});

assert('Verbs (en starts with "to ") have conj.tenses', () => {
  for (const cat of CATEGORIES) {
    for (const w of cat.words) {
      if (w.en.startsWith('to ')) {
        ok(w.conj, `Verb "${w.en}" missing conj`);
        ok(w.conj.tenses, `Verb "${w.en}" missing conj.tenses`);
        ok(w.conj.verb, `Verb "${w.en}" missing conj.verb`);
      }
    }
  }
});

assert('Non-verbs do not have conj', () => {
  for (const cat of CATEGORIES) {
    for (const w of cat.words) {
      if (!w.en.startsWith('to ')) {
        ok(!w.conj, `Non-verb "${w.en}" should not have conj`);
      }
    }
  }
});

const EXPECTED_TENSES = ['Presente', 'Pretérito', 'Imperfecto', 'Futuro', 'Condicional', 'Subjuntivo'];

assert('Each verb has all 6 tenses', () => {
  for (const cat of CATEGORIES) {
    for (const w of cat.words) {
      if (!w.conj) continue;
      for (const t of EXPECTED_TENSES) {
        ok(w.conj.tenses[t], `"${w.en}" missing tense: ${t}`);
      }
    }
  }
});

assert('Each tense has exactly 6 forms (yo through ellos)', () => {
  for (const cat of CATEGORIES) {
    for (const w of cat.words) {
      if (!w.conj) continue;
      for (const t of EXPECTED_TENSES) {
        eq(w.conj.tenses[t].length, 6, `"${w.en}" ${t} has ${w.conj.tenses[t].length} forms`);
      }
    }
  }
});

assert('No empty conjugation forms', () => {
  for (const cat of CATEGORIES) {
    for (const w of cat.words) {
      if (!w.conj) continue;
      for (const t of EXPECTED_TENSES) {
        for (let i = 0; i < 6; i++) {
          ok(w.conj.tenses[t][i] && w.conj.tenses[t][i].trim(),
            `"${w.en}" ${t} form ${i} is empty`);
        }
      }
    }
  }
});

assert('Each tense produces distinct forms (not all identical)', () => {
  for (const cat of CATEGORIES) {
    for (const w of cat.words) {
      if (!w.conj) continue;
      const sets = EXPECTED_TENSES.map(t => w.conj.tenses[t].join(','));
      const unique = new Set(sets);
      ok(unique.size === 6, `"${w.en}" has duplicate tense forms (${unique.size}/6 unique)`);
    }
  }
});

// ─── MENU SCREEN DOM ───
console.log('\nMenu screen:');

assert('Menu is visible on load', () => {
  const menu = document.getElementById('menu');
  ok(menu.style.display !== 'none', 'Menu should be visible');
});

assert('Flashcard screen is hidden on load', () => {
  const flash = document.getElementById('flashcard-screen');
  // CSS sets display:none, inline style may be empty
  ok(flash.style.display === 'none' || flash.style.display === '',
    'Flashcard screen should not be explicitly shown');
});

assert('6 category buttons rendered', () => {
  const btns = document.querySelectorAll('.cat-btn');
  eq(btns.length, 6);
});

assert('Each button has icon, name, and count', () => {
  document.querySelectorAll('.cat-btn').forEach((btn, i) => {
    ok(btn.querySelector('.cat-icon').textContent, `Button ${i} missing icon`);
    ok(btn.querySelector('.cat-name').textContent, `Button ${i} missing name`);
    const count = btn.querySelector('.cat-count').textContent;
    ok(count.includes('/'), `Button ${i} count format wrong: "${count}"`);
  });
});

assert('Each button has a progress bar', () => {
  const bars = document.querySelectorAll('.cat-progress');
  eq(bars.length, 6);
});

// ─── FLASHCARD SCREEN ───
console.log('\nFlashcard screen:');

// Simulate clicking first category
document.querySelector('.cat-btn').click();

assert('Clicking category shows flashcard screen', () => {
  eq(document.getElementById('menu').style.display, 'none');
  eq(document.getElementById('flashcard-screen').style.display, 'block');
});

assert('English word displayed on front', () => {
  const word = document.getElementById('en-word').textContent;
  ok(word.length > 0, 'English word is empty');
});

assert('Counter shows "1 / N"', () => {
  const counter = document.getElementById('counter').textContent;
  ok(counter.startsWith('1 / '), `Counter is "${counter}"`);
});

assert('Prev disabled on first card', () => {
  ok(document.getElementById('prev-btn').disabled);
});

assert('Next NOT disabled on first card (category has > 1 word)', () => {
  ok(!document.getElementById('next-btn').disabled);
});

// ─── CARD FLIP ───
console.log('\nCard flip:');

assert('Card starts unflipped', () => {
  ok(!document.getElementById('card').classList.contains('flipped'));
});

assert('Clicking card adds .flipped', () => {
  document.getElementById('card').click();
  ok(document.getElementById('card').classList.contains('flipped'));
});

assert('Spanish word visible on back', () => {
  ok(document.getElementById('es-word').textContent.length > 0);
});

assert('Example sentences populated', () => {
  ok(document.getElementById('ex-es').textContent.length > 0);
  ok(document.getElementById('ex-en').textContent.length > 0);
});

assert('Clicking again removes .flipped', () => {
  document.getElementById('card').click();
  ok(!document.getElementById('card').classList.contains('flipped'));
});

// ─── CONJUGATION TABLE ───
console.log('\nConjugation table:');

// First word in Emotions is "to be fed up" (a verb)
assert('Verb card: conj-section is visible', () => {
  // First word in Emotions is "to be fed up" (a verb) — we should be on it
  const word = document.getElementById('en-word').textContent;
  ok(word.startsWith('to '), `Current word "${word}" is not a verb`);
  const display = document.getElementById('conj-section').style.display;
  ok(display !== 'none', `conj-section display is "${display}"`);
});

assert('6 tense tabs rendered', () => {
  eq(document.querySelectorAll('.conj-tab').length, 6);
});

assert('Tab labels match expected tenses', () => {
  const tabs = [...document.querySelectorAll('.conj-tab')].map(t => t.textContent);
  eq(JSON.stringify(tabs), JSON.stringify(EXPECTED_TENSES));
});

assert('Presente tab is active by default', () => {
  const active = document.querySelector('.conj-tab.active');
  eq(active.textContent, 'Presente');
});

assert('Table has 6 rows with pronouns', () => {
  const rows = document.querySelectorAll('#conj-body tr');
  eq(rows.length, 6);
  const pronouns = [...rows].map(r => r.querySelector('td').textContent);
  eq(pronouns[0], 'yo');
  eq(pronouns[1], 'tú');
  eq(pronouns[5], 'ellos');
});

assert('Table shows conjugated forms', () => {
  const forms = [...document.querySelectorAll('#conj-body tr')].map(
    r => r.querySelectorAll('td')[1].textContent
  );
  ok(forms.every(f => f.length > 0), 'All forms should be non-empty');
});

assert('Clicking Pretérito tab changes active tab and table content', () => {
  const presenteForms = [...document.querySelectorAll('#conj-body tr')].map(
    r => r.querySelectorAll('td')[1].textContent
  );
  // Click second tab
  document.querySelectorAll('.conj-tab')[1].click();
  eq(document.querySelector('.conj-tab.active').textContent, 'Pretérito');
  const preteritoForms = [...document.querySelectorAll('#conj-body tr')].map(
    r => r.querySelectorAll('td')[1].textContent
  );
  ok(JSON.stringify(presenteForms) !== JSON.stringify(preteritoForms),
    'Forms should differ between tenses');
});

assert('Clicking each tab switches forms', () => {
  const allSets = [];
  document.querySelectorAll('.conj-tab').forEach(tab => {
    tab.click();
    const forms = [...document.querySelectorAll('#conj-body tr')].map(
      r => r.querySelectorAll('td')[1].textContent
    ).join(',');
    allSets.push(forms);
  });
  const unique = new Set(allSets);
  eq(unique.size, 6, `Expected 6 unique form sets, got ${unique.size}`);
});

// Navigate to a non-verb
assert('Non-verb card hides conjugation section', () => {
  const w = window.currentWords;
  let found = false;
  for (let i = 0; i < w.length; i++) {
    if (!w[i].en.startsWith('to ')) {
      window.currentIndex = i;
      window.showCard();
      found = true;
      break;
    }
  }
  ok(found, 'No non-verb found in category');
  eq(document.getElementById('conj-section').style.display, 'none');
});

assert('card-area loses .tall class for non-verb', () => {
  ok(!document.getElementById('card-area').classList.contains('tall'));
});

// ─── NAVIGATION ───
console.log('\nNavigation:');

assert('Navigate to card 2 changes word and counter', () => {
  window.currentIndex = 0;
  window.showCard();
  const word1 = document.getElementById('en-word').textContent;
  window.currentIndex = 1;
  window.showCard();
  const word2 = document.getElementById('en-word').textContent;
  ok(word1 !== word2, `Words should differ: "${word1}" vs "${word2}"`);
  const counter = document.getElementById('counter').textContent;
  ok(counter.startsWith('2 / '), `Counter is "${counter}"`);
});

assert('Navigate back to card 1', () => {
  window.currentIndex = 0;
  window.showCard();
  const counter = document.getElementById('counter').textContent;
  ok(counter.startsWith('1 / '), `Counter is "${counter}"`);
});

assert('Counter updates to card 5', () => {
  window.currentIndex = 4;
  window.showCard();
  const counter = document.getElementById('counter').textContent;
  ok(counter.startsWith('5 / '), `Counter is "${counter}"`);
});

assert('Last card disables next button', () => {
  window.currentIndex = window.currentWords.length - 1;
  window.showCard();
  ok(document.getElementById('next-btn').disabled);
  ok(!document.getElementById('prev-btn').disabled);
});

assert('showCard unflips the card', () => {
  document.getElementById('card').classList.add('flipped');
  window.showCard();
  ok(!document.getElementById('card').classList.contains('flipped'));
});

// ─── CONFIDENCE METER ───
console.log('\nConfidence meter:');

// Clear localStorage
window.localStorage.clear();
window.currentIndex = 0;
window.showCard();

assert('Starts at level 0 with no active dots', () => {
  eq(document.querySelectorAll('.conf-dot.active').length, 0);
});

assert('Label says "Rate your confidence" at level 0', () => {
  ok(document.getElementById('conf-label').textContent.includes('Rate'));
});

assert('Plus increases to level 1', () => {
  document.getElementById('conf-plus').click();
  eq(document.querySelectorAll('.conf-dot.active').length, 1);
});

assert('Minus decreases back to 0', () => {
  document.getElementById('conf-minus').click();
  eq(document.querySelectorAll('.conf-dot.active').length, 0);
});

assert('5 presses fills all dots', () => {
  for (let i = 0; i < 5; i++) document.getElementById('conf-plus').click();
  eq(document.querySelectorAll('.conf-dot.active').length, 5);
  const label = document.getElementById('conf-label').textContent;
  ok(label.includes('5'), `Label should say 5/5, got "${label}"`);
});

assert('6th press marks as learned', () => {
  document.getElementById('conf-plus').click();
  const label = document.getElementById('conf-label').textContent;
  ok(label.includes('Learned'), `Label should say Learned, got "${label}"`);
});

assert('Level stored in localStorage', () => {
  eq(window.localStorage.getItem('sp_0_0'), '6');
});

assert('Front badge shows learned', () => {
  eq(document.getElementById('level-badge').textContent, '✓ learned');
});

assert('Minus from learned goes to level 5', () => {
  document.getElementById('conf-minus').click();
  eq(document.querySelectorAll('.conf-dot.active').length, 5);
  const label = document.getElementById('conf-label').textContent;
  ok(!label.includes('Learned'));
});

assert('Level badge shows colored dot at level > 0', () => {
  eq(document.getElementById('level-badge').textContent, '●');
});

assert('Level 0 clears badge', () => {
  for (let i = 0; i < 5; i++) document.getElementById('conf-minus').click();
  eq(document.getElementById('level-badge').textContent, '');
});

assert('Cannot go below 0', () => {
  document.getElementById('conf-minus').click();
  eq(document.querySelectorAll('.conf-dot.active').length, 0);
  eq(window.localStorage.getItem('sp_0_0'), null);
});

assert('Cannot go above learned (level 6)', () => {
  for (let i = 0; i < 7; i++) document.getElementById('conf-plus').click();
  eq(window.localStorage.getItem('sp_0_0'), '6');
  // One more should not go to 7
  document.getElementById('conf-plus').click();
  eq(window.localStorage.getItem('sp_0_0'), '6');
});

// ─── BACK BUTTON ───
console.log('\nBack button:');

assert('Back returns to menu', () => {
  document.getElementById('back-btn').click();
  ok(document.getElementById('menu').style.display !== 'none');
  eq(document.getElementById('flashcard-screen').style.display, 'none');
});

assert('Grid re-renders on back (progress updated)', () => {
  const btns = document.querySelectorAll('.cat-btn');
  eq(btns.length, 6);
  // First category should show updated count
  const count = btns[0].querySelector('.cat-count').textContent;
  ok(count.includes('/'), `Count format: "${count}"`);
});

// ─── CLEANUP & REPORT ───
window.localStorage.clear();
dom.window.close();

console.log(`\n${passed + failed} tests: ${passed} passed, ${failed} failed\n`);
process.exit(failed > 0 ? 1 : 0);
