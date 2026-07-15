'use client';

import { useState, useEffect } from 'react';
import { FeaturedArticles } from '@/components/features/articles/FeaturedArticles';
import { LatestArticles } from '@/components/features/articles/LatestArticles';
import { Hero } from '@/components/features/Hero';
import { CategoriesGrid } from '@/components/features/CategoriesGrid';
import { useAuth } from '@/hooks';

export default function Home() {
  const { user, loading } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col gap-12 py-8">
      <Hero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CategoriesGrid />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedArticles />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <LatestArticles />
      </div>
    </div>
  );
}
