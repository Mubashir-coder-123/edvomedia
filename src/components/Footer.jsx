
const GradientText = ({ children, className = "" }) => (
  <span
    className={`bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent ${className}`}
    style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
  >
    {children}
  </span>
);

const footerLinks = [
  {
    heading: "Services",
    links: [
      { label: "Business Startup", href: "#" },
      { label: "Video Editing", href: "#" },
      { label: "Shopify Stores", href: "#" },
      { label: "Graphic Design", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Home", href: "#home" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Pricing", href: "#packages" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Instagram", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "WhatsApp", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

const socials = [
  { label: "ig", href: "#" },
  { label: "yt", href: "#" },
  { label: "wa", href: "#" },
  { label: "in", href: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-[rgba(139,60,247,0.15)] px-[6%] pt-16 pb-10">
      {/* Top grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
        {/* Brand */}
        <div>
          <span
            className="block text-[1.6rem] font-extrabold tracking-tight text-[#f0ede8] mb-4"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-1px" }}
          >
            EDVO <GradientText>MEDIA</GradientText>
          </span>
          <p className="text-[#8b84a0] text-sm leading-relaxed max-w-[280px]">
            We help entrepreneurs and brands launch, grow, and dominate online
            — through design, video, and e-commerce.
          </p>
        </div>

        {/* Link columns */}
        {footerLinks.map((col) => (
          <div key={col.heading}>
            <h4
              className="text-[#f0ede8] text-xs font-bold uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {col.heading}
            </h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#8b84a0] text-sm no-underline transition-colors duration-200 hover:text-[#f0ede8]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-[rgba(139,60,247,0.15)] text-xs text-[#8b84a0]">
        <span>© 2026 Edvo Media. All rights reserved.</span>
        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="w-9 h-9 rounded-lg border border-[rgba(139,60,247,0.15)] flex items-center justify-center text-[#8b84a0] text-xs font-bold no-underline transition-all duration-200 hover:text-[#c084fc] hover:border-[rgba(139,60,247,0.4)] hover:bg-[rgba(139,60,247,0.08)]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}