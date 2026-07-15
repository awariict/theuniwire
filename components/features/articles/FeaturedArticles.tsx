'use client';

import { motion } from 'framer-motion';
import { Article } from '@/types';
import { ArticleCard } from './ArticleCard';

interface FeaturedArticlesProps {
  articles?: Article[];
}

export function FeaturedArticles({ articles = [] }: FeaturedArticlesProps) {
  // Mock data - replace with real data from API
  const mockArticles: Article[] = [
    {
      id: '1',
      title: 'Annual Convocation 2024: Excellence in Education',
      slug: 'annual-convocation-2024',
      excerpt: 'Join us for the 50th annual convocation ceremony celebrating academic excellence and student achievements.',
      content: 'Full content here',
      category: 'announcements',
      tags: ['convocation', 'academic'],
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
      title: 'Students Win International Innovation Challenge',
      slug: 'students-win-innovation',
      excerpt: 'Our students demonstrated exceptional innovation competing against universities worldwide.',
      content: 'Full content here',
      category: 'features',
      tags: ['innovation', 'achievement'],
      author: { id: '1', name: 'Jane Smith', email: 'jane@example.com', role: 'editor', isActive: true, createdAt: new Date(), updatedAt: new Date() },
      status: 'published',
      featured: true,
      views: 2100,
      likes: 320,
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: new Date(),
    },
  ];

  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-neutral-900 mb-2">Featured Stories</h2>
        <p className="text-neutral-600">Trending articles from across Nigerian universities</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {(articles.length > 0 ? articles : mockArticles).map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ArticleCard article={article} featured />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
