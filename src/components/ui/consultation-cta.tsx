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
    <Card className={`backdrop-blur-md bg-white/5 border border-white/20 ${className}`}>
      <CardContent className="pt-8 pb-8">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full flex items-center justify-center">
              <IconHeadset size={24} className="text-accent" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold">Nevíte, kterou službu potřebujete?</h3>
          <p className="text-white/80 text-lg leading-relaxed">
            Rádi s vámi projdeme vaše potřeby a navrhneme optimální řešení. Konzultace je zdarma a bez závazků.
          </p>
          <Link href="/kontakt" className="inline-flex">
            <Button className="px-8 py-3 text-lg bg-accent hover:bg-accent/90">
              Nezávazná konzultace zdarma
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}