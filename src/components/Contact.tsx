import { LINKS } from "../content/content";
import type { Content } from "../content/types";
import { Section } from "./Section";

export function Contact({ data }: { data: Content["contact"] }) {
  return (
    <Section id="contact" index="04" title={data.title}>
      <p className="max-w-xl text-muted">{data.text}</p>

      {/* break-all: en pantallas angostas un correo largo se parte en vez de desbordar */}
      <a
        href={`mailto:${LINKS.email}`}
        className="mt-6 inline-block break-all font-mono text-lg underline decoration-accent underline-offset-8 transition-colors hover:text-accent sm:text-2xl"
      >
        {LINKS.email}
      </a>

      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
        <li>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-ink"
          >
            GitHub <span aria-hidden>↗</span>
          </a>
        </li>
        <li>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-ink"
          >
            LinkedIn <span aria-hidden>↗</span>
          </a>
        </li>
        <li className="text-muted">{data.location}</li>
      </ul>
    </Section>
  );
}