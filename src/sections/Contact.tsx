import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { profile } from "../data/site";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;
const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const v: Errors = {};
    if (!d.name.trim()) v.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) v.email = "Please enter a valid email address.";
    if (!d.subject.trim()) v.subject = "Please enter a subject.";
    if (d.message.trim().length < 10) v.message = "Please write a message of at least 10 characters.";
    setErrors(v);
    setStatus(null);
    if (Object.keys(v).length) {
      setStatus({ kind: "err", text: "Please fix the highlighted fields." });
      return;
    }
    if (endpoint) {
      setBusy(true);
      try {
        const r = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(d),
        });
        if (!r.ok) throw new Error();
        form.reset();
        setStatus({ kind: "ok", text: "Thanks — your message was sent." });
      } catch {
        setStatus({ kind: "err", text: `Sending failed. Please email ${profile.email} directly.` });
      } finally {
        setBusy(false);
      }
      return;
    }
    const body = `${d.message}\n\n— ${d.name} (${d.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`;
    setStatus({ kind: "ok", text: "Your email app should open with the message ready to send. If it doesn't, write to " + profile.email + "." });
  }

  const field = "mt-2 w-full rounded-lg border bg-(--color-canvas) px-4 py-3 text-sm outline-none transition focus-visible:border-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent)/40";
  const cls = (k: keyof Errors) => `${field} ${errors[k] ? "border-red-400" : "border-(--color-ink)/20"}`;
  const err = (k: keyof Errors) => errors[k] && <p id={`${k}-err`} className="mt-1 text-xs text-red-300">{errors[k]}</p>;
  const a = (k: keyof Errors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  const rows = [
    { Icon: MapPin, text: profile.location, href: undefined },
    { Icon: Phone, text: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { Icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
    { Icon: Github, text: profile.github, href: profile.github },
    { Icon: Linkedin, text: profile.linkedin, href: profile.linkedin },
  ];

  return (
    <Section id="contact" eyebrow="09 — Get in touch" title="Let's Talk" alt>
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <h3 className="font-display text-2xl font-bold">{profile.name}</h3>
          <p className="mt-3 max-w-md text-sm leading-[1.8] text-(--color-ink-dim)">{profile.availability}</p>
          <ul className="mt-6 space-y-3 text-sm">
            {rows.map(({ Icon, text, href }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon size={18} className="mt-0.5 shrink-0 text-(--color-accent)" aria-hidden />
                {href ? (
                  <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="break-all text-(--color-ink-dim) underline-offset-4 hover:text-(--color-accent) hover:underline">{text}</a>
                ) : <span className="text-(--color-ink-dim)">{text}</span>}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="space-y-5" aria-label="Contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs tracking-[0.14em] uppercase text-(--color-ink-dim)">Name *</label>
                <input id="name" name="name" autoComplete="name" required className={cls("name")} {...a("name")} />
                {err("name")}
              </div>
              <div>
                <label htmlFor="email" className="text-xs tracking-[0.14em] uppercase text-(--color-ink-dim)">Email *</label>
                <input id="email" name="email" type="email" autoComplete="email" required className={cls("email")} {...a("email")} />
                {err("email")}
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="text-xs tracking-[0.14em] uppercase text-(--color-ink-dim)">Subject *</label>
              <input id="subject" name="subject" required className={cls("subject")} {...a("subject")} />
              {err("subject")}
            </div>
            <div>
              <label htmlFor="message" className="text-xs tracking-[0.14em] uppercase text-(--color-ink-dim)">Message *</label>
              <textarea id="message" name="message" rows={5} required className={cls("message")} {...a("message")} />
              {err("message")}
            </div>
            <button type="submit" disabled={busy} className="rounded-full bg-(--color-accent) px-8 py-3.5 text-sm font-medium text-(--color-ink-on-paper) transition hover:brightness-110 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-ink)">
              {busy ? "Sending…" : endpoint ? "Send message" : "Open in email app"}
            </button>
            <p role="status" aria-live="polite" className={`text-sm ${status?.kind === "err" ? "text-red-300" : "text-emerald-300"}`}>{status?.text}</p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
