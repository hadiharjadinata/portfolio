# Hadi Maulana Harjadinata — Portfolio

Personal portfolio built to communicate product judgment, not visual flourish. Minimal, fast, dark-mode-first, accessible.

## Stack

- **Next.js 15** (App Router, React Server Components)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (Radix primitives + CVA)
- **Framer Motion** (subtle, reduced-motion aware)
- **Lucide Icons**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
npm run typecheck
```

## Structure

```
app/                 # routes (home, about, projects, writing, resume, contact)
  projects/[slug]/   # case study pages (static)
  writing/[slug]/    # essay pages (static, markdown-backed)
  opengraph-image.tsx, icon.tsx, sitemap.ts, robots.ts
components/           # Hero, Section, ProjectCard, Timeline, Navbar, Footer, MetricCard, Tag, ArticleCard, ...
  ui/                # shadcn/ui primitives
content/writing/     # markdown essays (frontmatter + body)
lib/                 # data (projects, resume, articles) + config + utils
public/              # resume.pdf and static assets
```

## Editing content

- **Projects / case studies** — `lib/projects.ts`
- **Resume** — `lib/resume.ts`
- **Essays** — add a markdown file to `content/writing/` with frontmatter:

  ```md
  ---
  title: Your title
  date: 2026-07-01
  category: Product Thinking
  excerpt: One-line summary.
  published: true
  ---

  ## Heading

  Body copy...
  ```

- **Site config / links** — `lib/site.ts` (update LinkedIn, GitHub, email, URL)
- **Resume PDF** — replace `public/resume.pdf`

> Metrics in the case studies are intentional placeholders (`—`). Fill in only numbers you're allowed to share publicly.

## Deploy (Vercel)

1. Push to a Git repository.
2. Import the project in Vercel — the framework preset is detected automatically.
3. No environment variables are required.
4. Set the production domain, then update `siteConfig.url` in `lib/site.ts` so metadata, OpenGraph, and the sitemap use the correct absolute URLs.
