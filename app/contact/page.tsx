import type { Metadata } from "next";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { Section, SectionHeader } from "@/components/section";
import { FadeIn } from "@/components/fade-in";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — LinkedIn, GitHub, or email.",
};

const channels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "in/hadiharjadinata",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "@hadiharjadinata",
    href: siteConfig.links.github,
    icon: Github,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Contact"
        title="Let's talk."
        description="The best way to reach me is email or LinkedIn. I'm happy to talk product, competitive intelligence, or data infrastructure."
      />

      <div className="mt-12 max-w-2xl divide-y divide-border border-y border-border">
        {channels.map((channel, i) => {
          const Icon = channel.icon;
          return (
            <FadeIn key={channel.label} delay={i * 0.06}>
              <a
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noreferrer noopener" : undefined}
                className="group flex items-center justify-between gap-4 py-6 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-foreground/30 group-hover:text-foreground">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">{channel.label}</p>
                    <p className="text-lg font-medium tracking-tight">
                      {channel.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
