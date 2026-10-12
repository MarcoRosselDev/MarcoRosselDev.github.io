import type { Content, Lang } from "../content/types";

type Props = { hero: Content["hero"]; lang: Lang };

export function Hero({ hero, lang }: Props) {
  // BASE_URL es la ruta base donde Vite sirve el sitio ("/" en tu caso).
  // Usarla evita que el enlace se rompa si algún día el sitio vive en una subcarpeta.
  const cvHref = `${import.meta.env.BASE_URL}cv/Marco-Rossel-CV-${lang.toUpperCase()}.pdf`;

  return (
    <section aria-labelledby="hero-heading" className="py-20 sm:py-28">
      <p className="font-mono text-sm text-accent">{hero.eyebrow}</p>

      <h1 id="hero-heading" className="mt-2 font-mono text-4xl tracking-tight sm:text-6xl">
        {hero.name}
        <span aria-hidden className="cursor text-accent">
          _
        </span>
      </h1>

      <p className="mt-4 text-lg text-muted sm:text-xl">{hero.role}</p>
      <p className="mt-6 max-w-2xl leading-relaxed">{hero.tagline}</p>

      <div className="mt-10 flex flex-wrap gap-3 text-sm">
        <a
          href="#projects"
          className="rounded-md bg-ink px-5 py-2.5 font-medium text-canvas transition-opacity hover:opacity-90"
        >
          {hero.viewProjects}
        </a>
        <a
          href={cvHref}
          download // sugiere al navegador descargar el archivo en vez de abrirlo
          className="rounded-md border border-line px-5 py-2.5 transition-colors hover:border-muted"
        >
          {hero.downloadCv}
        </a>
      </div>
    </section>
  );
}