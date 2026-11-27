import { UI } from './i18n.js';
import { useLang, useRoute } from './store.js';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Quiz from './pages/Quiz.jsx';
import Vocab from './pages/Vocab.jsx';
import Flashcards from './pages/Flashcards.jsx';
import Stats from './pages/Stats.jsx';

export default function App() {
  const [lang, setLang] = useLang();
  const { page, param } = useRoute();
  const t = UI[lang];
  const props = { lang, t, sector: param };

  let content;
  switch (page) {
    case 'quiz':
      content = <Quiz key={`quiz-${param}`} {...props} />;
      break;
    case 'vocab':
      content = <Vocab key={`vocab-${param}`} {...props} />;
      break;
    case 'cards':
      content = <Flashcards key={`cards-${param}`} {...props} />;
      break;
    case 'stats':
      content = <Stats {...props} />;
      break;
    default:
      content = <Home {...props} />;
  }

  return (
    <div className="app">
      <Header lang={lang} setLang={setLang} t={t} page={page} />
      <main className="container">{content}</main>
      <footer className="footer">
        <span>{t.footer}</span>
      </footer>
    </div>
  );
}
