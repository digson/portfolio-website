# Chanwoo Oh | Portfolio

Personal portfolio for an embedded and backend engineer, live at [chanwoooh.com](https://chanwoooh.com).

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Email:** [Resend](https://resend.com) for the contact form
- **Theming:** System-aware dark/light mode toggle

## Features

- Responsive layout with sticky, blurred navigation
- Skills, education and project sections driven by data arrays in `app/page.tsx`
- Contact form that emails messages through a Next.js Route Handler (`app/api/contact/route.ts`), with input validation and a honeypot field against spam bots

## Project Structure

```text
app/
 ┣ api/contact/route.ts   # POST /api/contact → sends the message with Resend
 ┣ components/            # ContactForm, ThemeToggle
 ┣ globals.css            # Tailwind v4 configuration and theme variables
 ┣ layout.tsx             # Root layout and metadata
 ┗ page.tsx               # Page content (skills, education, projects, contact)
```

## Getting Started

```bash
git clone https://github.com/digson/portfolio-website.git
cd portfolio-website
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Name | Required | Description |
|------|----------|-------------|
| `RESEND_API_KEY` | Yes | API key from the Resend dashboard |
| `CONTACT_TO_EMAIL` | Yes | Inbox that receives contact-form messages |
| `CONTACT_FROM_EMAIL` | No | Sender on a domain verified in Resend; defaults to Resend's test sender |

## Deploy

Deployed on Vercel. Pushing to `main` triggers a new deployment. Set the environment variables above in **Vercel → Project → Settings → Environment Variables** before deploying.
