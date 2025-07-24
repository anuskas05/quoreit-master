 "use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

 const hideLayout =
  pathname === "/Policies/Cookies-Legal" ||
  pathname === "/Policies/Modern-Slavery-Statement" ||
  pathname === "/Quick-Links/What-we-do" ||
  pathname === "/Quick-Links/About-us" ||
  pathname === "/Quick-Links/Our-Brands" ||
  pathname === "/Quick-Links/Newsroom" ||
  pathname === "/Quick-Links/Work-for-us" ||
  pathname === "/Quick-Links/Contact-us" ||
  pathname === "/Quick-Links/Wellbeing-Hub" ||
  pathname === "/Insights/Tech-Talks";


  return (
    <html lang="en">
      <head>
        {/* ✅ Cookiebot preview script */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/78869508-adbc-4a8b-af19-83bdf0866c05/cd.js"
          data-cbid="78869508-adbc-4a8b-af19-83bdf0866c05"
          data-blockingmode="auto"
          data-culture="EN"
          type="text/javascript"
        ></script>
      </head>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        {!hideLayout && <Navbar />}
        <main className="min-h-screen flex flex-col justify-between">
          <div className="flex-grow">{children}</div>
          {!hideLayout && <Footer />}
        </main>
      </body>
    </html>
  );
}
