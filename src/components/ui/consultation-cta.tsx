import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { IconHeadset } from '@tabler/icons-react';

interface ConsultationCTAProps {
  className?: string;
  variant?: 'default' | 'compact';
}

export function ConsultationCTA({ className = '', variant = 'default' }: ConsultationCTAProps) {
  if (variant === 'compact') {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconHeadset size={24} className="text-accent" />
            <h3 className="text-xl font-semibold">Nevíte, kterou službu potřebujete?</h3>
          </div>
          <p className="text-white/80 text-lg">
            Rádi s vámi projdeme vaše potřeby a navrhneme optimální řešení. Konzultace je zdarma a bez závazků.
          </p>
          <Link href="/kontakt" className="inline-flex">
            <Button className="px-8 py-3">
              Nezávazná konzultace zdarma
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Card variant="glass" className={`max-w-4xl mx-auto ${className}`}>
      <CardContent className="pt-12 pb-12">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center">
              <IconHeadset size={32} className="text-accent" />
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Nevíte, kterou službu potřebujete?
          </h3>
          <p className="text-white/80 text-xl leading-relaxed max-w-2xl mx-auto">
            Rádi s vámi projdeme vaše potřeby a navrhneme optimální řešení. Konzultace je zdarma a bez závazků.
          </p>
          <Link href="/kontakt" className="inline-flex">
            <Button className="px-10 py-4 text-xl font-semibold btn-primary">
              Nezávazná konzultace zdarma
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}