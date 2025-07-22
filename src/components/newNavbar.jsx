'use client';

import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleInsights = () => {
    setIsInsightsOpen(!isInsightsOpen);
  };

  const navItems = [
    { label: 'What we do', href: '#' },
    { label: 'About us', href: '#' },
    { label: 'Our Brands', href: '#' },
    { label: 'Work for us', href: '#' },
    { label: 'Newsroom', href: '#' }
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-22">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/images/nash_logo.png"
                alt=" Nash Logo"
                width={320}
                height={120}
                className="h-16 w-auto md:h-20 hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Insights Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleInsights}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
                >
                  Insights
                  <ChevronDown 
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      isInsightsOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                {/* Dropdown Menu */}
                {isInsightsOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Articles
                    </Link >
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Reports
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Whitepapers
                    </Link >
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Us Button - Desktop */}
          <div className="hidden lg:block">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-200">
              Contact us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Insights Dropdown */}
              <div className="px-3 py-2">
                <button
                  onClick={toggleInsights}
                  className="text-gray-600 hover:text-gray-900 flex items-center text-base font-medium w-full"
                >
                  Insights
                  <ChevronDown 
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      isInsightsOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                {isInsightsOpen && (
                  <div className="mt-2 pl-4 space-y-1">
                    <Link href="#" className="block py-2 text-sm text-gray-600 hover:text-gray-900">
                      Articles
                    </Link >
                    <Link href="#" className="block py-2 text-sm text-gray-600 hover:text-gray-900">
                      Reports
                    </Link >
                    <Link href="#" className="block py-2 text-sm text-gray-600 hover:text-gray-900">
                      Whitepapers
                    </Link >
                  </div>
                )}
              </div>
              
              {/* Mobile Contact Button */}
              <div className="px-3 py-2">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded text-sm font-medium w-full transition-colors duration-200">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;