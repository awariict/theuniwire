'use client';

import Link from 'next/link';
import { ARTICLE_CATEGORIES, CATEGORY_LABELS } from '@/constants';
import { HiChevronRight } from 'react-icons/hi';

const categoryIcons: Record<string, string> = {
  news: '📰',
  events: '🎉',
  features: '⭐',
  announcements: '📢',
  campus_life: '🎓',
  sports: '⚽',
  entertainment: '🎬',
  academic: '📚',
};

export function CategoriesGrid() {
  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-neutral-900 mb-2">Browse by Category</h2>
        <p className="text-neutral-600">Explore news and events by category</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(ARTICLE_CATEGORIES).map(([key, value]) => (
          <Link
            key={key}
            href={`/articles?category=${value}`}
            className="group relative overflow-hidden rounded-lg bg-white border border-neutral-200 p-6 hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center justify-center text-center gap-3">
              <span className="text-4xl">{categoryIcons[value]}</span>
              <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition">
                {CATEGORY_LABELS[value]}
              </h3>
              <HiChevronRight className="text-neutral-400 group-hover:text-primary-600 transition" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
