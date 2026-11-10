import { useState } from "react";
import { ChevronDown, Lock } from "lucide-react";
import { Tag } from "./Section";
import type { Project } from "../data/site";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-[11px] tracking-[0.22em] uppercase text-(--color-accent)">{title}</h4>
      <div className="mt-2 text-sm leading-[1.8] text-(--color-ink-dim)">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return <ul className="space-y-1.5">{items.map((i) => <li key={i}><span className="text-(--color-accent)">— </span>{i}</li>)}</ul>;
}

export default function ProjectCard({ p }: { p: Project }) {
  const [open, setOpen] = useState(false);
  const panel = `panel-${p.id}`;
  return (
    <article className={`flex h-full flex-col rounded-2xl border bg-(--color-canvas-2)/50 p-6 transition hover:-translate-y-1 hover:border-(--color-accent)/50 sm:p-8 ${p.id === "auto-lab" ? "border-(--color-accent)/40" : "border-(--color-ink)/12"}`}>
      <div className="flex flex-wrap gap-2">{p.categories.map((c) => <Tag key={c} accent>{c}</Tag>)}</div>
      <h3 className="font-display mt-4 text-2xl font-bold leading-tight">{p.title}</h3>
      <p className="text-sm italic text-(--color-ink-dim)">{p.subtitle}</p>
      <p className="mt-4 text-sm leading-[1.8] text-(--color-ink-dim)">{p.summary}</p>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-(--color-ink-dim)">
        <span><span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-(--color-accent)" />{p.status}{p.period ? ` · ${p.period}` : ""}</span>
        <span className="inline-flex items-center gap-1"><Lock size={12} />{p.repo}</span>
      </div>
      {p.tech.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>}

      <button
        type="button"
        aria-expanded={open}
        aria-controls={panel}
        onClick={() => setOpen(!open)}
        className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-(--color-ink)/25 px-5 py-2.5 text-sm transition hover:border-(--color-accent) hover:text-(--color-accent) focus-visible:outline-2 focus-visible:outline-(--color-accent)"
      >
        {open ? "Hide details" : "View details"}
        <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div id={panel} className="mt-6 space-y-5 border-t border-(--color-ink)/10 pt-6">
          {p.fullTitle && <Block title="Research title"><em>“{p.fullTitle}”</em></Block>}
          <Block title="Problem statement">{p.problem}</Block>
          {p.contribution.length > 0 && <Block title="My contribution"><List items={p.contribution} /></Block>}
          {p.implementation.length > 0 && <Block title="Technical implementation"><List items={p.implementation} /></Block>}
          {p.flow && (
            <Block title="Documented architecture">
              <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2 text-xs">
                {p.flow.map((f, i) => (
                  <li key={f} className="flex items-center gap-1.5">
                    <span className="rounded-md border border-(--color-ink)/15 px-2 py-1">{f}</span>
                    {i < p.flow!.length - 1 && <span aria-hidden className="text-(--color-accent)">→</span>}
                  </li>
                ))}
              </ol>
            </Block>
          )}
          {p.topics && <Block title="Research areas"><div className="flex flex-wrap gap-2">{p.topics.map((t) => <Tag key={t}>{t}</Tag>)}</div></Block>}
          <Block title="Current status">{p.status}{p.period ? ` (${p.period})` : ""}</Block>
          <Block title="Source">{p.repo === "Private Repository" ? "Private Repository — no public source link." : "No public repository or demo is available."}</Block>
        </div>
      )}
    </article>
  );
}
