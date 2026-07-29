import { ArrowDownRight, ListChecks } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-brand-navy px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-lg border border-white/12 bg-white/8 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-mint">
            Request enterprise access
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            Build a workforce roadmap that moves with your business.
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-amber px-6 py-4 text-sm font-black uppercase text-brand-navy transition hover:bg-white"
          >
            Request Access
            <ArrowDownRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <Link
            href="#programs"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-4 text-sm font-black uppercase text-white transition hover:bg-white hover:text-brand-navy"
          >
            View Programs
            <ListChecks className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
