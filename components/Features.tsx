import {
  BarChart3,
  BrainCircuit,
  Gauge,
  ShieldCheck,
  Target,
  UsersRound
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const features = [
  {
    title: "Precision learning",
    description:
      "Tailored paths close role-specific skill gaps across analytics, AI, technology, and leadership.",
    icon: Target
  },
  {
    title: "Accelerated upskilling",
    description:
      "Live mentor sessions, applied projects, and milestone reviews help teams move from learning to execution.",
    icon: Gauge
  },
  {
    title: "Enterprise grade",
    description:
      "Cohort operations, learning dashboards, and governance workflows support large teams and repeat programs.",
    icon: ShieldCheck
  },
  {
    title: "ROI dashboards",
    description:
      "Track participation, completion, assessments, projects, and impact signals across employee groups.",
    icon: BarChart3
  },
  {
    title: "Expert mentors",
    description:
      "Experienced practitioners bring industry context into every capability track.",
    icon: UsersRound
  },
  {
    title: "AI-ready workforce",
    description:
      "Programs help teams adopt generative AI and data workflows with strategic clarity.",
    icon: BrainCircuit
  }
];

export default function Features() {
  return (
    <section id="solutions" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="Capabilities"
            title="Designed for the modern enterprise"
            description="A practical upskilling model that connects learner growth with business priorities, from hiring readiness to AI-led transformation."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="rounded-lg border border-slate-200 bg-brand-soft p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lift"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-brand-blue shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
