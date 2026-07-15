'use client';

import Link from 'next/link';
import { HiShieldExclamation } from 'react-icons/hi';

export function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <HiShieldExclamation className="mx-auto mb-4 text-red-600" size={64} />
        <h1 className="text-4xl font-bold text-neutral-900 mb-2">Access Denied</h1>
        <p className="text-lg text-neutral-600 mb-8">
          You don't have permission to access this page.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/" className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
            Go Home
          </Link>
          <Link href="/login" className="px-6 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
