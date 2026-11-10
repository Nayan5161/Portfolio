import { Award, Trophy } from "lucide-react";
import Section, { Tag } from "../components/Section";
import Reveal from "../components/Reveal";
import { achievements, certification, training } from "../data/site";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="06 — Recognition" title="Achievements">
      <ul className="grid gap-4 md:grid-cols-2">
        {achievements.map((a, i) => (
          <li key={a}>
            <Reveal delay={i * 0.05}>
              <div className="flex h-full gap-4 rounded-2xl border border-(--color-ink)/12 bg-(--color-canvas-2)/50 p-5 transition hover:border-(--color-accent)/50">
                <Trophy size={20} className="mt-0.5 shrink-0 text-(--color-accent)" aria-hidden />
                <p className="text-sm leading-[1.7]">{a}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="07 — Credentials" title="Certifications & Training" alt>
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <h3 className="text-[11px] tracking-[0.22em] uppercase text-(--color-accent)">Certification</h3>
          <div className="mt-4 flex gap-4 rounded-2xl border border-(--color-accent)/40 p-6">
            <Award size={22} className="shrink-0 text-(--color-accent)" aria-hidden />
            <p className="font-display text-lg font-semibold">{certification}</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h3 className="text-[11px] tracking-[0.22em] uppercase text-(--color-accent)">Training & learning paths</h3>
          <div className="mt-4 flex flex-wrap gap-2">{training.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        </Reveal>
      </div>
    </Section>
  );
}
