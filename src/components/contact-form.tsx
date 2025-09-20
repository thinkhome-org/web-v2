'use client';

import React, { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { z } from 'zod';
import { useToast } from '@/components/ui/toast-provider';
import { sendDiscordContact } from '@/lib/client-webhook';

const clientSchema = z.object({
  name: z.string().optional().transform((v) => (v || '').trim()),
  // E‑mail: prázdný povolen bez validace, jinak musí být platný
  email: z
    .string()
    .optional()
    .transform((v) => (v || '').trim())
    .refine((v) => v === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 'Zadejte platný e‑mail'),
  phone: z
    .string()
    .optional()
    .refine((v) => !v || /^[+0-9 ()-]{6,}$/.test(v), 'Zadejte platný telefon'),
  company: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(4, 'Zpráva musí mít alespoň 4 znaky'),
  website: z.string().optional(),
});

export default function ContactForm() {
  const { show } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof z.infer<typeof clientSchema>, string>>>({});

  function clearFieldError(name: string) {
    setFieldErrors((prev) => {
      if (!(name in prev)) return prev;
      const next = { ...prev } as Record<string, string>;
      delete next[name];
      return next as Partial<Record<keyof z.infer<typeof clientSchema>, string>>;
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setFieldErrors({});

    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get('website') || '').length > 0) {
      setIsSubmitting(false);
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
      const parsed = clientSchema.safeParse(payload);
      if (!parsed.success) {
        const flat = parsed.error.flatten().fieldErrors;
        const nextErrs: Partial<Record<keyof z.infer<typeof clientSchema>, string>> = {};
        (Object.keys(flat) as Array<keyof typeof flat>).forEach((k) => {
          const msg = flat[k]?.[0];
          if (msg) nextErrs[k as keyof z.infer<typeof clientSchema>] = msg;
        });
        setFieldErrors(nextErrs);
        const first = Object.keys(nextErrs)[0];
        if (first) {
          const el = document.getElementById(first);
          el?.focus();
        }
        setIsSubmitting(false);
        return;
      }
      // 1) Primárně: klientský webhook (obfuskace)
      let ok = false;
      try {
        const r1 = await sendDiscordContact({ name, email, phone, company, subject, message });
        ok = r1.ok;
      } catch {}

      // 2) Fallback: serverová route (pokud je k dispozici – na čistém statickém hostingu nemusí být)
      if (!ok) {
        try {
          const r2 = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
          ok = r2.ok;
        } catch {}
      }

      // 3) Mailto fallback (lépe formátovaný předmět i tělo)
      if (!ok) {
        const mailSubject = subject?.trim() ? `Poptávka: ${subject.trim()}` : 'Poptávka z webu';
        const mailBody = [
          `Jméno: ${name || '-'}`,
          `E‑mail: ${email || '-'}`,
          phone ? `Telefon: ${phone}` : undefined,
          company ? `Společnost: ${company}` : undefined,
          '',
          message,
        ]
          .filter(Boolean)
          .join('\n');
        window.location.href = `mailto:info@thinkhome.org?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
        return;
      }
      show({ title: 'Odesláno', description: 'Vaše zpráva dorazila, brzy se ozveme.', variant: 'success' });
      form.reset();
    } catch {
      setError('Odeslání selhalo. Zkuste to prosím znovu nebo nás kontaktujte na info@thinkhome.org.');
      show({ title: 'Chyba', description: 'Odeslání se nepodařilo.', variant: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-xl mx-auto fade-in" aria-busy={isSubmitting}>
      <div className="grid gap-2">
        <Label htmlFor="name">Jméno a příjmení</Label>
        <Input id="name" name="name" autoComplete="name" aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? 'name-error' : undefined} placeholder="Vaše jméno" className={fieldErrors.name ? 'border-red-500' : ''} onChange={() => clearFieldError('name')} />
        {fieldErrors.name && <p id="name-error" className="text-xs text-red-400">{fieldErrors.name}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="company">Společnost</Label>
        <Input id="company" name="company" autoComplete="organization" placeholder="Název firmy" onChange={() => clearFieldError('company')} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">E‑mail</Label>
        <Input id="email" name="email" type="email" autoComplete="email" aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? 'email-error' : undefined} placeholder="vas@email.cz" className={fieldErrors.email ? 'border-red-500' : ''} onChange={() => clearFieldError('email')} />
        {fieldErrors.email && <p id="email-error" className="text-xs text-red-400">{fieldErrors.email}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">Telefon</Label>
        <Input id="phone" name="phone" type="tel" inputMode="tel" pattern="[+0-9 ()-]{6,}" autoComplete="tel" aria-invalid={Boolean(fieldErrors.phone)} aria-describedby={fieldErrors.phone ? 'phone-error' : undefined} placeholder="+420 123 456 789" className={fieldErrors.phone ? 'border-red-500' : ''} onChange={() => clearFieldError('phone')} />
        {fieldErrors.phone && <p id="phone-error" className="text-xs text-red-400">{fieldErrors.phone}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="subject">Předmět</Label>
        <Input id="subject" name="subject" placeholder="O čem chcete mluvit?" onChange={() => clearFieldError('subject')} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Zpráva (min. 4 znaky)</Label>
        <Textarea id="message" name="message" rows={5} required minLength={4} aria-invalid={Boolean(fieldErrors.message)} aria-describedby={fieldErrors.message ? 'message-error' : undefined} placeholder="Popište váš požadavek..." className={fieldErrors.message ? 'border-red-500' : ''} onChange={() => clearFieldError('message')} />
        {fieldErrors.message && <p id="message-error" className="text-xs text-red-400">{fieldErrors.message}</p>}
      </div>
      <div className="hidden">
        <label htmlFor="website" className="text-sm">Web</label>
        <input id="website" name="website" autoComplete="off" tabIndex={-1} />
      </div>
      {/* Úspěch oznamujeme jen toastem, bez duplicitního zeleného textu */}
      {error && <p className="text-sm text-red-400 slide-up" role="alert" aria-live="assertive">{error}</p>}
      <div className="flex flex-col items-center gap-3">
        <Button type="submit" loading={isSubmitting} className="inline-flex items-center gap-2">
          {isSubmitting && <Spinner />}
          {isSubmitting ? 'Odesílám…' : 'Odeslat zprávu'}
        </Button>
        <p className="text-xs text-white/60 text-center">Souhlasím se zpracováním údajů pro účely vyřízení poptávky.</p>
      </div>
    </form>
  );
}


