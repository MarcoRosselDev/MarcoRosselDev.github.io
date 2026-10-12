import { useEffect, useState } from "react";
import { content } from "../content/content";
import type { Lang } from "../content/types";
import { detectLanguage, storeLanguage } from "../lib/language";

export function useLanguage() {
  const [lang, setLangState] = useState<Lang>(detectLanguage);

  // Mantiene sincronizado el documento con el idioma: lector de pantalla, título de la pestaña
  // y descripción para buscadores.
  useEffect(() => {
    const { title, description } = content[lang].meta;
    document.documentElement.lang = lang;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [lang]);

  function setLang(next: Lang) {
    setLangState(next);
    storeLanguage(next);
  }

  // "t" es todo el contenido ya en el idioma activo
  return { lang, setLang, t: content[lang] };
}