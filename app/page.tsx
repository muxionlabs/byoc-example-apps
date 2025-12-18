"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { AppCard } from "@/components/app-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import appsData from "@/data/apps.json";
import type { AppEntry } from "@/data/types";
import { cn } from "@/lib/utils";

const apps = appsData as AppEntry[];
const repoUrl = "https://github.com/livepeer/example-apps";
const contributeUrl = `${repoUrl}/blob/main/CONTRIBUTING.md`;

export default function Home() {
  const [activeTag, setActiveTag] = useState("All");
  const [search, setSearch] = useState("");

  const tags = useMemo(() => {
    const allTags = apps.flatMap((app) => app.tags);
    const uniqueTags = Array.from(new Set(allTags)).sort((a, b) =>
      a.localeCompare(b)
    );
    return ["All", ...uniqueTags];
  }, []);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return apps.filter((app) => {
      const matchesTag =
        activeTag === "All" ||
        app.tags.some((tag) => tag.toLowerCase() === activeTag.toLowerCase());
      const haystack = `${app.name} ${app.tagline} ${app.tags.join(" ")}`.toLowerCase();
      const matchesSearch = !query || haystack.includes(query);
      return matchesTag && matchesSearch;
    });
  }, [activeTag, search]);

  return (
    <div className="min-h-screen pb-16">
      <header className="mx-auto flex max-w-6xl flex-col gap-4 px-6 pt-6 pb-4">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto]">
          <div className="flex flex-col gap-3">
            <div className="ml-1 mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground/80">
              <Image
                src="/logos/Livepeer-Logo-Symbol-Light.svg"
                alt="Livepeer"
                width={13}
                height={13}
                priority
                className="block grayscale opacity-70"
              />
              <span className="relative top-[0.5px] inline-flex h-[13px] items-center leading-none">
                Livepeer
              </span>
            </div>
            <div className="flex flex-wrap items-baseline gap-2">
              <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Example apps
              </h1>
            </div>
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              Forkable example applications build on Livepeer's bring your own container pipeline.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-2 md:justify-end md:self-center">
            <Button variant="default" className="h-10 rounded-full px-4 text-sm" asChild>
              <a href={repoUrl} target="_blank" rel="noreferrer">
                Submit your app
              </a>
            </Button>
            <Button variant="outline" className="h-10 rounded-full px-4 text-sm" asChild>
              <a href={contributeUrl} target="_blank" rel="noreferrer">
                Contribution guide
              </a>
            </Button>
          </div>
        </div>
        <Separator className="mt-3 w-full border-white/10" />
      </header>

      <main className="mx-auto mt-4 flex max-w-6xl flex-col gap-8 px-6">
        <section className="glass-panel flex flex-col gap-4 p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Button
                  key={tag}
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveTag(tag)}
                  className={cn(
                    "rounded-full border-border/70 bg-card text-xs text-foreground transition",
                    activeTag === tag
                      ? "border-primary/40 bg-primary text-primary-foreground"
                      : "hover:border-primary/30 hover:bg-secondary"
                  )}
                >
                  {tag}
                </Button>
              ))}
            </div>
            <div className="relative w-full md:ml-auto md:max-w-xs">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M20 20L17 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search apps"
                aria-label="Search apps"
                className="rounded-full border-border/70 bg-card pl-10 text-sm"
              />
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Community submissions welcome.
          </div>
        </section>

        {filtered.length === 0 ? (
          <section className="glass-panel flex flex-col items-center gap-3 px-6 py-14 text-center">
            <h2 className="text-2xl font-semibold text-foreground">No matches yet.</h2>
            <p className="max-w-md text-sm text-muted-foreground">
              Try another tag or search phrase, or add the first community app in
              this category.
            </p>
            <Button variant="default" className="rounded-full" asChild>
              <a href={repoUrl} target="_blank" rel="noreferrer">
                Add an app
              </a>
            </Button>
          </section>
        ) : (
          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((app, index) => (
              <div
                key={app.name}
                className="animate-rise"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <AppCard app={app} />
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
