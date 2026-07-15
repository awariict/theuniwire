'use client';

import { ArticleCard } from './ArticleCard';
import { Article } from '@/types';
import { motion } from 'framer-motion';

interface LatestArticlesProps {
  articles?: Article[];
}

export function LatestArticles({ articles = [] }: LatestArticlesProps) {
  // Mock data - replace with real data from API
  const mockArticles: Article[] = [
    {
      id: '3',
      title: 'Campus Sports Week: Athletes Compete for Glory',
      slug: 'campus-sports-week',
      excerpt: 'Exciting competitions as athletes from various departments battle for supremacy.',
      content: 'Full content here',
      category: 'sports',
      tags: ['sports', 'competition'],
      author: { id: '2', name: 'Mike Johnson', email: 'mike@example.com', role: 'editor', isActive: true, createdAt: new Date(), updatedAt: new Date() },
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
      title: 'New Library Wing Opens: State-of-the-Art Facilities',
      slug: 'new-library-wing',
      excerpt: 'The university inaugurated its new library wing with modern facilities and technology.',
      content: 'Full content here',
      category: 'news',
      tags: ['infrastructure', 'university'],
      author: { id: '3', name: 'Sarah Williams', email: 'sarah@example.com', role: 'editor', isActive: true, createdAt: new Date(), updatedAt: new Date() },
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
      title: 'Join Our Entrepreneurship Club: Build Your Dream',
      slug: 'entrepreneurship-club',
      excerpt: 'Are you interested in starting a business? Join our growing entrepreneurship club.',
      content: 'Full content here',
      category: 'campus_life',
      tags: ['entrepreneurship', 'club'],
      author: { id: '4', name: 'David Brown', email: 'david@example.com', role: 'editor', isActive: true, createdAt: new Date(), updatedAt: new Date() },
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
      title: 'Scholarship Opportunities: Apply Now',
      slug: 'scholarship-opportunities',
      excerpt: 'Multiple scholarship opportunities available for deserving students. Apply before the deadline.',
      content: 'Full content here',
      category: 'announcements',
      tags: ['scholarship', 'opportunity'],
      author: { id: '5', name: 'Emily Davis', email: 'emily@example.com', role: 'editor', isActive: true, createdAt: new Date(), updatedAt: new Date() },
      status: 'published',
      featured: false,
      views: 2200,
      likes: 450,
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: new Date(),
    },
  ];

  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-neutral-900 mb-2">Latest Articles</h2>
        <p className="text-neutral-600">Stay updated with the most recent news from your universities</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {(articles.length > 0 ? articles : mockArticles).map((article, index) => (
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
    </section>
  );
}
