'use client';

import { useAuth } from '@/hooks';
import { ArticleManagement } from '@/components/features/admin/ArticleManagement';
import { Unauthorized } from '@/components/common/Unauthorized';

export default function AdminArticlesPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user || (user.role !== 'admin' && user.role !== 'super_admin')) {
    return <Unauthorized />;
  }

  return <ArticleManagement />;
}
