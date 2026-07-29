"use client";

import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";

const testimonials = [
  {
    quote:
      "Accredian's enterprise program helped our analytics group move from fragmented learning to a measurable capability roadmap.",
    name: "Sarah Jenkins",
    role: "VP Engineering, CloudTech"
  },
  {
    quote:
      "The applied projects and mentor feedback made the training relevant for our teams from week one.",
    name: "Michael Chen",
    role: "Chief Data Officer, Global Finance"
  },
  {
    quote:
      "A structured, professional experience with the right level of reporting for business and HR stakeholders.",
    name: "Elena Rodriguez",
    role: "HR Director, Innovate Corp"
  }
];

export default function Testimonials() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="stories" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Success stories"
          title="Voices of transformation"
          description="Enterprise learning works best when it creates visible confidence, stronger teams, and repeatable outcomes."
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
