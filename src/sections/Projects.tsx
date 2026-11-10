import Section, { Tag } from "../components/Section";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { projects, archive } from "../data/site";

export default function Projects() {
  const [lead, ...rest] = projects;
  return (
    <Section id="projects" eyebrow="04 — Selected Work" title="Featured Projects">
      <Reveal className="mb-6"><ProjectCard p={lead} /></Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {rest.map((p, i) => <Reveal key={p.id} delay={i * 0.08}><ProjectCard p={p} /></Reveal>)}
      </div>
      <Reveal className="mt-14">
        <h3 className="font-display text-2xl font-semibold">Additional Academic Projects</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {archive.map((a) => (
            <div key={a.title} className="rounded-xl border border-(--color-ink)/12 p-5">
              <h4 className="font-display text-base font-semibold">{a.title}</h4>
              <p className="mt-2 text-sm leading-[1.7] text-(--color-ink-dim)">{a.text}</p>
              {a.tech.length > 0 && <div className="mt-3 flex flex-wrap gap-2">{a.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>}
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
