import fs from "node:fs";
import path from "node:path";

export type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  published: boolean;
  content: string;
  readingTime: number;
};

export const writingTopics = [
  {
    title: "Product Thinking",
    description: "How I frame problems, weigh tradeoffs, and decide what not to build.",
  },
  {
    title: "Marketplace",
    description: "Two-sided dynamics, incentives, and the operational reality underneath them.",
  },
  {
    title: "Data Products",
    description: "Building products where the data itself — its quality and trust — is the feature.",
  },
  {
    title: "Competitive Intelligence",
    description: "Turning noisy external signals into decisions people can act on.",
  },
  {
    title: "AI",
    description: "Where automation genuinely changes the economics of a workflow, and where it doesn't.",
  },
  {
    title: "Leadership",
    description: "Working through small teams, alignment, and saying no well.",
  },
] as const;

const CONTENT_DIR = path.join(process.cwd(), "content", "writing");

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { data, content: match[2].trim() };
}

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

let cache: Article[] | null = null;

export function getArticles(): Article[] {
  if (cache) return cache;

  let files: string[] = [];
  try {
    files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
  } catch {
    files = [];
  }

  const articles = files.map((file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data, content } = parseFrontmatter(raw);
    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title ?? file,
      date: data.date ?? "",
      category: data.category ?? "General",
      excerpt: data.excerpt ?? "",
      published: data.published !== "false",
      content,
      readingTime: estimateReadingTime(content),
    } satisfies Article;
  });

  cache = articles
    .filter((a) => a.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return cache;
}

export function getArticle(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug);
}
