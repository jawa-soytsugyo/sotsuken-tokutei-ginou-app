// Lug'at (単語). Format:
// { id, sector, word, reading, m: { en, uz, vi, id } }
// Haqiqiy bazani qo'shganda shu formatni saqlang (yoki JSON fayldan import qiling).

const v = (sector, word, reading, en, uz, vi, idn) => ({
  id: `${sector}-${word}`,
  sector,
  word,
  reading,
  m: { en, uz, vi, id: idn },
});

export const VOCAB = [
  // 介護
  v('kaigo', '利用者', 'りようしゃ', 'care receiver / service user', 'xizmatdan foydalanuvchi (parvarish qilinuvchi)', 'người sử dụng dịch vụ', 'pengguna layanan'),
  v('kaigo', '介助', 'かいじょ', 'assistance, help', "yordam berish, ko'maklashish", 'hỗ trợ, giúp đỡ', 'bantuan, pendampingan'),
  v('kaigo', '誤嚥', 'ごえん', 'aspiration (food entering the airway)', "ovqatning nafas yo'liga tushishi", 'hít sặc (thức ăn vào khí quản)', 'tersedak (makanan masuk saluran napas)'),
  v('kaigo', '車いす', 'くるまいす', 'wheelchair', 'nogironlar aravachasi', 'xe lăn', 'kursi roda'),
  v('kaigo', '移乗', 'いじょう', 'transfer (e.g. bed to wheelchair)', "ko'chirish (to'shakdan aravachaga)", 'di chuyển (từ giường sang xe lăn)', 'pemindahan (ranjang ke kursi roda)'),
  v('kaigo', '排泄', 'はいせつ', 'excretion, toileting', 'hojat chiqarish', 'bài tiết', 'buang air'),

  // 外食業
  v('gaishoku', '接客', 'せっきゃく', 'customer service', "mijozlarga xizmat ko'rsatish", 'tiếp khách', 'pelayanan tamu'),
  v('gaishoku', '食中毒', 'しょくちゅうどく', 'food poisoning', 'ovqatdan zaharlanish', 'ngộ độc thực phẩm', 'keracunan makanan'),
  v('gaishoku', '衛生', 'えいせい', 'hygiene, sanitation', 'gigiyena, tozalik', 'vệ sinh', 'kebersihan, higiene'),
  v('gaishoku', '注文', 'ちゅうもん', 'order', 'buyurtma', 'gọi món, đặt hàng', 'pesanan'),
  v('gaishoku', '会計', 'かいけい', 'checkout, payment', "hisob-kitob, to'lov", 'thanh toán', 'pembayaran'),
  v('gaishoku', '下ごしらえ', 'したごしらえ', 'food preparation (prep work)', 'ovqatga dastlabki tayyorgarlik', 'sơ chế', 'persiapan bahan masakan'),

  // 飲食料品製造業
  v('inshoku', '原材料', 'げんざいりょう', 'raw materials', 'xomashyo', 'nguyên liệu', 'bahan baku'),
  v('inshoku', '異物混入', 'いぶつこんにゅう', 'foreign matter contamination', 'begona jism aralashishi', 'lẫn dị vật', 'kontaminasi benda asing'),
  v('inshoku', '賞味期限', 'しょうみきげん', 'best-before date', 'eng yaxshi sifat muddati', 'hạn sử dụng (ngon nhất)', 'tanggal baik digunakan'),
  v('inshoku', '殺菌', 'さっきん', 'sterilization', "sterilizatsiya, mikroblarni o'ldirish", 'tiệt trùng', 'sterilisasi'),
  v('inshoku', '包装', 'ほうそう', 'packaging', 'qadoqlash', 'đóng gói', 'pengemasan'),
  v('inshoku', '検品', 'けんぴん', 'product inspection', 'mahsulotni tekshirish', 'kiểm hàng', 'pemeriksaan barang'),

  // 農業
  v('nogyo', '収穫', 'しゅうかく', 'harvest', "hosil yig'ish", 'thu hoạch', 'panen'),
  v('nogyo', '肥料', 'ひりょう', 'fertilizer', "o'g'it", 'phân bón', 'pupuk'),
  v('nogyo', '農薬', 'のうやく', 'pesticide, agricultural chemicals', 'pestitsid (kimyoviy dori)', 'thuốc bảo vệ thực vật', 'pestisida'),
  v('nogyo', '出荷', 'しゅっか', 'shipping (to market)', "jo'natish (bozorga)", 'xuất hàng', 'pengiriman'),
  v('nogyo', '家畜', 'かちく', 'livestock', 'chorva mollari', 'gia súc', 'hewan ternak'),
  v('nogyo', '苗', 'なえ', 'seedling', "ko'chat", 'cây giống', 'bibit'),

  // 建設
  v('kensetsu', '足場', 'あしば', 'scaffolding', 'havoza (iskala)', 'giàn giáo', 'perancah'),
  v('kensetsu', '墜落', 'ついらく', 'fall (from height)', 'balanddan yiqilish', 'rơi ngã từ trên cao', 'jatuh dari ketinggian'),
  v('kensetsu', '安全帯', 'あんぜんたい', 'safety harness', 'xavfsizlik kamari', 'dây an toàn', 'sabuk pengaman'),
  v('kensetsu', '型枠', 'かたわく', 'formwork', 'qolip (opalubka)', 'cốp pha', 'bekisting'),
  v('kensetsu', '鉄筋', 'てっきん', 'rebar, reinforcing steel', 'armatura', 'cốt thép', 'besi tulangan'),
  v('kensetsu', '危険予知', 'きけんよち', 'hazard prediction (KY)', 'xavfni oldindan aniqlash', 'dự đoán nguy hiểm', 'prediksi bahaya'),

  // 工業製品製造業
  v('kogyo', '溶接', 'ようせつ', 'welding', 'payvandlash', 'hàn', 'pengelasan'),
  v('kogyo', '不良品', 'ふりょうひん', 'defective product', 'yaroqsiz mahsulot', 'hàng lỗi', 'produk cacat'),
  v('kogyo', '寸法', 'すんぽう', 'dimensions, measurements', "o'lcham", 'kích thước', 'ukuran, dimensi'),
  v('kogyo', '図面', 'ずめん', 'technical drawing, blueprint', 'chizma', 'bản vẽ', 'gambar teknik'),
  v('kogyo', '塗装', 'とそう', 'painting, coating', "bo'yash", 'sơn', 'pengecatan'),
  v('kogyo', '機械加工', 'きかいかこう', 'machining', 'stanokda ishlov berish', 'gia công cơ khí', 'pemesinan'),
];
