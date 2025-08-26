import Container from "../components/Container";
import Section from "../components/Section";
import Card from "../components/Card";
import Testimonial from "../components/Testimonial";
import { site } from "../lib/site";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-100">
        <Container>
          <div className="py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                {site.tagline}
              </h1>
              <p className="mt-4 text-slate-600">
                Serving Your City with residential and commercial builds.
                Licensed, insured, and committed to clear communication.
              </p>
              <div className="mt-6 flex gap-3">
                <Link href="/contact/" className="button-primary">Get a Free Quote</Link>
                <Link href="/projects/" className="button-secondary">View Projects</Link>
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] w-full rounded-2xl bg-slate-200" aria-label="Project hero placeholder" />
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <Section>
        <Container>
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle mt-2">From ground-up builds to precise remodels.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {site.services.map((s) => (
              <Card key={s.title}>
                <h3 className="font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                <Link className="mt-4 inline-block text-blue-700 hover:underline" href="/services/">
                  Learn more →
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section>
        <Container>
          <h2 className="section-title">What clients say</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {site.testimonials.map((t) => (
              <Testimonial key={t.author} quote={t.quote} author={t.author} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}