'use client';

import { useAuth } from '@/hooks';
import { AdminDashboard } from '@/components/features/admin/AdminDashboard';
import { Unauthorized } from '@/components/common/Unauthorized';

export default function AdminPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user || (user.role !== 'admin' && user.role !== 'super_admin')) {
    return <Unauthorized />;
  }

  return <AdminDashboard />;
}
