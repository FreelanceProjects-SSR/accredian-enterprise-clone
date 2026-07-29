const companies = ["Amazon", "Google", "Microsoft", "TCS", "Accenture", "Meta"];

export default function LogoStrip() {
  return (
    <section className="border-b border-slate-200 bg-white py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[220px_1fr] lg:items-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
            Trusted by industry teams
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {companies.map((company) => (
              <div
                key={company}
                className="flex h-12 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-black text-brand-navy"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
