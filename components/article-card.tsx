import Link from "next/link";

import type { Article } from "@/lib/articles";
import { formatDate } from "@/lib/format";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/writing/${article.slug}`}
      className="group flex flex-col gap-3 border-b border-border py-8 transition-colors first:pt-0 hover:border-foreground/20"
    >
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span className="font-medium uppercase tracking-widest">
          {article.category}
        </span>
        <span aria-hidden>·</span>
        <time dateTime={article.date}>{formatDate(article.date)}</time>
        <span aria-hidden>·</span>
        <span>{article.readingTime} min read</span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-foreground/80 md:text-2xl">
        {article.title}
      </h3>
      <p className="text-pretty leading-relaxed text-muted-foreground">
        {article.excerpt}
      </p>
    </Link>
  );
}
