'use client';
export const dynamic = 'force-dynamic';

import nextDynamic from 'next/dynamic';
import StickyHeader from '@/components/StickyHeader';
import { useTranslation } from 'react-i18next';

const AdminLoginPage = dynamic(() => import('@/components/AdminLoginPage'), {
  ssr: false,
  loading: () => <div>Loading login...</div>,
});

export default function AdminLogin() {
  return <AdminLoginPage />;
}
