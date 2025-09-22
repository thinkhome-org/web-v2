type StepProps = { num: string; title: string; desc: string };

export const Step = ({ num, title, desc }: StepProps) => (
  <li className="rounded-md border border-white/10 bg-muted p-5">
    <span className="text-accent font-mono">{num}</span>
    <p className="mt-1 font-medium text-white/90">{title}</p>
    <p className="mt-1 text-sm text-white/70">{desc}</p>
  </li>
);


