import type { Content } from "../content/types";
import { Section } from "./Section";

export function About({ data }: { data: Content["about"] }) {
  return (
    <Section id="about" index="02" title={data.title}>
      {/* En móvil, una columna; desde "md", texto a la izquierda y formación a la derecha */}
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-4 leading-relaxed">
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-wider text-muted">
            {data.educationTitle}
          </h3>
          <ul className="mt-3 space-y-3">
            {data.education.map((item) => (
              <li
                key={`${item.school}-${item.period}`}
                className="rounded-lg border border-line bg-surface p-4"
              >
                <p className="font-mono text-sm">{item.program}</p>
                <p className="mt-1 text-sm text-muted">{item.school}</p>
                <p className="mt-2 font-mono text-xs text-muted">
                  {item.period} · {item.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}