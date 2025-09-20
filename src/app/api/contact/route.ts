import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional().default(''),
  phone: z.string().optional().default(''),
  subject: z.string().optional().default(''),
  message: z.string().min(1),
  website: z.string().max(0).optional().default(''), // honeypot
});

type DiscordEmbedField = { name: string; value: string; inline?: boolean };

function truncate(text: string, max: number): string {
  if (typeof text !== 'string') return '';
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

export async function POST(req: NextRequest) {
  // Basic in-memory rate limit (per instance): max 5 req / 60s per IP
  // Note: For static hosting without serverless functions, this route isn't active.
  const now = Date.now();
  const ipHeader = req.headers.get('x-forwarded-for') || '';
  const clientIp = (ipHeader.split(',')[0]?.trim() || req.headers.get('x-real-ip') || '') as string;
  if (clientIp) {
    const windowMs = 3_000;
    const limit = 1;
    // @ts-expect-error scoped cache on module
    globalThis.__contactRate__ = globalThis.__contactRate__ || new Map<string, number[]>();
    // @ts-expect-error scoped cache on module
    const cache: Map<string, number[]> = globalThis.__contactRate__;
    const arr = cache.get(clientIp) || [];
    const recent = arr.filter((t) => now - t < windowMs);
    if (recent.length >= limit) {
      return NextResponse.json({ ok: false, error: 'Too many requests' }, { status: 429 });
    }
    recent.push(now);
    cache.set(clientIp, recent);
  }
  const body = await req.json().catch(() => ({}));
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'Invalid input' }, { status: 400 });
  }

  const { name, email, phone, company, subject, message, website } = parsed.data;

  // Honeypot: act as success but do nothing
  if (website && website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
  if (!DISCORD_WEBHOOK_URL) {
    return NextResponse.json({ ok: false, error: 'Server not configured' }, { status: 500 });
  }

  const ip = clientIp || '';
  const referrer = req.headers.get('referer') || '';
  const language = req.headers.get('accept-language') || '';
  const ua = req.headers.get('user-agent') || '';

  const timestamp = new Date().toISOString();
  const combined = subject ? `Předmět: ${subject}\n\n${message}` : message;
  const description = truncate(combined, 1900);

  const browser = ua || '-';
  const fieldsClient: DiscordEmbedField[] = [
    { name: 'IP', value: ip || '-', inline: true },
    { name: 'Prohlížeč', value: truncate(browser, 1024) || '-', inline: true },
    { name: 'Jazyk(y)', value: truncate(language, 256) || '-', inline: true },
    { name: 'Referrer', value: truncate(referrer || '-', 1024), inline: false },
  ];

  const payload = {
    username: 'ThinkHome Web',
    embeds: [
      {
        author: { name: 'ThinkHome – Web formulář' },
        title: 'Nová poptávka z webu',
        color: 15158332,
        timestamp,
        fields: [
          { name: 'Jméno', value: name || '-', inline: true },
          { name: 'E‑mail', value: email || '-', inline: true },
          { name: 'Telefon', value: phone || '-', inline: true },
          { name: 'Společnost', value: company || '-', inline: true },
        ],
        description: description || '-',
        footer: { text: 'ThinkHome – Moderní IT bez starostí' },
      },
      {
        title: 'Klient – technické detaily',
        color: 3355443,
        timestamp,
        fields: fieldsClient,
      },
    ],
  };

  const res = await fetch(DISCORD_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    return NextResponse.json({ ok: false, error: `Discord webhook failed: ${res.status} ${text}` }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}


