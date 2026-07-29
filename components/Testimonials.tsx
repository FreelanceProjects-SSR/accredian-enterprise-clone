"use client";

import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";

const testimonials = [
  {
    quote:
      "Our team needs training that connects business goals, learner progress, and practical projects in one clear roadmap.",
    name: "L&D Leader",
    role: "Illustrative stakeholder feedback"
  },
  {
    quote:
      "Mentor-led sessions and applied assignments would help learners turn new concepts into repeatable team habits.",
    name: "Analytics Manager",
    role: "Illustrative stakeholder feedback"
  },
  {
    quote:
      "A useful enterprise program should make participation, completion, and next-step reporting easy for sponsors to review.",
    name: "Business Sponsor",
    role: "Illustrative stakeholder feedback"
  }
];

export default function Testimonials() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="stories" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Feedback themes"
          title="Representative enterprise learning needs"
          description="These cards use original illustrative copy for the assignment and are not real customer testimonials or verified Accredian partner quotes."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <button
              key={testimonial.name}
              type="button"
              aria-pressed={activeCard === testimonial.name}
              onClick={() =>
                setActiveCard((current) =>
                  current === testimonial.name ? null : testimonial.name
                )
              }
              className={`group rounded-lg border p-6 text-left shadow-soft outline-none transition duration-300 hover:-translate-y-2 hover:border-brand-blue hover:bg-white hover:shadow-lift focus-visible:-translate-y-2 focus-visible:border-brand-blue focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-blue-100 ${
                activeCard === testimonial.name
                  ? "-translate-y-2 border-brand-blue bg-white shadow-lift"
                  : "border-slate-200 bg-brand-soft"
              }`}
            >
              <p className="text-lg font-semibold leading-8 text-brand-navy transition group-hover:text-brand-blue">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue text-sm font-black text-white transition group-hover:scale-105 group-hover:bg-brand-navy">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="font-black text-brand-navy">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
