const teamGroups = [
  "HR & L&D",
  "Data Teams",
  "Product Teams",
  "Tech Teams",
  "Operations",
  "Leadership"
];

export default function LogoStrip() {
  return (
    <section className="border-b border-slate-200 bg-white py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[220px_1fr] lg:items-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
            Built for cross-functional teams
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {teamGroups.map((group) => (
              <div
                key={group}
                className="flex h-12 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-black text-brand-navy"
              >
                {group}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
