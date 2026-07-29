import { ArrowRight, BookOpenCheck, Layers3, LineChart, Sparkles } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const programs = [
  {
    title: "Data Science Academy",
    description:
      "Statistics, Python, machine learning, visualization, and capstone projects for data-driven teams.",
    accent: "bg-brand-blue"
  },
  {
    title: "Generative AI for Business",
    description:
      "Prompting, workflow automation, model evaluation, and safe AI adoption for managers and builders.",
    accent: "bg-brand-cyan"
  },
  {
    title: "Business Analytics",
    description:
      "Decision science, dashboards, experimentation, and stakeholder storytelling for analysts.",
    accent: "bg-brand-amber"
  },
  {
    title: "Product and Strategy",
    description:
      "Product thinking, roadmap planning, metrics, discovery, and cross-functional leadership.",
    accent: "bg-emerald-500"
  }
];

const deliveryModel = [
  { label: "Skill diagnosis", icon: LineChart },
  { label: "Custom curriculum", icon: Layers3 },
  { label: "Live mentor delivery", icon: BookOpenCheck },
  { label: "Measured impact", icon: Sparkles }
];

export default function Programs() {
  return (
    <section id="programs" className="bg-brand-navy py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Curriculum"
          title="Enterprise learning academies built for modern teams"
          description="Choose focused tracks or customize role-based learning paths around your team's technology stack, business goals, and skill maturity."
          align="center"
          tone="dark"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((program) => (
            <article
              key={program.title}
              className="rounded-lg border border-white/12 bg-white/8 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:bg-white/12"
            >
              <span
                className={`block h-2 w-16 rounded-full ${program.accent}`}
                aria-hidden="true"
              />
              <h3 className="mt-6 text-xl font-black text-white">
                {program.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-200">
                {program.description}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-amber transition hover:text-white"
              >
                Build this track
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 rounded-lg border border-white/12 bg-white/8 p-4 sm:grid-cols-2 lg:grid-cols-4">
          {deliveryModel.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex items-center gap-3 p-2">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-amber text-brand-navy">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold text-white">
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
