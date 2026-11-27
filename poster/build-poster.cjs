// 学園祭ブース用ポスター（A2 縦 420×594mm）
// 実行: cd poster && npm install && npm run build
// 出力: poster.svg / poster.png (A2・200dpi) / poster.pdf (A2)
const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');
const { Resvg } = require('@resvg/resvg-js');
const PDFDocument = require('pdfkit');

const URL = 'https://tokutei-b82ef.web.app/';
const W = 420; // mm
const H = 594;
const NAVY = '#1F4E79';
const NAVY_D = '#143452';
const GOLD = '#F59E0B';
const GOLD_L = '#FCD34D';
const MINT = '#34D399';
const INK = '#0F2A44';

const font = (pkg, file) => path.join(__dirname, 'node_modules/@expo-google-fonts', pkg, file);
const FONTS = [
  font('noto-sans-jp', '400Regular/NotoSansJP_400Regular.ttf'),
  font('noto-sans-jp', '500Medium/NotoSansJP_500Medium.ttf'),
  font('noto-sans-jp', '700Bold/NotoSansJP_700Bold.ttf'),
  font('noto-sans-jp', '900Black/NotoSansJP_900Black.ttf'),
  font('inter', '600SemiBold/Inter_600SemiBold.ttf'),
  font('inter', '800ExtraBold/Inter_800ExtraBold.ttf'),
  font('inter', '900Black/Inter_900Black.ttf'),
  font('noto-sans-devanagari', '500Medium/NotoSansDevanagari_500Medium.ttf'),
  font('noto-sans-myanmar', '500Medium/NotoSansMyanmar_500Medium.ttf'),
];
const JP = "'Noto Sans JP'";
const NUM = "'Inter', 'Noto Sans JP'";

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const txt = (x, y, s, { size = 10, weight = 700, fill = INK, anchor = 'start', family = JP, ls = 0, opacity = 1 } = {}) =>
  `<text x="${x}" y="${y}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" letter-spacing="${ls}" opacity="${opacity}">${esc(s)}</text>`;

// 全角=1, 半角≈0.55 で文字幅をざっくり見積もる
const textWidth = (s, size) => [...s].reduce((w, ch) => w + (ch.charCodeAt(0) > 0x2e80 ? 1 : 0.58), 0) * size;

async function build() {
  // ── 素材 ──
  const illu = fs.readFileSync(path.join(__dirname, 'assets/illustration.png')).toString('base64');
  const icon = fs
    .readFileSync(path.join(__dirname, 'assets/app-icon.svg'), 'utf8')
    .replace(/<\?xml[^>]*>/, '')
    .replace(/<svg([^>]*)>/, (m, a) => '<svg' + a.replace(/\s(width|height)="[^"]*"/g, '') + '>')
    .replace('<svg ', '<svg x="{X}" y="{Y}" width="{S}" height="{S}" ');
  const qrSvg = (await QRCode.toString(URL, { type: 'svg', margin: 0, errorCorrectionLevel: 'H', color: { dark: INK, light: '#0000' } }))
    .replace(/<svg([^>]*)>/, (m, a) => '<svg' + a.replace(/\s(width|height)="[^"]*"/g, '') + '>')
    .replace('<svg ', '<svg x="{X}" y="{Y}" width="{S}" height="{S}" ');
  // 元のwidth/height属性を外してから位置・サイズを差し込む
  const stripWH = (svg) => svg.replace(/<svg([^>]*)>/, (m, a) => '<svg' + a.replace(/\s(width|height)="[^"]*"/g, '') + '>');
  const place = (svg, x, y, s) => svg.replace(/\{X\}/g, x).replace(/\{Y\}/g, y).replace(/\{S\}/g, s);

  const parts = [];

  // ── 背景 ──
  parts.push(`
  <defs>
    <linearGradient id="hdr" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#245B8C"/><stop offset="0.6" stop-color="${NAVY}"/><stop offset="1" stop-color="${NAVY_D}"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${GOLD_L}"/><stop offset="1" stop-color="${GOLD}"/>
    </linearGradient>
    <linearGradient id="cream" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FFFFFF"/><stop offset="0.7" stop-color="#FFFFFF"/><stop offset="1" stop-color="#F3F6FA"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="1.2" stdDeviation="1.6" flood-color="#0F2A44" flood-opacity="0.14"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#cream)"/>
  <path d="M0 0 H${W} V184 C ${W * 0.72} 206, ${W * 0.28} 166, 0 194 Z" fill="url(#hdr)"/>
  <circle cx="380" cy="30" r="70" fill="#FFFFFF" opacity="0.05"/>
  <circle cx="30" cy="160" r="46" fill="#FFFFFF" opacity="0.04"/>
  <circle cx="395" cy="150" r="22" fill="${GOLD}" opacity="0.18"/>
  `);

  // ── ヘッダー ──
  // 左上ラベル
  parts.push(`<rect x="22" y="18" width="78" height="15" rx="7.5" fill="none" stroke="${GOLD_L}" stroke-width="0.8"/>`);
  parts.push(txt(61, 28.6, '卒業研究 作品展示', { size: 7.6, fill: GOLD_L, anchor: 'middle', weight: 700, ls: 0.6 }));
  parts.push(`<rect x="320" y="18" width="78" height="15" rx="7.5" fill="url(#gold)"/>`);
  parts.push(txt(359, 28.6, '学園祭 2026', { size: 7.6, fill: INK, anchor: 'middle', weight: 900, ls: 0.6 }));

  // アプリアイコン + サブタイトル
  parts.push(place(icon, 22, 42, 26));
  parts.push(txt(54, 52, '外国人のための', { size: 9, fill: '#FFFFFF', opacity: 0.8, weight: 500 }));
  parts.push(txt(54, 64.5, '特定技能評価試験  学習Webアプリ', { size: 9.6, fill: '#FFFFFF', weight: 700 }));

  // タイトル
  parts.push(txt(W / 2, 124, '特定技能', { size: 48, fill: '#FFFFFF', anchor: 'middle', weight: 900, ls: 3 }));
  parts.push(txt(W / 2, 170, '練習問題', { size: 48, fill: 'url(#gold)', anchor: 'middle', weight: 900, ls: 3 }));
  // キャッチコピー

  // ── キャッチコピー帯 ──
  parts.push(`<g filter="url(#shadow)"><rect x="${W / 2 - 150}" y="180" width="300" height="22" rx="11" fill="#FFFFFF"/></g>`);
  parts.push(
    `<text x="${W / 2}" y="195" font-family="${JP}" font-size="11" font-weight="900" fill="${NAVY}" text-anchor="middle">` +
      `スマホひとつで、<tspan fill="${GOLD}">日本で働く夢</tspan>を応援！</text>`,
  );

  // あいさつ（5言語）
  const hello = ['こんにちは', 'Hello', 'Assalomu alaykum', 'नमस्ते', 'မင်္ဂလာပါ'];
  parts.push(
    `<text x="${W / 2}" y="212" font-family="'Noto Sans JP', 'Inter', 'Noto Sans Devanagari', 'Noto Sans Myanmar'" font-size="7.4" font-weight="500" fill="${NAVY}" text-anchor="middle" opacity="0.75">` +
      hello.map((h, i) => (i ? `<tspan fill="${GOLD}" dx="2.5">●</tspan><tspan dx="2.5">${esc(h)}</tspan>` : `<tspan>${esc(h)}</tspan>`)).join('') +
      `</text>`,
  );

  // ── イラスト ──
  const iw = 270, ih = iw * (768 / 1376);
  parts.push(`<image x="${(W - iw) / 2}" y="216" width="${iw}" height="${ih}" href="data:image/png;base64,${illu}" preserveAspectRatio="xMidYMid meet"/>`);
  const afterIllu = 216 + ih; // ≈ 374

  // ── 6分野チップ ──
  const sectors = [
    ['農業', '#16A34A'], ['建設', '#2563EB'], ['自動車整備', '#DC2626'],
    ['飲食料品製造業', '#CA8A04'], ['外食業', '#EA580C'], ['宿泊業', '#7C3AED'],
  ];
  const chipSize = 8.6, chipPad = 7, gap = 4;
  const chipWs = sectors.map(([n]) => textWidth(n, chipSize) + chipPad * 2);
  let cx = (W - (chipWs.reduce((a, b) => a + b, 0) + gap * (sectors.length - 1))) / 2;
  const chipY = afterIllu + 1;
  sectors.forEach(([n, c], i) => {
    parts.push(`<rect x="${cx}" y="${chipY}" width="${chipWs[i]}" height="15" rx="7.5" fill="${c}" opacity="0.1"/>`);
    parts.push(`<rect x="${cx}" y="${chipY}" width="${chipWs[i]}" height="15" rx="7.5" fill="none" stroke="${c}" stroke-width="0.6" opacity="0.6"/>`);
    parts.push(txt(cx + chipWs[i] / 2, chipY + 10.6, n, { size: chipSize, fill: c, anchor: 'middle', weight: 700 }));
    cx += chipWs[i] + gap;
  });

  // ── 数字で見る ──
  const stats = [
    ['1,740', '問', '本番形式の問題'],
    ['6,000+', '語', '専門用語'],
    ['6', '分野', '対応分野'],
    ['5', '言語', '多言語対応'],
  ];
  const sy = chipY + 22, sw = 90, sh = 40, sg = 6.67;
  stats.forEach(([n, unit, label], i) => {
    const x = 22 + i * (sw + sg);
    parts.push(`<g filter="url(#shadow)"><rect x="${x}" y="${sy}" width="${sw}" height="${sh}" rx="7" fill="#FFFFFF"/></g>`);
    parts.push(`<rect x="${x}" y="${sy}" width="${sw}" height="3" rx="1.5" fill="url(#gold)"/>`);
    parts.push(
      `<text x="${x + sw / 2}" y="${sy + 24}" text-anchor="middle" fill="${NAVY}">` +
        `<tspan font-family="${NUM}" font-size="22" font-weight="900">${esc(n)}</tspan>` +
        `<tspan font-family="${JP}" font-size="9" font-weight="700" dx="1">${esc(unit)}</tspan></text>`,
    );
    parts.push(txt(x + sw / 2, sy + 34, label, { size: 7.4, fill: '#5B7089', anchor: 'middle', weight: 500 }));
  });

  // ── 機能 ──
  const fy0 = sy + sh + 14;
  parts.push(txt(22, fy0, 'こんな機能があります', { size: 11, fill: NAVY, weight: 900 }));
  parts.push(txt(22 + textWidth('こんな機能があります', 11) + 6, fy0, 'FEATURES', { size: 7, fill: GOLD, weight: 800, family: NUM, ls: 2 }));
  const feats = [
    ['あ', 'ふりがな付きの問題', '漢字が苦手でも安心して解ける'],
    ['5', '5言語ですぐ解説', '母国語で解説を読んでしっかり理解'],
    ['3D', '3Dフラッシュカード', 'タップでめくって専門用語を暗記'],
    ['%', '弱点診断レポート', '苦手なカテゴリがひと目でわかる'],
    ['×', '間違いノート', '間違えた問題・単語を自動で保存'],
    ['PWA', 'オフライン対応', 'アプリとして保存、電車でも学習'],
  ];
  const fw = 122, fh = 31, fgx = 7, fgy = 5, fy = fy0 + 5;
  feats.forEach(([ic, title, desc], i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = 22 + col * (fw + fgx), y = fy + row * (fh + fgy);
    parts.push(`<g filter="url(#shadow)"><rect x="${x}" y="${y}" width="${fw}" height="${fh}" rx="6" fill="#FFFFFF"/></g>`);
    parts.push(`<rect x="${x + 6}" y="${y + 6}" width="19" height="19" rx="5" fill="${i % 2 ? MINT : NAVY}" opacity="${i % 2 ? 0.18 : 0.1}"/>`);
    const icSize = ic.length >= 3 ? 6.4 : ic.length === 2 ? 8 : 11;
    parts.push(txt(x + 15.5, y + 15.5 + icSize * 0.36, ic, { size: icSize, fill: i % 2 ? '#059669' : NAVY, anchor: 'middle', weight: 900, family: NUM }));
    parts.push(txt(x + 30, y + 14, title, { size: 8.4, fill: INK, weight: 900 }));
    parts.push(txt(x + 30, y + 23.5, desc, { size: 5.7, fill: '#5B7089', weight: 500 }));
  });

  // ── フッター（QR） ──
  const ft = fy + 2 * fh + fgy + 6; // フッター上端
  parts.push(`<path d="M0 ${ft + 8} C ${W * 0.3} ${ft - 6}, ${W * 0.7} ${ft + 14}, ${W} ${ft} V${H} H0 Z" fill="url(#hdr)"/>`);
  const qs = 46, qx = 26, qy = ft + 12;
  parts.push(`<rect x="${qx - 4}" y="${qy - 4}" width="${qs + 8}" height="${qs + 8}" rx="6" fill="#FFFFFF"/>`);
  parts.push(place(qrSvg, qx, qy, qs));
  // QR中央にアイコン（誤り訂正レベルHなので読み取り可）
  parts.push(`<rect x="${qx + qs / 2 - 7}" y="${qy + qs / 2 - 7}" width="14" height="14" rx="3" fill="#FFFFFF"/>`);
  parts.push(place(icon, qx + qs / 2 - 6, qy + qs / 2 - 6, 12));

  const tx = qx + qs + 16;
  parts.push(txt(tx, qy + 5, 'SCAN ME', { size: 7, fill: GOLD_L, weight: 800, family: NUM, ls: 2 }));
  parts.push(txt(tx, qy + 20, 'スマホで今すぐ体験！', { size: 16, fill: '#FFFFFF', weight: 900 }));
  // バッジ
  const badges = ['完全無料', '登録不要', '5言語'];
  let bx = tx;
  badges.forEach((b) => {
    const bw = textWidth(b, 7.4) + 12;
    parts.push(`<rect x="${bx}" y="${qy + 25}" width="${bw}" height="12" rx="6" fill="url(#gold)"/>`);
    parts.push(txt(bx + bw / 2, qy + 33.4, b, { size: 7.4, fill: INK, anchor: 'middle', weight: 900 }));
    bx += bw + 4;
  });
  parts.push(txt(tx, qy + 46, 'tokutei-b82ef.web.app', { size: 9.4, fill: '#FFFFFF', weight: 600, family: NUM, ls: 0.3 }));

  // 制作者
  parts.push(txt(W - 22, qy + 28, '岩谷学園 ひがし北海道IT専門学校', { size: 6.4, fill: '#FFFFFF', opacity: 0.8, weight: 500, anchor: 'end' }));
  parts.push(txt(W - 22, qy + 37, '地域未来情報テクノロジー科', { size: 6.4, fill: '#FFFFFF', opacity: 0.8, weight: 500, anchor: 'end' }));
  parts.push(txt(W - 22, qy + 46, '制作：Javokhir Abdumuminov（ジャワ）', { size: 7.4, fill: GOLD_L, weight: 700, anchor: 'end' }));

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}mm" height="${H}mm" viewBox="0 0 ${W} ${H}">${parts.join('\n')}</svg>`;
  fs.writeFileSync(path.join(__dirname, 'poster.svg'), svg);

  // ── PNG（A2 200dpi = 3307×4677px） ──
  const pxW = Math.round((W / 25.4) * 200);
  const png = new Resvg(svg, {
    fitTo: { mode: 'width', value: pxW },
    font: { fontFiles: FONTS, loadSystemFonts: false, defaultFontFamily: 'Noto Sans JP' },
    background: '#FFFFFF',
  }).render().asPng();
  fs.writeFileSync(path.join(__dirname, 'poster.png'), png);

  // プレビュー用（小さめ）
  const preview = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
    font: { fontFiles: FONTS, loadSystemFonts: false, defaultFontFamily: 'Noto Sans JP' },
    background: '#FFFFFF',
  }).render().asPng();
  fs.writeFileSync(path.join(__dirname, 'poster-preview.png'), preview);

  // ── PDF（A2 / A3 / A4 — 同じ縦横比なのでそのまま縮小） ──
  const mm = (v) => (v / 25.4) * 72;
  const sizes = { A2: [420, 594], A3: [297, 420], A4: [210, 297] };
  for (const [name, [pw, ph]] of Object.entries(sizes)) {
    const doc = new PDFDocument({ size: [mm(pw), mm(ph)], margin: 0, info: { Title: '特定技能練習問題 — 学園祭ポスター', Author: 'Javokhir Abdumuminov' } });
    doc.pipe(fs.createWriteStream(path.join(__dirname, `poster-${name}.pdf`)));
    doc.image(png, 0, 0, { width: mm(pw), height: mm(ph) });
    doc.end();
  }

  console.log('✓ poster.svg / poster.png (%dpx) / poster-preview.png / poster-A2.pdf / poster-A3.pdf / poster-A4.pdf', pxW);
}

build().catch((e) => {
  console.error(e);
  process.exit(1);
});
