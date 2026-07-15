'use client';

import { useAuth } from '@/hooks';
import { UserManagement } from '@/components/features/admin/UserManagement';
import { Unauthorized } from '@/components/common/Unauthorized';

export default function AdminUsersPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user?.role !== 'super_admin') {
    return <Unauthorized />;
  }

  return <UserManagement />;
}
