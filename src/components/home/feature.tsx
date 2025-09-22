import { Card, CardContent, CardHeader } from '@/components/ui/card';

type FeatureProps = { icon: React.ReactNode; title: string; desc: string };

export const Feature = ({ icon, title, desc }: FeatureProps) => (
  <Card>
    <CardHeader className="pb-2 flex items-center gap-3 text-white/90">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">{icon}</span>
      {title}
    </CardHeader>
    <CardContent className="text-sm text-white/70">{desc}</CardContent>
  </Card>
);


