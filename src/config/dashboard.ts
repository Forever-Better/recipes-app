import type { DashboardConfig } from '@/types';

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: 'Bookmarks',
      href: '/dashboard/bookmarks',
      icon: 'bookmark'
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: 'settings'
    }
  ]
};
