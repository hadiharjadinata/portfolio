import type { Metadata } from "next";

import { Section, SectionHeader } from "@/components/section";
import { FadeIn } from "@/components/fade-in";
import { Tag } from "@/components/tag";

export const metadata: Metadata = {
  title: "About",
  description:
    "From Materials Engineering to Operations to Product — how I ended up building Competitive Intelligence products at Traveloka.",
};

const focusAreas = [
  "Platform Products",
  "Internal Tools",
  "Automation",
  "Marketplace",
  "Data Infrastructure",
  "Scraping Systems",
  "Experimentation",
  "Product Strategy",
  "Decision Making",
];

export default function AboutPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="About"
        title="I like problems where the data, the system, and the business all disagree."
      />

      <div className="mt-12 grid gap-16 lg:grid-cols-[1.4fr_1fr]">
        <FadeIn className="max-w-prose space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I started in{" "}
            <span className="text-foreground">Materials Engineering</span>, which
            is really a training in reasoning from first principles and respecting
            constraints — you can’t argue a material out of how it behaves.
          </p>
          <p>
            I moved into <span className="text-foreground">Operations</span>, where
            the constraints stopped being physical and started being human and
            economic. That’s where I learned what actually breaks at scale, and
            that most problems described as technical are really problems of
            incentives and information.
          </p>
          <p>
            I transitioned into <span className="text-foreground">Product</span>{" "}
            because that’s the seat where you get to decide which problem is worth
            solving, not just how to solve the one you were handed.
          </p>
          <p>
            Today I’m a{" "}
            <span className="text-foreground">Product Manager leading Competitive Intelligence products at Traveloka</span>
            . The work sits exactly where I like it: noisy external data, systems
            that fail quietly, and business decisions that depend on getting both
            right. I care about clarity over hype, tradeoffs made explicit, and
            building things a small team can actually maintain.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="space-y-4">
          <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Focus areas
          </h3>
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <Tag key={area} className="text-sm">
                {area}
              </Tag>
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
