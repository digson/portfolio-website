# Chanwoo Oh | Systems Engineer Portfolio

A high-performance professional portfolio built for a Systems Engineer, specializing in the intersection of low-level architecture and modern cloud infrastructure.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Custom SVG Logic
- **Theming:** System-aware Dark/Light mode toggle

## 🛠 Features

- **Responsive Design:** Optimized for all device sizes with a mobile-first approach.
- **Sticky Navigation:** Glassmorphism-style header with backdrop-blur effects.
- **Contextual Skills Arsenal:** Categorized technical skills (Systems, Cloud, Full-Stack) with visual indicators.
- **Interactive Projects:** Hover-animated project cards linked directly to GitHub repositories.
- **Smooth Transitions:** Standardized 300ms theme-switching animations across all components.

## 📂 Project Structure

```text
app/
 ┣ components/      # Reusable React components (ThemeToggle, etc.)
 ┣ globals.css      # Tailwind v4 configuration and theme variables
 ┣ layout.tsx       # Root layout with Metadata API and font optimization
 ┗ page.tsx         # Main portfolio entry point with data-driven sections
```

## 💻 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/digson/portfolio-website.git
cd portfolio-website
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
