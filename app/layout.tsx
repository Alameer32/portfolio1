import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://portfolio1-alameer32.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Salman Alameer — Software Engineer",
    template: "%s | Salman Alameer",
  },
  description:
    "Final-year Software Engineering student at UTM. I ship enterprise automation, full-stack products, and AI-integrated systems end-to-end.",
  keywords: [
    "Salman Alameer",
    "Software Engineer",
    "Full-Stack Developer",
    "Portfolio",
    "Next.js",
    "Flutter",
    "TypeScript",
    "UTM",
  ],
  authors: [{ name: "Salman Alameer" }],
  creator: "Salman Alameer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Salman Alameer",
    title: "Salman Alameer — Software Engineer",
    description:
      "I build software that ships and scales. Enterprise automation, full-stack products, and AI-integrated systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salman Alameer — Software Engineer",
    description:
      "I build software that ships and scales. Enterprise automation, full-stack products, and AI-integrated systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
