import Section, { Tag } from "../components/Section";
import Reveal from "../components/Reveal";
import { skills, grc } from "../data/site";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Toolbox" title="Technical Skills">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 0.06}>
            <article className="h-full rounded-2xl border border-(--color-ink)/12 bg-(--color-canvas-2)/50 p-6 transition hover:-translate-y-1 hover:border-(--color-accent)/50">
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              {g.note && <p className="mt-1 text-xs text-(--color-ink-dim)">{g.note}</p>}
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <div className="rounded-2xl border border-dashed border-(--color-ink)/20 p-6">
          <h3 className="font-display text-lg font-semibold">{grc.title}</h3>
          <p className="mt-1 text-xs text-(--color-ink-dim)">{grc.note}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {grc.items.map((s) => <Tag key={s}>{s}</Tag>)}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
