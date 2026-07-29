import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise | Workforce Upskilling Demo",
  description:
    "A responsive Accredian Enterprise inspired landing page built with Next.js, TypeScript, Tailwind CSS, and API routes.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Accredian Enterprise | Workforce Upskilling Demo",
    description:
      "Enterprise upskilling landing page with reusable React components and a lead capture API.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
