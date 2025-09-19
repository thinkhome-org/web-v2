import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

const STEPS = [
  'Úvodní konzultace zdarma',
  'Detailní audit a návrh řešení',
  'Implementace, školení a dlouhodobá podpora',
];

export function HomeProcess() {
  return (
    <Section id="proces" className="bg-black">
      <Container className="px-6 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold">Postup spolupráce</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3 text-white/80">
          {STEPS.map((step, idx) => (
            <li key={idx} className="rounded-md border border-white/10 bg-muted p-5">
              <span className="text-accent font-mono">{String(idx + 1).padStart(2, '0')}</span>
              <p className="mt-2 font-medium">{step}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}


