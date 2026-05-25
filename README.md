# ShelNova Labs — Company Website

Official website for **ShelNova Labs Ltd.** — a digital product studio building apps for communities, learners, and players.

Live at: [shelnovalabs.com](https://shelnovalabs.com)

---

## About

ShelNova Labs engineers digital experiences that simplify complexity, empower communities, and transform everyday challenges into intuitive, elegant solutions.

**Our Apps:**
- **Kadi Classic** — Fast-paced digital card game with multiplayer, AI, and online matchmaking. Live on app stores.
- **JiraniFy** — Neighborhood social platform for local communities to connect, chat, and discover nearby opportunities. In development.
- **Gist & Gain** — AI-powered self-improvement app with book summaries, podcasts, flashcards, and quizzes in Gist and Deep modes. In development.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Language | TypeScript |
| Fonts | Space Grotesk + Inter |
| Hosting | Vercel |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Production build
npm run build
```

---

## Project Structure

```
app/
  layout.tsx        # Root layout, fonts, SEO metadata
  page.tsx          # Page assembly
  globals.css       # Brand tokens (Tailwind v4), base styles

components/
  Navbar.tsx        # Sticky glassmorphism navigation
  Hero.tsx          # Animated hero section
  AppsShowcase.tsx  # App portfolio cards
  About.tsx         # Mission, vision, and values
  Team.tsx          # Meet the team
  Contact.tsx       # Contact form
  Footer.tsx        # Footer
```

---

## Brand Colors

| Token | Value | Use |
|---|---|---|
| `snl-violet` | `#6c63ff` | Primary accent |
| `snl-cyan` | `#00d4ff` | Secondary accent |
| `snl-bg` | `#0a0a0f` | Background |
| `snl-card` | `#111118` | Card surface |
| `snl-text` | `#e2e8f0` | Body text |

---

## Contact

hello@shelnovalabs.com

---

© 2025 ShelNova Labs Ltd. All rights reserved.
