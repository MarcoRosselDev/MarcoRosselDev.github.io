import type { Lang } from "../content/types";

export const LANG_KEY = "lang";

/** Orden de prioridad: 1) lo que el visitante eligió antes, 2) el idioma de su navegador,
 *  3) inglés. Cualquier idioma que empiece con "es" (es-CL, es-MX...) cuenta como español. */
export function detectLanguage(): Lang {
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === "en" || stored === "es") return stored;
  } catch {
    // localStorage bloqueado: seguimos con el idioma del navegador
  }
  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

export function storeLanguage(lang: Lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    // no pasa nada si no se puede guardar
  }
}