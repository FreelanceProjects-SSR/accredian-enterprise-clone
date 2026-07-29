"use client";

import { useState } from "react";

const teamGroups = [
  "HR & L&D",
  "Data Teams",
  "Product Teams",
  "Tech Teams",
  "Operations",
  "Leadership"
];

export default function LogoStrip() {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  return (
    <section className="border-b border-slate-200 bg-white py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[220px_1fr] lg:items-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
            Built for cross-functional teams
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {teamGroups.map((group) => {
              const isSelected = selectedGroup === group;

              return (
                <button
                  key={group}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() =>
                    setSelectedGroup((current) =>
                      current === group ? null : group
                    )
                  }
                  className={`flex h-12 items-center justify-center rounded-lg border px-3 text-sm font-black outline-none transition duration-300 hover:-translate-y-1 hover:border-brand-blue hover:bg-brand-mint hover:text-brand-navy hover:shadow-lift focus-visible:-translate-y-1 focus-visible:border-brand-blue focus-visible:ring-4 focus-visible:ring-blue-100 ${
                    isSelected
                      ? "-translate-y-1 border-brand-blue bg-brand-mint text-brand-navy shadow-lift"
                      : "border-slate-200 bg-slate-50 text-brand-navy"
                  }`}
                >
                  {group}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
