'use client';

import React, { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { z } from 'zod';
import { useToast } from '@/components/ui/toast-provider';
import { sendDiscordContact } from '@/lib/client-webhook';
import { IconMail, IconPhone } from '@tabler/icons-react'

const clientSchema = z.object({
  name: z.string().min(2, 'Zadejte jméno'),
  email: z.string().email('Zadejte platný e‑mail'),
  phone: z.string().min(6, 'Zadejte telefon'),
  message: z.string().min(10, 'Zpráva musí mít alespoň 10 znaků'),
  website: z.string().optional(),
});

interface Props { email?: string; phone?: string }

export default function ContactForm({ email = 'info@thinkhome.org', phone = '+420 910 129 289' }: Props) {
  const { show } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    
    // Honeypot check
    if (String(data.get('website') || '').length > 0) {
      setIsSubmitting(false);
      form.reset();
      return;
    }

    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      phone: String(data.get('phone') || ''),
      message: String(data.get('message') || ''),
      website: String(data.get('website') || '')
    };

    try {
      const parsed = clientSchema.safeParse(payload);
      if (!parsed.success) {
        const firstError = parsed.error.issues[0];
        setError(firstError.message);
        setIsSubmitting(false);
        return;
      }

      // Try Discord webhook first
      let ok = false;
      try {
        const r1 = await sendDiscordContact({ 
          name: payload.name, 
          email: payload.email, 
          phone: payload.phone, 
          message: payload.message 
        });
        ok = r1.ok;
      } catch {}

      // Fallback to API route
      if (!ok) {
        try {
          const r2 = await fetch('/api/contact', { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(payload) 
          });
          ok = r2.ok;
        } catch {}
      }

      // Final fallback to mailto
      if (!ok) {
        const mailSubject = 'Poptávka z webu';
        const mailBody = [
          `Jméno: ${payload.name}`,
          `E‑mail: ${payload.email}`,
          `Telefon: ${payload.phone}`,
          '',
          payload.message,
        ].join('\n');
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
        return;
      }

      show({ title: 'Odesláno', description: 'Vaše zpráva dorazila, brzy se ozveme.', variant: 'success' });
      form.reset();
    } catch {
      setError('Odeslání selhalo. Zkuste to prosím znovu.');
      show({ title: 'Chyba', description: 'Odeslání se nepodařilo.', variant: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="mt-8 max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-3">
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={() => (window.location.href = `mailto:${email}`)} 
            leftIcon={<IconMail size={16} />}
          >
            Napsat e‑mail
          </Button>
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={() => (window.location.href = `tel:${phone.replace(/\s+/g, '')}`)} 
            leftIcon={<IconPhone size={16} />}
          >
            Zavolat
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4" aria-busy={isSubmitting}>
          <div className="grid gap-2">
            <Label htmlFor="name">Jméno a příjmení *</Label>
            <Input 
              id="name" 
              name="name" 
              autoComplete="name" 
              placeholder="Vaše jméno" 
              required 
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="email">E‑mail *</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              autoComplete="email" 
              placeholder="vas@email.cz" 
              required 
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="phone">Telefon *</Label>
            <Input 
              id="phone" 
              name="phone" 
              type="tel" 
              autoComplete="tel" 
              placeholder="+420 123 456 789" 
              required 
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="message">Zpráva *</Label>
            <Textarea 
              id="message" 
              name="message" 
              rows={4} 
              placeholder="Popište váš požadavek..." 
              required 
            />
          </div>
          
          <div className="hidden">
            <input id="website" name="website" autoComplete="off" tabIndex={-1} />
          </div>
          
          {error && (
            <p className="text-sm text-red-400" role="alert">
              {error}
            </p>
          )}
          
          <div className="flex flex-col items-center gap-3">
            <Button type="submit" loading={isSubmitting} className="w-full">
              {isSubmitting && <Spinner />}
              {isSubmitting ? 'Odesílám…' : 'Odeslat zprávu'}
            </Button>
            <p className="text-xs text-white/60 text-center">
              Souhlasím se zpracováním údajů pro účely vyřízení poptávky.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}


