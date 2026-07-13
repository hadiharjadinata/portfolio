import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";

import { getProject, projects, type Project } from "@/lib/projects";
import { Tag } from "@/components/tag";
import { MetricCard } from "@/components/metric-card";
import { FadeIn } from "@/components/fade-in";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${project.category}`,
      description: project.summary,
    },
  };
}

function Prose({ heading, paragraphs }: { heading: string; paragraphs: string[] }) {
  return (
    <CaseSection heading={heading}>
      <div className="max-w-prose space-y-4 text-lg leading-relaxed text-muted-foreground">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-pretty">
            {p}
          </p>
        ))}
      </div>
    </CaseSection>
  );
}

function BulletList({ heading, items }: { heading: string; items: string[] }) {
  return (
    <CaseSection heading={heading}>
      <ul className="max-w-prose space-y-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="relative pl-6 text-lg leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-muted-foreground/60"
          >
            {item}
          </li>
        ))}
      </ul>
    </CaseSection>
  );
}

function NumberedList({ heading, items }: { heading: string; items: string[] }) {
  return (
    <CaseSection heading={heading}>
      <ol className="max-w-prose space-y-5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4">
            <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-sm font-medium tabular-nums text-muted-foreground">
              {i + 1}
            </span>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              {item}
            </p>
          </li>
        ))}
      </ol>
    </CaseSection>
  );
}

function CaseSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <FadeIn as="section" className="grid gap-4 border-t border-border py-12 md:grid-cols-[220px_1fr] md:gap-10">
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground md:pt-1">
        {heading}
      </h2>
      <div>{children}</div>
    </FadeIn>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const p = project as Project;

  return (
    <article className="container py-16 md:py-24">
      <FadeIn>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          All projects
        </Link>
      </FadeIn>

      <FadeIn className="mt-8 max-w-3xl space-y-6">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {p.category}
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          {p.title}
        </h1>
        <p className="text-pretty text-xl leading-relaxed text-muted-foreground">
          {p.summary}
        </p>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2 text-sm">
          <div>
            <span className="text-muted-foreground">Role · </span>
            <span className="text-foreground">{p.role}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Timeframe · </span>
            <span className="text-foreground">{p.year}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {p.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </FadeIn>

      <div className="mt-16">
        <Prose heading="Overview" paragraphs={p.overview} />
        <BulletList heading="Problem" items={p.problem} />
        <BulletList heading="Constraints" items={p.constraints} />
        <BulletList heading="Discovery" items={p.discovery} />

        <CaseSection heading="Options considered">
          <div className="grid gap-4">
            {p.options.map((opt, i) => (
              <div
                key={i}
                className={cn(
                  "rounded-2xl border p-6 transition-colors",
                  opt.chosen
                    ? "border-foreground/30 bg-secondary/40"
                    : "border-border bg-card"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {opt.title}
                  </h3>
                  {opt.chosen && (
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
                      <Check className="size-3" />
                      Chosen
                    </span>
                  )}
                </div>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {opt.detail}
                </p>
              </div>
            ))}
          </div>
        </CaseSection>

        <Prose heading="Decision" paragraphs={p.decision} />
        <NumberedList heading="Execution" items={p.execution} />
        <BulletList heading="Impact" items={p.impact} />

        <CaseSection heading="Metrics">
          <p className="mb-6 max-w-prose text-sm text-muted-foreground">
            Figures are intentionally left as placeholders where the underlying
            numbers are confidential or unavailable to share publicly.
          </p>
          <dl className="grid gap-4 sm:grid-cols-2">
            {p.metrics.map((m) => (
              <MetricCard
                key={m.label}
                label={m.label}
                value={m.value}
                description={m.description}
              />
            ))}
          </dl>
        </CaseSection>

        <BulletList heading="Lessons learned" items={p.lessons} />
      </div>

      <FadeIn className="mt-8 border-t border-border pt-10">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          Back to all projects
        </Link>
      </FadeIn>
    </article>
  );
}
