// "import type" porque solo usamos tipos: desaparecen al compilar.
// La plantilla de Vite trae activado "verbatimModuleSyntax", que exige esta forma.
import type { Content, Lang } from "./types";

/* ── Datos que NO cambian con el idioma: se definen una vez y se reutilizan ── */
export const LINKS = {
  email: "andresmarcorossel@gmail.com",
  github: "https://github.com/MarcoRosselDev",
  linkedin: "https://www.linkedin.com/in/marco-rossel-378b85256/",
} as const;

const URLS = {
  verbsV2: {
    demo: "https://english-verbs-v2.vercel.app/",
    repo: "https://github.com/MarcoRosselDev/english-verbs-v2", // ← verifica que este sea el nombre real
  },
  verbsV1: {
    demo: "https://englishverb-conjugation.netlify.app/",
    repo: "https://github.com/MarcoRosselDev/English-verbs",
  },
  // TODO: sube Anti-Ratas a GitHub y pon aquí su enlace
  antiRatas: {} as { repo?: string },
};

const FRONTEND = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js"];
const BACKEND = ["FastAPI", "Express", "Node.js", "REST APIs", "JWT authentication"];
const DATABASES = ["PostgreSQL", "MongoDB"];
const TOOLS = ["Git", "GitHub Actions", "Vitest", "Vercel", "Neon"];

/** Record<Lang, Content> = "un objeto con una clave 'en' y otra 'es', ambas con la forma Content". */
export const content: Record<Lang, Content> = {
  en: {
    meta: {
      title: "Marco Rossel · Full-stack developer",
      description:
        "Portfolio of Marco Rossel, a full-stack developer focused on front-end, working with React, TypeScript, Next.js, and PostgreSQL.",
    },
    ui: { skipToContent: "Skip to content", languageLabel: "Language", themeLabel: "Color theme" },
    nav: { projects: "Projects", about: "About", skills: "Skills", contact: "Contact" },
    hero: {
      eyebrow: "Hi, I'm",
      name: "Marco Rossel",
      role: "Full-stack developer, front-end focused",
      tagline:
        "I build clean, well-tested web apps with React, TypeScript, and PostgreSQL. Trained as an architect, I care about structure, space, and detail.",
      viewProjects: "View projects",
      downloadCv: "Download CV",
    },
    projects: {
      title: "Projects",
      liveDemo: "Live demo",
      sourceCode: "Source code",
      items: [
        {
          id: "verbs-v2",
          title: "Verb Conjugator v2",
          kind: "Full-stack · Live",
          summary:
            "Search English verbs by any form or by their Spanish translation, with user accounts and role-based permissions.",
          highlights: [
            "Own authentication: bcrypt hashing, signed JWT in httpOnly cookies, and permissions enforced on the server.",
            "Ranked search with trigram indexes, plus debounced and cancellable requests.",
            "Automated test suite and CI on GitHub Actions; deployed on Vercel and Neon.",
          ],
          stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Vitest", "GitHub Actions"],
          ...URLS.verbsV2,
        },
        {
          id: "verbs-v1",
          title: "Verb Conjugator v1",
          kind: "Full-stack · Original version",
          summary:
            "The original React, FastAPI, and PostgreSQL version. v2 is a rebuild that adds authentication, permissions, and tests.",
          highlights: [
            "REST API with FastAPI and a PostgreSQL database.",
            "React and TypeScript interface with search, light/dark theme, and CRUD.",
          ],
          stack: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
          ...URLS.verbsV1,
        },
        {
          id: "anti-ratas",
          title: "Anti-Ratas",
          kind: "CLI tool",
          summary:
            "Uses the GitHub REST API to find accounts you follow that don't follow you back, and can unfollow them.",
          highlights: [
            "Safe by default: dry-run mode, a whitelist, and a history log of removed accounts.",
            "Same tool implemented in both Python and Node.js.",
          ],
          stack: ["Python", "Node.js", "GitHub REST API"],
          ...URLS.antiRatas,
        },
      ],
    },
    about: {
      title: "About",
      paragraphs: [
        "I studied architecture at Universidad del Bío-Bío and completed the full program, but along the way I found that what I enjoyed most was building things with code.",
        "For about five years I've been learning and building on my own: interfaces in React and TypeScript, APIs with FastAPI and Next.js, and data models in PostgreSQL. My architecture background shows in how I think about structure, hierarchy, and user flow.",
        "I'm looking for a developer role, front-end or full-stack, remote or on-site.",
      ],
      educationTitle: "Education",
      education: [
        {
          school: "Universidad del Bío-Bío",
          program: "Architecture studies",
          period: "2017–2023",
          note: "All coursework completed",
        },
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        { label: "Front-end", items: FRONTEND },
        { label: "Back-end", items: BACKEND },
        { label: "Databases", items: DATABASES },
        { label: "Tools", items: TOOLS },
        { label: "Languages", items: ["Spanish (native)", "English (B2)"] },
      ],
    },
    contact: {
      title: "Contact",
      text: "Open to remote or on-site roles in Chile and abroad. Email is the fastest way to reach me.",
      location: "Concepción, Chile",
    },
    footer: "Built with React, TypeScript, and Tailwind CSS.",
  },

  es: {
    meta: {
      title: "Marco Rossel · Desarrollador full-stack",
      description:
        "Portafolio de Marco Rossel, desarrollador full-stack con foco en front-end, que trabaja con React, TypeScript, Next.js y PostgreSQL.",
    },
    ui: { skipToContent: "Saltar al contenido", languageLabel: "Idioma", themeLabel: "Tema de color" },
    nav: { projects: "Proyectos", about: "Sobre mí", skills: "Habilidades", contact: "Contacto" },
    hero: {
      eyebrow: "Hola, soy",
      name: "Marco Rossel",
      role: "Desarrollador full-stack, con foco en front-end",
      tagline:
        "Construyo aplicaciones web limpias y bien probadas con React, TypeScript y PostgreSQL. Formado como arquitecto, cuido la estructura, el espacio y el detalle.",
      viewProjects: "Ver proyectos",
      downloadCv: "Descargar CV",
    },
    projects: {
      title: "Proyectos",
      liveDemo: "Demo en vivo",
      sourceCode: "Código fuente",
      items: [
        {
          id: "verbs-v2",
          title: "Verb Conjugator v2",
          kind: "Full-stack · En producción",
          summary:
            "Busca verbos en inglés por cualquiera de sus formas o por su traducción al español, con cuentas de usuario y permisos por rol.",
          highlights: [
            "Autenticación propia: hash con bcrypt, JWT firmado en cookies httpOnly y permisos aplicados en el servidor.",
            "Búsqueda con ranking de relevancia e índices trigram, con peticiones diferidas y cancelables.",
            "Suite de tests automatizados y CI en GitHub Actions; desplegado en Vercel y Neon.",
          ],
          stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Vitest", "GitHub Actions"],
          ...URLS.verbsV2,
        },
        {
          id: "verbs-v1",
          title: "Verb Conjugator v1",
          kind: "Full-stack · Versión original",
          summary:
            "La versión original con React, FastAPI y PostgreSQL. La v2 es una reconstrucción que suma autenticación, permisos y tests.",
          highlights: [
            "API REST con FastAPI y base de datos PostgreSQL.",
            "Interfaz en React y TypeScript con búsqueda, tema claro/oscuro y CRUD.",
          ],
          stack: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
          ...URLS.verbsV1,
        },
        {
          id: "anti-ratas",
          title: "Anti-Ratas",
          kind: "Herramienta CLI",
          summary:
            "Usa la API REST de GitHub para encontrar cuentas que sigues y que no te siguen de vuelta, y puede dejar de seguirlas.",
          highlights: [
            "Seguro por defecto: modo simulación, lista blanca e historial de cuentas eliminadas.",
            "La misma herramienta implementada en Python y en Node.js.",
          ],
          stack: ["Python", "Node.js", "GitHub REST API"],
          ...URLS.antiRatas,
        },
      ],
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Estudié arquitectura en la Universidad del Bío-Bío y completé toda la carrera, pero en el camino descubrí que lo que más disfrutaba era construir cosas con código.",
        "Desde hace unos cinco años aprendo y construyo por mi cuenta: interfaces en React y TypeScript, APIs con FastAPI y Next.js, y modelos de datos en PostgreSQL. Mi formación en arquitectura se nota en cómo pienso la estructura, la jerarquía y el flujo del usuario.",
        "Busco un puesto como desarrollador, front-end o full-stack, remoto o presencial.",
      ],
      educationTitle: "Formación",
      education: [
        {
          school: "Universidad del Bío-Bío",
          program: "Arquitectura",
          period: "2017–2023",
          note: "Egresado",
        },
      ],
    },
    skills: {
      title: "Habilidades",
      groups: [
        { label: "Front-end", items: FRONTEND },
        { label: "Back-end", items: BACKEND },
        { label: "Bases de datos", items: DATABASES },
        { label: "Herramientas", items: TOOLS },
        { label: "Idiomas", items: ["Español (nativo)", "Inglés (B2)"] },
      ],
    },
    contact: {
      title: "Contacto",
      text: "Abierto a puestos remotos o presenciales en Chile y el extranjero. El correo es la forma más rápida de contactarme.",
      location: "Concepción, Chile",
    },
    footer: "Hecho con React, TypeScript y Tailwind CSS.",
  },
};