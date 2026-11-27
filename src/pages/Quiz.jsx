import { useMemo, useState } from 'react';
import { QUESTIONS } from '../data/questions.js';
import { CATEGORIES, sectorById } from '../data/sectors.js';
import { go, recordAnswer, shuffle } from '../store.js';
import SectorPicker from '../components/SectorPicker.jsx';

const LETTERS = ['A', 'B', 'C', 'D'];

// Savol + aralashtirilgan javob tartibi
const prepare = (list) =>
  shuffle(list).map((q) => ({ ...q, order: shuffle(q.choices.map((_, i) => i)) }));

export default function Quiz({ lang, t, sector }) {
  const pool = useMemo(
    () => (sector === 'all' ? QUESTIONS : QUESTIONS.filter((q) => q.sector === sector)),
    [sector],
  );
  const [items, setItems] = useState(() => prepare(pool));
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null); // asl indeks
  const [checked, setChecked] = useState(false);
  const [showTr, setShowTr] = useState(lang !== 'ja');
  const [results, setResults] = useState([]); // { id, ok }

  const restart = (list) => {
    setItems(prepare(list));
    setIdx(0);
    setPicked(null);
    setChecked(false);
    setResults([]);
  };

  if (!pool.length) {
    return (
      <>
        <SectorPicker page="quiz" sector={sector} lang={lang} t={t} />
        <p className="empty">—</p>
      </>
    );
  }

  // ── Natija ekrani ──
  if (idx >= items.length) {
    const score = results.filter((r) => r.ok).length;
    const pct = Math.round((score / results.length) * 100);
    const wrongIds = results.filter((r) => !r.ok).map((r) => r.id);
    return (
      <>
        <SectorPicker page="quiz" sector={sector} lang={lang} t={t} />
        <section className="panel result">
          <h2>{t.result}</h2>
          <div className="ring" style={{ '--p': pct }}>
            <span>{pct}%</span>
          </div>
          <p className="result-score">
            {t.score}: <b>{score}</b> / {results.length}
          </p>
          <div className="result-actions">
            <button className="btn primary" onClick={() => restart(pool)}>🔄 {t.retry}</button>
            {wrongIds.length > 0 && (
              <button className="btn soft" onClick={() => restart(pool.filter((q) => wrongIds.includes(q.id)))}>
                ❗ {t.retryWrong} ({wrongIds.length})
              </button>
            )}
            <button className="btn ghost" onClick={() => go('stats')}>📊 {t.navStats}</button>
          </div>
        </section>
      </>
    );
  }

  const q = items[idx];
  const tr = q.tr?.[lang];
  const sec = sectorById(q.sector);
  const isCorrect = picked === q.answer;

  const check = () => {
    if (picked === null) return;
    setChecked(true);
    recordAnswer(q.id, isCorrect);
    setResults((r) => [...r, { id: q.id, ok: isCorrect }]);
  };
  const next = () => {
    setIdx((i) => i + 1);
    setPicked(null);
    setChecked(false);
  };

  return (
    <>
      <SectorPicker page="quiz" sector={sector} lang={lang} t={t} />
      <div className="progress">
        <div className="progress-bar" style={{ width: `${(idx / items.length) * 100}%` }} />
      </div>
      <section className="panel quiz">
        <div className="quiz-head">
          <span className="pill" style={{ '--c': sec.color }}>{sec.icon} {sec.name[lang]}</span>
          <span className="pill muted">{CATEGORIES[q.category][lang]}</span>
          <span className="quiz-count">
            {t.question} {idx + 1} {t.of} {items.length}
          </span>
        </div>

        <h2 className="quiz-q" lang="ja">{q.q}</h2>
        {tr && showTr && <p className="quiz-tr">{tr.q}</p>}

        <div className="choices">
          {q.order.map((ci, pos) => {
            let cls = 'choice';
            if (picked === ci) cls += ' picked';
            if (checked && ci === q.answer) cls += ' correct';
            if (checked && picked === ci && ci !== q.answer) cls += ' wrong';
            return (
              <button key={ci} className={cls} disabled={checked} onClick={() => setPicked(ci)}>
                <span className="choice-letter">{LETTERS[pos]}</span>
                <span className="choice-text">
                  <span lang="ja">{q.choices[ci]}</span>
                  {tr && showTr && <small>{tr.choices[ci]}</small>}
                </span>
              </button>
            );
          })}
        </div>

        {checked && (
          <div className={`feedback ${isCorrect ? 'ok' : 'ng'}`}>
            <strong>{isCorrect ? `✅ ${t.correct}` : `❌ ${t.wrong}`}</strong>
            <p>
              <b>{t.explanation}:</b> <span lang="ja">{q.exp}</span>
            </p>
            {tr && showTr && <p className="feedback-tr">{tr.exp}</p>}
          </div>
        )}

        <div className="quiz-foot">
          {tr ? (
            <button className="btn ghost sm" onClick={() => setShowTr((s) => !s)}>
              🌐 {showTr ? t.hideTranslation : t.showTranslation}
            </button>
          ) : (
            <span />
          )}
          {!checked ? (
            <button className="btn primary" disabled={picked === null} onClick={check}>{t.check}</button>
          ) : (
            <button className="btn primary" onClick={next}>
              {idx + 1 === items.length ? t.finish : t.next} →
            </button>
          )}
        </div>
      </section>
    </>
  );
}
