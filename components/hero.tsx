"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

const focusAreas = [
  "Competitive Intelligence",
  "Platform",
  "Data Products",
];

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 },
    },
  };

  const item = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 14 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
        },
      };

  return (
    <section className="container flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl space-y-8"
      >
        <motion.div variants={item} className="flex items-center gap-2.5">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <p className="text-sm text-muted-foreground">
            {siteConfig.role} at {siteConfig.company}
          </p>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.div variants={item} className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-lg font-medium text-foreground md:text-xl">
            Product Manager
          </span>
          {focusAreas.map((area) => (
            <span
              key={area}
              className="text-lg text-muted-foreground md:text-xl"
            >
              <span aria-hidden className="mr-3 text-border">
                /
              </span>
              {area}
            </span>
          ))}
        </motion.div>

        <motion.p
          variants={item}
          className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          I build products that combine data, engineering, and business strategy
          to solve complex operational problems.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
          <Button asChild size="lg">
            <Link href="/projects">
              View Projects
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/resume">
              <FileText className="size-4" />
              Resume
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer noopener">
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer noopener">
              <Github className="size-4" />
              GitHub
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
