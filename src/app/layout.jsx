import "./globals.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import { GoogleAnalytics } from "@next/third-parties/google";
import FlashNews from "@/components/flash-news/flash-news";

export const metadata = {
  applicationName: "aceronews",
  referrer: "origin-when-cross-origin",
  keywords: ["aceronews"],
  authors: [{ name: "staff desk" }],
  creator: "aceronews.com",
  publisher: "https://aceronews.com",
  og_type: "article",
  developedBy: "meme",
  openGraph: {},
  other: {
    developed_by: "https://www.anvildynamics.xyz/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers bg="colors.background">
          <Navbar />
          <FlashNews />
          {children}
          <Footer />
          <SpeedInsights />
          <Analytics />
          <GoogleAnalytics gaId="G-H0014SNNEM" />
        </Providers>
      </body>
    </html>
  );
}
