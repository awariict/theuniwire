'use client';

import { Article } from '@/types';
import { formatDate, getReadingTime } from '@/utils';
import { CATEGORY_LABELS } from '@/constants';
import { HiCalendar, HiClock, HiUser } from 'react-icons/hi';

interface ArticleDetailProps {
  slug: string;
}

export function ArticleDetail({ slug }: ArticleDetailProps) {
  // Mock article - replace with real data from API
  const article: Article = {
    id: '1',
    title: 'Breaking: New Research Center Opens at University',
    slug: slug,
    excerpt: 'The university has officially launched its new research center dedicated to technological innovation.',
    content: `
      <p>The university is proud to announce the official opening of its state-of-the-art research center. This new facility represents a significant investment in academic excellence and technological advancement.</p>
      
      <h2>What Makes This Center Special</h2>
      <p>The research center is equipped with the latest technology and facilities. It will serve as a hub for innovation and collaboration among faculty, students, and industry partners.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Advanced laboratory equipment</li>
        <li>Collaboration spaces for interdisciplinary research</li>
        <li>State-of-the-art computing facilities</li>
        <li>Industry partnership programs</li>
      </ul>
      
      <h2>Impact on Students</h2>
      <p>This new facility will provide students with hands-on experience in cutting-edge research and development. It opens up numerous opportunities for internships and collaborative projects.</p>
      
      <p>The center is expected to generate breakthrough innovations and contribute to the advancement of knowledge across multiple disciplines.</p>
    `,
    category: 'news',
    tags: ['research', 'innovation', 'technology'],
    author: {
      id: '1',
      name: 'Dr. John Smith',
      email: 'john@example.com',
      avatar: '',
      role: 'editor',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    status: 'published',
    featured: true,
    views: 2500,
    likes: 340,
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    publishedAt: new Date('2024-01-15'),
  };

  const readingTime = getReadingTime(article.content);

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-4">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
            {CATEGORY_LABELS[article.category as keyof typeof CATEGORY_LABELS]}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">{article.title}</h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-neutral-600 border-b border-neutral-200 pb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
              {article.author.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-neutral-900">{article.author.name}</p>
              <p className="text-sm text-neutral-500">Author</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <HiCalendar size={18} />
            <span>{formatDate(article.publishedAt || article.createdAt)}</span>
          </div>

          <div className="flex items-center gap-2">
            <HiClock size={18} />
            <span>{readingTime} min read</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {article.thumbnail && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <img src={article.thumbnail} alt={article.title} className="w-full h-96 object-cover" />
        </div>
      )}

      {/* Content */}
      <div className="prose max-w-none mb-12" dangerouslySetInnerHTML={{ __html: article.content }} />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 border-t border-b border-neutral-200 py-6">
        {article.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">
            #{tag}
          </span>
        ))}
      </div>

      {/* Engagement Stats */}
      <div className="mt-12 p-6 bg-neutral-50 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl font-bold text-primary-600">{article.views}</p>
            <p className="text-neutral-600 text-sm">Views</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-600">{article.likes}</p>
            <p className="text-neutral-600 text-sm">Likes</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-neutral-900">42</p>
            <p className="text-neutral-600 text-sm">Comments</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-neutral-900">150</p>
            <p className="text-neutral-600 text-sm">Shares</p>
          </div>
        </div>
      </div>
    </article>
  );
}
