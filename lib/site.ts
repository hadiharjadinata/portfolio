export const siteConfig = {
  name: "Hadi Maulana Harjadinata",
  shortName: "Hadi Harjadinata",
  title: "Hadi Maulana Harjadinata — Product Manager",
  description:
    "Product Manager building products that combine data, engineering, and business strategy to solve complex operational problems. Currently leading Competitive Intelligence products at Traveloka.",
  url: "https://portfolio-rho-coral-27.vercel.app",
  role: "Product Manager",
  company: "Traveloka",
  email: "hadi.harjadinata@traveloka.com",
  links: {
    linkedin: "https://www.linkedin.com/in/hadiharjadinata",
    github: "https://github.com/hadiharjadinata",
    resume: "/resume.pdf",
  },
  nav: [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Writing", href: "/writing" },
    { title: "Resume", href: "/resume" },
    { title: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
