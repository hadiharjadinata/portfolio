export type TimelineItem = {
  organization: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  points: string[];
};

export const experience: TimelineItem[] = [
  {
    organization: "Traveloka",
    role: "Product Manager — Competitive Intelligence",
    period: "2024 — Present",
    location: "Jakarta, Indonesia",
    summary:
      "Lead Competitive Intelligence products: the platform, data infrastructure, and internal tools that turn competitor signals into decisions.",
    points: [
      "Own the strategy and roadmap for the internal Competitive Intelligence platform end to end.",
      "Shifted the function from on-request analysis to always-on infrastructure through automation and standardization.",
      "Drive the tradeoffs behind data quality, coverage, and collection ROI with a small team.",
    ],
  },
  {
    organization: "Astro",
    role: "Operations / Product",
    period: "2022 — 2024",
    location: "Jakarta, Indonesia",
    summary:
      "Worked at the intersection of operations and product in a fast-scaling quick-commerce environment.",
    points: [
      "Translated messy operational reality into product and process requirements.",
      "Built the operational instinct for what actually breaks at scale — later foundational to platform work.",
    ],
  },
  {
    organization: "Anteraja",
    role: "Operations",
    period: "2020 — 2022",
    location: "Jakarta, Indonesia",
    summary:
      "Operations in last-mile logistics — the origin of a systems-and-constraints view of problems.",
    points: [
      "Ran and improved operational processes under real-world constraints and scale.",
      "Learned to reason about throughput, bottlenecks, and failure modes in physical systems.",
    ],
  },
];

export const education: TimelineItem[] = [
  {
    organization: "Materials Engineering",
    role: "Bachelor's Degree",
    period: "—",
    summary:
      "An engineering foundation: reasoning from first principles, modeling systems, and respecting constraints.",
    points: [],
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Product",
    skills: [
      "Product Strategy",
      "Roadmapping",
      "Discovery",
      "Prioritization",
      "Tradeoff Analysis",
      "Decision Making",
    ],
  },
  {
    title: "Domains",
    skills: [
      "Platform Products",
      "Data Products",
      "Marketplace",
      "Internal Tools",
      "Competitive Intelligence",
      "Automation",
    ],
  },
  {
    title: "Technical",
    skills: [
      "Data Infrastructure",
      "SQL / BigQuery",
      "Scraping Systems",
      "Experimentation",
      "Monitoring & Reliability",
      "Data Quality",
    ],
  },
];
