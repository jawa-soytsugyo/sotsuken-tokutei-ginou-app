import { SECTORS } from '../data/sectors.js';
import { QUESTIONS } from '../data/questions.js';
import { VOCAB } from '../data/vocab.js';
import { LANGS } from '../i18n.js';
import { getStats, go } from '../store.js';

export default function Home({ lang, t }) {
  const stats = getStats();
  const accuracyFor = (sectorId) => {
    let c = 0, w = 0;
    QUESTIONS.filter((q) => q.sector === sectorId).forEach((q) => {
      if (stats[q.id]) { c += stats[q.id].c; w += stats[q.id].w; }
    });
    return c + w ? Math.round((c / (c + w)) * 100) : null;
  };

  return (
    <>
      <section className="hero">
        <div>
          <h1>
            特定技能 <span className="accent">Pass</span>
          </h1>
          <p className="hero-sub">{t.tagline}</p>
          <div className="hero-actions">
            <button className="btn primary lg" onClick={() => go('quiz', 'all')}>📝 {t.startQuiz}</button>
            <button className="btn ghost lg" onClick={() => go('cards', 'all')}>🃏 {t.openCards}</button>
          </div>
          <div className="hero-stats">
            <div><b>{QUESTIONS.length}</b><span>{t.questions}</span></div>
            <div><b>{VOCAB.length}</b><span>{t.words}</span></div>
            <div><b>{SECTORS.length}</b><span>分野</span></div>
            <div><b>{LANGS.length}</b><span>{LANGS.map((l) => l.flag).join('')}</span></div>
          </div>
        </div>
        <div className="hero-card" aria-hidden="true">
          <div className="mini-card front">安全帯<small>あんぜんたい</small></div>
          <div className="mini-card back">safety harness</div>
        </div>
      </section>

      <h2 className="section-title">{t.chooseSector}</h2>
      <div className="sector-grid">
        {SECTORS.map((s) => {
          const qn = QUESTIONS.filter((q) => q.sector === s.id).length;
          const vn = VOCAB.filter((v) => v.sector === s.id).length;
          const acc = accuracyFor(s.id);
          return (
            <article key={s.id} className="sector-card" style={{ '--c': s.color }}>
              <div className="sector-top">
                <span className="sector-icon">{s.icon}</span>
                <div>
                  <h3>{s.name[lang]}</h3>
                  {lang !== 'ja' && <div className="sector-ja">{s.name.ja}</div>}
                </div>
                {acc !== null && <span className="badge">{acc}%</span>}
              </div>
              <div className="sector-meta">
                <span>📝 {qn} {t.questions}</span>
                <span>📖 {vn} {t.words}</span>
              </div>
              <div className="sector-actions">
                <button className="btn primary" onClick={() => go('quiz', s.id)}>{t.startQuiz}</button>
                <button className="btn soft" onClick={() => go('vocab', s.id)}>{t.navVocab}</button>
                <button className="btn soft" onClick={() => go('cards', s.id)}>{t.navCards}</button>
              </div>
            </article>
          );
        })}
      </div>
      <p className="note">{t.sampleNote}</p>
    </>
  );
}
