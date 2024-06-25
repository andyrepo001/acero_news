"use client";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Providers } from "./providers";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    if (params?.lan !== "bn" && params?.lan !== "en") {
      router.push("/bn");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.lan]);

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
