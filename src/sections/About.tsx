import Section, { Tag } from "../components/Section";
import Reveal from "../components/Reveal";
import { about } from "../data/site";

export default function About() {
  return (
    <Section id="about" eyebrow="01 — Introduction" title="About Me" alt>
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          {about.paragraphs.map((p) => (
            <p key={p} className="mb-5 text-[15px] leading-[1.9] text-(--color-ink-dim)">{p}</p>
          ))}
          <h3 className="font-display mt-8 text-xl font-semibold">Strengths</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {about.strengths.map((s) => <Tag key={s} accent>{s}</Tag>)}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="font-display text-xl font-semibold">Practical exposure</h3>
          <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm text-(--color-ink-dim) sm:grid-cols-2">
            {about.exposure.map((e) => (
              <li key={e}><span className="text-(--color-accent)">— </span>{e}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
