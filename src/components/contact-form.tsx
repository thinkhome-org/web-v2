'use client';

import React, { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(null);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get('website') || '').length > 0) {
      setIsSubmitting(false);
      setSuccess('Děkujeme, zpráva byla odeslána.');
      form.reset();
      return;
    }
    const name = String(data.get('name') || '');
    const company = String(data.get('company') || '');
    const subject = String(data.get('subject') || '');
    const email = String(data.get('email') || '');
    const phone = String(data.get('phone') || '');
    const message = String(data.get('message') || '');

    try {
      const payload = { name, email, phone, company, subject, message, website: String(data.get('website') || '') };
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!res.ok) {
        // graceful fallback to mailto
        window.location.href = `mailto:info@thinkhome.org?subject=${encodeURIComponent(subject || 'Poptávka z webu')}&body=${encodeURIComponent(`${name}\n${email}${phone ? `\n${phone}` : ''}\n\n${message}`)}`;
        return;
      }
      setSuccess('Děkujeme, zpráva byla odeslána. Ozveme se co nejdříve.');
      form.reset();
    } catch {
      setError('Odeslání selhalo. Zkuste to prosím znovu nebo nás kontaktujte na info@thinkhome.org.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-xl fade-in">
      <div className="grid gap-2">
        <Label htmlFor="name">Jméno a příjmení</Label>
        <Input id="name" name="name" required placeholder="Vaše jméno" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="company">Společnost (volitelné)</Label>
        <Input id="company" name="company" placeholder="Název firmy" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">E‑mail</Label>
        <Input id="email" name="email" type="email" required placeholder="vas@email.cz" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">Telefon</Label>
        <Input id="phone" name="phone" placeholder="+420 123 456 789" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="subject">Předmět</Label>
        <Input id="subject" name="subject" placeholder="O čem chcete mluvit?" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Zpráva</Label>
        <Textarea id="message" name="message" rows={5} placeholder="Popište váš požadavek..." />
      </div>
      <div className="hidden">
        <label htmlFor="website" className="text-sm">Web</label>
        <input id="website" name="website" autoComplete="off" tabIndex={-1} />
      </div>
      <label className="flex items-start gap-2 text-sm text-white/80">
        <input type="checkbox" required className="mt-1" />
        Souhlasím se zpracováním údajů pro účely vyřízení poptávky.
      </label>
      {success && <p className="text-sm text-green-400 slide-up">{success}</p>}
      {error && <p className="text-sm text-red-400 slide-up">{error}</p>}
      <div className="flex items-center gap-3">
        <Button type="submit" loading={isSubmitting} className="inline-flex items-center gap-2">
          {isSubmitting && <Spinner />}
          {isSubmitting ? 'Odesílám…' : 'Odeslat zprávu'}
        </Button>
        <span className="text-xs text-white/50">Zpráva se odešle bezpečně s SSL zabezpečením</span>
      </div>
    </form>
  );
}


