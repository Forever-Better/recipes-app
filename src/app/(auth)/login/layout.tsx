import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Authentication forms built using the components.'
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
