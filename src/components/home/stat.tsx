type StatProps = { num: string; label: string };

export const Stat = ({ num, label }: StatProps) => (
  <div className="text-center">
    <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{num}</div>
    <div className="text-sm text-white/70">{label}</div>
  </div>
);


