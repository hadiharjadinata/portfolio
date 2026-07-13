import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
