// Test savollari (問題). Format:
// {
//   id, sector, category,            // category: safety | knowledge | communication | rules
//   q, choices: [..4], answer: 0-3,  // yaponcha (imtihon tili)
//   exp,                             // yaponcha izoh
//   tr: { en|uz|vi|id: { q, choices, exp } }  // tarjimalar
// }

export const QUESTIONS = [
  // ───────────── 介護 ─────────────
  {
    id: 'kaigo-1', sector: 'kaigo', category: 'knowledge',
    q: '食事介助のとき、利用者の姿勢として最も適切なのはどれですか。',
    choices: ['あおむけに寝た姿勢', 'いすに深く座り、少し前かがみの姿勢', '横向きに寝た姿勢', '立った姿勢'],
    answer: 1,
    exp: '少し前かがみの姿勢は、食べ物が気管に入る「誤嚥」を防ぎます。',
    tr: {
      en: { q: 'When assisting with meals, which posture is most appropriate for the care receiver?', choices: ['Lying on the back', 'Sitting deep in a chair, leaning slightly forward', 'Lying on the side', 'Standing'], exp: 'Leaning slightly forward helps prevent aspiration (food entering the airway).' },
      uz: { q: "Ovqatlantirishda yordam berayotganda, parvarish qilinuvchi uchun eng to'g'ri holat qaysi?", choices: ['Chalqancha yotgan holat', "Stulga chuqur o'tirib, biroz oldinga engashgan holat", 'Yonboshlab yotgan holat', 'Tik turgan holat'], exp: "Biroz oldinga engashish ovqatning nafas yo'liga tushishining (誤嚥) oldini oladi." },
      vi: { q: 'Khi hỗ trợ ăn uống, tư thế nào của người sử dụng là phù hợp nhất?', choices: ['Nằm ngửa', 'Ngồi sâu trên ghế, hơi cúi người về phía trước', 'Nằm nghiêng', 'Đứng'], exp: 'Tư thế hơi cúi về phía trước giúp phòng tránh hít sặc.' },
      id: { q: 'Saat membantu makan, posisi apa yang paling tepat bagi pengguna layanan?', choices: ['Berbaring telentang', 'Duduk dalam di kursi, sedikit condong ke depan', 'Berbaring miring', 'Berdiri'], exp: 'Posisi sedikit condong ke depan mencegah makanan masuk ke saluran napas.' },
    },
  },
  {
    id: 'kaigo-2', sector: 'kaigo', category: 'safety',
    q: '車いすで段差を上がるとき、最初にすることはどれですか。',
    choices: ['後ろの大きい車輪を上げる', 'ティッピングレバーを踏んで前輪を上げる', '利用者に立ってもらう', 'スピードを上げて進む'],
    answer: 1,
    exp: 'ティッピングレバーを踏んで前輪（キャスター）を上げ、段差にのせてから後輪を上げます。',
    tr: {
      en: { q: 'When going up a step with a wheelchair, what do you do first?', choices: ['Lift the large rear wheels', 'Step on the tipping lever to lift the front wheels', 'Ask the user to stand up', 'Speed up and push forward'], exp: 'Step on the tipping lever, lift the front casters onto the step, then lift the rear wheels.' },
      uz: { q: "Nogironlar aravachasi bilan zinapoyaga ko'tarilayotganda birinchi navbatda nima qilinadi?", choices: ["Orqadagi katta g'ildiraklarni ko'tarish", "Tipping richagini bosib, old g'ildiraklarni ko'tarish", "Foydalanuvchidan o'rnidan turishini so'rash", 'Tezlikni oshirib oldinga yurish'], exp: "Tipping richagini bosib old g'ildiraklarni pog'onaga qo'yasiz, so'ng orqa g'ildiraklarni ko'tarasiz." },
      vi: { q: 'Khi đẩy xe lăn lên bậc, việc đầu tiên cần làm là gì?', choices: ['Nâng bánh sau lớn lên', 'Đạp cần nghiêng để nâng bánh trước', 'Bảo người dùng đứng lên', 'Tăng tốc và đẩy đi'], exp: 'Đạp cần nghiêng, nâng bánh trước lên bậc, sau đó nâng bánh sau.' },
      id: { q: 'Saat menaiki undakan dengan kursi roda, apa yang dilakukan pertama kali?', choices: ['Mengangkat roda belakang yang besar', 'Menginjak tuas pengungkit untuk mengangkat roda depan', 'Meminta pengguna berdiri', 'Mempercepat dan mendorong'], exp: 'Injak tuas pengungkit, naikkan roda depan ke undakan, lalu angkat roda belakang.' },
    },
  },
  {
    id: 'kaigo-3', sector: 'kaigo', category: 'communication',
    q: '耳が聞こえにくい利用者と話すとき、適切なのはどれですか。',
    choices: ['後ろから大きな声で話す', '正面から、ゆっくりはっきり話す', '早口で何度も話す', 'なるべく話しかけない'],
    answer: 1,
    exp: '正面から口の動きが見えるように、ゆっくりはっきり話すと伝わりやすくなります。',
    tr: {
      en: { q: 'When talking with a care receiver who is hard of hearing, what is appropriate?', choices: ['Speak loudly from behind', 'Face them and speak slowly and clearly', 'Talk fast and repeat many times', 'Avoid talking to them'], exp: 'Facing them so they can see your mouth, and speaking slowly and clearly, makes it easier to understand.' },
      uz: { q: "Eshitishi zaif foydalanuvchi bilan gaplashganda qaysi biri to'g'ri?", choices: ['Orqasidan baland ovozda gapirish', 'Yuzma-yuz turib, sekin va aniq gapirish', 'Tez-tez va qayta-qayta gapirish', 'Iloji boricha gapirmaslik'], exp: "Og'iz harakati ko'rinadigan qilib yuzma-yuz, sekin va aniq gapirsangiz, tushunish osonlashadi." },
      vi: { q: 'Khi nói chuyện với người sử dụng bị nghe kém, cách nào phù hợp?', choices: ['Nói to từ phía sau', 'Đối diện, nói chậm và rõ ràng', 'Nói nhanh và lặp lại nhiều lần', 'Cố gắng không nói chuyện'], exp: 'Đối diện để họ thấy khẩu hình, nói chậm và rõ giúp dễ hiểu hơn.' },
      id: { q: 'Saat berbicara dengan pengguna yang sulit mendengar, mana yang tepat?', choices: ['Berbicara keras dari belakang', 'Berhadapan, berbicara pelan dan jelas', 'Berbicara cepat dan berulang-ulang', 'Sebisa mungkin tidak mengajak bicara'], exp: 'Berhadapan agar gerak mulut terlihat dan berbicara pelan serta jelas memudahkan pemahaman.' },
    },
  },
  {
    id: 'kaigo-4', sector: 'kaigo', category: 'safety',
    q: '感染症を防ぐための手洗いで、正しいのはどれですか。',
    choices: ['水だけで3秒洗う', '石けんで30秒以上洗い、よく乾かす', '手袋をすれば手洗いはいらない', '1日に1回だけ洗う'],
    answer: 1,
    exp: '石けんと流水で30秒以上洗い、清潔なタオルやペーパーでよく乾かします。手袋を外した後も手洗いが必要です。',
    tr: {
      en: { q: 'Which is correct about handwashing to prevent infections?', choices: ['Wash with water only for 3 seconds', 'Wash with soap for 30+ seconds and dry well', 'No need to wash if you wear gloves', 'Wash only once a day'], exp: 'Wash with soap and running water for 30+ seconds and dry well. Wash hands after removing gloves too.' },
      uz: { q: "Yuqumli kasalliklarning oldini olish uchun qo'l yuvishda qaysi biri to'g'ri?", choices: ['Faqat suv bilan 3 soniya yuvish', "Sovun bilan 30 soniyadan ko'p yuvib, yaxshi quritish", "Qo'lqop kiysangiz, qo'l yuvish shart emas", 'Kuniga faqat 1 marta yuvish'], exp: "Sovun va oqar suvda 30 soniyadan ko'proq yuvib, yaxshilab quriting. Qo'lqopni yechgandan keyin ham qo'l yuvish kerak." },
      vi: { q: 'Về rửa tay để phòng bệnh truyền nhiễm, điều nào đúng?', choices: ['Chỉ rửa bằng nước trong 3 giây', 'Rửa bằng xà phòng trên 30 giây và lau khô', 'Đeo găng tay thì không cần rửa tay', 'Chỉ rửa 1 lần mỗi ngày'], exp: 'Rửa bằng xà phòng dưới vòi nước trên 30 giây rồi lau khô. Sau khi tháo găng cũng phải rửa tay.' },
      id: { q: 'Mana yang benar tentang cuci tangan untuk mencegah infeksi?', choices: ['Cuci dengan air saja selama 3 detik', 'Cuci dengan sabun 30 detik lebih dan keringkan', 'Tidak perlu cuci tangan jika memakai sarung tangan', 'Cuci hanya sekali sehari'], exp: 'Cuci dengan sabun dan air mengalir 30 detik lebih, lalu keringkan. Setelah melepas sarung tangan juga harus cuci tangan.' },
    },
  },

  // ───────────── 外食業 ─────────────
  {
    id: 'gaishoku-1', sector: 'gaishoku', category: 'safety',
    q: '食中毒予防の三原則は「つけない」「増やさない」と、もう一つは何ですか。',
    choices: ['食べない', 'やっつける', '冷やさない', '洗わない'],
    answer: 1,
    exp: '細菌を「つけない・増やさない・やっつける（殺菌する）」が三原則です。',
    tr: {
      en: { q: 'The three principles of food poisoning prevention are "don\'t attach", "don\'t multiply", and what else?', choices: ["Don't eat", 'Kill (destroy bacteria)', "Don't cool", "Don't wash"], exp: 'The three principles: don\'t let bacteria attach, don\'t let them multiply, and kill them.' },
      uz: { q: "Ovqatdan zaharlanishning oldini olishning uchta tamoyili: «yuqtirmaslik», «ko'paytirmaslik» va yana qaysi?", choices: ['Yemaslik', "Yo'q qilish (mikroblarni o'ldirish)", 'Sovutmaslik', 'Yuvmaslik'], exp: "Uchta tamoyil: bakteriyani yuqtirmaslik, ko'paytirmaslik va yo'q qilish." },
      vi: { q: 'Ba nguyên tắc phòng ngộ độc thực phẩm là "không để dính", "không để sinh sôi" và gì nữa?', choices: ['Không ăn', 'Tiêu diệt', 'Không làm lạnh', 'Không rửa'], exp: 'Ba nguyên tắc: không để vi khuẩn bám vào, không để sinh sôi, và tiêu diệt chúng.' },
      id: { q: 'Tiga prinsip pencegahan keracunan makanan adalah "jangan menempelkan", "jangan memperbanyak", dan apa lagi?', choices: ['Jangan makan', 'Membasmi', 'Jangan mendinginkan', 'Jangan mencuci'], exp: 'Tiga prinsip: jangan biarkan bakteri menempel, jangan biarkan berkembang biak, dan basmi.' },
    },
  },
  {
    id: 'gaishoku-2', sector: 'gaishoku', category: 'knowledge',
    q: '肉や魚を加熱するとき、中心温度は何℃で1分以上加熱すると安全とされていますか。',
    choices: ['40℃', '55℃', '75℃', '30℃'],
    answer: 2,
    exp: '中心温度75℃で1分以上の加熱が、多くの食中毒菌を死滅させる目安です。',
    tr: {
      en: { q: 'When cooking meat or fish, at what core temperature for 1+ minute is it considered safe?', choices: ['40°C', '55°C', '75°C', '30°C'], exp: 'Heating at a core temperature of 75°C for 1+ minute kills most food poisoning bacteria.' },
      uz: { q: "Go'sht yoki baliqni pishirganda, ichki harorat necha ℃ da 1 daqiqadan ko'p qizdirilsa xavfsiz hisoblanadi?", choices: ['40℃', '55℃', '75℃', '30℃'], exp: "Ichki harorat 75℃ da 1 daqiqadan ko'proq qizdirish ko'pchilik zararli bakteriyalarni o'ldiradi." },
      vi: { q: 'Khi nấu thịt hoặc cá, nhiệt độ tâm bao nhiêu độ trong hơn 1 phút được coi là an toàn?', choices: ['40℃', '55℃', '75℃', '30℃'], exp: 'Nấu ở nhiệt độ tâm 75℃ trên 1 phút sẽ tiêu diệt hầu hết vi khuẩn gây ngộ độc.' },
      id: { q: 'Saat memasak daging atau ikan, suhu inti berapa selama 1 menit lebih yang dianggap aman?', choices: ['40℃', '55℃', '75℃', '30℃'], exp: 'Pemanasan pada suhu inti 75℃ selama 1 menit lebih membunuh sebagian besar bakteri penyebab keracunan.' },
    },
  },
  {
    id: 'gaishoku-3', sector: 'gaishoku', category: 'communication',
    q: 'お客様が店に入ってきたとき、最初に言う言葉はどれですか。',
    choices: ['ありがとうございました', 'いらっしゃいませ', '失礼しました', 'お疲れさまです'],
    answer: 1,
    exp: '来店したお客様には「いらっしゃいませ」と明るくあいさつします。',
    tr: {
      en: { q: 'What do you say first when a customer enters the restaurant?', choices: ['Thank you very much (after service)', 'Welcome!', 'Excuse me (apology)', 'Good work (to coworkers)'], exp: 'Greet arriving customers cheerfully with "Irasshaimase" (Welcome).' },
      uz: { q: "Mijoz do'konga kirganda birinchi aytiladigan so'z qaysi?", choices: ['Rahmat (ketayotganda)', 'Xush kelibsiz!', 'Kechirasiz (uzr)', 'Charchamang (hamkasblarga)'], exp: "Kelgan mijozni «いらっしゃいませ» (Xush kelibsiz) deb quvnoq kutib olinadi." },
      vi: { q: 'Khi khách bước vào quán, câu đầu tiên cần nói là gì?', choices: ['Cảm ơn quý khách (khi ra về)', 'Xin mời vào!', 'Xin lỗi', 'Anh/chị vất vả rồi (với đồng nghiệp)'], exp: 'Chào khách vui vẻ bằng câu "Irasshaimase" (Xin mời vào).' },
      id: { q: 'Apa yang diucapkan pertama kali saat tamu masuk ke restoran?', choices: ['Terima kasih (saat pulang)', 'Selamat datang!', 'Maaf', 'Terima kasih atas kerja kerasnya (ke rekan)'], exp: 'Sambut tamu dengan ceria: "Irasshaimase" (Selamat datang).' },
    },
  },
  {
    id: 'gaishoku-4', sector: 'gaishoku', category: 'rules',
    q: 'アレルギー表示が義務付けられている「特定原材料」に含まれるものはどれですか。',
    choices: ['えび', 'りんご', '米', '砂糖'],
    answer: 0,
    exp: '特定原材料は、えび・かに・くるみ・小麦・そば・卵・乳・落花生の8品目です。',
    tr: {
      en: { q: 'Which is included in the "specified raw materials" that require allergy labeling?', choices: ['Shrimp', 'Apple', 'Rice', 'Sugar'], exp: 'The 8 specified items: shrimp, crab, walnut, wheat, buckwheat, egg, milk and peanut.' },
      uz: { q: "Allergiya belgisini ko'rsatish majburiy bo'lgan «maxsus xomashyo»ga qaysi biri kiradi?", choices: ['Krevetka', 'Olma', 'Guruch', 'Shakar'], exp: "Maxsus xomashyo 8 ta: krevetka, qisqichbaqa, yong'oq, bug'doy, grechka, tuxum, sut, yer yong'oq." },
      vi: { q: 'Thứ nào thuộc "nguyên liệu đặc định" bắt buộc ghi nhãn dị ứng?', choices: ['Tôm', 'Táo', 'Gạo', 'Đường'], exp: '8 loại: tôm, cua, óc chó, lúa mì, kiều mạch, trứng, sữa, đậu phộng.' },
      id: { q: 'Mana yang termasuk "bahan baku khusus" yang wajib dicantumkan label alergi?', choices: ['Udang', 'Apel', 'Beras', 'Gula'], exp: '8 bahan: udang, kepiting, kenari, gandum, soba, telur, susu, kacang tanah.' },
    },
  },

  // ───────────── 飲食料品製造業 ─────────────
  {
    id: 'inshoku-1', sector: 'inshoku', category: 'rules',
    q: 'HACCP（ハサップ）とは何ですか。',
    choices: ['新しい機械の名前', '危害要因を分析し、重要な工程を管理する衛生管理の方法', '食品の値段を決める方法', '従業員の勤務表'],
    answer: 1,
    exp: 'HACCPは、危害要因（Hazard）を分析し、重要管理点（CCP）を継続的に監視する衛生管理の手法です。',
    tr: {
      en: { q: 'What is HACCP?', choices: ['The name of a new machine', 'A hygiene management method that analyzes hazards and controls critical processes', 'A way to set food prices', 'An employee work schedule'], exp: 'HACCP analyzes hazards and continuously monitors Critical Control Points (CCP).' },
      uz: { q: 'HACCP nima?', choices: ['Yangi mashinaning nomi', 'Xavf omillarini tahlil qilib, muhim jarayonlarni nazorat qiladigan gigiyena boshqaruvi usuli', 'Oziq-ovqat narxini belgilash usuli', 'Xodimlarning ish jadvali'], exp: 'HACCP xavf omillarini (Hazard) tahlil qiladi va muhim nazorat nuqtalarini (CCP) doimiy kuzatadi.' },
      vi: { q: 'HACCP là gì?', choices: ['Tên một loại máy mới', 'Phương pháp quản lý vệ sinh, phân tích mối nguy và kiểm soát công đoạn quan trọng', 'Cách định giá thực phẩm', 'Bảng ca làm việc'], exp: 'HACCP phân tích mối nguy và giám sát liên tục các điểm kiểm soát tới hạn (CCP).' },
      id: { q: 'Apa itu HACCP?', choices: ['Nama mesin baru', 'Metode manajemen higiene yang menganalisis bahaya dan mengendalikan proses penting', 'Cara menentukan harga makanan', 'Jadwal kerja karyawan'], exp: 'HACCP menganalisis bahaya dan memantau Titik Kendali Kritis (CCP) secara terus-menerus.' },
    },
  },
  {
    id: 'inshoku-2', sector: 'inshoku', category: 'safety',
    q: '食品工場の作業場に入る前に、することはどれですか。',
    choices: ['腕時計や指輪を外し、手を洗う', '香水をつける', 'おやつを食べる', 'スマートフォンを持って入る'],
    answer: 0,
    exp: 'アクセサリーは異物混入の原因になるため外し、手洗い・ローラー掛けをしてから入ります。',
    tr: {
      en: { q: 'What should you do before entering the work area of a food factory?', choices: ['Remove watch and rings, and wash hands', 'Put on perfume', 'Eat a snack', 'Bring your smartphone'], exp: 'Accessories can cause foreign matter contamination, so remove them, wash hands and use a lint roller before entering.' },
      uz: { q: 'Oziq-ovqat zavodining ish joyiga kirishdan oldin nima qilinadi?', choices: ["Soat va uzuklarni yechib, qo'l yuvish", 'Atir sepish', 'Shirinlik yeyish', 'Smartfonni olib kirish'], exp: "Taqinchoqlar begona jism aralashishiga sabab bo'ladi, shuning uchun ularni yechib, qo'l yuvib, rolik bilan tozalanib kiriladi." },
      vi: { q: 'Trước khi vào khu vực làm việc trong nhà máy thực phẩm, cần làm gì?', choices: ['Tháo đồng hồ, nhẫn và rửa tay', 'Xịt nước hoa', 'Ăn vặt', 'Mang điện thoại vào'], exp: 'Phụ kiện có thể gây lẫn dị vật nên phải tháo ra, rửa tay và lăn bụi trước khi vào.' },
      id: { q: 'Apa yang dilakukan sebelum masuk area kerja pabrik makanan?', choices: ['Melepas jam tangan dan cincin, lalu cuci tangan', 'Memakai parfum', 'Makan camilan', 'Membawa ponsel'], exp: 'Aksesori bisa menyebabkan kontaminasi benda asing, jadi lepaskan, cuci tangan, dan gunakan roller sebelum masuk.' },
    },
  },
  {
    id: 'inshoku-3', sector: 'inshoku', category: 'knowledge',
    q: '冷蔵で保存する食品の温度管理として、一般的に正しいのはどれですか。',
    choices: ['10℃以下', '20℃以下', '30℃以下', '温度は関係ない'],
    answer: 0,
    exp: '一般的に冷蔵は10℃以下、冷凍は−15℃以下で保存します。',
    tr: {
      en: { q: 'Which is generally correct for the temperature of refrigerated food?', choices: ['10°C or below', '20°C or below', '30°C or below', 'Temperature does not matter'], exp: 'Generally, refrigerate at 10°C or below and freeze at −15°C or below.' },
      uz: { q: "Sovutgichda saqlanadigan oziq-ovqat harorati uchun odatda qaysi biri to'g'ri?", choices: ['10℃ va undan past', '20℃ va undan past', '30℃ va undan past', "Haroratning ahamiyati yo'q"], exp: 'Odatda sovutgichda 10℃ dan past, muzlatgichda −15℃ dan past haroratda saqlanadi.' },
      vi: { q: 'Nhiệt độ bảo quản thực phẩm trong tủ lạnh thông thường là bao nhiêu?', choices: ['Dưới 10℃', 'Dưới 20℃', 'Dưới 30℃', 'Nhiệt độ không quan trọng'], exp: 'Thông thường, bảo quản lạnh dưới 10℃, đông lạnh dưới −15℃.' },
      id: { q: 'Mana yang umumnya benar untuk suhu penyimpanan makanan berpendingin?', choices: ['10℃ atau kurang', '20℃ atau kurang', '30℃ atau kurang', 'Suhu tidak penting'], exp: 'Umumnya, simpan dingin pada 10℃ ke bawah dan beku pada −15℃ ke bawah.' },
    },
  },
  {
    id: 'inshoku-4', sector: 'inshoku', category: 'knowledge',
    q: '「先入れ先出し」の意味として正しいのはどれですか。',
    choices: ['新しい原料から先に使う', '先に入れた（古い）原料から先に使う', '安い原料から先に使う', '好きな順番で使う'],
    answer: 1,
    exp: '先に入荷したものから使うことで、期限切れやロスを防ぎます（FIFO）。',
    tr: {
      en: { q: 'What does "first in, first out" mean?', choices: ['Use new materials first', 'Use materials that came in first (older ones) first', 'Use cheaper materials first', 'Use in any order you like'], exp: 'Using older stock first prevents expiry and waste (FIFO).' },
      uz: { q: "«Birinchi kelgan — birinchi ishlatiladi» (先入れ先出し) ma'nosi qaysi?", choices: ['Yangi xomashyoni birinchi ishlatish', 'Avval kelgan (eski) xomashyoni birinchi ishlatish', 'Arzon xomashyoni birinchi ishlatish', 'Xohlagan tartibda ishlatish'], exp: "Avval kelganini birinchi ishlatish muddati o'tib ketish va isrofning oldini oladi (FIFO)." },
      vi: { q: '"Nhập trước xuất trước" có nghĩa là gì?', choices: ['Dùng nguyên liệu mới trước', 'Dùng nguyên liệu nhập trước (cũ hơn) trước', 'Dùng nguyên liệu rẻ trước', 'Dùng theo thứ tự tuỳ thích'], exp: 'Dùng hàng nhập trước giúp tránh hết hạn và lãng phí (FIFO).' },
      id: { q: 'Apa arti "pertama masuk, pertama keluar"?', choices: ['Gunakan bahan baru lebih dulu', 'Gunakan bahan yang masuk lebih dulu (lama) lebih dulu', 'Gunakan bahan murah lebih dulu', 'Gunakan sesuka hati'], exp: 'Menggunakan stok lama lebih dulu mencegah kedaluwarsa dan pemborosan (FIFO).' },
    },
  },

  // ───────────── 農業 ─────────────
  {
    id: 'nogyo-1', sector: 'nogyo', category: 'knowledge',
    q: '育てた苗を畑に植えることを何といいますか。',
    choices: ['収穫', '定植', '出荷', '剪定'],
    answer: 1,
    exp: '苗を本来育てる場所（畑）に植えることを「定植（ていしょく）」といいます。',
    tr: {
      en: { q: 'What is it called to plant grown seedlings into the field?', choices: ['Harvest', 'Transplanting (teishoku)', 'Shipping', 'Pruning'], exp: 'Planting seedlings in their final growing place is called "teishoku" (transplanting).' },
      uz: { q: "O'stirilgan ko'chatni dalaga ekish nima deb ataladi?", choices: ["Hosil yig'ish", "Ko'chat o'tqazish (定植)", "Jo'natish", 'Butash'], exp: "Ko'chatni doimiy o'sadigan joyga (dalaga) ekish «定植 (teishoku)» deyiladi." },
      vi: { q: 'Việc trồng cây giống ra ruộng gọi là gì?', choices: ['Thu hoạch', 'Trồng cố định (teishoku)', 'Xuất hàng', 'Tỉa cành'], exp: 'Trồng cây giống vào nơi sinh trưởng chính thức gọi là "teishoku".' },
      id: { q: 'Apa sebutan untuk menanam bibit ke ladang?', choices: ['Panen', 'Penanaman tetap (teishoku)', 'Pengiriman', 'Pemangkasan'], exp: 'Menanam bibit ke tempat tumbuh permanennya disebut "teishoku".' },
    },
  },
  {
    id: 'nogyo-2', sector: 'nogyo', category: 'safety',
    q: '農薬を散布するときの正しい行動はどれですか。',
    choices: ['半袖で作業する', 'マスク・ゴーグル・手袋を着用する', '風が強い日に散布する', '散布後は手を洗わない'],
    answer: 1,
    exp: '農薬が体に付かないよう保護具を着用し、風の弱い日に散布し、作業後は手や顔を洗います。',
    tr: {
      en: { q: 'What is the correct action when spraying pesticides?', choices: ['Work in short sleeves', 'Wear a mask, goggles and gloves', 'Spray on windy days', "Don't wash hands after spraying"], exp: 'Wear protective gear, spray on calm days, and wash hands and face afterwards.' },
      uz: { q: "Pestitsid sepayotganda to'g'ri harakat qaysi?", choices: ['Kalta yengda ishlash', "Niqob, ko'zoynak va qo'lqop taqish", 'Shamolli kunda sepish', "Sepgandan keyin qo'l yuvmaslik"], exp: "Himoya vositalarini taqing, shamolsiz kunda seping, ishdan keyin qo'l va yuzingizni yuving." },
      vi: { q: 'Hành động đúng khi phun thuốc bảo vệ thực vật là gì?', choices: ['Mặc áo ngắn tay', 'Đeo khẩu trang, kính bảo hộ và găng tay', 'Phun vào ngày gió mạnh', 'Không rửa tay sau khi phun'], exp: 'Mặc đồ bảo hộ, phun vào ngày ít gió và rửa tay, mặt sau khi làm.' },
      id: { q: 'Tindakan yang benar saat menyemprot pestisida adalah?', choices: ['Bekerja dengan lengan pendek', 'Memakai masker, kacamata pelindung, dan sarung tangan', 'Menyemprot saat angin kencang', 'Tidak cuci tangan setelah menyemprot'], exp: 'Pakai alat pelindung, semprot saat angin tenang, dan cuci tangan serta wajah setelahnya.' },
    },
  },
  {
    id: 'nogyo-3', sector: 'nogyo', category: 'knowledge',
    q: '家畜（牛）の健康管理で、毎日確認するべきことはどれですか。',
    choices: ['食欲や便の状態', '毛の色', '名前', '体の長さ'],
    answer: 0,
    exp: '食欲・便・呼吸・動きなどを毎日観察し、異常があればすぐ報告します。',
    tr: {
      en: { q: 'In livestock (cattle) health management, what should be checked every day?', choices: ['Appetite and condition of feces', 'Hair color', 'Name', 'Body length'], exp: 'Observe appetite, feces, breathing and movement daily, and report anything unusual immediately.' },
      uz: { q: "Chorva (sigir) sog'lig'ini nazorat qilishda har kuni nimani tekshirish kerak?", choices: ['Ishtahasi va najas holatini', 'Junining rangini', 'Ismini', "Tanasining uzunligini"], exp: "Ishtaha, najas, nafas olish va harakatni har kuni kuzating, g'ayrioddiy holat bo'lsa darhol xabar bering." },
      vi: { q: 'Trong quản lý sức khoẻ gia súc (bò), cần kiểm tra điều gì mỗi ngày?', choices: ['Sự thèm ăn và tình trạng phân', 'Màu lông', 'Tên', 'Chiều dài cơ thể'], exp: 'Quan sát hằng ngày sự thèm ăn, phân, hơi thở, cử động; báo cáo ngay nếu bất thường.' },
      id: { q: 'Dalam manajemen kesehatan ternak (sapi), apa yang harus diperiksa setiap hari?', choices: ['Nafsu makan dan kondisi kotoran', 'Warna bulu', 'Nama', 'Panjang badan'], exp: 'Amati nafsu makan, kotoran, napas, dan gerakan setiap hari; segera laporkan jika ada kelainan.' },
    },
  },
  {
    id: 'nogyo-4', sector: 'nogyo', category: 'safety',
    q: '夏の農作業で熱中症を防ぐために正しいのはどれですか。',
    choices: ['のどが渇くまで水を飲まない', 'こまめに水分と塩分をとり、休憩する', '帽子をかぶらない', '一番暑い昼の時間に長く作業する'],
    answer: 1,
    exp: 'のどが渇く前にこまめに水分・塩分をとり、日陰で休憩し、帽子をかぶります。',
    tr: {
      en: { q: 'Which is correct to prevent heatstroke during summer farm work?', choices: ["Don't drink until thirsty", 'Drink water and take salt often, and rest', "Don't wear a hat", 'Work long hours at the hottest midday time'], exp: 'Take water and salt often before getting thirsty, rest in the shade and wear a hat.' },
      uz: { q: "Yozda dala ishida issiq urishining oldini olish uchun qaysi biri to'g'ri?", choices: ['Chanqamaguncha suv ichmaslik', 'Tez-tez suv va tuz iste\'mol qilib, dam olish', 'Bosh kiyim kiymaslik', 'Eng issiq tush paytida uzoq ishlash'], exp: "Chanqashdan oldin tez-tez suv va tuz iste'mol qiling, soyada dam oling, bosh kiyim kiying." },
      vi: { q: 'Để phòng say nắng khi làm nông vào mùa hè, điều nào đúng?', choices: ['Không uống nước đến khi khát', 'Thường xuyên bổ sung nước, muối và nghỉ ngơi', 'Không đội mũ', 'Làm việc lâu vào giữa trưa nóng nhất'], exp: 'Uống nước, bổ sung muối thường xuyên trước khi khát, nghỉ trong bóng râm và đội mũ.' },
      id: { q: 'Mana yang benar untuk mencegah sengatan panas saat bertani di musim panas?', choices: ['Tidak minum sampai haus', 'Sering minum dan asupan garam, serta istirahat', 'Tidak memakai topi', 'Bekerja lama di siang hari terpanas'], exp: 'Sering minum dan asupan garam sebelum haus, istirahat di tempat teduh, dan pakai topi.' },
    },
  },

  // ───────────── 建設 ─────────────
  {
    id: 'kensetsu-1', sector: 'kensetsu', category: 'safety',
    q: '高さ2m以上の場所で作業するとき、必ず使うものはどれですか。',
    choices: ['墜落制止用器具（安全帯）', 'サンダル', '傘', 'イヤホン'],
    answer: 0,
    exp: '高さ2m以上の高所作業では、墜落を防ぐために墜落制止用器具（フルハーネス等）を使用します。',
    tr: {
      en: { q: 'What must you use when working at a height of 2 m or more?', choices: ['Fall arrest equipment (safety harness)', 'Sandals', 'Umbrella', 'Earphones'], exp: 'When working at 2 m or higher, use fall arrest equipment (e.g. full harness) to prevent falls.' },
      uz: { q: "2 m va undan baland joyda ishlaganda nimadan albatta foydalaniladi?", choices: ['Yiqilishdan himoya vositasi (xavfsizlik kamari)', 'Shippak', 'Soyabon', 'Quloqchin'], exp: "2 m dan baland joyda ishlaganda yiqilishning oldini olish uchun xavfsizlik kamari (to'liq jabduq) ishlatiladi." },
      vi: { q: 'Khi làm việc ở độ cao từ 2m trở lên, bắt buộc phải dùng gì?', choices: ['Thiết bị chống rơi (dây an toàn)', 'Dép xăng-đan', 'Ô', 'Tai nghe'], exp: 'Khi làm việc trên cao từ 2m, phải dùng thiết bị chống rơi (dây đai toàn thân...).' },
      id: { q: 'Apa yang wajib digunakan saat bekerja di ketinggian 2 m atau lebih?', choices: ['Alat penahan jatuh (sabuk pengaman)', 'Sandal', 'Payung', 'Earphone'], exp: 'Saat bekerja di ketinggian 2 m ke atas, gunakan alat penahan jatuh (full harness, dll.).' },
    },
  },
  {
    id: 'kensetsu-2', sector: 'kensetsu', category: 'communication',
    q: '作業を始める前に、みんなで危険を予想して話し合う活動を何といいますか。',
    choices: ['KY活動（危険予知活動）', '5S活動', '残業', '朝礼の歌'],
    answer: 0,
    exp: 'KY（危険予知）活動では、作業前に「どんな危険があるか」を話し合い、対策を決めます。',
    tr: {
      en: { q: 'What is the activity where everyone discusses and predicts hazards before starting work?', choices: ['KY activity (hazard prediction)', '5S activity', 'Overtime', 'Morning meeting song'], exp: 'In KY (kiken yochi) activities, workers discuss possible hazards before work and decide countermeasures.' },
      uz: { q: "Ishni boshlashdan oldin hamma birgalikda xavflarni oldindan aniqlab muhokama qiladigan faoliyat nima deb ataladi?", choices: ['KY faoliyati (xavfni oldindan aniqlash)', '5S faoliyati', 'Qo\'shimcha ish', "Ertalabki yig'ilish qo'shig'i"], exp: "KY (危険予知) faoliyatida ishdan oldin «qanday xavf bor?» muhokama qilinib, choralar belgilanadi." },
      vi: { q: 'Hoạt động mọi người cùng dự đoán và thảo luận về nguy hiểm trước khi làm việc gọi là gì?', choices: ['Hoạt động KY (dự đoán nguy hiểm)', 'Hoạt động 5S', 'Làm thêm giờ', 'Bài hát buổi họp sáng'], exp: 'Trong hoạt động KY, trước khi làm việc sẽ thảo luận "có nguy hiểm gì" và quyết định biện pháp.' },
      id: { q: 'Apa nama kegiatan diskusi bersama untuk memprediksi bahaya sebelum mulai bekerja?', choices: ['Kegiatan KY (prediksi bahaya)', 'Kegiatan 5S', 'Lembur', 'Lagu apel pagi'], exp: 'Dalam kegiatan KY, sebelum bekerja didiskusikan "bahaya apa yang ada" dan ditentukan tindakan pencegahannya.' },
    },
  },
  {
    id: 'kensetsu-3', sector: 'kensetsu', category: 'knowledge',
    q: '「玉掛け」とはどんな作業ですか。',
    choices: ['クレーンのフックに荷物をかけたり外したりする作業', '壁にペンキを塗る作業', '木を切る作業', '現場を掃除する作業'],
    answer: 0,
    exp: '玉掛けは、ワイヤーロープ等で荷をクレーンのフックにかけ外しする作業で、資格が必要です。',
    tr: {
      en: { q: 'What kind of work is "tamakake" (slinging)?', choices: ['Attaching and detaching loads to a crane hook', 'Painting walls', 'Cutting wood', 'Cleaning the site'], exp: 'Tamakake is attaching/detaching loads to a crane hook with wire ropes, and requires a qualification.' },
      uz: { q: "«玉掛け» (tamakake) qanday ish?", choices: ["Kran ilgagiga yukni ilish va yechish ishi", "Devorni bo'yash ishi", 'Yog\'och kesish ishi', 'Qurilish joyini tozalash ishi'], exp: "Tamakake — trosslar yordamida yukni kran ilgagiga ilish va yechish ishi bo'lib, malaka (guvohnoma) talab qilinadi." },
      vi: { q: '"Tamakake" (móc cáp) là công việc gì?', choices: ['Móc và tháo hàng vào móc cần cẩu', 'Sơn tường', 'Cắt gỗ', 'Dọn dẹp công trường'], exp: 'Tamakake là công việc móc/tháo hàng vào móc cẩu bằng cáp thép, cần có chứng chỉ.' },
      id: { q: 'Pekerjaan apa "tamakake" (slinging)?', choices: ['Memasang dan melepas muatan pada kait crane', 'Mengecat dinding', 'Memotong kayu', 'Membersihkan lokasi'], exp: 'Tamakake adalah memasang/melepas muatan ke kait crane dengan tali kawat, dan memerlukan sertifikat.' },
    },
  },
  {
    id: 'kensetsu-4', sector: 'kensetsu', category: 'rules',
    q: '「ヒヤリハット」の意味はどれですか。',
    choices: ['事故にはならなかったが、ヒヤッとしたりハッとしたりした出来事', '休みの日', '作業が早く終わること', '新しい道具'],
    answer: 0,
    exp: 'ヒヤリハットを報告・共有することで、大きな事故を未然に防ぎます。',
    tr: {
      en: { q: 'What does "hiyari-hatto" mean?', choices: ['A near miss — an event that startled you but did not become an accident', 'A day off', 'Finishing work early', 'A new tool'], exp: 'Reporting and sharing near misses helps prevent serious accidents.' },
      uz: { q: "«ヒヤリハット» (hiyari-hatto) ma'nosi qaysi?", choices: ["Baxtsiz hodisaga aylanmagan, lekin cho'chitgan holat (deyarli hodisa)", 'Dam olish kuni', 'Ishning erta tugashi', 'Yangi asbob'], exp: "Hiyari-hattoni xabar qilish va bo'lishish katta baxtsiz hodisalarning oldini oladi." },
      vi: { q: '"Hiyari-hatto" có nghĩa là gì?', choices: ['Sự việc suýt xảy ra tai nạn, khiến giật mình', 'Ngày nghỉ', 'Xong việc sớm', 'Dụng cụ mới'], exp: 'Báo cáo và chia sẻ các sự cố suýt xảy ra giúp phòng tránh tai nạn lớn.' },
      id: { q: 'Apa arti "hiyari-hatto"?', choices: ['Nyaris celaka — kejadian yang mengejutkan tetapi tidak menjadi kecelakaan', 'Hari libur', 'Pekerjaan selesai lebih cepat', 'Alat baru'], exp: 'Melaporkan dan berbagi kejadian nyaris celaka membantu mencegah kecelakaan besar.' },
    },
  },

  // ───────────── 工業製品製造業 ─────────────
  {
    id: 'kogyo-1', sector: 'kogyo', category: 'rules',
    q: '職場の「5S」に含まれないものはどれですか。',
    choices: ['整理', '整頓', '清掃', '速度'],
    answer: 3,
    exp: '5Sは「整理・整頓・清掃・清潔・しつけ」です。「速度」は含まれません。',
    tr: {
      en: { q: 'Which is NOT part of the workplace "5S"?', choices: ['Seiri (sort)', 'Seiton (set in order)', 'Seiso (shine/clean)', 'Sokudo (speed)'], exp: '5S = Seiri, Seiton, Seiso, Seiketsu, Shitsuke. "Speed" is not included.' },
      uz: { q: "Ish joyidagi «5S»ga qaysi biri KIRMAYDI?", choices: ['Seiri (saralash)', 'Seiton (tartibga solish)', 'Seiso (tozalash)', 'Sokudo (tezlik)'], exp: "5S = Seiri, Seiton, Seiso, Seiketsu, Shitsuke. «Tezlik» kirmaydi." },
      vi: { q: 'Điều nào KHÔNG thuộc "5S" nơi làm việc?', choices: ['Seiri (sàng lọc)', 'Seiton (sắp xếp)', 'Seiso (sạch sẽ)', 'Sokudo (tốc độ)'], exp: '5S = Seiri, Seiton, Seiso, Seiketsu, Shitsuke. "Tốc độ" không thuộc 5S.' },
      id: { q: 'Mana yang BUKAN bagian dari "5S" di tempat kerja?', choices: ['Seiri (memilah)', 'Seiton (menata)', 'Seiso (membersihkan)', 'Sokudo (kecepatan)'], exp: '5S = Seiri, Seiton, Seiso, Seiketsu, Shitsuke. "Kecepatan" tidak termasuk.' },
    },
  },
  {
    id: 'kogyo-2', sector: 'kogyo', category: 'safety',
    q: 'ボール盤など回転する機械で作業するとき、してはいけないことはどれですか。',
    choices: ['保護メガネをかける', '軍手をして回転部に近づく', '長い髪を帽子の中に入れる', '機械を止めてから切りくずを掃除する'],
    answer: 1,
    exp: '軍手（手袋）は回転部に巻き込まれる危険があるため、回転機械では使用禁止です。',
    tr: {
      en: { q: 'When working with rotating machines such as a drill press, what must you NOT do?', choices: ['Wear safety glasses', 'Approach the rotating part wearing work gloves', 'Put long hair inside a cap', 'Stop the machine before cleaning chips'], exp: 'Gloves can get caught in rotating parts, so they are prohibited on rotating machines.' },
      uz: { q: "Parmalash stanogi kabi aylanuvchi mashinada ishlaganda nima qilish MUMKIN EMAS?", choices: ["Himoya ko'zoynagini taqish", "Qo'lqop kiyib aylanuvchi qismga yaqinlashish", 'Uzun sochni shapka ichiga yig\'ish', "Mashinani to'xtatib, keyin qirindini tozalash"], exp: "Qo'lqop aylanuvchi qismga o'ralib qolish xavfi bor, shuning uchun aylanuvchi mashinalarda taqiqlanadi." },
      vi: { q: 'Khi làm việc với máy quay như máy khoan đứng, điều gì KHÔNG được làm?', choices: ['Đeo kính bảo hộ', 'Đeo găng tay vải và lại gần bộ phận quay', 'Búi tóc dài vào trong mũ', 'Tắt máy rồi mới dọn phoi'], exp: 'Găng tay có thể bị cuốn vào bộ phận quay nên bị cấm khi dùng máy quay.' },
      id: { q: 'Saat bekerja dengan mesin berputar seperti mesin bor, apa yang TIDAK boleh dilakukan?', choices: ['Memakai kacamata pelindung', 'Mendekati bagian berputar dengan sarung tangan kain', 'Memasukkan rambut panjang ke dalam topi', 'Mematikan mesin sebelum membersihkan serpihan'], exp: 'Sarung tangan bisa tergulung ke bagian berputar, jadi dilarang pada mesin berputar.' },
    },
  },
  {
    id: 'kogyo-3', sector: 'kogyo', category: 'communication',
    q: '上司への「報告・連絡・相談」をまとめて何といいますか。',
    choices: ['ホウレンソウ', 'カイゼン', 'ムダ', 'ダンドリ'],
    answer: 0,
    exp: '報告（ほう）・連絡（れん）・相談（そう）の頭文字から「ホウレンソウ」といいます。',
    tr: {
      en: { q: 'What is "report, inform, consult" (to your supervisor) called collectively?', choices: ['Hō-ren-sō', 'Kaizen', 'Muda', 'Dandori'], exp: 'From the first sounds of hōkoku (report), renraku (inform) and sōdan (consult): "Hōrensō".' },
      uz: { q: "Rahbarga «hisobot berish, xabar qilish, maslahatlashish» birgalikda nima deb ataladi?", choices: ['Hourensou', 'Kaizen', 'Muda', 'Dandori'], exp: "Houkoku (hisobot), renraku (xabar), soudan (maslahat) so'zlarining bosh bo'g'inlaridan «ホウレンソウ» deyiladi." },
      vi: { q: '"Báo cáo, liên lạc, thảo luận" với cấp trên được gọi chung là gì?', choices: ['Hourensou', 'Kaizen', 'Muda', 'Dandori'], exp: 'Ghép chữ đầu của hōkoku (báo cáo), renraku (liên lạc), sōdan (thảo luận) thành "Hōrensō".' },
      id: { q: '"Melapor, menghubungi, berkonsultasi" ke atasan disebut apa secara keseluruhan?', choices: ['Hourensou', 'Kaizen', 'Muda', 'Dandori'], exp: 'Dari suku kata awal hōkoku (lapor), renraku (hubungi), sōdan (konsultasi): "Hōrensō".' },
    },
  },
  {
    id: 'kogyo-4', sector: 'kogyo', category: 'knowledge',
    q: 'ノギスで測ることができるものはどれですか。',
    choices: ['部品の長さや直径', '電流', '重さ', '温度'],
    answer: 0,
    exp: 'ノギスは、部品の外径・内径・深さ・長さを測る測定器です。',
    tr: {
      en: { q: 'What can be measured with a vernier caliper?', choices: ['Length and diameter of parts', 'Electric current', 'Weight', 'Temperature'], exp: 'A caliper measures outer/inner diameter, depth and length of parts.' },
      uz: { q: "Shtangensirkul (ノギス) bilan nimani o'lchash mumkin?", choices: ['Detalning uzunligi va diametrini', 'Elektr tokini', "Og'irlikni", 'Haroratni'], exp: "Shtangensirkul detalning tashqi va ichki diametri, chuqurligi va uzunligini o'lchaydi." },
      vi: { q: 'Thước cặp (nogisu) có thể đo được gì?', choices: ['Chiều dài và đường kính chi tiết', 'Dòng điện', 'Trọng lượng', 'Nhiệt độ'], exp: 'Thước cặp dùng để đo đường kính ngoài, trong, độ sâu và chiều dài của chi tiết.' },
      id: { q: 'Apa yang dapat diukur dengan jangka sorong?', choices: ['Panjang dan diameter komponen', 'Arus listrik', 'Berat', 'Suhu'], exp: 'Jangka sorong mengukur diameter luar/dalam, kedalaman, dan panjang komponen.' },
    },
  },
];
