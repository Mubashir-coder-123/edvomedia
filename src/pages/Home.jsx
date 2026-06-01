import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

/* ── Scroll Reveal Hook ── */


function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("reveal-visible"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ── Service Card ── */
function ServiceCard({ icon, title, desc, tag }) {
  return (
    <div className="relative overflow-hidden bg-[#130f22] border border-purple-500/15 rounded-[18px] p-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(139,60,247,0.1)] group">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="w-13 h-13 rounded-[14px] bg-purple-500/15 flex items-center justify-center mb-5 text-2xl">{icon}</div>
      <h3 className="font-['Syne'] font-bold text-lg mb-2.5 text-[#f0ede8]">{title}</h3>
      <p className="text-[#8b84a0] text-sm leading-relaxed">{desc}</p>
      <span className="inline-block mt-4 text-xs font-semibold text-[#c084fc] bg-purple-500/12 px-3 py-1 rounded-full">{tag}</span>
    </div>
  );
}

/* ── Vid Card ── */
function VidCard({
  videoId,
  title,
  thumbnail,
  activeVideo,
  setActiveVideo,
}) {
  const isPlaying = activeVideo === videoId;

  return (
    <div className="aspect-video rounded-[14px] overflow-hidden border border-purple-500/15 bg-[#130f22]">
      {isPlaying ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          onClick={() => setActiveVideo(videoId)}
          className="relative w-full h-full cursor-pointer group"
        >
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center flex-col">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] flex items-center justify-center text-white text-xl">
              ▶
            </div>

            <span className="text-white font-bold mt-3">
              {title}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}


/* ── Review Card ── */
function ReviewCard({ initials, name, role, text, avatarGrad }) {
  return (
    <div className="bg-[#130f22] border border-purple-500/15 rounded-[18px] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4),0_0_30px_rgba(139,60,247,0.08)]">
      <div className="text-lg mb-4 tracking-widest bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent">★★★★★</div>
      <p className="text-sm leading-[1.75] text-[#c4bdd8] italic mb-6">"{text}"</p>
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-full flex items-center justify-center font-['Syne'] font-extrabold text-base text-white flex-shrink-0" style={{ background: avatarGrad }}>
          {initials}
        </div>
        <div>
          <div className="font-['Syne'] font-bold text-sm text-[#f0ede8]">{name}</div>
          <div className="text-xs text-[#8b84a0] mt-0.5">{role}</div>
        </div>
      </div>
    </div>
  );
}

/* ── Pkg Card ── */
function PkgCard({ name, tagline, price, period, features, featured, btnLabel }) {
  return (
    <div className={`relative rounded-[22px] p-10 transition-all duration-300 ${
      featured
        ? "border border-purple-500/50 bg-gradient-to-b from-purple-500/10 to-[#130f22] shadow-[0_0_0_1px_rgba(139,60,247,0.25),0_0_80px_rgba(139,60,247,0.18)] scale-[1.03]"
        : "bg-[#130f22] border border-purple-500/15 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
    }`}>
      {featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] text-white font-['Syne'] font-bold text-xs tracking-wide px-5 py-1.5 rounded-full whitespace-nowrap">
          ⚡ Most Popular
        </div>
      )}
      <div className="font-['Syne'] font-extrabold text-[1.4rem] mb-1.5 text-[#f0ede8]">{name}</div>
      <div className="text-[#8b84a0] text-sm mb-7">{tagline}</div>
      <div className="font-['Syne'] font-extrabold text-[2.8rem] tracking-tight leading-none mb-1 bg-gradient-to-br from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent">
        {price}<span className="text-xl text-[#8b84a0] font-normal" style={{ WebkitTextFillColor: "var(--muted, #8b84a0)" }}>/mo</span>
      </div>
      <div className="text-sm text-[#8b84a0] mb-7">{period}</div>
      <div className="h-px bg-purple-500/15 mb-6" />
      <ul className="list-none flex flex-col gap-3 mb-8">
        {features.map((f) => (
          <li key={f} className="text-sm text-[#c4bdd8] flex items-start gap-2.5">
            <span className="font-bold flex-shrink-0 mt-0.5 bg-gradient-to-br from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <button className={`w-full py-3.5 rounded-xl font-['Syne'] font-bold text-sm tracking-wide transition-all duration-200 cursor-pointer ${
        featured
          ? "bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(139,60,247,0.5)]"
          : "bg-transparent border border-purple-500/25 text-[#f0ede8] hover:border-purple-500/50 hover:bg-purple-500/6"
      }`}>
        {btnLabel}
      </button>
    </div>
  );
}

/* ══════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════ */
export default function Home() {
  useReveal();
   
  const [activeVideo, setActiveVideo] = useState(null);

  const services = [
    { icon: "🚀", title: "Startup Your Online Business", desc: "Complete business setup — from domain, hosting, branding to your first sale. We handle everything so you launch confidently.", tag: "Full Setup" },
    { icon: "🎬", title: "Video Editing", desc: "Cinematic edits, reels, YouTube videos, VSLs & ads. Content that stops the scroll and converts viewers into buyers.", tag: "Social & Ads" },
    { icon: "🛍️", title: "Shopify Store", desc: "Custom Shopify stores built to sell. Product pages, collections, payment setup, speed-optimized & ready to scale.", tag: "E-Commerce" },
    { icon: "🎨", title: "Graphics Designing", desc: "Logos, brand kits, social posts, ads & packaging — visuals that make your brand impossible to ignore.", tag: "Branding" },
  ];

 const vidCards = [
  {
    title: "E-Commerce Brand Launch",
    thumbnail: "https://sylius.com/wp-content/uploads/2024/05/16-9-1.png",
    videoId: "aN62U6BVYtY",
  },
  {
    title: "Long Form Video Editing",
    thumbnail: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/486869890/original/ee3bd11147496ebf5f5ea016bfff005845719788.png",
    videoId: "RlsxnU3LCis",
  },
  {
    title: "Shopify Store",
    thumbnail: "https://cdn.shopify.com/b/shopify-brochure2-assets/d617483c5e5cdd01ae8b4f2571c76f34.png?originalWidth=2400&originalHeight=1260",
    videoId: "8s6hFKD9sjM",
  },
  {
    title: "Graphics Designing",
    thumbnail: "https://img.magnific.com/free-vector/cartoon-graphic-design-landing-page_52683-70881.jpg?semt=ais_hybrid&w=740&q=80",
    videoId: "GbcR9Saq04U",
  },
  {
    title: "Instagram Reels ",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBl-2f4JhSY-Mo6TU4U2bdLNbZ92DKy-PcmQ&s",
    videoId: "b0bmL3TnCBY",
  },
  {
    title: "Digital marketing",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9i541SsEAYx0vs4h0QTrvLackZI9sQ30tig&s",
    videoId: "SfMT4Agg8Xw",
  },
];

  const reviews = [
    { initials: "AK", name: "Ahmed Khan", role: "Shopify Store Owner, Dubai", text: "EDVO MEDIA built my entire Shopify store in under a week. The design was clean, the checkout worked perfectly, and I made my first sale within 3 days of launch. Absolutely incredible team.", avatarGrad: "linear-gradient(135deg,#8b3cf7,#e040fb)" },
    { initials: "SR", name: "Sara Rehman", role: "Fashion Brand Founder, Karachi", text: "I gave them a rough idea of my brand and they came back with a full logo, color palette, and social kit that blew me away. My engagement on Instagram doubled the first week.", avatarGrad: "linear-gradient(135deg,#6b21d4,#c026d3)" },
    { initials: "MU", name: "Muhammad Usman", role: "YouTube Creator, Lahore", text: "Their video editing is next level. My YouTube channel went from 200 to 12,000 subscribers in 4 months. They understand what makes content perform, not just look good.", avatarGrad: "linear-gradient(135deg,#a855f7,#ec4899)" },
    { initials: "FA", name: "Fatima Aziz", role: "Online Coach, Islamabad", text: "They launched my entire online coaching business — website, brand, video intro, the works. I had my first paying client within 10 days. Best investment I've ever made.", avatarGrad: "linear-gradient(135deg,#7c3aed,#db2777)" },
    { initials: "ZM", name: "Zain Malik", role: "Dropshipper, Rawalpindi", text: "Professional, fast, and actually cares about your success. They redesigned my Shopify store and my conversion rate went from 0.8% to 3.2%. That's life-changing for an e-com store.", avatarGrad: "linear-gradient(135deg,#8b3cf7,#6d28d9)" },
    { initials: "NB", name: "Nida Baig", role: "E-Commerce Seller, Karachi", text: "I was skeptical at first, but after the free call I knew these guys were the real deal. The deliverables were on time, on brand, and on budget. Will 100% work with them again.", avatarGrad: "linear-gradient(135deg,#c026d3,#9333ea)" },
  ];

  const packages = [
    { name: "Basic", tagline: "Perfect to get started", price: "$149", period: "Billed monthly", featured: false, btnLabel: "Get Started", features: ["Shopify Store Setup (up to 10 products)", "Logo & Basic Brand Kit", "4 Edited Videos / Month", "8 Social Media Graphics", "Email Support", "1 Revision Round"] },
    { name: "Medium", tagline: "Scale with confidence", price: "$349", period: "Billed monthly", featured: true, btnLabel: "Book a Free Call", features: ["Full Shopify Store (unlimited products)", "Complete Brand Identity Kit", "12 Edited Videos / Month", "20 Social Media Graphics / Month", "1 VSL or Ad Video", "Priority WhatsApp Support", "3 Revision Rounds", "Monthly Strategy Call"] },
    { name: "Premium", tagline: "For serious growth", price: "$699", period: "Billed monthly", featured: false, btnLabel: "Get Started", features: ["Everything in Medium", "Custom Website + Landing Pages", "Unlimited Video Editing", "Unlimited Graphics", "Paid Ads Setup (Meta / TikTok)", "Dedicated Account Manager", "Unlimited Revisions", "Weekly Strategy Calls", "Priority 24hr Turnaround"] },
  ];

  return (
    <div className="bg-[#07050f] text-[#f0ede8] font-['DM_Sans'] overflow-x-hidden min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:none} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.6)} }
        .anim-1{animation:fadeUp .8s ease both}
        .anim-2{animation:fadeUp .9s .1s ease both}
        .anim-3{animation:fadeUp .9s .2s ease both}
        .anim-4{animation:fadeUp .9s .3s ease both}
        .pulse-dot{animation:pulse 1.5s infinite}
        .reveal{opacity:0;transform:translateY(30px);transition:opacity .7s ease,transform .7s ease}
        .reveal-visible{opacity:1;transform:none}
        .pkg-price-span { -webkit-text-fill-color: #8b84a0 !important; }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-[6%] pt-32 pb-20 relative overflow-hidden" id="home">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(139,60,247,.22) 0%, rgba(224,64,251,.08) 40%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(139,60,247,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,60,247,.5) 1px, transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)" }} />

        <div className="anim-1 inline-flex items-center gap-2 bg-purple-500/12 border border-purple-500/35 px-4 py-1.5 rounded-full text-xs font-medium text-[#c084fc] mb-7">
          <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-[#c084fc] inline-block" />
          🚀 Your Digital Growth Partner
        </div>
        <h1 className="anim-2 font-['Syne'] font-extrabold leading-[1.04] tracking-[-3px] text-[clamp(2.8rem,7.5vw,6.5rem)] text-[#f0ede8]">
          We Build<br />
          <em className="not-italic bg-gradient-to-br from-[#8b3cf7] via-[#e040fb] to-[#c084fc] bg-clip-text text-transparent">Online</em>
          <br />Empires
        </h1>
        <p className="anim-3 max-w-[560px] mx-auto mt-6 mb-11 text-lg text-[#8b84a0] leading-[1.7]">
          From zero to launch — we handle your Shopify store, video editing, branding & full digital presence so you can focus on growing.
        </p>
        <div className="anim-4 flex gap-3.5 justify-center flex-wrap">
           <Link to="/contact#book-call" className="bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] text-white font-['Syne'] font-bold text-base px-9 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(139,60,247,0.55)] no-underline inline-block">
              📅 Book Your Free Call Now
            </Link>
          <a href="#services" className="bg-transparent border border-purple-500/35 text-[#f0ede8] font-['Syne'] font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:border-purple-500 hover:bg-purple-500/8 no-underline">
            See Our Work ↓
          </a>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="reveal bg-[#130f22] border-y border-purple-500/15 px-4 md:px-[6%] py-8 md:py-10">
  <div className="flex justify-between items-center gap-2 md:gap-5 text-center">
    {[
      ["200+", "Happy Clients"],
      ["5★", "Average Rating"],
      ["3yr", "In Business"],
      ["98%", "Client Retention"],
    ].map(([num, label]) => (
      <div key={label} className="flex-1 min-w-0">
        <div className="font-['Syne'] font-extrabold text-xl sm:text-2xl md:text-[2.2rem] tracking-tight bg-gradient-to-br from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent">
          {num}
        </div>
        <div className="text-[#8b84a0] text-[10px] sm:text-xs md:text-sm mt-1 leading-tight">
          {label}
        </div>
      </div>
    ))}
  </div>
</div>

      {/* ── VSL ── */}
      <div className="max-w-[900px] mx-auto mt-16 mb-0 px-[6%] reveal">
        <div className="w-full aspect-video rounded-[20px] overflow-hidden border border-purple-500/15 relative shadow-[0_40px_100px_rgba(0,0,0,0.7),0_0_80px_rgba(139,60,247,0.15)]">
          <video width="100%" height="100%" controls poster="vsl_thumbnail.jpeg" className="block w-full h-full rounded-xl">
            <source src="vsl.mp4" />
            Browser video support nahi karta.
          </video>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="px-[6%] py-24" id="services">
        <div className="bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent font-['Syne'] text-xs font-bold tracking-[.15em] uppercase mb-3.5 inline-block">What We Do</div>
        <h2 className="font-['Syne'] font-extrabold text-[clamp(1.8rem,4vw,3rem)] tracking-[-1.5px] leading-[1.1] mb-4 text-[#f0ede8]">Start & Scale Your<br />Online Business</h2>
        <p className="text-[#8b84a0] text-base leading-[1.7] max-w-[540px]">Four high-impact services crafted to take you from idea to income.</p>
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {services.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="px-[6%] py-24" id="portfolio">
        <div className="bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent font-['Syne'] text-xs font-bold tracking-[.15em] uppercase mb-3.5 inline-block">Our Work</div>
        <h2 className="font-['Syne'] font-extrabold text-[clamp(1.8rem,4vw,3rem)] tracking-[-1.5px] leading-[1.1] mb-4 text-[#f0ede8]">Results We've<br />Delivered</h2>
        <p className="text-[#8b84a0] text-base leading-[1.7] max-w-[540px]">A glimpse into the projects we've built, edited, and designed for real clients.</p>
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
  {vidCards.map((v) => (
    <VidCard
      key={v.videoId}
      {...v}
      activeVideo={activeVideo}
      setActiveVideo={setActiveVideo}
    />
  ))}
</div>
        <div className="text-center mt-10">
          <Link to="/portfolio" className="bg-transparent border border-purple-500/35 text-[#f0ede8] font-['Syne'] font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:border-purple-500 hover:bg-purple-500/8 no-underline">
            View Full Portfolio →
          </Link>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="px-[6%] py-24">
        <div className="bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent font-['Syne'] text-xs font-bold tracking-[.15em] uppercase mb-3.5 inline-block">Testimonials</div>
        <h2 className="font-['Syne'] font-extrabold text-[clamp(1.8rem,4vw,3rem)] tracking-[-1.5px] leading-[1.1] mb-4 text-[#f0ede8]">What Our Clients<br />Are Saying</h2>
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {reviews.map((r) => <ReviewCard key={r.name} {...r} />)}
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="px-[6%] py-24" id="packages">
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent font-['Syne'] text-xs font-bold tracking-[.15em] uppercase mb-3.5 inline-block">Pricing</div>
          <h2 className="font-['Syne'] font-extrabold text-[clamp(1.8rem,4vw,3rem)] tracking-[-1.5px] leading-[1.1] mb-4 text-[#f0ede8]">Simple, Transparent<br />Packages</h2>
          <p className="text-[#8b84a0] text-base leading-[1.7] max-w-[540px] mx-auto">No hidden fees. No surprises. Pick your plan and let's get started.</p>
        </div>
       
       {/* cards upgrade  */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 items-stretch">
  {packages.map((p) => <PkgCard key={p.name} {...p} />)}
</div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="px-[6%] py-20 text-center" id="contact">
        <div className="max-w-[700px] mx-auto bg-[#130f22] border border-purple-500/30 rounded-[28px] px-10 py-16 relative overflow-hidden shadow-[0_0_100px_rgba(139,60,247,0.12)]">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%,rgba(139,60,247,.15) 0%,transparent 70%)" }} />
          <div className="relative">
            <div className="bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent font-['Syne'] text-xs font-bold tracking-[.15em] uppercase mb-3.5 inline-block">Let's Talk</div>
            <h2 className="font-['Syne'] font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-1.5px] mb-4 text-[#f0ede8]">Ready to Build Your<br />Online Business?</h2>
            <p className="text-[#8b84a0] text-base leading-[1.7] mb-9 max-w-[440px] mx-auto">Book a free 30-minute strategy call. We'll look at your goals and tell you exactly how we can help — no pressure, no fluff.</p>
            <Link to="/contact#book-call" className="bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] text-white font-['Syne'] font-bold text-base px-9 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(139,60,247,0.55)] no-underline inline-block">
              📅 Book Your Free Call Now
            </Link>
            <p className="text-[#8b84a0] text-xs mt-4">✓ 100% Free &nbsp;·&nbsp; ✓ No Commitment &nbsp;·&nbsp; ✓ Results-Focused</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}