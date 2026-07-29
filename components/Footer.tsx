import Link from "next/link";

const capabilityLinks = [
  { label: "Impact", href: "#impact" },
  { label: "Solutions", href: "#solutions" },
  { label: "Programs", href: "#programs" },
  { label: "Stories", href: "#stories" },
  { label: "FAQs", href: "#faq" }
];

const companyLinks = [
  { label: "Contact", href: "#contact" },
  { label: "Request Access", href: "#contact" },
  { label: "Book a Demo", href: "#contact" }
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
            measurable learning outcomes. Illustrative content is used where
            real customer claims were not verified.
          </p>
        </div>

        <FooterColumn title="Capabilities" links={capabilityLinks} />
        <FooterColumn title="Explore" links={companyLinks} />

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-brand-mint">
            Contact
          </h2>
          <address className="mt-4 not-italic text-sm leading-7 text-slate-300">
            Email us:{" "}
            <a
              href="mailto:enterprise@accredian.com"
              className="font-semibold text-white transition hover:text-brand-mint"
            >
              enterprise@accredian.com
            </a>
            <br />
            Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
            Sector 18, Gurugram, Haryana
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs font-semibold uppercase text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>(c) 2026 Accredian Enterprise assignment clone.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#solutions" className="hover:text-white">
              Solutions
            </Link>
            <Link href="#programs" className="hover:text-white">
              Programs
            </Link>
            <Link href="#contact" className="hover:text-white">
              Contact
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
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h2 className="text-sm font-black uppercase tracking-[0.16em] text-brand-mint">
        {title}
      </h2>
      <ul className="mt-4 space-y-3 text-sm text-slate-300">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
