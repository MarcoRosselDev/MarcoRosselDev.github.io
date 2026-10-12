type Option<T extends string> = { value: T; label: string };

type Props<T extends string> = {
  label: string; // para lectores de pantalla
  value: T;
  options: readonly Option<T>[];
  onChange: (value: T) => void;
};

/**
 * Control de botones tipo "pestañas" para elegir UNA opción.
 * <T extends string> es un GENÉRICO: "T es algún tipo de texto". Cuando lo usamos con
 * Lang, T pasa a ser "en" | "es"; con Theme, "light" | "dark" | "system".
 * Así onChange recibe exactamente el tipo correcto, y no un string cualquiera,
 * y escribimos el componente una sola vez para ambos usos.
 */
export function Segmented<T extends string>({ label, value, options, onChange }: Props<T>) {
  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex rounded-md border border-line p-0.5 font-mono text-xs"
    >
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.value)}
            className={`rounded px-2 py-1 transition-colors ${
              active ? "bg-ink text-canvas" : "text-muted hover:text-ink"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}