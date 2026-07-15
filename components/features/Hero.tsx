'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Stay Connected to Your University
            </h1>
            <p className="text-lg text-primary-100 mb-8">
              Get the latest news, events, and announcements from your favorite Nigerian universities in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/articles"
                className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition"
              >
                Explore Articles
              </Link>
              <Link
                href="/register"
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-primary-700 transition"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <div className="bg-primary-700/50 rounded-lg p-8 border border-primary-500/50">
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-primary-600/50 rounded h-20 animate-pulse"></div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
