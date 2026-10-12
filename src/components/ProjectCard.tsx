import type { Project } from "../content/types";

type Props = {
  project: Project;
  labels: { liveDemo: string; sourceCode: string };
  featured?: boolean; // el proyecto principal lleva el borde de acento
};

export function ProjectCard({ project, labels, featured = false }: Props) {
  const { title, kind, summary, highlights, stack, demo, repo } = project;

  return (
    <article
      className={`rounded-lg border bg-surface p-6 transition-colors hover:border-muted/50 ${
        featured ? "border-accent/40" : "border-line"
      }`}
    >
      <p className="font-mono text-[11px] uppercase tracking-wider text-accent">{kind}</p>
      <h3 className="mt-1 font-mono text-xl tracking-tight">{title}</h3>
      <p className="mt-3 text-muted">{summary}</p>

      <ul className="mt-5 space-y-2 text-sm">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span aria-hidden className="font-mono text-accent">
              ›
            </span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <li
            key={tech}
            className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      {/* demo y repo son opcionales: si ninguno existe (Anti-Ratas por ahora), no se dibuja la fila */}
      {(demo || repo) && (
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer" // evita que la página abierta pueda manipular la tuya
              className="rounded-md bg-ink px-4 py-2 font-medium text-canvas transition-opacity hover:opacity-90"
            >
              {labels.liveDemo} <span aria-hidden>↗</span>
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line px-4 py-2 transition-colors hover:border-muted"
            >
              {labels.sourceCode} <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}