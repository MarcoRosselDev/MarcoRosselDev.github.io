import type { ReactNode } from "react";

type Props = {
  id: string;        // el ancla a la que apunta el menú (#projects, #about...)
  index: string;     // "01", "02"... (detalle de estética de terminal)
  title: string;
  children: ReactNode;
};

/** Envoltorio que comparten todas las secciones: así la cabecera de cada una
 *  (número, título y línea) se escribe una sola vez y todas quedan idénticas. */
export function Section({ id, index, title, children }: Props) {
  const headingId = `${id}-heading`;

  return (
    // aria-labelledby: el lector de pantalla anuncia la sección con el nombre de su título
    <section id={id} aria-labelledby={headingId} className="py-16 sm:py-20">
      <div className="mb-10 flex items-center gap-4">
        <h2 id={headingId} className="font-mono text-lg tracking-tight sm:text-xl">
          <span className="text-accent">{index}.</span> {title}
        </h2>
        {/* La línea es decoración: aria-hidden evita que los lectores la anuncien */}
        <span aria-hidden className="h-px flex-1 bg-line" />
      </div>
      {children}
    </section>
  );
}