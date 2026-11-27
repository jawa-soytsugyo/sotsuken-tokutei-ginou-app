import { useMemo, useState } from 'react';
import { VOCAB } from '../data/vocab.js';
import { sectorById } from '../data/sectors.js';
import { getKnownCards, speakJa } from '../store.js';
import SectorPicker from '../components/SectorPicker.jsx';

export default function Vocab({ lang, t, sector }) {
  const [query, setQuery] = useState('');
  const known = getKnownCards();
  const meaningLang = lang === 'ja' ? 'en' : lang;

  const list = useMemo(() => {
    const qq = query.trim().toLowerCase();
    return VOCAB.filter((v) => sector === 'all' || v.sector === sector).filter(
      (v) =>
        !qq ||
        v.word.includes(qq) ||
        v.reading.includes(qq) ||
        Object.values(v.m).some((m) => m.toLowerCase().includes(qq)),
    );
  }, [sector, query]);

  return (
    <>
      <SectorPicker page="vocab" sector={sector} lang={lang} t={t} />
      <div className="toolbar">
        <input className="search" placeholder={`🔍 ${t.search}`} value={query} onChange={(e) => setQuery(e.target.value)} />
        <span className="muted">
          {list.length} {t.words}
        </span>
      </div>
      <div className="vocab-grid">
        {list.map((v) => {
          const s = sectorById(v.sector);
          return (
            <article key={v.id} className="vocab-card" style={{ '--c': s.color }}>
              <div className="vocab-top">
                <div>
                  <div className="vocab-word" lang="ja">{v.word}</div>
                  <div className="vocab-reading" lang="ja">{v.reading}</div>
                </div>
                <button className="icon-btn" title="🔊" onClick={() => speakJa(v.word)}>🔊</button>
              </div>
              <div className="vocab-meaning">{v.m[meaningLang]}</div>
              <div className="vocab-foot">
                <span className="pill sm" style={{ '--c': s.color }}>{s.icon} {s.name[lang]}</span>
                {known[v.id] && <span className="known-tag">✓ {t.known}</span>}
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
