import type { Metadata } from "next";

import { Section, SectionHeader } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { FadeIn } from "@/components/fade-in";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Product case studies: the problem, constraints, options considered, the decision, and what the tradeoffs actually were.",
};

export default function ProjectsPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Projects"
        title="Case studies"
        description="Each of these is written the way I'd brief a peer — problem first, tradeoffs in the open, and honest about what I'd change."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.05}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
