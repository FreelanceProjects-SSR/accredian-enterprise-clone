import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

const benefits = [
  "Role-based learning paths mapped to business objectives",
  "Live classes and recorded resources for hybrid teams",
  "Projects that mirror the organization's operating context",
  "Dedicated success support for learners and program owners",
  "Dashboards that simplify executive progress reviews"
];

export default function Benefits() {
  return (
    <section className="bg-brand-soft py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div className="relative min-h-[360px] overflow-hidden rounded-lg shadow-soft sm:min-h-[430px]">
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80"
            alt="Professionals reviewing learning and performance dashboards"
            fill
            loading="eager"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-brand-navy/88 p-6 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-mint">
              Enterprise learning teams
            </p>
            <p className="mt-2 text-2xl font-black">
              The future of your workforce starts with intelligence.
            </p>
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="Benefits"
            title="Built for capability leaders, HR teams, and business owners"
            description="The experience is structured so decision-makers see program momentum while learners get practical, confidence-building support."
          />
          <div className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan"
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold leading-6 text-brand-ink">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
