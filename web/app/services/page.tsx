import Container from "../../components/Container";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { site } from "../../lib/site";

export default function ServicesPage() {
  return (
    <Section>
      <Container>
        <h1 className="section-title">Our Services</h1>
        <p className="section-subtitle mt-2 max-w-2xl">
          We focus on clear scopes, reliable schedules, and careful execution.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {site.services.map((s) => (
            <Card key={s.title}>
              <h2 className="font-semibold text-slate-900">{s.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Defined scope & timeline</li>
                <li>Transparent communication</li>
                <li>Licensed & insured crew</li>
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}