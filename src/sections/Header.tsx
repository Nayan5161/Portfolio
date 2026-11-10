import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "../data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let cur = nav[0].id;
      for (const n of nav) {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top <= 140) cur = n.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const link = (id: string, label: string, mobile = false) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={() => setOpen(false)}
      aria-current={active === id ? "true" : undefined}
      className={`transition-colors focus-visible:outline-2 focus-visible:outline-(--color-accent) ${
        mobile ? "block py-3 text-base" : "text-[11px] tracking-[0.18em] uppercase"
      } ${active === id ? "text-(--color-accent)" : "text-(--color-ink-dim) hover:text-(--color-ink)"}`}
    >
      {label}
    </a>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "bg-(--color-canvas)/92 backdrop-blur border-b border-(--color-ink)/10" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-display text-lg font-bold tracking-wide">
          NG<span className="text-(--color-accent)">.</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
          {nav.map((n) => link(n.id, n.label))}
        </nav>
        <button
          type="button"
          className="rounded-md p-2 lg:hidden focus-visible:outline-2 focus-visible:outline-(--color-accent)"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="mx-auto max-w-6xl border-t border-(--color-ink)/10 px-6 pb-4 lg:hidden">
          {nav.map((n) => link(n.id, n.label, true))}
        </nav>
      )}
    </header>
  );
}
