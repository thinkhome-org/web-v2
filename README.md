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
- `src/components/ui` – elementy (Button, Input, Textarea, Label, Card, Section, Container, Spinner)
- `src/app/api/contact/route.ts` – serverové odeslání na Discord webhook (env `DISCORD_WEBHOOK_URL`)
- `public/` – statická aktiva (logo, ikony)

Kontakt/Discord webhook
-----------------------

Formulář nyní volá serverovou route `POST /api/contact`, která odešle zprávu na Discord webhook z prostředí serveru. Nastavte proměnnou prostředí `DISCORD_WEBHOOK_URL` v prostředí nasazení.

Styly a UI
----------

- Tmavý, minimalistický vzhled s červeným akcentem (ThinkPad inspirováno)
- Písmo: IBM Plex Sans/Mono (Next Fonts)
- Element-first: používejte komponenty z `src/components/ui` místo ad-hoc tříd

UI Elementy – API
------------------

- `Button`: `{ variant: 'primary'|'secondary'|'ghost', size: 'sm'|'md', loading?: boolean, leftIcon?, rightIcon? }`
- `Input`, `Textarea`, `Label`: přístupné vstupy se sjednoceným stylem
- `Card`, `CardHeader`, `CardContent`: boxy pro obsah
- `Section`, `Container`: layout sekcí a max-width wrapper
- `Spinner`: inline indikátor načítání


Licence
-------

© 2025 ThinkHome. Všechna práva vyhrazena.
