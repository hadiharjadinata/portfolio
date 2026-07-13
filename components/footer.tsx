import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium">{siteConfig.name}</p>
          <p className="text-sm text-muted-foreground">
            {siteConfig.role} · {siteConfig.company}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="size-5" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </div>

      <div className="container flex flex-col gap-2 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {siteConfig.name}. All rights reserved.</p>
        <div className="flex gap-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
