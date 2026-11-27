// 6 ta soha (分野). Yangi soha qo'shish uchun shu ro'yxatga element qo'shing.
export const SECTORS = [
  {
    id: 'kaigo',
    icon: '🧑‍🦽',
    color: '#ec4899',
    name: { ja: '介護', en: 'Nursing Care', uz: 'Parvarish (Kaigo)', vi: 'Điều dưỡng', id: 'Perawatan Lansia' },
  },
  {
    id: 'gaishoku',
    icon: '🍜',
    color: '#f97316',
    name: { ja: '外食業', en: 'Food Service', uz: 'Restoran xizmati', vi: 'Nhà hàng', id: 'Jasa Makanan' },
  },
  {
    id: 'inshoku',
    icon: '🏭',
    color: '#eab308',
    name: {
      ja: '飲食料品製造業',
      en: 'Food & Beverage Manufacturing',
      uz: 'Oziq-ovqat ishlab chiqarish',
      vi: 'Chế biến thực phẩm',
      id: 'Manufaktur Makanan & Minuman',
    },
  },
  {
    id: 'nogyo',
    icon: '🌾',
    color: '#22c55e',
    name: { ja: '農業', en: 'Agriculture', uz: "Qishloq xo'jaligi", vi: 'Nông nghiệp', id: 'Pertanian' },
  },
  {
    id: 'kensetsu',
    icon: '🏗️',
    color: '#3b82f6',
    name: { ja: '建設', en: 'Construction', uz: 'Qurilish', vi: 'Xây dựng', id: 'Konstruksi' },
  },
  {
    id: 'kogyo',
    icon: '⚙️',
    color: '#8b5cf6',
    name: {
      ja: '工業製品製造業',
      en: 'Industrial Manufacturing',
      uz: 'Sanoat mahsulotlari ishlab chiqarish',
      vi: 'Sản xuất công nghiệp',
      id: 'Manufaktur Produk Industri',
    },
  },
];

// Zaif tomonlar tahlili uchun savol bo'limlari
export const CATEGORIES = {
  safety: { ja: '安全・衛生', en: 'Safety & Hygiene', uz: 'Xavfsizlik va gigiyena', vi: 'An toàn & Vệ sinh', id: 'Keselamatan & Kebersihan' },
  knowledge: { ja: '専門知識', en: 'Technical Knowledge', uz: 'Kasbiy bilim', vi: 'Kiến thức chuyên môn', id: 'Pengetahuan Teknis' },
  communication: { ja: 'コミュニケーション', en: 'Communication', uz: 'Muloqot', vi: 'Giao tiếp', id: 'Komunikasi' },
  rules: { ja: 'ルール・法令', en: 'Rules & Regulations', uz: 'Qoidalar va qonunlar', vi: 'Quy định & Pháp luật', id: 'Aturan & Regulasi' },
};

export const sectorById = (id) => SECTORS.find((s) => s.id === id);
