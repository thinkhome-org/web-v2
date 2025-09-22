import { IconCheck } from '@tabler/icons-react';

type ServiceProps = { icon: React.ReactNode; title: string; desc: string };

export const Service = ({ icon, title, desc }: ServiceProps) => (
  <div className="rounded-lg border border-white/10 bg-muted p-5 hover:border-white/20 transition-colors">
    <div className="flex items-center gap-3 text-white/90">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">{icon}</span>
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
    <p className="mt-2 text-sm text-white/70">{desc}</p>
    <div className="mt-4 inline-flex items-center gap-2 text-sm text-accent">
      <IconCheck size={16} /> Součástí SLA
    </div>
  </div>
);


