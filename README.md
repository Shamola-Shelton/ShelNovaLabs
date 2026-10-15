# ShelNova Labs — Website

Website for **ShelNova Labs Ltd.**, a product studio in Nairobi, Kenya building mobile apps, games, websites and AI tools.

Live at [shelnovalabs.com](https://shelnovalabs.com). Founder portfolio at [shelnovalabs.com/shamolah](https://shelnovalabs.com/shamolah).

## Products

| Product | Type | Status |
|---|---|---|
| Sancta | Catholic prayer & Bible app | Live on Google Play |
| BibleWise | AI Bible coach | Live on Google Play |
| Kadi Classic | Kenyan card game, multiplayer | Live on Google Play |
| Nyimbo za Jeshi la Wokovu | Swahili hymnal | Live on Google Play |
| PupGrid: Puppy Sudoku | Logic puzzle game | Live on Google Play |
| WordNova | Word puzzle game | Live on Google Play |
| Wash Rush: Pressure Panic | 3D casual game | Live on Google Play |
| JiraniFy | Neighborhood platform | Live at jiranify.com |
| CareerOps | Open-source AI job search tool | On GitHub |

Project content lives in `data/projectsData.ts`.

## Store policy pages

These URLs are linked from Google Play / App Store listings. **Do not move, rename or delete them.**

- `/privacy` (index of all policies), `/privacy/biblewise`
- `/sancta/privacy`, `/sancta/terms`, `/sancta/delete-account`
- `/pupgrid/privacy`, `/pupgrid/terms`
- `/wordnova/privacy`, `/wordnova/terms`
- `/wash-rush/privacy`, `/wash-rush/terms`

## Tech stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, hosted on Vercel.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build
```

## Structure

```
app/
  page.tsx            # Studio homepage
  shamolah/page.tsx   # Founder portfolio
  projects/           # Project list and case studies
  services/           # Service pages
  insights/           # Articles
  contact/            # Contact form (POST /api/contact)
  <app>/privacy|terms # Store policy pages
components/           # Navbar, Footer, ContactForm, ContactCTA, insights articles
data/                 # projectsData.ts, insightsData.ts
```

## Environment variables

- `RESEND_API_KEY` or `WEB3FORMS_ACCESS_KEY` — contact form email delivery
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics (optional)
