import React, { useState } from "react";
import {
  ArrowUpRight,
  Download,
  Mail,
  Phone,
  MapPin,
  X,
  Menu,
  Play,
  Plus,
  Send
} from "lucide-react";
import {
  personalInfo,
  education,
  languages,
  experiences,
  skills,
  projectCategories,
  projects
} from "./data/portfolioData";

function ProjectArtwork({ type, image, images }) {
  const displayImage = image || (images && images[0]);
  if (displayImage) {
    return (
      <img
        src={displayImage}
        alt="Proje Görseli"
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
      />
    );
  }

  switch (type) {
    case "motion-esports":
      return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
          <div className="absolute inset-0 bg-swiss-grid opacity-60" />
          <span className="absolute top-3 left-3 text-[10px] font-mono text-neutral-500">
            REC // 00:15:24
          </span>
          <span className="absolute bottom-3 right-3 text-[10px] font-mono text-neutral-500">
            9:16 VERTICAL
          </span>
          <div className="relative w-28 h-44 border border-white/40 bg-black p-3 flex flex-col justify-between group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-500">
            <div className="flex items-center justify-between border-b border-current/20 pb-1.5">
              <span className="text-[8px] font-mono tracking-widest">
                REELS
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
            </div>
            <div className="my-auto flex flex-col items-center text-center">
              <div className="w-9 h-9 border border-current flex items-center justify-center mb-2">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <div className="text-[10px] font-display font-bold tracking-widest">
                İEÜ ESPOR
              </div>
              <div className="text-[8px] font-mono opacity-60 mt-0.5">
                60 FPS • MOTION
              </div>
            </div>
            <div className="flex items-end justify-between gap-1 h-3 pt-1 border-t border-current/20">
              <span className="w-1 h-1.5 bg-current" />
              <span className="w-1 h-3 bg-current" />
              <span className="w-1 h-2 bg-current" />
              <span className="w-1 h-3 bg-current" />
              <span className="w-1 h-1 bg-current" />
              <span className="w-1 h-2.5 bg-current" />
            </div>
          </div>
        </div>
      );

    case "brand-identity":
      return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
          <div className="absolute inset-0 bg-swiss-grid opacity-60" />
          <span className="absolute top-3 left-3 text-[10px] font-mono text-neutral-500">
            ID // MONOGRAM
          </span>
          <div className="relative flex items-center gap-4 group-hover:scale-105 transition-transform duration-500">
            <div className="w-20 h-20 border border-white bg-white text-black flex items-center justify-center">
              <span className="font-display text-2xl font-bold tracking-tighter">
                QAF
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex gap-1.5">
                <span className="w-5 h-5 bg-white border border-white" />
                <span className="w-5 h-5 bg-neutral-500 border border-white/40" />
                <span className="w-5 h-5 bg-black border border-white/60" />
              </div>
              <div className="text-[10px] font-mono text-white border border-white/30 px-2 py-0.5 tracking-wider">
                BRAND SYSTEM
              </div>
              <div className="text-[9px] text-neutral-400 font-mono">
                #000000 • #FFFFFF
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
          <div className="absolute inset-0 bg-swiss-grid opacity-60" />
          <span className="absolute top-3 left-3 text-[10px] font-mono text-neutral-500">
            MOT // KEYFRAME
          </span>
          <div className="relative px-5 py-3.5 border border-white bg-black group-hover:bg-white group-hover:text-black transition-colors duration-500">
            <div className="text-[9px] font-mono opacity-60 mb-1 tracking-widest">
              BEZIER CURVE / 60FPS
            </div>
            <div className="font-display text-lg font-bold tracking-tight">
              KINETIC TYPE
            </div>
          </div>
        </div>
      );
  }
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeModalImageIndex, setActiveModalImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setActiveModalImageIndex(0);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      contactForm.subject || `Portfolyo İletişim — ${contactForm.name}`
    )}&body=${encodeURIComponent(
      `Gönderen: ${contactForm.name} (${contactForm.email})\n\n${contactForm.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  const navLinks = [
    { index: "01", label: "HAKKIMDA", href: "#hakkimda" },
    { index: "02", label: "SEÇİLİ İŞLER", href: "#projeler" },
    { index: "03", label: "YETKİNLİKLER", href: "#yetkinlikler" },
    { index: "04", label: "DENEYİM & EĞİTİM", href: "#deneyim" },
    { index: "05", label: "İLETİŞİM", href: "#iletisim" }
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f5f5] selection:bg-white selection:text-black">
      {/* TOP ARCHITECTURAL HEADER */}
      <header className="sticky top-0 z-40 bg-[#080808]/90 backdrop-blur-md border-b border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-4 group focus:outline-none"
          >
            <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-display font-bold text-base tracking-tighter group-hover:invert transition-all">
              ET
            </div>
            <div className="leading-tight">
              <span className="font-display font-bold text-sm sm:text-base tracking-wider block text-white">
                EFE TOPRAK IŞIKGEL
              </span>
              <span className="text-[11px] font-mono text-neutral-400 tracking-widest block">
                VISUAL COMMUNICATION DESIGN
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-baseline gap-1.5 text-xs tracking-widest text-neutral-400 hover:text-white transition-colors"
              >
                <span className="font-mono text-[10px] text-neutral-600 group-hover:text-white transition-colors">
                  {link.index}
                </span>
                <span className="font-medium">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-mono tracking-widest font-medium hover:bg-neutral-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              CV [PDF]
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
            aria-label="Menü"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-white/15 bg-[#080808] px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-white/10 text-sm font-mono tracking-widest text-neutral-200 hover:text-white"
              >
                <span>{link.label}</span>
                <span className="text-xs text-neutral-500">{link.index}</span>
              </a>
            ))}
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-black text-xs font-mono tracking-widest font-semibold"
            >
              <Download className="w-4 h-4" />
              CV İNDİR [PDF]
            </a>
          </div>
        )}
      </header>

      {/* MAIN ARCHITECTURAL GRID CONTAINER */}
      <main className="max-w-7xl mx-auto border-x border-white/15">
        {/* TOP METADATA STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/15 text-[11px] font-mono tracking-widest text-neutral-400">
          <div className="p-3.5 sm:px-6 border-r border-white/15 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white">DURUM: PROJELERE AÇIK</span>
          </div>
          <div className="p-3.5 sm:px-6 md:border-r border-white/15 truncate">
            KONUM: ADANA / İZMİR
          </div>
          <div className="p-3.5 sm:px-6 border-t md:border-t-0 border-r border-white/15 truncate">
            FAKÜLTE: İEÜ GÖRSEL İLETİŞİM TASARIMI
          </div>
          <div className="p-3.5 sm:px-6 border-t md:border-t-0 flex items-center justify-between">
            <span>EDITION</span>
            <span className="text-white">2026 // MONO</span>
          </div>
        </div>

        {/* HERO SECTION — SWISS MODERNIST GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/15">
          <div className="lg:col-span-8 p-6 sm:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/15">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-neutral-400">
                <span>[00 // GİRİŞ]</span>
                <span className="w-8 h-[1px] bg-white/30" />
                <span>PORTFOLYO & SEÇKİ</span>
              </div>

              <h1 className="font-display text-5xl sm:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.92] text-white">
                EFE TOPRAK
                <br />
                <span className="text-neutral-400">IŞIKGEL.</span>
              </h1>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                {personalInfo.bio}
              </p>
            </div>

            <div className="pt-12 mt-12 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-[10px] font-mono text-neutral-500 tracking-widest mb-1">
                  DİSİPLİN 01
                </div>
                <div className="font-display text-sm font-semibold tracking-wide text-white">
                  2B VEKTÖREL & İZOMETRİK İLLÜSTRASYON
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-500 tracking-widest mb-1">
                  DİSİPLİN 02
                </div>
                <div className="font-display text-sm font-semibold tracking-wide text-white">
                  MOTION GRAPHICS & 9:16 VIDEO
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-500 tracking-widest mb-1">
                  DİSİPLİN 03
                </div>
                <div className="font-display text-sm font-semibold tracking-wide text-white">
                  UI DESIGN & MARKA KİMLİĞİ
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projeler"
                className="inline-flex items-center gap-3 px-7 py-4 bg-white text-black font-mono text-xs tracking-widest font-semibold hover:bg-neutral-200 transition-colors"
              >
                <span>ÇALIŞMALARI İNCELE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#iletisim"
                className="inline-flex items-center gap-3 px-7 py-4 border border-white/30 text-white font-mono text-xs tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                <span>İLETİŞİME GEÇ</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between bg-[#0b0b0b]">
            <div className="relative group overflow-hidden border-b border-white/15 aspect-[4/5] w-full bg-black">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/80 border border-white/20 text-[10px] font-mono tracking-widest text-white">
                PORTRAIT // B&W EDITION
              </div>
              <div className="absolute bottom-4 right-4 px-2.5 py-1 bg-white text-black text-[10px] font-mono tracking-widest font-semibold">
                İZMİR, TR
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 font-mono text-xs">
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-neutral-500">ÜNİVERSİTE</span>
                <span className="text-white text-right">İZMİR EKONOMİ ÜNİ.</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-neutral-500">BÖLÜM</span>
                <span className="text-white text-right">GÖRSEL İLETİŞİM TASARIMI</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-neutral-500">E-POSTA</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-white hover:underline"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-neutral-500">TELEFON</span>
                <a
                  href={`tel:${personalInfo.phoneRaw}`}
                  className="text-white hover:underline"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 01 // ABOUT & DESIGN PHILOSOPHY */}
        <section
          id="hakkimda"
          className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/15"
        >
          <div className="lg:col-span-4 p-6 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/15 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-neutral-500 tracking-widest block mb-2">
                01 // YAKLAŞIM & ODAK
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                TASARIM PRATİĞİ
              </h2>
            </div>
            <p className="text-xs font-mono text-neutral-500 tracking-widest mt-8">
              GELENEKSEL İLKELER × MODERN DİJİTAL İŞ AKIŞI
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
            <div className="p-6 sm:p-10 flex flex-col justify-between hover:bg-white hover:text-black transition-colors duration-300 group">
              <div className="text-xs font-mono text-neutral-500 group-hover:text-neutral-600 mb-8">
                [01.1]
              </div>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight mb-3">
                  2B VEKTÖREL & İZOMETRİK
                </h3>
                <p className="text-sm text-neutral-400 group-hover:text-neutral-800 leading-relaxed">
                  Adobe Illustrator ve Affinity Designer (iPad) ile özel karakter
                  serileri, semboller ve mimari hassasiyette izometrik mekanlar
                  üretiyorum.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-10 flex flex-col justify-between hover:bg-white hover:text-black transition-colors duration-300 group">
              <div className="text-xs font-mono text-neutral-500 group-hover:text-neutral-600 mb-8">
                [01.2]
              </div>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight mb-3">
                  MOTION GRAPHICS
                </h3>
                <p className="text-sm text-neutral-400 group-hover:text-neutral-800 leading-relaxed">
                  After Effects ve Premiere Pro ile ritmik kurgu, kinetik
                  tipografi ve sosyal medya (9:16 Reels) için yüksek enerjili
                  animasyonlar tasarlıyorum.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-10 flex flex-col justify-between hover:bg-white hover:text-black transition-colors duration-300 group">
              <div className="text-xs font-mono text-neutral-500 group-hover:text-neutral-600 mb-8">
                [01.3]
              </div>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight mb-3">
                  UI & MARKA KİMLİĞİ
                </h3>
                <p className="text-sm text-neutral-400 group-hover:text-neutral-800 leading-relaxed">
                  Figma ile ızgara tabanlı modern arayüzler, etkileşimli
                  prototipler ve markalar için tutarlı görsel kimlik sistemleri
                  kurguluyorum.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02 // SELECTED WORKS */}
        <section id="projeler" className="border-b border-white/15">
          <div className="p-6 sm:p-10 lg:p-12 border-b border-white/15 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-neutral-500 tracking-widest block mb-2">
                02 // SEÇİLİ ÇALIŞMALAR (INDEX)
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
                PROJE ARŞİVİ
              </h2>
            </div>

            <div className="flex flex-wrap border border-white/20">
              {projectCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2.5 text-xs font-mono tracking-widest transition-colors border-r last:border-r-0 border-white/20 ${
                      isActive
                        ? "bg-white text-black font-semibold"
                        : "bg-transparent text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-white/15">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                onClick={() => handleOpenProject(project)}
                className="group cursor-pointer border-b border-r border-white/15 flex flex-col justify-between bg-[#080808] hover:bg-[#111111] transition-colors"
              >
                <div>
                  <div className="px-6 py-3.5 border-b border-white/15 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span>NO. 0{idx + 1}</span>
                    <span>{project.categoryLabel}</span>
                    <span>{project.year}</span>
                  </div>

                  <div className="relative h-64 sm:h-72 w-full border-b border-white/15 overflow-hidden">
                    <ProjectArtwork
                      type={project.previewType}
                      image={project.image}
                      images={project.images}
                    />
                    {project.images && project.images.length > 1 && (
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/80 border border-white/25 text-[10px] font-mono text-white tracking-widest">
                        +{project.images.length} GÖRSEL
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="text-[11px] font-mono tracking-widest text-neutral-400 mb-2">
                      {project.client} — {project.format}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:underline decoration-1 underline-offset-4 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-400 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-8 py-4 border-t border-white/15 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono tracking-wider px-2 py-0.5 border border-white/20 text-neutral-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <span className="w-8 h-8 border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors shrink-0 ml-2">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="px-6 sm:px-10 py-4 bg-[#0c0c0c] border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-neutral-400">
            <span>
              [BİLGİ] Kendi proje görsellerini eklemek için{" "}
              <code className="text-white">public/</code> klasörüne dosyalarını
              atıp <code className="text-white">src/data/portfolioData.js</code>{" "}
              dosyasını güncelleyebilirsin.
            </span>
            <span className="text-white">TOPLAM {filteredProjects.length} ESER</span>
          </div>
        </section>

        {/* 03 // SKILLS MATRIX */}
        <section
          id="yetkinlikler"
          className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/15"
        >
          <div className="lg:col-span-4 p-6 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/15 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-neutral-500 tracking-widest block mb-2">
                03 // TEKNİK YETKİNLİKLER
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                ARAÇLAR & ÜRETİM
              </h2>
              <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
                Adobe Creative Cloud ekosistemi, Figma, iPad üzerinde vektörel
                illüstrasyon ve 3B baskı süreçlerini kapsayan disiplinlerarası
                üretim matrisi.
              </p>
            </div>
            <div className="hidden lg:block pt-12 text-xs font-mono text-neutral-500 tracking-widest">
              INDEX // 01 — 0{skills.length}
            </div>
          </div>

          <div className="lg:col-span-8 divide-y divide-white/15">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-6 sm:px-10 sm:py-7 hover:bg-white/[0.03] transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                <div className="md:col-span-1 text-xs font-mono text-neutral-500">
                  0{idx + 1}
                </div>
                <div className="md:col-span-5">
                  <div className="text-[10px] font-mono tracking-widest text-neutral-400 mb-1">
                    {skill.category}
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-white">
                    {skill.name}
                  </h3>
                </div>
                <div className="md:col-span-4 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {skill.description}
                </div>
                <div className="md:col-span-2 flex flex-col items-start md:items-end justify-center">
                  <span className="font-mono text-sm font-bold text-white mb-1.5">
                    {skill.level}%
                  </span>
                  <div className="w-full h-1 bg-white/15 overflow-hidden">
                    <div
                      className="h-full bg-white"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04 // EXPERIENCE & EDUCATION */}
        <section
          id="deneyim"
          className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/15"
        >
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-white/15">
            <div className="p-6 sm:p-10 border-b border-white/15">
              <span className="text-xs font-mono text-neutral-500 tracking-widest block mb-2">
                04.A // PROFESYONEL & PROJE DENEYİMİ
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                DENEYİM
              </h2>
            </div>

            <div className="divide-y divide-white/15">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-6 sm:p-10 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono tracking-widest">
                    <span className="px-2.5 py-1 bg-white text-black font-semibold">
                      {exp.period}
                    </span>
                    <span className="text-neutral-400">
                      {exp.type} // {exp.location}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-mono text-neutral-400 mt-1">
                      {exp.company}
                    </div>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono tracking-wider px-2.5 py-1 border border-white/20 text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between divide-y divide-white/15">
            <div>
              <div className="p-6 sm:p-10 border-b border-white/15">
                <span className="text-xs font-mono text-neutral-500 tracking-widest block mb-2">
                  04.B // AKADEMİK GEÇMİŞ
                </span>
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  EĞİTİM
                </h2>
              </div>

              {education.map((edu, index) => (
                <div key={index} className="p-6 sm:p-10 space-y-5">
                  <div className="flex items-center justify-between text-xs font-mono tracking-widest">
                    <span className="px-2.5 py-1 border border-white text-white">
                      {edu.period}
                    </span>
                    <span className="text-neutral-400">{edu.location}</span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-xs font-mono tracking-wider text-neutral-400 mt-1">
                      {edu.faculty}
                    </p>
                    <p className="text-base font-semibold text-white mt-2">
                      {edu.degree}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-4 border-t border-white/15">
                    {edu.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm text-neutral-300 flex items-start gap-2.5"
                      >
                        <Plus className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="p-6 sm:p-10 space-y-5 bg-[#0b0b0b]">
              <div className="text-xs font-mono text-neutral-500 tracking-widest">
                04.C // YABANCI DİL YETKİNLİĞİ
              </div>

              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-baseline text-sm">
                      <span className="font-display font-bold tracking-wide text-white">
                        {lang.name}
                      </span>
                      <span className="font-mono text-xs text-neutral-400">
                        {lang.level}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/15 overflow-hidden">
                      <div
                        className="h-full bg-white"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 05 // CONTACT SECTION */}
        <section id="iletisim" className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/15 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-neutral-500 tracking-widest block mb-2">
                  05 // İLETİŞİM & İŞ BİRLİĞİ
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-none">
                  YENİ BİR PROJE BAŞLATALIM.
                </h2>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed">
                Marka kimliği, 2B vektörel ve izometrik illüstrasyon serileri,
                kullanıcı arayüzü (UI) tasarımı veya 9:16 sosyal medya motion
                graphics projeleri için doğrudan iletişime geçebilirsin.
              </p>
            </div>

            <div className="divide-y divide-white/15 border-t border-white/15 mt-10 font-mono text-xs">
              <a
                href={`mailto:${personalInfo.email}`}
                className="py-4 flex items-center justify-between hover:pl-2 transition-all group"
              >
                <span className="text-neutral-500 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-white" /> E-POSTA
                </span>
                <span className="text-white group-hover:underline">
                  {personalInfo.email}
                </span>
              </a>

              <a
                href={`tel:${personalInfo.phoneRaw}`}
                className="py-4 flex items-center justify-between hover:pl-2 transition-all group"
              >
                <span className="text-neutral-500 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-white" /> TELEFON
                </span>
                <span className="text-white group-hover:underline">
                  {personalInfo.phone}
                </span>
              </a>

              <div className="py-4 flex items-center justify-between">
                <span className="text-neutral-500 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-white" /> KONUM
                </span>
                <span className="text-white">ADANA / İZMİR</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 bg-[#0b0b0b]">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="text-xs font-mono tracking-widest text-neutral-400 border-b border-white/15 pb-3">
                DOĞRUDAN MESAJ FORMU
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-mono tracking-widest text-neutral-400 mb-2">
                    AD SOYAD *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    placeholder="Adınız Soyadınız"
                    className="w-full px-4 py-3.5 bg-black border border-white/25 text-white placeholder-neutral-600 focus:outline-none focus:border-white text-sm font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono tracking-widest text-neutral-400 mb-2">
                    E-POSTA *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    placeholder="ornek@mail.com"
                    className="w-full px-4 py-3.5 bg-black border border-white/25 text-white placeholder-neutral-600 focus:outline-none focus:border-white text-sm font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono tracking-widest text-neutral-400 mb-2">
                  PROJE KONUSU
                </label>
                <input
                  type="text"
                  value={contactForm.subject}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, subject: e.target.value })
                  }
                  placeholder="Motion Graphics / 2B Vektörel İllüstrasyon / UI Tasarımı"
                  className="w-full px-4 py-3.5 bg-black border border-white/25 text-white placeholder-neutral-600 focus:outline-none focus:border-white text-sm font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono tracking-widest text-neutral-400 mb-2">
                  MESAJINIZ *
                </label>
                <textarea
                  rows={4}
                  required
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, message: e.target.value })
                  }
                  placeholder="Proje kapsamı ve zaman planından bahsedebilirsiniz..."
                  className="w-full px-4 py-3.5 bg-black border border-white/25 text-white placeholder-neutral-600 focus:outline-none focus:border-white text-sm font-mono resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-mono text-xs tracking-widest font-semibold hover:bg-neutral-200 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>MESAJI GÖNDER</span>
              </button>

              {formSubmitted && (
                <p className="text-xs font-mono text-neutral-300 text-center pt-2">
                  E-posta istemciniz açılıyor ({personalInfo.email}).
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* MONOCHROME PROJECT DETAIL MODAL (WITH MULTI-IMAGE GALLERY SUPPORT) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/40 overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-white/20 flex items-center justify-between font-mono text-xs">
              <span className="tracking-widest text-neutral-400">
                {selectedProject.categoryLabel} // {selectedProject.year}
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 border border-white/30 text-white hover:bg-white hover:text-black transition-colors"
                aria-label="Kapat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative h-72 sm:h-96 w-full border-b border-white/20 bg-black flex items-center justify-center overflow-hidden">
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <img
                  src={selectedProject.images[activeModalImageIndex]}
                  alt={`${selectedProject.title} - ${activeModalImageIndex + 1}`}
                  className="w-full h-full object-contain p-4"
                />
              ) : (
                <ProjectArtwork
                  type={selectedProject.previewType}
                  image={selectedProject.image}
                />
              )}
            </div>

            {/* Thumbnail Switcher if project has multiple images */}
            {selectedProject.images && selectedProject.images.length > 1 && (
              <div className="px-6 py-3 bg-[#050505] border-b border-white/15 flex items-center gap-3 overflow-x-auto">
                <span className="text-[10px] font-mono text-neutral-500 tracking-widest mr-2">
                  GÖRSELLER:
                </span>
                {selectedProject.images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveModalImageIndex(idx)}
                    className={`w-16 h-12 border overflow-hidden shrink-0 transition-all ${
                      activeModalImageIndex === idx
                        ? "border-white scale-105"
                        : "border-white/20 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Önizleme ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <div className="text-xs font-mono tracking-widest text-neutral-400 mb-1">
                  {selectedProject.client} — {selectedProject.format}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-2.5 pt-2 border-t border-white/15">
                <div className="text-xs font-mono tracking-widest text-neutral-400">
                  PROJE DETAYLARI & ÇIKTILAR:
                </div>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-neutral-200 flex items-start gap-2.5"
                    >
                      <Plus className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono tracking-wider px-3 py-1 border border-white/30 text-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <a
                  href="#iletisim"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-mono text-xs tracking-widest font-semibold hover:bg-neutral-200 transition-colors"
                >
                  <span>BENZER PROJE TALEBİ</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ARCHITECTURAL FOOTER */}
      <footer className="border-t border-white/15 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} EFE TOPRAK IŞIKGEL — SWISS MODERNIST
            PORTFOLIO EDITION
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white transition-colors"
            >
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              CV [PDF]
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
