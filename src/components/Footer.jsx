import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"; // Adjust if renamed

export default function Footer() {
  return (
    <footer className="bg-[#001f26] text-white dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <div className="bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] p-4 w-fit rounded">
            <p className="font-bold text-lg leading-5 text-black">
             QuoreIT
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 dark:text-gray-400">
            {[
              { label: "Find a job", path: "/jobs" },
              { label: "Submit a vacancy", path: "/submit-vacancy" },
              { label: "What we do", path: "/about" },
              { label: "News & Events", path: "/news-events" },
              { label: "Contact us", path: "/contact" },
            ].map(({ label, path }, idx) => (
              <li key={idx}>
                <Link
                  href={path}
                  className="hover:text-[#00d9a6] transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Policies</h3>
          <ul className="space-y-2 text-gray-300 dark:text-gray-400">
            {[
              { label: "Privacy Policy", path: "/privacy" },
              { label: "Cookies & Legal", path: "/legal" },
              { label: "Modern Slavery Statement", path: "/slavery-statement" },
            ].map(({ label, path }, idx) => (
              <li key={idx}>
                <Link
                  href={path}
                  className="hover:text-[#00d9a6] transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow us</h3>
          <div className="flex gap-4 text-gray-300 dark:text-gray-400">
            <Link href="#" aria-label="Facebook" className="hover:text-[#00d9a6]">
              <Facebook />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-[#00d9a6]">
              <Linkedin />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-[#00d9a6]">
              <Twitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] py-7 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <Image
            src={logo}
            alt="QuoreIt"
            width={50}
            height={50} 
              className="h-16 w-auto md:h-20"
            priority
          />
          <p className="text-lg text-black font-medium">
            <Link href="#" className="underline hover:text-white">Powered</Link>{" "}
            <span>by</span>{" "}
            <Link href="#" className="underline hover:text-white">QuoreIT</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}