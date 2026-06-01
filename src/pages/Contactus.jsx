import { useRef, useEffect } from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";


 


const TEAM = [
  { initials: "SA", name: "Syed Ali", role: "Expert Video Editor", desc: "Specialist in cinematic edits, reels & YouTube content. 4+ years crafting stories that convert.", grad: "linear-gradient(135deg,#8b3cf7,#e040fb)" },
  { initials: "MK", name: "Mubashir Kareem", role: "Expert Web Developer", desc: "Crafting modern, responsive websites and web applications with clean code, exceptional performance, and user-focused design.", grad: "linear-gradient(135deg,#8b3cf7,#e040fb)" },
  { initials: "ZH", name: "Zill-e-Huma", role: "Senior Web Developer", desc: "Specialist in modern web development, responsive websites & custom web applications. 4+ years building fast, scalable digital experiences.", grad: "linear-gradient(135deg,#6b21d4,#c026d3)" },
  { initials: "AH", name: "Ahad Hussain", role: "SEO Expert", desc: "SEO Specialist focused on boosting search rankings, increasing organic traffic, and driving measurable business growth. 4+ years of proven results.", grad: "linear-gradient(135deg,#a855f7,#ec4899)" },
  { initials: "HN", name: "Huzaifa Nasir", role: "Shopify Expert", desc: "Shopify Specialist focused on building high-converting stores, custom themes, and optimized eCommerce experiences that drive sales.", grad: "linear-gradient(135deg,#7c3aed,#db2777)" },
  { initials: "BR", name: "Bilal Raza", role: "Content Strategist", desc: "Content calendars, captions & brand voice. Helps clients stay consistent and grow their audience.", grad: "linear-gradient(135deg,#4f46e5,#9333ea)" },
  { initials: "MT", name: "Mohammad Tahir", role: "Motion Designer", desc: "Animations, intros, and visual effects that make videos and brand content unforgettable.", grad: "linear-gradient(135deg,#c026d3,#9333ea)" },
  { initials: "AR", name: "Ali Raza", role: "Client Success Manager", desc: "Your main point of contact. Ensures every deliverable is on time, on brand, and exceeds expectations.", grad: "linear-gradient(135deg,#0ea5e9,#6366f1)" },
];

export default function ContactUs() {
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // thoda wait karo taake page render ho jaye
      }
    }
  }, [hash]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("reveal-visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Drag-to-scroll
  const onMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
    sliderRef.current.style.cursor = "grabbing";
  };
  const onMouseLeave = () => { isDown.current = false; if (sliderRef.current) sliderRef.current.style.cursor = "grab"; };
  const onMouseUp = () => { isDown.current = false; if (sliderRef.current) sliderRef.current.style.cursor = "grab"; };
  const onMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    sliderRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.5;
  };

  const slide = (dir) => sliderRef.current?.scrollBy({ left: dir * 260, behavior: "smooth" });

  return (
    <div className="bg-[#07050f] text-[#f0ede8] font-['DM_Sans'] overflow-x-hidden min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:none} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.6)} }
        .anim-1{animation:fadeUp .8s ease both}
        .anim-2{animation:fadeUp .9s .1s ease both}
        .anim-3{animation:fadeUp .9s .2s ease both}
        .pulse-dot{animation:pulse 1.5s infinite}
        .reveal{opacity:0;transform:translateY(30px);transition:opacity .7s ease,transform .7s ease}
        .reveal-visible{opacity:1;transform:none}
        .team-slider::-webkit-scrollbar{display:none}
      `}</style>

      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="pt-36 pb-16 px-[6%] text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(139,60,247,.18) 0%, rgba(224,64,251,.06) 40%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(139,60,247,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,60,247,.5) 1px, transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)" }} />
        <div className="relative">
          <div className="anim-1 bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent font-['Syne'] text-xs font-bold tracking-[.15em] uppercase mb-3.5 inline-block">Connect With Us</div>
          <h1 className="anim-2 font-['Syne'] font-extrabold text-[clamp(2.2rem,5vw,4rem)] tracking-[-2px] leading-[1.1] mb-4 text-[#f0ede8]">
            Meet the{" "}
            <em className="not-italic bg-gradient-to-br from-[#8b3cf7] via-[#e040fb] to-[#c084fc] bg-clip-text text-transparent">Team</em>
          </h1>
          <p className="anim-3 text-[#8b84a0] text-base max-w-[520px] mx-auto leading-[1.7]">
            The people behind EDVO MEDIA — passionate about building brands and delivering real results for our clients.
          </p>
        </div>
      </section>

      {/* ── CEO SECTION ── */}
      <section className="px-[6%] pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center reveal">
        {/* CEO Image */}
        <div className="relative">
          <div className="relative max-w-[400px] w-full aspect-[3/4] rounded-3xl overflow-hidden border border-purple-500/30 bg-gradient-to-br from-[#130f22] to-[#1e1538] shadow-[0_40px_100px_rgba(0,0,0,0.5),0_0_80px_rgba(139,60,247,0.12)] flex items-center justify-center mx-auto lg:mx-0">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(139,60,247,.2) 0%, transparent 60%)" }} />
            <img src="maaz.jpeg" className="w-full h-full object-cover relative z-10" alt="CEO" />
            {/* <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#8b3cf7] to-[#e040fb] flex items-center justify-center font-['Syne'] font-extrabold text-4xl text-white relative z-10">
              AA
            </div> */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-20 rounded-full pointer-events-none" style={{ background: "rgba(139,60,247,.3)", filter: "blur(40px)" }} />
          </div>
          {/* Badge */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-[calc(50%-200px+200px)] bg-[#07050f]/85 border border-purple-500/35 rounded-full px-5 py-2.5 flex items-center gap-2.5 whitespace-nowrap backdrop-blur-md z-20">
            <span className="pulse-dot w-2 h-2 rounded-full bg-[#8b3cf7] inline-block" />
            <span className="font-['Syne'] font-bold text-xs text-[#c084fc]">Founder &amp; CEO · EDVO MEDIA</span>
          </div>
        </div>

        {/* CEO Content */}
        <div>
          <div className="bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent font-['Syne'] text-xs font-bold tracking-[.15em] uppercase mb-3.5 inline-block">About the CEO</div>
          <h2 className="font-['Syne'] font-extrabold text-[clamp(2rem,3.5vw,3rem)] tracking-[-1.5px] leading-[1.1] mb-2 text-[#f0ede8]">Maaz Ali</h2>
          <div className="bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent font-['Syne'] font-bold text-sm tracking-widest uppercase mb-7 inline-block">Founder &amp; Chief Executive Officer</div>
          <p className="text-[#8b84a0] text-base leading-[1.8] mb-5">
           Maaz started EDVO MEDIA with one mission — to give entrepreneurs the same high-level digital tools that big brands use, without the big-agency price tag. With over 3 years of experience in e-commerce, video production, and brand building, he has personally helped 200+ businesses launch and scale their online presence across Pakistan, UAE, and beyond.
          </p>
          <p className="text-[#8b84a0] text-base leading-[1.8] mb-7">
            From building Shopify stores to crafting viral video content, Ali leads a team that treats every client project like their own business. His approach is simple: strategy first, execution second, results always.
          </p>
          {/* Stats */}
          <div className="flex gap-8 mb-9">
            {[["200+","Clients Served"],["3yr+","In Business"],["98%","Retention Rate"]].map(([num,label])=>(
              <div key={label}>
                <div className="font-['Syne'] font-extrabold text-[1.8rem] tracking-tight leading-none bg-gradient-to-br from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent">{num}</div>
                <div className="text-[#8b84a0] text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
          {/* Social */}
          <div className="flex gap-3">
            {[
  { label: "IG", href: "https://www.instagram.com/maaztheeditor?igsh=MWJrcWw5ZGZmb2M0aw%3D%3D&utm_source=qr" },
  { label: "YT", href: "https://youtube.com/@maaz-theeditor?si=uH9CiXGFsZ_kaTSm" },
  { label: "IN", href: "https://www.linkedin.com/in/syed-maaz-ali-86b9783b9?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
  { label: "WA", href: "https://wa.me/923283592300" },
].map((s) => (
  <a
    key={s.label}
    href={s.href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-lg border border-purple-500/15 flex items-center justify-center text-[#8b84a0] text-xs font-bold font-['Syne'] no-underline transition-all hover:text-[#c084fc] hover:border-purple-500/40 hover:bg-purple-500/8"
  >
    {s.label}
  </a>
))}
          </div>
        </div>
      </section>

      {/* ── TEAM SLIDER ── */}
      <section className="pb-24 overflow-hidden">
        <div className="px-[6%] mb-10">
          <div className="bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent font-['Syne'] text-xs font-bold tracking-[.15em] uppercase mb-3.5 inline-block">Our Team</div>
          <h2 className="font-['Syne'] font-extrabold text-[clamp(1.8rem,4vw,3rem)] tracking-[-1.5px] leading-[1.1] mb-4 text-[#f0ede8]">The People Who<br />Make It Happen</h2>
          <p className="text-[#8b84a0] text-base leading-[1.7] max-w-[540px]">A team of creatives, strategists & builders — all obsessed with your growth.</p>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="team-slider flex gap-5 overflow-x-auto scroll-snap-x-mandatory scrollbar-hide px-[6%] pb-5 cursor-grab select-none w-full"
          style={{ scrollSnapType: "x mandatory", msOverflowStyle: "none", scrollbarWidth: "none" }}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="min-w-[calc(50%-10px)] sm:min-w-[240px] bg-[#130f22] border border-purple-500/15 rounded-[20px] p-8 text-center flex-shrink-0 scroll-snap-align-start transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_30px_rgba(139,60,247,0.1)]  w-full"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center font-['Syne'] font-extrabold text-2xl text-white border-2 border-purple-500/30" style={{ background: m.grad }}>
                {m.initials}
              </div>
              <div className="font-['Syne'] font-bold text-base mb-1 text-[#f0ede8]">{m.name}</div>
              <div className="text-[#c084fc] text-sm font-medium mb-3.5">{m.role}</div>
              <p className="text-[#8b84a0] text-xs leading-[1.65] break-words w-full">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-3 mt-7 px-[6%]">
          <button onClick={() => slide(-1)} className="w-11 h-11 rounded-full bg-[#130f22] border border-purple-500/15 flex items-center justify-center cursor-pointer text-[#8b84a0] transition-all duration-200 hover:border-purple-500/40 hover:bg-purple-500/8 hover:text-[#c084fc]">
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button onClick={() => slide(1)} className="w-11 h-11 rounded-full bg-[#130f22] border border-purple-500/15 flex items-center justify-center cursor-pointer text-[#8b84a0] transition-all duration-200 hover:border-purple-500/40 hover:bg-purple-500/8 hover:text-[#c084fc]">
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
          </button>
        </div>
      </section>

      {/* ── CONTACT + BOOK A CALL ── */}
      <section className="px-[6%] pb-24" id="book-call">
        <div className="bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent font-['Syne'] text-xs font-bold tracking-[.15em] uppercase mb-3.5 inline-block">Get In Touch</div>
        <h2 className="font-['Syne'] font-extrabold text-[clamp(1.8rem,4vw,3rem)] tracking-[-1.5px] leading-[1.1] mb-4 text-[#f0ede8]">Let's Start a<br />Conversation</h2>
        <p className="text-[#8b84a0] text-base leading-[1.7] max-w-[540px] mb-12">Reach out via any channel — or book a free strategy call and let's talk about your goals.</p>

        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-[#130f22] border border-purple-500/15 rounded-[22px] p-10">
            <h3 className="font-['Syne'] font-extrabold text-[1.3rem] mb-7 text-[#f0ede8]">Contact Details</h3>
            {[
              { icon: "📧", label: "Email", value: <a href="mailto:hello@edvomedia.com" className="text-[#f0ede8] no-underline hover:text-[#c084fc] transition-colors">maaz@edvomedia.com</a> },
              { icon: "📱", label: "WhatsApp", value: <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="text-[#f0ede8] no-underline hover:text-[#c084fc] transition-colors">+92 328 3592300</a> },
              { icon: "📍", label: "Location", value: "Karachi, Pakistan · Available Worldwide" },
              { icon: "🕐", label: "Response Time", value: "Within 2–4 hours on business days" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 mb-6 last:mb-0">
                <div className="w-11 h-11 rounded-xl bg-purple-500/12 border border-purple-500/20 flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="font-['Syne'] font-bold text-xs tracking-widest uppercase text-[#8b84a0] mb-0.5">{item.label}</div>
                  <div className="text-sm text-[#f0ede8]">{item.value}</div>
                </div>
              </div>
            ))}
            <div className="flex items-start gap-4 mt-6">
              <div className="w-11 h-11 rounded-xl bg-purple-500/12 border border-purple-500/20 flex items-center justify-center text-xl flex-shrink-0">📸</div>
              <div>
                <div className="font-['Syne'] font-bold text-xs tracking-widest uppercase text-[#8b84a0] mb-2">Follow Us</div>
                <div className="flex gap-2.5">
                 {[
  { label: "IG", href: "https://www.instagram.com/maaztheeditor?igsh=MWJrcWw5ZGZmb2M0aw%3D%3D&utm_source=qr" },
  { label: "YT", href: "https://youtube.com/@maaz-theeditor?si=uH9CiXGFsZ_kaTSm" },
  { label: "IN", href: "https://www.linkedin.com/in/syed-maaz-ali-86b9783b9?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
  { label: "WA", href: "https://wa.me/923283592300" },
].map((s) => (
  <a
    key={s.label}
    href={s.href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-lg border border-purple-500/15 flex items-center justify-center text-[#8b84a0] text-xs font-bold font-['Syne'] no-underline transition-all hover:text-[#c084fc] hover:border-purple-500/40 hover:bg-purple-500/8"
  >
    {s.label}
  </a>
))}
                </div>
              </div>
            </div>
          </div>

          {/* Book a Call */}
          <div className="relative bg-[#130f22] border border-purple-500/30 rounded-[22px] p-10 overflow-hidden shadow-[0_0_80px_rgba(139,60,247,0.1)]">
            <div className="absolute top-0 left-0 right-0 h-48 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(139,60,247,.18) 0%, transparent 70%)" }} />
            <div className="relative">
              <h3 className="font-['Syne'] font-extrabold text-[1.5rem] tracking-tight mb-3 text-[#f0ede8]">📅 Book a Free Strategy Call</h3>
              <p className="text-[#8b84a0] text-sm leading-[1.7] mb-8">Get on a free 30-minute call with our team. We'll understand your business, identify quick wins, and tell you exactly how we can help — no pressure, no fluff.</p>
              <ul className="list-none flex flex-col gap-3 mb-9">
                {[
                  "100% Free — no credit card needed",
                  "30-minute focused strategy session",
                  "We'll audit your current online presence",
                  "Custom roadmap for your business",
                  "Zero commitment required",
                ].map((perk) => (
                  <li key={perk} className="text-sm text-[#c4bdd8] flex items-center gap-2.5">
                    <span className="font-bold flex-shrink-0 bg-gradient-to-br from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent">✓</span>
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/syedmaazofficail/30min"
        target="__blank"
                rel="noreferrer"
                className="block text-center w-full bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] text-white font-['Syne'] font-bold text-base py-5 rounded-xl no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(139,60,247,0.55)] shadow-[0_4px_24px_rgba(139,60,247,0.4)]"
              >
                📞 Schedule Your Free Call Now
              </a>
              <p className="text-center text-[#8b84a0] text-xs mt-3.5">✓ Spots are limited — we only take on select clients each month</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}