import { useState, useEffect } from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

const ALL_PROJECTS = [
  {
    id: 1, cat: "video-editing", title: "YouTube Channel Rebrand",
    desc: "Full intro, outro, thumbnails & reel package for a lifestyle creator.",
    tag: "Video Editing", gradient: "linear-gradient(135deg,#130f22 0%,#2a1f40 100%)",
    url: "https://www.youtube.com/embed/ahw-9huChlU?si=zOk0QpSIBMbB8nEX",
    videoId: "ahw-9huChlU",
  },
  {
    id: 2, cat: "video-editing", title: "Instagram Reels Package",
    desc: "8 viral-format reels with hooks, captions & audio sync for a fashion brand.",
    tag: "Video Editing", gradient: "linear-gradient(135deg,#1a1030 0%,#2e2050 100%)",
    url: "https://www.youtube.com/embed/hkTI_EO3UAU?si=vDBXvfLZ47pxo0iI",
    videoId: "hkTI_EO3UAU",
  },
  {
    id: 3, cat: "video-editing", title: "VSL Video Ad",
    desc: "High-converting video sales letter for a coaching program launch.",
    tag: "Video Editing", gradient: "linear-gradient(135deg,#1e0e2a 0%,#32184a 100%)",
    url: "https://www.youtube.com/embed/caszyLypTmo?si=UWBY014zkdCe27kx",
    videoId: "caszyLypTmo",
  },
  {
    id: 4, cat: "video-editing", title: "TikTok Content Series",
    desc: "12 short-form videos with trending hooks and subtitles for a fitness brand.",
    tag: "Video Editing", gradient: "linear-gradient(135deg,#160a28 0%,#280e40 100%)",
    url: "https://www.youtube.com/embed/V4sQgeEzsEc?si=M2rPmrnQss9ncCJe",
    videoId: "V4sQgeEzsEc",
  },
  {
    id: 5, cat: "startup-ecommerce", title: "E-Commerce Brand Launch",
    desc: "Complete startup package — domain, branding, store & first-week marketing.",
    tag: "Startup / E-Commerce", gradient: "linear-gradient(135deg,#1a1428 0%,#2a1f3d 100%)",
    url: "https://www.youtube.com/embed/GF21CB81GPc?si=kf6yxqrHHIZ-gJTO",
    videoId: "GF21CB81GPc",
  },
  {
    id: 6, cat: "startup-ecommerce", title: "Online Coaching Business",
    desc: "Website, brand identity, video intro & marketing funnel for a life coach.",
    tag: "Startup / E-Commerce", gradient: "linear-gradient(135deg,#0e1420 0%,#1e2a40 100%)",
    url: "https://www.youtube.com/embed/mMz_KSS0xaw?si=Tl9XJ51lTWOXIS7o",
    videoId: "mMz_KSS0xaw",
  },
  {
    id: 7, cat: "graphics", title: "Brand Identity Design",
    desc: "Logo, color palette, typography & full brand guide for a fashion startup.",
    tag: "Graphics Design", gradient: "linear-gradient(135deg,#160e28 0%,#251a40 100%)",
    url: "https://www.youtube.com/embed/ExL8jClroLQ?si=EJ92pK0YnBGHGedJ",
    videoId: "ExL8jClroLQ",
  },
  {
    id: 8, cat: "graphics", title: "Social Media Kit",
    desc: "30+ designed post templates for Instagram, Facebook & LinkedIn.",
    tag: "Graphics Design", gradient: "linear-gradient(135deg,#200e2a 0%,#3a1a48 100%)",
    url: "https://www.youtube.com/embed/CIj-ZDSjZ2E?si=DYDCVqc3ZU_qPKmh",
    videoId: "CIj-ZDSjZ2E",
  },
  {
    id: 9, cat: "graphics", title: "Product Packaging Design",
    desc: "Box, label & bag design for a local skincare brand going to retail.",
    tag: "Graphics Design", gradient: "linear-gradient(135deg,#181028 0%,#2c1c44 100%)",
    url: "https://www.youtube.com/embed/W8cdcGqd5aw?si=18KUCQLMRZk7GsrE",
    videoId: "W8cdcGqd5aw",
  },
  {
    id: 10, cat: "shopify", title: "Shopify Dropship Store",
    desc: "Custom theme, 50+ products, payment & shipping setup — ready to sell.",
    tag: "Shopify", gradient: "linear-gradient(135deg,#120e22 0%,#201835 100%)",
    url: "https://www.youtube.com/embed/Denf3N49Qx8?si=GDHtlDOJ-EldoxbM",
    videoId: "Denf3N49Qx8",
  },
  {
    id: 11, cat: "shopify", title: "Shopify Fashion Boutique",
    desc: "Premium store with lookbook layout, size guide & Instagram integration.",
    tag: "Shopify", gradient: "linear-gradient(135deg,#0e1020 0%,#1a1c38 100%)",
    url: "https://www.youtube.com/embed/JvA5j9yBjkk?si=v2wQqjV0ZvzGRop9",
    videoId: "JvA5j9yBjkk",
  },
  {
    id: 12, cat: "shopify", title: "Shopify Conversion Redesign",
    desc: "Revamped an existing store from 0.8% to 3.2% conversion rate.",
    tag: "Shopify", gradient: "linear-gradient(135deg,#141020 0%,#221a38 100%)",
    url: "https://www.youtube.com/embed/JvA5j9yBjkk?si=v2wQqjV0ZvzGRop9",
    videoId: "JvA5j9yBjkk",
  },
  {
    id: 13, cat: "digital-marketing", title: "Product Ad Campaign",
    desc: "Meta ads strategy, creatives & targeting for a beauty e-commerce brand.",
    tag: "Digital Marketing", gradient: "linear-gradient(135deg,#120e22 0%,#201835 100%)",
    url: "https://www.youtube.com/embed/JvA5j9yBjkk?si=v2wQqjV0ZvzGRop9",
    videoId: "JvA5j9yBjkk",
  },
  {
    id: 14, cat: "digital-marketing", title: "TikTok Ads Launch",
    desc: "Full TikTok paid campaign with UGC-style creatives for a new product drop.",
    tag: "Digital Marketing", gradient: "linear-gradient(135deg,#0e0c20 0%,#1c1838 100%)",
    url: "https://www.youtube.com/embed/JvA5j9yBjkk?si=v2wQqjV0ZvzGRop9",
    videoId: "JvA5j9yBjkk",
  },
];

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "video-editing", label: "Video Editing" },
  { key: "startup-ecommerce", label: "Startup & E-Commerce" },
  { key: "graphics", label: "Graphics Design" },
  { key: "shopify", label: "Shopify" },
  { key: "digital-marketing", label: "Digital Marketing" },
];

// ── PortCard ──
function PortCard({ id, title, desc, tag, gradient, url, videoId, activeVideo, setActiveVideo }) {
  const isPlaying = activeVideo === id;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="bg-[#130f22] border border-purple-500/15 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.55),0_0_40px_rgba(139,60,247,0.15)] hover:border-purple-500/40 group">

      <div className="aspect-video relative flex items-center justify-center overflow-hidden" style={{ background: gradient }}>
        {isPlaying ? (
          <iframe
            src={`${url}&autoplay=1&rel=0`}
            title={title}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            {/* YouTube Thumbnail */}
            <img
              src={thumbnailUrl}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                // agar thumbnail load na ho toh fallback gradient
                e.target.style.display = "none";
              }}
            />
            {/* Dark overlay thumbnail ke upar */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(14,11,26,0.15) 0%, rgba(7,5,15,0.55) 100%)" }} />
            {/* Play button */}
            <button
              onClick={() => setActiveVideo(id)}
              className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-[#8b3cf7] to-[#e040fb] flex items-center justify-center shadow-[0_0_0_14px_rgba(139,60,247,0.18),0_0_0_28px_rgba(139,60,247,0.07)] transition-transform duration-200 group-hover:scale-110 cursor-pointer border-none outline-none"
            >
              <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24" style={{ marginLeft: 4 }}>
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className="p-5 pb-6">
        <h3 className="font-['Syne'] font-bold text-base mb-1.5 text-[#f0ede8]">{title}</h3>
        <p className="text-[#8b84a0] text-sm leading-relaxed">{desc}</p>
        <span className="inline-block mt-3 text-xs font-semibold font-['Syne'] tracking-wide text-[#c084fc] bg-purple-500/12 px-3 py-1 rounded-full">{tag}</span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeCat, setActiveCat] = useState("all");
  const [search, setSearch] = useState("");
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("reveal-visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setActiveVideo(null);
  }, [activeCat, search]);

  const filtered = ALL_PROJECTS.filter((p) => {
    const catMatch = activeCat === "all" || p.cat === activeCat;
    const q = search.toLowerCase();
    const searchMatch = !q || p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q);
    return catMatch && searchMatch;
  });

  return (
    <div className="bg-[#07050f] text-[#f0ede8] font-['DM_Sans'] overflow-x-hidden min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:none} }
        .anim-1{animation:fadeUp .8s ease both}
        .anim-2{animation:fadeUp .9s .1s ease both}
        .anim-3{animation:fadeUp .9s .2s ease both}
        .reveal{opacity:0;transform:translateY(30px);transition:opacity .7s ease,transform .7s ease}
        .reveal-visible{opacity:1;transform:none}
      `}</style>

      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="pt-36 pb-14 px-[6%] text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(139,60,247,.18) 0%, rgba(224,64,251,.06) 40%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(139,60,247,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,60,247,.5) 1px, transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)" }} />
        <div className="relative">
          <div className="anim-1 bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent font-['Syne'] text-xs font-bold tracking-[.15em] uppercase mb-3.5 inline-block">Our Work</div>
          <h1 className="anim-2 font-['Syne'] font-extrabold text-[clamp(2.2rem,5vw,4rem)] tracking-[-2px] leading-[1.1] mb-4 text-[#f0ede8]">
            Our{" "}
            <em className="not-italic bg-gradient-to-br from-[#8b3cf7] via-[#e040fb] to-[#c084fc] bg-clip-text text-transparent">Portfolio</em>
          </h1>
          <p className="anim-3 text-[#8b84a0] text-base max-w-[520px] mx-auto leading-[1.7]">
            Real projects. Real results. Browse our work across video editing, e-commerce, branding, Shopify & digital marketing.
          </p>
          <div className="relative max-w-[560px] mx-auto mt-10">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects…"
              className="w-full bg-[#130f22] border border-purple-500/25 rounded-full pl-6 pr-14 py-4 font-['DM_Sans'] text-base text-[#f0ede8] outline-none transition-all duration-200 focus:border-purple-500/60 focus:shadow-[0_0_0_3px_rgba(139,60,247,0.12)] placeholder-[#8b84a0]"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-[#8b3cf7] to-[#e040fb] flex items-center justify-center cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY TABS ── */}
      <div className="flex flex-wrap gap-2.5 justify-center px-[6%] pt-8">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            onClick={() => setActiveCat(c.key)}
            className={`font-['Syne'] font-bold text-xs tracking-wide uppercase px-5 py-2.5 rounded-full cursor-pointer transition-all duration-200 border ${
              activeCat === c.key
                ? "bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] border-transparent text-white shadow-[0_4px_20px_rgba(139,60,247,0.4)]"
                : "bg-[#130f22] border-purple-500/15 text-[#8b84a0] hover:bg-purple-500/8 hover:border-purple-500/35 hover:text-[#f0ede8]"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* ── PORTFOLIO GRID ── */}
      <section className="px-[6%] pt-12 pb-24">
        {filtered.length === 0 ? (
          <div className="text-center text-[#8b84a0] font-['Syne'] text-base py-16">
            😕 No projects match your search. Try a different keyword.
          </div>
        ) : (
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <PortCard
                key={p.id}
                {...p}
                activeVideo={activeVideo}
                setActiveVideo={setActiveVideo}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}