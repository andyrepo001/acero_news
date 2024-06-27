import "./globals.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  applicationName: "aceronews.com",
  referrer: "origin-when-cross-origin",
  keywords: ["aceronews"],
  authors: [{ name: "aceronews.com" }],
  creator: "aceronews.com",
  publisher: "aceronews.com",
  og_type: "article",
  openGraph: {},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers bg="colors.background">
          <Navbar />
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
