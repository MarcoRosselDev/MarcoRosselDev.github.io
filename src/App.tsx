import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { useLanguage } from "./hooks/useLanguage";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { lang, setLang, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-canvas"
      >
        {t.ui.skipToContent}
      </a>

      <Header
        nav={t.nav}
        ui={t.ui}
        lang={lang}
        onLangChange={setLang}
        theme={theme}
        onThemeChange={setTheme}
      />

      <main id="main" className="mx-auto max-w-5xl px-6">
        <Hero hero={t.hero} lang={lang} />
        <Projects data={t.projects} />
        <About data={t.about} />
        <Skills data={t.skills} />
        <Contact data={t.contact} />
      </main>

      <Footer text={t.footer} />
    </>
  );
}