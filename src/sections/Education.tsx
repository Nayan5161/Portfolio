import { GraduationCap } from "lucide-react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { education as e } from "../data/site";

export default function Education() {
  return (
    <Section id="education" eyebrow="08 — Academics" title="Education">
      <Reveal>
        <article className="flex flex-col gap-6 rounded-2xl border border-(--color-ink)/12 bg-(--color-canvas-2)/50 p-8 sm:flex-row sm:items-start">
          <GraduationCap size={32} className="shrink-0 text-(--color-accent)" aria-hidden />
          <div className="flex-1">
            <h3 className="font-display text-2xl font-bold">{e.degree}</h3>
            <p className="mt-1 text-[15px]">{e.field}</p>
            <p className="mt-3 text-sm text-(--color-ink-dim)">{e.school}</p>
            <p className="text-sm text-(--color-ink-dim)">{e.place}</p>
          </div>
          <dl className="grid grid-cols-2 gap-6 text-sm sm:text-right">
            <div><dt className="text-[11px] tracking-[0.2em] uppercase text-(--color-ink-dim)">Graduation</dt><dd className="mt-1 font-medium">{e.graduation}</dd></div>
            <div><dt className="text-[11px] tracking-[0.2em] uppercase text-(--color-ink-dim)">CGPA</dt><dd className="mt-1 font-medium">{e.cgpa}</dd></div>
          </dl>
        </article>
      </Reveal>
    </Section>
  );
}
