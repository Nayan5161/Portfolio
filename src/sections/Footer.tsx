import { profile } from "../data/site";

export default function Footer() {
  const l = "hover:text-(--color-accent) underline-offset-4 hover:underline";
  return (
    <footer className="border-t border-(--color-ink)/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-(--color-ink-dim) md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl font-bold text-(--color-ink)">{profile.name}</p>
          <p className="mt-1">Cybersecurity | Software Development | Backend Engineering</p>
          <p>{profile.location}</p>
        </div>
        <div className="md:text-right">
          <p className="flex gap-3 md:justify-end">
            <a className={l} href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>|
            <a className={l} href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>|
            <a className={l} href={`mailto:${profile.email}`}>Email</a>
          </p>
          <p className="mt-2">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </div>
    </footer>
  );
}
