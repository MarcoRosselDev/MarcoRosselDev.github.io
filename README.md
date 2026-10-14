# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

“Tell us about your experience”

English

I don’t have full-time professional experience yet, and I’d rather say that upfront. For about five years I’ve been learning and building full-stack projects on my own. My most recent one is deployed live: Verb Conjugator v2 (english-verbs-v2.vercel.app), built with Next.js (App Router), TypeScript, Tailwind CSS and PostgreSQL on Neon.

In that project I wrote the SQL by hand: the schema, constraints, trigram indexes for ranked search, and parameterized queries. I also built the authentication myself (bcrypt, signed JWT in httpOnly cookies) and enforced role-based permissions on the server. It has an automated test suite with Vitest and CI on GitHub Actions.

I haven’t used Mapbox, PostGIS or Supabase RLS in production yet, but I have worked with Three.js, and my architecture background gives me a strong sense of spatial data and how people read maps and plans. That’s why HouseQuant’s 3D parcel map caught my attention. I work well on my own and learn fast.

Portfolio: marcorosseldev.github.io

Español

Todavía no tengo experiencia laboral a tiempo completo, y prefiero decirlo desde el inicio. Desde hace unos cinco años aprendo y construyo proyectos full-stack por mi cuenta. El más reciente está desplegado en vivo: Verb Conjugator v2 (english-verbs-v2.vercel.app), hecho con Next.js (App Router), TypeScript, Tailwind CSS y PostgreSQL en Neon.

En ese proyecto escribí el SQL a mano: el esquema, las restricciones, índices trigram para la búsqueda con ranking y consultas parametrizadas. También construí la autenticación yo mismo (bcrypt, JWT firmado en cookies httpOnly) y apliqué permisos por rol en el servidor. Tiene una suite de tests con Vitest y CI en GitHub Actions.

Aún no he usado Mapbox, PostGIS ni RLS de Supabase en producción, pero sí he trabajado con Three.js, y mi formación en arquitectura me da buen criterio para datos espaciales y para cómo las personas leen mapas y planos. Por eso me llamó la atención el mapa 3D de parcelas de HouseQuant. Trabajo bien de forma autónoma y aprendo rápido.

Portafolio: marcorosseldev.github.io

“Tell us about your education and academic background”

English

Architecture studies at Universidad del Bío-Bío (Concepción, Chile), 2017–2023. I completed the full program; the formal degree is pending an administrative matter with the university. Architecture trained me to work with plans, scale and spatial reasoning, and to iterate on a design with feedback, which I now apply to the interfaces I build.

Since then I’ve taught myself web development through projects: React, TypeScript, Next.js, Node.js, FastAPI and PostgreSQL, plus Git and automated testing. I read technical documentation in English every day. Languages: Spanish (native), English (B2).

Español

Estudios de Arquitectura en la Universidad del Bío-Bío (Concepción, Chile), 2017–2023. Completé el plan de estudios completo; el título formal está pendiente por un trámite administrativo con la universidad. La arquitectura me formó en trabajo con planos, escala y razonamiento espacial, y en iterar un diseño con retroalimentación, lo que hoy aplico a las interfaces que construyo.

Desde entonces aprendí desarrollo web por mi cuenta a través de proyectos: React, TypeScript, Next.js, Node.js, FastAPI y PostgreSQL, además de Git y testing automatizado. Leo documentación técnica en inglés todos los días. Idiomas: español (nativo), inglés (B2).