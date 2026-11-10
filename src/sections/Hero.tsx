import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/site";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const item = {
  hidden: { opacity: 1, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

function Visual() {
  const nodes = [
    ["Source", 40, 40], ["Parser", 200, 40], ["API", 360, 40],
    ["Collectors", 40, 140], ["Container", 200, 140], ["Evidence", 360, 140],
    ["Scan", 40, 240], ["Detect", 200, 240], ["Report", 360, 240],
  ] as const;
  return (
    <svg viewBox="0 0 440 300" role="img" aria-label="Abstract diagram of connected software and security components" className="w-full max-w-[460px]">
      <g stroke="currentColor" className="text-(--color-ink)/20" strokeWidth="1">
        {[40, 140, 240].map((y) => <line key={y} x1="70" y1={y} x2="400" y2={y} strokeDasharray="4 6" />)}
        {[70, 230, 390].map((x) => <line key={x} x1={x} y1="40" x2={x} y2="240" strokeDasharray="4 6" />)}
      </g>
      {nodes.map(([label, x, y], i) => (
        <g key={label}>
          <rect x={x} y={y - 18} width="60" height="36" rx="8" fill="var(--color-canvas-2)" stroke="var(--color-accent)" strokeOpacity={i % 4 === 0 ? 0.9 : 0.35} />
          <text x={x + 30} y={y + 4} textAnchor="middle" fontSize="10" fill="var(--color-ink-dim)" fontFamily="Satoshi, sans-serif">{label}</text>
        </g>
      ))}
      <circle r="4" fill="var(--color-accent)">
        <animateMotion dur="9s" repeatCount="indefinite" path="M70 40 L230 40 L390 40 L390 140 L230 140 L70 140 L70 240 L230 240 L390 240" />
      </circle>
    </svg>
  );
}

export default function Hero() {
  const social = [
    { href: profile.github, label: "GitHub", Icon: Github, ext: true },
    { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin, ext: true },
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail, ext: false },
  ];
  return (
    <motion.section id="home" aria-labelledby="hero-title" variants={container} initial="hidden" animate="show" className="relative overflow-hidden pb-16 pt-32 scroll-mt-16">
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-[900px] w-[700px] opacity-60"
        style={{ background: "radial-gradient(ellipse at center, var(--color-canvas-2) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.div variants={item} className="text-[13px] tracking-[0.28em] text-(--color-accent) uppercase">
              Cybersecurity · Software · Backend
            </motion.div>
            <motion.h1 id="hero-title" variants={item} className="font-display mt-3 text-6xl font-semibold leading-[0.95] sm:text-7xl lg:text-[88px]">
              NAYAN
              <br />
              GAIKWAD
            </motion.h1>
            <motion.p variants={item} className="font-display mt-5 text-xl italic text-(--color-ink) sm:text-2xl">
              {profile.title}
            </motion.p>
            <motion.p variants={item} className="mt-6 max-w-xl text-[15px] leading-[1.85] text-(--color-ink-dim)">
              {profile.intro}
            </motion.p>
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-(--color-accent) px-7 py-3.5 text-sm font-medium text-(--color-ink-on-paper) transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-ink)">
                View My Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-(--color-ink)/30 px-7 py-3.5 text-sm font-medium transition hover:border-(--color-accent) hover:text-(--color-accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent)">
                Contact Me
              </a>
            </motion.div>
            <motion.ul variants={item} className="mt-8 flex gap-3" aria-label="Social links">
              {social.map(({ href, label, Icon, ext }) => (
                <li key={label}>
                  <a href={href} aria-label={label} title={label} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="flex h-11 w-11 items-center justify-center rounded-full border border-(--color-ink)/20 text-(--color-ink-dim) transition hover:border-(--color-accent) hover:text-(--color-accent) focus-visible:outline-2 focus-visible:outline-(--color-accent)">
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
          <motion.div variants={item} className="relative flex justify-center">
            <div className="rounded-3xl border border-(--color-ink)/10 bg-(--color-canvas-2)/60 p-6">
              <Visual />
              <div className="mt-2 flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-(--color-ink-dim)">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" /> Undergraduate · Pune, India
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
