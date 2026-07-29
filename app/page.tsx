import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import LogoStrip from "@/components/LogoStrip";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import SectionHeader from "@/components/SectionHeader";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Stats />
        <Features />
        <Programs />
        <Benefits />
        <Testimonials />
        <CTA />
        <section id="contact" className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div className="flex flex-col justify-center">
              <SectionHeader
                eyebrow="Connect with us"
                title="Ready to empower your team?"
                description="Share a few details and an enterprise learning advisor will help map a workforce capability plan for your organization."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Customized training roadmap",
                  "Cohort and role-based learning paths",
                  "Progress tracking for business leaders",
                  "Mentor-led delivery at enterprise scale"
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-slate-200 bg-brand-soft px-4 py-3 text-sm font-semibold text-brand-navy"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <LeadCaptureForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
