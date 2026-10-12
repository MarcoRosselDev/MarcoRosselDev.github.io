/** "Unión de literales": un Lang solo puede ser exactamente "en" o "es". */
export type Lang = "en" | "es";

export type Project = {
  id: string;
  title: string;
  kind: string;        // etiqueta corta bajo el título
  summary: string;
  highlights: string[];
  stack: string[];
  demo?: string;       // el "?" significa opcional: puede no existir
  repo?: string;
};

export type EducationItem = {
  school: string;
  program: string;
  period: string;
  note: string;
};

export type SkillGroup = { label: string; items: string[] };

/**
 * La FORMA que debe tener el contenido en CADA idioma.
 * Si en español falta un campo que sí está en inglés, TypeScript marca error
 * al compilar. Así nunca queda una parte de la web sin traducir.
 */
export type Content = {
  meta: { title: string; description: string };
  ui: { skipToContent: string; languageLabel: string; themeLabel: string };
  nav: { projects: string; about: string; skills: string; contact: string };
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    tagline: string;
    viewProjects: string;
    downloadCv: string;
  };
  projects: { title: string; liveDemo: string; sourceCode: string; items: Project[] };
  about: {
    title: string;
    paragraphs: string[];
    educationTitle: string;
    education: EducationItem[];
  };
  skills: { title: string; groups: SkillGroup[] };
  contact: { title: string; text: string; location: string };
  footer: string;
};