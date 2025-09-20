ThinkHome Web (Next.js + Tailwind)
=================================

Lokální vývoj
-------------

- Node 18+
- Dev server: `PORT=3003 npm run dev`
- Build: `npm run build` a `npm start`
- Statické hostování exportu: `npm run build` a `npm run serve:out` (http://localhost:4000)

Struktura
---------

- `src/app` – App Router, stránky a layout
- `src/components` – UI komponenty (např. `contact-form.tsx`)
- `src/components/ui` – elementy (Button, Input, Textarea, Label, Card, Section, Container, Spinner)
- `src/app/api/contact/route.ts` – serverové odeslání na Discord webhook (env `DISCORD_WEBHOOK_URL`)
- `public/` – statická aktiva (logo, ikony, team avatary v `public/team/`)
- `src/content/*.yaml` – YAML data (služby, tým, kontakty)

Kontakt/Discord webhook
-----------------------

Formulář volá serverovou route `POST /api/contact` (validace Zod + rate‑limit 1/3s per IP), která odešle zprávu na Discord webhook z prostředí serveru. Nastavte proměnnou prostředí `DISCORD_WEBHOOK_URL` v prostředí nasazení. Pro lokální test můžete použít `.env.local`.

Poznámka k GitHub Pages: `output: 'export'` = čistě statické hostování – API route se zde nespouští. V tomto prostředí formulář automaticky použije `mailto:` fallback. Pro serverové odesílání použijte např. Vercel/Netlify/Workers nebo vlastní backend.

YAML a validace
---------------
- `src/content/services.yaml` a `src/content/team.yaml` se validují proti schématům v `src/lib/yaml.ts` (Zod). Nevalidní položky se ignorují. Exportované typy: `Service`, `TeamMember`.

Skripty
-------
- Lint: `npm run lint`
- Testy: `npm run test`
- Typecheck: `npm run typecheck`
- Format (Prettier): `npm run format`
- Clean: `npm run clean`
- Analyzer bundlu: `npm run analyze`
 - Release (semver + CHANGELOG): `npm run release`

Pre-commit
----------
Husky + lint-staged spouští ESLint (fix), related testy a typecheck. SVG v `public/` se optimalizují přes SVGO.

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
