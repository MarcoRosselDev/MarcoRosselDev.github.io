import type { Content } from "../content/types";
import { Section } from "./Section";

export function Skills({ data }: { data: Content["skills"] }) {
  return (
    <Section id="skills" index="03" title={data.title}>
      {/* <dl> es la etiqueta correcta para pares "término → descripción":
          aquí, categoría → lista de tecnologías. Un <div> dentro de <dl> agrupa cada par. */}
      <dl className="divide-y divide-line rounded-lg border border-line bg-surface">
        {data.groups.map((group) => (
          <div key={group.label} className="grid gap-2 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <dt className="font-mono text-[11px] uppercase tracking-wider text-muted sm:pt-1">
              {group.label}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded border border-line px-2 py-0.5 font-mono text-xs">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}