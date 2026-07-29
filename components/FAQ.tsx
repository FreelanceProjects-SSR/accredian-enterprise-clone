import SectionHeader from "@/components/SectionHeader";

const faqs = [
  {
    question: "What kinds of enterprise programs can this page support?",
    answer:
      "The structure is designed for Data, AI, analytics, product, technology, operations, and leadership training use cases."
  },
  {
    question: "Can the curriculum be customized for a company?",
    answer:
      "Yes. The page presents a model where skill gaps, learner groups, delivery format, and outcomes can be mapped before a program is launched."
  },
  {
    question: "How is learner progress represented?",
    answer:
      "The implementation highlights cohorts, applied projects, completion tracking, and stakeholder reporting as expected enterprise learning features."
  },
  {
    question: "Where do lead submissions go?",
    answer:
      "For this assignment, submissions are validated by a Next.js API route and stored in memory for the server process lifetime."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-brand-soft py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQs"
          title="Common enterprise training questions"
          description="A compact FAQ section mirrors the reference site's support content while keeping the copy original to this assignment."
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-blue hover:shadow-lift"
            >
              <h3 className="text-lg font-black text-brand-navy">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
