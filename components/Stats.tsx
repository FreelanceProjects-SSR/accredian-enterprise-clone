import {
  ChartNoAxesColumnIncreasing,
  ClipboardCheck,
  GraduationCap,
  Users
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const stats = [
  {
    value: "Skill map",
    label: "Readiness baseline",
    description: "Identify role-specific gaps before designing a program.",
    icon: ChartNoAxesColumnIncreasing
  },
  {
    value: "Cohorts",
    label: "Guided learning",
    description: "Organize learners into practical tracks with mentor support.",
    icon: GraduationCap
  },
  {
    value: "Projects",
    label: "Applied outcomes",
    description: "Use hands-on work to connect training with job context.",
    icon: Users
  },
  {
    value: "Reports",
    label: "Progress visibility",
    description: "Give stakeholders a clear view of completion and momentum.",
    icon: ClipboardCheck
  }
];

export default function Stats() {
  return (
    <section id="impact" className="bg-brand-soft py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Impact"
          title="Program highlights designed for measurable learning"
          description="This assignment uses original, illustrative highlight cards inspired by enterprise training flows. They are not presented as verified Accredian statistics."
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
                <p className="mt-6 text-2xl font-black text-brand-navy">
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
