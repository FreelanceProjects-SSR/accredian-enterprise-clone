import {
  ArrowRight,
  BarChart3,
  ClipboardCheck,
  PlayCircle,
  Route,
  UsersRound
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const workflow = [
    {
      step: "01",
      title: "Map skill gaps",
      description: "Assess team readiness",
      icon: ClipboardCheck
    },
    {
      step: "02",
      title: "Build pathways",
      description: "Design role-based learning",
      icon: Route
    },
    {
      step: "03",
      title: "Run cohorts",
      description: "Deliver mentor-led sessions",
      icon: UsersRound
    },
    {
      step: "04",
      title: "Track outcomes",
      description: "Measure progress clearly",
      icon: BarChart3
    }
  ];

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[72svh] items-center overflow-hidden bg-brand-soft text-brand-navy"
    >
      <Image
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80"
        alt="Enterprise team collaborating in a strategy workshop"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/62 to-white/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-brand-navy/45 via-brand-navy/12 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-lg border border-brand-blue/20 bg-white/82 px-3 py-2 text-sm font-black text-brand-navy shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-brand-amber" />
            Enterprise workforce transformation
          </div>
          <h1 className="mt-6 text-balance text-4xl font-black leading-tight text-brand-navy drop-shadow-[0_2px_10px_rgba(255,255,255,0.85)] sm:text-5xl lg:text-6xl">
            Re-engineering workforce performance.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-brand-ink drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)] sm:text-xl">
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
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-navy/20 bg-white/75 px-6 py-4 text-sm font-black uppercase text-brand-navy shadow-sm backdrop-blur transition hover:bg-brand-navy hover:text-white"
            >
              View Stories
              <PlayCircle className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 max-w-3xl rounded-lg border border-white/70 bg-white/86 p-3 shadow-soft backdrop-blur-md">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {workflow.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.step}
                    className="group rounded-lg p-3 transition hover:bg-brand-mint"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue text-white transition group-hover:bg-brand-navy">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-xs font-black uppercase tracking-[0.16em] text-brand-cyan">
                        {item.step}
                      </span>
                    </div>
                    <p className="mt-3 text-base font-black text-brand-navy">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
