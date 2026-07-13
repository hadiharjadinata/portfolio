import type { Metadata } from "next";

import { Section, SectionHeader } from "@/components/section";
import { ArticleCard } from "@/components/article-card";
import { FadeIn } from "@/components/fade-in";
import { Tag } from "@/components/tag";
import { getArticles, writingTopics } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on product thinking, marketplaces, data products, competitive intelligence, AI, and leadership.",
};

export default function WritingPage() {
  const articles = getArticles();

  return (
    <Section>
      <SectionHeader
        eyebrow="Writing"
        title="Notes"
        description="Short essays on how I think about product, data, and the systems underneath them."
      />

      <div className="mt-12 grid gap-16 lg:grid-cols-[1.6fr_1fr]">
        <div>
          {articles.length > 0 ? (
            <div className="flex flex-col">
              {articles.map((article) => (
                <FadeIn key={article.slug}>
                  <ArticleCard article={article} />
                </FadeIn>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">Essays are on the way.</p>
          )}
        </div>

        <FadeIn delay={0.1} className="space-y-6">
          <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Topics
          </h3>
          <ul className="space-y-5">
            {writingTopics.map((topic) => (
              <li key={topic.title} className="space-y-1">
                <Tag className="text-sm">{topic.title}</Tag>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {topic.description}
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </Section>
  );
}
