import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
