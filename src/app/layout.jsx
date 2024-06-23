"use client";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    if (params?.lan !== "bn" && params?.lan !== "en") {
      router.back();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.lan]);

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
