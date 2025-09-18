'use client';

import { FormEvent, useState } from 'react';
import { postDiscordMessage, buildContactEmbed, collectClientInfo } from '@/lib/discord-webhook';

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
      const client = await collectClientInfo();
      const payload = buildContactEmbed({ name: company ? `${name} (${company})` : name, email, phone, message: subject ? `Předmět: ${subject}\n\n${message}` : message, client });
      await postDiscordMessage(payload);
      setSuccess('Děkujeme, zpráva byla odeslána. Ozveme se co nejdříve.');
      form.reset();
    } catch (err: any) {
      setError('Odeslání selhalo. Zkuste to prosím znovu nebo nás kontaktujte na info@thinkhome.org.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-xl fade-in">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm text-white/80">Jméno a příjmení</label>
        <input id="name" name="name" required className="w-full rounded-md border border-white/15 bg-black px-3 py-2 text-sm placeholder-white/40 focus-ring" placeholder="Vaše jméno" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="company" className="text-sm text-white/80">Společnost (volitelné)</label>
        <input id="company" name="company" className="w-full rounded-md border border-white/15 bg-black px-3 py-2 text-sm placeholder-white/40 focus-ring" placeholder="Název firmy" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm text-white/80">E‑mail</label>
        <input id="email" name="email" type="email" required className="w-full rounded-md border border-white/15 bg-black px-3 py-2 text-sm placeholder-white/40 focus-ring" placeholder="vas@email.cz" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="phone" className="text-sm text-white/80">Telefon</label>
        <input id="phone" name="phone" className="w-full rounded-md border border-white/15 bg-black px-3 py-2 text-sm placeholder-white/40 focus-ring" placeholder="+420 123 456 789" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="subject" className="text-sm text-white/80">Předmět</label>
        <input id="subject" name="subject" className="w-full rounded-md border border-white/15 bg-black px-3 py-2 text-sm placeholder-white/40 focus-ring" placeholder="O čem chcete mluvit?" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm text-white/80">Zpráva</label>
        <textarea id="message" name="message" rows={5} className="w-full rounded-md border border-white/15 bg-black px-3 py-2 text-sm placeholder-white/40 focus-ring" placeholder="Popište váš požadavek..." />
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
        <button type="submit" disabled={isSubmitting} className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-[#a50f19] transition-colors disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2">
          {isSubmitting && <span className="h-4 w-4 rounded-full border-2 border-white/50 border-t-transparent spin" />}
          {isSubmitting ? 'Odesílám…' : 'Odeslat zprávu'}
        </button>
        <span className="text-xs text-white/50">Zpráva se odešle bezpečně na náš Discord</span>
      </div>
    </form>
  );
}


