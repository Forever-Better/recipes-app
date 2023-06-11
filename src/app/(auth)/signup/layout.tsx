import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Signup - ${siteConfig.name}`,
  description: 'Authentication forms built using the components.'
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
