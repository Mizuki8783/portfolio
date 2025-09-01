import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mizuki Nakano Portfolio",
  description: "Interactive portfolio with an AI-powered interface that answers questions about me, my data engineering skills, and my experience",
  keywords: [
    "Mizuki Nakano",
    "Portfolio",
    "Data Engineer",
    "AI",
    "Interactive",
    "Python",
    "SQL",
    "AWS",
    "GCP",
    "Snowflake",
    "Databricks",
    "ETL",
    "Data Analytics"
  ],
  authors: [
    {
      name: "Mizuki Nakano",
      url: "https://mizukinakano.dev",
    },
  ],
  creator: "Mizuki Nakano",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mizukinakano.dev",
    title: "Mizuki Nakano Portfolio",
    description: "Interactive portfolio with an AI-powered interface that answers questions about me",
    siteName: "Mizuki Nakano Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mizuki Nakano Portfolio",
    description: "Interactive portfolio with an AI-powered interface that answers questions about me",
    creator: "@Mizuki8783",
  },
  icons: {
    icon: [
      {
        url: "/logo-mizuki.svg",
        sizes: "any",
      }
    ],
    shortcut: "/logo-mizuki.svg?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/logo-mizuki.svg" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
