import { useEffect, useMemo, useState } from 'react';
import { VOCAB } from '../data/vocab.js';
import { sectorById } from '../data/sectors.js';
import { setCardKnown, shuffle, speakJa } from '../store.js';
import SectorPicker from '../components/SectorPicker.jsx';

export default function Flashcards({ lang, t, sector }) {
  const pool = useMemo(() => VOCAB.filter((v) => sector === 'all' || v.sector === sector), [sector]);
  const [deck, setDeck] = useState(() => shuffle(pool));
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [tally, setTally] = useState({ known: 0, unknown: 0 });
  const meaningLang = lang === 'ja' ? 'en' : lang;

  const restart = () => {
    setDeck(shuffle(pool));
    setIdx(0);
    setFlipped(false);
    setTally({ known: 0, unknown: 0 });
  };

  const answer = (known) => {
    setCardKnown(deck[idx].id, known);
    setTally((s) => ({ ...s, [known ? 'known' : 'unknown']: s[known ? 'known' : 'unknown'] + 1 }));
    setFlipped(false);
    setIdx((i) => i + 1); // key={card.id} tufayli yangi kartochka animatsiyasiz old tomoni bilan chiqadi
  };

  // Klaviatura: Space — aylantirish, ← bilmayman, → bilaman
  useEffect(() => {
    const onKey = (e) => {
      if (idx >= deck.length) return;
      if (e.code === 'Space') { e.preventDefault(); setFlipped((f) => !f); }
      if (e.key === 'ArrowRight') answer(true);
      if (e.key === 'ArrowLeft') answer(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (idx >= deck.length) {
    return (
      <>
        <SectorPicker page="cards" sector={sector} lang={lang} t={t} />
        <section className="panel result">
          <h2>🎉 {t.cardsDone}</h2>
          <div className="tally">
            <div className="tally-ok"><b>{tally.known}</b><span>{t.known}</span></div>
            <div className="tally-ng"><b>{tally.unknown}</b><span>{t.unknown}</span></div>
          </div>
          <button className="btn primary" onClick={restart}>🔄 {t.restart}</button>
        </section>
      </>
    );
  }

  const card = deck[idx];
  const s = sectorById(card.sector);

  return (
    <>
      <SectorPicker page="cards" sector={sector} lang={lang} t={t} />
      <div className="cards-head">
        <span className="muted">{idx + 1} / {deck.length}</span>
        <button className="btn ghost sm" onClick={restart}>🔀 {t.shuffle}</button>
      </div>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${(idx / deck.length) * 100}%` }} />
      </div>

      <div className="flash-scene" onClick={() => setFlipped((f) => !f)}>
        <div key={card.id} className={`flash-card ${flipped ? 'is-flipped' : ''}`} style={{ '--c': s.color }}>
          <div className="flash-face flash-front">
            <span className="pill sm" style={{ '--c': s.color }}>{s.icon} {s.name[lang]}</span>
            <div className="flash-word" lang="ja">{card.word}</div>
            <div className="flash-hint">{t.flip} ↻</div>
          </div>
          <div className="flash-face flash-back">
            <div className="flash-reading" lang="ja">{card.reading}</div>
            <div className="flash-meaning">{card.m[meaningLang]}</div>
            {meaningLang !== 'en' && <div className="flash-en">{card.m.en}</div>}
            <button
              className="icon-btn big"
              onClick={(e) => { e.stopPropagation(); speakJa(card.word); }}
            >🔊</button>
          </div>
        </div>
      </div>

      <div className="flash-actions">
        <button className="btn ng lg" onClick={() => answer(false)}>✗ {t.dontKnow}</button>
        <button className="btn ok lg" onClick={() => answer(true)}>✓ {t.know}</button>
      </div>
      <p className="note center">Space ↻ · ← {t.dontKnow} · → {t.know}</p>
    </>
  );
}
