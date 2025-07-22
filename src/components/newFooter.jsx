'use client';

import Link from "next/link";

export default function Footer2() {
 
 

  return (<>
  


     <footer className="bg-[#213c42] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo Section */}
        <div>
          <div className="text-white text-2xl font-bold mb-4">
            
            <div className="text-white text-lg">QuoreIT</div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">What we do</Link></li>
            <li><Link href="#">About us</Link></li>
            <li><Link href="#">Our Brands</Link></li>
            <li><Link href="#">Newsroom</Link></li>
            <li><Link href="#">Work for us</Link></li>
            <li><Link href="#">Contact us</Link></li>
            <li><Link href="#">Wellbeing Hub</Link></li>
          </ul>
        </div>

        {/* Insights */}
        <div>
          <h4 className="font-bold mb-3">Insights</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Tech Talks</Link></li>
            <li><Link href="#">Digital Leadership Report 2025</Link></li>
            <li><Link href="#">Diversity & Inclusion</Link></li>
            <li><Link href="#">Women in Tech</Link></li>
            <li><Link href="#">Cybersecurity</Link></li>
            <li><Link href="#">Comment & Analysis</Link></li>
            <li><Link href="#">Blogs</Link></li>
            <li><Link href="#">Tech Flix</Link></li>
            <li><Link href="#">Parliamentary Tech Champions</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-bold mb-3">Follow us</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="https://linkedin.com" target="_blank">LinkedIn</Link></li>
            <li><Link href="https://twitter.com" target="_blank">Twitter</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex gap-6 flex-wrap justify-center">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Cookies</Link>
          <Link href="#">Accessibility Statement</Link>
          <Link href="#">Modern Slavery</Link>
        </div>
        <div className="text-white/70 mt-2 md:mt-0">&copy; {new Date().getFullYear()} QuoreIT</div>
      </div>
    </footer></>
  );
}