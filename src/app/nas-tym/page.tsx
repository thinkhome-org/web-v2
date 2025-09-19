export const metadata = { title: 'Náš tým – ThinkHome' };

const TEAM = [
  { name: 'Samuel Paluba', role: 'CEO & Senior IT Consultant' },
  { name: 'Ondřej Jansa', role: 'CTO & Cybersecurity Expert' },
  { name: 'Vojtěch Pell', role: 'WordPress Specialist & Školitel' },
  { name: 'Erdinç Daşkın', role: 'Senior Frontend Developer' },
  { name: 'Šimon', role: 'Hardware Specialist' },
];

export default function Page() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-semibold">Náš tým</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((p) => (
            <div key={p.name} className="rounded-lg border border-white/10 bg-muted p-5">
              <div className="h-10 w-10 rounded-full bg-white/10" />
              <h3 className="mt-4 text-lg font-medium">{p.name}</h3>
              <p className="text-sm text-white/70">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


