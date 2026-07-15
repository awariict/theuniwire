'use client';

import Link from 'next/link';
import { formatTimeAgo } from '@/utils';
import { Article } from '@/types';
import { HiEye, HiHeart, HiClock } from 'react-icons/hi';
import { CATEGORY_LABELS, CATEGORY_COLORS } from '@/constants';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const categoryColor = CATEGORY_COLORS[article.category as keyof typeof CATEGORY_COLORS] || 'bg-neutral-100';

  return (
    <Link href={`/articles/${article.slug}`}>
      <div className={`group cursor-pointer rounded-lg border border-neutral-200 overflow-hidden hover:shadow-lg transition h-full ${
        featured ? 'flex flex-col' : ''
      }`}>
        {/* Thumbnail */}
        <div className="relative bg-neutral-200 overflow-hidden h-48 w-full group-hover:opacity-90 transition">
          {article.thumbnail && (
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col gap-3">
          {/* Category Badge */}
          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColor}`}>
              {CATEGORY_LABELS[article.category as keyof typeof CATEGORY_LABELS]}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-neutral-600 text-sm line-clamp-2">{article.excerpt}</p>

          {/* Author & Date */}
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
              {article.author.name.charAt(0)}
            </div>
            <span>{article.author.name}</span>
            <span>•</span>
            <span>{formatTimeAgo(article.publishedAt || article.createdAt)}</span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-xs text-neutral-500 pt-4 border-t border-neutral-200 mt-auto">
            <div className="flex items-center gap-1">
              <HiEye size={16} />
              <span>{article.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <HiHeart size={16} />
              <span>{article.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
