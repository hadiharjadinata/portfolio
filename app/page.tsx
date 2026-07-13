import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/hero";
import { Section, SectionHeader } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { FadeIn } from "@/components/fade-in";
import { getFeaturedProjects, projects } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();
  const selected = featured.length > 0 ? featured : projects.slice(0, 4);

  return (
    <>
      <Hero />

      <Section className="border-t border-border">
        <SectionHeader
          eyebrow="Selected Work"
          title="Case studies in product judgment"
          description="A few of the products I've owned end to end — the problem, the tradeoffs, and what I'd do differently."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {selected.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.06}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View all projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </FadeIn>
      </Section>
    </>
  );
}
