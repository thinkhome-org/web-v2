import { Card, CardContent } from '@/components/ui/card';

type QuoteProps = { text: string; author: string };

export const Quote = ({ text, author }: QuoteProps) => (
  <Card className="border-0 shadow-md">
    <CardContent className="p-6">
      <blockquote className="text-gray-700 leading-relaxed">{text}</blockquote>
      <div className="mt-4 text-sm font-medium text-accent">{author}</div>
    </CardContent>
  </Card>
);


