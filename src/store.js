// Brauzer xotirasida (localStorage) o'quv natijalarini saqlash
import { useCallback, useEffect, useState } from 'react';

const KEY_STATS = 'tg.stats.v1'; // { [questionId]: { c: correctCount, w: wrongCount, last: bool } }
const KEY_CARDS = 'tg.cards.v1'; // { [vocabId]: true }  — "bilaman" deb belgilangan so'zlar
const KEY_LANG = 'tg.lang';

const read = (k, fallback) => {
  try {
    const raw = localStorage.getItem(k);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};
const write = (k, v) => {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch {
    /* ignore quota / private mode */
  }
};

export const getStats = () => read(KEY_STATS, {});

export function recordAnswer(questionId, isCorrect) {
  const stats = getStats();
  const s = stats[questionId] || { c: 0, w: 0 };
  if (isCorrect) s.c += 1;
  else s.w += 1;
  s.last = isCorrect;
  stats[questionId] = s;
  write(KEY_STATS, stats);
}

export const resetStats = () => {
  write(KEY_STATS, {});
  write(KEY_CARDS, {});
};

export const getKnownCards = () => read(KEY_CARDS, {});
export function setCardKnown(id, known) {
  const cards = getKnownCards();
  if (known) cards[id] = true;
  else delete cards[id];
  write(KEY_CARDS, cards);
}

export function useLang() {
  const [lang, setLangState] = useState(() => {
    const saved = read(KEY_LANG, null);
    if (saved) return saved;
    const nav = (navigator.language || 'ja').slice(0, 2);
    return ['ja', 'en', 'uz', 'vi', 'id'].includes(nav) ? nav : 'ja';
  });
  const setLang = useCallback((l) => {
    setLangState(l);
    write(KEY_LANG, l);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return [lang, setLang];
}

// Oddiy hash-router: #/quiz/kaigo  →  { page: 'quiz', param: 'kaigo' }
const parseHash = () => {
  const [, page = '', param = ''] = window.location.hash.replace(/^#/, '').split('/');
  return { page: page || 'home', param: param || 'all' };
};

export function useRoute() {
  const [route, setRoute] = useState(parseHash);
  useEffect(() => {
    const on = () => {
      setRoute(parseHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return route;
}

export const go = (page, param) => {
  window.location.hash = param ? `/${page}/${param}` : `/${page}`;
};

export const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Yaponcha so'zni brauzer ovozida o'qib berish
export function speakJa(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ja-JP';
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}
