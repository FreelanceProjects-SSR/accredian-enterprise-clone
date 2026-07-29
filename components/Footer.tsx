import Link from "next/link";

const capabilityLinks = [
  "Data Science",
  "Generative AI",
  "Strategic Hiring",
  "Talent Assessment",
  "Corporate Training"
];

const companyLinks = [
  "About Us",
  "Success Stories",
  "Our Mentors",
  "Partner Program",
  "Careers"
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1729] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <Link href="#home" className="inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue text-lg font-black">
              A
            </span>
            <span>
              <span className="block text-lg font-black leading-5">
                accredian
              </span>
              <span className="block text-xs font-bold uppercase tracking-[0.18em] text-brand-mint">
                Enterprise
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
            A polished assignment implementation inspired by Accredian
            Enterprise, focused on workforce upskilling, data, AI, and
            measurable learning outcomes.
          </p>
        </div>

        <FooterColumn title="Capabilities" links={capabilityLinks} />
        <FooterColumn title="Company" links={companyLinks} />

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-brand-mint">
            Global presence
          </h2>
          <address className="mt-4 not-italic text-sm leading-7 text-slate-300">
            Cyber City, Gurugram
            <br />
            Haryana, India - 122002
            <br />
            enterprise@accredian.com
            <br />
            +91 124 400 9000
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs font-semibold uppercase text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Accredian Enterprise. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#home" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#home" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="#home" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h2 className="text-sm font-black uppercase tracking-[0.16em] text-brand-mint">
        {title}
      </h2>
      <ul className="mt-4 space-y-3 text-sm text-slate-300">
        {links.map((link) => (
          <li key={link}>
            <Link href="#contact" className="transition hover:text-white">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
