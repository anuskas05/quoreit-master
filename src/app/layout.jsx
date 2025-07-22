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
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="78869508-adbc-4a8b-af19-83bdf0866c05" data-blockingmode="auto" type="text/javascript"></script>
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
