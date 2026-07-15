'use client';

import { ArticleCard } from './ArticleCard';
import { Article } from '@/types';
import { usePagination } from '@/hooks';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface ArticlesGridProps {
  searchQuery?: string;
  selectedCategory?: string;
}

export function ArticlesGrid({ searchQuery = '', selectedCategory = '' }: ArticlesGridProps) {
  const pagination = usePagination();

  // Mock data - replace with real data from API filtered by search and category
  const mockArticles: Article[] = [
    {
      id: '1',
      title: 'Annual Convocation 2024',
      slug: 'annual-convocation-2024',
      excerpt: 'Join us for the 50th annual convocation ceremony',
      content: 'Full content here',
      category: 'announcements',
      tags: ['convocation'],
      author: { id: '1', name: 'John Doe', email: 'john@example.com', role: 'editor', isActive: true, createdAt: new Date(), updatedAt: new Date() },
      status: 'published',
      featured: true,
      views: 1250,
      likes: 145,
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: new Date(),
    },
    {
      id: '2',
      title: 'Innovation Challenge Winners',
      slug: 'innovation-challenge',
      excerpt: 'Students win international innovation challenge',
      content: 'Full content here',
      category: 'features',
      tags: ['innovation'],
      author: { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'editor', isActive: true, createdAt: new Date(), updatedAt: new Date() },
      status: 'published',
      featured: true,
      views: 2100,
      likes: 320,
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: new Date(),
    },
    {
      id: '3',
      title: 'Sports Week 2024',
      slug: 'sports-week-2024',
      excerpt: 'Campus sports competitions',
      content: 'Full content here',
      category: 'sports',
      tags: ['sports'],
      author: { id: '3', name: 'Mike Johnson', email: 'mike@example.com', role: 'editor', isActive: true, createdAt: new Date(), updatedAt: new Date() },
      status: 'published',
      featured: false,
      views: 890,
      likes: 120,
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: new Date(),
    },
    {
      id: '4',
      title: 'New Library Opening',
      slug: 'library-opening',
      excerpt: 'State-of-the-art library facilities',
      content: 'Full content here',
      category: 'news',
      tags: ['infrastructure'],
      author: { id: '4', name: 'Sarah Williams', email: 'sarah@example.com', role: 'editor', isActive: true, createdAt: new Date(), updatedAt: new Date() },
      status: 'published',
      featured: false,
      views: 1340,
      likes: 210,
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: new Date(),
    },
    {
      id: '5',
      title: 'Entrepreneurship Club',
      slug: 'entrepreneurship-club',
      excerpt: 'Join our entrepreneurship club',
      content: 'Full content here',
      category: 'campus_life',
      tags: ['club'],
      author: { id: '5', name: 'David Brown', email: 'david@example.com', role: 'editor', isActive: true, createdAt: new Date(), updatedAt: new Date() },
      status: 'published',
      featured: false,
      views: 650,
      likes: 95,
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: new Date(),
    },
    {
      id: '6',
      title: 'Scholarship Opportunities',
      slug: 'scholarship-opportunities',
      excerpt: 'Apply for scholarships',
      content: 'Full content here',
      category: 'announcements',
      tags: ['scholarship'],
      author: { id: '6', name: 'Emily Davis', email: 'emily@example.com', role: 'editor', isActive: true, createdAt: new Date(), updatedAt: new Date() },
      status: 'published',
      featured: false,
      views: 2200,
      likes: 450,
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: new Date(),
    },
  ];

  // Filter articles based on search and category
  let filteredArticles = mockArticles;
  if (searchQuery) {
    filteredArticles = filteredArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  if (selectedCategory) {
    filteredArticles = filteredArticles.filter((article) => article.category === selectedCategory);
  }

  pagination.setTotal(filteredArticles.length);

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredArticles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ArticleCard article={article} />
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => pagination.prevPage()}
          disabled={!pagination.canGoPrev}
          className="p-2 border border-neutral-300 rounded-lg hover:bg-neutral-100 disabled:opacity-50 transition"
        >
          <HiChevronLeft />
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: pagination.totalPages }).map((_, i) => (
            <button
              key={i + 1}
              onClick={() => pagination.goToPage(i + 1)}
              className={`px-3 py-1 rounded ${
                pagination.page === i + 1
                  ? 'bg-primary-600 text-white'
                  : 'border border-neutral-300 hover:bg-neutral-100'
              } transition`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => pagination.nextPage()}
          disabled={!pagination.canGoNext}
          className="p-2 border border-neutral-300 rounded-lg hover:bg-neutral-100 disabled:opacity-50 transition"
        >
          <HiChevronRight />
        </button>
      </div>
    </section>
  );
}
