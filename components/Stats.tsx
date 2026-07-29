import { ChartNoAxesColumnIncreasing, Globe2, GraduationCap, Users } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const stats = [
  {
    value: "150%",
    label: "Highest salary hike",
    description: "Programs focused on outcomes that improve career mobility.",
    icon: ChartNoAxesColumnIncreasing
  },
  {
    value: "60%",
    label: "Average salary hike",
    description: "Learners report practical impact after applied projects.",
    icon: GraduationCap
  },
  {
    value: "80%",
    label: "Positive career impact",
    description: "Skill growth tied to real roles, teams, and business goals.",
    icon: Users
  },
  {
    value: "Global",
    label: "Enterprise delivery",
    description: "Scalable cohorts for distributed and hybrid teams.",
    icon: Globe2
  }
];

export default function Stats() {
  return (
    <section id="impact" className="bg-brand-soft py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Impact"
          title="A legacy of excellence and measurable workforce outcomes"
          description="Accredian-inspired enterprise programs combine structured learning, mentor support, and progress visibility for capability leaders."
          align="center"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.label}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-mint text-brand-blue">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-6 text-3xl font-black text-brand-navy">
                  {item.value}
                </p>
                <h3 className="mt-2 text-base font-bold text-brand-ink">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
