'use client';

import { useState, useEffect } from 'react';
import { ArticleDetail } from '@/components/features/articles/ArticleDetail';
import { CommentSection } from '@/components/features/comments/CommentSection';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ArticleDetail slug={params.slug} />
      <div className="mt-12">
        <CommentSection articleSlug={params.slug} />
      </div>
    </div>
  );
}
