'use client';

import { AuroraBackground } from "@/components/ui/aurora-background";
import QuoteRequestForm from "@/components/forms/QuoteRequestForm";

export default function QuoteRequest() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <AuroraBackground>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl bg-zinc-950/50 p-8 rounded-xl backdrop-blur-sm">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Request a Quote
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Tell us about your project and we&apos;ll help bring your vision to life. Fill out the form below and our team will get back to you with a detailed quote.
              </p>
            </div>
            <div className="mt-16">
              <QuoteRequestForm />
            </div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
}