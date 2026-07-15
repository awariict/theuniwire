'use client';

import Link from 'next/link';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-400 border-t border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4">TheUniWire</h3>
            <p className="text-sm text-neutral-400">
              Your source for news, events, and announcements from Nigerian universities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-white transition">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/articles?category=news" className="hover:text-white transition">
                  News
                </Link>
              </li>
              <li>
                <Link href="/articles?category=events" className="hover:text-white transition">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/articles?category=features" className="hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/articles?category=sports" className="hover:text-white transition">
                  Sports
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <HiMail size={16} />
                <a href="mailto:info@theuniwire.ng" className="hover:text-white transition">
                  info@theuniwire.ng
                </a>
              </div>
              <div className="flex items-center gap-2">
                <HiPhone size={16} />
                <a href="tel:+2348000000000" className="hover:text-white transition">
                  +234 (0) 800 000 0000
                </a>
              </div>
              <div className="flex items-start gap-2">
                <HiLocationMarker size={16} className="mt-0.5" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500">&copy; {currentYear} TheUniWire. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-neutral-400 hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-400 hover:text-white transition">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-neutral-400 hover:text-white transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
