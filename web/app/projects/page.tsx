import Container from "../../components/Container";
import Section from "../../components/Section";

export default function ProjectsPage() {
  const items = Array.from({ length: 9 }, (_, i) => i + 1);
  return (
    <Section>
      <Container>
        <h1 className="section-title">Projects</h1>
        <p className="section-subtitle mt-2">Filterable gallery could go here later.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="aspect-[4/3] bg-slate-200" />
              <div className="p-4">
                <div className="font-medium">Project #{i}</div>
                <div className="text-sm text-slate-600">Scope • Duration</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}