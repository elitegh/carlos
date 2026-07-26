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
    "Senior Full-Stack Engineer specializing in AI/ML, full-stack development, and data engineering. 10+ years building scalable enterprise applications and analytics platforms.",
  keywords: [
    "Carlos Mbasogo",
    "Senior Software Engineer",
    "Full Stack",
    "AI/ML",
    "Data Engineering",
    "React",
    "Python",
    "Houston",
  ],
  authors: [{ name: "Carlos Mbasogo" }],
  openGraph: {
    title: "Carlos Mbasogo | Senior Software Engineer",
    description: "AI/ML · Full Stack · Data Engineering",
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
