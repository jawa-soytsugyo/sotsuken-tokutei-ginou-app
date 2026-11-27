import { useState } from 'react';
import { QUESTIONS } from '../data/questions.js';
import { CATEGORIES, SECTORS } from '../data/sectors.js';
import { getStats, go, resetStats } from '../store.js';

const level = (pct) => (pct >= 80 ? 'good' : pct >= 60 ? 'ok' : 'weak');

function aggregate(stats, keyFn) {
  const map = {};
  QUESTIONS.forEach((q) => {
    const s = stats[q.id];
    if (!s) return;
    const k = keyFn(q);
    map[k] = map[k] || { c: 0, w: 0 };
    map[k].c += s.c;
    map[k].w += s.w;
  });
  return map;
}

function Bar({ label, data, t, onClick }) {
  if (!data) return null;
  const total = data.c + data.w;
  const pct = Math.round((data.c / total) * 100);
  const lv = level(pct);
  return (
    <div className={`bar-row ${onClick ? 'clickable' : ''}`} onClick={onClick}>
      <div className="bar-label">{label}</div>
      <div className="bar-track">
        <div className={`bar-fill ${lv}`} style={{ width: `${pct}%` }} />
      </div>
      <div className="bar-value">
        <b>{pct}%</b>
        <small>{data.c}/{total}</small>
      </div>
      <span className={`lv lv-${lv}`}>{t.level[lv]}</span>
    </div>
  );
}

export default function Stats({ lang, t }) {
  const [stats, setStats] = useState(getStats);
  const bySector = aggregate(stats, (q) => q.sector);
  const byCat = aggregate(stats, (q) => q.category);
  const bySectorCat = aggregate(stats, (q) => `${q.sector}|${q.category}`);

  let c = 0, w = 0;
  Object.values(stats).forEach((s) => { c += s.c; w += s.w; });
  const total = c + w;

  if (!total) {
    return (
      <section className="panel empty-state">
        <div className="big-emoji">📊</div>
        <h2>{t.statsTitle}</h2>
        <p>{t.statsEmpty}</p>
        <button className="btn primary" onClick={() => go('quiz', 'all')}>📝 {t.startQuiz}</button>
      </section>
    );
  }

  const pct = Math.round((c / total) * 100);
  const weakest = Object.entries(bySectorCat)
    .map(([k, d]) => ({ k, pct: Math.round((d.c / (d.c + d.w)) * 100), n: d.c + d.w }))
    .filter((x) => x.pct < 80)
    .sort((a, b) => a.pct - b.pct)
    .slice(0, 4);

  return (
    <>
      <h1 className="page-title">{t.statsTitle}</h1>
      <div className="stat-cards">
        <div className="stat-card">
          <div className="ring sm" style={{ '--p': pct }}><span>{pct}%</span></div>
          <div><small>{t.accuracy}</small></div>
        </div>
        <div className="stat-card">
          <b className="stat-num">{total}</b>
          <small>{t.answered}</small>
        </div>
        <div className="stat-card">
          <b className="stat-num">
            {Object.keys(stats).length}<span className="muted">/{QUESTIONS.length}</span>
          </b>
          <small>{t.questions}</small>
        </div>
      </div>

      {weakest.length > 0 && (
        <section className="panel">
          <h2>⚠️ {t.weakest}</h2>
          <div className="weak-list">
            {weakest.map(({ k, pct: p }) => {
              const [sid, cat] = k.split('|');
              const s = SECTORS.find((x) => x.id === sid);
              return (
                <div key={k} className="weak-item" style={{ '--c': s.color }}>
                  <div>
                    <b>{s.icon} {s.name[lang]}</b>
                    <div className="muted">{CATEGORIES[cat][lang]}</div>
                  </div>
                  <span className={`lv lv-${level(p)}`}>{p}%</span>
                  <button className="btn soft sm" onClick={() => go('quiz', sid)}>{t.practiceThis} →</button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <section className="panel">
        <h2>{t.bySector}</h2>
        {SECTORS.map((s) => (
          <Bar key={s.id} label={`${s.icon} ${s.name[lang]}`} data={bySector[s.id]} t={t} onClick={() => go('quiz', s.id)} />
        ))}
      </section>

      <section className="panel">
        <h2>{t.byCategory}</h2>
        {Object.entries(CATEGORIES).map(([k, name]) => (
          <Bar key={k} label={name[lang]} data={byCat[k]} t={t} />
        ))}
      </section>

      <div className="center">
        <button
          className="btn ghost sm"
          onClick={() => {
            if (window.confirm(t.resetConfirm)) {
              resetStats();
              setStats({});
            }
          }}
        >
          🗑 {t.resetStats}
        </button>
      </div>
    </>
  );
}
