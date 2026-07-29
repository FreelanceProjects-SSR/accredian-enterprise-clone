# Accredian Enterprise Landing Page

## Project Overview

This project is a full-stack Next.js App Router implementation of an Accredian Enterprise inspired landing page. It recreates the structure and user experience of the reference site with a responsive navbar, enterprise hero, trusted brand strip, impact statistics, capability sections, program tracks, benefits, testimonials, CTA, lead capture form, API route, and footer.

## Features

- Responsive sticky navigation with desktop links and mobile hamburger menu
- Smooth scrolling to major page sections
- Enterprise hero section with visual background and CTA buttons
- Trusted company strip, impact statistics, capabilities, program tracks, benefits, testimonials, CTA, lead form, and footer
- Reusable React components for each section
- Client-side form validation with loading, success, and error states
- Server-side validation through `POST /api/leads`
- Tailwind CSS responsive layouts for mobile, tablet, laptop, and desktop
- Vercel-ready Next.js project structure

## Tech Stack

- Next.js with App Router
- React functional components
- TypeScript
- Tailwind CSS
- Next.js API Routes
- Vercel

## Project Structure

```text
app/
  api/
    leads/
      route.ts
  globals.css
  layout.tsx
  page.tsx
components/
  Benefits.tsx
  CTA.tsx
  Features.tsx
  Footer.tsx
  Hero.tsx
  LeadCaptureForm.tsx
  LogoStrip.tsx
  Navbar.tsx
  Programs.tsx
  SectionHeader.tsx
  Stats.tsx
  Testimonials.tsx
lib/
  api.ts
  validation.ts
```

The `components/` directory contains modular sections and shared UI pieces. The `lib/` directory contains client API helpers and shared validation logic. The `app/api/leads/route.ts` file contains the lead submission endpoint.

## Setup Instructions

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open the application locally at:

```text
http://localhost:3000
```

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## API Documentation

### POST `/api/leads`

Submits an enterprise lead capture form.

Request body:

```json
{
  "fullName": "Priya Sharma",
  "email": "priya@company.com",
  "phone": "+91 98765 43210",
  "company": "Acme Analytics",
  "message": "We want to train 80 analysts on GenAI and dashboards."
}
```

Success response:

```json
{
  "success": true,
  "message": "Thank you. Our enterprise learning advisor will contact you shortly.",
  "leadId": "generated-id"
}
```

Validation error response:

```json
{
  "success": false,
  "message": "Please fix the highlighted fields.",
  "errors": {
    "email": "Enter a valid work email."
  }
}
```

For this assignment, submitted leads are stored in memory for the lifetime of the server process and logged on the server. The endpoint is structured so it can be connected to a database later.

## Approach Taken

The reference website was reviewed for its major visible sections, navigation model, enterprise messaging, statistics, program content, lead capture flow, and responsive expectations. The implementation uses component-based architecture, responsive-first Tailwind CSS layouts, reusable section components, shared form validation, API integration, and a mobile-ready navigation menu.

The page was built to feel close to the reference experience without copying source code or using a ready-made template. The layout emphasizes enterprise training, Data and AI capability building, business impact, testimonials, and a clear demo request flow.

## AI Usage

AI tools were used during development.

- AI was used to help analyze the assignment requirements
- AI assisted with component planning and project structure
- AI helped generate initial implementation ideas and boilerplate
- AI assisted with debugging and identifying responsive issues
- AI helped improve code readability and component reusability
- AI assisted with README documentation

Manual review and refinement performed during the final implementation pass:

- Reviewed and modified the generated code
- Adjusted the UI based on the reference website
- Manually refined spacing, typography, responsiveness, and layout
- Tested the application on desktop and mobile-oriented layouts
- Debugged API and form functionality
- Improved component structure
- Verified the final implementation before deployment

## Improvements With More Time

- Connect the lead capture form to a real database
- Add email notifications for new leads
- Add CMS integration for programs and testimonials
- Improve accessibility with a full audit
- Add automated unit and end-to-end tests
- Improve SEO metadata for each section
- Optimize images and performance further
- Add analytics for CTA and form conversion tracking
- Add more advanced but restrained animations

## Deployment

Live Demo: [Vercel URL]

GitHub Repository: https://github.com/FreelanceProjects-SSR/accredian-enterprise-clone

To deploy on Vercel:

1. Push the project to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js.
4. Use the default build command: `npm run build`.
5. Deploy and add the generated Vercel URL above.

## Final Verification

- Project structure inspected before implementation
- Next.js, TypeScript, and Tailwind CSS configured
- Reusable components created
- Lead capture form implemented
- `POST /api/leads` implemented with validation
- README completed
- Production build command: `npm run build`
