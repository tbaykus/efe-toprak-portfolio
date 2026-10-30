// ============================================================================
// PORTFOLYO VERİ DOSYASI (Buradan projelerini, yetkinliklerini ve linklerini kolayca düzenleyebilirsin)
// Kendi görsellerini veya videolarını `public/projects/` klasörüne atıp
// image: "/projects/dosya-adi.png" şeklinde güncelleyebilirsin.
// ============================================================================

export const personalInfo = {
  name: "Efe Toprak Işıkgel",
  title: "Görsel İletişim Tasarımcısı & İllüstratör",
  roles: [
    "Motion Graphics & Video Tasarımı",
    "2B Vektörel & İzometrik İllüstrasyon",
    "UI Tasarımı & Marka Kimliği"
  ],
  bio: "İzmir Ekonomi Üniversitesi Görsel İletişim Tasarımı bölümünde eğitimine devam eden, 2B vektörel illüstrasyon, hareketli grafik (motion graphics) ve kullanıcı arayüzü (UI) tasarımı alanlarına odaklanan bir tasarımcıyım. Adobe Creative Cloud araçları, Figma ve modern dijital üretim iş akışları konusunda pratik deneyime sahibim. Geleneksel tasarım ilkelerini yenilikçi tekniklerle birleştirerek markalar ve dijital medya için dinamik, estetik ve işlevsel görsel çözümler üretmeye odaklanıyorum.",
  phone: "+90 542 415 82 24",
  phoneRaw: "+905424158224",
  email: "isikgelt@gmail.com",
  location: "Adana / İzmir",
  profileImage: "./profile.png",
  cvUrl: "./Efe_Toprak_Isikgel_CV.pdf",
  socials: {
    behance: "https://www.behance.net/",
    dribbble: "https://dribbble.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/"
  }
};

export const education = [
  {
    institution: "İzmir Ekonomi Üniversitesi",
    faculty: "Güzel Sanatlar ve Tasarım Fakültesi",
    degree: "Görsel İletişim Tasarımı (Lisans)",
    period: "2024 – Devam Ediyor",
    location: "İzmir",
    highlights: [
      "2B Vektörel & İzometrik İllüstrasyon Stüdyoları",
      "Hareketli Grafik (Motion Graphics) ve Dijital Medya Üretimi",
      "Görsel Kimlik, Tipografi ve Kullanıcı Arayüzü (UI) Tasarımı"
    ]
  }
];

export const languages = [
  { name: "Türkçe", level: "Anadil", percentage: 100 },
  { name: "İngilizce", level: "İyi Derecede (B2 Seviyesi)", percentage: 78 }
];

export const experiences = [
  {
    id: 1,
    role: "Motion Graphics & Video Tasarımcısı (Proje)",
    company: "İzmir Ekonomi Üniversitesi Espor Kulübü",
    period: "Ekim 2026",
    location: "İzmir",
    type: "Proje Bazlı",
    description:
      "Kulübün sosyal medya (Reels) iletişimi için After Effects ve Premiere Pro kullanarak 9:16 dikey formatta animasyonlu tanıtım videosu tasarladım. Neon efektler ve dinamik geçişlerle kulüp kimliğini yansıtan enerjik bir görsel dil oluşturdum.",
    tags: ["After Effects", "Premiere Pro", "Motion Graphics", "9:16 Reels", "Neon VFX"]
  },
  {
    id: 2,
    role: "İllüstratör & Görsel Tasarımcı",
    company: "Bağımsız Tasarım Çalışmaları",
    period: "2023 – Halen",
    location: "İzmir",
    type: "Freelance / Bağımsız",
    description:
      "Marka kimliği (branding), logo ve kurumsal görsel dil tasarımı üzerine odaklanıyor; özel karakter ve sembol içeren tematik 2B vektörel seriler üretiyorum.",
    tags: ["Adobe Illustrator", "Affinity Designer", "Marka Kimliği", "2B Vektörel Seri", "Logo Tasarımı"]
  }
];

export const skills = [
  {
    name: "Adobe Illustrator & Photoshop",
    category: "Tasarım & İllüstrasyon",
    level: 95,
    description: "Vektörel karakter serileri, izometrik sahneler, poster ve marka kimliği üretimi.",
    accent: "from-purple-500 to-indigo-500"
  },
  {
    name: "Adobe After Effects & Premiere Pro",
    category: "Motion & Video",
    level: 90,
    description: "Dinamik geçişler, neon efektler, kinetik tipografi ve 9:16 sosyal medya (Reels) kurguları.",
    accent: "from-violet-500 to-blue-500"
  },
  {
    name: "Figma (UI Tasarımı & Prototipleme)",
    category: "UI / UX",
    level: 88,
    description: "Modern arayüz sistemleri, etkileşimli prototipler ve tasarım sistemleri (Design Systems).",
    accent: "from-blue-500 to-cyan-400"
  },
  {
    name: "Affinity Designer (iPad)",
    category: "Dijital İllüstrasyon",
    level: 60,
    description: "iPad iş akışıyla hassas vektör fırça çalışmaları, konsept eskizler ve sembol tasarımı.",
    accent: "from-fuchsia-500 to-purple-600"
  },
  {
    name: "2B Vektörel & İzometrik İllüstrasyon",
    category: "Uzmanlık",
    level: 95,
    description: "Derinlikli izometrik mekanlar, özel karakter tasarımları ve tematik illüstrasyon serileri.",
    accent: "from-purple-400 to-pink-500"
  },
  {
    name: "Hareketli Grafik (Motion Graphics)",
    category: "Uzmanlık",
    level: 70,
    description: "Logo animasyonları, espor/etkinlik tanıtım videoları ve görsel efekt kompozisyonları.",
    accent: "from-indigo-500 to-purple-500"
  },
  {
    name: "3B Baskı & Modelleme Hazırlığı",
    category: "Üretim",
    level: 80,
    description: "Dijital tasarımların fiziksel prototiplere ve 3B baskı çıktısına dönüştürülmesi.",
    accent: "from-blue-600 to-indigo-600"
  }
];

export const projectCategories = [
  { id: "all", label: "Tümü" },
  { id: "motion", label: "Motion Graphics" },
  { id: "illustration", label: "2B & İzometrik İllüstrasyon" },
  { id: "ui-branding", label: "UI & Marka Kimliği" }
];

export const projects = [
  {
    id: "qaf-coffee-branding",
    title: "Qaf Coffee — Marka Kimliği, Logo ve Ambalaj Tasarımı",
    category: "ui-branding",
    categoryLabel: "UI & Marka Kimliği",
    format: "Kurumsal Kimlik & Ambalaj (Mockup)",
    year: "2026",
    client: "Qaf Coffee",
    description:
      "Nitelikli kahve kültürü için hazırlanan Qaf Coffee markasının özgün logo tasarımı, siyah/alternatif versiyonları ve raf deneyimini öne çıkaran ambalaj (mockup) görselleştirme çalışmaları.",
    highlights: [
      "Modern tipografi ve minimalist hatlarla şekillendirilen özgün logo tasarımı",
      "Siyah ve alternatif zemin kullanımlarına tam uyumlu kurumsal renk paleti",
      "Raf ve paket (mockup) uygulamalarıyla tamamlanan bütüncül marka kimliği"
    ],
    tools: ["Adobe Illustrator", "Photoshop"],
    gradient: "from-amber-600/40 via-stone-900/70 to-slate-950",
    accentColor: "#f59e0b",
    previewType: "brand-identity",
    featured: true,
    images: [
  "/qaf_siyah.png",
  "/qaf_alt.png",
  "/qaf_mckp.png"
]

  },
  {
    id: "ieu-esports-reels",
    title: "İEÜ Espor Kulübü — Neon Reels Tanıtım Videosu",
    category: "motion",
    categoryLabel: "Motion Graphics",
    format: "9:16 Dikey Video (Reels)",
    year: "2026",
    client: "İzmir Ekonomi Üniversitesi Espor Kulübü",
    description:
      "Kulübün yeni dönem sosyal medya iletişimi için yüksek enerjili, neon glow efektleri, glitch geçişleri ve dinamik tipografi içeren 9:16 dikey tanıtım videosu.",
    highlights: [
      "After Effects ile özel neon saber ve glow kompozisyonları",
      "Premiere Pro ile ses tasarımına (SFX) senkronize ritmik kurgu",
      "Kulüp renkleriyle uyumlu mor ve siber-lacivert görsel atmosfer"
    ],
    tools: ["After Effects", "Premiere Pro", "Illustrator"],
    gradient: "from-purple-600/40 via-indigo-900/60 to-slate-950",
    accentColor: "#a855f7",
    previewType: "motion-esports",
    featured: true
  },
  {
    id: "isometric-cyber-studio",
    title: "Neo-İzmir: İzometrik Vektör Serisi",
    category: "illustration",
    categoryLabel: "2B & İzometrik İllüstrasyon",
    format: "Vektörel İllüstrasyon Serisi",
    year: "2025",
    client: "Bağımsız Tasarım Serisi",
    description:
      "Gece atmosferinde neon mor ve lacivert ışıklandırmalarla kurgulanan, mimari detayları ve özel karakterleri bir araya getiren izometrik 2B vektörel şehir ve stüdyo serisi.",
    highlights: [
      "30° izometrik ızgara sistemi üzerinde %100 ölçeklenebilir vektörel mimari",
      "Özel neon ışık kırılmaları ve katmanlı renk geçişleri",
      "Hem dijital ekran hem yüksek çözünürlüklü baskıya uygun kurgu"
    ],
    tools: ["Adobe Illustrator", "Affinity Designer (iPad)"],
    gradient: "from-indigo-600/40 via-purple-900/50 to-slate-950",
    accentColor: "#6366f1",
    previewType: "isometric-city",
    featured: true
  },
  {
    id: "thematic-character-pack",
    title: "Mitolojik & Siber Semboller — Karakter Koleksiyonu",
    category: "illustration",
    categoryLabel: "2B & İzometrik İllüstrasyon",
    format: "Karakter & Sembol Tasarımı",
    year: "2024 – 2026",
    client: "Bağımsız Tasarım Çalışmaları",
    description:
      "Marka kimlikleri ve dijital koleksiyonlar için geliştirilen, keskin geometrik hatları modern illüstrasyon diliyle buluşturan özel karakter ve ikonografi serisi.",
    highlights: [
      "Affinity Designer (iPad) ile konsept eskizden temiz vektöre üretim akışı",
      "Tutarlı çizgi kalınlığı ve modüler renk paleti sistemi",
      "Tekstil, çıkartma (sticker) ve dijital rozet kullanımına hazır paket"
    ],
    tools: ["Affinity Designer", "Adobe Illustrator", "Photoshop"],
    gradient: "from-fuchsia-600/35 via-purple-950/60 to-slate-950",
    accentColor: "#d946ef",
    previewType: "vector-character",
    featured: false
  },
  {
    id: "pulse-ui-design-system",
    title: "Pulse Play — Espor & Topluluk UI Tasarımı",
    category: "ui-branding",
    categoryLabel: "UI & Marka Kimliği",
    format: "Mobil & Web UI Prototipi",
    year: "2026",
    client: "Konsept / UI Projesi",
    description:
      "Turnuva takibi, takım profilleri ve canlı yayın akışları için karanlık mod (dark mode) odaklı, yüksek kontrastlı kullanıcı arayüzü ve etkileşimli Figma prototipi.",
    highlights: [
      "Yeniden kullanılabilir Figma bileşen kütüphanesi (Auto Layout & Variants)",
      "Karanlık temada okunabilirliği artıran neon vurgu hiyerarşisi",
      "Mikro etkileşimler ve akıcı ekran geçiş prototipleri"
    ],
    tools: ["Figma", "Adobe Illustrator"],
    gradient: "from-blue-600/40 via-indigo-950/60 to-slate-950",
    accentColor: "#3b82f6",
    previewType: "ui-dashboard",
    featured: true
  },
  {
    id: "nova-brand-identity",
    title: "Nova Creative — Marka Kimliği & Görsel Dil",
    category: "ui-branding",
    categoryLabel: "UI & Marka Kimliği",
    format: "Kurumsal Kimlik & Logo",
    year: "2025",
    client: "Bağımsız Marka Projesi",
    description:
      "Yenilikçi dijital girişimler için hazırlanan dinamik logo sistemi, tipografik hiyerarşi, sosyal medya şablonları ve kurumsal görsel kimlik rehberi.",
    highlights: [
      "Farklı zemin ve boyutlara uyum sağlayan esnek (responsive) amblem",
      "Kapsamlı renk paleti, tipografi ve sosyal medya kit tasarımı",
      "Sunum ve ambalaj mockup uygulamaları"
    ],
    tools: ["Adobe Illustrator", "Photoshop", "Figma"],
    gradient: "from-violet-600/40 via-slate-900/70 to-slate-950",
    accentColor: "#8b5cf6",
    previewType: "brand-identity",
    featured: false
  },
  {
    id: "kinetic-type-reel",
    title: "Kinetik Tipografi & Logo Animasyon Paketi",
    category: "motion",
    categoryLabel: "Motion Graphics",
    format: "Motion Reel (16:9 & 9:16)",
    year: "2025",
    client: "Dijital Medya & Sosyal Medya",
    description:
      "Marka logolarına ve kampanya sloganlarına hız, ritim ve karakter kazandıran özel hız eğrili (graph editor) kinetik tipografi ve logo reveal animasyonları.",
    highlights: [
      "Vektör katmanlarının Illustrator'dan After Effects'e kayıpsız aktarımı",
      "Özel hız grafikleri (Ease & Wizz / Graph Editor) ile akıcı hareket",
      "Sosyal medya ve yayın formatlarına uygun çoklu çıktı"
    ],
    tools: ["After Effects", "Illustrator", "Premiere Pro"],
    gradient: "from-cyan-500/30 via-blue-950/60 to-slate-950",
    accentColor: "#06b6d4",
    previewType: "kinetic-motion",
    featured: false
  }
];
