'use client';

// Lightweight obfuscation: base64 URL encoded, then XORed char codes + reversed chunks.
// Pozn.: Nejde o zabezpečení, jen obfuskace. Webhook v klientu je snadno zjistitelný.

export type DiscordEmbedField = { name: string; value: string; inline?: boolean };
export type DiscordEmbed = {
  title?: string;
  description?: string;
  color?: number;
  timestamp?: string;
  fields?: DiscordEmbedField[];
  footer?: { text: string };
  author?: { name: string };
};
export type DiscordPayload = {
  username?: string;
  embeds?: DiscordEmbed[];
};

type ContactData = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
};

// Base64 webhook (lehce „maskované“ jen jako prostý Base64)
// aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTQxNzQ3NzAyNjI2ODMxOTg5OC9uejMwN01tdGpJM2FINnpPSTdFSDNxUDJsekhaMklCaUZ6R29sUG43eXh5bEl1Q3VSdDdTS3JyU2p2b0ptOWREd0lvQQ==
function deobfuscateBase64(): string {
  return 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTQxNzQ3NzAyNjI2ODMxOTg5OC9uejMwN01tdGpJM2FINnpPSTdFSDNxUDJsekhaMklCaUZ6R29sUG43eXh5bEl1Q3VSdDdTS3JyU2p2b0ptOWREd0lvQQ==';
}

function decodeBase64(b64: string): string {
  const fn = (typeof window !== 'undefined' ? window.atob : (typeof atob !== 'undefined' ? atob : undefined)) as ((i: string) => string) | undefined;
  if (typeof fn === 'function') {
    return fn(b64);
  }
  // Fallback: vrať původní řetězec (nemělo by nastat v běžných prohlížečích)
  return b64;
}

function buildPayload(data: ContactData): DiscordPayload {
  const timestamp = new Date().toISOString();
  const lines = [
    `Jméno: ${data.name}`,
    `E‑mail: ${data.email}`,
    data.phone ? `Telefon: ${data.phone}` : undefined,
    data.company ? `Společnost: ${data.company}` : undefined,
    data.subject ? `Předmět: ${data.subject}` : undefined,
  ].filter(Boolean).join('\n');

  const description = `${lines}\n\n${(data.message || '').trim()}`.slice(0, 1900);

  return {
    username: 'ThinkHome Web',
    embeds: [
      {
        author: { name: 'ThinkHome – Web formulář' },
        title: 'Nová poptávka z webu',
        color: 15158332,
        timestamp,
        description: description || '-',
        footer: { text: 'ThinkHome – Moderní IT bez starostí' },
      },
    ],
  };
}

export async function sendDiscordContact(data: ContactData): Promise<Response> {
  const b64 = deobfuscateBase64();
  const url = decodeBase64(b64);
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(buildPayload(data)),
  });
}


