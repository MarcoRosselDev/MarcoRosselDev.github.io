import type { Content, Lang } from "../content/types";
import type { Theme } from "../lib/theme";
import { Segmented } from "./Segmented";

const SECTIONS = ["projects", "about", "skills", "contact"] as const;

const LANG_OPTIONS: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "es", label: "ES" },
];

const THEME_OPTIONS: { value: Theme; label: string }[] = [
  { value: "light", label: "light" },
  { value: "dark", label: "dark" },
  { value: "system", label: "auto" },
];

type Props = {
  nav: Content["nav"];   // Content["nav"] = "el tipo del campo nav dentro de Content"
  ui: Content["ui"];
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
};

export function Header({ nav, ui, lang, onLangChange, theme, onThemeChange }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/80 backdrop-blur">
      {/* flex-wrap + order: en móvil el menú baja a una segunda fila; desde "sm" va en el centro */}
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3">
        <a href="#" className="font-mono text-sm font-medium tracking-tight">
          marco.rossel<span className="cursor text-accent">_</span>
        </a>

        <nav
          aria-label="Primary"
          className="order-3 flex w-full gap-5 font-mono text-xs text-muted sm:order-none sm:w-auto"
        >
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} className="transition-colors hover:text-ink">
              {nav[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Segmented label={ui.languageLabel} value={lang} options={LANG_OPTIONS} onChange={onLangChange} />
          <Segmented label={ui.themeLabel} value={theme} options={THEME_OPTIONS} onChange={onThemeChange} />
        </div>
      </div>
    </header>
  );
}