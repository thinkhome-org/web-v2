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

const BASE64_WEBHOOK = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTQxNzQ3NzAyNjI2ODMxOTg5OC9uejMwN01tdGpJM2FINnpPSTdFSDNxUDJsekhaMklCaUZ6R29sUG43eXh5bEl1Q3VSdDdTS3JyU2p2b0ptOWREd0lvQQ==";

function decodeBase64(input: string): string {
  if (typeof window !== 'undefined' && typeof (window as unknown as { atob?: (i: string) => string }).atob === 'function') {
    return (window as unknown as { atob: (i: string) => string }).atob(input);
  }
  // Node fallback
  return Buffer.from(input, 'base64').toString('binary');
}

export async function postDiscordMessage(payload: DiscordPayload): Promise<Response> {
  const url = decodeBase64(BASE64_WEBHOOK);
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Discord webhook failed: ${res.status} ${text}`);
  }
  return res;
}

export type ClientInfo = {
  ip: string;
  url: string;
  referrer: string;
  language: string;
  languages: string;
  timeZone: string;
  viewport: string;
  screenRes: string;
  dpr: number;
  ua: string;
  brand: string;
  platform: string;
};

export async function collectClientInfo(): Promise<ClientInfo> {
  try {
    const nav = typeof navigator !== 'undefined' ? navigator : undefined;
    const win = typeof window !== 'undefined' ? window : undefined;
    const doc = typeof document !== 'undefined' ? document : undefined;

    const url = win?.location?.href || '';
    const referrer = doc?.referrer || '';
    const language = nav?.language || '';
    const languages = (nav?.languages && Array.isArray(nav.languages)) ? nav.languages.join(', ') : language;
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const viewport = win ? `${win.innerWidth}x${win.innerHeight}` : '';
    const screenRes = win?.screen ? `${win.screen.width}x${win.screen.height}` : '';
    const dpr = win?.devicePixelRatio || 1;
    const ua = nav?.userAgent || '';
    const uaData = (nav as unknown as { userAgentData?: { brands?: Array<{ brand: string; version: string }>; platform?: string } })?.userAgentData;
    const brand = uaData?.brands?.map((b) => `${b.brand} ${b.version}`).join(', ') || '';
    const platform = uaData?.platform || nav?.platform || '';

    let ip = '';
    try {
      const r = await fetch('https://api.ipify.org?format=json');
      const j = await r.json();
      ip = j?.ip || '';
    } catch {}

    return { ip, url, referrer, language, languages, timeZone, viewport, screenRes, dpr, ua, brand, platform };
  } catch {
    return { ip: '', url: '', referrer: '', language: '', languages: '', timeZone: '', viewport: '', screenRes: '', dpr: 1, ua: '', brand: '', platform: '' };
  }
}

function truncate(text: string, max: number): string {
  if (typeof text !== 'string') return '';
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

export function buildContactEmbed({ name, email, phone, message, client }: { name: string; email: string; phone?: string; message: string; client?: ClientInfo; }): DiscordPayload {
  const timestamp = new Date().toISOString();
  const msg = (message || '').trim();
  const description = truncate(msg, 1900);

  const details = client || ({} as ClientInfo);
  const browser = details.brand || details.ua || '-';
  const fieldsClient: DiscordEmbedField[] = [
    { name: 'IP', value: details.ip || '-', inline: true },
    { name: 'Prohlížeč', value: truncate(browser, 1024) || '-', inline: true },
    { name: 'Platforma', value: details.platform || '-', inline: true },
    { name: 'Jazyk(y)', value: details.languages || details.language || '-', inline: true },
    { name: 'Časové pásmo', value: details.timeZone || '-', inline: true },
    { name: 'Viewport', value: details.viewport || '-', inline: true },
    { name: 'Obrazovka', value: details.screenRes || '-', inline: true },
    { name: 'DPR', value: String(details.dpr || 1), inline: true },
    { name: 'Stránka', value: truncate(details.url || '-', 1024), inline: false },
    { name: 'Referrer', value: truncate(details.referrer || '-', 1024), inline: false },
  ];

  return {
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
}


