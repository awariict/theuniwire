'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useAuth } from '@/hooks';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/articles', label: 'Articles' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="font-bold text-lg text-neutral-900">TheUniWire</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth Links */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              {(user.role === 'admin' || user.role === 'super_admin') && (
                <Link href="/admin" className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition">
                  Dashboard
                </Link>
              )}
              <Link href="/profile" className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition">
                {user.name}
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition">
                Sign In
              </Link>
              <Link href="/register" className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-neutral-100 rounded-lg transition">
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block text-sm font-medium text-neutral-600 hover:text-primary-600 transition">
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-neutral-200 space-y-2">
              {user ? (
                <>
                  {(user.role === 'admin' || user.role === 'super_admin') && (
                    <Link href="/admin" className="block px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition">
                      Dashboard
                    </Link>
                  )}
                  <Link href="/profile" className="block text-sm font-medium text-neutral-600 hover:text-primary-600 transition">
                    {user.name}
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login" className="block text-sm font-medium text-neutral-600 hover:text-primary-600 transition">
                    Sign In
                  </Link>
                  <Link href="/register" className="block px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
