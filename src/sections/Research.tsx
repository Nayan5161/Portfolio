import Section from "../components/Section";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { research } from "../data/site";

export default function Research() {
  return (
    <Section id="research" eyebrow="05 — Ongoing" title="Security Research" alt>
      <Reveal><p className="-mt-6 mb-10 max-w-2xl text-sm leading-[1.8] text-(--color-ink-dim)">Both studies are work in progress. They are research and design efforts, with no completed evaluations or production deployments claimed.</p></Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {research.map((p, i) => <Reveal key={p.id} delay={i * 0.08}><ProjectCard p={p} /></Reveal>)}
      </div>
    </Section>
  );
}
