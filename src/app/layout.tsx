import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { InitColorSchemeScript } from "@mui/material";
import ThemeRegistry from "@/components/ThemeRegistry";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carlos Mbasogo | Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in React, Next.js, TypeScript, UI architecture, design systems, and API integration. 10+ years building scalable frontend applications.",
  keywords: [
    "Carlos Mbasogo",
    "Senior Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Architect",
    "Houston",
  ],
  authors: [{ name: "Carlos Mbasogo" }],
  openGraph: {
    title: "Carlos Mbasogo | Senior Software Engineer",
    description:
      "React & Angular Architect | UI Systems & API Integration",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" defaultMode="system" />
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
