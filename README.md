# Xscade Website

Professional website for Xscade - Digital Marketing & Software company.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3001](http://localhost:3001) in your browser.

## Project Structure

```
xscade/
├── app/
│   ├── about/
│   ├── contact/
│   ├── services/
│   │   ├── digital-marketing/
│   │   ├── software-development/
│   │   └── consulting/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   └── Footer.tsx
└── lib/
    └── utils.ts
```

## Design System

This project uses the same design system as Nxtbeings:
- Primary color: Professional blue
- Glassmorphic effects for overlays
- Smooth animations with Framer Motion
- Consistent spacing and typography
- Responsive design

## Pages

- **Home** (`/`) - Landing page with hero, services, and benefits
- **About** (`/about`) - Company information and values
- **Contact** (`/contact`) - Contact form and information
- **Services** (`/services`) - Overview of all services
- **Digital Marketing** (`/services/digital-marketing`) - Digital marketing services
- **Software Development** (`/services/software-development`) - Development services
- **Consulting** (`/services/consulting`) - Business consulting services

## Build

```bash
npm run build
```

## Production

```bash
npm start
```
