import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Login - ${siteConfig.name}`,
  description: 'Authentication forms built using the components.'
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <div className='container'>{children}</div>;
}
