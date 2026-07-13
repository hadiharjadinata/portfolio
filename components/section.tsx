import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/fade-in";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("container py-20 md:py-28", className)}>
      {children}
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <FadeIn className={cn("max-w-2xl space-y-4", className)}>
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-pretty text-lg text-muted-foreground">{description}</p>
      )}
    </FadeIn>
  );
}
