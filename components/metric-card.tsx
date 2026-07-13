import { cn } from "@/lib/utils";

type MetricCardProps = {
  label: string;
  value: string;
  description?: string;
  className?: string;
};

export function MetricCard({ label, value, description, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 transition-colors",
        className
      )}
    >
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="mt-2 text-3xl font-semibold tracking-tight tabular-nums">
        {value}
      </dd>
      {description && (
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
