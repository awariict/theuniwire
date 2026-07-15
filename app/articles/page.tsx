'use client';

import { useState } from 'react';
import { ArticlesGrid } from '@/components/features/articles/ArticlesGrid';
import { SearchBar } from '@/components/features/SearchBar';

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">All Articles</h1>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>
      <ArticlesGrid searchQuery={searchQuery} selectedCategory={selectedCategory} />
    </div>
  );
}
