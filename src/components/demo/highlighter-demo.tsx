"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { HighlighterItem, HighlightGroup, Particles } from "@/components/ui/highlighter";
import { Mail, Phone } from "lucide-react";

export function HighlighterDemo() {
  return (
    <section className="relative mx-auto mb-20 mt-6 max-w-5xl">
      <HighlightGroup className="group h-full">
        <div className="group/item h-full md:col-span-6 lg:col-span-12" data-aos="fade-down">
          <HighlighterItem className="rounded-3xl p-6">
            <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-black">
              <Particles
                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                quantity={200}
                color={"#555555"}
                vy={-0.2}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                  <div className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]">
                    <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="absolute bottom-12 left-14 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800">
                      Contact Us
                    </div>
                    <div className="absolute left-2 top-20 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800">
                      Support
                    </div>
                    <div className="absolute bottom-20 right-1 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800">
                      Services
                    </div>
                    <div className="absolute right-12 top-10 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800">
                      Projects
                    </div>
                  </div>

                  <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                    <div className="flex flex-col items-center">
                      <h3 className="mt-6 pb-1 font-bold">
                        <span className="text-2xl md:text-4xl">
                          Have a Project in Mind?
                        </span>
                      </h3>
                    </div>
                    <p className="mb-4 text-center text-slate-400">
                      Let&apos;s discuss how we can help bring your vision to life.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Link href="/quote-request">
                        <Button>Request Quote</Button>
                      </Link>
                      <Link
                        href="mailto:contact@futonix.com"
                        className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
                      >
                        <span className="flex items-center gap-1">
                          <Mail className="h-5 w-5" />
                        </span>
                      </Link>
                      <Link
                        href="tel:8773886649"
                        className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
                      >
                        <span className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
}