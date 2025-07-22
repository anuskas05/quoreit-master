 "use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isCookiesPage = pathname === "/Policies/Cookies-Legal";

  return (
    <html lang="en">
      <head>
        {/* ✅ Cookiebot script */}
        <Script
          id="cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="16f66979-8395-44dd-9ee9-dcc595a2bd70"
          data-blockingmode="auto"
          type="text/javascript"
          strategy="afterInteractive"
        />
      </head>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        {!isCookiesPage && <Navbar />}
        <main className="min-h-screen flex flex-col justify-between">
          <div className="flex-grow">{children}</div>
          {!isCookiesPage && <Footer />}
        </main>
      </body>
    </html>
  );
}
