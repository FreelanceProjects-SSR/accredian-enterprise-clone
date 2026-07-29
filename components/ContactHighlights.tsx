"use client";

import { useState } from "react";

const highlights = [
  "Customized training roadmap",
  "Cohort and role-based learning paths",
  "Progress tracking for business leaders",
  "Mentor-led delivery at enterprise scale"
];

export default function ContactHighlights() {
  const [selectedHighlight, setSelectedHighlight] = useState<string | null>(
    null
  );

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {highlights.map((item) => {
        const isSelected = selectedHighlight === item;

        return (
          <button
            key={item}
            type="button"
            aria-pressed={isSelected}
            onClick={() =>
              setSelectedHighlight((current) =>
                current === item ? null : item
              )
            }
            className={`min-h-16 rounded-lg border px-4 py-3 text-left text-sm font-bold outline-none transition duration-300 hover:-translate-y-1 hover:border-brand-blue hover:bg-white hover:text-brand-blue hover:shadow-lift focus-visible:-translate-y-1 focus-visible:border-brand-blue focus-visible:ring-4 focus-visible:ring-blue-100 ${
              isSelected
                ? "-translate-y-1 border-brand-blue bg-white text-brand-blue shadow-lift"
                : "border-slate-200 bg-brand-soft text-brand-navy"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
