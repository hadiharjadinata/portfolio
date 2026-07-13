import type { Metadata } from "next";
import { Download } from "lucide-react";

import { Section, SectionHeader } from "@/components/section";
import { Timeline } from "@/components/timeline";
import { FadeIn } from "@/components/fade-in";
import { Tag } from "@/components/tag";
import { Button } from "@/components/ui/button";
import { experience, education, skillGroups } from "@/lib/resume";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Experience across Product and Operations at Traveloka, Astro, and Anteraja, with a foundation in Materials Engineering.",
};

export default function ResumePage() {
  return (
    <Section>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader eyebrow="Resume" title="Experience" />
        <FadeIn delay={0.1}>
          <Button asChild variant="outline">
            <a href={siteConfig.links.resume} target="_blank" rel="noreferrer noopener">
              <Download className="size-4" />
              Download Resume
            </a>
          </Button>
        </FadeIn>
      </div>

      <div className="mt-16 grid gap-16 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-16">
          <div>
            <Timeline items={experience} />
          </div>

          <FadeIn className="space-y-8">
            <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Education
            </h3>
            <Timeline items={education} />
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="space-y-8">
          <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Skills
          </h3>
          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.title} className="space-y-3">
                <h4 className="text-sm font-medium text-foreground">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Tag key={skill} className="text-sm">
                      {skill}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
