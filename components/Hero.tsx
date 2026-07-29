import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[72svh] items-center overflow-hidden bg-brand-navy text-white"
    >
      <Image
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80"
        alt="Enterprise team collaborating in a strategy workshop"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-navy/78" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-navy to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-lg border border-brand-cyan/30 bg-brand-navy/90 px-3 py-2 text-sm font-bold text-white shadow-soft backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-brand-amber" />
            Enterprise workforce transformation
          </div>
          <h1 className="mt-6 text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Re-engineering workforce performance.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
            Build future-ready Data, AI, analytics, and leadership capability
            through mentor-led enterprise programs designed for measurable
            business impact.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-amber px-6 py-4 text-sm font-black uppercase text-brand-navy shadow-lift transition hover:bg-white"
            >
              Book a Free Demo
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="#stories"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-4 text-sm font-black uppercase text-white transition hover:bg-white hover:text-brand-navy"
            >
              View Stories
              <PlayCircle className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["Assess", "Skill readiness"],
              ["Design", "Custom learning paths"],
              ["Deliver", "Mentor-led cohorts"],
              ["Measure", "Progress reporting"]
            ].map(([value, label]) => (
              <div key={label} className="border-l border-white/25 pl-4">
                <p className="text-xl font-black text-white sm:text-2xl">
                  {value}
                </p>
                <p className="mt-1 text-sm text-slate-200">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
