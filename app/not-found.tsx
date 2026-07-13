import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[70svh] flex-col items-center justify-center text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        404
      </p>
      <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-pretty text-muted-foreground">
        The page you&apos;re looking for may have moved or never existed.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">
          <ArrowLeft className="size-4" />
          Back home
        </Link>
      </Button>
    </div>
  );
}
