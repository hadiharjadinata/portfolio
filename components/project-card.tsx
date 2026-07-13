import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/lib/projects";
import { Tag } from "@/components/tag";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/[0.03]"
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {project.category}
            </p>
            <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
          </div>
          <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </div>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Link>
  );
}
