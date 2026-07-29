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
      title: "Assess",
      description: "Skill readiness",
      icon: ClipboardCheck
    },
    {
      step: "02",
      title: "Design",
      description: "Custom learning paths",
      icon: Route
    },
    {
      step: "03",
      title: "Deliver",
      description: "Mentor-led cohorts",
      icon: UsersRound
    },
    {
      step: "04",
      title: "Measure",
      description: "Progress reporting",
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
          <div className="mt-10 max-w-4xl rounded-lg border border-white/20 bg-brand-navy/90 p-3 text-white shadow-lift backdrop-blur-md">
            <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
              {workflow.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.step}
                    className={`group rounded-md p-3 transition duration-300 hover:bg-white/10 sm:min-h-[108px] ${
                      index > 0
                        ? "lg:border-l lg:border-white/15 lg:pl-5"
                        : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-brand-amber ring-1 ring-white/15 transition group-hover:bg-brand-amber group-hover:text-brand-navy">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-black uppercase tracking-[0.18em] text-brand-amber">
                            {item.step}
                          </span>
                          <span
                            className="h-px w-6 bg-white/20 transition group-hover:bg-brand-amber"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="mt-2 text-xl font-black leading-none text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm font-semibold leading-5 text-white/78">
                          {item.description}
                        </p>
                      </div>
                    </div>
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
