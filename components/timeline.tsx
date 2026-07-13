import type { TimelineItem } from "@/lib/resume";
import { FadeIn } from "@/components/fade-in";

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative space-y-10 border-l border-border pl-8">
      {items.map((item, i) => (
        <FadeIn as="li" key={`${item.organization}-${item.role}`} delay={i * 0.05}>
          <span
            aria-hidden
            className="absolute -left-[6px] mt-1.5 size-3 rounded-full border-2 border-background bg-foreground"
          />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold tracking-tight">
              {item.role}
            </h3>
            <span className="text-sm text-muted-foreground">{item.period}</span>
          </div>
          <p className="mt-0.5 text-sm font-medium text-muted-foreground">
            {item.organization}
            {item.location ? ` · ${item.location}` : ""}
          </p>
          <p className="mt-3 text-pretty text-muted-foreground">{item.summary}</p>
          {item.points.length > 0 && (
            <ul className="mt-3 space-y-2">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2.5 before:size-1 before:rounded-full before:bg-muted-foreground"
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
        </FadeIn>
      ))}
    </ol>
  );
}
