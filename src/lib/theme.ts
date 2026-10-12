export type Theme = "light" | "dark" | "system";

export const THEME_KEY = "theme";
/** Lo que ve alguien que entra por primera vez. Para cambiarlo, edita esto
 *  Y el valor por defecto del script en index.html. */
export const DEFAULT_THEME: Theme = "dark";

/** Lee el tema guardado. Si no hay nada, o localStorage está bloqueado, usa el de por defecto. */
export function getStoredTheme(): Theme {
  try {
    const value = localStorage.getItem(THEME_KEY);
    if (value === "light" || value === "dark" || value === "system") return value;
  } catch {
    // localStorage puede estar bloqueado (modo privado estricto, etc.)
  }
  return DEFAULT_THEME;
}

export function storeTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // si falla el guardado, el tema igual se aplica durante esta sesión
  }
}

/** Pone o quita la clase "dark" en <html> según el tema elegido. */
export function applyTheme(theme: Theme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = theme === "dark" || (theme === "system" && prefersDark);
  document.documentElement.classList.toggle("dark", isDark);
}