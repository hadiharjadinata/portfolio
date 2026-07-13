import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getArticle, getArticles } from "@/lib/articles";
import { formatDate } from "@/lib/format";
import { Markdown } from "@/components/markdown";
import { FadeIn } from "@/components/fade-in";

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <article className="container py-16 md:py-24">
      <FadeIn>
        <Link
          href="/writing"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          All writing
        </Link>
      </FadeIn>

      <FadeIn className="mx-auto mt-8 max-w-prose">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="font-medium uppercase tracking-widest">
            {article.category}
          </span>
          <span aria-hidden>·</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span aria-hidden>·</span>
          <span>{article.readingTime} min read</span>
        </div>
        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          {article.title}
        </h1>
        <p className="mt-4 text-pretty text-xl leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
      </FadeIn>

      <FadeIn delay={0.05} className="mx-auto mt-12 max-w-prose">
        <Markdown content={article.content} />
      </FadeIn>
    </article>
  );
}
