import Container from "../../components/Container";
import Section from "../../components/Section";
import FAQItem from "../../components/FAQItem";
import { site } from "../../lib/site";

export default function AboutPage() {
  return (
    <Section>
      <Container>
        <h1 className="section-title">About Us</h1>
        <p className="section-subtitle mt-2 max-w-2xl">
          We’re a local team focused on quality builds and transparent communication.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow">
              <h2 className="font-semibold">Licensing & Insurance</h2>
              <p className="mt-2 text-sm text-slate-600">License #ABC123456 • Fully insured.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow">
              <h2 className="font-semibold">Safety</h2>
              <p className="mt-2 text-sm text-slate-600">OSHA-compliant practices and daily jobsite checklists.</p>
            </div>
          </div>
          <div>
            <h2 className="font-semibold">FAQs</h2>
            <div className="mt-2">
              {site.testimonials.length > 0 && site.testimonials[0] && null}
              {site.faqs?.map?.((f: any) => (
                <FAQItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}