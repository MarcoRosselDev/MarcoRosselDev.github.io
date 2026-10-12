import { useEffect, useState } from "react";
import { applyTheme, getStoredTheme, storeTheme, type Theme } from "../lib/theme";

export function useTheme() {
  // Pasamos la FUNCIÓN (sin paréntesis): React la ejecuta una sola vez, al montar.
  // Como no hay servidor que renderice antes, el estado ya nace con el valor real.
  const [theme, setThemeState] = useState<Theme>(getStoredTheme);

  // Un efecto sincroniza React con algo EXTERNO a React: aquí, la clase en <html>.
  useEffect(() => {
    applyTheme(theme);
    if (theme !== "system") return;

    // En modo "auto", si el usuario cambia el tema de su sistema operativo, lo seguimos en vivo
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange); // limpieza al cambiar de modo
  }, [theme]);

  function setTheme(next: Theme) {
    setThemeState(next);
    storeTheme(next);
  }

  return { theme, setTheme };
}