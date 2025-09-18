ThinkHome Web (Next.js + Tailwind)
=================================

Lokální vývoj
-------------

- Node 18+
- Dev server: `PORT=3003 npm run dev`
- Build: `npm run build` a `npm start`

Struktura
---------

- `src/app` – App Router, stránky a layout
- `src/components` – UI komponenty (např. `contact-form.tsx`)
- `src/lib/discord-webhook.js` – klientská utilita pro Discord webhook (URL v Base64)
- `public/` – statická aktiva (logo, ikony)

Kontakt/Discord webhook
-----------------------

Formulář je čistě klientský (`'use client'`) a odesílá data na Discord webhook přes `fetch`. URL webhooku je obfuskovaná v Base64 v `src/lib/discord-webhook.js`.

Upozornění: Base64 NENÍ bezpečnostní opatření, pouze skrytí před rychlým přečtením zdroje. Pro produkci doporučujeme serverovou proxy a tajný webhook na serveru.

Styly a UI
----------

- Tmavý, minimalistický vzhled s červeným akcentem (ThinkPad inspirováno)
- Písmo: IBM Plex Sans/Mono (Next Fonts)

Licence
-------

© 2025 ThinkHome. Všechna práva vyhrazena.
