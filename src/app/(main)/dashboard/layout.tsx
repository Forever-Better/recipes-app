import type { Metadata } from 'next';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { DashboardNav } from '@/components/screens/Dashboard/Nav';
import { dashboardConfig } from '@/config/dashboard';
import { siteConfig } from '@/config/site';
import { getCurrentUser } from '@/lib/session';

export const metadata: Metadata = {
  title: `Dashboard - ${siteConfig.name}`
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();

  return (
    <div className='flex space-y-8 flex-col min-h-screen'>
      <Header user={user} />
      <div className='container grid flex-1 gap-12 md:grid-cols-[200px_1fr]'>
        <aside className='hidden w-[200px] flex-col md:flex'>
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className='flex-1'>
          <section>{children}</section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
