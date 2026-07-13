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
    period: "Dec 2024 — Present",
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
    role: "Platform Excellence Lead",
    period: "Jul 2024 — Dec 2024",
    location: "Jakarta, Indonesia",
    summary:
      "Led platform initiatives in a fast-scaling quick-commerce environment — operational analytics, forecasting automation, and platform performance monitoring.",
    points: [
      "Drove platform work spanning operational analytics, forecasting automation, and performance monitoring.",
      "Developed Search Guidelines that improved add-to-cart performance through better search relevance, category discovery, and keyword ranking.",
    ],
  },
  {
    organization: "Anteraja",
    role: "Product Manager Lead",
    period: "Sep 2021 — Jul 2024",
    location: "Jakarta, Indonesia",
    summary:
      "Owned product across last-mile logistics — cargo, frozen, and instant delivery — where a systems-and-constraints view of problems took shape.",
    points: [
      "Designed and launched an automated Volume Forecast System, building a standardization layer over unstandardized customer inputs and cutting forecasting cycles from 4–5 days to 1 day.",
      "Managed end-to-end product across cargo, frozen, and instant delivery verticals — defining north-star metrics, system flows, and operational KPIs across regions.",
    ],
  },
  {
    organization: "GMF AeroAsia",
    role: "Planning and Engineering Manager",
    period: "Dec 2015 — Aug 2021",
    location: "Jakarta, Indonesia",
    summary:
      "Planning and engineering for aircraft structural maintenance at Garuda Indonesia's MRO arm — the origin of reasoning from first principles under hard safety constraints.",
    points: [
      "Led planning and engineering for aircraft structural maintenance projects, directing 22 engineers and 30 operational support staff.",
      "Coordinated cross-functional engineering teams to keep aircraft maintenance safe, on time, and efficient.",
    ],
  },
];

export const education: TimelineItem[] = [
  {
    organization: "Institut Teknologi Bandung (ITB)",
    role: "Bachelor of Engineering — Materials Engineering",
    period: "2011 — 2015",
    location: "Bandung, Indonesia",
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
