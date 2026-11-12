import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { ChatWidget } from "@/components/ChatWidget";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { UtilityBar } from "@/components/UtilityBar";
import { site } from "@content/site";
import "./globals.css";

// Self-hosted by Next at build time: no runtime request to Google Fonts.
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  applicationName: site.name,
};

export const viewport: Viewport = {
  themeColor: "#0E1013",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-btn focus:bg-gold focus:px-4 focus:py-3 focus:font-bold focus:text-ink-900"
        >
          Skip to main content
        </a>
        <UtilityBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ChatWidget enabled={Boolean(process.env.LEAD_WEBHOOK_SECRET)} />
      </body>
    </html>
  );
}
