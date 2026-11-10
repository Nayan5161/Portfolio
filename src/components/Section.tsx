import type { ReactNode } from "react";
import Reveal from "./Reveal";

export function Tag({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-[11px] tracking-[0.06em] ${
        accent
          ? "border-(--color-accent)/50 text-(--color-accent)"
          : "border-(--color-ink)/15 text-(--color-ink-dim)"
      }`}
    >
      {children}
    </span>
  );
}

export default function Section({
  id,
  eyebrow,
  title,
  alt = false,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  alt?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-16 py-20 ${alt ? "bg-(--color-canvas-2)" : ""}`}>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12">
          <div className="text-[12px] tracking-[0.28em] uppercase text-(--color-accent)">{eyebrow}</div>
          <h2 id={`${id}-title`} className="font-display mt-2 text-4xl font-bold leading-tight sm:text-5xl">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
