# sotsuken-tokutei-ginou-app

Multilingual web platform for Japan's Specified Skilled Worker (Tokutei Ginou) exam preparation — featuring 1,740 practice questions, 6,000+ vocabulary words, 3D flashcards, and weakness diagnostics across 6 sectors and 5 languages.

特定技能1号試験の対策ができる多言語学習Webアプリ（卒業研究）。

## Imkoniyatlar / Features

| | |
|---|---|
| 📝 **Testlar (問題演習)** | Soha bo'yicha savollar, aralashtirilgan javoblar, darhol tekshirish, izoh va tarjima |
| 📖 **Lug'at (単語帳)** | Qidiruv, soha filtri, 🔊 yaponcha talaffuz (brauzer ovozi) |
| 🃏 **3D kartochkalar** | Aylanuvchi kartalar, "bilaman / hali emas", klaviatura: `Space`, `←`, `→` |
| 📊 **Zaif tomonlar tahlili (弱点診断)** | Soha va bo'lim bo'yicha to'g'rilik foizi, eng zaif joylar ro'yxati |
| 🌏 **5 til** | 日本語 · English · O'zbekcha · Tiếng Việt · Bahasa Indonesia |

**6 ta soha:** 介護 · 外食業 · 飲食料品製造業 · 農業 · 建設 · 工業製品製造業

Natijalar brauzerning `localStorage` xotirasida saqlanadi (server kerak emas).

## Ishga tushirish / Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ papkaga statik sayt
```

`dist/` papkani GitHub Pages, Netlify yoki Vercel'ga to'g'ridan-to'g'ri joylash mumkin (`base: './'` sozlangan, hash-router ishlatiladi).

## Tuzilma / Structure

```
src/
  i18n.js              # Interfeys matnlari (5 til)
  store.js             # localStorage, router, yordamchi funksiyalar
  data/
    sectors.js         # 6 soha + savol bo'limlari (categories)
    questions.js       # Test savollari
    vocab.js           # Lug'at
  components/          # Header, SectorPicker
  pages/               # Home, Quiz, Vocab, Flashcards, Stats
```

## Ma'lumot qo'shish / Adding data

Hozir har bir sohada **namunaviy** savollar va so'zlar bor. To'liq bazani (1 740 savol, 6 000+ so'z) shu formatda qo'shing:

**Savol** (`src/data/questions.js`):

```js
{
  id: 'kaigo-5', sector: 'kaigo', category: 'safety', // safety | knowledge | communication | rules
  q: '問題文', choices: ['A', 'B', 'C', 'D'], answer: 1, exp: '解説',
  tr: {
    en: { q: '...', choices: ['...', '...', '...', '...'], exp: '...' },
    uz: { ... }, vi: { ... }, id: { ... },
  },
}
```

**So'z** (`src/data/vocab.js`):

```js
v('kaigo', '介助', 'かいじょ', 'assistance', "yordam berish", 'hỗ trợ', 'bantuan')
```
