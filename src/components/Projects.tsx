import type { Content } from "../content/types";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

export function Projects({ data }: { data: Content["projects"] }) {
  const labels = { liveDemo: data.liveDemo, sourceCode: data.sourceCode };

  return (
    <Section id="projects" index="01" title={data.title}>
      <div className="space-y-6">
        {data.items.map((project, i) => (
          // La primera tarjeta (v2) es la principal. La "key" debe ser un identificador estable,
          // por eso usamos el id del proyecto y no la posición en la lista.
          <ProjectCard key={project.id} project={project} labels={labels} featured={i === 0} />
        ))}
      </div>
    </Section>
  );
}