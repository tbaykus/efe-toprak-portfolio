// ============================================================================
// PORTFOLYO VERİ DOSYASI (Buradan projelerini, yetkinliklerini ve linklerini kolayca düzenleyebilirsin)
// Kendi görsellerini veya videolarını `public/` klasörüne atıp
// image: "./dosya-adi.png" veya images: ["./gorsel1.png", "./gorsel2.png"] şeklinde güncelleyebilirsin.
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
  { id: "all", label: "TÜMÜ" },
  { id: "motion", label: "MOTION GRAPHICS" },
  { id: "illustration", label: "2B & İZOMETRİK İLLÜSTRASYON" },
  { id: "ui-branding", label: "UI & MARKA KİMLİĞİ" }
];

export const projects = [
  {
    id: "qaf-coffee-branding",
    title: "Qaf Coffee — Marka Kimliği, Logo ve Ambalaj Tasarımı",
    category: "ui-branding",
    categoryLabel: "UI & MARKA KİMLİĞİ",
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
    tools: ["ADOBE ILLUSTRATOR", "PHOTOSHOP"],
    gradient: "from-amber-600/40 via-stone-900/70 to-slate-950",
    accentColor: "#f59e0b",
    previewType: "brand-identity",
    featured: true,
    image: "./qaf_mckp.png",
    images: [
      "./qaf_mckp.png",
      "./qaf_siyah.png",
      "./qaf_alt.png"
    ]
  },
  {
    id: "ieu-esports-reels",
    title: "İEÜ Espor Kulübü — Neon Reels Tanıtım Videosu",
    category: "motion",
    categoryLabel: "MOTION GRAPHICS",
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
    tools: ["AFTER EFFECTS", "PREMIERE PRO", "ILLUSTRATOR"],
    gradient: "from-purple-600/40 via-indigo-900/60 to-slate-950",
    accentColor: "#a855f7",
    previewType: "motion-esports",
    featured: true
  }
];
