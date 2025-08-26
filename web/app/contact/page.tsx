import Container from "../../components/Container";
import Section from "../../components/Section";
import ContactForm from "../../components/ContactForm";
import { site } from "../../lib/site";

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <h1 className="section-title">Get a Quote</h1>
        <p className="section-subtitle mt-2">Tell us about your project. We'll respond within 1 business day.</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <ContactForm />
          </div>
          <div className="order-1 md:order-2 rounded-2xl bg-white p-6 border border-slate-200 shadow">
            <h2 className="font-semibold">Contact Info</h2>
            <ul className="mt-3 space-y-1 text-sm text-slate-700">
              <li><strong>Phone:</strong> <a className="hover:underline" href={`tel:${site.phone.replace(/[^\\d]/g, '')}`}>{site.phone}</a></li>
              <li><strong>Email:</strong> <a className="hover:underline" href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><strong>Address:</strong> {site.address}</li>
            </ul>
            <div className="mt-6 aspect-[4/3] rounded-xl bg-slate-200" aria-label="Map placeholder" />
          </div>
        </div>
      </Container>
    </Section>
  );
}