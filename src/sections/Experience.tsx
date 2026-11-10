import Section, { Tag } from "../components/Section";
import Reveal from "../components/Reveal";
import { experience } from "../data/site";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03 — Internships" title="Professional Experience" alt>
      <ol className="relative space-y-8 border-l border-(--color-ink)/15 pl-6 sm:pl-10">
        {experience.map((e) => (
          <li key={e.company} className="relative">
            <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-(--color-accent) sm:-left-[47px]" aria-hidden />
            <Reveal>
              <article className="rounded-2xl border border-(--color-ink)/12 bg-(--color-canvas)/60 p-6 transition hover:border-(--color-accent)/50 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl font-bold">{e.company}</h3>
                  <span className="text-xs tracking-[0.18em] uppercase text-(--color-accent)">{e.duration}</span>
                </div>
                <p className="mt-1 text-[15px]">{e.role}</p>
                <p className="text-xs text-(--color-ink-dim)">{e.location}</p>
                {e.project && <p className="mt-3 text-sm text-(--color-ink-dim)">Project: <span className="text-(--color-ink)">{e.project}</span></p>}
                <ul className="mt-4 space-y-2 text-sm leading-[1.8] text-(--color-ink-dim)">
                  {e.points.map((p) => <li key={p}><span className="text-(--color-accent)">— </span>{p}</li>)}
                </ul>
                {e.tech.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">{e.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
