import { LANGS } from '../i18n.js';

export default function Header({ lang, setLang, t, page }) {
  const links = [
    { page: 'home', label: t.navHome, icon: '🏠' },
    { page: 'quiz', label: t.navQuiz, icon: '📝' },
    { page: 'vocab', label: t.navVocab, icon: '📖' },
    { page: 'cards', label: t.navCards, icon: '🃏' },
    { page: 'stats', label: t.navStats, icon: '📊' },
  ];
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#/">
          <span className="brand-mark">特</span>
          <span className="brand-name">{t.appName}</span>
        </a>
        <nav className="nav">
          {links.map((l) => (
            <a key={l.page} href={`#/${l.page === 'home' ? '' : l.page}`} className={page === l.page ? 'active' : ''}>
              <span className="nav-icon">{l.icon}</span>
              <span className="nav-label">{l.label}</span>
            </a>
          ))}
        </nav>
        <select className="lang-select" value={lang} onChange={(e) => setLang(e.target.value)} aria-label="Language">
          {LANGS.map((l) => (
            <option key={l.code} value={l.code}>
              {l.flag} {l.label}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
